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

    # Find all topic sections
    # Replace topic-section collapsible-content endings with topic-nav
    sections = content.split('</section>')
    new_sections = []
    
    # Extract all topic ids
    topic_ids = re.findall(r'<section class="topic-section" id="(topic-\d+|short-notes)">', content)
    
    # We will construct navigation buttons for each topic-section
    for idx, sec in enumerate(sections):
        if '<section class="topic-section"' in sec:
            m = re.search(r'id="(topic-\d+|short-notes)"', sec)
            if m:
                curr_id = m.group(1)
                
                # Check if navigation is already present
                if 'class="topic-nav"' not in sec:
                    # Find previous and next topic IDs
                    curr_idx = topic_ids.index(curr_id) if curr_id in topic_ids else -1
                    prev_id = topic_ids[curr_idx - 1] if curr_idx > 0 else None
                    next_id = topic_ids[curr_idx + 1] if (curr_idx >= 0 and curr_idx < len(topic_ids) - 1) else None

                    prev_btn = f'<button class="btn" onclick="document.getElementById(\'{prev_id}\').scrollIntoView()">Previous Topic</button>' if prev_id else '<button class="btn" disabled="">Previous Topic</button>'
                    next_btn = f'<button class="btn" onclick="document.getElementById(\'{next_id}\').scrollIntoView()">Next Topic</button>' if next_id else '<button class="btn" disabled="">Next Topic</button>'

                    nav_html = f'''                    <div class="topic-nav">
                        {prev_btn}
                        {next_btn}
                    </div>'''

                    # Insert before the last </div> of collapsible-content
                    sec = sec.rstrip()
                    if sec.endswith('</div>'):
                        sec = sec[:-6] + nav_html + '\n                </div>'
                    else:
                        sec = sec + nav_html

        new_sections.append(sec)

    content = '</section>'.join(new_sections)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Added topic-nav buttons to all lectures!')
