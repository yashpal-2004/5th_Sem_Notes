import os

lectures_dir = r'c:\Users\nikhi\OneDrive\Desktop\NST 5th Sem Notes\DL_Sem5\lectures'

# --- LECTURE 03 ---
lec3_path = os.path.join(lectures_dir, 'lecture-03.html')
with open(lec3_path, 'r', encoding='utf-8') as f:
    l3 = f.read()

l3 = l3.replace(
    'For Sigmoid activation \\(\\sigma(z) = \\frac{1}{1 + e^{-z}}\\), the maximum value of the derivative occurs at \\(z = 0\\) where \\(\\sigma\'(0) = 0.25\\).',
    'For Sigmoid activation: <div class="formula-box">\\sigma(z) = \\frac{1}{1 + e^{-z}}</div> The maximum value of the derivative occurs at \\(z = 0\\) where \\(\\sigma\'(0) = 0.25\\).'
)

l3 = l3.replace(
    'ReLU is defined as \\(f(z) = \\max(0, z)\\). Its derivative is constant: \\(f\'(z) = 1\\) for \\(z > 0\\), and \\(f\'(z) = 0\\) for \\(z < 0\\).',
    'ReLU Definition: <div class="formula-box">f(z) = \\max(0, z)</div> Its derivative is constant: <div class="formula-box">f\'(z) = 1 \\text{ if } z > 0 \\text{ else } 0</div>'
)

l3 = l3.replace(
    'Leaky ReLU introduces a small non-zero slope \\(\\alpha\\) (e.g., \\(\\alpha = 0.01\\)) for negative inputs: \\(f(z) = z\\) if \\(z > 0\\) else \\(\\alpha z\\).',
    'Leaky ReLU Definition: <div class="formula-box">f(z) = z \\text{ if } z > 0 \\text{ else } \\alpha z \\quad (\\text{typically } \\alpha = 0.01)</div>'
)

l3 = l3.replace(
    'ELU is defined as \\(f(z) = z\\) if \\(z > 0\\) else \\(\\alpha(e^z - 1)\\). For negative inputs, ELU smoothly saturates to a negative asymptote \\(-\\alpha\\). Its derivative for \\(z \\le 0\\) is \\(f\'(z) = f(z) + \\alpha = \\alpha e^z\\).',
    'ELU Definition: <div class="formula-box">f(z) = z \\text{ if } z > 0 \\text{ else } \\alpha(e^z - 1)</div> Derivative for \\(z \\le 0\\): <div class="formula-box">f\'(z) = f(z) + \\alpha = \\alpha e^z</div>'
)

l3 = l3.replace(
    'For multi-class classification with \\(K\\) classes, Softmax converts raw logits \\(z_1, z_2, \\dots, z_K\\) into a normalized probability distribution \\(\\hat{y}_i = \\frac{e^{z_i}}{\\sum_{j=1}^{K} e^{z_j}}\\), ensuring \\(\\sum_{i=1}^K \\hat{y}_i = 1\\) and \\(\\hat{y}_i > 0\\).',
    'For multi-class classification with \\(K\\) classes, Softmax converts raw logits \\(z_1, z_2, \\dots, z_K\\) into a normalized probability distribution: <div class="formula-box">\\hat{y}_i = \\frac{e^{z_i}}{\\sum_{j=1}^{K} e^{z_j}} \\quad \\text{where } \\sum_{i=1}^K \\hat{y}_i = 1</div>'
)

with open(lec3_path, 'w', encoding='utf-8') as f:
    f.write(l3)

# --- LECTURE 04 ---
lec4_path = os.path.join(lectures_dir, 'lecture-04.html')
with open(lec4_path, 'r', encoding='utf-8') as f:
    l4 = f.read()

l4 = l4.replace(
    'For a fully connected layer with \\(N_{\\text{in}}\\)' + ' input nodes and \\(N_{\\text{out}}\\)' + ' output nodes: number of weights = \\(N_{\\text{in}} \\times N_{\\text{out}}\\)' + ', number of biases = \\(N_{\\text{out}}\\)' + '. Total parameters = \\(N_{\\text{out}} \\times (N_{\\text{in}} + 1)\\)' + '.',
    'For a fully connected layer with \\(N_{\\text{in}}\\)' + ' input nodes and \\(N_{\\text{out}}\\)' + ' output nodes: <div class="formula-box">\\text{Total Parameters} = N_{\\text{out}} \\times (N_{\\text{in}} + 1)</div>'
)

