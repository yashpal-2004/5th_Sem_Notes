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

    # Wrap isolated formula paragraphs or text formulas into formula-box
    # Replace math blocks or highlighted key formulas into <div class="formula-box">...</div>
    content = content.replace('class="formula-block"', 'class="box box-blue"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Formula boxes refined')
