import os

filepath = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures\lecture-04.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

target = '<div class="formula-box">z<sup>[l]</sup> = W<sup>[l]</sup> a<sup>[l-1]</sup> + b<sup>[l]</sup></div>, \\(\\mathbf{a}^{[l]} = g(\\mathbf{z}^{[l]})\\)'
replacement = '\\(\\mathbf{z}^{[l]} = \\mathbf{W}^{[l]} \\mathbf{a}^{[l-1]} + \\mathbf{b}^{[l]}\\), \\(\\mathbf{a}^{[l]} = g(\\mathbf{z}^{[l]})\\)'

content = content.replace(target, replacement)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced lecture-04 forward pass formula!')