l4 = l4.replace(
    'Starting from inputs \\(\\mathbf{a}^{[0]} = \\mathbf{x}\\), each layer computes linear pre-activation \\(\\mathbf{z}^{[l]} = \\mathbf{W}^{[l]}\\mathbf{a}^{[l-1]} + \\mathbf{b}^{[l]}\\) and applies activation \\(\\mathbf{a}^{[l]} = g(\\mathbf{z}^{[l]})\\) sequentially until reaching \\(\\mathbf{a}^{[L]} = \\hat{y}\\).',
    'Starting from inputs \\(\\mathbf{a}^{[0]} = \\mathbf{x}\\), each layer computes: <div class="formula-box">\\mathbf{z}^{[l]} = \\mathbf{W}^{[l]}\\mathbf{a}^{[l-1]} + \\mathbf{b}^{[l]}, \\quad \\mathbf{a}^{[l]} = g(\\mathbf{z}^{[l]})</div>'
)

l4 = l4.replace(
    '<p>\\(\\delta^{[L]} = \\frac{\\partial \\mathcal{L}}{\\partial z^{[L]}} = \\frac{\\partial \\mathcal{L}}{\\partial \\hat{y}} \\frac{\\partial \\hat{y}}{\\partial z^{[L]}} = (\\hat{y} - y) g\'(z^{[L]})\\)</p>',
    '<div class="formula-box">\\delta^{[L]} = \\frac{\\partial \\mathcal{L}}{\\partial z^{[L]}} = (\\hat{y} - y) \\odot g\'(z^{[L]})</div>'
)

l4 = l4.replace(
    '<p>By applying the chain rule backward, the error signal \\(\\delta^{[l]}\\) at hidden layer \\(l\\) is computed by taking the weighted sum of future error signals \\(\\mathbf{W}^{[l+1]T}\\delta^{[l+1]}\\) and multiplying elementwise by local activation derivative \\(g\'(\\mathbf{z}^{[l]})\\).</p>',
    '<p>Hidden Layer Error Signal Backpropagation:</p><div class="formula-box">\\delta^{[l]} = (\\mathbf{W}^{[l+1]T} \\delta^{[l+1]}) \\odot g\'(\\mathbf{z}^{[l]})</div><div class="formula-box">\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{W}^{[l]}} = \\delta^{[l]} (\\mathbf{a}^{[l-1]})^T</div>'
)

with open(lec4_path, 'w', encoding='utf-8') as f:
    f.write(l4)

# --- LECTURE 05 ---
lec5_path = os.path.join(lectures_dir, 'lecture-05.html')
with open(lec5_path, 'r', encoding='utf-8') as f:
    l5 = f.read()

l5 = l5.replace(
    'The gradient \\(\\nabla L(w)\\) points in the direction of steepest loss increase. Therefore, subtracting \\(\\alpha \\nabla L(w)\\) moves parameter \\(w\\) towards lower loss.',
    'The gradient \\(\\nabla L(w)\\) points in the direction of steepest loss increase: <div class="formula-box">w_{t+1} = w_t - \\alpha \\nabla L(w_t)</div>'
)

l5 = l5.replace(
    '<p>Periodically reducing \\(\\alpha\\) (e.g., halving every 10 epochs) lets the model settle into precise minima late in training.</p>',
    '<p>Step Decay Formula:</p><div class="formula-box">\\alpha_t = \\alpha_0 \\cdot \\gamma^{\\lfloor t / S \\rfloor}</div><p>Periodically reducing \\(\\alpha\\) (e.g., halving every 10 epochs) lets the model settle into precise minima late in training.</p>'
)

l5 = l5.replace(
    '<p>Smoothly decreases learning rate following a cosine curve from \\(\\alpha_{\\max}\\) to \\(\\alpha_{\\min}\\) over the course of training, avoiding sudden abrupt drops of step decay.</p>',
    '<p>Cosine Annealing Formula:</p><div class="formula-box">\\alpha_t = \\alpha_{\\min} + \\frac{1}{2}(\\alpha_{\\max} - \\alpha_{\\min})\\left(1 + \\cos\\left(\\frac{t}{T_{\\max}}\\pi\\right)\\right)</div>'
)

with open(lec5_path, 'w', encoding='utf-8') as f:
    f.write(l5)

print('Successfully added formula boxes to lectures 3, 4, 5!')
