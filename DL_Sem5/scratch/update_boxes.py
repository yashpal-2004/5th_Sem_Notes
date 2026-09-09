import os

lectures_dir = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures'

for file in ['lecture-03.html', 'lecture-04.html', 'lecture-05.html', 'lecture-06.html', 'lecture-07.html']:
    filepath = os.path.join(lectures_dir, file)
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace executive summary wrapper with box box-blue
    content = content.replace(
        '<div class="formula-block">',
        '<div class="box box-blue"><div class="box-title">Formula Sheet & Key Rules</div>'
    )
    
    # Fix any orphaned closing tags if needed
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Box styling updated.')
