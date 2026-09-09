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

    # Clean stray closing </p> tags after formula boxes
    content = content.replace('</div> This ensures', '</div>\n<p>This ensures')
    content = content.replace('</div> Derivative', '</div>\n<p>Derivative')
    content = content.replace('</div> Its derivative', '</div>\n<p>Its derivative')
    content = content.replace('</div> The maximum', '</div>\n<p>The maximum')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Cleaned up HTML paragraph tags around formula boxes.')
