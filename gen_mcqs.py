import json
import re
import os

with open('DL_Sem5/Deep_Learning_MCQ_Practice.html', 'r', encoding='utf-8') as f:
    dl_html = f.read()

template = re.sub(r'const BANK=\[.*?\];', 'const BANK={BANK_JSON};', dl_html, flags=re.DOTALL)

def create_bank(subject):
    return [
        {'id': i+1, 'topic': f'{subject} Topic {i+1}', 'level': 'Easy' if i < 10 else ('Medium' if i < 20 else 'Hard'), 'prompt': f'{subject} Question {i+1} covering mid-sem syllabus?', 'options': ['Correct Option', 'Incorrect Option 1', 'Incorrect Option 2', 'Incorrect Option 3'], 'explanation': f'Explanation for {subject} question {i+1}.'} for i in range(30)
    ]

for subject, folder, title in [('AML', 'AML', 'Advanced Machine Learning'), ('MCA', 'MCA', 'Modern Computer Architecture'), ('CN', 'CN', 'Computer Networks')]:
    bank = create_bank(subject)
    html = template.replace('{BANK_JSON}', json.dumps(bank)).replace('Deep Learning', title)
    filepath = os.path.join(folder, f'{subject}_MCQ_Practice.html')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {filepath}")
