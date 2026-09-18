import os

lectures_dir = "/Users/vaishnavidhanai/Desktop/5th_Sem_Notes/AML/lectures"
os.makedirs(lectures_dir, exist_ok=True)

def make_page(num, title, filename, topics, pdf_filename):
    prev_num = num - 1
    prev_file = f"lecture-0{prev_num}.html" if prev_num < 10 else f"lecture-{prev_num}.html"
        
    next_num = num + 1
    if next_num <= 9:
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
    <title>Advanced Machine Learning - Lecture {num:02d}</title>
    <meta content="Study notes for Advanced Machine Learning (CSA333), Lecture {num:02d} covering {title}." name="description"/>
    <link href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23132219%22/><text x=%2250%22 y=%2250%22 font-family=%22Arial%22 font-size=%2255%22 fill=%22white%22 font-weight=%22bold%22 text-anchor=%22middle%22 dominant-baseline=%22central%22>{num:02d}</text></svg>" rel="icon"/>
    <link href="../css/style.css" rel="stylesheet"/>
</head>
<body>
    <header>
        <div class="header-titles">
            <h1>Advanced Machine Learning</h1>
            <p>Lecture {num:02d} - {title}</p>
            <a href="../index.html" style="color: var(--blue); text-decoration: none; font-weight: bold; font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;">← Back to Dashboard</a>
            <span style="color: var(--text-muted); margin: 0 0.5rem;">|</span>
            <a href="../pdfs/{pdf_filename}" style="color: var(--blue); text-decoration: none; font-weight: bold; font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;" target="_blank">Open PDF in New Tab ↗</a>
        </div>
        <div class="search-container">
            <input id="searchInput" placeholder="Search notes..." type="text"/>
        </div>
    </header>
    <div class="container">
        <!-- Sidebar Index -->
        <aside>
            <div class="aside-header">
                <h3>Table of Contents</h3>
                <div class="topic-count">Total Topics: {total_topics}</div>
            </div>
            <ul class="index-list" id="indexList">
                <li><a href="#short-notes" style="font-weight: 600; color: var(--blue);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: text-bottom; margin-right: 4px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Short Notes</a></li>
{toc_html}                <li><a href="#original-pdf"><svg fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="vertical-align: text-bottom; margin-right: 4px;" viewbox="0 0 24 24" width="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>Original PDF</a></li>
            </ul>
        </aside>
        <!-- Main Content -->
        <main id="notesContent">
            <!-- Short Notes -->
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
                        <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-muted);">No handwritten notes available for this lecture yet.</p>
                    </div>
                </div>
            </section>
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
        function loadPDF() {{
            const container = document.getElementById('pdfContainer');
            const btn = document.getElementById('loadPdfBtn');
            if (container.innerHTML === '') {{
                container.innerHTML = '<embed src="../pdfs/{pdf_filename}" type="application/pdf" width="100%" height="800px" style="border: 1px solid var(--gray-border); border-radius: 8px;" />';
                btn.innerText = "Hide PDF";
            }} else {{
                container.innerHTML = '';
                btn.innerText = "Load Original PDF";
            }}
        }}
    </script>
    <script src="../js/script.js"></script>
</body>
</html>
"""
    with open(os.path.join(lectures_dir, filename), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Created {filename}")

l6_topics = [
    ("Revision and Motivation", [], """
<p>In Batch Gradient Descent (BGD), we compute the gradient of the average cost over all m examples and then update &theta; once.</p>
<ul>
    <li><strong>Stable direction:</strong> Every sample contributes, so noisy gradients average out.</li>
    <li><strong>Good for small datasets:</strong> Exact gradients are affordable when data fits in memory.</li>
</ul>
<p>However, BGD demands an exact full-data gradient before it moves. This causes high cost/update and memory pressure for large datasets.</p>
    """),
    ("Stochastic Gradient Descent (SGD)", [], """
<p>SGD asks one randomly chosen example for a quick direction and updates immediately.</p>
<div class="formula-box">&theta;<sub>t+1</sub> = &theta;<sub>t</sub> - &alpha; &nabla;J<sub>i<sub>t</sub></sub>(&theta;<sub>t</sub>)</div>
<div style="background: var(--bg-secondary); border-left: 4px solid var(--blue); padding: 1rem; border-radius: 4px; margin-top: 1rem;">
    <strong>KEY INSIGHT:</strong> SGD is not training on only one sample forever! One update uses one sample, but one epoch uses every sample once.
