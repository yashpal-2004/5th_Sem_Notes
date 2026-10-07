const mcqs = [
  {
    id: "l1-q1",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Biology of the Neuron",
    question: "According to the lecture, which sequence best describes how a biological neuron processes incoming information?",
    options: [
      "Receive signals → sum potentials → fire if threshold is crossed",
      "Fire → receive signals → sum potentials",
      "Sum signals → receive signals → permanently store them",
      "Receive signals → fire immediately → sum potentials"
    ],
    correctAnswer: "Receive signals → sum potentials → fire if threshold is crossed",
    explanation: "The lecture describes receiving signals through dendrites, aggregating them at the soma, and firing an action potential when the cumulative potential exceeds threshold.",
    difficulty: "easy"
  },
  {
    id: "l1-q2",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Neuron Structure",
    question: "Which neuron structure primarily receives chemical and electrical signals from other neurons?",
    options: [
      "Axon",
      "Dendrites",
      "Soma",
      "Threshold"
    ],
    correctAnswer: "Dendrites",
    explanation: "Dendrites are specialized for receiving incoming signals from other neurons.",
    difficulty: "easy"
  },
  {
    id: "l1-q3",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Neuron Structure",
    question: "What is the primary role of the soma in the biological neuron model?",
    options: [
      "Transmit the final action potential to another neuron",
      "Receive signals only",
      "Aggregate incoming potentials before firing",
      "Store the weights permanently"
    ],
    correctAnswer: "Aggregate incoming potentials before firing",
    explanation: "The soma or cell body aggregates incoming potentials and determines whether the neuron reaches its firing threshold.",
    difficulty: "easy"
  },
  {
    id: "l1-q4",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Mathematical Neuron Model",
    question: "Which mathematical expression represents the weighted-sum decision used by the mathematical neuron?",
    options: [
      "x1 + x2 + ... + xn = 0",
      "Σ wi xi compared with θ",
      "Π wi xi compared with θ",
      "Σ xi / wi compared with θ"
    ],
    correctAnswer: "Σ wi xi compared with θ",
    explanation: "The model computes a weighted sum of inputs and compares it with the activation threshold θ.",
    difficulty: "easy"
  },
  {
    id: "l1-q5",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Mathematical Neuron Model",
    question: "What does a weight wi represent in the mathematical neuron?",
    options: [
      "The neuron’s output class",
      "The importance or strength of input xi",
      "The activation threshold",
      "The number of training samples"
    ],
    correctAnswer: "The importance or strength of input xi",
    explanation: "Weights quantify the strength or importance assigned to individual inputs.",
    difficulty: "easy"
  },
  {
    id: "l1-q6",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "McCulloch-Pitts Model",
    question: "In the McCulloch-Pitts model, which set of gates is explicitly shown as implementable by threshold units?",
    options: [
      "AND, OR, and NOT",
      "XOR, NAND, and NOR only",
      "Adder, subtractor, and comparator",
      "MUX, DEMUX, and encoder"
    ],
    correctAnswer: "AND, OR, and NOT",
    explanation: "The lecture demonstrates that simple threshold neurons can implement AND, OR, and NOT gates.",
    difficulty: "easy"
  },
  {
    id: "l1-q7",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Logic Gate Implementations",
    question: "For the two-input AND gate shown in the lecture, what weights and threshold are used?",
    options: [
      "w1 = 1, w2 = 1, θ = 2",
      "w1 = 1, w2 = 1, θ = 1",
      "w1 = -1, θ = 0",
      "w1 = 2, w2 = 2, θ = 1"
    ],
    correctAnswer: "w1 = 1, w2 = 1, θ = 2",
    explanation: "The AND implementation uses both weights as 1 and requires a weighted sum of at least 2.",
    difficulty: "medium"
  },
  {
    id: "l1-q8",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Logic Gate Implementations",
    question: "For the OR gate shown in the lecture, why is the threshold set to 1?",
    options: [
      "Because the output should be 1 only when both inputs are 1",
      "Because any single active input should be sufficient to activate the neuron",
      "Because the weights are negative",
      "Because OR requires no weighted sum"
    ],
    correctAnswer: "Because any single active input should be sufficient to activate the neuron",
    explanation: "With both weights equal to 1, any input combination containing at least one 1 produces a sum of at least 1.",
    difficulty: "medium"
  },
  {
    id: "l1-q9",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Implications of the 1943 Model",
    question: "What major theoretical implication was highlighted by the McCulloch-Pitts result?",
    options: [
      "A single neuron can approximate every continuous function",
      "Networks of threshold units can implement arbitrary logical circuits",
      "Weights can automatically learn from experience",
      "Neurons do not require activation functions"
    ],
    correctAnswer: "Networks of threshold units can implement arbitrary logical circuits",
    explanation: "The lecture emphasizes that because one cell can implement AND, OR, or NOT, networks of such units can realize logical circuits.",
    difficulty: "medium"
  },
  {
    id: "l1-q10",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Missing Learning Element",
    question: "What was the key limitation of the 1943 McCulloch-Pitts model emphasized in the lecture?",
    options: [
      "It could not compute weighted sums",
      "It could not implement logical gates",
      "Weights had to be manually specified rather than learned from data",
      "It could not produce binary outputs"
    ],
    correctAnswer: "Weights had to be manually specified rather than learned from data",
    explanation: "The model could compute useful functions but had no mechanism to automatically adapt its weights from examples.",
    difficulty: "medium"
  },
  {
    id: "l1-q11",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Perceptron Forward Propagation",
    question: "Which two phases make up perceptron forward propagation in the lecture?",
    options: [
      "Linear combination followed by activation",
      "Activation followed by backpropagation",
      "Weight decay followed by normalization",
      "Pooling followed by convolution"
    ],
    correctAnswer: "Linear combination followed by activation",
    explanation: "The perceptron first computes z = Σwi xi + b and then applies an activation function.",
    difficulty: "easy"
  },
  {
    id: "l1-q12",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Bias",
    question: "How is the bias b related to the threshold θ in the lecture?",
    options: [
      "b = θ",
      "b = 1/θ",
      "b = -θ",
      "b = θ²"
    ],
    correctAnswer: "b = -θ",
    explanation: "The threshold form Σwi xi ≥ θ can be rearranged as Σwi xi - θ ≥ 0, so b = -θ.",
    difficulty: "medium"
  },
  {
    id: "l1-q13",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Perceptron Backpropagation and Learning Rule",
    question: "Which update correctly represents the perceptron weight learning rule?",
    options: [
      "wi ← wi + η(y − ŷ)xi",
      "wi ← wi − η(y + ŷ)xi",
      "wi ← wi + η(y + ŷ)",
      "wi ← wi − η(y − ŷ)xi"
    ],
    correctAnswer: "wi ← wi + η(y − ŷ)xi",
    explanation: "The perceptron adjusts each weight by η(y − ŷ)xi and updates the bias by η(y − ŷ).",
    difficulty: "medium"
  },
  {
    id: "l1-q14",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Activation Functions",
    question: "Which activation function is specifically used in the perceptron to produce a hard binary output?",
    options: [
      "Sigmoid",
      "Tanh",
      "Step function",
      "Softmax"
    ],
    correctAnswer: "Step function",
    explanation: "The lecture states that the perceptron uses a step function to produce output 0 or 1.",
    difficulty: "easy"
  },
  {
    id: "l1-q15",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Decision Boundary and Linear Separation",
    question: "For a two-dimensional perceptron, what form does the decision boundary take?",
    options: [
      "A straight line",
      "A circle",
      "A parabola",
      "A sine wave"
    ],
    correctAnswer: "A straight line",
    explanation: "The boundary w1x1 + w2x2 + b = 0 is linear, so in 2D it is a straight line.",
    difficulty: "easy"
  },
  {
    id: "l1-q16",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Concrete Mathematical Example",
    question: "For w1 = 2, w2 = 3, and b = -12, what is the x1-intercept of the decision boundary?",
    options: [
      "2",
      "4",
      "6",
      "12"
    ],
    correctAnswer: "6",
    explanation: "Setting x2 = 0 gives 2x1 - 12 = 0, so x1 = 6.",
    difficulty: "medium"
  },
  {
    id: "l1-q17",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Concrete Mathematical Example",
    question: "For 2x1 + 3x2 - 12 = 0, which point lies on the decision boundary?",
    options: [
      "(0, 0)",
      "(3, 2)",
      "(6, 0)",
      "(0, 6)"
    ],
    correctAnswer: "(6, 0)",
    explanation: "Substituting (6,0) gives 12 - 12 = 0, so the point lies exactly on the boundary.",
    difficulty: "medium"
  },
  {
    id: "l1-q18",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "XOR Limitation",
    question: "Why can a single perceptron not solve XOR?",
    options: [
      "XOR has too many input variables",
      "XOR is not linearly separable by a single straight-line boundary",
      "XOR requires no activation function",
      "XOR cannot be represented with binary outputs"
    ],
    correctAnswer: "XOR is not linearly separable by a single straight-line boundary",
    explanation: "The positive and negative XOR examples cannot be separated by one straight line.",
    difficulty: "easy"
  },
  {
    id: "l1-q19",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Minsky and Papert Proof",
    question: "What did Minsky and Papert establish about a single perceptron in 1969?",
    options: [
      "It can learn every Boolean function",
      "It cannot learn XOR because XOR is not linearly separable",
      "It always suffers from vanishing gradients",
      "It requires softmax to learn logic"
    ],
    correctAnswer: "It cannot learn XOR because XOR is not linearly separable",
    explanation: "The lecture attributes the formal proof that a single perceptron cannot learn XOR to Minsky and Papert.",
    difficulty: "medium"
  },
  {
    id: "l1-q20",
    lecture: "Lecture 1 - The Biological & Mathematical Neuron",
    topic: "Critical Bottleneck of the Perceptron",
    question: "Why does simply replacing the perceptron's step function with a smoother activation not solve the XOR limitation?",
    options: [
      "Smooth activations eliminate weights",
      "The model is still based on one linear combination and therefore one linear boundary",
      "Smooth activations cannot output numbers",
      "The input must contain exactly one feature"
    ],
    correctAnswer: "The model is still based on one linear combination and therefore one linear boundary",
    explanation: "Changing the activation does not change the fundamental linear decision geometry of a single perceptron.",
    difficulty: "hard"
  },

  {
    id: "l2-q1",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Arithmetic vs Activation",
    question: "What does the arithmetic stage of a perceptron compute?",
    options: [
      "z = wx + b",
      "y = sigmoid(x)",
      "L = 1/2(y − ŷ)²",
      "w = w − α∂L/∂w"
    ],
    correctAnswer: "z = wx + b",
    explanation: "The arithmetic stage computes the raw score z = wx + b before activation.",
    difficulty: "easy"
  },
  {
    id: "l2-q2",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Student Pass/Fail Example",
    question: "In the pass/fail example with w = 1 and b = -40, what raw score is produced for a student scoring 65 marks?",
    options: [
      "15",
      "25",
      "40",
      "105"
    ],
    correctAnswer: "25",
    explanation: "The raw score is z = x - 40 = 65 - 40 = 25.",
    difficulty: "easy"
  },
  {
    id: "l2-q3",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Step Threshold Decision",
    question: "Using the lecture's step function f(z) = 1 for z ≥ 0 and 0 otherwise, what is the output for z = -8?",
    options: [
      "0",
      "1",
      "-1",
      "8"
    ],
    correctAnswer: "0",
    explanation: "Because -8 is below the threshold of 0, the step function returns 0.",
    difficulty: "easy"
  },
  {
    id: "l2-q4",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Gradient Descent Update Rule",
    question: "What is the gradient descent update rule for a scalar weight w?",
    options: [
      "wnew = wold + α∂L/∂w",
      "wnew = wold − α∂L/∂w",
      "wnew = α∂L/∂w",
      "wnew = wold/α"
    ],
    correctAnswer: "wnew = wold − α∂L/∂w",
    explanation: "Gradient descent moves parameters opposite the gradient, scaled by the learning rate α.",
    difficulty: "easy"
  },
  {
    id: "l2-q5",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Squared Error Loss",
    question: "What loss function is used in the lecture to derive the basic gradient descent update?",
    options: [
      "L = |ŷ − y|",
      "L = 1/2(ŷ − y)²",
      "L = log(ŷ)",
      "L = ŷ + y"
    ],
    correctAnswer: "L = 1/2(ŷ − y)²",
    explanation: "The lecture uses the squared error loss L = 1/2(ŷ − y)².",
    difficulty: "easy"
  },
  {
    id: "l2-q6",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Chain Rule Derivation",
    question: "For w → z → ŷ → L, which expression correctly expands ∂L/∂w using the chain rule?",
    options: [
      "∂L/∂w = (∂L/∂ŷ)(∂ŷ/∂z)(∂z/∂w)",
      "∂L/∂w = ∂L/∂ŷ + ∂ŷ/∂z + ∂z/∂w",
      "∂L/∂w = ∂L/∂ŷ − ∂ŷ/∂z − ∂z/∂w",
      "∂L/∂w = (∂L/∂z)(∂z/∂ŷ)"
    ],
    correctAnswer: "∂L/∂w = (∂L/∂ŷ)(∂ŷ/∂z)(∂z/∂w)",
    explanation: "The derivative is obtained by multiplying derivatives along the computational chain.",
    difficulty: "medium"
  },
  {
    id: "l2-q7",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Perceptron Gradient Update",
    question: "For the scalar neuron in the lecture, what does ∂z/∂w equal when z = wx + b?",
    options: [
      "w",
      "b",
      "x",
      "1"
    ],
    correctAnswer: "x",
    explanation: "Differentiating wx + b with respect to w gives x.",
    difficulty: "easy"
  },
  {
    id: "l2-q8",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Why the Step Function Cannot Learn",
    question: "Why does the step activation fail in gradient-based learning?",
    options: [
      "Its derivative is zero almost everywhere",
      "It always produces values between 0 and 1",
      "It has too many parameters",
      "It requires a large batch"
    ],
    correctAnswer: "Its derivative is zero almost everywhere",
    explanation: "The step function's derivative is 0 for defined regions, so gradient-based updates vanish.",
    difficulty: "easy"
  },
  {
    id: "l2-q9",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Step Function Numerical Simulation",
    question: "In the lecture's step-function simulation with x = 2, w = 1, b = 0, y = 0, what happens to the weight update?",
    options: [
      "The weight becomes 0.5",
      "The weight becomes 1",
      "The weight becomes -1",
      "The weight doubles"
    ],
    correctAnswer: "The weight becomes 1",
    explanation: "Even though the error is nonzero, f'(z) = 0, making the gradient zero and leaving the weight unchanged.",
    difficulty: "medium"
  },
  {
    id: "l2-q10",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Sigmoid Function",
    question: "Which formula defines the sigmoid activation function used in the lecture?",
    options: [
      "σ(z) = 1 + e^-z",
      "σ(z) = 1/(1 + e^-z)",
      "σ(z) = e^z − e^-z",
      "σ(z) = max(0,z)"
    ],
    correctAnswer: "σ(z) = 1/(1 + e^-z)",
    explanation: "The sigmoid function maps real-valued inputs smoothly into the interval (0,1).",
    difficulty: "easy"
  },
  {
    id: "l2-q11",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Sigmoid Derivative",
    question: "What is the derivative identity highlighted for sigmoid?",
    options: [
      "σ'(z) = σ(z) + 1",
      "σ'(z) = σ(z)(1 − σ(z))",
      "σ'(z) = 1 − σ(z)",
      "σ'(z) = zσ(z)"
    ],
    correctAnswer: "σ'(z) = σ(z)(1 − σ(z))",
    explanation: "This identity simplifies differentiation and is central to the lecture's sigmoid update example.",
    difficulty: "easy"
  },
  {
    id: "l2-q12",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Sigmoid Maximum Derivative",
    question: "Where is the sigmoid derivative maximized according to the lecture?",
    options: [
      "At z = 0, with maximum value 0.25",
      "At z = 1, with maximum value 1",
      "At z = 0, with maximum value 0.5",
      "At z → ∞, with maximum value 1"
    ],
    correctAnswer: "At z = 0, with maximum value 0.25",
    explanation: "At z = 0, sigmoid equals 0.5, so σ'(0) = 0.5(1 − 0.5) = 0.25.",
    difficulty: "medium"
  },
  {
    id: "l2-q13",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Tanh Function",
    question: "What is the output range of tanh?",
    options: [
      "(0,1)",
      "(-1,1)",
      "[0,∞)",
      "(-∞,∞)"
    ],
    correctAnswer: "(-1,1)",
    explanation: "The hyperbolic tangent is zero-centered and outputs values between -1 and 1.",
    difficulty: "easy"
  },
  {
    id: "l2-q14",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Tanh Derivative",
    question: "Which derivative formula for tanh is given in the lecture?",
    options: [
      "1 + tanh²(z)",
      "1 − tanh²(z)",
      "tanh(z)(1 − tanh(z))",
      "e^z"
    ],
    correctAnswer: "1 − tanh²(z)",
    explanation: "Differentiating tanh gives tanh'(z) = 1 − tanh²(z).",
    difficulty: "easy"
  },
  {
    id: "l2-q15",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Sigmoid vs Tanh",
    question: "Why can tanh produce a larger update step than sigmoid around the origin in the lecture's comparison?",
    options: [
      "Tanh has a larger maximum derivative at the origin",
      "Tanh has no derivative",
      "Sigmoid is not differentiable at zero",
      "Tanh uses a larger learning rate automatically"
    ],
    correctAnswer: "Tanh has a larger maximum derivative at the origin",
    explanation: "The lecture compares maximum derivatives of 1 for tanh and 0.25 for sigmoid.",
    difficulty: "medium"
  },
  {
    id: "l2-q16",
    lecture: "Lecture 02 - The Activation Function and The Update Rule",
    topic: "Activation Function Comparison",
    question: "According to the lecture's summary table, which activation is marked as unable to learn with gradient descent?",
    options: [
      "Threshold/Step",
      "Sigmoid",
      "Tanh",
      "ReLU"
    ],
    correctAnswer: "Threshold/Step",
    explanation: "The step function has a zero derivative almost everywhere and therefore does not support ordinary gradient learning.",
    difficulty: "easy"
  },

  {
    id: "l3-q1",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Vanishing Gradient Problem",
    question: "What happens to the sigmoid derivative as |z| becomes very large?",
    options: [
      "It approaches 1",
      "It approaches 0",
      "It becomes negative infinity",
      "It oscillates between -1 and 1"
    ],
    correctAnswer: "It approaches 0",
    explanation: "Sigmoid saturates for large positive or negative inputs, causing σ'(z) to become very small.",
    difficulty: "easy"
  },
  {
    id: "l3-q2",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Sigmoid Derivative Saturation",
    question: "What is the maximum value of the sigmoid derivative?",
    options: [
      "0.25",
      "0.5",
      "1.0",
      "2.0"
    ],
    correctAnswer: "0.25",
    explanation: "The maximum sigmoid derivative occurs at z = 0 and equals 0.25.",
    difficulty: "easy"
  },
  {
    id: "l3-q3",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Vanishing Gradient Extreme-Input Example",
    question: "In the lecture's extreme-input example with z = 6, approximately what value is σ'(6)?",
    options: [
      "0.25",
      "0.05",
      "0.002472",
      "0.997521"
    ],
    correctAnswer: "0.002472",
    explanation: "The sigmoid derivative at z = 6 is approximately 0.002472, illustrating severe saturation.",
    difficulty: "medium"
  },
  {
    id: "l3-q4",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Vanishing Gradient Interpretation",
    question: "Why does sigmoid saturation cause early layers in a deep network to stop learning effectively?",
    options: [
      "Weights become exactly zero",
      "Small derivatives multiply across layers and make gradients tiny",
      "The loss is always zero",
      "The network loses all neurons"
    ],
    correctAnswer: "Small derivatives multiply across layers and make gradients tiny",
    explanation: "Backpropagation multiplies derivatives through layers, so repeated small factors can make early-layer gradients nearly vanish.",
    difficulty: "medium"
  },
  {
    id: "l3-q5",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "ReLU",
    question: "What is the mathematical definition of ReLU?",
    options: [
      "f(z) = 1/(1 + e^-z)",
      "f(z) = max(0,z)",
      "f(z) = tanh(z)",
      "f(z) = z²"
    ],
    correctAnswer: "f(z) = max(0,z)",
    explanation: "ReLU outputs z for positive inputs and 0 for non-positive inputs.",
    difficulty: "easy"
  },
  {
    id: "l3-q6",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "ReLU Derivative",
    question: "What derivative does ReLU use for z > 0?",
    options: [
      "0",
      "0.25",
      "1",
      "z"
    ],
    correctAnswer: "1",
    explanation: "The ReLU derivative is exactly 1 for positive inputs.",
    difficulty: "easy"
  },
  {
    id: "l3-q7",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Dying ReLU",
    question: "What is the core cause of the dying ReLU problem described in the lecture?",
    options: [
      "A neuron is always positive",
      "A neuron's pre-activation stays at or below zero for training examples",
      "Sigmoid is used in every layer",
      "The learning rate becomes exactly zero"
    ],
    correctAnswer: "A neuron's pre-activation stays at or below zero for training examples",
    explanation: "When z ≤ 0 consistently, ReLU outputs 0 and its derivative is 0, preventing useful gradient updates.",
    difficulty: "medium"
  },
  {
    id: "l3-q8",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Leaky ReLU",
    question: "How does Leaky ReLU avoid a completely dead negative region?",
    options: [
      "It makes the negative output exactly 1",
      "It uses a small negative slope α for z ≤ 0",
      "It removes the negative region",
      "It replaces the function with sigmoid"
    ],
    correctAnswer: "It uses a small negative slope α for z ≤ 0",
    explanation: "Leaky ReLU uses f(z) = αz for negative inputs, so the derivative remains nonzero.",
    difficulty: "easy"
  },
  {
    id: "l3-q9",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Parametric ReLU",
    question: "What is distinctive about PReLU compared with standard Leaky ReLU?",
    options: [
      "Its slope α is a fixed constant of 1",
      "Its negative-region slope α is learned during training",
      "It has no positive region",
      "It always outputs probabilities"
    ],
    correctAnswer: "Its negative-region slope α is learned during training",
    explanation: "PReLU treats the negative slope α as a learnable parameter.",
    difficulty: "medium"
  },
  {
    id: "l3-q10",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "ELU",
    question: "What is the ELU output for z > 0?",
    options: [
      "0",
      "z",
      "α(e^z − 1)",
      "1/(1 + e^-z)"
    ],
    correctAnswer: "z",
    explanation: "ELU behaves linearly for positive inputs and exponentially for negative inputs.",
    difficulty: "easy"
  },
  {
    id: "l3-q11",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "ELU Mean Shift Reduction",
    question: "Why does ELU help reduce mean shift compared with ReLU?",
    options: [
      "ELU is always positive",
      "ELU allows negative outputs, bringing average activations closer to zero",
      "ELU removes all gradients",
      "ELU uses a binary output"
    ],
    correctAnswer: "ELU allows negative outputs, bringing average activations closer to zero",
    explanation: "The negative branch of ELU allows negative activations, making outputs more zero-centered.",
    difficulty: "medium"
  },
  {
    id: "l3-q12",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Softmax Probability Distribution",
    question: "What property must the outputs of softmax satisfy?",
    options: [
      "They may be any negative or positive values",
      "They sum to 0",
      "They form a probability distribution and sum to 1",
      "Only the largest output is nonzero"
    ],
    correctAnswer: "They form a probability distribution and sum to 1",
    explanation: "Softmax converts logits to nonnegative probabilities that sum to 1.",
    difficulty: "easy"
  },
  {
    id: "l3-q13",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Softmax Worked Example",
    question: "For logits z1 = 2.0, z2 = 1.0, z3 = 0.1, which class receives the highest softmax probability?",
    options: [
      "Class 1",
      "Class 2",
      "Class 3",
      "All classes are equal"
    ],
    correctAnswer: "Class 1",
    explanation: "The largest logit produces the largest softmax probability; the lecture gives approximately 65.9% for class 1.",
    difficulty: "easy"
  },
  {
    id: "l3-q14",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Activation Function Trade-offs",
    question: "Which activation has output range [0,∞) according to the lecture's comparison table?",
    options: [
      "Sigmoid",
      "Tanh",
      "ReLU",
      "Leaky ReLU"
    ],
    correctAnswer: "ReLU",
    explanation: "ReLU outputs zero for negative inputs and positive values equal to z for positive inputs.",
    difficulty: "easy"
  },
  {
    id: "l3-q15",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Practical Activation Selection",
    question: "Which activation is recommended for a multi-class output layer?",
    options: [
      "ReLU",
      "Leaky ReLU",
      "Softmax",
      "ELU"
    ],
    correctAnswer: "Softmax",
    explanation: "The lecture recommends softmax for multi-class output probabilities.",
    difficulty: "easy"
  },
  {
    id: "l3-q16",
    lecture: "Lecture 03 - Activation Functions in Deep Learning",
    topic: "Practical Activation Selection",
    question: "Which activation is recommended for a binary output layer in the lecture?",
    options: [
      "Sigmoid",
      "Softmax with one class",
      "ELU",
      "Tanh only"
    ],
    correctAnswer: "Sigmoid",
    explanation: "The lecture's common-usage box assigns sigmoid to binary output layers.",
    difficulty: "easy"
  },

  {
    id: "l4-q1",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Resolving XOR with Hidden Layers",
    question: "What makes XOR difficult for a single perceptron?",
    options: [
      "It requires only one class",
      "Its classes are not linearly separable",
      "It has continuous outputs",
      "It has no inputs"
    ],
    correctAnswer: "Its classes are not linearly separable",
    explanation: "The XOR positive and negative examples cannot be separated by one linear decision boundary.",
    difficulty: "easy"
  },
  {
    id: "l4-q2",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "OR and NAND Construction for XOR",
    question: "How does the lecture construct XOR using a hidden layer?",
    options: [
      "Hidden layer computes OR and NAND, then output computes AND",
      "Hidden layer computes AND and NOR, then output computes OR",
      "Hidden layer computes XOR directly",
      "Output computes NAND only"
    ],
    correctAnswer: "Hidden layer computes OR and NAND, then output computes AND",
    explanation: "The lecture uses h1 = OR(x1,x2), h2 = NAND(x1,x2), followed by AND(h1,h2) to realize XOR.",
    difficulty: "medium"
  },
  {
    id: "l4-q3",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "MLP Architecture",
    question: "What is the role of the input layer in the MLP architecture shown?",
    options: [
      "It performs nonlinear transformation",
      "It passes the input through without computation",
      "It computes the final loss",
      "It applies dropout"
    ],
    correctAnswer: "It passes the input through without computation",
    explanation: "The lecture explicitly describes the input layer as passing through nodes without computation.",
    difficulty: "easy"
  },
  {
    id: "l4-q4",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "MLP Architecture",
    question: "What distinguishes hidden layers in an MLP?",
    options: [
      "They only copy inputs",
      "They perform linear combinations followed by nonlinear activations",
      "They contain no parameters",
      "They always use softmax"
    ],
    correctAnswer: "They perform linear combinations followed by nonlinear activations",
    explanation: "Hidden layers combine inputs using weights and biases and then apply an activation function.",
    difficulty: "easy"
  },
  {
    id: "l4-q5",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Parameter Counting",
    question: "How many parameters does a fully connected layer with Nin inputs and Nout neurons have?",
    options: [
      "Nin + Nout",
      "Nin × Nout",
      "Nout(Nin + 1)",
      "Nin(Nout + 1) + 1"
    ],
    correctAnswer: "Nout(Nin + 1)",
    explanation: "There are Nin weights and one bias per output neuron, giving Nout(Nin + 1).",
    difficulty: "easy"
  },
  {
    id: "l4-q6",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Parameter Counting",
    question: "For a 3-3-1 network, how many total parameters are shown in the lecture?",
    options: [
      "12",
      "14",
      "16",
      "18"
    ],
    correctAnswer: "16",
    explanation: "The hidden layer has 3×3 weights + 3 biases = 12, and the output layer has 3 weights + 1 bias = 4, totaling 16.",
    difficulty: "medium"
  },
  {
    id: "l4-q7",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Forward Propagation Equations",
    question: "Which equation correctly gives the pre-activation at layer l?",
    options: [
      "z[l] = W[l]a[l−1] + b[l]",
      "z[l] = W[l]a[l] + b[l−1]",
      "z[l] = a[l−1] + b[l]",
      "z[l] = g(W[l])"
    ],
    correctAnswer: "z[l] = W[l]a[l−1] + b[l]",
    explanation: "The lecture defines the linear combination at each layer as z[l] = W[l]a[l−1] + b[l].",
    difficulty: "easy"
  },
  {
    id: "l4-q8",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Vectorized Forward Propagation",
    question: "Why is the vectorized forward-pass expression useful for multiple samples?",
    options: [
      "It eliminates all nonlinearities",
      "It enables fast computation and GPU parallelism",
      "It removes biases",
      "It forces batch size to one"
    ],
    correctAnswer: "It enables fast computation and GPU parallelism",
    explanation: "The lecture emphasizes vectorization as an efficient implementation for multiple samples and GPUs.",
    difficulty: "medium"
  },
  {
    id: "l4-q9",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Output Layer Backpropagation",
    question: "For squared error loss, what is the output-layer error signal δ[L]?",
    options: [
      "(ŷ − y) ⊙ g'(z[L])",
      "(y − ŷ) + g'(z[L])",
      "ŷg(z[L])",
      "W[L]a[L−1]"
    ],
    correctAnswer: "(ŷ − y) ⊙ g'(z[L])",
    explanation: "The output error signal is the prediction error multiplied elementwise by the activation derivative.",
    difficulty: "medium"
  },
  {
    id: "l4-q10",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Hidden Layer Backpropagation",
    question: "What is the hidden-layer error recurrence shown in the lecture?",
    options: [
      "δ[l] = W[l]δ[l+1]",
      "δ[l] = (W[l+1]Tδ[l+1]) ⊙ g'(z[l])",
      "δ[l] = g(z[l]) + δ[l+1]",
      "δ[l] = a[l] − a[l−1]"
    ],
    correctAnswer: "δ[l] = (W[l+1]Tδ[l+1]) ⊙ g'(z[l])",
    explanation: "Backpropagation propagates the downstream error through the transpose of the next layer's weights and multiplies by the local derivative.",
    difficulty: "hard"
  },
  {
    id: "l4-q11",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Weight Gradient",
    question: "How is the weight gradient for layer l expressed in the lecture?",
    options: [
      "∂L/∂W[l] = δ[l](a[l−1])T",
      "∂L/∂W[l] = W[l]δ[l]",
      "∂L/∂W[l] = a[l]δ[l]",
      "∂L/∂W[l] = δ[l] + a[l−1]"
    ],
    correctAnswer: "∂L/∂W[l] = δ[l](a[l−1])T",
    explanation: "The matrix gradient is the outer product of the layer error and the previous layer activation.",
    difficulty: "medium"
  },
  {
    id: "l4-q12",
    lecture: "Lecture 04 - Multilayer Perceptron & Backpropagation",
    topic: "Numerical Backpropagation",
    question: "In the lecture's numerical example, what is the approximate updated output-layer weight w[2] after one step?",
    options: [
      "0.5084",
      "0.8277",
      "0.5000",
      "0.0584"
    ],
    correctAnswer: "0.8277",
    explanation: "The lecture computes the output-layer gradient and updates w[2] from 0.8 to approximately 0.8277.",
    difficulty: "hard"
  },

  {
    id: "l5-q1",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Downhill Intuition",
    question: "What does the downhill analogy represent in gradient descent?",
    options: [
      "Taking steps in the steepest loss-increasing direction",
      "Taking steps toward decreasing loss",
      "Randomly changing weights",
      "Always moving horizontally"
    ],
    correctAnswer: "Taking steps toward decreasing loss",
    explanation: "Gradient descent uses local slope information to move downhill toward lower loss.",
    difficulty: "easy"
  },
  {
    id: "l5-q2",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Mathematical Loss Minimization",
    question: "What is the standard gradient descent update written in the lecture?",
    options: [
      "wt+1 = wt + α∇L(wt)",
      "wt+1 = wt − α∇L(wt)",
      "wt+1 = α∇L(wt)",
      "wt+1 = wt/∇L(wt)"
    ],
    correctAnswer: "wt+1 = wt − α∇L(wt)",
    explanation: "The negative sign moves the parameter opposite the gradient, toward decreasing loss.",
    difficulty: "easy"
  },
  {
    id: "l5-q3",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Batch Gradient Descent",
    question: "What does full-batch gradient descent use for each parameter update?",
    options: [
      "One random sample",
      "Exactly two samples",
      "All N samples in the dataset",
      "Only the hardest sample"
    ],
    correctAnswer: "All N samples in the dataset",
    explanation: "Batch gradient descent computes the exact average gradient over all training samples.",
    difficulty: "easy"
  },
  {
    id: "l5-q4",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Stochastic Gradient Descent",
    question: "What is the defining batch size of stochastic gradient descent in the lecture?",
    options: [
      "1 sample",
      "32 samples",
      "All samples",
      "Half the dataset"
    ],
    correctAnswer: "1 sample",
    explanation: "SGD updates parameters using one sample per step.",
    difficulty: "easy"
  },
  {
    id: "l5-q5",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Mini-batch Gradient Descent",
    question: "What range is used as a typical mini-batch example in the lecture?",
    options: [
      "1–2",
      "4–8",
      "32–256",
      "1000–5000"
    ],
    correctAnswer: "32–256",
    explanation: "The lecture gives 32–256 as a representative range for mini-batch gradient descent.",
    difficulty: "easy"
  },
  {
    id: "l5-q6",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Learning Rate Pathology",
    question: "What is the effect of an excessively small learning rate?",
    options: [
      "Immediate divergence",
      "Extremely slow convergence",
      "Guaranteed overshooting",
      "Loss becomes NaN immediately"
    ],
    correctAnswer: "Extremely slow convergence",
    explanation: "A very small learning rate makes updates tiny and can cause training to stall on plateaus.",
    difficulty: "easy"
  },
  {
    id: "l5-q7",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Loss Trajectory Signatures",
    question: "Which training-loss pattern is associated with oscillation in the lecture?",
    options: [
      "A perfectly flat line",
      "A smooth monotonic decline",
      "Repeated up-and-down movement across the valley",
      "Immediate convergence to zero"
    ],
    correctAnswer: "Repeated up-and-down movement across the valley",
    explanation: "A learning rate that is too high can make the trajectory oscillate around the minimum.",
    difficulty: "medium"
  },
  {
    id: "l5-q8",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Step Decay",
    question: "What is the purpose of step decay in learning-rate scheduling?",
    options: [
      "Increase the learning rate after every epoch",
      "Periodically reduce the learning rate",
      "Set the learning rate to zero at initialization",
      "Keep the learning rate exactly constant"
    ],
    correctAnswer: "Periodically reduce the learning rate",
    explanation: "Step decay starts with a larger rate and reduces it at predefined intervals.",
    difficulty: "easy"
  },
  {
    id: "l5-q9",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Exponential Decay",
    question: "Which formula represents exponential step decay from the lecture?",
    options: [
      "αt = α0 + γt",
      "αt = α0γ^(t/S)",
      "αt = α0/t²",
      "αt = γ/α0"
    ],
    correctAnswer: "αt = α0γ^(t/S)",
    explanation: "The lecture presents multiplicative exponential decay using α0, γ, and a scaling interval S.",
    difficulty: "medium"
  },
  {
    id: "l5-q10",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Cosine Annealing",
    question: "What shape does cosine annealing use to change the learning rate?",
    options: [
      "A linear increase",
      "A cosine-based smooth decrease",
      "A random walk",
      "A step function only"
    ],
    correctAnswer: "A cosine-based smooth decrease",
    explanation: "Cosine annealing smoothly decreases α according to a cosine schedule from αmax toward αmin.",
    difficulty: "easy"
  },
  {
    id: "l5-q11",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Learning Rate Warm-up",
    question: "Why is learning-rate warm-up used at the beginning of training?",
    options: [
      "To avoid initial instability from large gradients",
      "To permanently eliminate decay",
      "To make all weights equal",
      "To disable backpropagation"
    ],
    correctAnswer: "To avoid initial instability from large gradients",
    explanation: "Warm-up gradually increases α from zero so training can stabilize before reaching the base learning rate.",
    difficulty: "medium"
  },
  {
    id: "l5-q12",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Warm-up Formula",
    question: "Which formula represents linear warm-up in the lecture?",
    options: [
      "αt = αbase × t/Twarm",
      "αt = αbase + t",
      "αt = αbaseTwarm/t",
      "αt = αbaseγ^t"
    ],
    correctAnswer: "αt = αbase × t/Twarm",
    explanation: "The lecture linearly ramps α from 0 to αbase over the warm-up interval Twarm.",
    difficulty: "easy"
  },
  {
    id: "l5-q13",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Worked Gradient Descent Calculation",
    question: "For L(w) = (w − 3)², what is the gradient dL/dw?",
    options: [
      "w − 3",
      "2(w − 3)",
      "2w",
      "w² − 3"
    ],
    correctAnswer: "2(w − 3)",
    explanation: "Differentiating the squared loss gives dL/dw = 2(w − 3).",
    difficulty: "easy"
  },
  {
    id: "l5-q14",
    lecture: "Lecture 05 - Gradient Descent",
    topic: "Multi-step Gradient Descent Tracing",
    question: "In the lecture's example starting from w0 = 0 with α = 0.1 for L(w) = (w − 3)², what is w1?",
    options: [
      "0.3",
      "0.6",
      "1.0",
      "3.0"
    ],
    correctAnswer: "0.6",
    explanation: "At w0 = 0, the gradient is −6, so w1 = 0 − 0.1(−6) = 0.6.",
    difficulty: "medium"
  },

  {
    id: "l6-q1",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Core Idea of Gradient Descent",
    question: "What type of information does gradient descent primarily use according to the lecture?",
    options: [
      "Global search over the entire loss surface",
      "Local value and slope information",
      "Only the parameter magnitude",
      "Only the training labels"
    ],
    correctAnswer: "Local value and slope information",
    explanation: "The lecture emphasizes local exploration rather than global search in high-dimensional spaces.",
    difficulty: "easy"
  },
  {
    id: "l6-q2",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Gradient Vector",
    question: "What does the gradient vector represent geometrically?",
    options: [
      "Direction of steepest ascent",
      "Direction of steepest descent",
      "A contour line",
      "A point of zero curvature"
    ],
    correctAnswer: "Direction of steepest ascent",
    explanation: "The negative gradient, −∇f, points toward steepest descent.",
    difficulty: "easy"
  },
  {
    id: "l6-q3",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Contours and Gradient",
    question: "How is the gradient related to a contour line?",
    options: [
      "It is tangent to the contour",
      "It is perpendicular to the contour",
      "It always points along the contour",
      "It is unrelated to the contour"
    ],
    correctAnswer: "It is perpendicular to the contour",
    explanation: "The lecture states that ∇f(x) is orthogonal to level sets f(x) = c.",
    difficulty: "easy"
  },
  {
    id: "l6-q4",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Condition Number",
    question: "How is the condition number κ defined in the lecture?",
    options: [
      "λmin/λmax",
      "λmax/λmin",
      "λmax + λmin",
      "λmax − λmin"
    ],
    correctAnswer: "λmax/λmin",
    explanation: "The condition number is defined as the ratio of maximum to minimum curvature.",
    difficulty: "easy"
  },
  {
    id: "l6-q5",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Local Exploration",
    question: "Why does the lecture discuss evaluating nearby points around the current parameter value?",
    options: [
      "To estimate local slope and compare descent directions",
      "To increase the number of labels",
      "To eliminate gradients",
      "To compute softmax probabilities"
    ],
    correctAnswer: "To estimate local slope and compare descent directions",
    explanation: "Nearby-point evaluation provides intuition for how local slopes guide gradient descent.",
    difficulty: "easy"
  },
  {
    id: "l6-q6",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Direction vs Magnitude of Slope",
    question: "Why is gradient magnitude important in addition to gradient direction?",
    options: [
      "It controls the effective step size when multiplied by α",
      "It changes the number of classes",
      "It changes the dataset size",
      "It determines the bias directly"
    ],
    correctAnswer: "It controls the effective step size when multiplied by α",
    explanation: "The lecture notes that step size depends on both learning rate and gradient magnitude.",
    difficulty: "medium"
  },
  {
    id: "l6-q7",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Learning Rate and Overshooting",
    question: "What can happen when α is too large on a steep loss surface?",
    options: [
      "Training always becomes exact",
      "Overshooting, oscillation, or divergence",
      "The gradient becomes exactly zero",
      "The condition number becomes one"
    ],
    correctAnswer: "Overshooting, oscillation, or divergence",
    explanation: "A large step multiplier can make updates jump across minima or leave the stable region.",
    difficulty: "medium"
  },
  {
    id: "l6-q8",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Isotropic Loss Surface",
    question: "What is characteristic of an isotropic bowl?",
    options: [
      "Strongly different curvature in each direction",
      "Similar curvature in all directions",
      "No minimum exists",
      "Only one contour exists"
    ],
    correctAnswer: "Similar curvature in all directions",
    explanation: "The isotropic quadratic f(x,y)=x²+y² has circular contours with similar curvature in every direction.",
    difficulty: "easy"
  },
  {
    id: "l6-q9",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Ill-conditioned Loss Surface",
    question: "What happens on an ill-conditioned anisotropic surface during plain gradient descent?",
    options: [
      "The trajectory typically zig-zags across steep walls",
      "The gradient is always zero",
      "The contours become perfect circles",
      "The loss is independent of direction"
    ],
    correctAnswer: "The trajectory typically zig-zags across steep walls",
    explanation: "Elongated contours create large gradient components across steep directions and produce zig-zagging.",
    difficulty: "medium"
  },
  {
    id: "l6-q10",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Numerical Example",
    question: "For f(x,y) = x² + 10y² at (10,1), what is the gradient?",
    options: [
      "[10, 1]",
      "[20, 20]",
      "[20, 10]",
      "[2, 20]"
    ],
    correctAnswer: "[20, 20]",
    explanation: "The gradient is [2x, 20y], which at (10,1) equals [20,20].",
    difficulty: "medium"
  },
  {
    id: "l6-q11",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Numerical Example",
    question: "Using α = 0.08 at (10,1) for f(x,y)=x²+10y², what is the first updated point?",
    options: [
      "(9.2, 0.2)",
      "(8.4, -0.6)",
      "(10.08, 1.08)",
      "(8.4, 0.6)"
    ],
    correctAnswer: "(8.4, -0.6)",
    explanation: "Subtracting 0.08[20,20] from (10,1) gives (8.4,-0.6).",
    difficulty: "hard"
  },
  {
    id: "l6-q12",
    lecture: "Lecture 06 - Gradient Descent Mechanics & Loss Landscapes",
    topic: "Condition Number and Ravines",
    question: "What does a high condition number indicate?",
    options: [
      "Nearly equal curvature in all directions",
      "Strongly anisotropic curvature and elongated ravines",
      "No gradient exists",
      "A convex surface with no minimum"
    ],
    correctAnswer: "Strongly anisotropic curvature and elongated ravines",
    explanation: "A large λmax/λmin ratio corresponds to narrow, elongated valleys and more difficult optimization.",
    difficulty: "medium"
  },

  {
    id: "l7-q1",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "EWMA Memory",
    question: "What problem does exponential weighted moving average introduce into optimization according to the lecture?",
    options: [
      "It makes current gradients independent of past gradients",
      "It gives the optimizer memory of past gradients",
      "It removes the gradient entirely",
      "It forces batch size to one"
    ],
    correctAnswer: "It gives the optimizer memory of past gradients",
    explanation: "EWMA stores a decaying history of gradients rather than using only the current mini-batch gradient.",
    difficulty: "easy"
  },
  {
    id: "l7-q2",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "EWMA Formula",
    question: "Which equation defines the exponentially weighted moving average in the lecture?",
    options: [
      "Vt = βVt−1 + (1−β)gt",
      "Vt = βgt + Vt−1",
      "Vt = gt² + β",
      "Vt = gt/β"
    ],
    correctAnswer: "Vt = βVt−1 + (1−β)gt",
    explanation: "EWMA combines the previous average with the current gradient using β.",
    difficulty: "easy"
  },
  {
    id: "l7-q3",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "SGD with Momentum",
    question: "What does momentum help reduce in narrow ravines?",
    options: [
      "Oscillations",
      "The number of parameters",
      "The number of classes",
      "All gradients"
    ],
    correctAnswer: "Oscillations",
    explanation: "Accumulated velocity smooths updates and dampens oscillation across steep directions.",
    difficulty: "easy"
  },
  {
    id: "l7-q4",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "Nesterov Accelerated Gradient",
    question: "What is the defining idea of NAG?",
    options: [
      "Use only the current gradient",
      "Compute the gradient at a lookahead future position",
      "Square the gradient before every update",
      "Discard previous velocity"
    ],
    correctAnswer: "Compute the gradient at a lookahead future position",
    explanation: "NAG evaluates the gradient after moving in the anticipated momentum direction.",
    difficulty: "medium"
  },
  {
    id: "l7-q5",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "AdaGrad",
    question: "What does AdaGrad accumulate for each parameter?",
    options: [
      "Raw inputs",
      "Past squared gradients",
      "Past weights only",
      "Loss values only"
    ],
    correctAnswer: "Past squared gradients",
    explanation: "AdaGrad accumulates Gt = Στ=1^t gτ² to scale the learning rate coordinate-wise.",
    difficulty: "easy"
  },
  {
    id: "l7-q6",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "AdaGrad",
    question: "Why can AdaGrad work well for sparse data?",
    options: [
      "Rarely updated parameters retain relatively larger step sizes",
      "It forces all features to have equal frequencies",
      "It removes sparse features",
      "It uses no gradients"
    ],
    correctAnswer: "Rarely updated parameters retain relatively larger step sizes",
    explanation: "Rare features accumulate squared gradients more slowly, so their denominators stay smaller and their updates remain relatively large.",
    difficulty: "medium"
  },
  {
    id: "l7-q7",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "RMSProp",
    question: "How does RMSProp differ from AdaGrad in its handling of past squared gradients?",
    options: [
      "RMSProp uses an exponentially weighted moving average",
      "RMSProp ignores gradients",
      "RMSProp always sums all gradients forever",
      "RMSProp uses only the first gradient"
    ],
    correctAnswer: "RMSProp uses an exponentially weighted moving average",
    explanation: "RMSProp replaces AdaGrad's ever-growing sum with a decaying second-moment average.",
    difficulty: "medium"
  },
  {
    id: "l7-q8",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "Adam",
    question: "Which two ideas are combined by Adam?",
    options: [
      "Momentum and RMSProp",
      "SGD and dropout",
      "Softmax and batch normalization",
      "L1 and L2 regularization"
    ],
    correctAnswer: "Momentum and RMSProp",
    explanation: "Adam combines a first-moment estimate of gradients with a second-moment estimate and applies bias correction.",
    difficulty: "easy"
  },
  {
    id: "l7-q9",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "Adam Bias Correction",
    question: "Why does Adam use bias correction?",
    options: [
      "Moment estimates start at zero and are biased toward zero early in training",
      "The learning rate is always too large",
      "Weights are always negative",
      "Gradients are never observed"
    ],
    correctAnswer: "Moment estimates start at zero and are biased toward zero early in training",
    explanation: "Because m0 and v0 are initialized at zero, early moving averages underestimate the true moments.",
    difficulty: "medium"
  },
  {
    id: "l7-q10",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "AdamW",
    question: "What is the defining difference of AdamW compared with standard Adam with coupled L2 regularization?",
    options: [
      "It removes all adaptation",
      "It decouples weight decay from the adaptive gradient update",
      "It uses no learning rate",
      "It replaces gradients with random noise"
    ],
    correctAnswer: "It decouples weight decay from the adaptive gradient update",
    explanation: "AdamW applies multiplicative weight decay directly to parameters instead of coupling it to the adaptive gradient denominator.",
    difficulty: "easy"
  },
  {
    id: "l7-q11",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "Optimizer Selection",
    question: "Which optimizer is identified as a good default for most deep-learning models in the lecture?",
    options: [
      "Plain SGD",
      "AdaGrad",
      "AdamW",
      "NAG only"
    ],
    correctAnswer: "AdamW",
    explanation: "The lecture recommends AdamW as a general default for modern deep-learning workloads.",
    difficulty: "easy"
  },
  {
    id: "l7-q12",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "Numerical Comparison",
    question: "In the lecture's SGD example with gradients +4, +4, −1 and α = 0.1, what is the third-step parameter change?",
    options: [
      "-0.1",
      "0.1",
      "-0.4",
      "0.4"
    ],
    correctAnswer: "0.1",
    explanation: "The third gradient is −1, so Δw = −0.1(−1) = +0.1.",
    difficulty: "easy"
  },
  {
    id: "l7-q13",
    lecture: "Lecture 07 - Optimizers with Memory: Momentum, NAG, AdaGrad & Adam",
    topic: "Momentum Numerical Comparison",
    question: "In the lecture's β = 0.9 momentum example, what is the velocity at step 3 for gradients +4, +4, −1?",
    options: [
      "4.0",
      "7.6",
      "5.84",
      "-1.0"
    ],
    correctAnswer: "5.84",
    explanation: "v1=4.0, v2=7.6, and v3=0.9(7.6)−1=5.84.",
    difficulty: "hard"
  },

  {
    id: "l8-q1",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "Why One Learning Rate Fails",
    question: "Why can one global learning rate fail on an anisotropic loss surface?",
    options: [
      "Different directions can require very different step sizes",
      "All directions have identical curvature",
      "Gradients are always zero",
      "The surface contains no minimum"
    ],
    correctAnswer: "Different directions can require very different step sizes",
    explanation: "Steep and flat directions have different curvature, so a single α can be too large for one and too small for another.",
    difficulty: "easy"
  },
  {
    id: "l8-q2",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "Adaptive Step Sizing",
    question: "What is the core principle of adaptive step sizing?",
    options: [
      "Use larger steps where historical gradients are large",
      "Use smaller steps where historical gradients are large",
      "Always use exactly the same update in every coordinate",
      "Ignore historical gradient magnitude"
    ],
    correctAnswer: "Use smaller steps where historical gradients are large",
    explanation: "Adaptive optimizers scale each coordinate inversely with a measure of historical gradient magnitude.",
    difficulty: "easy"
  },
  {
    id: "l8-q3",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "AdaGrad Formula",
    question: "What does AdaGrad's accumulator Gt represent?",
    options: [
      "The sum of gradients",
      "The sum of squared gradients",
      "The mean of parameters",
      "The loss divided by α"
    ],
    correctAnswer: "The sum of squared gradients",
    explanation: "AdaGrad defines Gt = Gt−1 + gt² = Στ=1^t gτ².",
    difficulty: "easy"
  },
  {
    id: "l8-q4",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "AdaGrad Frequent vs Rare Features",
    question: "Which feature receives relatively larger steps in AdaGrad?",
    options: [
      "A frequently updated feature",
      "A rarely updated feature",
      "All features receive exactly equal steps",
      "Only the largest feature"
    ],
    correctAnswer: "A rarely updated feature",
    explanation: "Rare features accumulate smaller squared gradients, leading to smaller denominators and relatively larger updates.",
    difficulty: "medium"
  },
  {
    id: "l8-q5",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "AdaGrad Fatal Flaw",
    question: "Why does AdaGrad eventually stall according to the lecture?",
    options: [
      "Its accumulated squared-gradient term keeps increasing, so effective step sizes shrink toward zero",
      "Its learning rate increases without bound",
      "Its gradients are always zero at initialization",
      "It ignores the denominator"
    ],
    correctAnswer: "Its accumulated squared-gradient term keeps increasing, so effective step sizes shrink toward zero",
    explanation: "Because Gt is monotonically increasing, α/√Gt tends toward zero over time.",
    difficulty: "easy"
  },
  {
    id: "l8-q6",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "RMSProp",
    question: "What averaging mechanism does RMSProp use for squared gradients?",
    options: [
      "A simple cumulative sum",
      "An exponentially weighted moving average",
      "A maximum operation",
      "A median operation"
    ],
    correctAnswer: "An exponentially weighted moving average",
    explanation: "RMSProp uses a decaying second-moment estimate so old gradients gradually lose influence.",
    difficulty: "easy"
  },
  {
    id: "l8-q7",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "RMSProp Memory Window",
    question: "What approximate memory-window size is associated with β = 0.9 in the lecture?",
    options: [
      "1 step",
      "5 steps",
      "About 10 steps",
      "About 100 steps"
    ],
    correctAnswer: "About 10 steps",
    explanation: "The lecture uses the approximation 1/(1−β), which gives about 10 steps for β=0.9.",
    difficulty: "medium"
  },
  {
    id: "l8-q8",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "RMSProp Scale Invariance",
    question: "What is the key scale-invariance result shown for RMSProp under a steady gradient g?",
    options: [
      "The step approaches α regardless of the magnitude of g",
      "The step grows proportionally to g²",
      "The step becomes zero immediately",
      "The step is always 0.25α"
    ],
    correctAnswer: "The step approaches α regardless of the magnitude of g",
    explanation: "When the moving average settles near g², the update magnitude becomes approximately α.",
    difficulty: "medium"
  },
  {
    id: "l8-q9",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "Adam Bias Correction",
    question: "Which expressions provide the bias-corrected first and second moments in Adam?",
    options: [
      "m̂t = mt/(1−β1^t), v̂t = vt/(1−β2^t)",
      "m̂t = mt(1−β1^t), v̂t = vt(1−β2^t)",
      "m̂t = mt/β1, v̂t = vt/β2",
      "m̂t = mt + β1^t, v̂t = vt + β2^t"
    ],
    correctAnswer: "m̂t = mt/(1−β1^t), v̂t = vt/(1−β2^t)",
    explanation: "Adam divides the early biased moment estimates by their expected shrinkage factors.",
    difficulty: "easy"
  },
  {
    id: "l8-q10",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "Complete Adam Update",
    question: "Which description best matches the Adam algorithm in the lecture?",
    options: [
      "First moment + second moment + bias correction + adaptive update",
      "Only first moment with no correction",
      "Only cumulative squared gradients",
      "Pure momentum with no scaling"
    ],
    correctAnswer: "First moment + second moment + bias correction + adaptive update",
    explanation: "Adam combines gradient momentum, squared-gradient averaging, bias correction, and per-coordinate scaling.",
    difficulty: "medium"
  },
  {
    id: "l8-q11",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "AdamW Update",
    question: "What extra term appears explicitly in AdamW's update to decouple weight decay?",
    options: [
      "w_t(1 − αλ)",
      "w_t(1 + αλ)",
      "α/λ",
      "λ/w_t"
    ],
    correctAnswer: "w_t(1 − αλ)",
    explanation: "AdamW directly shrinks the current parameters by the multiplicative factor 1 − αλ.",
    difficulty: "medium"
  },
  {
    id: "l8-q12",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "Optimizer Selection Matrix",
    question: "Which optimizer is identified with overcoming AdaGrad's stalling through leaky averaging?",
    options: [
      "SGD",
      "RMSProp",
      "NAG",
      "Plain momentum"
    ],
    correctAnswer: "RMSProp",
    explanation: "RMSProp replaces AdaGrad's ever-growing accumulator with an exponentially weighted moving average.",
    difficulty: "easy"
  },
  {
    id: "l8-q13",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "Numerical Walkthrough",
    question: "In the lecture's two-parameter comparison, which optimizer shows a 10:1 ratio between the first and second coordinate updates?",
    options: [
      "Plain SGD",
      "AdaGrad",
      "RMSProp",
      "Adam"
    ],
    correctAnswer: "Plain SGD",
    explanation: "With gradients [3.0,4.0], plain SGD preserves their magnitude ratio, giving a 3:4 update ratio conceptually; the lecture's table emphasizes the strongest disparity under its coordinate values as 10.0.",
    difficulty: "hard"
  },
  {
    id: "l8-q14",
    lecture: "Lecture 08 - Adaptive Learning Rates: AdaGrad, RMSProp & Adam",
    topic: "Comparative Trajectories",
    question: "Which optimizer is shown as having a monotonically decaying effective learning rate that can become extremely small?",
    options: [
      "AdaGrad",
      "RMSProp",
      "Adam",
      "SGD with momentum"
    ],
    correctAnswer: "AdaGrad",
    explanation: "The lecture's trajectory plot depicts AdaGrad decaying much more aggressively than RMSProp and Adam.",
    difficulty: "easy"
  },

  {
    id: "l9-q1",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Generalisation vs Memorisation",
    question: "What distinguishes the learner from the memoriser in the lecture's examples?",
    options: [
      "The learner performs well only on past questions",
      "The learner captures underlying patterns and generalizes to new questions",
      "The memoriser always has lower training accuracy",
      "The learner has no parameters"
    ],
    correctAnswer: "The learner captures underlying patterns and generalizes to new questions",
    explanation: "Generalization means learning reusable structure rather than merely memorizing training examples.",
    difficulty: "easy"
  },
  {
    id: "l9-q2",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Signal vs Noise",
    question: "Which example is classified as noise in the lecture?",
    options: [
      "A relationship that repeats across data",
      "Measurement error and random fluctuations",
      "A stable feature",
      "A meaningful trend"
    ],
    correctAnswer: "Measurement error and random fluctuations",
    explanation: "Noise is described as measurement error, missing variables, and random fluctuations that do not reliably repeat.",
    difficulty: "easy"
  },
  {
    id: "l9-q3",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Causes of Overfitting",
    question: "Which combination is listed as ingredients of overfitting?",
    options: [
      "Low model capacity, clean data, short training",
      "Excessive model capacity, noisy/small data, prolonged training",
      "Large batch size, low dimension, no parameters",
      "Only high learning rate"
    ],
    correctAnswer: "Excessive model capacity, noisy/small data, prolonged training",
    explanation: "The lecture identifies these three ingredients as major contributors to overfitting.",
    difficulty: "easy"
  },
  {
    id: "l9-q4",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Large Weights and Overfitting",
    question: "Why can large weights make a model overfit?",
    options: [
      "They make small input changes cause large output changes",
      "They guarantee smooth decision boundaries",
      "They eliminate feature interactions",
      "They remove model capacity"
    ],
    correctAnswer: "They make small input changes cause large output changes",
    explanation: "The lecture links large weights with high-frequency, sensitive decision boundaries that can fit noise.",
    difficulty: "medium"
  },
  {
    id: "l9-q5",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "L2 Regularisation",
    question: "What penalty is added by L2 regularisation?",
    options: [
      "λΣ|wi|",
      "(λ/2)Σwi²",
      "λΣyi",
      "λΣ1/wi"
    ],
    correctAnswer: "(λ/2)Σwi²",
    explanation: "The lecture defines the L2 objective as L(w) + (λ/2)||w||².",
    difficulty: "easy"
  },
  {
    id: "l9-q6",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "L2 Weight Decay",
    question: "Why is L2 regularisation often called weight decay?",
    options: [
      "Because the weight update contains a multiplicative shrinkage factor",
      "Because all weights become exactly zero in one step",
      "Because it removes the gradient",
      "Because it changes the batch size"
    ],
    correctAnswer: "Because the weight update contains a multiplicative shrinkage factor",
    explanation: "The update can be written as wt+1 = wt(1−αλ) − α∇L(wt), which directly shrinks weights.",
    difficulty: "medium"
  },
  {
    id: "l9-q7",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "L2 Decision Boundaries",
    question: "How does L2 regularisation affect decision boundaries according to the lecture?",
    options: [
      "It encourages smoother boundaries by discouraging large weights",
      "It forces all boundaries to become circles",
      "It makes boundaries more jagged",
      "It guarantees zero training accuracy"
    ],
    correctAnswer: "It encourages smoother boundaries by discouraging large weights",
    explanation: "Smaller weights imply less sensitive activation changes and smoother, better-generalizing boundaries.",
    difficulty: "easy"
  },
  {
    id: "l9-q8",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Bias Exclusion from L2",
    question: "Why does the lecture recommend not penalizing bias parameters with L2?",
    options: [
      "Bias controls threshold or position rather than model complexity",
      "Bias cannot be differentiated",
      "Bias is always zero",
      "Bias is not a parameter"
    ],
    correctAnswer: "Bias controls threshold or position rather than model complexity",
    explanation: "The lecture explicitly warns against including biases in the L2 penalty.",
    difficulty: "medium"
  },
  {
    id: "l9-q9",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "L1 Regularisation",
    question: "What penalty does L1 regularisation add to the objective?",
    options: [
      "λ||w||1",
      "λ||w||2²",
      "λΣwi²/2",
      "λmax(w)"
    ],
    correctAnswer: "λ||w||1",
    explanation: "L1 adds the sum of absolute weight magnitudes to the loss.",
    difficulty: "easy"
  },
  {
    id: "l9-q10",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "L1 Sparsity and Feature Selection",
    question: "What special effect does L1 regularisation encourage?",
    options: [
      "Many weights become exactly zero",
      "All weights become equal",
      "All weights become large",
      "The bias becomes zero"
    ],
    correctAnswer: "Many weights become exactly zero",
    explanation: "The geometry and sub-gradient behavior of L1 encourages exact zeros, producing sparse models.",
    difficulty: "easy"
  },
  {
    id: "l9-q11",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "L1 vs L2 Geometry",
    question: "Which geometric constraint produces the diamond-shaped feasible region shown for L1?",
    options: [
      "L1 norm constraint",
      "L2 norm constraint",
      "L∞ norm constraint",
      "No constraint"
    ],
    correctAnswer: "L1 norm constraint",
    explanation: "In two dimensions, an L1 constraint forms a diamond whose corners promote sparse solutions.",
    difficulty: "medium"
  },
  {
    id: "l9-q12",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Early Stopping",
    question: "What signal is monitored during early stopping?",
    options: [
      "Training loss only",
      "Validation loss",
      "Input mean only",
      "Weight count"
    ],
    correctAnswer: "Validation loss",
    explanation: "The lecture uses validation-loss monitoring to detect when generalization starts worsening.",
    difficulty: "easy"
  },
  {
    id: "l9-q13",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Early Stopping Patience",
    question: "What does the patience parameter control in early stopping?",
    options: [
      "How many epochs without sufficient validation improvement are tolerated",
      "The number of layers",
      "The batch size",
      "The L2 coefficient"
    ],
    correctAnswer: "How many epochs without sufficient validation improvement are tolerated",
    explanation: "Patience prevents stopping because of a short-term fluctuation in validation loss.",
    difficulty: "easy"
  },
  {
    id: "l9-q14",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Restore Best Checkpoint",
    question: "Why should the best checkpoint be restored after early stopping?",
    options: [
      "The final epoch may already be overfitting",
      "The final epoch always has zero loss",
      "Weights are lost after training",
      "Validation loss is unavailable at the end"
    ],
    correctAnswer: "The final epoch may already be overfitting",
    explanation: "The lecture recommends keeping the weights from the epoch with the lowest validation loss rather than the final epoch.",
    difficulty: "medium"
  },
  {
    id: "l9-q15",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Early Stopping as Implicit Regularisation",
    question: "Why can early stopping act like regularisation?",
    options: [
      "It limits how far parameters can travel from initialization",
      "It adds an explicit L1 penalty",
      "It increases model capacity indefinitely",
      "It removes all training data"
    ],
    correctAnswer: "It limits how far parameters can travel from initialization",
    explanation: "By terminating optimization early, the reachable parameter space is constrained, acting similarly to a regularizer.",
    difficulty: "hard"
  },
  {
    id: "l9-q16",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Dropout",
    question: "What happens during standard dropout training?",
    options: [
      "Random neurons are disabled with probability p",
      "All neurons are duplicated",
      "Weights are permanently deleted",
      "The output layer is removed"
    ],
    correctAnswer: "Random neurons are disabled with probability p",
    explanation: "Dropout randomly turns off neurons during training to reduce co-adaptation.",
    difficulty: "easy"
  },
  {
    id: "l9-q17",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Inverted Dropout",
    question: "For inverted dropout with keep probability 1−p, what happens to a surviving activation?",
    options: [
      "It is multiplied by 1−p",
      "It is multiplied by 1/(1−p)",
      "It is always set to zero",
      "It is squared"
    ],
    correctAnswer: "It is multiplied by 1/(1−p)",
    explanation: "Inverted dropout scales surviving activations during training so their expectation matches inference without extra scaling.",
    difficulty: "medium"
  },
  {
    id: "l9-q18",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Dropout Training and Inference Modes",
    question: "What should happen to dropout during inference?",
    options: [
      "Dropout remains active with higher probability",
      "Dropout is disabled so all neurons are used",
      "Only half the neurons are used",
      "Weights are randomized"
    ],
    correctAnswer: "Dropout is disabled so all neurons are used",
    explanation: "The lecture explicitly contrasts model.train() with model.eval(), where dropout is disabled during evaluation.",
    difficulty: "easy"
  },
  {
    id: "l9-q19",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Diagnosing Loss Curves",
    question: "Which pattern indicates high variance or overfitting?",
    options: [
      "High training and high validation loss that both decrease slowly",
      "Low training loss while validation loss starts increasing",
      "Both losses remain identical at all times",
      "Training loss is always higher than validation loss"
    ],
    correctAnswer: "Low training loss while validation loss starts increasing",
    explanation: "The lecture's overfitting diagram shows training loss continuing downward while validation loss rises.",
    difficulty: "medium"
  },
  {
    id: "l9-q20",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Strategic Regularisation Framework",
    question: "What sequence of regularisation actions is suggested in the lecture's recommended recipe?",
    options: [
      "Start with capacity, use early stopping, add L2, then add dropout if needed",
      "Always use maximum L1 first",
      "Remove validation data and train longer",
      "Use dropout only at inference"
    ],
    correctAnswer: "Start with capacity, use early stopping, add L2, then add dropout if needed",
    explanation: "The lecture recommends an incremental strategy rather than stacking excessive regularizers from the beginning.",
    difficulty: "medium"
  },
  {
    id: "l9-q21",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Stacking Regularisers",
    question: "What is the main warning about stacking too many regularisers?",
    options: [
      "Too much regularisation can cause underfitting",
      "More regularisation always improves accuracy",
      "Regularisation has no effect on bias",
      "All regularisers cancel each other exactly"
    ],
    correctAnswer: "Too much regularisation can cause underfitting",
    explanation: "The lecture emphasizes diminishing returns and the possibility of restricting the model too much.",
    difficulty: "easy"
  },
  {
    id: "l9-q22",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "L1 and L2 Numerical Examples",
    question: "In the lecture's numerical example with w = 0.5, α = 0.1, λ = 0.2, and ∇L = 0.05, what is the L2-updated weight?",
    options: [
      "0.4850",
      "0.4750",
      "0.5000",
      "0.4500"
    ],
    correctAnswer: "0.4850",
    explanation: "The lecture computes wnew = w − α(λw) − α∇L = 0.5 − 0.01 − 0.005 = 0.485.",
    difficulty: "medium"
  },
  {
    id: "l9-q23",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Dropout Arithmetic Example",
    question: "With a = [2,4,6,8], mask = [1,0,1,0], and keep probability 0.5, what is the inverted-dropout output?",
    options: [
      "[2,4,6,8]",
      "[4,0,12,0]",
      "[1,0,3,0]",
      "[4,8,12,16]"
    ],
    correctAnswer: "[4,0,12,0]",
    explanation: "The surviving entries are scaled by 1/0.5 = 2, giving [4,0,12,0].",
    difficulty: "medium"
  },
  {
    id: "l9-q24",
    lecture: "Lecture 09 - Regularisation: Learning the Pattern, Not the Noise",
    topic: "Regularisation Comparison Matrix",
    question: "Which method in the lecture is described as introducing random neuron dropout and reducing co-adaptation?",
    options: [
      "L2",
      "L1",
      "Early stopping",
      "Dropout"
    ],
    correctAnswer: "Dropout",
    explanation: "Dropout works by randomly disabling neurons during training, reducing dependency on particular subnetworks.",
    difficulty: "easy"
  },

  {
    id: "l10p1-q1",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Images as Numeric Tensors",
    question: "How is a grayscale image represented in the lecture?",
    options: [
      "As a 2D matrix of pixel intensities",
      "As a 1D list only",
      "As a graph with no numeric values",
      "As a binary label"
    ],
    correctAnswer: "As a 2D matrix of pixel intensities",
    explanation: "A grayscale image is represented as a two-dimensional array of intensity values.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q2",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "RGB Images",
    question: "How many channels does an RGB image have?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: "3",
    explanation: "RGB images have separate red, green, and blue channels.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q3",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Batch Tensor Representation",
    question: "Which PyTorch tensor shape is given for a batch of images in the lecture?",
    options: [
      "R^(B×C×H×W)",
      "R^(H+C+W)",
      "R^(B+H+W)",
      "R^(H×W) only"
    ],
    correctAnswer: "R^(B×C×H×W)",
    explanation: "The lecture uses batch size B, channels C, height H, and width W in PyTorch's standard image layout.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q4",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Normalization",
    question: "What is one normalization approach mentioned for image tensors?",
    options: [
      "Map [0,255] to [0,1]",
      "Map [0,255] to [255,510]",
      "Convert all pixels to integers above 255",
      "Divide by the batch size only"
    ],
    correctAnswer: "Map [0,255] to [0,1]",
    explanation: "The lecture notes normalization from [0,255] to [0,1], or standardization using mean and standard deviation.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q5",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Why Fully Connected Layers Fail on Images",
    question: "Why does a fully connected layer become problematic for a 224×224 RGB image?",
    options: [
      "The input has very few values",
      "Flattening creates a huge number of connections and loses spatial structure",
      "RGB images cannot be flattened",
      "Fully connected layers cannot use biases"
    ],
    correctAnswer: "Flattening creates a huge number of connections and loses spatial structure",
    explanation: "A 224×224×3 image has 150,528 inputs, leading to huge parameter counts and loss of spatial locality.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q6",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Fully Connected Parameter Explosion",
    question: "Approximately how many weights connect a 224×224×3 image to a 1,024-neuron first hidden layer?",
    options: [
      "1.5 million",
      "15.4 million",
      "154 million",
      "1.54 billion"
    ],
    correctAnswer: "154 million",
    explanation: "150,528 input values × 1,024 neurons gives approximately 154 million weights.",
    difficulty: "medium"
  },
  {
    id: "l10p1-q7",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "2D Convolution",
    question: "What operation does the CNN kernel perform at each image location?",
    options: [
      "Element-wise product followed by a sum and bias",
      "Only a maximum operation",
      "Only a division",
      "A global average over the whole image"
    ],
    correctAnswer: "Element-wise product followed by a sum and bias",
    explanation: "The lecture defines convolution as a local dot product of a patch with kernel weights plus a bias.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q8",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Cross-Correlation",
    question: "What does the lecture call the actual operation used by common deep-learning libraries?",
    options: [
      "True mathematical convolution with kernel flipping",
      "Cross-correlation without kernel flipping",
      "Discrete Fourier transform only",
      "Pooling"
    ],
    correctAnswer: "Cross-correlation without kernel flipping",
    explanation: "The lecture notes that learned CNN kernels are typically applied as cross-correlation rather than explicitly flipped convolution.",
    difficulty: "medium"
  },
  {
    id: "l10p1-q9",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Weight Sharing and Translation Equivariance",
    question: "What does weight sharing mean in a convolutional layer?",
    options: [
      "A different kernel is learned for every pixel location",
      "The same kernel is reused across spatial locations",
      "All layers share the same bias",
      "Every output pixel has independent parameters"
    ],
    correctAnswer: "The same kernel is reused across spatial locations",
    explanation: "The same kernel weights are applied at all spatial positions, drastically reducing parameters.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q10",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Translation Equivariance",
    question: "If an object shifts in the input image, what property does the convolutional feature map ideally exhibit?",
    options: [
      "The feature disappears",
      "The feature map shifts by the same amount",
      "All activations become zero",
      "The feature becomes invariant to all changes"
    ],
    correctAnswer: "The feature map shifts by the same amount",
    explanation: "Convolution is translation-equivariant: shifting the input shifts the resulting feature map correspondingly.",
    difficulty: "medium"
  },
  {
    id: "l10p1-q11",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Padding and Stride",
    question: "What is the output-size formula for a convolution given in the lecture?",
    options: [
      "O = floor((W − K + 2P)/S) + 1",
      "O = (W + K + P)S",
      "O = WKS + P",
      "O = W − K − 2P + S"
    ],
    correctAnswer: "O = floor((W − K + 2P)/S) + 1",
    explanation: "This is the universal spatial output-size formula used for width and height.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q12",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Padding and Stride",
    question: "For a 3×3 kernel with stride 1 and same spatial size, what padding is required?",
    options: [
      "P = 0",
      "P = 1",
      "P = 2",
      "P = 3"
    ],
    correctAnswer: "P = 1",
    explanation: "For odd kernel size K=3, same padding is (K−1)/2 = 1 when stride is 1.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q13",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Stride",
    question: "What is the main spatial effect of setting stride S = 2?",
    options: [
      "The feature map is typically downsampled by about 2×",
      "The kernel becomes 2× larger",
      "The number of channels doubles automatically",
      "Padding becomes zero"
    ],
    correctAnswer: "The feature map is typically downsampled by about 2×",
    explanation: "A stride of 2 skips every other spatial position, reducing the output resolution.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q14",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Multi-Channel Convolution",
    question: "For an input with Cin channels, how many channels does each convolutional kernel span?",
    options: [
      "1 channel only",
      "Exactly 3 channels always",
      "All Cin input channels",
      "Cout channels"
    ],
    correctAnswer: "All Cin input channels",
    explanation: "A convolutional filter has dimensions Kh × Kw × Cin and combines information across all input channels.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q15",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Convolutional Parameter Count",
    question: "Which formula gives the parameter count for a convolutional layer?",
    options: [
      "(Kh × Kw × Cin + 1) × Cout",
      "(Kh + Kw + Cin) × Cout",
      "Kh × Kw × H × W",
      "Cin + Cout + Kh + Kw"
    ],
    correctAnswer: "(Kh × Kw × Cin + 1) × Cout",
    explanation: "Each output filter has Kh×Kw×Cin weights plus one bias, and there are Cout filters.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q16",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Pooling",
    question: "What does max pooling select from its local window?",
    options: [
      "The average value",
      "The maximum value",
      "The minimum value",
      "The sum of all values"
    ],
    correctAnswer: "The maximum value",
    explanation: "Max pooling keeps the strongest activation in each pooling window.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q17",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Pooling",
    question: "What is the main purpose of average pooling?",
    options: [
      "Produce a smoother representative value from a local window",
      "Select only the strongest feature",
      "Increase spatial resolution",
      "Increase the number of channels"
    ],
    correctAnswer: "Produce a smoother representative value from a local window",
    explanation: "Average pooling computes the mean within each window, giving a smoother aggregation than max pooling.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q18",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Pooling Parameters",
    question: "How many learnable parameters does a standard pooling layer have?",
    options: [
      "1",
      "2",
      "The kernel size",
      "0"
    ],
    correctAnswer: "0",
    explanation: "Pooling performs a fixed operation and has no learnable weights or biases.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q19",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Receptive Fields",
    question: "With successive 3×3 convolution layers of stride 1, what receptive field results after two layers according to the lecture?",
    options: [
      "3×3",
      "5×5",
      "6×6",
      "9×9"
    ],
    correctAnswer: "5×5",
    explanation: "Two stacked 3×3 convolutions produce a 5×5 effective receptive field.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q20",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Stacking 3×3 vs 5×5",
    question: "Why can two 3×3 convolutions be preferable to one 5×5 convolution?",
    options: [
      "They use fewer parameters and add an extra nonlinearity",
      "They always use more parameters",
      "They remove all nonlinearities",
      "They cannot build larger receptive fields"
    ],
    correctAnswer: "They use fewer parameters and add an extra nonlinearity",
    explanation: "Two 3×3 layers give a 5×5 receptive field while using fewer parameters and introducing two activations.",
    difficulty: "medium"
  },
  {
    id: "l10p1-q21",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Hierarchical Feature Learning",
    question: "Which progression best matches the lecture's hierarchical abstraction idea?",
    options: [
      "Edges → textures/shapes → object parts → whole objects",
      "Objects → edges → pixels → labels",
      "Labels → object parts → colors → edges",
      "Textures → pixels → weights → gradients"
    ],
    correctAnswer: "Edges → textures/shapes → object parts → whole objects",
    explanation: "CNN depth progressively builds increasingly abstract visual representations.",
    difficulty: "easy"
  },
  {
    id: "l10p1-q22",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Numerical 3×3 Convolution",
    question: "In the lecture's worked 3×3 example, what is the resulting output after adding the bias b = -1?",
    options: [
      "1.0",
      "2.0",
      "3.0",
      "4.0"
    ],
    correctAnswer: "2.0",
    explanation: "The dot product is 3, and adding the bias −1 gives y = 2.",
    difficulty: "medium"
  },
  {
    id: "l10p1-q23",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Padding and Stride Numerical Trace",
    question: "For an input size 28, kernel 5, padding 2, and stride 1, what output size is shown in the lecture?",
    options: [
      "24",
      "26",
      "28",
      "30"
    ],
    correctAnswer: "28",
    explanation: "O = floor((28−5+2×2)/1)+1 = 28.",
    difficulty: "medium"
  },
  {
    id: "l10p1-q24",
    lecture: "Lecture 10 Part 1 - CNN Foundations: From Pixels to Patterns",
    topic: "Parameter Counting Example",
    question: "For Cin = 3, Cout = 64, and a 3×3 kernel, how many convolutional parameters are shown in the lecture?",
    options: [
      "1,728",
      "1,792",
      "1,856",
      "2,048"
    ],
    correctAnswer: "1,792",
    explanation: "Each filter has 3×3×3 + 1 = 28 parameters, and 28×64 = 1,792.",
    difficulty: "medium"
  },

  {
    id: "l10p2-q1",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "Historical Evolution",
    question: "Which chronology matches the architectures discussed in the lecture?",
    options: [
      "LeNet-5 (1998) → AlexNet (2012) → VGG-16 (2014)",
      "AlexNet (1998) → VGG-16 (2012) → LeNet-5 (2014)",
      "VGG-16 (1998) → LeNet-5 (2012) → AlexNet (2014)",
      "LeNet-5 (2014) → AlexNet (1998) → VGG-16 (2012)"
    ],
    correctAnswer: "LeNet-5 (1998) → AlexNet (2012) → VGG-16 (2014)",
    explanation: "The lecture presents these three milestones in that order.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q2",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "Architecture at a Glance",
    question: "Which architecture uses 3×3 convolutions throughout its convolutional stages according to the lecture?",
    options: [
      "LeNet-5",
      "AlexNet",
      "VGG-16",
      "All three equally"
    ],
    correctAnswer: "VGG-16",
    explanation: "VGG-16 is characterized by a uniform use of 3×3 convolutions.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q3",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "Key CNN Formulas",
    question: "Which parameter-count formula applies to a convolutional layer in the lecture?",
    options: [
      "(F×F×Cin + 1) × Cout",
      "(F+Cin+Cout) × S",
      "F×F×H×W",
      "Cin×H×W"
    ],
    correctAnswer: "(F×F×Cin + 1) × Cout",
    explanation: "Each output filter contains F×F×Cin weights plus one bias.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q4",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "LeNet-5",
    question: "What was the main task associated with LeNet-5 in the lecture?",
    options: [
      "Handwritten digit recognition",
      "Image captioning",
      "Object detection in video",
      "Speech recognition"
    ],
    correctAnswer: "Handwritten digit recognition",
    explanation: "LeNet-5 was presented as a pioneering handwritten digit recognizer for MNIST-style data.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q5",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "LeNet-5",
    question: "Which activations are associated with LeNet-5 in the lecture?",
    options: [
      "ReLU only",
      "Tanh/Sigmoid",
      "Softmax only",
      "ELU only"
    ],
    correctAnswer: "Tanh/Sigmoid",
    explanation: "The architecture table and layer details associate LeNet-5 with tanh/sigmoid activations.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q6",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "AlexNet",
    question: "Which combination was a major contribution of AlexNet?",
    options: [
      "ReLU, dropout, GPU training, and data augmentation",
      "Only tanh activations",
      "Only 1×1 convolutions",
      "Only average pooling"
    ],
    correctAnswer: "ReLU, dropout, GPU training, and data augmentation",
    explanation: "The lecture highlights these techniques as major parts of AlexNet's 2012 breakthrough.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q7",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "AlexNet Architecture",
    question: "What input size does AlexNet use in the lecture?",
    options: [
      "32×32 grayscale",
      "224×224×3 RGB",
      "28×28 grayscale",
      "512×512×1"
    ],
    correctAnswer: "224×224×3 RGB",
    explanation: "The lecture presents AlexNet as operating on 224×224 RGB images.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q8",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "AlexNet Performance",
    question: "What top-5 ImageNet error is associated with AlexNet in the lecture?",
    options: [
      "25.6%",
      "16.4%",
      "7.3%",
      "5.25%"
    ],
    correctAnswer: "16.4%",
    explanation: "The lecture gives a 16.4% top-5 error for AlexNet.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q9",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "VGG-16",
    question: "What is the central design principle of VGG-16 highlighted in the lecture?",
    options: [
      "Replace large filters with stacks of 3×3 convolutions",
      "Use only one convolutional layer",
      "Use 11×11 filters everywhere",
      "Avoid nonlinear activations"
    ],
    correctAnswer: "Replace large filters with stacks of 3×3 convolutions",
    explanation: "VGG-16 uses repeated 3×3 convolutions to increase depth and nonlinear expressiveness efficiently.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q10",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "VGG-16 Architecture",
    question: "How many layers does the lecture associate with VGG-16?",
    options: [
      "7",
      "8",
      "16",
      "50"
    ],
    correctAnswer: "16",
    explanation: "VGG-16 is named for its 16 learned layers.",
    difficulty: "easy"
  },
  {
    id: "l10p2-q11",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "Factoring Large Filters",
    question: "According to the lecture, why can two 3×3 convolutions replace one 5×5 convolution effectively?",
    options: [
      "They use fewer parameters and add an extra ReLU nonlinearity",
      "They always require more memory",
      "They have a smaller receptive field",
      "They eliminate the need for padding"
    ],
    correctAnswer: "They use fewer parameters and add an extra ReLU nonlinearity",
    explanation: "The VGG principle provides the same effective receptive field with fewer parameters and more nonlinear transformations.",
    difficulty: "medium"
  },
  {
    id: "l10p2-q12",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "Computational Bottlenecks and Memory",
    question: "Where does VGG-16 store most of its parameters according to the lecture?",
    options: [
      "Early convolutional layers",
      "Final fully connected layers",
      "Pooling layers",
      "Input image"
    ],
    correctAnswer: "Final fully connected layers",
    explanation: "The lecture states that over 80–90% of VGG parameters are concentrated in the final fully connected layers.",
    difficulty: "medium"
  },
  {
    id: "l10p2-q13",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "AlexNet Computational Cost",
    question: "Approximately how many MAC operations are shown for the AlexNet Conv1 example?",
    options: [
      "10.5 million",
      "105 million",
      "1.05 billion",
      "10.5 billion"
    ],
    correctAnswer: "105 million",
    explanation: "The lecture calculates approximately 105 million operations for that convolution.",
    difficulty: "medium"
  },
  {
    id: "l10p2-q14",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "VGG Fully Connected Memory",
    question: "Approximately how much FP32 memory is shown for the large VGG FC6 layer?",
    options: [
      "3.92 MB",
      "39.2 MB",
      "392 MB",
      "3.92 GB"
    ],
    correctAnswer: "392 MB",
    explanation: "The lecture computes approximately 102,764,544 weights × 4 bytes ≈ 392 MB.",
    difficulty: "medium"
  },
  {
    id: "l10p2-q15",
    lecture: "Lecture 10 Part 2 - Classical CNN Architectures: LeNet, AlexNet & VGG-16",
    topic: "Final Architecture Comparison",
    question: "Which model has the lowest top-5 error among LeNet-5, AlexNet, and VGG-16 in the lecture's comparison?",
    options: [
      "LeNet-5",
      "AlexNet",
      "VGG-16",
      "They are equal"
    ],
    correctAnswer: "VGG-16",
    explanation: "The final comparison lists VGG-16 at 7.3%, lower than AlexNet's 16.4%.",
    difficulty: "easy"
  },

  {
    id: "l11-q1",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Executive Summary",
    question: "Which two architectures are presented as solutions to the degradation problem in very deep CNNs?",
    options: [
      "LeNet and AlexNet",
      "Inception and ResNet",
      "VGG and LeNet",
      "AlexNet and SVM"
    ],
    correctAnswer: "Inception and ResNet",
    explanation: "The lecture focuses on GoogLeNet/Inception and ResNet as responses to the difficulties of simply making plain CNNs deeper.",
    difficulty: "easy"
  },
  {
    id: "l11-q2",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Degradation Problem",
    question: "What is the degradation problem described in the lecture?",
    options: [
      "Deeper plain networks can have higher training error than shallower ones",
      "Training error always becomes zero with depth",
      "Deeper networks always overfit less",
      "Validation loss is independent of depth"
    ],
    correctAnswer: "Deeper plain networks can have higher training error than shallower ones",
    explanation: "The lecture emphasizes that this is an optimization/degradation issue, not simply overfitting.",
    difficulty: "easy"
  },
  {
    id: "l11-q3",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Depth Barrier",
    question: "Why can repeatedly multiplying Jacobians make very deep plain networks difficult to train?",
    options: [
      "It can cause gradients to vanish or explode",
      "It guarantees stable gradients",
      "It removes all nonlinearities",
      "It prevents convolution entirely"
    ],
    correctAnswer: "It can cause gradients to vanish or explode",
    explanation: "Repeated Jacobian multiplication can amplify or shrink gradients dramatically across depth.",
    difficulty: "medium"
  },
  {
    id: "l11-q4",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "1x1 Convolution",
    question: "What is the main purpose of a 1×1 convolution in the lecture?",
    options: [
      "Increase image width and height",
      "Reduce or project the channel dimension while preserving H×W",
      "Perform global pooling",
      "Replace every 3×3 convolution"
    ],
    correctAnswer: "Reduce or project the channel dimension while preserving H×W",
    explanation: "A 1×1 convolution mixes information across channels at each spatial location while preserving spatial dimensions.",
    difficulty: "easy"
  },
  {
    id: "l11-q5",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "1x1 Convolution as Local MLP",
    question: "How does the lecture interpret a 1×1 convolution conceptually?",
    options: [
      "As a local fully connected transformation across channels",
      "As a spatial pooling operation",
      "As a global attention layer",
      "As a normalization-only layer"
    ],
    correctAnswer: "As a local fully connected transformation across channels",
    explanation: "At each pixel, a 1×1 convolution computes a learned linear combination across the channel dimension.",
    difficulty: "medium"
  },
  {
    id: "l11-q6",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Inception Architecture",
    question: "Which branches are included in the Inception module described in the lecture?",
    options: [
      "1×1 conv, 1×1→3×3, 1×1→5×5, and 3×3 max-pool→1×1",
      "Only three 3×3 convolutions",
      "Only pooling branches",
      "Only fully connected branches"
    ],
    correctAnswer: "1×1 conv, 1×1→3×3, 1×1→5×5, and 3×3 max-pool→1×1",
    explanation: "These parallel branches process the same input at multiple scales before concatenation.",
    difficulty: "easy"
  },
  {
    id: "l11-q7",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Inception Bottlenecks",
    question: "Why are 1×1 bottlenecks used before expensive 3×3 or 5×5 convolutions?",
    options: [
      "To reduce the number of input channels and therefore computation",
      "To increase spatial dimensions",
      "To eliminate nonlinearities",
      "To make kernels larger"
    ],
    correctAnswer: "To reduce the number of input channels and therefore computation",
    explanation: "Reducing Cin before an expensive spatial convolution can drastically reduce FLOPs.",
    difficulty: "easy"
  },
  {
    id: "l11-q8",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Global Average Pooling",
    question: "What does Inception use instead of very large dense layers near the output?",
    options: [
      "Global average pooling",
      "Global max convolution",
      "L1 pooling",
      "A second input layer"
    ],
    correctAnswer: "Global average pooling",
    explanation: "The lecture highlights global average pooling as a way to avoid huge fully connected layers.",
    difficulty: "easy"
  },
  {
    id: "l11-q9",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Auxiliary Classifiers",
    question: "Why are auxiliary classifiers used in Inception according to the lecture?",
    options: [
      "To provide additional training signals and combat vanishing gradients",
      "To increase inference-time computation permanently",
      "To replace all pooling layers",
      "To remove residual connections"
    ],
    correctAnswer: "To provide additional training signals and combat vanishing gradients",
    explanation: "Auxiliary classifiers supply intermediate supervision during training and are discarded at inference.",
    difficulty: "medium"
  },
  {
    id: "l11-q10",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Residual Learning",
    question: "What function does a basic ResNet block learn?",
    options: [
      "H(x) = F(x) + x",
      "H(x) = F(x) − x",
      "H(x) = F(x)x",
      "H(x) = x/F(x)"
    ],
    correctAnswer: "H(x) = F(x) + x",
    explanation: "ResNet learns a residual mapping F(x) and adds the identity shortcut x.",
    difficulty: "easy"
  },
  {
    id: "l11-q11",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Residual Mapping",
    question: "What residual mapping does a block learn if H(x) is the desired mapping?",
    options: [
      "F(x) = H(x) − x",
      "F(x) = H(x) + x",
      "F(x) = x − H(x)",
      "F(x) = H(x)x"
    ],
    correctAnswer: "F(x) = H(x) − x",
    explanation: "The residual branch is defined as the difference between the desired mapping and the identity.",
    difficulty: "easy"
  },
  {
    id: "l11-q12",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Gradient Highway",
    question: "Why do identity shortcuts help very deep networks train?",
    options: [
      "They provide a direct gradient path through addition",
      "They eliminate the loss function",
      "They remove all weights",
      "They force gradients to zero"
    ],
    correctAnswer: "They provide a direct gradient path through addition",
    explanation: "The derivative of H(x)=F(x)+x contains an identity contribution, creating a robust gradient path.",
    difficulty: "medium"
  },
  {
    id: "l11-q13",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Projection Shortcut",
    question: "When is a 1×1 projection shortcut used in ResNet?",
    options: [
      "When spatial size or channel depth changes",
      "Only when the input is grayscale",
      "Whenever dropout is active",
      "Only in the final classifier"
    ],
    correctAnswer: "When spatial size or channel depth changes",
    explanation: "A projection such as Wsx is used to match dimensions before residual addition.",
    difficulty: "easy"
  },
  {
    id: "l11-q14",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "ResNet Bottleneck",
    question: "What is the structure of a ResNet bottleneck block shown in the lecture?",
    options: [
      "1×1 reduce channels → 3×3 conv → 1×1 restore channels",
      "5×5 → 5×5 → pooling",
      "Only three 1×1 convolutions",
      "Pooling → dense → 3×3"
    ],
    correctAnswer: "1×1 reduce channels → 3×3 conv → 1×1 restore channels",
    explanation: "The bottleneck reduces channels before the expensive 3×3 operation and restores them afterward.",
    difficulty: "easy"
  },
  {
    id: "l11-q15",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "ResNet-50 Dimension Tracing",
    question: "According to the lecture's ResNet-50 trace, what spatial size follows Stage 2?",
    options: [
      "112×112",
      "56×56",
      "28×28",
      "14×14"
    ],
    correctAnswer: "28×28",
    explanation: "The table shows Stage 1 at 112×112, Stage 2 at 56×56, and Stage 3 at 28×28.",
    difficulty: "easy"
  },
  {
    id: "l11-q16",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Inception FLOP Reduction",
    question: "What is the main computational effect of adding a 1×1 bottleneck before a 5×5 convolution in the lecture's example?",
    options: [
      "It can reduce FLOPs by roughly an order of magnitude",
      "It always increases FLOPs 10×",
      "It has no effect on computation",
      "It removes all spatial operations"
    ],
    correctAnswer: "It can reduce FLOPs by roughly an order of magnitude",
    explanation: "The example reduces computation from about 120 million to about 12.4 million operations.",
    difficulty: "medium"
  },
  {
    id: "l11-q17",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "ResNet Bottleneck Parameter Count",
    question: "In the lecture's bottleneck example with 256 input channels, 64 bottleneck channels, and 256 output channels, what is the total parameter count?",
    options: [
      "36,928",
      "70,016",
      "25,600",
      "64,256"
    ],
    correctAnswer: "70,016",
    explanation: "The three convolutional stages sum to 16,448 + 36,928 + 16,640 = 70,016 parameters.",
    difficulty: "hard"
  },
  {
    id: "l11-q18",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Architecture Comparison",
    question: "Which model in the lecture's comparison has the lowest top-5 error?",
    options: [
      "AlexNet",
      "VGG-16",
      "GoogLeNet",
      "ResNet-50"
    ],
    correctAnswer: "ResNet-50",
    explanation: "The table lists ResNet-50 at 5.25%, below GoogLeNet at 6.7%, VGG-16 at 7.3%, and AlexNet at 16.4%.",
    difficulty: "easy"
  },
  {
    id: "l11-q19",
    lecture: "Lecture 11 - Modern CNN Architectures: Inception & ResNet",
    topic: "Architecture Comparison",
    question: "Which model has the fewest parameters among AlexNet, VGG-16, GoogLeNet, and ResNet-50 in the lecture's comparison?",
    options: [
      "AlexNet",
      "VGG-16",
      "GoogLeNet",
      "ResNet-50"
    ],
    correctAnswer: "GoogLeNet",
    explanation: "The comparison lists approximately 6.8M parameters for GoogLeNet, fewer than ResNet-50, AlexNet, and VGG-16.",
    difficulty: "medium"
  }
];