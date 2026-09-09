import os
import re

lectures_dir = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures'

for file in ['lecture-04.html', 'lecture-05.html', 'lecture-06.html', 'lecture-07.html']:
    filepath = os.path.join(lectures_dir, file)
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up any malformed closing tags
    content = content.replace('</div></section>', '</div>\n            </section>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Cleaned up lectures 4-7 HTML structure successfully.')
