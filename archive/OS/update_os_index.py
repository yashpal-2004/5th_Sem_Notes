import os
import re

os_dir = r"c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\OS"
lectures_dir = os.path.join(os_dir, "lectures")

# List all html files in OS/lectures
files = sorted([f for f in os.listdir(lectures_dir) if f.startswith("lecture-") and f.endswith(".html")])

total_lectures = len(files)
total_subtopics = 0
lectures_data = []

# Predefined short summaries for OS lectures to display on index.html cards
lecture_summaries = {
    1: "Explore basic process concepts, system service boundaries, hardware control, and kernel space virtualization.",
    2: "Examine PCBs (Process Control Blocks), context switching, state queues, and child generation forks.",
    3: "POSIX process standards, zombie generation, parent waits, and thread memory isolation limits.",
    4: "Parallel processing models, thread libraries, concurrency hazards, and lightweight process mappings.",
    5: "Race condition analysis, critical section locks, hardware sync instructions, and scheduler context overhead.",
    6: "First-Come First-Served, Shortest Job First, preemptive models, and standard dispatcher performance metrics.",
    7: "Gantt charts, convoy effects, response times, and shortest remaining time first implementations.",
    8: "Round Robin quantums, Priority starvation, Multi-Level Queues, and real-world OS scheduler feedback.",
    9: "CPU scheduling evaluation framework, Multi-Level Feedback Queues (MLFQ), CFS Nice values, and load balancing.",
    10: "Introduction to process synchronization, race conditions, the critical section problem, and Mutual Exclusion.",
    11: "Software synchronization attempts (Lock variables, Strict alternation) and Peterson's correct design.",
    12: "Hardware synchronization primitives: Test-and-Set (TAS), Compare-and-Swap (CAS), Spinlocks, and Mutex structures.",
    13: "Binary and counting semaphores, atomic wait/signal operations, queue mechanics, and POSIX semaphore API.",
    14: "The classic Bounded Buffer / Producer-Consumer problem, semaphore solutions, and wrong ordering deadlocks.",
    15: "The Dining Philosophers problem, Tanenbaum's solution, high-level monitors, and condition variables.",
    16: "Deadlock definitions, differences from starvation, Coffman conditions, and Resource Allocation Graphs (RAG).",
    17: "Deadlock prevention by breaking Coffman conditions, Safe vs. Unsafe states, and the Banker's Algorithm.",
    18: "Deadlock detection, Wait-For Graphs (WFG), process termination recovery, and the Ostrich algorithm.",
    19: "Memory hierarchy characteristics, contiguous memory allocation, fixed/dynamic partitioning, and fragmentation solutions.",
    20: "The paging memory model, frames and pages structure, Page Table Entries (PTE), and multi-level paging.",
    21: "Address translation performance issues, Translation Lookaside Buffer (TLB), polling, interrupts, and DMA.",
    22: "The Nand2Tetris Hack computer platform, machine/assembly software stack, Jack language syntax, and OS libraries."
}

for fname in files:
    match = re.search(r'lecture-(\d+)\.html', fname)
    if not match:
        continue
    num = int(match.group(1))
    
    filepath = os.path.join(lectures_dir, fname)
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Extract Title: <title>Lecture XX - [Title]</title> or similar
    t_match = re.search(r'<title>([^<]+)</title>', html)
    title = t_match.group(1) if t_match else f"Lecture {num:02d}"
    # Strip Lecture XX prefix from card title if present
    title = re.sub(r'^Lecture \d+ - ', '', title)
    
    # Count subtopics: occurrences of id="sub-X-Y"
    sub_matches = re.findall(r'id="sub-\d+-\d+"', html)
    sub_count = len(sub_matches)
    total_subtopics += sub_count
    
    desc = lecture_summaries.get(num, "Detailed study notes for this lecture covering key concepts, algorithms, and practical implementations.")
    
    # Tag mapping
    tag = "Intro"
    if num in [2, 3]: tag = "Processes"
    elif num in [4]: tag = "Threads"
    elif num in [5, 10, 11, 12, 13]: tag = "Sync"
    elif num in [6, 7, 8, 9]: tag = "Scheduling"
    elif num in [14, 15]: tag = "Sync Problems"
    elif num in [16, 17, 18]: tag = "Deadlocks"
    elif num in [19, 20, 21]: tag = "Memory"
    elif num in [22]: tag = "Nand2Tetris"
    
    lectures_data.append((num, title, desc, tag, sub_count, fname))

# Build grid HTML
grid_html = ""
for num, title, desc, tag, sub_count, fname in lectures_data:
    grid_html += f"""                <!-- Lecture {num} -->
                <a href="lectures/{fname}" class="lecture-card">
                    <div class="lecture-number">{num:02d}</div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <div class="lecture-card-header">
                        <span class="lecture-tag">{tag}</span>
                        <span class="lecture-stats">{sub_count} Topics</span>
                    </div>
                </a>\n\n"""

# Read index.html
index_path = os.path.join(os_dir, "index.html")
with open(index_path, 'r', encoding='utf-8') as f:
    index_html = f.read()

# Replace nav stats: <div class="nav-stats">...</div>
index_html = re.sub(
    r'<div class="nav-stats">[^<]+</div>',
    f'<div class="nav-stats">{total_lectures} Lectures &bull; {total_subtopics} Topics</div>',
    index_html
)

# Replace lectures grid: <div class="lectures-grid">...</div>
# We search for <div class="lectures-grid"> ... </div>
index_html = re.sub(
    r'<div class="lectures-grid">.*?</div>\s*</div>\s*</section>',
    f'<div class="lectures-grid">\n{grid_html}            </div>\n        </div>\n    </section>',
    index_html,
    flags=re.DOTALL
)

# Replace stats block
# Total lectures Compiled
index_html = re.sub(
    r'<div class="stat-val">\d+</div>\s*<div class="stat-label">Lectures Compiled</div>',
    f'<div class="stat-val">{total_lectures}</div>\n                <div class="stat-label">Lectures Compiled</div>',
    index_html
)
# Subtopics Compiled
index_html = re.sub(
    r'<div class="stat-val">\d+\+?</div>\s*<div class="stat-label">Subtopics</div>',
    f'<div class="stat-val">{total_subtopics}</div>\n                <div class="stat-label">Subtopics</div>',
    index_html
)

# Write back index.html
with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_html)

print(f"OS index.html updated successfully. Total Lectures: {total_lectures}, Total Subtopics: {total_subtopics}")
