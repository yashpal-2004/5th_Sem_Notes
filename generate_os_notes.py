# append lectures datasets and run them
import os

lectures_dir = r"c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\OS\lectures"
os.makedirs(lectures_dir, exist_ok=True)

def make_page(num, title, filename, topics, pdf_filename):
    prev_num = num - 1
    prev_file = f"lecture-0{prev_num}.html" if prev_num < 10 else f"lecture-{prev_num}.html"
        
    next_num = num + 1
    if next_num <= 22:
        next_file = f"lecture-0{next_num}.html" if next_num < 10 else f"lecture-{next_num}.html"
    else:
        next_file = "#"

    toc_html = ""
    sections_html = ""
    total_topics = len(topics)
    
    for idx, (t_name, subtopics, content_html) in enumerate(topics):
        t_id = idx + 1
        sub_count = len(subtopics)
        
        toc_html += f'''                <li>
                    <a href="#topic-{t_id}">{t_id}. {t_name}<span class="sub-count">{sub_count}</span></a>
                    <ul class="sub-index">
'''
        for s_idx, s_name in enumerate(subtopics):
            sub_id = f"{t_id}-{s_idx+1}"
            toc_html += f"                         <li><a href=\"#sub-{sub_id}\">{t_id}.{s_idx+1} {s_name}</a></li>\n"
        toc_html += "                    </ul>\n                </li>\n"
        
        prev_topic_btn = f'<button class="btn" onclick="document.getElementById(\'topic-{t_id-1}\').scrollIntoView()">Previous Topic</button>' if t_id > 1 else f'<a href="{prev_file}" class="btn" style="text-decoration:none; display:inline-block; line-height:2rem; text-align:center;">Previous Lecture</a>'
        next_topic_btn = f'<button class="btn" onclick="document.getElementById(\'topic-{t_id+1}\').scrollIntoView()">Next Topic</button>' if t_id < total_topics else (f'<a href="{next_file}" class="btn" style="text-decoration:none; display:inline-block; line-height:2rem; text-align:center;">Next Lecture</a>' if next_file != "#" else '<button class="btn" disabled="">Next Topic</button>')
        
        sections_html += f'''            <!-- Topic {t_id} -->
            <section id="topic-{t_id}" class="topic-section">
                <div class="topic-header" onclick="toggleSection(\'content-{t_id}\')">
                    <div class="topic-number">{t_id}</div>
                    <h2>{t_name}</h2>
                </div>
                <div id="content-{t_id}" class="collapsible-content">
                    {content_html}
                    
                    <div class="topic-nav">
                        {prev_topic_btn}
                        {next_topic_btn}
                    </div>
                </div>
            </section>
'''

    prev_pdf_topic = f"topic-{total_topics}"

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Lecture {num:02d} - {title}</title>
    <meta content="Study notes covering {title}." name="description"/>
    <link class="favicon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23132219%22/><text x=%2250%22 y=%2250%22 font-family=%22Arial%22 font-size=%2255%22 fill=%22white%22 font-weight=%22bold%22 text-anchor=%22middle%22 dominant-baseline=%22central%22>{num:02d}</text></svg>" rel="icon"/>
    <link href="../css/style.css" rel="stylesheet"/>
</head>
<body>
    <header>
        <div class="header-titles">
            <h1>Operating Systems Foundations</h1>
            <p>Lecture {num:02d} - {title}</p>
            <a href="../index.html" style="color: var(--blue); text-decoration: none; font-weight: bold; font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;">← Back to Dashboard</a>
            <span style="color: var(--text-muted); margin: 0 0.5rem;">|</span>
            <a href="../pdfs/{pdf_filename}" style="color: var(--blue); text-decoration: none; font-weight: bold; font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;" target="_blank">Open PDF in New Tab ↗</a>
        </div>
        <div class="search-container">
            <input id="searchInput" placeholder="Search notes..." type="text"/>
        </div>
    </header>
    <div class="container" style="margin-top: 2rem;">
        <!-- Sidebar Index -->
        <aside>
            <div class="aside-header">
                <h3>Table of Contents</h3>
                <div class="topic-count">Total Topics: {total_topics}</div>
            </div>
            <ul class="index-list" id="indexList">
{toc_html}                <li><a href="#original-pdf"><svg fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="vertical-align: text-bottom; margin-right: 4px;" viewbox="0 0 24 24" width="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>Original PDF</a></li>
            </ul>
        </aside>
        <!-- Main Content -->
        <main id="notesContent">
{sections_html}
            <!-- Original PDF -->
            <section class="topic-section" id="original-pdf">
                <div class="topic-header" onclick="toggleSection('content-pdf')">
                    <div class="topic-number" style="background:transparent; color: var(--blue); width: auto; margin-right: 0.5rem;">
                        <svg fill="none" height="32" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="32"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </div>
                    <h2>Original PDF Notes</h2>
                </div>
                <div class="collapsible-content" id="content-pdf">
                    <p>Below is the original PDF document for your reference:</p>
                    <button class="btn" id="loadPdfBtn" onclick="loadPDF()" style="margin-top: 1rem; display: block;">Load Original PDF</button>
                    <div id="pdfContainer" style="margin-top: 1rem;"></div>
                    <div class="topic-nav">
                        <button class="btn" onclick="document.getElementById('{prev_pdf_topic}').scrollIntoView()">Previous Topic</button>
                        <button class="btn" disabled="">Next Topic</button>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <button id="backToTop" onclick="scrollToTop()">↑</button>
    <script>
        function loadPDF() {{{
            const container = document.getElementById('pdfContainer');
            const btn = document.getElementById('loadPdfBtn');
            if (container.innerHTML === '') {{{
                container.innerHTML = '<embed src="../pdfs/{pdf_filename}" type="application/pdf" width="100%" height="800px" style="border: 1px solid var(--gray-border); border-radius: 8px;" />';
                btn.innerText = "Hide PDF";
            }}} else {{{
                container.innerHTML = '';
                btn.innerText = "Load Original PDF";
            }}}
        }}}
    </script>
    <script src="../js/script.js"></script>
</body>
</html>
"""
    with open(os.path.join(lectures_dir, filename), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Created {filename}")

# ==================== LECTURE DATA ====================
