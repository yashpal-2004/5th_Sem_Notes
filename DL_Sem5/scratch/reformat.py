import os
import re

lectures_dir = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures'

katex_snippet = '''    <!-- KaTeX for LaTeX rendering -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '\\\\(', right: '\\\\)', display: false}]});"></script>
'''

for file in ['lecture-03.html', 'lecture-04.html', 'lecture-05.html', 'lecture-06.html', 'lecture-07.html']:
    filepath = os.path.join(lectures_dir, file)
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add KaTeX to <head> if missing
    if 'katex.min.css' not in content:
        content = content.replace('</head>', f'{katex_snippet}</head>')

    # 2. Fix script src
    content = content.replace('src="../js/main.js"', 'src="../js/script.js"')

    # 3. Replace <main id="mainContent"> with <main id="notesContent">
    content = content.replace('id="mainContent"', 'id="notesContent"')

    # 4. Convert <article class="topic-card" id="topic-X"> to <section class="topic-section" id="topic-X">
    content = content.replace('<article class="topic-card"', '<section class="topic-section"')
    content = content.replace('</article>', '</section>')

    # 5. Fix executive summary container if present
    content = content.replace('class="short-notes-section"', 'class="topic-section"')

    # 6. Add collapsible wrapper to topic header & body
    # Replace <div class="topic-header"> with <div class="topic-header" onclick="toggleSection('content-X')">
    # Replace <div class="topic-body"> with <div class="collapsible-content" id="content-X" style="max-height: none;">
    def topic_replacer(match):
        t_num = match.group(1)
        header_title = match.group(2)
        body_content = match.group(3)

        res = f'''<div class="topic-header" onclick="toggleSection('content-{t_num}')">
                    <div class="topic-number">{t_num}</div>
                    <h2>{header_title}</h2>
                </div>
                <div class="collapsible-content" id="content-{t_num}" style="max-height: none;">
{body_content}
                </div>'''
        return res

    # Regex matching topic-header and topic-body
    pattern = re.compile(
        r'<div class="topic-header">\s*<span class="topic-number">Topic (\d+)</span>\s*<h2>(.*?)</h2>\s*</div>\s*<div class="topic-body">(.*?)</div>\s*</section>',
        re.DOTALL
    )

    content = pattern.sub(lambda m: f'''<div class="topic-header" onclick="toggleSection('content-{m.group(1)}')">
                    <div class="topic-number">{m.group(1)}</div>
                    <h2>{m.group(2)}</h2>
                </div>
                <div class="collapsible-content" id="content-{m.group(1)}" style="max-height: none;">
{m.group(3)}
                </div>
            </section>''', content)

    # Executive summary / short notes header fix
    content = re.sub(
        r'<div class="short-notes-header">\s*<div class="short-notes-title-group">(.*?)<h2>Executive Summary & Formula Sheet</h2>\s*</div>\s*<span class="badge">(.*?)</span>\s*</div>\s*<div class="short-notes-content">(.*?)</div>',
        r'''<div class="topic-header" onclick="toggleSection('content-short-notes')">
                    <div class="topic-number" style="background:transparent; color: var(--blue); width: auto; margin-right: 0.5rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    </div>
                    <h2>Executive Summary & Formula Sheet</h2>
                </div>
                <div id="content-short-notes" class="collapsible-content" style="max-height: none;">
\3
                </div>''',
        content,
        flags=re.DOTALL
    )

    # 7. Add back to top button if missing
    if 'id="backToTop"' not in content:
        content = content.replace('</body>', '<button id="backToTop" onclick="scrollToTop()">↑</button>\n</body>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated files successfully')
