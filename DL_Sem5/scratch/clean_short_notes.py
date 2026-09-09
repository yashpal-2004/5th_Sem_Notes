import os

lectures_dir = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures'

# --- LECTURE 04 SHORT NOTES CLEANUP ---
l4_path = os.path.join(lectures_dir, 'lecture-04.html')
with open(l4_path, 'r', encoding='utf-8') as f:
    l4 = f.read()

l4_old_block = '''                    <div class="box box-blue"><div class="box-title">Formula Sheet & Key Rules</div>
                        <ul>
                            <li><strong>Forward Pass:</strong> <div class="formula-box">z<sup>[l]</sup> = W<sup>[l]</sup> a<sup>[l-1]</sup> + b<sup>[l]</sup></div>, \(\mathbf{a}^{[l]} = g(\mathbf{z}^{[l]})\)</li>
                            <li><strong>Parameter Count:</strong> For layer with \(N_{\text{in}}\) inputs and \(N_{\text{out}}\) neurons: \(\text{Params} = (N_{\text{in}} \times N_{\text{out}}) + N_{\text{out}}\)</li>
                            <li><strong>Output Error Signal:</strong> \(\delta^{[L]} = (\hat{y} - y) \odot g'(\mathbf{z}^{[L]})\)</li>
                            <li><strong>Hidden Error Signal:</strong> \(\delta^{[l]} = (\mathbf{W}^{[l+1]T} \delta^{[l+1]}) \odot g'(\mathbf{z}^{[l]})\)</li>
                            <li><strong>Weight Update Gradient:</strong> \(\frac{\partial \mathcal{L}}{\partial \mathbf{W}^{[l]}} = \delta^{[l]} (\mathbf{a}^{[l-1]})^T\)</li>
                        </ul>
                    
                </div>'''

l4_new_block = '''                    <div class="box box-blue">
                        <div class="box-title">Formula Sheet & Key Rules</div>
                        <ul>
                            <li><strong>Forward Pass:</strong> \(\\mathbf{z}^{[l]} = \\mathbf{W}^{[l]} \\mathbf{a}^{[l-1]} + \\mathbf{b}^{[l]}, \\quad \\mathbf{a}^{[l]} = g(\\mathbf{z}^{[l]})\\)</li>
                            <li><strong>Parameter Count:</strong> For layer with \\(N_{\\text{in}}\\)' + ' inputs and \\(N_{\\text{out}}\\)' + ' neurons: \\(\\text{Params} = (N_{\\text{in}} \\times N_{\\text{out}}) + N_{\\text{out}}\\)' + '</li>
                            <li><strong>Output Error Signal:</strong> \\(\\delta^{[L]} = (\\hat{y} - y) \\odot g\'(\\mathbf{z}^{[L]})\\)</li>
                            <li><strong>Hidden Error Signal:</strong> \\(\\delta^{[l]} = (\\mathbf{W}^{[l+1]T} \\delta^{[l+1]}) \\odot g\'(\\mathbf{z}^{[l]})\\)</li>
                            <li><strong>Weight Update Gradient:</strong> \\(\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{W}^{[l]}} = \\delta^{[l]} (\\mathbf{a}^{[l-1]})^T\\)</li>
                        </ul>
                    </div>'''

l4 = l4.replace(l4_old_block, l4_new_block)
with open(l4_path, 'w', encoding='utf-8') as f:
    f.write(l4)

# --- LECTURE 05 SHORT NOTES CLEANUP ---
l5_path = os.path.join(lectures_dir, 'lecture-05.html')
with open(l5_path, 'r', encoding='utf-8') as f:
    l5 = f.read()

l5 = l5.replace('<div class="formula-box">w<sub>t+1</sub> = w<sub>t</sub> - &alpha; &nabla;L(w<sub>t</sub>)</div>', '\\(w_{t+1} = w_t - \\alpha \\nabla L(w_t)\\)')
with open(l5_path, 'w', encoding='utf-8') as f:
    f.write(l5)

print('Cleaned up short notes list items in lectures 4 & 5!')
