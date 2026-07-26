import os
import re

os_dir = r"c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\OS"
short_notes_dir = os.path.join(os_dir, "short notes")
lectures_dir = os.path.join(os_dir, "lectures")

# List all files in short notes
short_notes_files = {}
if os.path.exists(short_notes_dir):
    for f in os.listdir(short_notes_dir):
        # Match file like 1.png, 01.png, 2.jpg, 1.pdf etc.
        m = re.search(r'^(\d+)\.(png|jpg|jpeg|webp|pdf)$', f, re.IGNORECASE)
        if m:
            num = int(m.group(1))
            short_notes_files[num] = f

print(f"Found short notes for lectures: {list(short_notes_files.keys())}")

for num, sn_filename in short_notes_files.items():
    fname = f"lecture-{num:02d}.html"
    filepath = os.path.join(lectures_dir, fname)
    if not os.path.exists(filepath):
        print(f"File {fname} does not exist.")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    ext = os.path.splitext(sn_filename)[1].lower()
    


    # 2. Update Sidebar Table of Contents if not already present
    if '#short-notes' not in html:
        toc_link_str = (
            '            <ul class="index-list" id="indexList">\n'
            '                <li><a href="#short-notes" style="font-weight: 600; color: var(--blue);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: text-bottom; margin-right: 4px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Short Notes</a></li>\n'
        )
        html = html.replace('<ul class="index-list" id="indexList">\n', toc_link_str)

    # 3. Add Short Notes section at the top of notesContent if not already present
    if 'id="short-notes"' not in html:
        if ext == '.pdf':
            content_media = f'<embed src="../short notes/{sn_filename}" type="application/pdf" width="100%" height="800px" style="border: 1px solid var(--gray-border); border-radius: 8px;" />'
        else:
            content_media = (
                f'<a href="../short notes/{sn_filename}" target="_blank" title="Click to view full size">\n'
                f'                            <img src="../short notes/{sn_filename}" alt="Lecture {num:02d} Short Notes" style="max-width: 100%; height: auto; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />\n'
                f'                        </a>\n'
                f'                        <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-muted);">Click image to open high-resolution version in new tab</p>'
            )

        short_notes_section = f'''            <!-- Short Notes Section -->
            <section id="short-notes" class="topic-section">
                <div class="topic-header" onclick="toggleSection('content-short-notes')">
                    <div class="topic-number" style="background:transparent; color: var(--blue); width: auto; margin-right: 0.5rem;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    </div>
                    <h2>Short Notes &amp; Visual Summary</h2>
                </div>
                <div id="content-short-notes" class="collapsible-content" style="max-height: none;">
                    <p style="margin-bottom: 1rem;">Handwritten / quick summary notes for Lecture {num:02d}:</p>
                    <div style="text-align: center; background: var(--bg-secondary, #f8f9fa); padding: 1rem; border-radius: 8px; border: 1px solid var(--gray-border);">
                        {content_media}
                    </div>
                </div>
            </section>

'''
        target_main_str = '<main id="notesContent">\n'
        html = html.replace(target_main_str, target_main_str + short_notes_section)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"Successfully integrated short notes into {fname}")
