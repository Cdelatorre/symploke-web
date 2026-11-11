# -*- coding: utf-8 -*-
"""
Escribe dentro de cada página de terapia (ansiedad.html, depresion.html...) el texto
que monta motivo.js, para que Google y los demás buscadores lo lean sin ejecutar JavaScript.
También genera las preguntas frecuentes en formato FAQPage (JSON-LD).

CUÁNDO EJECUTARLO: después de cambiar textos en maqueta/motivos-data.js o motivo.js,
y siempre antes de trasladar la web al dominio.

    python herramientas/prerender.py

Necesita Google Chrome instalado. No hay que editar a mano lo que hay dentro de
<main id="main" class="pre">: se sobrescribe cada vez.
"""
import glob, html, io, json, os, re, subprocess, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROMES = [r'C:\Program Files\Google\Chrome\Application\chrome.exe',
           r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
           os.path.expandvars(r'%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe')]
CHROME = next((c for c in CHROMES if os.path.exists(c)), None)

AVISO = '<!-- texto escrito por herramientas/prerender.py para los buscadores: NO editar aquí (se cambia en maqueta/motivos-data.js y se vuelve a ejecutar) -->'
NOSCRIPT = '<noscript><style>main.pre{visibility:visible}</style></noscript>'


def montar(pagina):
    """Abre la página en Chrome sin ventana y recoge lo que entrega motivo.js con ?prerender."""
    url = 'file:///' + os.path.join(RAIZ, pagina).replace('\\', '/') + '?prerender'
    r = subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--virtual-time-budget=5000', '--dump-dom', url],
                       capture_output=True, timeout=90)
    dom = r.stdout.decode('utf-8', 'replace')
    m = re.search(r'<textarea id="prerender-out">(.*?)</textarea>', dom, re.S)
    if not m:
        raise RuntimeError('motivo.js no entregó el texto de ' + pagina)
    return json.loads(html.unescape(m.group(1)))


def limpiar(h):
    # los dibujos e iconos no aportan texto y pesan mucho: fuera (motivo.js los pone al abrir la página)
    return re.sub(r'<svg\b.*?</svg>', '', h, flags=re.S)


def faq_ld(url, faq):
    datos = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': url + '#preguntas',
        'url': url,
        'mainEntity': [{'@type': 'Question', 'name': q,
                        'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in faq],
    }
    return ('<script type="application/ld+json" id="faq-ld">\n'
            + json.dumps(datos, ensure_ascii=False, indent=1).replace('</', '<\\/') + '\n</script>')


def main():
    if not CHROME:
        sys.exit('No encuentro Google Chrome.')
    paginas = sorted(f for f in glob.glob(os.path.join(RAIZ, '*.html'))
                     if 'data-m="' in io.open(f, encoding='utf-8').read())
    for f in paginas:
        nombre = os.path.basename(f)
        s = io.open(f, encoding='utf-8', newline='').read()
        d = montar(nombre)
        cuerpo = limpiar(d['html'])
        # 1) el texto dentro de <main>
        s, n = re.subn(r'<main id="main"[^>]*>.*?</main>',
                       lambda _: '<main id="main" class="pre">' + AVISO + '\n' + cuerpo + '\n</main>', s, count=1, flags=re.S)
        if n != 1:
            raise RuntimeError('No encuentro <main id="main"> en ' + nombre)
        # 2) para quien navega sin JavaScript, el texto se ve
        if NOSCRIPT not in s:
            s = s.replace('<link rel="stylesheet" href="motivo.css">', '<link rel="stylesheet" href="motivo.css">\n' + NOSCRIPT, 1)
        # 3) preguntas frecuentes (FAQPage)
        s = re.sub(r'\n?<!-- preguntas frecuentes para Google[^>]*-->\n<script type="application/ld\+json" id="faq-ld">.*?</script>', '', s, flags=re.S)
        if d['faq']:
            url = re.search(r'<link rel="canonical" href="([^"]+)"', s).group(1)
            bloque = '<!-- preguntas frecuentes para Google: las genera herramientas/prerender.py -->\n' + faq_ld(url, d['faq'])
            s = s.replace('<link rel="preconnect" href="https://fonts.googleapis.com">', bloque + '\n<link rel="preconnect" href="https://fonts.googleapis.com">', 1)
        io.open(f, 'w', encoding='utf-8', newline='').write(s)
        print('%-18s %6d caracteres de texto, %2d preguntas' % (nombre, len(re.sub(r'<[^>]+>', '', cuerpo)), len(d['faq'])))


if __name__ == '__main__':
    main()