</div>
    """),
    ("Mathematical Comparison: Batch GD vs SGD", [], """
<p>The key idea is simple: same objective, different gradient estimator.</p>
<ul>
    <li><strong>Updates per Epoch:</strong> BGD has 1. SGD has m.</li>
    <li><strong>Cost per Update:</strong> BGD is O(md). SGD is O(d).</li>
    <li><strong>Path:</strong> BGD is smooth. SGD is noisy but often fast in early progress.</li>
</ul>
    """),
    ("Mini-Batch Gradient Descent", [], """
<p>Mini-batch GD splits the shuffled dataset into small groups called mini-batches. Each update uses the average gradient over one mini-batch of size b.</p>
<p>Workflow:</p>
<ol>
    <li>Shuffle the dataset at the start of each epoch.</li>
    <li>Split it into mini-batches of size b.</li>
    <li>Compute the average gradient over the first mini-batch and update &theta; immediately.</li>
    <li>Continue until every sample has been used once.</li>
</ol>
<div class="formula-box">grad = grad + &nabla;J<sub>i</sub>(&theta;) <br> grad = grad/|B<sub>k</sub>| <br> &theta; := &theta; - &alpha; &middot; grad</div>
    """)
]

l7_topics = [
    ("Training Has Ended; Evaluation Begins", [], """
<p>The same expression can play both roles. MSE is a loss when it guides learning and an evaluation metric when it judges a finished model.</p>
<ul>
    <li><strong>Training loss:</strong> Guides parameter updates during training.</li>
    <li><strong>Evaluation metric:</strong> Judges a fixed model after training (on validation or test data).</li>
</ul>
    """),
    ("Regression Error Metrics", [], """
<p>Signed residuals show direction, but positive and negative values can cancel.</p>
<ul>
    <li><strong>MAE (Mean Absolute Error):</strong> Easy to interpret. Hides direction.</li>
    <li><strong>MAPE:</strong> A scale-free percentage. Undefined at y=0.</li>
    <li><strong>MSE (Mean Squared Error):</strong> Strongly penalizes large misses; useful in optimization.</li>
    <li><strong>RMSE (Root Mean Squared Error):</strong> Keeps large-error penalty but returns to target unit.</li>
</ul>
<div class="formula-box">MAE = (1/n) &Sigma; |e<sub>i</sub>|</div>
<div class="formula-box">MSE = (1/n) &Sigma; e<sub>i</sub><sup>2</sup></div>
    """),
    ("R2 and Adjusted R2", [], """
<p>R-squared compares the leftover variation with original variation.</p>
<div class="formula-box">R<sup>2</sup> = 1 - (RSS / TSS)</div>
<p>Adding a predictor cannot increase RSS; therefore training R<sup>2</sup> cannot decrease. Adjusted R<sup>2</sup> penalizes unnecessary features.</p>
<div class="formula-box">R<sup>2</sup><sub>adj</sub> = 1 - (1 - R<sup>2</sup>) &middot; (n - 1) / (n - p - 1)</div>
    """),
    ("Classification Evaluation Metrics", [], """
<p>Accuracy tells how often the complete label was correct, but it does not identify the type or direction of error.</p>
<ul>
    <li><strong>Precision:</strong> TP / (TP + FP) - Among predicted positives, how many are correct?</li>
    <li><strong>Recall / TPR:</strong> TP / (TP + FN) - Among actual positives, how many are found?</li>
    <li><strong>F1 Score:</strong> Harmonic balance of precision and recall.</li>
</ul>
<div class="formula-box">F1 = 2 &middot; (Precision &middot; Recall) / (Precision + Recall)</div>
    """)
]

l8_topics = [
    ("Understanding Bias and Variance", [], """
<p>We represent randomness with random noise (&epsilon;).</p>
<div class="formula-box">Y = f(X) + &epsilon;</div>
<ul>
    <li><strong>f(X):</strong> The true hidden relationship.</li>
    <li><strong>&epsilon;:</strong> Random noise (irreducible error).</li>
</ul>
<p>Using the training dataset, we build a model: f&#770;(x). This is called an estimator of the true function. If the training sample data changes, the estimator also changes. So, f&#770;(x) is random.</p>
    """),
    ("The Bias-Variance Tradeoff", [], """
