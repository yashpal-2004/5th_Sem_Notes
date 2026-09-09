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

    # Convert \text{ if } and \text{ else } inside math equations to proper LaTeX case/text syntax
    content = content.replace(
        '$$f(z) = z \\text{ if } z > 0 \\text{ else } \\alpha z \\quad (\\text{typically } \\alpha = 0.01)$$',
        '$$f(z) = \\begin{cases} z & \\text{if } z > 0 \\\\ \\alpha z & \\text{if } z \\le 0 \\end{cases} \\quad (\\text{typically } \\alpha = 0.01)$$'
    )

    content = content.replace(
        '$$f(z) = \\max(0, z)$$ Its derivative is constant: <div class="formula-box">$$f\'(z) = 1 \\text{ if } z > 0 \\text{ else } 0$$',
        '$$f(z) = \\max(0, z)$$ Its derivative is constant: <div class="formula-box">$$f\'(z) = \\begin{cases} 1 & \\text{if } z > 0 \\\\ 0 & \\text{if } z < 0 \\end{cases}$$'
    )

    content = content.replace(
        '$$f(z) = z \\text{ if } z > 0 \\text{ else } \\alpha(e^z - 1)$$',
        '$$f(z) = \\begin{cases} z & \\text{if } z > 0 \\\\ \\alpha(e^z - 1) & \\text{if } z \\le 0 \\end{cases}$$'
    )

    # Ensure \text{...} words in KaTeX have spaces
    content = content.replace('\\text{if}', '\\text{if }')
    content = content.replace('\\text{else}', '\\text{else }')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Cleaned KaTeX piecewise equations across all lectures!')
