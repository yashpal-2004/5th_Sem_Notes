import os
import re

lectures_dir = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures'

files = ['lecture-03.html', 'lecture-04.html', 'lecture-05.html', 'lecture-06.html', 'lecture-07.html']

for f_name in files:
    filepath = os.path.join(lectures_dir, f_name)
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix paragraph wrapping around <div class="formula-box">
    # Replace <p>text <div class="formula-box">formula</div> text</p> with clean paragraphs and formula-boxes
    content = re.sub(
        r'<p>([^<]*?)<div class="formula-box">(.*?)</div>([^<]*?)</p>',
        r'<p>\1</p>\n<div class="formula-box">\2</div>\n<p>\3</p>',
        content,
        flags=re.DOTALL
    )

    # 2. Fix KaTeX math delimiters inside formula-box
    # If formula-box contains LaTeX, wrap it in $$...$$ so KaTeX renders it as beautiful equations instead of raw text
    def katex_box_wrap(match):
        box_inner = match.group(1).strip()
        # If it doesn't already start with $$, wrap it in $$
        if not box_inner.startswith('$$') and not box_inner.startswith('\\('):
            # Check if it has LaTeX symbols like \text, \max, \frac, \alpha, \sigma
            if any(sym in box_inner for sym in ['\\text', '\\max', '\\frac', '\\alpha', '\\sigma', '\\mathbf', '\\delta', '\\lambda', '\\sum', '\\hat']):
                box_inner = f'$${box_inner}$$'
        return f'<div class="formula-box">{box_inner}</div>'

    content = re.sub(r'<div class="formula-box">(.*?)</div>', katex_box_wrap, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Formatting fixed for all lectures!')
