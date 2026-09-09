import os

lectures_dir = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures'

for file in ['lecture-03.html', 'lecture-04.html', 'lecture-05.html', 'lecture-06.html', 'lecture-07.html']:
    filepath = os.path.join(lectures_dir, file)
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Wrap each list item formula in short-notes with formula-box styling
    # Convert list items in formula sheet box to clean formula-boxes
    content = content.replace(
        '<div class="box box-blue"><div class="box-title">Formula Sheet & Key Rules</div>\n                        <ul>',
        '<div class="box box-blue"><div class="box-title">Formula Sheet & Key Rules</div>\n                        <ul style="list-style:none; padding-left:0;">'
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated box-blue formula sheet styling.')