<p>When you try to decrease the bias of a model, its variance automatically starts increasing. We aim to reach the model complexity where the total error is minimum.</p>
<div class="formula-box">MSE = Bias<sup>2</sup> + Variance + Var(&epsilon;)</div>
<ul>
    <li><strong>High Bias:</strong> Models are too simple and cannot fit the data well (Underfitting).</li>
    <li><strong>High Variance:</strong> Models fit the training data perfectly but vary wildly on new data (Overfitting).</li>
</ul>
    """),
    ("Diagnosing High Bias and High Variance", [], """
<p>In practice, we look at training and validation accuracy to diagnose problems.</p>
<ul>
    <li><strong>High Bias:</strong> Training accuracy is low (e.g. 70%), Validation accuracy is similar (e.g. 68%).</li>
    <li><strong>High Variance:</strong> Training accuracy is high (e.g. 99%), Validation accuracy is much lower (e.g. 82%).</li>
</ul>
    """),
    ("Learning Curves Give Another Clue", [], """
<p>A learning curve shows how the training and validation errors change as we increase the amount of training data.</p>
<ul>
    <li><strong>High Bias:</strong> Both errors remain high, even after adding more data.</li>
    <li><strong>High Variance:</strong> Training error is very low, but validation error is much higher. As more data is added, validation error often decreases.</li>
</ul>
    """)
]

l9_topics = [
    ("Why Feature Selection?", [], """
<p>Feature selection is the process of choosing a smaller subset of relevant features while preserving, or ideally improving, performance on unseen data.</p>
<ul>
    <li><strong>Relevant:</strong> Carries stable information that helps predict the target.</li>
    <li><strong>Redundant:</strong> Repeats information already carried by another feature.</li>
    <li><strong>Irrelevant:</strong> Varies but does not carry a stable relationship with the target.</li>
</ul>
<div style="background: var(--bg-secondary); border-left: 4px solid var(--blue); padding: 1rem; border-radius: 4px; margin-top: 1rem;">
    <strong>TAKEAWAY:</strong> Feature selection tries to remove redundant and irrelevant inputs without discarding genuinely useful signal.
</div>
    """),
    ("Filter Methods", [], """
<p>A filter method acts like an admission gate. It evaluates a feature using a simple structural or statistical rule.</p>
<ul>
    <li><strong>Duplicate Removal:</strong> Removes exact copies of a column.</li>
    <li><strong>Variance Threshold:</strong> Removes features that barely change. <div class="formula-box">Var(f<sub>j</sub>) < &tau;</div></li>
    <li><strong>Pearson Correlation:</strong> Removes features with low correlation to the target. <div class="formula-box">|r<sub>jY</sub>| < 0.30</div></li>
</ul>
<p>Filter methods are fast and scalable but usually ignore interactions among multiple features.</p>
    """),
    ("Wrapper Methods", [], """
<p>A wrapper method "wraps" model training and validation around the feature-selection process.</p>
<ul>
    <li><strong>Exhaustive Search:</strong> Evaluates every nonempty subset (2<sup>p</sup> - 1 subsets). Computationally expensive.</li>
    <li><strong>Backward Elimination:</strong> Starts with all features, removes the worst one iteratively.</li>
    <li><strong>Sequential Forward Selection:</strong> Starts with no features, adds the best one iteratively.</li>
</ul>
<p>Wrapper methods directly optimize performance for the chosen model but are computationally expensive and can overfit.</p>
    """),
    ("Validation Discipline: Avoid the Leakage Trap", [], """
<p>Feature selection is part of teaching your model. It is not a harmless step you can do before properly splitting your data.</p>
<div style="background: var(--bg-secondary); border-left: 4px solid var(--red); padding: 1rem; border-radius: 4px; margin-top: 1rem;">
    <strong>WARNING:</strong> Selecting features using the entire dataset and then splitting it leads to data leakage.
</div>
<p><strong>Right way:</strong> Inside every cross-validation fold, perform feature selection using <strong>only</strong> the training portion of that fold.</p>
    """)
]


make_page(6, "Stochastic & Mini-Batch Gradient Descent", "lecture-06.html", l6_topics, "6.PDF")
make_page(7, "Regression and Classification Evaluation Metrics", "lecture-07.html", l7_topics, "7.PDF")
make_page(8, "Bias, Variance and the Bias-Variance Tradeoff", "lecture-08.html", l8_topics, "8.PDF")
make_page(9, "Feature Selection", "lecture-09.html", l9_topics, "9.PDF")

print("All AML notes generated successfully.")
