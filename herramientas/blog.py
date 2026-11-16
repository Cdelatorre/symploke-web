# -*- coding: utf-8 -*-
"""Convierte los borradores de blog-articulos/*.md en maqueta/blog-data.js (window.BLOG).

Uso:  python herramientas/blog.py
Volver a ejecutarlo cada vez que se cambie un borrador. El orden y la terapia de cada
artículo (para la etiqueta, el dibujo y el enlace) están en ARTICULOS.
"""
import html, json, math, os, re

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CARPETA = os.path.join(RAIZ, 'blog-articulos')
SALIDA = os.path.join(RAIZ, 'maqueta', 'blog-data.js')

# (slug del artículo, slug de la terapia en motivos-data.js), en el orden en que se muestran
ARTICULOS = [
    ('ansiedad-anticipatoria', 'ansiedad'),
    ('dependencia-emocional', 'pareja'),
    ('ataque-de-panico', 'ansiedad'),
    ('etapas-del-duelo', 'duelo'),
    ('insomnio-por-ansiedad', 'insomnio'),
    ('burnout', 'ansiedad'),
    ('tdah-en-adultos', 'tdah'),
    ('superar-una-infidelidad', 'pareja'),
    ('baja-autoestima', 'autoestima'),
    ('ansiedad-y-depresion', 'depresion'),
]


def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r'\[([^\]]+)\]\(([^)\s]+)\)', r'<a href="\2">\1</a>', t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    t = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', t)
    return t


def cabecera(texto):
    m = re.match(r'\s*<!--(.*?)-->', texto, re.S)
    head = m.group(1) if m else ''
    cuerpo = texto[m.end():] if m else texto
    desc = re.search(r'Descripci[oó]n[^:]*:\s*(.+)', head)
    seo = re.search(r'^.*\):[ \t]*(.+?)[ \t]*<-[ \t]*recomendado', head, re.M) or re.search(r'T[ií]tulo de Google[^:]*:\s*(.+)', head)
    return cuerpo, (desc.group(1).strip() if desc else ''), (seo.group(1).strip() if seo else '')


def convertir(cuerpo):
    titulo, partes, faq, primero, palabras = '', [], False, True, 0
    for bloque in re.split(r'\n\s*\n', cuerpo.strip()):
        lineas = [l.rstrip() for l in bloque.strip().split('\n')]
        if not lineas or not lineas[0]:
            continue
        palabras += len(re.findall(r'\w+', bloque))
        if lineas[0].startswith('# '):
            titulo = lineas[0][2:].strip()
            continue
        if lineas[0].startswith('## '):
            h = lineas[0][3:].strip()
            if faq:
                partes.append('</div></details>')
            faq = h.lower().startswith('preguntas frecuentes')
            if faq:   # desplegable como en las terapias (2026-11-17): el texto sigue en la página para Google
                partes.append('<details class="a-preguntas"><summary><span class="qi" aria-hidden="true">?</span>'
                              '<span class="t">%s <span class="arr" aria-hidden="true">→</span></span></summary>'
                              '<div class="faq desplegable">' % inline(h))
            else:
                partes.append('<h2>%s</h2>' % inline(h))
            continue
        if all(re.match(r'\d+\.\s', l) for l in lineas):
            partes.append('<ol>%s</ol>' % ''.join('<li>%s</li>' % inline(re.sub(r'^\d+\.\s+', '', l)) for l in lineas))
            continue
        if all(l.startswith('- ') for l in lineas):
            partes.append('<ul>%s</ul>' % ''.join('<li>%s</li>' % inline(l[2:]) for l in lineas))
            continue
        if faq and re.match(r'\*\*.+\*\*$', lineas[0]) and len(lineas) > 1:
            partes.append('<details><summary><h3>%s</h3></summary><p>%s</p></details>' % (inline(lineas[0].strip('*')), inline(' '.join(lineas[1:]))))
            continue
        clase = ' class="first"' if primero else ''
        primero = False
        partes.append('<p%s>%s</p>' % (clase, inline(' '.join(lineas))))
    if faq:
        partes.append('</div></details>')
    return titulo, ''.join(partes), palabras


def main():
    archivos = {re.sub(r'^\d{4}-\d{2}-\d{2}-|\.md$', '', f): f for f in os.listdir(CARPETA) if f.endswith('.md')}
    datos = []
    for slug, motivo in ARTICULOS:
        if slug not in archivos:
            print('FALTA', slug)
            continue
        with open(os.path.join(CARPETA, archivos[slug]), encoding='utf-8') as fh:
            cuerpo, desc, seo = cabecera(fh.read())
        titulo, cuerpo_html, palabras = convertir(cuerpo)
        datos.append({'slug': slug, 'motivo': motivo, 'title': titulo, 'seo': seo, 'desc': desc,
                      'mins': max(1, math.ceil(palabras / 200)), 'html': cuerpo_html})
        print('%-26s %2d min  %s' % (slug, datos[-1]['mins'], titulo))
    js = ('/* GENERADO por herramientas/blog.py a partir de blog-articulos/*.md: no editar a mano. */\n'
          'window.BLOG=%s;\n'
          'window.blogBySlug=function(s){for(var i=0;i<BLOG.length;i++)if(BLOG[i].slug===s)return BLOG[i];return null;};\n'
          % json.dumps(datos, ensure_ascii=False, indent=0))
    with open(SALIDA, 'w', encoding='utf-8', newline='\n') as fh:
        fh.write(js)
    print('Escrito', os.path.relpath(SALIDA, RAIZ), '·', len(datos), 'artículos')


if __name__ == '__main__':
    main()
