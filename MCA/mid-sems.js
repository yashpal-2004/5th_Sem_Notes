const mcqs = [
  {
    id: "l01_q01",
    lecture: "Lecture 01",
    topic: "Promise and Goal of Computer Architecture",
    question: "What is the main goal of studying computer architecture according to the lecture?",
    options: [
      "To understand how a program is executed from transistors and gates up to Python",
      "To learn only high-level programming languages",
      "To design websites without understanding hardware",
      "To replace operating systems with hardware"
    ],
    correctAnswer: "To understand how a program is executed from transistors and gates up to Python",
    explanation: "The lecture emphasizes tracing computation from physical hardware such as transistors and gates through registers and datapaths up to assembly and Python.",
    difficulty: "easy"
  },
  {
    id: "l01_q02",
    lecture: "Lecture 01",
    topic: "Why Architecture Matters",
    question: "Why can caches and pipelines make code execute much faster?",
    options: [
      "They increase the number of Python statements executed",
      "They reduce effective execution delays and improve hardware throughput",
      "They eliminate the need for registers",
      "They convert all programs directly into machine language"
    ],
    correctAnswer: "They reduce effective execution delays and improve hardware throughput",
    explanation: "Caches reduce memory access latency while pipelines overlap work, producing major performance improvements.",
    difficulty: "medium"
  },
  {
    id: "l01_q03",
    lecture: "Lecture 01",
    topic: "Architecture vs Organization",
    question: "Which statement correctly distinguishes computer architecture from computer organization?",
    options: [
      "Architecture describes only transistor layout, while organization describes software",
      "Architecture defines programmer-visible attributes, while organization describes how they are implemented",
      "Architecture and organization are exactly the same concept",
      "Organization defines programming languages, while architecture defines databases"
    ],
    correctAnswer: "Architecture defines programmer-visible attributes, while organization describes how they are implemented",
    explanation: "Architecture specifies the programmer-visible interface, while organization concerns the operational units and interconnections used to realize it.",
    difficulty: "easy"
  },
  {
    id: "l01_q04",
    lecture: "Lecture 01",
    topic: "Programmer Contract",
    question: "The statement 'This CPU supports the ADD instruction' primarily describes what?",
    options: [
      "Organization",
      "Physical transistor placement",
      "Architecture",
      "Compiler optimization"
    ],
    correctAnswer: "Architecture",
    explanation: "The existence of a programmer-visible ADD instruction is part of the architectural contract.",
    difficulty: "easy"
  },
  {
    id: "l01_q05",
    lecture: "Lecture 01",
    topic: "Abstraction Stack",
    question: "Which ordering correctly moves from higher-level abstraction to lower-level implementation?",
    options: [
      "Transistors → Gates → ISA → OS → Python",
      "AI/ML Models → Applications/Languages → OS → ISA → Datapath → Gates → Transistors",
      "Python → Transistors → OS → Gates → ISA",
      "OS → AI Models → Transistors → ISA → Gates"
    ],
    correctAnswer: "AI/ML Models → Applications/Languages → OS → ISA → Datapath → Gates → Transistors",
    explanation: "The abstraction stack descends from software and models toward the physical implementation.",
    difficulty: "medium"
  },
  {
    id: "l01_q06",
    lecture: "Lecture 01",
    topic: "Tracing a Single Line of Code",
    question: "For A[i] = B[i] + C[i], what happens after Python is compiled to machine instructions?",
    options: [
      "The ALU performs the addition and the result is written back",
      "The transistor directly executes the Python statement",
      "The operating system permanently stores the result in ROM",
      "The compiler skips all hardware execution"
    ],
    correctAnswer: "The ALU performs the addition and the result is written back",
    explanation: "The lecture traces the line from Python to machine code, datapath operations, ALU addition, and result write-back.",
    difficulty: "easy"
  },
  {
    id: "l01_q07",
    lecture: "Lecture 01",
    topic: "Voltage Representation of 1 and 0",
    question: "How are binary 1 and 0 represented in the simplified hardware model?",
    options: [
      "1 means presence of voltage and 0 means absence of voltage",
      "1 means high temperature and 0 means low temperature",
      "1 means current direction and 0 means frequency",
      "1 means clock edge and 0 means no clock"
    ],
    correctAnswer: "1 means presence of voltage and 0 means absence of voltage",
    explanation: "The lecture models logic 1 as a high voltage level and logic 0 as a low or absent voltage level.",
    difficulty: "easy"
  },
  {
    id: "l01_q08",
    lecture: "Lecture 01",
    topic: "Fundamental Logic Gates",
    question: "When does an XOR gate output 1?",
    options: [
      "When both inputs are 0",
      "When both inputs are 1",
      "When the inputs are different",
      "When at least one input is 0"
    ],
    correctAnswer: "When the inputs are different",
    explanation: "XOR produces 1 exactly when its two inputs differ.",
    difficulty: "easy"
  },
  {
    id: "l01_q09",
    lecture: "Lecture 01",
    topic: "Universal Gates",
    question: "Why are NAND and NOR called universal gates?",
    options: [
      "They are the fastest gates in every CPU",
      "Either one alone can be used to construct AND, OR, and NOT",
      "They require no transistors",
      "They only work with binary addition"
    ],
    correctAnswer: "Either one alone can be used to construct AND, OR, and NOT",
    explanation: "NAND and NOR are functionally complete because any Boolean logic circuit can be constructed from either gate type alone.",
    difficulty: "easy"
  },
  {
    id: "l01_q10",
    lecture: "Lecture 01",
    topic: "Boolean Algebra Laws",
    question: "Which Boolean law is represented by A + A = A?",
    options: [
      "Identity law",
      "Complement law",
      "Idempotent law",
      "Absorption law"
    ],
    correctAnswer: "Idempotent law",
    explanation: "The idempotent law states A + A = A and A · A = A.",
    difficulty: "easy"
  },
  {
    id: "l01_q11",
    lecture: "Lecture 01",
    topic: "Algebraic Minimization",
    question: "Simplifying Y = A·B + A·B' using Boolean algebra gives:",
    options: [
      "Y = A + B",
      "Y = A",
      "Y = B",
      "Y = A·B"
    ],
    correctAnswer: "Y = A",
    explanation: "Factor A: Y = A(B + B') = A·1 = A.",
    difficulty: "medium"
  },
  {
    id: "l01_q12",
    lecture: "Lecture 01",
    topic: "Silicon Optimization",
    question: "Why does reducing the number of gates generally improve silicon efficiency?",
    options: [
      "It increases required die area",
      "It reduces area, power, and potentially manufacturing cost",
      "It eliminates the need for logic",
      "It always decreases clock frequency"
    ],
    correctAnswer: "It reduces area, power, and potentially manufacturing cost",
    explanation: "Fewer gates can reduce silicon area and switching activity, improving cost and power efficiency.",
    difficulty: "medium"
  },

  {
    id: "l02_q01",
    lecture: "Lecture 02",
    topic: "Area, Power, Speed, and Cost",
    question: "Which sequence correctly connects smaller gate count to silicon benefits?",
    options: [
      "Fewer gates → larger die → higher cost",
      "Fewer gates → smaller die → potentially more chips per wafer",
      "Fewer gates → slower clock → less yield",
      "Fewer gates → more switching → higher power"
    ],
    correctAnswer: "Fewer gates → smaller die → potentially more chips per wafer",
    explanation: "Smaller designs can fit more dies on a wafer and generally lower fabrication cost.",
    difficulty: "easy"
  },
  {
    id: "l02_q02",
    lecture: "Lecture 02",
    topic: "Power and Switching",
    question: "Why can reducing switching activity lower dynamic power?",
    options: [
      "Because fewer transitions charge and discharge circuit capacitances",
      "Because memory becomes nonvolatile",
      "Because clock frequency becomes infinite",
      "Because transistor count becomes zero"
    ],
    correctAnswer: "Because fewer transitions charge and discharge circuit capacitances",
    explanation: "Dynamic power is related to switching activity, so fewer transitions reduce energy consumption.",
    difficulty: "medium"
  },
  {
    id: "l02_q03",
    lecture: "Lecture 02",
    topic: "Industry Scale and Logic Synthesis",
    question: "What is the purpose of synthesis tools such as Synopsys Design Compiler and Cadence Genus?",
    options: [
      "To write Python programs",
      "To synthesize digital logic into a hardware implementation",
      "To replace all CPU registers with RAM",
      "To draw software flowcharts"
    ],
    correctAnswer: "To synthesize digital logic into a hardware implementation",
    explanation: "Logic synthesis tools transform functional logic descriptions into optimized hardware implementations.",
    difficulty: "medium"
  },
  {
    id: "l02_q04",
    lecture: "Lecture 02",
    topic: "Canonical SOP and Minterms",
    question: "In a canonical SOP representation, which truth-table rows contribute terms?",
    options: [
      "Rows where F = 0",
      "Rows where F = 1",
      "Rows where every input is 0",
      "Rows where every input is 1"
    ],
    correctAnswer: "Rows where F = 1",
    explanation: "Sum of Products uses minterms corresponding to rows where the function output is 1.",
    difficulty: "easy"
  },
  {
    id: "l02_q05",
    lecture: "Lecture 02",
    topic: "Canonical POS and Maxterms",
    question: "In canonical POS, which rows contribute maxterms?",
    options: [
      "Rows where F = 1",
      "Rows where F = 0",
      "Only the first row",
      "Only the last row"
    ],
    correctAnswer: "Rows where F = 0",
    explanation: "Product of Sums uses maxterms corresponding to output-0 rows.",
    difficulty: "easy"
  },
  {
    id: "l02_q06",
    lecture: "Lecture 02",
    topic: "K-Map Gray-Code Adjacency",
    question: "Why are K-map columns commonly ordered 00, 01, 11, 10?",
    options: [
      "To make binary values increase normally",
      "To ensure adjacent cells differ in exactly one variable",
      "To place zeros before ones",
      "To remove all don't-care states"
    ],
    correctAnswer: "To ensure adjacent cells differ in exactly one variable",
    explanation: "Gray-code ordering makes neighboring cells differ by one bit, enabling simplification.",
    difficulty: "medium"
  },
  {
    id: "l02_q07",
    lecture: "Lecture 02",
    topic: "K-Map Group Sizes",
    question: "How many variables can be eliminated by grouping four cells in a K-map?",
    options: [
      "0",
      "1",
      "2",
      "4"
    ],
    correctAnswer: "2",
    explanation: "A group of 4 removes two variables from the resulting term.",
    difficulty: "easy"
  },
  {
    id: "l02_q08",
    lecture: "Lecture 02",
    topic: "K-Map Wrap-Around and Don't-Cares",
    question: "What is special about the edge cells of a K-map?",
    options: [
      "They can never be grouped",
      "Left and right edges and top and bottom edges can be adjacent",
      "Only corner cells can be grouped",
      "They always represent don't-cares"
    ],
    correctAnswer: "Left and right edges and top and bottom edges can be adjacent",
    explanation: "K-maps have toroidal adjacency, so opposite edges can form groups.",
    difficulty: "medium"
  },
  {
    id: "l02_q09",
    lecture: "Lecture 02",
    topic: "K-Map Don't-Cares",
    question: "How should a don't-care input X generally be treated during K-map simplification?",
    options: [
      "Always as 1",
      "Always as 0",
      "As 1 or 0 depending on which produces a larger useful group",
      "It must be deleted"
    ],
    correctAnswer: "As 1 or 0 depending on which produces a larger useful group",
    explanation: "Don't-cares can be chosen as either value to maximize simplification.",
    difficulty: "medium"
  },
  {
    id: "l02_q10",
    lecture: "Lecture 02",
    topic: "Algebraic Laws Mapped to K-Maps",
    question: "A larger valid K-map group generally produces what kind of Boolean expression?",
    options: [
      "A more complex term",
      "A term with more literals",
      "A simpler term with more variables cancelled",
      "An invalid expression"
    ],
    correctAnswer: "A simpler term with more variables cancelled",
    explanation: "Larger groups correspond to more eliminated variables and simpler expressions.",
    difficulty: "easy"
  },
  {
    id: "l02_q11",
    lecture: "Lecture 02",
    topic: "DeMorgan's Theorems",
    question: "Which expression is equivalent to (A·B)'?",
    options: [
      "A'·B'",
      "A' + B'",
      "A + B",
      "A·B"
    ],
    correctAnswer: "A' + B'",
    explanation: "DeMorgan's theorem states that the complement of an AND is the OR of the complements.",
    difficulty: "easy"
  },
  {
    id: "l02_q12",
    lecture: "Lecture 02",
    topic: "Bubble Pushing",
    question: "Pushing bubbles through an AND gate changes the gate into an equivalent:",
    options: [
      "AND gate with no inputs",
      "OR gate with complemented inputs",
      "XOR gate with unchanged inputs",
      "NOT gate"
    ],
    correctAnswer: "OR gate with complemented inputs",
    explanation: "Bubble pushing follows DeMorgan's theorem: AND plus output inversion is equivalent to OR plus input inversions.",
    difficulty: "medium"
  },
  {
    id: "l02_q13",
    lecture: "Lecture 02",
    topic: "Universal Gate Implementation",
    question: "How can a NAND gate be used to implement NOT A?",
    options: [
      "Connect A to both NAND inputs",
      "Connect A to neither input",
      "Use NAND with one input tied to 0 only",
      "Use XOR followed by AND"
    ],
    correctAnswer: "Connect A to both NAND inputs",
    explanation: "NAND(A,A) = (A·A)' = A'.",
    difficulty: "easy"
  },
  {
    id: "l02_q14",
    lecture: "Lecture 02",
    topic: "CMOS Transistor Budget",
    question: "According to the lecture, how many transistors are needed for a CMOS NAND gate?",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correctAnswer: "4",
    explanation: "The lecture shows a CMOS NAND using two PMOS and two NMOS transistors, for a total of four.",
    difficulty: "easy"
  },

  {
    id: "l03_q01",
    lecture: "Lecture 03",
    topic: "Reusable Building Blocks",
    question: "Why do modern CPU designers use reusable building blocks instead of designing gate-by-gate?",
    options: [
      "To avoid abstraction",
      "To improve modularity, reuse, verification, and scalability",
      "To eliminate all testing",
      "To make every circuit unique"
    ],
    correctAnswer: "To improve modularity, reuse, verification, and scalability",
    explanation: "The lecture identifies abstraction, reuse, verification, and cascading scale as the four pillars of block-based design.",
    difficulty: "easy"
  },
  {
    id: "l03_q02",
    lecture: "Lecture 03",
    topic: "2:1 Multiplexer",
    question: "For a 2:1 MUX with Y = S'·A + S·B, what is Y when S = 0?",
    options: [
      "A",
      "B",
      "A XOR B",
      "0"
    ],
    correctAnswer: "A",
    explanation: "When S = 0, S' = 1, so Y = A.",
    difficulty: "easy"
  },
  {
    id: "l03_q03",
    lecture: "Lecture 03",
    topic: "4:1 Multiplexer",
    question: "In the shown 4:1 MUX, what output is selected when S1S0 = 10?",
    options: [
      "I0",
      "I1",
      "I2",
      "I3"
    ],
    correctAnswer: "I2",
    explanation: "The select encoding 10 chooses the third input, I2.",
    difficulty: "easy"
  },
  {
    id: "l03_q04",
    lecture: "Lecture 03",
    topic: "MUX as Universal Boolean Logic",
    question: "How can a 2:1 MUX implement XOR according to the lecture?",
    options: [
      "Set I0 = 0 and I1 = 1 with S = A",
      "Set all inputs to 1",
      "Use only one data input",
      "Set I0 = I1 = A"
    ],
    correctAnswer: "Set I0 = 0 and I1 = 1 with S = A",
    explanation: "With suitable data inputs controlled by the select variables, a 2:1 MUX can implement arbitrary Boolean functions.",
    difficulty: "medium"
  },
  {
    id: "l03_q05",
    lecture: "Lecture 03",
    topic: "Demultiplexers",
    question: "What is the main function of a 1:4 DEMUX?",
    options: [
      "Combine four inputs into one",
      "Route one input to one of four outputs",
      "Perform binary addition",
      "Store four bits permanently"
    ],
    correctAnswer: "Route one input to one of four outputs",
    explanation: "A DEMUX routes a single data input to one selected output.",
    difficulty: "easy"
  },
  {
    id: "l03_q06",
    lecture: "Lecture 03",
    topic: "Decoders",
    question: "A 2-to-4 decoder activates how many outputs for a valid input?",
    options: [
      "0",
      "1",
      "2",
      "4"
    ],
    correctAnswer: "1",
    explanation: "A decoder produces exactly one active output line for each binary input combination.",
    difficulty: "easy"
  },
  {
    id: "l03_q07",
    lecture: "Lecture 03",
    topic: "Half Adder",
    question: "What are the outputs of a half adder?",
    options: [
      "Sum = A+B and Carry = A XOR B",
      "Sum = A XOR B and Carry = A·B",
      "Sum = A·B and Carry = A+B",
      "Sum = A' and Carry = B'"
    ],
    correctAnswer: "Sum = A XOR B and Carry = A·B",
    explanation: "A half adder adds two one-bit values using XOR for sum and AND for carry.",
    difficulty: "easy"
  },
  {
    id: "l03_q08",
    lecture: "Lecture 03",
    topic: "Full Adder",
    question: "Which expression gives the full-adder sum?",
    options: [
      "A·B·Cin",
      "A XOR B XOR Cin",
      "A + B + Cin",
      "A XOR B"
    ],
    correctAnswer: "A XOR B XOR Cin",
    explanation: "The full-adder sum is the XOR of all three inputs.",
    difficulty: "easy"
  },
  {
    id: "l03_q09",
    lecture: "Lecture 03",
    topic: "Ripple-Carry Adder",
    question: "What is the main limitation of a ripple-carry adder?",
    options: [
      "It cannot add binary numbers",
      "Carry propagation delay increases as more full adders are cascaded",
      "It requires no clock",
      "It only works for one bit"
    ],
    correctAnswer: "Carry propagation delay increases as more full adders are cascaded",
    explanation: "Each stage may need to wait for the previous carry, so the delay grows with word size.",
    difficulty: "medium"
  },
  {
    id: "l03_q10",
    lecture: "Lecture 03",
    topic: "ISA: CISC vs RISC",
    question: "What does the ISA define in a processor system?",
    options: [
      "Only transistor dimensions",
      "The interface between software and hardware, including instructions and registers",
      "Only the cooling system",
      "Only cache replacement policy"
    ],
    correctAnswer: "The interface between software and hardware, including instructions and registers",
    explanation: "The ISA is the hardware-software contract specifying programmer-visible instructions, registers, and related behavior.",
    difficulty: "easy"
  },
  {
    id: "l03_q11",
    lecture: "Lecture 03",
    topic: "CISC vs RISC Trade-offs",
    question: "Which is characteristic of RISC as presented in the lecture?",
    options: [
      "Variable-length instructions and complex memory-to-memory operations",
      "Simple, uniform instructions designed for efficient pipelining",
      "No registers",
      "Only microcode-based execution"
    ],
    correctAnswer: "Simple, uniform instructions designed for efficient pipelining",
    explanation: "RISC favors simpler and more uniform instructions, typically making pipelining easier.",
    difficulty: "medium"
  },

  {
    id: "l04_q01",
    lecture: "Lecture 04",
    topic: "Positional Notation",
    question: "In a base-b positional number system, the digit at position i is multiplied by:",
    options: [
      "b + i",
      "b^i",
      "i^b",
      "2i"
    ],
    correctAnswer: "b^i",
    explanation: "The positional value is the sum of d_i × b^i across all positions.",
    difficulty: "easy"
  },
  {
    id: "l04_q02",
    lecture: "Lecture 04",
    topic: "Common Number Systems",
    question: "How many bits are represented by one hexadecimal digit?",
    options: [
      "2",
      "4",
      "8",
      "16"
    ],
    correctAnswer: "4",
    explanation: "One hexadecimal digit represents 16 values, equivalent to 4 binary bits.",
    difficulty: "easy"
  },
  {
    id: "l04_q03",
    lecture: "Lecture 04",
    topic: "Number-System Conversions",
    question: "What is 101010₂ in decimal?",
    options: [
      "40",
      "42",
      "44",
      "46"
    ],
    correctAnswer: "42",
    explanation: "101010₂ = 32 + 8 + 2 = 42.",
    difficulty: "easy"
  },
  {
    id: "l04_q04",
    lecture: "Lecture 04",
    topic: "Sign-Magnitude Representation",
    question: "What is the major problem with sign-magnitude representation?",
    options: [
      "It cannot represent zero",
      "It has two representations of zero and complicates subtraction",
      "It cannot represent negative numbers",
      "It requires no sign bit"
    ],
    correctAnswer: "It has two representations of zero and complicates subtraction",
    explanation: "Sign-magnitude has +0 and -0 and needs separate handling for subtraction.",
    difficulty: "medium"
  },
  {
    id: "l04_q05",
    lecture: "Lecture 04",
    topic: "One's Complement",
    question: "How is the negative of a binary value formed in one's complement?",
    options: [
      "Add 1",
      "Invert every bit",
      "Shift left by one",
      "Clear the MSB"
    ],
    correctAnswer: "Invert every bit",
    explanation: "One's complement negation is simply bitwise inversion.",
    difficulty: "easy"
  },
  {
    id: "l04_q06",
    lecture: "Lecture 04",
    topic: "Two's Complement Representation",
    question: "What is the 8-bit two's-complement range?",
    options: [
      "-127 to +127",
      "-128 to +127",
      "-128 to +128",
      "0 to 255"
    ],
    correctAnswer: "-128 to +127",
    explanation: "An n-bit two's-complement number ranges from -2^(n-1) to 2^(n-1)-1.",
    difficulty: "easy"
  },
  {
    id: "l04_q07",
    lecture: "Lecture 04",
    topic: "Two's Complement Negation",
    question: "What is the standard shortcut for computing the two's-complement negative of a value?",
    options: [
      "Invert all bits and add 1",
      "Add 2",
      "Invert only the sign bit",
      "Shift right and add 1"
    ],
    correctAnswer: "Invert all bits and add 1",
    explanation: "Two's-complement negation is performed by bitwise inversion followed by adding one.",
    difficulty: "easy"
  },
  {
    id: "l04_q08",
    lecture: "Lecture 04",
    topic: "Unified Adder for Addition and Subtraction",
    question: "How can one adder perform both A+B and A−B?",
    options: [
      "By replacing the adder every cycle",
      "By conditionally inverting B and setting Cin = 1 for subtraction",
      "By using only OR gates",
      "By disabling the carry chain"
    ],
    correctAnswer: "By conditionally inverting B and setting Cin = 1 for subtraction",
    explanation: "A−B = A + (~B + 1), so a SUB control inverts B and sets the initial carry-in.",
    difficulty: "medium"
  },
  {
    id: "l04_q09",
    lecture: "Lecture 04",
    topic: "Carry Flag vs Overflow Flag",
    question: "Which flag indicates unsigned overflow?",
    options: [
      "Carry flag",
      "Overflow flag",
      "Zero flag",
      "Negative flag"
    ],
    correctAnswer: "Carry flag",
    explanation: "The carry flag indicates unsigned arithmetic overflow, while the overflow flag is used for signed overflow.",
    difficulty: "easy"
  },
  {
    id: "l04_q10",
    lecture: "Lecture 04",
    topic: "Signed Overflow Rule",
    question: "The signed overflow flag can be computed as:",
    options: [
      "V = Cin,MSB XOR Cout,MSB",
      "V = Cin,MSB AND Cout,MSB",
      "V = Cin,MSB OR Cout,MSB",
      "V = Cin,MSB XNOR Cout,MSB"
    ],
    correctAnswer: "V = Cin,MSB XOR Cout,MSB",
    explanation: "Signed overflow occurs when the carry into the MSB differs from the carry out of the MSB.",
    difficulty: "medium"
  },
  {
    id: "l04_q11",
    lecture: "Lecture 04",
    topic: "Real-World Failures",
    question: "What caused the Ariane 5 failure discussed in the lecture?",
    options: [
      "A 64-bit floating-point value was incorrectly converted to a 16-bit signed integer, causing overflow",
      "The rocket ran out of fuel",
      "The navigation system had no processor",
      "A DRAM refresh failure occurred"
    ],
    correctAnswer: "A 64-bit floating-point value was incorrectly converted to a 16-bit signed integer, causing overflow",
    explanation: "The lecture uses Ariane 5 as a classic example of numerical overflow leading to catastrophic failure.",
    difficulty: "medium"
  },
  {
    id: "l04_q12",
    lecture: "Lecture 04",
    topic: "Sign Extension and Casting",
    question: "How is a negative signed 8-bit number extended to 32 bits?",
    options: [
      "Fill the new upper bits with zeros",
      "Replicate the original sign bit into the new upper bits",
      "Delete the sign bit",
      "Invert all new bits"
    ],
    correctAnswer: "Replicate the original sign bit into the new upper bits",
    explanation: "Sign extension preserves the signed value by copying the MSB into the added higher-order bits.",
    difficulty: "easy"
  },

  {
    id: "l05_q01",
    lecture: "Lecture 05",
    topic: "Combinational vs Sequential Logic",
    question: "Which statement correctly describes sequential logic?",
    options: [
      "Its output depends only on current inputs",
      "It has no state",
      "Its output can depend on current inputs and past state",
      "It never uses feedback"
    ],
    correctAnswer: "Its output can depend on current inputs and past state",
    explanation: "Sequential logic is stateful and therefore depends on previous values as well as current inputs.",
    difficulty: "easy"
  },
  {
    id: "l05_q02",
    lecture: "Lecture 05",
    topic: "Feedback Loops and Bistable Memory",
    question: "How do cross-coupled inverters create a 1-bit memory element?",
    options: [
      "They produce two stable states through positive feedback",
      "They always oscillate",
      "They eliminate the output",
      "They convert analog signals into clocks"
    ],
    correctAnswer: "They produce two stable states through positive feedback",
    explanation: "The feedback reinforces one of two stable states, allowing a bit to be stored.",
    difficulty: "medium"
  },
  {
    id: "l05_q03",
    lecture: "Lecture 05",
    topic: "NOR-Based SR Latch",
    question: "For the active-high NOR SR latch, what happens when S=1 and R=0?",
    options: [
      "Hold",
      "Set Q to 1",
      "Reset Q to 0",
      "Enter forbidden state"
    ],
    correctAnswer: "Set Q to 1",
    explanation: "In the NOR-based active-high SR latch, S=1 sets Q=1.",
    difficulty: "easy"
  },
  {
    id: "l05_q04",
    lecture: "Lecture 05",
    topic: "NAND-Based SR Latch",
    question: "In the active-low NAND SR latch, which input condition resets the latch?",
    options: [
      "S̅=0, R̅=1",
      "S̅=1, R̅=1",
      "S̅=1, R̅=0",
      "S̅=0, R̅=0"
    ],
    correctAnswer: "S̅=1, R̅=0",
    explanation: "For the NAND version, the reset input is asserted low while the set input remains high.",
    difficulty: "medium"
  },
  {
    id: "l05_q05",
    lecture: "Lecture 05",
    topic: "SR Latch Forbidden State",
    question: "Why is the forbidden SR-latch state dangerous?",
    options: [
      "It guarantees Q ≠ Q̅",
      "It can force Q and Q̅ to the same value and create an unpredictable recovery",
      "It permanently disables the circuit",
      "It increases memory capacity"
    ],
    correctAnswer: "It can force Q and Q̅ to the same value and create an unpredictable recovery",
    explanation: "The forbidden input combination breaks the complementary outputs and may lead to race-dependent behavior when inputs return to normal.",
    difficulty: "medium"
  },
  {
    id: "l05_q06",
    lecture: "Lecture 05",
    topic: "D Latch",
    question: "What is the key advantage of a D latch over an SR latch?",
    options: [
      "It removes the forbidden input combination by ensuring S and R are complementary",
      "It stores two bits",
      "It eliminates the need for feedback",
      "It always toggles"
    ],
    correctAnswer: "It removes the forbidden input combination by ensuring S and R are complementary",
    explanation: "A D input is used to generate complementary S and R values, preventing the illegal SR combination.",
    difficulty: "easy"
  },
  {
    id: "l05_q07",
    lecture: "Lecture 05",
    topic: "Gated D Latch",
    question: "What happens to a gated D latch when EN=0?",
    options: [
      "It continuously follows D",
      "It holds its previous value",
      "It toggles",
      "It resets automatically"
    ],
    correctAnswer: "It holds its previous value",
    explanation: "The enable controls transparency: EN=1 allows D through, while EN=0 holds the last valid state.",
    difficulty: "easy"
  },
  {
    id: "l05_q08",
    lecture: "Lecture 05",
    topic: "Level Transparency",
    question: "What is data slippage in a cascade of level-sensitive latches?",
    options: [
      "Data can propagate through multiple latches during one clock level",
      "Data disappears from memory",
      "The clock is permanently stopped",
      "The latches become combinational gates"
    ],
    correctAnswer: "Data can propagate through multiple latches during one clock level",
    explanation: "When several latches are simultaneously transparent, data can race through multiple stages in one clock phase.",
    difficulty: "medium"
  },
  {
    id: "l05_q09",
    lecture: "Lecture 05",
    topic: "Need for Edge-Triggered Storage",
    question: "Why are edge-triggered flip-flops preferred for synchronous CPU registers?",
    options: [
      "They are transparent for an entire clock level",
      "They sample data at one precise clock transition",
      "They do not require a clock",
      "They cannot store data"
    ],
    correctAnswer: "They sample data at one precise clock transition",
    explanation: "Edge-triggering blocks continuous transparency and enables controlled synchronous updates.",
    difficulty: "easy"
  },

  {
    id: "l06_q01",
    lecture: "Lecture 06",
    topic: "Latch, Flip-Flop, and Timing Definitions",
    question: "Which storage element is level-triggered and transparent while enabled?",
    options: [
      "Latch",
      "Flip-flop",
      "Decoder",
      "Multiplexer"
    ],
    correctAnswer: "Latch",
    explanation: "A latch is level-sensitive, while a flip-flop captures data at a clock edge.",
    difficulty: "easy"
  },
  {
    id: "l06_q02",
    lecture: "Lecture 06",
    topic: "Level vs Edge Triggering",
    question: "What is the main difference between a level-triggered latch and an edge-triggered flip-flop?",
    options: [
      "A latch responds during an active clock level, while a flip-flop samples at an edge",
      "Both sample only on a falling edge",
      "A flip-flop is always transparent",
      "A latch cannot store data"
    ],
    correctAnswer: "A latch responds during an active clock level, while a flip-flop samples at an edge",
    explanation: "Level triggering provides transparency during part of the clock, while edge triggering takes a single snapshot.",
    difficulty: "easy"
  },
  {
    id: "l06_q03",
    lecture: "Lecture 06",
    topic: "Master-Slave D Flip-Flop",
    question: "In a master-slave D flip-flop, why are the master and slave controlled by opposite clock phases?",
    options: [
      "So both are transparent simultaneously",
      "So only one stage is open at a time",
      "To double the clock frequency",
      "To remove the D input"
    ],
    correctAnswer: "So only one stage is open at a time",
    explanation: "Opposite phases create a two-stage hand-off and prevent both latches from being transparent simultaneously.",
    difficulty: "medium"
  },
  {
    id: "l06_q04",
    lecture: "Lecture 06",
    topic: "Latch vs Flip-Flop Comparison",
    question: "Which statement about timing safety is correct?",
    options: [
      "Latches are generally safer from data races than edge-triggered flip-flops",
      "Flip-flops block continuous transparency and are preferred for robust pipelines",
      "Both have identical transparency behavior",
      "Flip-flops are level-sensitive"
    ],
    correctAnswer: "Flip-flops block continuous transparency and are preferred for robust pipelines",
    explanation: "Edge-triggered flip-flops provide a controlled sampling point and are therefore preferred for synchronous CPU pipelines.",
    difficulty: "medium"
  },
  {
    id: "l06_q05",
    lecture: "Lecture 06",
    topic: "Setup Time",
    question: "Setup time is the minimum interval during which data must be stable:",
    options: [
      "After the clock edge",
      "Before the active clock edge",
      "Only during reset",
      "After the output changes"
    ],
    correctAnswer: "Before the active clock edge",
    explanation: "Data must arrive and remain stable for at least the setup time before sampling.",
    difficulty: "easy"
  },
  {
    id: "l06_q06",
    lecture: "Lecture 06",
    topic: "Hold Time",
    question: "Hold time specifies how long data must remain stable:",
    options: [
      "Before the clock edge only",
      "After the active clock edge",
      "Before power-up",
      "Until reset"
    ],
    correctAnswer: "After the active clock edge",
    explanation: "The hold interval begins immediately after the sampling edge.",
    difficulty: "easy"
  },
  {
    id: "l06_q07",
    lecture: "Lecture 06",
    topic: "Setup and Hold Violations",
    question: "What can happen when data changes inside the setup/hold aperture?",
    options: [
      "The flip-flop is guaranteed to capture the correct value",
      "A timing violation may occur and metastability may result",
      "The clock automatically stops",
      "The register becomes read-only"
    ],
    correctAnswer: "A timing violation may occur and metastability may result",
    explanation: "Violating setup or hold constraints can cause incorrect capture or metastable behavior.",
    difficulty: "medium"
  },
  {
    id: "l06_q08",
    lecture: "Lecture 06",
    topic: "Propagation and Contamination Delay",
    question: "What is t_pcq?",
    options: [
      "Minimum time before Q begins changing",
      "Maximum time from clock edge until Q becomes valid",
      "Clock period",
      "Setup time"
    ],
    correctAnswer: "Maximum time from clock edge until Q becomes valid",
    explanation: "Propagation delay describes the maximum clock-to-Q delay.",
    difficulty: "easy"
  },
  {
    id: "l06_q09",
    lecture: "Lecture 06",
    topic: "Maximum Clock Frequency",
    question: "Which constraint determines the maximum clock frequency in the lecture?",
    options: [
      "Tc ≥ tpcq + tpd,combinational,max + tsetup",
      "Tc ≤ tpcq + tsetup",
      "Tc = tsetup − tpcq",
      "Tc = 0"
    ],
    correctAnswer: "Tc ≥ tpcq + tpd,combinational,max + tsetup",
    explanation: "The clock period must be long enough for the source flip-flop, combinational path, and destination setup time.",
    difficulty: "medium"
  },
  {
    id: "l06_q10",
    lecture: "Lecture 06",
    topic: "Camera Shutter Analogy",
    question: "The lecture compares a flip-flop's sampling action to what?",
    options: [
      "A camera shutter capturing a moving object at one instant",
      "A speaker continuously playing audio",
      "A battery storing energy",
      "A water tank filling slowly"
    ],
    correctAnswer: "A camera shutter capturing a moving object at one instant",
    explanation: "The analogy emphasizes that data must be stable around the sampling edge, or the captured value may be corrupted.",
    difficulty: "easy"
  },

  {
    id: "l07_q01",
    lecture: "Lecture 07",
    topic: "Metastability Basics",
    question: "What is metastability in a flip-flop?",
    options: [
      "A guaranteed logic-1 state",
      "A temporary analog state between stable 0 and 1",
      "A permanent power failure",
      "A software exception"
    ],
    correctAnswer: "A temporary analog state between stable 0 and 1",
    explanation: "A setup/hold violation can leave the flip-flop temporarily unresolved between logic levels.",
    difficulty: "easy"
  },
  {
    id: "l07_q02",
    lecture: "Lecture 07",
    topic: "Ball-on-a-Hill Metastability Model",
    question: "Why is metastability compared to a ball balanced on top of a hill?",
    options: [
      "A small disturbance can make the state settle unpredictably toward 0 or 1",
      "The system always remains exactly at the top",
      "The ball represents clock frequency only",
      "The model describes cache eviction"
    ],
    correctAnswer: "A small disturbance can make the state settle unpredictably toward 0 or 1",
    explanation: "The unstable peak represents metastability, where tiny perturbations determine which stable state is eventually reached.",
    difficulty: "medium"
  },
  {
    id: "l07_q03",
    lecture: "Lecture 07",
    topic: "System State Divergence Hazard",
    question: "Why is metastability dangerous if it feeds multiple logic paths?",
    options: [
      "Different paths may interpret the unresolved signal differently",
      "All paths become identical",
      "The signal always becomes zero",
      "The clock gets faster"
    ],
    correctAnswer: "Different paths may interpret the unresolved signal differently",
    explanation: "One path may see 0 while another effectively sees 1, creating inconsistent system state.",
    difficulty: "medium"
  },
  {
    id: "l07_q04",
    lecture: "Lecture 07",
    topic: "Asynchronous Clock Domain Crossing",
    question: "When is an asynchronous clock-domain crossing problem likely to occur?",
    options: [
      "When a signal moves between unrelated clock domains",
      "Only when two registers share a clock",
      "Only inside combinational logic",
      "Only in ROM"
    ],
    correctAnswer: "When a signal moves between unrelated clock domains",
    explanation: "External inputs, PCIe signals, and other independent clocks can change at arbitrary times relative to the destination clock.",
    difficulty: "easy"
  },
  {
    id: "l07_q05",
    lecture: "Lecture 07",
    topic: "Synchronizer Chains",
    question: "Why does adding a second synchronizer flip-flop greatly improve reliability?",
    options: [
      "It gives a metastable signal additional time to resolve",
      "It doubles the data width",
      "It removes the clock",
      "It forces every input to zero"
    ],
    correctAnswer: "It gives a metastable signal additional time to resolve",
    explanation: "The extra clock period reduces the probability that metastability propagates downstream.",
    difficulty: "easy"
  },
  {
    id: "l07_q06",
    lecture: "Lecture 07",
    topic: "MTBF",
    question: "Why does MTBF improve exponentially with additional settling time?",
    options: [
      "The available resolution time appears in the exponent of the MTBF expression",
      "Clock frequency becomes zero",
      "The data input disappears",
      "Transistors stop switching"
    ],
    correctAnswer: "The available resolution time appears in the exponent of the MTBF expression",
    explanation: "The lecture gives MTBF proportional to e^(tr/τ), making additional settling time extremely valuable.",
    difficulty: "medium"
  },
  {
    id: "l07_q07",
    lecture: "Lecture 07",
    topic: "Clock Period Calculation",
    question: "What is the relationship between clock period and frequency?",
    options: [
      "Tclk = f",
      "Tclk = 1/f",
      "Tclk = f²",
      "Tclk = 2f"
    ],
    correctAnswer: "Tclk = 1/f",
    explanation: "Clock period is the reciprocal of clock frequency.",
    difficulty: "easy"
  },
  {
    id: "l07_q08",
    lecture: "Lecture 07",
    topic: "Critical Path and Setup Constraint",
    question: "What is the critical path in a synchronous circuit?",
    options: [
      "The shortest path between registers",
      "The longest and slowest combinational path between registers",
      "The path used only during reset",
      "The path with the fewest gates"
    ],
    correctAnswer: "The longest and slowest combinational path between registers",
    explanation: "The critical path limits the maximum operating frequency.",
    difficulty: "easy"
  },
  {
    id: "l07_q09",
    lecture: "Lecture 07",
    topic: "Overclocking Hazards",
    question: "What happens to timing safety margin when a CPU is overclocked?",
    options: [
      "It increases",
      "It stays exactly the same",
      "It shrinks, increasing setup-violation risk",
      "It becomes infinite"
    ],
    correctAnswer: "It shrinks, increasing setup-violation risk",
    explanation: "Increasing frequency shortens the clock period and leaves less time for combinational logic and setup.",
    difficulty: "medium"
  },
  {
    id: "l07_q10",
    lecture: "Lecture 07",
    topic: "Static Timing Analysis",
    question: "What is the purpose of Static Timing Analysis (STA)?",
    options: [
      "To run the operating system",
      "To verify timing constraints across paths and operating conditions before fabrication",
      "To optimize Python code",
      "To replace all simulations"
    ],
    correctAnswer: "To verify timing constraints across paths and operating conditions before fabrication",
    explanation: "STA checks setup/hold timing across paths, process, voltage, and temperature conditions.",
    difficulty: "medium"
  },
  {
    id: "l07_q11",
    lecture: "Lecture 07",
    topic: "Other Verification Techniques",
    question: "Which of the following was listed as another hardware verification technique?",
    options: [
      "SPICE circuit simulation",
      "HTML rendering",
      "Database normalization",
      "Python packaging"
    ],
    correctAnswer: "SPICE circuit simulation",
    explanation: "The lecture also mentions SPICE, formal verification, on-chip monitoring, and design margining.",
    difficulty: "easy"
  },

  {
    id: "l08_q01",
    lecture: "Lecture 08",
    topic: "Flip-Flop Toolkit",
    question: "Which flip-flop is described as a universal flip-flop because it can implement SR, D, and T behavior?",
    options: [
      "SR flip-flop",
      "D flip-flop",
      "JK flip-flop",
      "T flip-flop"
    ],
    correctAnswer: "JK flip-flop",
    explanation: "The lecture identifies JK as a universal flip-flop because its inputs can reproduce other behaviors.",
    difficulty: "easy"
  },
  {
    id: "l08_q02",
    lecture: "Lecture 08",
    topic: "Characteristic Equations",
    question: "Which is the characteristic equation of a D flip-flop?",
    options: [
      "Q(n+1) = D",
      "Q(n+1) = Q(n)",
      "Q(n+1) = D XOR Q(n)",
      "Q(n+1) = D·Q(n)"
    ],
    correctAnswer: "Q(n+1) = D",
    explanation: "A D flip-flop simply copies its D input on the active clock edge.",
    difficulty: "easy"
  },
  {
    id: "l08_q03",
    lecture: "Lecture 08",
    topic: "JK Flip-Flop",
    question: "What happens in a JK flip-flop when J=K=1?",
    options: [
      "Hold",
      "Reset",
      "Set",
      "Toggle"
    ],
    correctAnswer: "Toggle",
    explanation: "The JK flip-flop toggles its output when both J and K are 1.",
    difficulty: "easy"
  },
  {
    id: "l08_q04",
    lecture: "Lecture 08",
    topic: "T Flip-Flop",
    question: "What does a T flip-flop do when T=0?",
    options: [
      "Toggle",
      "Hold its current state",
      "Always set",
      "Always reset"
    ],
    correctAnswer: "Hold its current state",
    explanation: "T=0 gives Q(n+1)=Q(n), while T=1 toggles the output.",
    difficulty: "easy"
  },
  {
    id: "l08_q05",
    lecture: "Lecture 08",
    topic: "Frequency Division",
    question: "A T flip-flop with T=1 divides the input clock frequency by:",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    correctAnswer: "2",
    explanation: "The output toggles on each clock edge, so one complete output cycle takes two input clock cycles.",
    difficulty: "easy"
  },
  {
    id: "l08_q06",
    lecture: "Lecture 08",
    topic: "Clocked D Flip-Flop Waveforms",
    question: "In an edge-triggered D flip-flop, when does Q update?",
    options: [
      "Continuously while D changes",
      "Only at the active clock edge",
      "Only when reset is active",
      "Only when D is low"
    ],
    correctAnswer: "Only at the active clock edge",
    explanation: "The output captures a snapshot of D at the designated clock transition.",
    difficulty: "easy"
  },
  {
    id: "l08_q07",
    lecture: "Lecture 08",
    topic: "Parallel Load Register",
    question: "What controls whether a parallel-load register captures new data?",
    options: [
      "Write/load enable",
      "XOR gate only",
      "Carry flag",
      "Reset address"
    ],
    correctAnswer: "Write/load enable",
    explanation: "The enable determines whether the MUX selects new data or the existing stored value.",
    difficulty: "easy"
  },
  {
    id: "l08_q08",
    lecture: "Lecture 08",
    topic: "Shift Registers",
    question: "Which shift-register type converts serial input into a parallel multi-bit output?",
    options: [
      "SISO",
      "SIPO",
      "PISO",
      "PIPO"
    ],
    correctAnswer: "SIPO",
    explanation: "Serial-In Parallel-Out loads bits serially and presents them in parallel.",
    difficulty: "easy"
  },
  {
    id: "l08_q09",
    lecture: "Lecture 08",
    topic: "Asynchronous Ripple Counters",
    question: "Why can ripple counters produce decoding glitches?",
    options: [
      "Different stages change after different propagation delays",
      "All stages switch at exactly the same instant",
      "They have no flip-flops",
      "They use only combinational gates"
    ],
    correctAnswer: "Different stages change after different propagation delays",
    explanation: "The clock ripples from one stage to the next, creating transient intermediate states.",
    difficulty: "medium"
  },
  {
    id: "l08_q10",
    lecture: "Lecture 08",
    topic: "Synchronous Counters",
    question: "What is a major advantage of synchronous counters over ripple counters?",
    options: [
      "All flip-flops receive the same clock simultaneously",
      "They never use logic gates",
      "They always require fewer transistors",
      "They cannot count downward"
    ],
    correctAnswer: "All flip-flops receive the same clock simultaneously",
    explanation: "Shared clocking reduces accumulated ripple delay and improves timing predictability.",
    difficulty: "easy"
  },
  {
    id: "l08_q11",
    lecture: "Lecture 08",
    topic: "Up/Down and Modulo-N Counters",
    question: "How is an up/down counter typically controlled?",
    options: [
      "A control MUX selects logic for incrementing or decrementing",
      "A decoder permanently disables counting",
      "A cache stores the count",
      "A NOR gate replaces the clock"
    ],
    correctAnswer: "A control MUX selects logic for incrementing or decrementing",
    explanation: "The lecture describes using control logic or MUXes to select count direction.",
    difficulty: "medium"
  },
  {
    id: "l08_q12",
    lecture: "Lecture 08",
    topic: "Counter Applications",
    question: "Which is a real-world application of digital counters from the lecture?",
    options: [
      "Program counters and frequency dividers",
      "Only image compression",
      "Only SQL indexing",
      "Only text formatting"
    ],
    correctAnswer: "Program counters and frequency dividers",
    explanation: "The lecture lists program counters, baud generators, PWM, timers/event counters, and frequency dividers.",
    difficulty: "easy"
  },
  {
    id: "l08_q13",
    lecture: "Lecture 08",
    topic: "Excitation Tables and Custom Counter Design",
    question: "What is the first step in designing a custom sequential counter?",
    options: [
      "Define the desired state sequence",
      "Choose a programming language",
      "Delete unused states first",
      "Start with transistor layout"
    ],
    correctAnswer: "Define the desired state sequence",
    explanation: "The design recipe begins with defining the desired state sequence before deriving the excitation logic.",
    difficulty: "easy"
  },

  {
    id: "l09_q01",
    lecture: "Lecture 09",
    topic: "Register Files",
    question: "Why does a RISC register file commonly need two read ports and one write port?",
    options: [
      "A typical three-register instruction needs two source operands and one destination",
      "Registers cannot store more than one bit",
      "The CPU always executes three writes",
      "It replaces the ALU"
    ],
    correctAnswer: "A typical three-register instruction needs two source operands and one destination",
    explanation: "Instructions such as add r1, r2, r3 need two simultaneous source reads and one destination write.",
    difficulty: "easy"
  },
  {
    id: "l09_q02",
    lecture: "Lecture 09",
    topic: "Register File Timing Asymmetry",
    question: "What is the timing difference between register-file reads and writes?",
    options: [
      "Both are asynchronous",
      "Reads are combinational while writes are synchronous",
      "Reads are synchronous while writes are combinational",
      "Both require reset"
    ],
    correctAnswer: "Reads are combinational while writes are synchronous",
    explanation: "A selected read address routes data through MUXes immediately, while writes occur on the clock edge.",
    difficulty: "medium"
  },
  {
    id: "l09_q03",
    lecture: "Lecture 09",
    topic: "Read-Before-Write Protocol",
    question: "What is the basic sequence in a single-cycle read-before-write operation?",
    options: [
      "Write → Read → Decode",
      "Read operands → ALU execution → Write back",
      "Decode → Reset → Write",
      "Read → Reset → Halt"
    ],
    correctAnswer: "Read operands → ALU execution → Write back",
    explanation: "The register file provides operands, the ALU processes them, and the result is written on the clock edge.",
    difficulty: "easy"
  },
  {
    id: "l09_q04",
    lecture: "Lecture 09",
    topic: "Finite State Machine Fundamentals",
    question: "Which set correctly lists the components of an FSM?",
    options: [
      "States, inputs, transitions, and outputs",
      "Only inputs and outputs",
      "Only registers and ALUs",
      "Only clocks and caches"
    ],
    correctAnswer: "States, inputs, transitions, and outputs",
    explanation: "The lecture defines an FSM using finite states, inputs, transition rules, and outputs.",
    difficulty: "easy"
  },
  {
    id: "l09_q05",
    lecture: "Lecture 09",
    topic: "Three-Part FSM Structural Model",
    question: "What are the three major blocks in the FSM structural model?",
    options: [
      "Next-state logic, state register, output logic",
      "ALU, cache, DRAM",
      "Decoder, SRAM, bus",
      "Compiler, linker, loader"
    ],
    correctAnswer: "Next-state logic, state register, output logic",
    explanation: "The FSM consists of combinational next-state logic, a state register, and combinational output logic.",
    difficulty: "easy"
  },
  {
    id: "l09_q06",
    lecture: "Lecture 09",
    topic: "Moore Machines",
    question: "In a Moore machine, the output depends on:",
    options: [
      "Current state only",
      "Input only",
      "Current state and current input",
      "Previous output only"
    ],
    correctAnswer: "Current state only",
    explanation: "Moore outputs are functions of the current state and therefore change only when the state changes.",
    difficulty: "easy"
  },
  {
    id: "l09_q07",
    lecture: "Lecture 09",
    topic: "Mealy Machines",
    question: "In a Mealy machine, the output depends on:",
    options: [
      "State only",
      "Input only",
      "Current state and current input",
      "Clock frequency only"
    ],
    correctAnswer: "Current state and current input",
    explanation: "Mealy outputs are functions of both state and input and may respond within the same cycle.",
    difficulty: "easy"
  },
  {
    id: "l09_q08",
    lecture: "Lecture 09",
    topic: "FSM Synthesis Procedure",
    question: "After drawing an FSM state diagram, what is the next major step?",
    options: [
      "Construct the state table",
      "Erase all states",
      "Implement transistors",
      "Write a Python class"
    ],
    correctAnswer: "Construct the state table",
    explanation: "The lecture's FSM synthesis sequence includes state diagram followed by a state table, encoding, equations, and hardware.",
    difficulty: "easy"
  },
  {
    id: "l09_q09",
    lecture: "Lecture 09",
    topic: "CPU Control Unit",
    question: "Why is the CPU control unit described as a giant FSM?",
    options: [
      "It generates control signals based on instruction type and datapath state",
      "It stores every program permanently",
      "It performs all arithmetic itself",
      "It replaces main memory"
    ],
    correctAnswer: "It generates control signals based on instruction type and datapath state",
    explanation: "The control unit orchestrates the datapath using signals such as RegWrite, ALUOp, MemRead, and MemWrite.",
    difficulty: "medium"
  },

  {
    id: "l10_q01",
    lecture: "Lecture 10",
    topic: "6T SRAM Cell",
    question: "What is the basic structure of the 6T SRAM cell?",
    options: [
      "Six transistors with two cross-coupled inverters and access transistors",
      "One transistor and one capacitor",
      "Only two diodes",
      "Eight capacitors"
    ],
    correctAnswer: "Six transistors with two cross-coupled inverters and access transistors",
    explanation: "The 6T cell uses four transistors for the latch and two for access.",
    difficulty: "easy"
  },
  {
    id: "l10_q02",
    lecture: "Lecture 10",
    topic: "SRAM Reads and Cache Applications",
    question: "Why is an SRAM read described as non-destructive?",
    options: [
      "The stored bit remains intact after reading",
      "The cell is erased after reading",
      "The capacitor must be refreshed",
      "The read always flips the stored bit"
    ],
    correctAnswer: "The stored bit remains intact after reading",
    explanation: "Cross-coupled inverters maintain the stored state, so SRAM does not need refresh while powered.",
    difficulty: "easy"
  },
  {
    id: "l10_q03",
    lecture: "Lecture 10",
    topic: "DRAM 1T1C Cell",
    question: "What does a 1T1C DRAM cell use to store one bit?",
    options: [
      "One transistor and one capacitor",
      "Six transistors",
      "Two flip-flops",
      "One XOR gate"
    ],
    correctAnswer: "One transistor and one capacitor",
    explanation: "The transistor acts as an access device and the capacitor stores charge representing the bit.",
    difficulty: "easy"
  },
  {
    id: "l10_q04",
    lecture: "Lecture 10",
    topic: "DRAM Leakage and Refresh",
    question: "Why does DRAM require periodic refresh?",
    options: [
      "The capacitor charge leaks away over time",
      "The transistor count is too low",
      "Reads permanently invert data",
      "The clock cannot reach the memory"
    ],
    correctAnswer: "The capacitor charge leaks away over time",
    explanation: "Stored charge decays through leakage, so the controller periodically restores it.",
    difficulty: "easy"
  },
  {
    id: "l10_q05",
    lecture: "Lecture 10",
    topic: "Destructive Reads and Sense Amplifiers",
    question: "What does a DRAM sense amplifier do during a read?",
    options: [
      "Detects and amplifies the small voltage change on the bit line",
      "Generates the CPU clock",
      "Changes the instruction set",
      "Stores programs permanently"
    ],
    correctAnswer: "Detects and amplifies the small voltage change on the bit line",
    explanation: "A DRAM read produces a tiny signal that must be sensed and amplified before the data is restored.",
    difficulty: "medium"
  },
  {
    id: "l10_q06",
    lecture: "Lecture 10",
    topic: "SRAM vs DRAM",
    question: "Which comparison is correct?",
    options: [
      "SRAM is denser and slower than DRAM",
      "SRAM is faster and more expensive per bit, while DRAM is denser and cheaper per bit",
      "DRAM is nonvolatile while SRAM is volatile",
      "Both use identical cell structures"
    ],
    correctAnswer: "SRAM is faster and more expensive per bit, while DRAM is denser and cheaper per bit",
    explanation: "The lecture uses SRAM for caches and DRAM for main memory because of these trade-offs.",
    difficulty: "easy"
  },
  {
    id: "l10_q07",
    lecture: "Lecture 10",
    topic: "Memory Hierarchy",
    question: "Which layer is closest to the CPU in the memory hierarchy shown?",
    options: [
      "Secondary storage",
      "Main memory",
      "L1/L2/L3 cache",
      "Registers"
    ],
    correctAnswer: "Registers",
    explanation: "Registers are the fastest and smallest storage closest to the CPU.",
    difficulty: "easy"
  },
  {
    id: "l10_q08",
    lecture: "Lecture 10",
    topic: "Memory Wall",
    question: "What is the memory wall?",
    options: [
      "A growing gap between CPU speed improvements and DRAM latency improvements",
      "A physical wall around RAM",
      "A compiler limitation",
      "A cache replacement algorithm"
    ],
    correctAnswer: "A growing gap between CPU speed improvements and DRAM latency improvements",
    explanation: "CPU performance has improved much faster than DRAM latency, creating a widening memory bottleneck.",
    difficulty: "medium"
  },
  {
    id: "l10_q09",
    lecture: "Lecture 10",
    topic: "Stored-Program Concept",
    question: "What does the stored-program concept mean?",
    options: [
      "Programs and user data can reside in the same memory space",
      "Programs must always be stored in ROM",
      "Programs never use memory",
      "Only data is stored in RAM"
    ],
    correctAnswer: "Programs and user data can reside in the same memory space",
    explanation: "In the von Neumann model, instruction code and data share the same memory.",
    difficulty: "easy"
  },
  {
    id: "l10_q10",
    lecture: "Lecture 10",
    topic: "Bus Architectures and CPU Interconnects",
    question: "Which bus specifies the memory location being accessed?",
    options: [
      "Data bus",
      "Address bus",
      "Control bus",
      "Cache bus"
    ],
    correctAnswer: "Address bus",
    explanation: "The address bus carries the location, while the data bus carries data and the control bus carries signals such as read and write.",
    difficulty: "easy"
  },

  {
    id: "l11_q01",
    lecture: "Lecture 11",
    topic: "Von Neumann Architecture",
    question: "What is the defining feature of the classic von Neumann architecture?",
    options: [
      "Separate instruction and data memories",
      "Unified memory for instructions and data with a shared system bus",
      "No control unit",
      "No registers"
    ],
    correctAnswer: "Unified memory for instructions and data with a shared system bus",
    explanation: "The von Neumann model stores both code and data in one memory and uses shared communication paths.",
    difficulty: "easy"
  },
  {
    id: "l11_q02",
    lecture: "Lecture 11",
    topic: "Unified Memory Space",
    question: "In a unified memory architecture, an address can refer to:",
    options: [
      "Only instructions",
      "Only data",
      "Either instruction code or data",
      "Only I/O ports"
    ],
    correctAnswer: "Either instruction code or data",
    explanation: "The same address space contains both program instructions and data.",
    difficulty: "easy"
  },
  {
    id: "l11_q03",
    lecture: "Lecture 11",
    topic: "Classic Von Neumann Components",
    question: "Which set contains the four classic components highlighted in the lecture?",
    options: [
      "Control Unit, ALU, Unified Memory, I/O",
      "GPU, SSD, Compiler, Cache",
      "Decoder, Router, Keyboard, Monitor",
      "Only ALU and Registers"
    ],
    correctAnswer: "Control Unit, ALU, Unified Memory, I/O",
    explanation: "These four components form the basic classical von Neumann system described in the lecture.",
    difficulty: "easy"
  },
  {
    id: "l11_q04",
    lecture: "Lecture 11",
    topic: "Programs Are Data and Security",
    question: "Why does the stored-program concept enable both compilation and JIT execution?",
    options: [
      "Because instructions are represented as data that can be loaded or generated in memory",
      "Because CPUs cannot execute binary",
      "Because programs bypass memory",
      "Because JIT never produces machine code"
    ],
    correctAnswer: "Because instructions are represented as data that can be loaded or generated in memory",
    explanation: "The lecture notes that compilers and JIT engines produce machine code that can be treated as stored program data.",
    difficulty: "medium"
  },
  {
    id: "l11_q05",
    lecture: "Lecture 11",
    topic: "Von Neumann Bottleneck",
    question: "What is the main cause of the von Neumann bottleneck?",
    options: [
      "Instructions and data compete for a shared memory path",
      "Too many ALUs",
      "Too many registers",
      "Separate instruction caches"
    ],
    correctAnswer: "Instructions and data compete for a shared memory path",
    explanation: "The shared bus limits how quickly the CPU can transfer instructions and data.",
    difficulty: "easy"
  },
  {
    id: "l11_q06",
    lecture: "Lecture 11",
    topic: "Architectural Responses to the Bottleneck",
    question: "Which is an architectural response to the von Neumann bottleneck?",
    options: [
      "Caching and wider/faster buses",
      "Removing all registers",
      "Reducing memory bandwidth",
      "Disabling instruction fetch"
    ],
    correctAnswer: "Caching and wider/faster buses",
    explanation: "The lecture lists caching, wider buses, and split instruction/data paths as responses.",
    difficulty: "easy"
  },
  {
    id: "l11_q07",
    lecture: "Lecture 11",
    topic: "Harvard Architecture",
    question: "What distinguishes Harvard architecture from von Neumann architecture?",
    options: [
      "Harvard uses separate instruction and data memories and buses",
      "Harvard has no memory",
      "Harvard has only one shared bus",
      "Harvard cannot fetch instructions"
    ],
    correctAnswer: "Harvard uses separate instruction and data memories and buses",
    explanation: "Separate I-memory and D-memory allow instruction fetch and data access to occur simultaneously.",
    difficulty: "easy"
  },
  {
    id: "l11_q08",
    lecture: "Lecture 11",
    topic: "Modified Harvard Architecture",
    question: "What is a common feature of modern modified-Harvard processors?",
    options: [
      "Split L1 instruction and data caches with unified outer memory/cache levels",
      "Completely separate physical main memories",
      "No cache hierarchy",
      "Only instruction cache"
    ],
    correctAnswer: "Split L1 instruction and data caches with unified outer memory/cache levels",
    explanation: "Modern CPUs often use split L1 I/D caches while keeping a unified lower memory hierarchy.",
    difficulty: "medium"
  },
  {
    id: "l11_q09",
    lecture: "Lecture 11",
    topic: "Von Neumann vs Harvard vs Modified Harvard",
    question: "Which architecture provides separate instruction and data paths while retaining a unified main memory in the lecture's comparison?",
    options: [
      "Pure von Neumann",
      "True Harvard",
      "Modified Harvard",
      "Single-cycle architecture"
    ],
    correctAnswer: "Modified Harvard",
    explanation: "Modified Harvard splits parts of the cache hierarchy while keeping unified DRAM outside the CPU.",
    difficulty: "medium"
  },
  {
    id: "l11_q10",
    lecture: "Lecture 11",
    topic: "Memory Bandwidth Example",
    question: "If a CPU fetches one 32-bit instruction and one 32-bit data word per cycle at 1 GHz, what total bandwidth is required?",
    options: [
      "4 Gb/s",
      "8 Gb/s",
      "16 Gb/s",
      "32 Gb/s"
    ],
    correctAnswer: "8 Gb/s",
    explanation: "The total transfer is 32 + 32 = 64 bits per cycle; at 1 GHz that is 64 Gb/s = 8 GB/s.",
    difficulty: "medium"
  },
  {
    id: "l11_q11",
    lecture: "Lecture 11",
    topic: "Real-World Architecture Examples",
    question: "Which processor family was listed as an example of modified-Harvard architecture?",
    options: [
      "x86-64 processors",
      "Only discrete TTL logic",
      "Only analog amplifiers",
      "Mechanical calculators"
    ],
    correctAnswer: "x86-64 processors",
    explanation: "The lecture lists x86-64, ARM Cortex-M4, and Apple Silicon as modified-Harvard examples.",
    difficulty: "easy"
  },
  {
    id: "l11_q12",
    lecture: "Lecture 11",
    topic: "Harvard Architecture Pitfalls",
    question: "Which statement is a pitfall identified in the lecture?",
    options: [
      "Modern PCs are generally not pure Harvard machines",
      "Harvard architecture always has infinite bandwidth",
      "Harvard has no hardware cost",
      "Bus width does not matter"
    ],
    correctAnswer: "Modern PCs are generally not pure Harvard machines",
    explanation: "The lecture warns against assuming modern PCs are pure Harvard architectures.",
    difficulty: "easy"
  },

  {
    id: "l12_q01",
    lecture: "Lecture 12",
    topic: "ISA Abstraction and Hardware-Software Interface",
    question: "What is the ISA best described as?",
    options: [
      "The contract between software and hardware",
      "A memory fabrication process",
      "A cache-only protocol",
      "A programming language library"
    ],
    correctAnswer: "The contract between software and hardware",
    explanation: "The lecture explicitly describes the ISA as the interface or contract between software and CPU hardware.",
    difficulty: "easy"
  },
  {
    id: "l12_q02",
    lecture: "Lecture 12",
    topic: "Architectural State Elements",
    question: "What does the program counter store?",
    options: [
      "The address of the current or next instruction",
      "The temperature of the CPU",
      "The cache size",
      "The ALU opcode only"
    ],
    correctAnswer: "The address of the current or next instruction",
    explanation: "The PC tracks where instruction execution is located in memory.",
    difficulty: "easy"
  },
  {
    id: "l12_q03",
    lecture: "Lecture 12",
    topic: "Memory Address Space",
    question: "What does byte-addressable memory mean?",
    options: [
      "Each address identifies one byte of storage",
      "Each address identifies 32 instructions",
      "Only words can be addressed",
      "Addresses refer only to registers"
    ],
    correctAnswer: "Each address identifies one byte of storage",
    explanation: "In a byte-addressable system, consecutive addresses refer to consecutive bytes.",
    difficulty: "easy"
  },
  {
    id: "l12_q04",
    lecture: "Lecture 12",
    topic: "Instruction Semantics and Machine Code",
    question: "Which part of an instruction specifies what operation should be performed?",
    options: [
      "Opcode",
      "Destination register only",
      "Stack pointer",
      "Memory address bus"
    ],
    correctAnswer: "Opcode",
    explanation: "The opcode identifies the operation, while operands specify sources and destination.",
    difficulty: "easy"
  },
  {
    id: "l12_q05",
    lecture: "Lecture 12",
    topic: "Hardware Decoder Complexity",
    question: "Why does a variable-length instruction set usually require more complex decoding?",
    options: [
      "The decoder must determine instruction boundaries and fields across varying lengths",
      "All instructions have identical formats",
      "No decoder is needed",
      "Variable-length instructions contain no operands"
    ],
    correctAnswer: "The decoder must determine instruction boundaries and fields across varying lengths",
    explanation: "Variable-length encodings make instruction extraction and control logic more complex.",
    difficulty: "medium"
  },
  {
    id: "l12_q06",
    lecture: "Lecture 12",
    topic: "CISC Philosophy",
    question: "What is the central philosophy of CISC described in the lecture?",
    options: [
      "Use simpler instructions and more compiler work",
      "Make hardware do more work per instruction to reduce code size",
      "Eliminate memory operations",
      "Use only fixed 32-bit instructions"
    ],
    correctAnswer: "Make hardware do more work per instruction to reduce code size",
    explanation: "CISC emerged when memory was small and expensive, motivating compact and feature-rich instructions.",
    difficulty: "easy"
  },
  {
    id: "l12_q07",
    lecture: "Lecture 12",
    topic: "CISC Features and Challenges",
    question: "Which is a CISC characteristic listed in the lecture?",
    options: [
      "Variable-length instructions and direct memory-to-memory operations",
      "Only LOAD and STORE touch memory",
      "Fixed 32-bit instructions",
      "No complex decoding"
    ],
    correctAnswer: "Variable-length instructions and direct memory-to-memory operations",
    explanation: "CISC architectures often support variable instruction lengths and rich memory-operating instructions.",
    difficulty: "easy"
  },
  {
    id: "l12_q08",
    lecture: "Lecture 12",
    topic: "RISC Philosophy",
    question: "What is a central RISC design principle?",
    options: [
      "Keep instructions uniform and hardware simple",
      "Use as many instruction formats as possible",
      "Combine arbitrary memory and ALU operations",
      "Make every instruction multi-stage"
    ],
    correctAnswer: "Keep instructions uniform and hardware simple",
    explanation: "RISC emphasizes simple fixed-length instructions that are easy to decode and pipeline.",
    difficulty: "easy"
  },
  {
    id: "l12_q09",
    lecture: "Lecture 12",
    topic: "RISC Load/Store Architecture",
    question: "In a load/store RISC architecture, which instructions may access memory for ordinary data operations?",
    options: [
      "Only LOAD and STORE",
      "Only ADD and SUB",
      "Every arithmetic instruction",
      "Only branch instructions"
    ],
    correctAnswer: "Only LOAD and STORE",
    explanation: "Arithmetic and logical operations work on registers; memory access is isolated into load/store instructions.",
    difficulty: "easy"
  },
  {
    id: "l12_q10",
    lecture: "Lecture 12",
    topic: "CISC vs RISC Comparison",
    question: "Which comparison is correct?",
    options: [
      "CISC typically uses variable-length instructions; RISC typically uses fixed-length instructions",
      "Both require identical decoder complexity",
      "RISC always has fewer registers than CISC",
      "CISC forbids memory operands"
    ],
    correctAnswer: "CISC typically uses variable-length instructions; RISC typically uses fixed-length instructions",
    explanation: "The lecture contrasts CISC's variable-length design with RISC's uniform fixed-length encoding.",
    difficulty: "easy"
  },
  {
    id: "l12_q11",
    lecture: "Lecture 12",
    topic: "Hardware vs Compiler Trade-off",
    question: "According to the lecture, where does RISC shift more complexity?",
    options: [
      "Toward the optimizing compiler",
      "Toward mechanical storage",
      "Toward DRAM refresh",
      "Toward transistor fabrication"
    ],
    correctAnswer: "Toward the optimizing compiler",
    explanation: "RISC simplifies hardware and relies more on compiler scheduling and instruction generation.",
    difficulty: "medium"
  },
  {
    id: "l12_q12",
    lecture: "Lecture 12",
    topic: "Modern RISC-V and ISA Extensions",
    question: "Which extension in the lecture corresponds to compressed 16-bit instructions?",
    options: [
      "M",
      "F",
      "C",
      "D"
    ],
    correctAnswer: "C",
    explanation: "RISC-V's C extension provides compressed instructions to improve code density.",
    difficulty: "easy"
  },

  {
    id: "l13_q01",
    lecture: "Lecture 13",
    topic: "MIPS32 Instruction Encoding Formats",
    question: "Which three instruction formats are defined for MIPS32 in the lecture?",
    options: [
      "R-type, I-type, J-type",
      "A-type, B-type, C-type",
      "Load, Store, Branch only",
      "X-type, Y-type, Z-type"
    ],
    correctAnswer: "R-type, I-type, J-type",
    explanation: "MIPS32 uses R, I, and J formats for register ALU, immediate/memory, and jump instructions.",
    difficulty: "easy"
  },
  {
    id: "l13_q02",
    lecture: "Lecture 13",
    topic: "MIPS32 R-Type Format",
    question: "In MIPS32 R-type format, which field selects the exact ALU operation?",
    options: [
      "Opcode",
      "funct",
      "rs",
      "rd"
    ],
    correctAnswer: "funct",
    explanation: "R-type instructions use opcode=0 and the funct field to identify the operation.",
    difficulty: "easy"
  },
  {
    id: "l13_q03",
    lecture: "Lecture 13",
    topic: "MIPS32 I-Type Format",
    question: "What is the width of the immediate/offset field in a MIPS32 I-type instruction?",
    options: [
      "5 bits",
      "6 bits",
      "16 bits",
      "26 bits"
    ],
    correctAnswer: "16 bits",
    explanation: "The I-type format contains a 16-bit immediate or offset field.",
    difficulty: "easy"
  },
  {
    id: "l13_q04",
    lecture: "Lecture 13",
    topic: "MIPS32 J-Type Format",
    question: "How wide is the target-address field in a MIPS32 J-type instruction?",
    options: [
      "5 bits",
      "16 bits",
      "26 bits",
      "32 bits"
    ],
    correctAnswer: "26 bits",
    explanation: "J-type contains a 6-bit opcode and a 26-bit target field.",
    difficulty: "easy"
  },
  {
    id: "l13_q05",
    lecture: "Lecture 13",
    topic: "MIPS32 Register Conventions",
    question: "What is the conventional role of $sp in MIPS32?",
    options: [
      "Return address",
      "Stack pointer",
      "Global pointer",
      "Frame pointer"
    ],
    correctAnswer: "Stack pointer",
    explanation: "$sp is register 29 and points to the current stack location.",
    difficulty: "easy"
  },
  {
    id: "l13_q06",
    lecture: "Lecture 13",
    topic: "Caller-Saved vs Callee-Saved Registers",
    question: "Which group is caller-saved according to the lecture?",
    options: [
      "$s0-$s7 only",
      "$t0-$t9, $a0-$a3, and $v0-$v1",
      "$sp, $fp, and $ra only",
      "$zero only"
    ],
    correctAnswer: "$t0-$t9, $a0-$a3, and $v0-$v1",
    explanation: "Caller-saved registers may be overwritten by a function, so the caller preserves them if needed.",
    difficulty: "medium"
  },
  {
    id: "l13_q07",
    lecture: "Lecture 13",
    topic: "MIPS32 Special Instruction Notes",
    question: "How can the MIPS pseudo-instruction `move $t0, $t1` be represented?",
    options: [
      "`add $t0, $t1, $zero`",
      "`sub $t0, $t1, $t1`",
      "`lw $t0, $t1`",
      "`j $t1`"
    ],
    correctAnswer: "`add $t0, $t1, $zero`",
    explanation: "Adding zero preserves the source value and writes it to the destination.",
    difficulty: "medium"
  },
  {
    id: "l13_q08",
    lecture: "Lecture 13",
    topic: "RISC-V Modular ISA",
    question: "Which RISC-V extension provides integer multiplication and division?",
    options: [
      "A",
      "M",
      "F",
      "C"
    ],
    correctAnswer: "M",
    explanation: "The M extension adds integer multiply and divide instructions.",
    difficulty: "easy"
  },
  {
    id: "l13_q09",
    lecture: "Lecture 13",
    topic: "MIPS vs RISC-V",
    question: "What is one key register-format advantage of RISC-V over MIPS highlighted in the lecture?",
    options: [
      "It uses different rs positions in every instruction",
      "It keeps rs1 and rs2 in consistent positions across formats",
      "It has no registers",
      "It removes immediate instructions"
    ],
    correctAnswer: "It keeps rs1 and rs2 in consistent positions across formats",
    explanation: "The lecture highlights more regular register field placement as a simplification in RISC-V.",
    difficulty: "medium"
  },

  {
    id: "l14_q01",
    lecture: "Lecture 14",
    topic: "Control Flow Translation",
    question: "Why must structured C control flow be translated into labels and jumps in MIPS assembly?",
    options: [
      "Assembly directly supports Python-style if/else syntax",
      "MIPS branch and jump instructions explicitly control program flow",
      "MIPS has no program counter",
      "Assembly ignores conditional execution"
    ],
    correctAnswer: "MIPS branch and jump instructions explicitly control program flow",
    explanation: "High-level control structures must be translated into branch and jump sequences.",
    difficulty: "easy"
  },
  {
    id: "l14_q02",
    lecture: "Lecture 14",
    topic: "Branch-Away Rule",
    question: "What does the branch-away rule recommend for an if condition in MIPS?",
    options: [
      "Branch away when the condition is false",
      "Branch away only when the condition is true",
      "Never use labels",
      "Always branch to the function return"
    ],
    correctAnswer: "Branch away when the condition is false",
    explanation: "The lecture recommends testing the inverse condition and branching to the else or exit block.",
    difficulty: "easy"
  },
  {
    id: "l14_q03",
    lecture: "Lecture 14",
    topic: "if/else Translation",
    question: "In the provided if (i == j) example, what should happen when i == j is true?",
    options: [
      "Jump directly to Else",
      "Compute f = g + h",
      "Compute f = g - h",
      "Exit before assigning f"
    ],
    correctAnswer: "Compute f = g + h",
    explanation: "The true branch performs the addition, while the false branch performs subtraction.",
    difficulty: "easy"
  },
  {
    id: "l14_q04",
    lecture: "Lecture 14",
    topic: "Relational Ordering and slt",
    question: "Why is `slt` useful in MIPS branch translation?",
    options: [
      "MIPS lacks direct `blt` and similar comparison branches",
      "It performs memory reads",
      "It changes the program counter directly",
      "It stores stack frames"
    ],
    correctAnswer: "MIPS lacks direct `blt` and similar comparison branches",
    explanation: "The lecture uses `slt` to compute a comparison result and then branches using `beq` or `bne`.",
    difficulty: "medium"
  },
  {
    id: "l14_q05",
    lecture: "Lecture 14",
    topic: "if/else Flowchart",
    question: "In the lecture's if/else flowchart, what does the decision node determine?",
    options: [
      "Which branch of the program executes",
      "Which register is saved",
      "The size of the stack",
      "The ALU clock frequency"
    ],
    correctAnswer: "Which branch of the program executes",
    explanation: "The decision node tests the condition and sends control to the true or false path.",
    difficulty: "easy"
  },
  {
    id: "l14_q06",
    lecture: "Lecture 14",
    topic: "While Loop Translation",
    question: "What is the essential structure of the MIPS while-loop translation shown in the lecture?",
    options: [
      "Test condition → exit if false → body → jump back",
      "Body → halt → test",
      "Jump to body forever with no condition",
      "Return before testing"
    ],
    correctAnswer: "Test condition → exit if false → body → jump back",
    explanation: "The loop label begins with the condition test, followed by the body and a jump back to the loop top.",
    difficulty: "easy"
  },
  {
    id: "l14_q07",
    lecture: "Lecture 14",
    topic: "Array Address Calculation",
    question: "For a 32-bit integer array, why is the index multiplied by 4 in the address expression base + 4×i?",
    options: [
      "Each integer occupies 4 bytes",
      "Each integer occupies 4 bits",
      "The array has exactly four elements",
      "The stack pointer must be multiplied by 4"
    ],
    correctAnswer: "Each integer occupies 4 bytes",
    explanation: "A 32-bit word is 4 bytes, so element i is offset by 4×i bytes from the base.",
    difficulty: "easy"
  },
  {
    id: "l14_q08",
    lecture: "Lecture 14",
    topic: "Procedure Calls",
    question: "What does `jal` do in MIPS?",
    options: [
      "Stores the return address and jumps to the function",
      "Loads a word from memory",
      "Returns from a function",
      "Compares two registers"
    ],
    correctAnswer: "Stores the return address and jumps to the function",
    explanation: "`jal` writes the return address to $ra and transfers control to the target function.",
    difficulty: "easy"
  },
  {
    id: "l14_q09",
    lecture: "Lecture 14",
    topic: "Stack Frames and Calling Convention",
    question: "In the MIPS convention shown, which direction does the stack grow?",
    options: [
      "Toward higher addresses",
      "Toward lower addresses",
      "It never changes",
      "It grows toward the code segment"
    ],
    correctAnswer: "Toward lower addresses",
    explanation: "The lecture explicitly states that the stack grows downward from high to low addresses.",
    difficulty: "easy"
  },
  {
    id: "l14_q10",
    lecture: "Lecture 14",
    topic: "Function Prologue and Epilogue",
    question: "What is the main purpose of a function prologue?",
    options: [
      "Allocate stack space and save required registers",
      "Delete the caller's stack",
      "Skip the function body",
      "Disable the clock"
    ],
    correctAnswer: "Allocate stack space and save required registers",
    explanation: "The shown prologue adjusts $sp and stores values such as $ra and $s0.",
    difficulty: "easy"
  },
  {
    id: "l14_q11",
    lecture: "Lecture 14",
    topic: "Recursive Function Stack",
    question: "Why does recursion require multiple stack frames?",
    options: [
      "Each recursive call needs its own arguments, locals, and return address",
      "Only one frame can store all calls",
      "Recursive functions do not use the stack",
      "The CPU creates a new register file for every call"
    ],
    correctAnswer: "Each recursive call needs its own arguments, locals, and return address",
    explanation: "Each recursive invocation must preserve its own execution context until it returns.",
    difficulty: "medium"
  },
  {
    id: "l14_q12",
    lecture: "Lecture 14",
    topic: "SPIM Useful Instructions",
    question: "Which instruction is used for an unconditional jump in MIPS/SPIM?",
    options: [
      "`j`",
      "`lw`",
      "`slt`",
      "`sw`"
    ],
    correctAnswer: "`j`",
    explanation: "`j label` transfers control unconditionally to the specified label.",
    difficulty: "easy"
  },
  {
    id: "l14_q13",
    lecture: "Lecture 14",
    topic: "SPIM Load/Store Instructions",
    question: "Which instruction loads a word from memory into a register?",
    options: [
      "`sw`",
      "`lw`",
      "`add`",
      "`jr`"
    ],
    correctAnswer: "`lw`",
    explanation: "`lw rd, mem` loads a 4-byte word from memory into a register.",
    difficulty: "easy"
  },
  {
    id: "l14_q14",
    lecture: "Lecture 14",
    topic: "SPIM System Calls",
    question: "Which SPIM syscall service number is used to print an integer?",
    options: [
      "1",
      "4",
      "8",
      "10"
    ],
    correctAnswer: "1",
    explanation: "The lecture's SPIM syscall table assigns service 1 to print integer.",
    difficulty: "easy"
  },
  {
    id: "l14_q15",
    lecture: "Lecture 14",
    topic: "SPIM System Calls",
    question: "Which syscall is used to print a string in SPIM?",
    options: [
      "1",
      "4",
      "5",
      "10"
    ],
    correctAnswer: "4",
    explanation: "SPIM service 4 prints the null-terminated string whose address is placed in $a0.",
    difficulty: "easy"
  }
];