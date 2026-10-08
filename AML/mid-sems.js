const mcqs = [
  {
    id: "l1-q1",
    lecture: "Lecture 1",
    topic: "Course Introduction",
    question: "What is the main focus of Advanced Machine Learning in the lecture introduction?",
    options: [
      "Writing only rule-based software",
      "Building mathematical and data-driven learning systems",
      "Designing only computer networks",
      "Studying only database normalization"
    ],
    correctAnswer: "Building mathematical and data-driven learning systems",
    explanation: "The course focuses on mathematical, statistical, and algorithmic foundations of machine learning.",
    difficulty: "easy"
  },
  {
    id: "l1-q2",
    lecture: "Lecture 1",
    topic: "Faculty and Course Context",
    question: "According to the lecture, the faculty specializes in which combination?",
    options: [
      "AI/ML, mathematics, and ML problem solving",
      "Only operating systems",
      "Only frontend development",
      "Only computer graphics"
    ],
    correctAnswer: "AI/ML, mathematics, and ML problem solving",
    explanation: "The faculty profile highlights AI/ML, mathematics, and machine-learning problem solving.",
    difficulty: "easy"
  },
  {
    id: "l1-q3",
    lecture: "Lecture 1",
    topic: "Grading and Logistics",
    question: "What is the weightage of the End Semester Exam?",
    options: [
      "20%",
      "25%",
      "40%",
      "10%"
    ],
    correctAnswer: "40%",
    explanation: "The grading table assigns 40% to the End Semester Exam.",
    difficulty: "easy"
  },
  {
    id: "l1-q4",
    lecture: "Lecture 1",
    topic: "Grading and Logistics",
    question: "Which course component carries 20% weightage?",
    options: [
      "Contest",
      "Projects & Viva",
      "Lecture & Lab Assignments",
      "Mid Semester Exam"
    ],
    correctAnswer: "Projects & Viva",
    explanation: "Projects & Viva contribute 20% of the course grade.",
    difficulty: "easy"
  },
  {
    id: "l1-q5",
    lecture: "Lecture 1",
    topic: "Prerequisites",
    question: "Which of the following is listed as a prerequisite?",
    options: [
      "Probability and Statistics",
      "Computer Graphics",
      "Compiler Design",
      "Digital Signal Processing"
    ],
    correctAnswer: "Probability and Statistics",
    explanation: "The prerequisites include mathematics such as probability and statistics, linear algebra, and calculus.",
    difficulty: "easy"
  },
  {
    id: "l1-q6",
    lecture: "Lecture 1",
    topic: "Traditional Code and Rule Rigidity",
    question: "Why can a traditional spam filter based only on explicit words fail?",
    options: [
      "The computer cannot store strings",
      "Spammers can change spellings and evade the hard-coded rules",
      "Traditional programs cannot use conditions",
      "Rules automatically adapt to new spellings"
    ],
    correctAnswer: "Spammers can change spellings and evade the hard-coded rules",
    explanation: "Explicit rules such as blocking FREE or WINNER can break when attackers change spellings.",
    difficulty: "easy"
  },
  {
    id: "l1-q7",
    lecture: "Lecture 1",
    topic: "Traditional Code and Rule Rigidity",
    question: "What is the central weakness of traditional rule-based programming highlighted in the lecture?",
    options: [
      "It always requires neural networks",
      "It is structurally rigid and depends on explicitly written rules",
      "It cannot process numerical data",
      "It never uses algorithms"
    ],
    correctAnswer: "It is structurally rigid and depends on explicitly written rules",
    explanation: "Traditional programming depends on human-written rules and is brittle when the environment changes.",
    difficulty: "medium"
  },
  {
    id: "l1-q8",
    lecture: "Lecture 1",
    topic: "The Software Paradigm Flip",
    question: "In traditional programming, what is transformed into answers?",
    options: [
      "Data + Rules",
      "Data + Labels",
      "Answers + Rules",
      "Models + Feedback"
    ],
    correctAnswer: "Data + Rules",
    explanation: "Traditional programming combines data with explicit rules to produce answers.",
    difficulty: "easy"
  },
  {
    id: "l1-q9",
    lecture: "Lecture 1",
    topic: "The Software Paradigm Flip",
    question: "What does machine learning learn from data in the paradigm flip?",
    options: [
      "Hard-coded hardware instructions",
      "Rules that map data to answers",
      "Only database schemas",
      "Only test cases"
    ],
    correctAnswer: "Rules that map data to answers",
    explanation: "Machine learning uses examples consisting of data and desired answers to learn the rules/model.",
    difficulty: "easy"
  },
  {
    id: "l1-q10",
    lecture: "Lecture 1",
    topic: "AI ML DL Ecosystem",
    question: "Which statement correctly describes Machine Learning in the lecture?",
    options: [
      "ML is a subset of AI that learns patterns from data",
      "AI is a subset of ML",
      "DL is unrelated to ML",
      "ML only uses manually coded rules"
    ],
    correctAnswer: "ML is a subset of AI that learns patterns from data",
    explanation: "The lecture presents ML as a subset of AI that learns mathematical patterns from data.",
    difficulty: "easy"
  },
  {
    id: "l1-q11",
    lecture: "Lecture 1",
    topic: "AI ML DL Ecosystem",
    question: "What distinguishes Deep Learning from standard machine learning in the lecture?",
    options: [
      "Deep Learning uses only decision trees",
      "Deep Learning uses multi-layered neural networks to learn representations",
      "Deep Learning cannot work with raw data",
      "Deep Learning is outside AI"
    ],
    correctAnswer: "Deep Learning uses multi-layered neural networks to learn representations",
    explanation: "Deep learning is a subfield of ML based on multi-layered neural networks that learn representations automatically.",
    difficulty: "easy"
  },
  {
    id: "l1-q12",
    lecture: "Lecture 1",
    topic: "AI ML DL Ecosystem",
    question: "Which nesting relationship matches the ecosystem diagram?",
    options: [
      "AI contains ML, and ML contains DL",
      "ML contains AI, and AI contains DL",
      "DL contains AI, and AI contains ML",
      "All three are disjoint"
    ],
    correctAnswer: "AI contains ML, and ML contains DL",
    explanation: "The lecture diagram places Deep Learning inside Machine Learning inside Artificial Intelligence.",
    difficulty: "easy"
  },
  {
    id: "l1-q13",
    lecture: "Lecture 1",
    topic: "Labeled Data",
    question: "What makes a dataset labeled?",
    options: [
      "It contains only input features",
      "It contains inputs together with explicit target answers",
      "It contains no annotations",
      "It contains only time stamps"
    ],
    correctAnswer: "It contains inputs together with explicit target answers",
    explanation: "Labeled data contains input features plus a target or ground-truth answer.",
    difficulty: "easy"
  },
  {
    id: "l1-q14",
    lecture: "Lecture 1",
    topic: "Unlabeled Data",
    question: "Which example represents unlabeled data?",
    options: [
      "50,000 emails marked spam or not spam",
      "200,000 chest X-rays with no annotations",
      "Housing records with known prices",
      "Images with class names attached"
    ],
    correctAnswer: "200,000 chest X-rays with no annotations",
    explanation: "Unlabeled data has input features but no target labels.",
    difficulty: "easy"
  },
  {
    id: "l1-q15",
    lecture: "Lecture 1",
    topic: "Cost of Labeling",
    question: "Why is labeling often considered a bottleneck?",
    options: [
      "Labels are always generated automatically",
      "Human domain experts may be expensive and slow",
      "Labels increase storage only",
      "Labels eliminate the need for data"
    ],
    correctAnswer: "Human domain experts may be expensive and slow",
    explanation: "Examples such as radiologists, lawyers, and linguists illustrate the cost and time required for human labeling.",
    difficulty: "medium"
  },
  {
    id: "l1-q16",
    lecture: "Lecture 1",
    topic: "Supervised Learning",
    question: "What does supervised learning use to learn a predictive mapping?",
    options: [
      "Only unlabeled inputs",
      "Inputs paired with labels",
      "Only rewards from an environment",
      "Randomly generated rules"
    ],
    correctAnswer: "Inputs paired with labels",
    explanation: "Supervised learning learns from labeled input-output pairs.",
    difficulty: "easy"
  },
  {
    id: "l1-q17",
    lecture: "Lecture 1",
    topic: "Unsupervised Learning",
    question: "What is the main goal of unsupervised learning?",
    options: [
      "Predict known labels",
      "Discover hidden structure or groupings in unlabeled data",
      "Maximize a reward signal",
      "Estimate only regression coefficients"
    ],
    correctAnswer: "Discover hidden structure or groupings in unlabeled data",
    explanation: "Unsupervised learning searches for structure, patterns, clusters, or representations without target labels.",
    difficulty: "easy"
  },
  {
    id: "l1-q18",
    lecture: "Lecture 1",
    topic: "Semi-Supervised Learning",
    question: "What is characteristic of semi-supervised learning?",
    options: [
      "Only labeled data is used",
      "Only unlabeled data is used",
      "A small labeled set is combined with a large unlabeled set",
      "Only reward signals are used"
    ],
    correctAnswer: "A small labeled set is combined with a large unlabeled set",
    explanation: "Semi-supervised learning leverages a limited labeled portion and a larger unlabeled portion.",
    difficulty: "easy"
  },
  {
    id: "l1-q19",
    lecture: "Lecture 1",
    topic: "Reinforcement Learning",
    question: "What feedback drives reinforcement learning?",
    options: [
      "Explicit class labels for every state",
      "Rewards or penalties from environment interaction",
      "Only correlation coefficients",
      "Only reconstruction error"
    ],
    correctAnswer: "Rewards or penalties from environment interaction",
    explanation: "An agent interacts with an environment, takes actions, and receives rewards or penalties.",
    difficulty: "easy"
  },
  {
    id: "l1-q20",
    lecture: "Lecture 1",
    topic: "Regression",
    question: "Which ML task predicts a continuous scalar such as stipend or house price?",
    options: [
      "Classification",
      "Clustering",
      "Regression",
      "Association mining"
    ],
    correctAnswer: "Regression",
    explanation: "Regression predicts continuous numerical outputs.",
    difficulty: "easy"
  },
  {
    id: "l1-q21",
    lecture: "Lecture 1",
    topic: "Classification",
    question: "What is the defining output of a classification problem?",
    options: [
      "A continuous scalar",
      "A discrete class label",
      "Only cluster IDs without labels",
      "A covariance matrix"
    ],
    correctAnswer: "A discrete class label",
    explanation: "Classification predicts membership in discrete categories such as low-risk or high-risk.",
    difficulty: "easy"
  },
  {
    id: "l1-q22",
    lecture: "Lecture 1",
    topic: "Clustering",
    question: "What is the goal of clustering?",
    options: [
      "Predict a known target",
      "Group similar observations together without target labels",
      "Compute a regression slope",
      "Estimate a likelihood parameter"
    ],
    correctAnswer: "Group similar observations together without target labels",
    explanation: "Clustering is an unsupervised task that groups similar observations.",
    difficulty: "easy"
  },
  {
    id: "l1-q23",
    lecture: "Lecture 1",
    topic: "Regression Algorithms",
    question: "Which algorithm is directly listed as a regression method in the lecture?",
    options: [
      "Linear Regression",
      "Naive Bayes",
      "DBSCAN only",
      "K-Nearest Neighbors Classifier only"
    ],
    correctAnswer: "Linear Regression",
    explanation: "Linear Regression appears among the common regression algorithms.",
    difficulty: "easy"
  },
  {
    id: "l1-q24",
    lecture: "Lecture 1",
    topic: "Classification Algorithms",
    question: "Which algorithm is listed as a classification method?",
    options: [
      "K-Means",
      "Logistic Regression",
      "Gaussian Mixture Models only",
      "Decision Tree Regression"
    ],
    correctAnswer: "Logistic Regression",
    explanation: "Logistic Regression is listed under classification algorithms.",
    difficulty: "easy"
  },
  {
    id: "l1-q25",
    lecture: "Lecture 1",
    topic: "Clustering Algorithms",
    question: "Which algorithm is listed as a clustering method?",
    options: [
      "K-Means Clustering",
      "Logistic Regression",
      "Linear Regression",
      "Support Vector Regression"
    ],
    correctAnswer: "K-Means Clustering",
    explanation: "K-Means is explicitly listed under clustering algorithms.",
    difficulty: "easy"
  },

  {
    id: "l2-q1",
    lecture: "Lecture 2",
    topic: "Problem Definition Blueprint",
    question: "What is the first step in translating a vague human problem into an ML problem?",
    options: [
      "Pick an algorithm",
      "Understand the problem and isolate the exact friction point",
      "Normalize all features",
      "Tune hyperparameters"
    ],
    correctAnswer: "Understand the problem and isolate the exact friction point",
    explanation: "The blueprint starts with understanding the problem before modeling.",
    difficulty: "easy"
  },
  {
    id: "l2-q2",
    lecture: "Lecture 2",
    topic: "Quantifiable Goals",
    question: "Why must an ML problem have a quantifiable goal?",
    options: [
      "To make the model larger",
      "To define a measurable target for success",
      "To avoid collecting data",
      "To guarantee perfect accuracy"
    ],
    correctAnswer: "To define a measurable target for success",
    explanation: "A measurable target makes model success objectively evaluable.",
    difficulty: "easy"
  },
  {
    id: "l2-q3",
    lecture: "Lecture 2",
    topic: "ML Feasibility",
    question: "When should an ML solution be skipped according to the blueprint?",
    options: [
      "Whenever data is structured",
      "When a simple SQL query already solves the problem",
      "Whenever the dataset has more than 100 rows",
      "Whenever prediction is involved"
    ],
    correctAnswer: "When a simple SQL query already solves the problem",
    explanation: "ML is justified only when it adds value beyond simpler methods.",
    difficulty: "medium"
  },
  {
    id: "l2-q4",
    lecture: "Lecture 2",
    topic: "Constraints and Stakeholder Alignment",
    question: "Which is an example of an operational ML constraint?",
    options: [
      "Predictions must run within 10 ms on a mobile chip",
      "The model should have exactly 100 features",
      "The dataset must contain images",
      "The accuracy must always be 100%"
    ],
    correctAnswer: "Predictions must run within 10 ms on a mobile chip",
    explanation: "Latency, budget, privacy, and similar conditions can constrain an ML project.",
    difficulty: "easy"
  },
  {
    id: "l2-q5",
    lecture: "Lecture 2",
    topic: "Constraints and Stakeholder Alignment",
    question: "What should stakeholders agree on before model development?",
    options: [
      "A common definition of success and metrics",
      "Only the programming language",
      "Only the neural-network depth",
      "Only the database vendor"
    ],
    correctAnswer: "A common definition of success and metrics",
    explanation: "Stakeholder alignment means agreeing on what success means and how it will be measured.",
    difficulty: "easy"
  },
  {
    id: "l2-q6",
    lecture: "Lecture 2",
    topic: "Data Sourcing",
    question: "Which is an example of an internal production-data source?",
    options: [
      "SQL databases containing transactions and system logs",
      "Only printed documents",
      "Only synthetic data",
      "Only handwritten notes"
    ],
    correctAnswer: "SQL databases containing transactions and system logs",
    explanation: "Internal warehouses such as SQL databases are a common source of production data.",
    difficulty: "easy"
  },
  {
    id: "l2-q7",
    lecture: "Lecture 2",
    topic: "Data Sourcing",
    question: "Which source can provide real-time weather or stock-price information?",
    options: [
      "APIs",
      "Only spreadsheets",
      "Only PDFs",
      "Only image folders"
    ],
    correctAnswer: "APIs",
    explanation: "APIs are listed as a source of real-time streaming data.",
    difficulty: "easy"
  },
  {
    id: "l2-q8",
    lecture: "Lecture 2",
    topic: "Data Sourcing",
    question: "What is web scraping used for in the lecture?",
    options: [
      "Automated extraction from websites",
      "Database normalization",
      "Neural network initialization",
      "Gradient computation"
    ],
    correctAnswer: "Automated extraction from websites",
    explanation: "Web scraping extracts information such as competitor pricing and reviews from websites.",
    difficulty: "easy"
  },
  {
    id: "l2-q9",
    lecture: "Lecture 2",
    topic: "Data Structures",
    question: "Which data structure uses rows and columns with a rigid tabular format?",
    options: [
      "Structured data",
      "Unstructured data",
      "Semi-structured data",
      "Pure time-series data only"
    ],
    correctAnswer: "Structured data",
    explanation: "Structured data has a rigid table-like organization.",
    difficulty: "easy"
  },
  {
    id: "l2-q10",
    lecture: "Lecture 2",
    topic: "Data Structures",
    question: "JSON, XML, and logs are presented as examples of which data type?",
    options: [
      "Structured",
      "Unstructured",
      "Semi-structured",
      "Binary-only"
    ],
    correctAnswer: "Semi-structured",
    explanation: "Semi-structured data has some organization through tags or key-value pairs without a strict table schema.",
    difficulty: "easy"
  },
  {
    id: "l2-q11",
    lecture: "Lecture 2",
    topic: "Time-Series Data",
    question: "What distinguishes time-series data from ordinary tabular observations?",
    options: [
      "Values are ordered over successive time intervals",
      "It can never contain numbers",
      "It never has missing values",
      "It contains no temporal information"
    ],
    correctAnswer: "Values are ordered over successive time intervals",
    explanation: "Time-series observations are indexed by time and preserve temporal order.",
    difficulty: "easy"
  },
  {
    id: "l2-q12",
    lecture: "Lecture 2",
    topic: "Feature Type Classification",
    question: "Which type of categorical feature has categories with a meaningful rank or order?",
    options: [
      "Nominal",
      "Ordinal",
      "Discrete numerical",
      "Continuous numerical"
    ],
    correctAnswer: "Ordinal",
    explanation: "Ordinal categories such as education levels have a meaningful ordering.",
    difficulty: "easy"
  },
  {
    id: "l2-q13",
    lecture: "Lecture 2",
    topic: "Feature Type Classification",
    question: "Which is a numerical discrete variable?",
    options: [
      "Temperature",
      "Income",
      "Number of rooms",
      "Weight"
    ],
    correctAnswer: "Number of rooms",
    explanation: "Discrete numerical values are countable integers such as numbers of rooms or clicks.",
    difficulty: "easy"
  },
  {
    id: "l2-q14",
    lecture: "Lecture 2",
    topic: "EDA Checklist",
    question: "Which item belongs to the EDA diagnostic checklist?",
    options: [
      "Missing values",
      "Neural-network depth",
      "Optimizer momentum",
      "Activation function"
    ],
    correctAnswer: "Missing values",
    explanation: "The checklist includes dataset structure, missing values, outliers, duplicates, distributions, relationships, and class imbalance.",
    difficulty: "easy"
  },
  {
    id: "l2-q15",
    lecture: "Lecture 2",
    topic: "EDA Levels",
    question: "Which analysis studies one feature at a time?",
    options: [
      "Univariate analysis",
      "Bivariate analysis",
      "Multivariate analysis",
      "Cross-validation"
    ],
    correctAnswer: "Univariate analysis",
    explanation: "Univariate analysis examines a single feature using tools such as histograms and box plots.",
    difficulty: "easy"
  },
  {
    id: "l2-q16",
    lecture: "Lecture 2",
    topic: "EDA Levels",
    question: "A heatmap examining relationships among several features is an example of which analysis level?",
    options: [
      "Univariate",
      "Bivariate only",
      "Multivariate",
      "No analysis"
    ],
    correctAnswer: "Multivariate",
    explanation: "Multivariate analysis examines interactions across multiple features.",
    difficulty: "medium"
  },
  {
    id: "l2-q17",
    lecture: "Lecture 2",
    topic: "Class Imbalance and Correlations",
    question: "Why is class imbalance important during EDA?",
    options: [
      "A rare positive class can be hidden by overall accuracy",
      "It always improves classification",
      "It removes the need for validation",
      "It guarantees balanced predictions"
    ],
    correctAnswer: "A rare positive class can be hidden by overall accuracy",
    explanation: "The lecture highlights examples such as 99% non-fraud versus 1% fraud, where class imbalance can distort interpretation.",
    difficulty: "medium"
  },
  {
    id: "l2-q18",
    lecture: "Lecture 2",
    topic: "Missing Values",
    question: "Which strategy is appropriate when only a small percentage of values are missing?",
    options: [
      "Delete rows or columns in suitable cases",
      "Always delete the whole dataset",
      "Always replace with zero",
      "Always convert them to labels"
    ],
    correctAnswer: "Delete rows or columns in suitable cases",
    explanation: "The lecture suggests deletion in low-missingness situations, with imputation used more broadly when deletion could introduce bias.",
    difficulty: "easy"
  },
  {
    id: "l2-q19",
    lecture: "Lecture 2",
    topic: "Imputation",
    question: "Which is a suitable central tendency for imputing a numerical feature when outliers are present?",
    options: [
      "Median",
      "Random label",
      "Mode only",
      "String concatenation"
    ],
    correctAnswer: "Median",
    explanation: "Median imputation is useful when outliers can distort the mean.",
    difficulty: "easy"
  },
  {
    id: "l2-q20",
    lecture: "Lecture 2",
    topic: "Inconsistent Data",
    question: "How can inconsistent labels such as " +
      "\"Yes, Y, True, 1\"" +
      " be handled?",
    options: [
      "Map them to one consistent format",
      "Delete every row automatically",
      "Treat each spelling as a separate target forever",
      "Convert them to random numbers"
    ],
    correctAnswer: "Map them to one consistent format",
    explanation: "Inconsistent labels should be standardized into a single representation such as a Boolean format.",
    difficulty: "easy"
  },
  {
    id: "l2-q21",
    lecture: "Lecture 2",
    topic: "Min-Max Scaling",
    question: "Which formula represents Min-Max scaling?",
    options: [
      "x_scaled = (x - x_min) / (x_max - x_min)",
      "x_scaled = x / mean(x)",
      "x_scaled = x - median(x)",
      "x_scaled = log(x)"
    ],
    correctAnswer: "x_scaled = (x - x_min) / (x_max - x_min)",
    explanation: "Min-Max normalization maps values into a bounded interval, typically [0, 1].",
    difficulty: "easy"
  },
  {
    id: "l2-q22",
    lecture: "Lecture 2",
    topic: "Z-Score Scaling",
    question: "What does z-score standardization divide the centered value by?",
    options: [
      "The maximum value",
      "The standard deviation",
      "The median",
      "The IQR"
    ],
    correctAnswer: "The standard deviation",
    explanation: "The z-score is z = (x - μ) / σ.",
    difficulty: "easy"
  },
  {
    id: "l2-q23",
    lecture: "Lecture 2",
    topic: "Robust Scaling",
    question: "Why is the Robust Scaler useful in the presence of extreme outliers?",
    options: [
      "It uses the median and IQR",
      "It uses only the maximum",
      "It assumes all values are Gaussian",
      "It removes every large value"
    ],
    correctAnswer: "It uses the median and IQR",
    explanation: "Robust scaling uses the median and interquartile range, making it less sensitive to extreme observations.",
    difficulty: "easy"
  },
  {
    id: "l2-q24",
    lecture: "Lecture 2",
    topic: "Robust Scaling Example",
    question: "For X = [100, 150, 200, 250, 50000], what is the median according to the lecture example?",
    options: [
      "100",
      "150",
      "200",
      "250"
    ],
    correctAnswer: "200",
    explanation: "The sorted values have 200 as the middle observation, so the median is 200.",
    difficulty: "medium"
  },
  {
    id: "l2-q25",
    lecture: "Lecture 2",
    topic: "One-Hot Encoding",
    question: "What does one-hot encoding do for a categorical feature with N categories?",
    options: [
      "Creates N indicator columns",
      "Always creates one column",
      "Creates log2(N) columns",
      "Removes all categories"
    ],
    correctAnswer: "Creates N indicator columns",
    explanation: "One-hot encoding creates a binary column for each category.",
    difficulty: "easy"
  },
  {
    id: "l2-q26",
    lecture: "Lecture 2",
    topic: "Binary Encoding",
    question: "What is the main space advantage of binary encoding over one-hot encoding for many categories?",
    options: [
      "It uses about log2(N) columns",
      "It always uses N columns",
      "It uses no columns",
      "It uses N² columns"
    ],
    correctAnswer: "It uses about log2(N) columns",
    explanation: "Binary encoding represents category indices using binary digits, requiring far fewer columns for high-cardinality features.",
    difficulty: "medium"
  },
  {
    id: "l2-q27",
    lecture: "Lecture 2",
    topic: "Curse of Dimensionality",
    question: "What can happen when one-hot encoding creates thousands of sparse columns?",
    options: [
      "Dimensionality can become unnecessarily large",
      "All models become more interpretable",
      "Training becomes guaranteed to be faster",
      "Correlation becomes impossible"
    ],
    correctAnswer: "Dimensionality can become unnecessarily large",
    explanation: "High-cardinality one-hot encoding can inflate the feature space and increase computational cost.",
    difficulty: "easy"
  },

  {
    id: "l3-q1",
    lecture: "Lecture 3",
    topic: "Simple Linear Regression Prediction",
    question: "What is the prediction equation for simple linear regression?",
    options: [
      "ŷ = mx + c",
      "ŷ = x² + c",
      "ŷ = m/x + c",
      "ŷ = x + mc"
    ],
    correctAnswer: "ŷ = mx + c",
    explanation: "Simple linear regression models the prediction as a straight line with slope m and intercept c.",
    difficulty: "easy"
  },
  {
    id: "l3-q2",
    lecture: "Lecture 3",
    topic: "Supervised Regression Setup",
    question: "Why is the stipend prediction problem in the lecture supervised learning?",
    options: [
      "It uses labeled input-output examples",
      "It has no target variable",
      "It uses only rewards",
      "It clusters students"
    ],
    correctAnswer: "It uses labeled input-output examples",
    explanation: "Each training example contains an input CGPA and a known stipend target.",
    difficulty: "easy"
  },
  {
    id: "l3-q3",
    lecture: "Lecture 3",
    topic: "Multiple Input Extension",
    question: "With two inputs x1 and x2, what form does the linear model take?",
    options: [
      "ŷ = m1x1 + m2x2 + c",
      "ŷ = x1x2 + c only",
      "ŷ = m1 + m2 + c",
      "ŷ = m(x1 + x2)²"
    ],
    correctAnswer: "ŷ = m1x1 + m2x2 + c",
    explanation: "With multiple inputs, linear regression becomes a plane or hyperplane in higher dimensions.",
    difficulty: "easy"
  },
  {
    id: "l3-q4",
    lecture: "Lecture 3",
    topic: "Residuals",
    question: "What is the residual for a point (xi, yi)?",
    options: [
      "ei = yi - ŷi",
      "ei = yi + ŷi",
      "ei = yi/ŷi",
      "ei = xi - yi"
    ],
    correctAnswer: "ei = yi - ŷi",
    explanation: "Residual is the difference between the actual value and the model prediction.",
    difficulty: "easy"
  },
  {
    id: "l3-q5",
    lecture: "Lecture 3",
    topic: "Residual Geometry",
    question: "Why are residuals shown as vertical gaps in simple linear regression?",
    options: [
      "x is treated as fixed while y is predicted",
      "y is fixed while x changes",
      "The model predicts distance only",
      "Vertical distance is unrelated to regression"
    ],
    correctAnswer: "x is treated as fixed while y is predicted",
    explanation: "The regression line predicts y for a given x, so the error is measured vertically.",
    difficulty: "medium"
  },
  {
    id: "l3-q6",
    lecture: "Lecture 3",
    topic: "Signed Error",
    question: "Why is total signed error a poor loss function?",
    options: [
      "Positive and negative errors can cancel",
      "It is always too large",
      "It cannot be negative",
      "It ignores every prediction"
    ],
    correctAnswer: "Positive and negative errors can cancel",
    explanation: "A large positive error and a large negative error can sum to zero even when the model is poor.",
    difficulty: "easy"
  },
  {
    id: "l3-q7",
    lecture: "Lecture 3",
    topic: "Absolute Error",
    question: "What is a major advantage of absolute error over signed error?",
    options: [
      "It prevents cancellation of errors",
      "It is infinitely differentiable",
      "It rewards outliers strongly",
      "It always produces zero"
    ],
    correctAnswer: "It prevents cancellation of errors",
    explanation: "Absolute values make all errors non-negative and avoid positive/negative cancellation.",
    difficulty: "easy"
  },
  {
    id: "l3-q8",
    lecture: "Lecture 3",
    topic: "Absolute Error",
    question: "What is a drawback of absolute error emphasized in the lecture?",
    options: [
      "It is not smoothly differentiable at zero",
      "It cannot detect any error",
      "It always squares errors",
      "It is impossible to interpret"
    ],
    correctAnswer: "It is not smoothly differentiable at zero",
    explanation: "Absolute error has a sharp V-shape and is not differentiable at e = 0.",
    difficulty: "medium"
  },
  {
    id: "l3-q9",
    lecture: "Lecture 3",
    topic: "Squared Error",
    question: "Why does squared error strongly penalize large mistakes?",
    options: [
      "The error is squared",
      "The error is divided by two",
      "Errors cancel automatically",
      "Large errors become zero"
    ],
    correctAnswer: "The error is squared",
    explanation: "Squaring makes the contribution grow quadratically with error magnitude.",
    difficulty: "easy"
  },
  {
    id: "l3-q10",
    lecture: "Lecture 3",
    topic: "Squared Error and OLS",
    question: "What is the OLS objective for simple linear regression?",
    options: [
      "Σ(yi - mxi - c)²",
      "Σ(yi - mxi - c)",
      "Σ|yi + mxi + c|",
      "Σ(xi - yi)"
    ],
    correctAnswer: "Σ(yi - mxi - c)²",
    explanation: "Ordinary Least Squares minimizes the total squared residual error.",
    difficulty: "easy"
  },
  {
    id: "l3-q11",
    lecture: "Lecture 3",
    topic: "Closed-Form vs Iterative Solutions",
    question: "What characterizes a closed-form solution?",
    options: [
      "It directly computes the optimal parameters mathematically",
      "It always needs random initialization",
      "It must use many epochs",
      "It can never use algebra"
    ],
    correctAnswer: "It directly computes the optimal parameters mathematically",
    explanation: "OLS in simple linear regression can be solved exactly using formulas.",
    difficulty: "easy"
  },
  {
    id: "l3-q12",
    lecture: "Lecture 3",
    topic: "Iterative Optimization",
    question: "What is a key characteristic of an iterative optimization method?",
    options: [
      "It starts from an initial guess and updates repeatedly",
      "It never evaluates the objective",
      "It directly returns the exact formula",
      "It requires no parameters"
    ],
    correctAnswer: "It starts from an initial guess and updates repeatedly",
    explanation: "Iterative methods such as gradient descent update parameters step by step.",
    difficulty: "easy"
  },
  {
    id: "l3-q13",
    lecture: "Lecture 3",
    topic: "Convex Error Surface",
    question: "What shape does the squared-error surface have for simple linear regression in the lecture?",
    options: [
      "A convex bowl",
      "A flat plane everywhere",
      "A sinusoidal wave",
      "A discontinuous staircase"
    ],
    correctAnswer: "A convex bowl",
    explanation: "The squared-error objective forms a convex surface with a global minimum.",
    difficulty: "easy"
  },
  {
    id: "l3-q14",
    lecture: "Lecture 3",
    topic: "OLS Intercept Derivation",
    question: "What is the OLS intercept formula derived in the lecture?",
    options: [
      "c = ȳ - m x̄",
      "c = mȳ - x̄",
      "c = x̄ - mȳ",
      "c = ȳ + m x̄"
    ],
    correctAnswer: "c = ȳ - m x̄",
    explanation: "Differentiating with respect to c and setting the derivative to zero yields c = ȳ - m x̄.",
    difficulty: "easy"
  },
  {
    id: "l3-q15",
    lecture: "Lecture 3",
    topic: "OLS Slope Derivation",
    question: "Which expression gives the OLS slope m?",
    options: [
      "Σ(xi - x̄)(yi - ȳ) / Σ(xi - x̄)²",
      "Σ(xi + x̄)(yi + ȳ)",
      "Σ(xi - yi) / n",
      "Σyi / Σxi"
    ],
    correctAnswer: "Σ(xi - x̄)(yi - ȳ) / Σ(xi - x̄)²",
    explanation: "The slope is the covariance-like numerator divided by the variance-like denominator of x.",
    difficulty: "medium"
  },
  {
    id: "l3-q16",
    lecture: "Lecture 3",
    topic: "OLS Mean-Line Property",
    question: "Which point always lies on the OLS best-fit line?",
    options: [
      "(x̄, ȳ)",
      "(0, 0)",
      "(median x, mean y)",
      "(mean x, 0)"
    ],
    correctAnswer: "(x̄, ȳ)",
    explanation: "The OLS line always passes through the sample mean point.",
    difficulty: "easy"
  },
  {
    id: "l3-q17",
    lecture: "Lecture 3",
    topic: "OLS Procedure",
    question: "Which step occurs first in the complete OLS procedure shown?",
    options: [
      "Compute x̄ and ȳ",
      "Compute the final prediction",
      "Differentiate with respect to m only",
      "Deploy the model"
    ],
    correctAnswer: "Compute x̄ and ȳ",
    explanation: "The procedure begins by computing the means of x and y.",
    difficulty: "easy"
  },
  {
    id: "l3-q18",
    lecture: "Lecture 3",
    topic: "Outlier Sensitivity",
    question: "Why is OLS sensitive to extreme outliers?",
    options: [
      "Squared errors increase quadratically",
      "Absolute error ignores them",
      "OLS removes outliers automatically",
      "Residuals are never used"
    ],
    correctAnswer: "Squared errors increase quadratically",
    explanation: "Large residuals receive disproportionately large penalties under squared loss, pulling the fitted line.",
    difficulty: "medium"
  },

  {
    id: "l4-q1",
    lecture: "Lecture 4",
    topic: "Multiple Linear Regression Equation",
    question: "What is the general multiple linear regression equation?",
    options: [
      "ŷ = β0 + β1x1 + β2x2 + ... + βmxm",
      "ŷ = β0x1x2 only",
      "ŷ = x1 + x2² only",
      "ŷ = β0 / x1"
    ],
    correctAnswer: "ŷ = β0 + β1x1 + β2x2 + ... + βmxm",
    explanation: "MLR adds one linear coefficient term for each input feature.",
    difficulty: "easy"
  },
  {
    id: "l4-q2",
    lecture: "Lecture 4",
    topic: "Hyperplane Interpretation",
    question: "An MLR model with m features represents what geometric object?",
    options: [
      "A hyperplane in m-dimensional feature space",
      "Always a circle",
      "Always a one-dimensional line",
      "A histogram"
    ],
    correctAnswer: "A hyperplane in m-dimensional feature space",
    explanation: "The MLR equation defines a hyperplane in the feature space.",
    difficulty: "easy"
  },
  {
    id: "l4-q3",
    lecture: "Lecture 4",
    topic: "Prediction for Every Data Point",
    question: "In MLR, what changes from one row of the dataset to another?",
    options: [
      "The feature values xij",
      "The learned parameters β",
      "The model equation itself",
      "The intercept definition"
    ],
    correctAnswer: "The feature values xij",
    explanation: "The same parameter vector is used for every row; only the observed feature values differ.",
    difficulty: "easy"
  },
  {
    id: "l4-q4",
    lecture: "Lecture 4",
    topic: "Design Matrix",
    question: "Why does the design matrix contain a first column of ones?",
    options: [
      "To represent the intercept β0",
      "To remove the target variable",
      "To create dummy labels",
      "To normalize all features"
    ],
    correctAnswer: "To represent the intercept β0",
    explanation: "The column of ones allows the intercept term to be included in matrix multiplication.",
    difficulty: "easy"
  },
  {
    id: "l4-q5",
    lecture: "Lecture 4",
    topic: "Matrix Form",
    question: "What is the compact matrix form of MLR prediction?",
    options: [
      "ŷ = Xβ",
      "ŷ = βX²",
      "ŷ = X + β",
      "ŷ = X/β"
    ],
    correctAnswer: "ŷ = Xβ",
    explanation: "All n prediction equations are compressed into the matrix equation ŷ = Xβ.",
    difficulty: "easy"
  },
  {
    id: "l4-q6",
    lecture: "Lecture 4",
    topic: "Dimensions",
    question: "If there are n observations and m features, what is the dimension of X including the intercept column?",
    options: [
      "n × (m + 1)",
      "m × n",
      "n × m only",
      "(m + 1) × (m + 1)"
    ],
    correctAnswer: "n × (m + 1)",
    explanation: "There are n rows and m feature columns plus one intercept column.",
    difficulty: "easy"
  },
  {
    id: "l4-q7",
    lecture: "Lecture 4",
    topic: "Residual Vector",
    question: "How is the residual vector written in matrix form?",
    options: [
      "e = y - Xβ",
      "e = X - yβ",
      "e = y + Xβ",
      "e = β - yX"
    ],
    correctAnswer: "e = y - Xβ",
    explanation: "Residuals are actual outputs minus predicted outputs.",
    difficulty: "easy"
  },
  {
    id: "l4-q8",
    lecture: "Lecture 4",
    topic: "Squared Error Loss",
    question: "What is the matrix form of total squared error?",
    options: [
      "L(β) = (y - Xβ)^T(y - Xβ)",
      "L(β) = y + Xβ",
      "L(β) = (y + Xβ)^2",
      "L(β) = X^T y"
    ],
    correctAnswer: "L(β) = (y - Xβ)^T(y - Xβ)",
    explanation: "The dot product of the residual vector with itself produces the sum of squared residuals.",
    difficulty: "easy"
  },
  {
    id: "l4-q9",
    lecture: "Lecture 4",
    topic: "Loss Expansion",
    question: "Which is the correct expanded form of the MLR squared-error loss?",
    options: [
      "y^T y - 2y^T Xβ + β^T X^T Xβ",
      "y^T y + 2y^T Xβ + β^Tβ",
      "X^T X - y^T y",
      "β^T y + X^T X"
    ],
    correctAnswer: "y^T y - 2y^T Xβ + β^T X^T Xβ",
    explanation: "Expanding (y - Xβ)^T(y - Xβ) produces the constant, linear, and quadratic terms shown.",
    difficulty: "medium"
  },
  {
    id: "l4-q10",
    lecture: "Lecture 4",
    topic: "Matrix Calculus Identities",
    question: "What is the derivative of a scalar constant c with respect to β?",
    options: [
      "0",
      "1",
      "β",
      "cβ"
    ],
    correctAnswer: "0",
    explanation: "A constant does not depend on β, so its derivative is zero.",
    difficulty: "easy"
  },
  {
    id: "l4-q11",
    lecture: "Lecture 4",
    topic: "Matrix Calculus Identities",
    question: "What is the derivative of a^Tβ with respect to β?",
    options: [
      "a",
      "a^T",
      "β",
      "0"
    ],
    correctAnswer: "a",
    explanation: "For a constant vector a, ∂(a^Tβ)/∂β = a.",
    difficulty: "medium"
  },
  {
    id: "l4-q12",
    lecture: "Lecture 4",
    topic: "Matrix Calculus Identities",
    question: "For symmetric A, what is the derivative of β^T A β?",
    options: [
      "2Aβ",
      "Aβ",
      "β^TA",
      "2β"
    ],
    correctAnswer: "2Aβ",
    explanation: "The identity used in the lecture is ∂(β^TAβ)/∂β = 2Aβ when A is symmetric.",
    difficulty: "medium"
  },
  {
    id: "l4-q13",
    lecture: "Lecture 4",
    topic: "Normal Equation",
    question: "What equation results when the MLR gradient is set to zero?",
    options: [
      "X^T Xβ = X^T y",
      "Xβ = yX",
      "X^Tβ = y",
      "β = X + y"
    ],
    correctAnswer: "X^T Xβ = X^T y",
    explanation: "Setting the gradient equal to zero gives the normal equation.",
    difficulty: "easy"
  },
  {
    id: "l4-q14",
    lecture: "Lecture 4",
    topic: "Closed-Form OLS Solution",
    question: "What is the closed-form OLS solution for β?",
    options: [
      "β* = (X^T X)^−1X^T y",
      "β* = X^T y",
      "β* = (XX^T)^−1y",
      "β* = Xy"
    ],
    correctAnswer: "β* = (X^T X)^−1X^T y",
    explanation: "Multiplying the normal equation by (X^T X)^−1 yields the closed-form solution.",
    difficulty: "easy"
  },
  {
    id: "l4-q15",
    lecture: "Lecture 4",
    topic: "Multicollinearity",
    question: "What happens when columns of X are linearly dependent?",
    options: [
      "X^T X becomes singular and the inverse does not exist",
      "OLS becomes more accurate automatically",
      "The number of rows increases",
      "The intercept disappears"
    ],
    correctAnswer: "X^T X becomes singular and the inverse does not exist",
    explanation: "Exact linear dependence among features prevents inversion of X^T X.",
    difficulty: "medium"
  },
  {
    id: "l4-q16",
    lecture: "Lecture 4",
    topic: "Computational Cost",
    question: "What computational limitation of the closed-form MLR solution is emphasized?",
    options: [
      "Matrix inversion can have cubic cost O(m^3)",
      "The solution always costs O(1)",
      "Only one feature can be inverted",
      "Matrix multiplication is impossible"
    ],
    correctAnswer: "Matrix inversion can have cubic cost O(m^3)",
    explanation: "As the number of features grows, matrix inversion becomes computationally expensive.",
    difficulty: "medium"
  },
  {
    id: "l4-q17",
    lecture: "Lecture 4",
    topic: "SLR vs MLR",
    question: "Which comparison is correct?",
    options: [
      "SLR uses one feature and a line; MLR uses multiple features and a hyperplane",
      "Both always use identical geometry",
      "MLR cannot use OLS",
      "SLR always requires matrix inversion of size m × m"
    ],
    correctAnswer: "SLR uses one feature and a line; MLR uses multiple features and a hyperplane",
    explanation: "The lecture contrasts the line geometry of SLR with the hyperplane geometry of MLR.",
    difficulty: "easy"
  },

  {
    id: "l5-q1",
    lecture: "Lecture 5",
    topic: "Why OLS Is Not Enough",
    question: "What is one major reason closed-form OLS becomes unsuitable for very large feature counts?",
    options: [
      "Matrix inversion becomes computationally expensive",
      "OLS cannot use numerical data",
      "OLS has no objective function",
      "OLS only predicts categories"
    ],
    correctAnswer: "Matrix inversion becomes computationally expensive",
    explanation: "The lecture highlights the computational cost of directly inverting X^T X.",
    difficulty: "easy"
  },
  {
    id: "l5-q2",
    lecture: "Lecture 5",
    topic: "Invertibility and Numerical Stability",
    question: "Under what condition does the OLS inverse fail to exist?",
    options: [
      "When X^T X is singular",
      "When the dataset has labels",
      "When n is greater than 1",
      "When the loss is convex"
    ],
    correctAnswer: "When X^T X is singular",
    explanation: "Linear dependence between columns can make X^T X singular.",
    difficulty: "easy"
  },
  {
    id: "l5-q3",
    lecture: "Lecture 5",
    topic: "Linear Dependence",
    question: "Which example causes exact linear dependence?",
    options: [
      "x2 = 2x1",
      "x2 = x1 + random noise",
      "x2 = 1/x1 for all x1",
      "x2 = sin(x1)"
    ],
    correctAnswer: "x2 = 2x1",
    explanation: "If one feature is an exact scalar multiple of another, the columns are linearly dependent.",
    difficulty: "easy"
  },
  {
    id: "l5-q4",
    lecture: "Lecture 5",
    topic: "Gradient Descent Objective",
    question: "What is the goal of gradient descent?",
    options: [
      "Reach the minimum of the loss function",
      "Maximize every parameter",
      "Increase training error",
      "Remove all features"
    ],
    correctAnswer: "Reach the minimum of the loss function",
    explanation: "Gradient descent iteratively moves parameters toward lower loss.",
    difficulty: "easy"
  },
  {
    id: "l5-q5",
    lecture: "Lecture 5",
    topic: "Gradient Direction",
    question: "In one dimension, which direction decreases a differentiable function most directly?",
    options: [
      "Opposite the derivative",
      "Same as the derivative",
      "Perpendicular to the derivative",
      "Randomly"
    ],
    correctAnswer: "Opposite the derivative",
    explanation: "The negative derivative indicates the direction of steepest local decrease.",
    difficulty: "easy"
  },
  {
    id: "l5-q6",
    lecture: "Lecture 5",
    topic: "Gradient in Multiple Dimensions",
    question: "What does the gradient vector contain?",
    options: [
      "All partial derivatives",
      "Only the loss value",
      "Only the largest feature",
      "Only the intercept"
    ],
    correctAnswer: "All partial derivatives",
    explanation: "The gradient ∇f collects the partial derivative with respect to every parameter.",
    difficulty: "easy"
  },
  {
    id: "l5-q7",
    lecture: "Lecture 5",
    topic: "Gradient Descent Update Rule",
    question: "Which update rule is shown in the lecture?",
    options: [
      "θ_new = θ_old - α∇L(θ_old)",
      "θ_new = θ_old + α∇L(θ_old)",
      "θ_new = α/θ_old",
      "θ_new = θ_old − L(θ)"
    ],
    correctAnswer: "θ_new = θ_old - α∇L(θ_old)",
    explanation: "Gradient descent moves opposite the gradient using learning rate α.",
    difficulty: "easy"
  },
  {
    id: "l5-q8",
    lecture: "Lecture 5",
    topic: "Learning Rate",
    question: "What role does α play in gradient descent?",
    options: [
      "It controls the step size",
      "It stores the target vector",
      "It counts the features",
      "It is the intercept"
    ],
    correctAnswer: "It controls the step size",
    explanation: "The learning rate determines how large each parameter update is.",
    difficulty: "easy"
  },
  {
    id: "l5-q9",
    lecture: "Lecture 5",
    topic: "Simultaneous Parameter Updates",
    question: "What warning is given about computing multiple partial derivatives?",
    options: [
      "All derivatives should use the old parameter values and be applied simultaneously",
      "Each derivative must use the newest updated parameter",
      "Only one parameter can be updated",
      "Parameters must never change"
    ],
    correctAnswer: "All derivatives should use the old parameter values and be applied simultaneously",
    explanation: "The lecture emphasizes a simultaneous update based on the current θ.",
    difficulty: "medium"
  },
  {
    id: "l5-q10",
    lecture: "Lecture 5",
    topic: "Batch Gradient Descent MSE",
    question: "What is the MSE objective used for batch gradient descent?",
    options: [
      "L(θ) = (1/m)(Xθ − y)^T(Xθ − y)",
      "L(θ) = Xθ + y",
      "L(θ) = ||θ||² only",
      "L(θ) = X^T y"
    ],
    correctAnswer: "L(θ) = (1/m)(Xθ − y)^T(Xθ − y)",
    explanation: "The lecture defines MSE as the average squared residual in matrix form.",
    difficulty: "easy"
  },
  {
    id: "l5-q11",
    lecture: "Lecture 5",
    topic: "Batch Gradient Derivation",
    question: "What gradient is derived for the MSE objective?",
    options: [
      "∇L = (2/m)X^T(Xθ − y)",
      "∇L = Xθ + y",
      "∇L = 2θ",
      "∇L = (1/m)Xθ"
    ],
    correctAnswer: "∇L = (2/m)X^T(Xθ − y)",
    explanation: "Differentiating the MSE objective produces the stated matrix gradient.",
    difficulty: "medium"
  },
  {
    id: "l5-q12",
    lecture: "Lecture 5",
    topic: "Batch Gradient Descent Update",
    question: "Which is the batch gradient-descent update for the MSE objective?",
    options: [
      "θ := θ − α(2/m)X^T(Xθ − y)",
      "θ := θ + α(2/m)X^T(Xθ − y)",
      "θ := Xθ − y",
      "θ := θ/m"
    ],
    correctAnswer: "θ := θ − α(2/m)X^T(Xθ − y)",
    explanation: "The update subtracts the learning-rate-scaled full-dataset gradient.",
    difficulty: "medium"
  },

  {
    id: "l6-q1",
    lecture: "Lecture 6",
    topic: "Batch Gradient Descent Recap",
    question: "How many training examples contribute to one Batch GD update?",
    options: [
      "All m examples",
      "One example",
      "Exactly two examples",
      "A random subset of one feature"
    ],
    correctAnswer: "All m examples",
    explanation: "Batch GD computes the gradient using the full training set before each update.",
    difficulty: "easy"
  },
  {
    id: "l6-q2",
    lecture: "Lecture 6",
    topic: "Batch Gradient Descent Characteristics",
    question: "What is a characteristic path of Batch Gradient Descent?",
    options: [
      "Smooth and relatively stable",
      "Extremely random by definition",
      "Always divergent",
      "Independent of the loss"
    ],
    correctAnswer: "Smooth and relatively stable",
    explanation: "Averaging over all samples creates a stable gradient direction.",
    difficulty: "easy"
  },
  {
    id: "l6-q3",
    lecture: "Lecture 6",
    topic: "Stochastic Gradient Descent",
    question: "How does SGD differ from Batch GD?",
    options: [
      "SGD uses one randomly chosen example per update",
      "SGD always uses the whole dataset twice",
      "SGD never updates parameters during an epoch",
      "SGD uses no gradient"
    ],
    correctAnswer: "SGD uses one randomly chosen example per update",
    explanation: "SGD computes an update after each individual training example.",
    difficulty: "easy"
  },
  {
    id: "l6-q4",
    lecture: "Lecture 6",
    topic: "SGD Update Count",
    question: "For a dataset with m examples, approximately how many SGD updates occur in one epoch?",
    options: [
      "1",
      "m",
      "m²",
      "m/2 always"
    ],
    correctAnswer: "m",
    explanation: "Each training example contributes one parameter update in an epoch.",
    difficulty: "easy"
  },
  {
    id: "l6-q5",
    lecture: "Lecture 6",
    topic: "SGD Gradient Variance",
    question: "Why is the SGD path noisy?",
    options: [
      "Each gradient uses only one example, producing high variance",
      "The loss is always discontinuous",
      "The data are never shuffled",
      "The learning rate is always zero"
    ],
    correctAnswer: "Each gradient uses only one example, producing high variance",
    explanation: "A single-example estimate of the full gradient is noisy.",
    difficulty: "medium"
  },
  {
    id: "l6-q6",
    lecture: "Lecture 6",
    topic: "SGD Use Cases",
    question: "Which setting is especially suited to SGD?",
    options: [
      "Large datasets and online learning",
      "Only tiny datasets",
      "Only closed-form problems",
      "Only static formulas"
    ],
    correctAnswer: "Large datasets and online learning",
    explanation: "SGD is computationally cheap per update and suitable for large or streaming datasets.",
    difficulty: "easy"
  },
  {
    id: "l6-q7",
    lecture: "Lecture 6",
    topic: "Mini-Batch Gradient Descent",
    question: "What is a mini-batch?",
    options: [
      "A small subset of training examples used for one update",
      "The entire dataset",
      "Exactly one feature",
      "A validation-only set"
    ],
    correctAnswer: "A small subset of training examples used for one update",
    explanation: "Mini-batch GD divides the dataset into small groups of size b.",
    difficulty: "easy"
  },
  {
    id: "l6-q8",
    lecture: "Lecture 6",
    topic: "Mini-Batch Gradient Descent",
    question: "What is the main motivation for mini-batch GD?",
    options: [
      "Balance the stability of BGD with the speed of SGD",
      "Remove the need for gradients",
      "Guarantee exact closed-form solutions",
      "Avoid all computation"
    ],
    correctAnswer: "Balance the stability of BGD with the speed of SGD",
    explanation: "Mini-batch GD is presented as a practical compromise between Batch GD and SGD.",
    difficulty: "easy"
  },
  {
    id: "l6-q9",
    lecture: "Lecture 6",
    topic: "Mini-Batch Gradient Formula",
    question: "How is the mini-batch gradient defined?",
    options: [
      "gk = (1/|Bk|) Σi∈Bk ∇Ji(θt)",
      "gk = Σi θi",
      "gk = X^T X",
      "gk = θt + α"
    ],
    correctAnswer: "gk = (1/|Bk|) Σi∈Bk ∇Ji(θt)",
    explanation: "The mini-batch gradient is the average gradient across the examples in the batch.",
    difficulty: "medium"
  },
  {
    id: "l6-q10",
    lecture: "Lecture 6",
    topic: "Mini-Batch Algorithm",
    question: "What is recommended at the start of each epoch in the mini-batch algorithm?",
    options: [
      "Shuffle the dataset",
      "Delete the target column",
      "Invert X^T X",
      "Set all labels to zero"
    ],
    correctAnswer: "Shuffle the dataset",
    explanation: "The lecture algorithm starts each epoch by shuffling to reduce ordering effects.",
    difficulty: "easy"
  },
  {
    id: "l6-q11",
    lecture: "Lecture 6",
    topic: "Mini-Batch Algorithm",
    question: "After dividing the dataset into mini-batches, what happens for each mini-batch?",
    options: [
      "Compute its average gradient and update parameters immediately",
      "Only store it without learning",
      "Always solve OLS exactly",
      "Discard it"
    ],
    correctAnswer: "Compute its average gradient and update parameters immediately",
    explanation: "Each mini-batch generates one gradient estimate and one parameter update.",
    difficulty: "easy"
  },
  {
    id: "l6-q12",
    lecture: "Lecture 6",
    topic: "Gradient Descent Comparison",
    question: "If the mini-batch size is b and the dataset has m examples, how many updates occur per epoch?",
    options: [
      "m/b approximately",
      "b/m always",
      "1 only",
      "m+b"
    ],
    correctAnswer: "m/b approximately",
    explanation: "Each batch contains b examples, so there are approximately m/b updates per epoch.",
    difficulty: "easy"
  },
  {
    id: "l6-q13",
    lecture: "Lecture 6",
    topic: "Gradient Descent Comparison",
    question: "Which method uses the most memory because it needs the full dataset for each update?",
    options: [
      "Batch Gradient Descent",
      "SGD",
      "Mini-Batch GD",
      "None"
    ],
    correctAnswer: "Batch Gradient Descent",
    explanation: "Batch GD requires the full dataset for every gradient computation.",
    difficulty: "easy"
  },
  {
    id: "l6-q14",
    lecture: "Lecture 6",
    topic: "Gradient Descent Paths",
    question: "Which method generally has the noisiest path toward the minimum?",
    options: [
      "SGD",
      "Batch GD",
      "Mini-Batch GD",
      "Closed-form OLS"
    ],
    correctAnswer: "SGD",
    explanation: "Single-example gradients have the highest variance, giving SGD the noisiest path.",
    difficulty: "easy"
  },

  {
    id: "l7-q1",
    lecture: "Lecture 7",
    topic: "Training Loss vs Evaluation Metric",
    question: "When is training loss primarily used?",
    options: [
      "During model training to guide parameter updates",
      "Only after deployment",
      "Only for database design",
      "Only for collecting labels"
    ],
    correctAnswer: "During model training to guide parameter updates",
    explanation: "Training loss is optimized during learning, while evaluation metrics judge a fixed model afterward.",
    difficulty: "easy"
  },
  {
    id: "l7-q2",
    lecture: "Lecture 7",
    topic: "Residual Definition",
    question: "What is the regression residual?",
    options: [
      "ei = yi - ŷi",
      "ei = yi + ŷi",
      "ei = yi × ŷi",
      "ei = xi - yi"
    ],
    correctAnswer: "ei = yi - ŷi",
    explanation: "Residuals measure the difference between actual and predicted target values.",
    difficulty: "easy"
  },
  {
    id: "l7-q3",
    lecture: "Lecture 7",
    topic: "Mean Absolute Error",
    question: "What does MAE measure?",
    options: [
      "Average absolute prediction error",
      "Average squared prediction error",
      "Only positive errors",
      "The explained variance only"
    ],
    correctAnswer: "Average absolute prediction error",
    explanation: "MAE averages the absolute values of residuals.",
    difficulty: "easy"
  },
  {
    id: "l7-q4",
    lecture: "Lecture 7",
    topic: "Mean Squared Error",
    question: "Why does MSE penalize large errors more strongly than MAE?",
    options: [
      "Errors are squared",
      "Errors are divided by the sample size twice",
      "Errors are converted into labels",
      "MSE ignores error magnitude"
    ],
    correctAnswer: "Errors are squared",
    explanation: "Squaring causes large residuals to contribute disproportionately.",
    difficulty: "easy"
  },
  {
    id: "l7-q5",
    lecture: "Lecture 7",
    topic: "RMSE",
    question: "Why can RMSE be easier to interpret than MSE?",
    options: [
      "It returns to the original target-variable unit",
      "It ignores large errors",
      "It is always smaller than MAE",
      "It does not depend on residuals"
    ],
    correctAnswer: "It returns to the original target-variable unit",
    explanation: "Taking the square root of MSE restores the target's unit.",
    difficulty: "easy"
  },
  {
    id: "l7-q6",
    lecture: "Lecture 7",
    topic: "MAPE",
    question: "What is a key limitation of MAPE?",
    options: [
      "It is undefined when y = 0",
      "It cannot be expressed as a percentage",
      "It always equals MSE",
      "It ignores scale entirely"
    ],
    correctAnswer: "It is undefined when y = 0",
    explanation: "MAPE divides by the actual value, causing problems at y = 0.",
    difficulty: "easy"
  },
  {
    id: "l7-q7",
    lecture: "Lecture 7",
    topic: "Metric Selection",
    question: "Which statement about MAE and MSE is correct?",
    options: [
      "MAE treats errors equally by magnitude, while MSE penalizes large errors more",
      "MSE treats every error identically",
      "MAE squares all errors",
      "Both are undefined for positive targets"
    ],
    correctAnswer: "MAE treats errors equally by magnitude, while MSE penalizes large errors more",
    explanation: "The distinction comes from absolute versus squared residual penalties.",
    difficulty: "easy"
  },
  {
    id: "l7-q8",
    lecture: "Lecture 7",
    topic: "R-Squared",
    question: "What does R² compare?",
    options: [
      "Residual variation relative to total original variation",
      "Training size to test size",
      "Precision to recall",
      "Variance to bias only"
    ],
    correctAnswer: "Residual variation relative to total original variation",
    explanation: "R² = 1 − RSS/TSS compares unexplained variation with total variation.",
    difficulty: "medium"
  },
  {
    id: "l7-q9",
    lecture: "Lecture 7",
    topic: "R-Squared",
    question: "What is the practical interpretation of a higher R² in the lecture?",
    options: [
      "A better fit to the observed variation, all else equal",
      "Guaranteed better performance on unseen data",
      "Guaranteed lower MAE",
      "Guaranteed absence of bias"
    ],
    correctAnswer: "A better fit to the observed variation, all else equal",
    explanation: "A higher R² means a larger proportion of observed variance is explained by the model.",
    difficulty: "medium"
  },
  {
    id: "l7-q10",
    lecture: "Lecture 7",
    topic: "Adjusted R-Squared",
    question: "Why is adjusted R² useful when adding predictors?",
    options: [
      "It penalizes unnecessary features",
      "It always increases with every feature",
      "It ignores sample size",
      "It measures classification accuracy"
    ],
    correctAnswer: "It penalizes unnecessary features",
    explanation: "Adjusted R² accounts for the number of predictors and can decrease when a feature does not add enough explanatory power.",
    difficulty: "easy"
  },
  {
    id: "l7-q11",
    lecture: "Lecture 7",
    topic: "Confusion Matrix",
    question: "Which cell represents a false positive?",
    options: [
      "Actual negative, predicted positive",
      "Actual positive, predicted positive",
      "Actual positive, predicted negative",
      "Actual negative, predicted negative"
    ],
    correctAnswer: "Actual negative, predicted positive",
    explanation: "A false positive occurs when the model predicts positive for a truly negative case.",
    difficulty: "easy"
  },
  {
    id: "l7-q12",
    lecture: "Lecture 7",
    topic: "Accuracy",
    question: "What does classification accuracy measure?",
    options: [
      "(TP + TN) / (TP + TN + FP + FN)",
      "TP / (TP + FP)",
      "TP / (TP + FN)",
      "2PR/(P+R)"
    ],
    correctAnswer: "(TP + TN) / (TP + TN + FP + FN)",
    explanation: "Accuracy is the proportion of all predictions that are correct.",
    difficulty: "easy"
  },
  {
    id: "l7-q13",
    lecture: "Lecture 7",
    topic: "Precision",
    question: "What does precision answer?",
    options: [
      "Among predicted positives, how many are actually positive?",
      "Among actual positives, how many were found?",
      "How many total predictions were correct?",
      "How many negatives were predicted?"
    ],
    correctAnswer: "Among predicted positives, how many are actually positive?",
    explanation: "Precision = TP / (TP + FP), so it focuses on the correctness of positive predictions.",
    difficulty: "easy"
  },
  {
    id: "l7-q14",
    lecture: "Lecture 7",
    topic: "Recall",
    question: "What does recall measure?",
    options: [
      "Among actual positives, how many were detected",
      "Among predicted positives, how many were correct",
      "The total number of correct predictions",
      "The number of true negatives"
    ],
    correctAnswer: "Among actual positives, how many were detected",
    explanation: "Recall = TP / (TP + FN).",
    difficulty: "easy"
  },
  {
    id: "l7-q15",
    lecture: "Lecture 7",
    topic: "F1 Score",
    question: "Why is F1 useful when classes are imbalanced?",
    options: [
      "It balances precision and recall using their harmonic mean",
      "It ignores false negatives",
      "It only measures accuracy",
      "It always equals precision"
    ],
    correctAnswer: "It balances precision and recall using their harmonic mean",
    explanation: "F1 = 2PR/(P + R), making it useful when both precision and recall matter.",
    difficulty: "medium"
  },

  {
    id: "l8-q1",
    lecture: "Lecture 8",
    topic: "Bias and Variance",
    question: "In the lecture, what represents the unknown true relationship?",
    options: [
      "f(x)",
      "ŷ only",
      "ε only",
      "The training set size"
    ],
    correctAnswer: "f(x)",
    explanation: "The lecture models y = f(x) + ε, where f(x) is the true hidden relationship.",
    difficulty: "easy"
  },
  {
    id: "l8-q2",
    lecture: "Lecture 8",
    topic: "Random Noise",
    question: "What assumptions are given for the noise ε?",
    options: [
      "E[ε] = 0 and Var(ε) = σ²",
      "E[ε] = 1 and Var(ε) = 0",
      "ε is always positive",
      "ε is always equal to x"
    ],
    correctAnswer: "E[ε] = 0 and Var(ε) = σ²",
    explanation: "The lecture models irreducible random noise with zero mean and variance σ².",
    difficulty: "easy"
  },
  {
    id: "l8-q3",
    lecture: "Lecture 8",
    topic: "Estimator Variability",
    question: "Why is the learned estimator f̂(x) treated as a random function?",
    options: [
      "It changes when the training sample changes",
      "It is generated from a fixed formula independent of data",
      "It always equals the true function",
      "It contains no learned parameters"
    ],
    correctAnswer: "It changes when the training sample changes",
    explanation: "Different training sets lead to different fitted models.",
    difficulty: "easy"
  },
  {
    id: "l8-q4",
    lecture: "Lecture 8",
    topic: "Bias-Variance Tradeoff",
    question: "What typically happens when model complexity increases enough to reduce bias?",
    options: [
      "Variance tends to increase",
      "Variance always becomes zero",
      "Irreducible noise disappears",
      "Training error must increase"
    ],
    correctAnswer: "Variance tends to increase",
    explanation: "The bias-variance tradeoff describes the tension between under-simplification and sensitivity to training data.",
    difficulty: "easy"
  },
  {
    id: "l8-q5",
    lecture: "Lecture 8",
    topic: "MSE Decomposition",
    question: "Which decomposition is shown in the lecture?",
    options: [
      "MSE = Bias² + Variance + Var(ε)",
      "MSE = Bias + Variance² only",
      "MSE = Accuracy + Recall",
      "MSE = RSS/TSS"
    ],
    correctAnswer: "MSE = Bias² + Variance + Var(ε)",
    explanation: "The expected squared error is decomposed into squared bias, variance, and irreducible noise.",
    difficulty: "easy"
  },
  {
    id: "l8-q6",
    lecture: "Lecture 8",
    topic: "Irreducible Error",
    question: "What does Var(ε) represent in the MSE decomposition?",
    options: [
      "Irreducible random noise",
      "Model complexity",
      "Training data size",
      "Feature selection error only"
    ],
    correctAnswer: "Irreducible random noise",
    explanation: "The ε term represents variability that cannot be removed by simply choosing a different model.",
    difficulty: "easy"
  },
  {
    id: "l8-q7",
    lecture: "Lecture 8",
    topic: "High Bias",
    question: "Which pattern indicates high bias or underfitting?",
    options: [
      "Training accuracy is low and validation accuracy is similarly low",
      "Training accuracy is extremely high and validation is much lower",
      "Both are near 100%",
      "Training accuracy is high and validation is higher"
    ],
    correctAnswer: "Training accuracy is low and validation accuracy is similarly low",
    explanation: "A high-bias model is too simple to fit even the training data well.",
    difficulty: "easy"
  },
  {
    id: "l8-q8",
    lecture: "Lecture 8",
    topic: "High Variance",
    question: "Which pattern indicates high variance or overfitting?",
    options: [
      "Very high training accuracy with much lower validation accuracy",
      "Low training and low validation accuracy",
      "Equal zero accuracy everywhere",
      "Validation accuracy always exceeds training accuracy"
    ],
    correctAnswer: "Very high training accuracy with much lower validation accuracy",
    explanation: "A high-variance model fits training data very well but generalizes poorly.",
    difficulty: "easy"
  },
  {
    id: "l8-q9",
    lecture: "Lecture 8",
    topic: "Good Fit",
    question: "What is a typical sign of a balanced model?",
    options: [
      "Reasonably high training and validation performance with a small gap",
      "Near-zero training accuracy",
      "Near-zero validation accuracy only",
      "Huge train-validation gap"
    ],
    correctAnswer: "Reasonably high training and validation performance with a small gap",
    explanation: "A balanced model performs well on both training and validation data without a large gap.",
    difficulty: "easy"
  },
  {
    id: "l8-q10",
    lecture: "Lecture 8",
    topic: "Learning Curves",
    question: "What does a learning curve plot?",
    options: [
      "Training and validation error versus training-data size",
      "Accuracy versus number of classes only",
      "Loss versus feature names only",
      "Bias versus sample labels only"
    ],
    correctAnswer: "Training and validation error versus training-data size",
    explanation: "Learning curves help diagnose bias and variance as more data are added.",
    difficulty: "easy"
  },
  {
    id: "l8-q11",
    lecture: "Lecture 8",
    topic: "Learning Curves for High Bias",
    question: "What pattern is typical for high bias as more data are added?",
    options: [
      "Both training and validation errors remain relatively high and converge",
      "Training error becomes zero and validation stays high",
      "Validation error becomes negative",
      "Training and validation errors diverge infinitely"
    ],
    correctAnswer: "Both training and validation errors remain relatively high and converge",
    explanation: "Adding data cannot fully fix a model that is fundamentally too simple.",
    difficulty: "medium"
  },
  {
    id: "l8-q12",
    lecture: "Lecture 8",
    topic: "Learning Curves for High Variance",
    question: "What pattern is typical for high variance?",
    options: [
      "Training error is very low while validation error is much higher",
      "Both errors stay equally high",
      "Training error is always larger than validation error",
      "Both errors become exactly zero immediately"
    ],
    correctAnswer: "Training error is very low while validation error is much higher",
    explanation: "The large gap between training and validation error is a hallmark of overfitting.",
    difficulty: "easy"
  },

  {
    id: "l9-q1",
    lecture: "Lecture 9",
    topic: "Why Feature Selection",
    question: "What is the main goal of feature selection?",
    options: [
      "Keep a smaller subset of relevant features while preserving or improving generalization",
      "Always keep every feature",
      "Replace all features with random values",
      "Increase dimensionality"
    ],
    correctAnswer: "Keep a smaller subset of relevant features while preserving or improving generalization",
    explanation: "Feature selection removes redundant or irrelevant inputs without discarding useful signal.",
    difficulty: "easy"
  },
  {
    id: "l9-q2",
    lecture: "Lecture 9",
    topic: "Feature Types",
    question: "What characterizes a relevant feature?",
    options: [
      "It carries stable information useful for predicting the target",
      "It duplicates another feature exactly",
      "It has no relationship with the target",
      "It is always the largest-valued feature"
    ],
    correctAnswer: "It carries stable information useful for predicting the target",
    explanation: "Relevant features contain predictive information about the target.",
    difficulty: "easy"
  },
  {
    id: "l9-q3",
    lecture: "Lecture 9",
    topic: "Feature Types",
    question: "What is a redundant feature?",
    options: [
      "A feature that repeats information already carried by another feature",
      "A feature with the strongest target relationship",
      "A feature that is always missing",
      "A feature that cannot be stored"
    ],
    correctAnswer: "A feature that repeats information already carried by another feature",
    explanation: "Redundant features add little or no new information.",
    difficulty: "easy"
  },
  {
    id: "l9-q4",
    lecture: "Lecture 9",
    topic: "Feature Types",
    question: "What characterizes an irrelevant feature?",
    options: [
      "It does not carry a stable useful relationship with the target",
      "It is always duplicated",
      "It is the target itself",
      "It always has zero variance"
    ],
    correctAnswer: "It does not carry a stable useful relationship with the target",
    explanation: "Irrelevant features do not provide reliable predictive information.",
    difficulty: "easy"
  },
  {
    id: "l9-q5",
    lecture: "Lecture 9",
    topic: "Filter Methods",
    question: "Why are filter methods often considered fast and scalable?",
    options: [
      "They use simple structural or statistical rules without repeatedly training the full model",
      "They require exhaustive retraining for every subset",
      "They always use neural networks",
      "They avoid all calculations"
    ],
    correctAnswer: "They use simple structural or statistical rules without repeatedly training the full model",
    explanation: "Filter methods use inexpensive statistical criteria and are generally computationally efficient.",
    difficulty: "easy"
  },
  {
    id: "l9-q6",
    lecture: "Lecture 9",
    topic: "Duplicate Removal",
    question: "What does duplicate removal do?",
    options: [
      "Removes exact copies of a feature column",
      "Removes every correlated feature",
      "Removes the target",
      "Removes missing rows only"
    ],
    correctAnswer: "Removes exact copies of a feature column",
    explanation: "The method checks whether one feature duplicates another exactly.",
    difficulty: "easy"
  },
  {
    id: "l9-q7",
    lecture: "Lecture 9",
    topic: "Variance Threshold",
    question: "What does a variance threshold filter remove?",
    options: [
      "Features whose variance is below a chosen threshold",
      "Features with high target correlation",
      "All categorical features",
      "Only duplicate rows"
    ],
    correctAnswer: "Features whose variance is below a chosen threshold",
    explanation: "The rule shown is Var(fj) < τ, meaning very low-variance features are removed.",
    difficulty: "easy"
  },
  {
    id: "l9-q8",
    lecture: "Lecture 9",
    topic: "Pearson Correlation Filter",
    question: "In the lecture's example, what happens to a feature with |rjy| < 0.30?",
    options: [
      "It is removed",
      "It is always selected",
      "It becomes the target",
      "It is duplicated"
    ],
    correctAnswer: "It is removed",
    explanation: "The example uses |rjy| < 0.30 as a rule for removing weakly correlated features.",
    difficulty: "easy"
  },
  {
    id: "l9-q9",
    lecture: "Lecture 9",
    topic: "Wrapper Methods",
    question: "How do wrapper methods differ from filter methods?",
    options: [
      "They directly evaluate model performance for candidate feature subsets",
      "They never use a model",
      "They only remove duplicate columns",
      "They cannot be computationally expensive"
    ],
    correctAnswer: "They directly evaluate model performance for candidate feature subsets",
    explanation: "Wrapper methods wrap the model training/validation process around feature selection.",
    difficulty: "medium"
  },
  {
    id: "l9-q10",
    lecture: "Lecture 9",
    topic: "Exhaustive Search",
    question: "How many non-empty feature subsets exist for p features?",
    options: [
      "2^p − 1",
      "p²",
      "p − 1",
      "2p"
    ],
    correctAnswer: "2^p − 1",
    explanation: "Every feature can be either included or excluded, except the empty subset.",
    difficulty: "easy"
  },
  {
    id: "l9-q11",
    lecture: "Lecture 9",
    topic: "Backward Elimination",
    question: "What is the starting point of backward elimination?",
    options: [
      "All features",
      "No features",
      "Only one random feature",
      "Only the target"
    ],
    correctAnswer: "All features",
    explanation: "Backward elimination begins with every feature and removes the least useful one iteratively.",
    difficulty: "easy"
  },
  {
    id: "l9-q12",
    lecture: "Lecture 9",
    topic: "Sequential Forward Selection",
    question: "What is the starting point of sequential forward selection?",
    options: [
      "No features",
      "All features",
      "Half the features always",
      "Only duplicated features"
    ],
    correctAnswer: "No features",
    explanation: "Forward selection begins empty and adds the feature that most improves validation performance.",
    difficulty: "easy"
  },
  {
    id: "l9-q13",
    lecture: "Lecture 9",
    topic: "Validation Leakage",
    question: "Why is selecting features using the entire dataset before splitting problematic?",
    options: [
      "It leaks information from validation/test data into the selection process",
      "It always decreases feature count to zero",
      "It makes the model unsupervised",
      "It guarantees unbiased evaluation"
    ],
    correctAnswer: "It leaks information from validation/test data into the selection process",
    explanation: "Using information from held-out data during feature selection causes data leakage.",
    difficulty: "easy"
  },
  {
    id: "l9-q14",
    lecture: "Lecture 9",
    topic: "Cross-Validation Feature Selection",
    question: "What is the correct practice inside cross-validation?",
    options: [
      "Perform feature selection using only the training portion of each fold",
      "Use the full dataset for every fold's selection",
      "Select features only from the test fold",
      "Skip validation entirely"
    ],
    correctAnswer: "Perform feature selection using only the training portion of each fold",
    explanation: "Each fold must keep held-out information isolated from the feature-selection procedure.",
    difficulty: "medium"
  },

  {
    id: "l10-q1",
    lecture: "Lecture 10",
    topic: "Why Dimensionality Reduction",
    question: "Why can many features become harmful according to the lecture?",
    options: [
      "Unnecessary features can add noise, inflate variance, and increase computation",
      "More features always improve generalization",
      "Features cannot be correlated",
      "High-dimensional data always become dense"
    ],
    correctAnswer: "Unnecessary features can add noise, inflate variance, and increase computation",
    explanation: "The lecture describes the computational and statistical costs of high dimensionality.",
    difficulty: "easy"
  },
  {
    id: "l10-q2",
    lecture: "Lecture 10",
    topic: "Curse of Dimensionality",
    question: "What can happen to distance measures in high-dimensional spaces?",
    options: [
      "They can become less meaningful",
      "They become exact automatically",
      "They always become zero",
      "They stop depending on data"
    ],
    correctAnswer: "They can become less meaningful",
    explanation: "The curse of dimensionality makes geometry and distances less informative in high dimensions.",
    difficulty: "easy"
  },
  {
    id: "l10-q3",
    lecture: "Lecture 10",
    topic: "Image Representation Example",
    question: "Why can reducing image dimensions help when large regions are uninformative background?",
    options: [
      "It can preserve useful signal while reducing computational cost",
      "It increases the number of pixels",
      "It removes the target labels",
      "It always decreases accuracy to zero"
    ],
    correctAnswer: "It can preserve useful signal while reducing computational cost",
    explanation: "The example shows that removing redundant background dimensions can maintain useful information with less computation.",
    difficulty: "easy"
  },
  {
    id: "l10-q4",
    lecture: "Lecture 10",
    topic: "Feature Selection vs Feature Extraction",
    question: "How does feature selection differ from feature extraction?",
    options: [
      "Selection keeps original features; extraction constructs new features",
      "Selection constructs principal components; extraction removes columns",
      "Both do exactly the same thing",
      "Extraction cannot reduce dimensionality"
    ],
    correctAnswer: "Selection keeps original features; extraction constructs new features",
    explanation: "PCA is feature extraction because it creates new rotated axes from combinations of the original features.",
    difficulty: "easy"
  },
  {
    id: "l10-q5",
    lecture: "Lecture 10",
    topic: "PCA Definition",
    question: "What is PCA according to the lecture?",
    options: [
      "An unsupervised linear feature-extraction technique finding orthogonal axes of maximum variance",
      "A supervised classification algorithm",
      "A regression loss function",
      "A data-labeling method"
    ],
    correctAnswer: "An unsupervised linear feature-extraction technique finding orthogonal axes of maximum variance",
    explanation: "PCA constructs principal components that capture maximum variance while remaining orthogonal.",
    difficulty: "medium"
  },
  {
    id: "l10-q6",
    lecture: "Lecture 10",
    topic: "PCA Notation",
    question: "In the lecture notation, what does p represent?",
    options: [
      "Number of original features",
      "Number of retained samples",
      "Number of labels",
      "Number of epochs"
    ],
    correctAnswer: "Number of original features",
    explanation: "The matrix X is n × p, where p is the number of original feature columns.",
    difficulty: "easy"
  },
  {
    id: "l10-q7",
    lecture: "Lecture 10",
    topic: "Mean Centering",
    question: "What is the mean-centering transformation?",
    options: [
      "Xc = X − 1μ^T",
      "Xc = X + 1μ^T",
      "Xc = Xμ",
      "Xc = X/μ"
    ],
    correctAnswer: "Xc = X − 1μ^T",
    explanation: "The feature means are subtracted from every observation.",
    difficulty: "easy"
  },
  {
    id: "l10-q8",
    lecture: "Lecture 10",
    topic: "Why Mean Centering",
    question: "Why is mean centering considered compulsory for PCA in the lecture?",
    options: [
      "PCA should measure variance relative to the mean rather than an arbitrary origin",
      "It increases every feature mean",
      "It removes all variance",
      "It converts all values to labels"
    ],
    correctAnswer: "PCA should measure variance relative to the mean rather than an arbitrary origin",
    explanation: "Without centering, the origin offset can dominate the variance calculation.",
    difficulty: "medium"
  },
  {
    id: "l10-q9",
    lecture: "Lecture 10",
    topic: "Standardization",
    question: "When is standardization preferred before PCA?",
    options: [
      "When features have different units or very different variance scales",
      "When all features already have identical meaningful units",
      "Only for binary labels",
      "Never"
    ],
    correctAnswer: "When features have different units or very different variance scales",
    explanation: "Standardization prevents large-scale variables from dominating solely because of measurement units.",
    difficulty: "easy"
  },
  {
    id: "l10-q10",
    lecture: "Lecture 10",
    topic: "Projection",
    question: "How is an observation xi projected onto a unit direction u?",
    options: [
      "zi = u^T xi",
      "zi = xi/u",
      "zi = u + xi",
      "zi = ||xi||²"
    ],
    correctAnswer: "zi = u^T xi",
    explanation: "The dot product with a unit vector gives the scalar projection coordinate.",
    difficulty: "easy"
  },
  {
    id: "l10-q11",
    lecture: "Lecture 10",
    topic: "Variance vs Reconstruction Error",
    question: "What PCA optimization equivalence is highlighted?",
    options: [
      "Maximize projected variance while minimizing reconstruction error",
      "Maximize reconstruction error while minimizing variance",
      "Minimize both variance and signal",
      "Maximize noise"
    ],
    correctAnswer: "Maximize projected variance while minimizing reconstruction error",
    explanation: "By Pythagorean decomposition and fixed total norm, maximizing retained variance is equivalent to minimizing reconstruction error.",
    difficulty: "medium"
  },
  {
    id: "l10-q12",
    lecture: "Lecture 10",
    topic: "Variance Formula",
    question: "How is the variance of projected data z expressed using the covariance matrix S?",
    options: [
      "Var(z) = u^T S u",
      "Var(z) = u + S",
      "Var(z) = S/u",
      "Var(z) = ||u||"
    ],
    correctAnswer: "Var(z) = u^T S u",
    explanation: "For a centered dataset, the projected variance is the quadratic form u^T S u.",
    difficulty: "easy"
  },
  {
    id: "l10-q13",
    lecture: "Lecture 10",
    topic: "Sample Covariance Matrix",
    question: "What is the matrix form of the sample covariance matrix shown?",
    options: [
      "S = (1/(n−1))Xc^T Xc",
      "S = XcXc^T",
      "S = Xc^T + Xc",
      "S = Xc/(n−1)"
    ],
    correctAnswer: "S = (1/(n−1))Xc^T Xc",
    explanation: "The covariance matrix is formed from the centered data using the sample normalization 1/(n−1).",
    difficulty: "easy"
  },
  {
    id: "l10-q14",
    lecture: "Lecture 10",
    topic: "Eigenvalues and Eigenvectors",
    question: "What equation characterizes PCA eigenvectors?",
    options: [
      "Sv = λv",
      "Sv = v + λ",
      "S + v = λ",
      "Sv = 0 for every eigenvector"
    ],
    correctAnswer: "Sv = λv",
    explanation: "Eigenvectors of the covariance matrix satisfy Sv = λv.",
    difficulty: "easy"
  },
  {
    id: "l10-q15",
    lecture: "Lecture 10",
    topic: "Principal Components",
    question: "What does a larger eigenvalue indicate in PCA?",
    options: [
      "A principal direction explaining more variance",
      "A smaller feature scale",
      "A less important component by definition",
      "A classification boundary"
    ],
    correctAnswer: "A principal direction explaining more variance",
    explanation: "Eigenvalues quantify the variance associated with principal directions.",
    difficulty: "easy"
  },
  {
    id: "l10-q16",
    lecture: "Lecture 10",
    topic: "Running Covariance Example",
    question: "In the running 2-feature example, what are the eigenvalues of S?",
    options: [
      "8 and 0",
      "4 and 4",
      "2 and 2",
      "1 and 0"
    ],
    correctAnswer: "8 and 0",
    explanation: "The characteristic equation in the example yields λ1 = 8 and λ2 = 0.",
    difficulty: "medium"
  },

  {
    id: "l11-q1",
    lecture: "Lecture 11",
    topic: "Overfitting Motivation",
    question: "What is a common symptom of overfitting?",
    options: [
      "Training loss becomes very low while test performance is poor",
      "Training and validation performance are both equally poor",
      "The model cannot fit any training examples",
      "All coefficients become exactly zero automatically"
    ],
    correctAnswer: "Training loss becomes very low while test performance is poor",
    explanation: "An overfit model memorizes training noise rather than generalizing.",
    difficulty: "easy"
  },
  {
    id: "l11-q2",
    lecture: "Lecture 11",
    topic: "Coefficient Magnitude",
    question: "Why can unusually large coefficients indicate overfitting?",
    options: [
      "Large weights can make predictions highly sensitive to small input changes",
      "Large weights always reduce variance",
      "Large weights guarantee underfitting",
      "Coefficient size never affects predictions"
    ],
    correctAnswer: "Large weights can make predictions highly sensitive to small input changes",
    explanation: "The lecture links steep slopes and large coefficients to high variance and sensitivity.",
    difficulty: "easy"
  },
  {
    id: "l11-q3",
    lecture: "Lecture 11",
    topic: "Regularization",
    question: "What is regularization?",
    options: [
      "Adding a penalty term to the loss to discourage large weights",
      "Removing the training set",
      "Replacing the target variable",
      "Increasing model complexity without constraint"
    ],
    correctAnswer: "Adding a penalty term to the loss to discourage large weights",
    explanation: "Regularization modifies the objective by adding λP(w).",
    difficulty: "easy"
  },
  {
    id: "l11-q4",
    lecture: "Lecture 11",
    topic: "L1 and L2 Penalties",
    question: "Which penalty corresponds to L2 regularization?",
    options: [
      "Σwj²",
      "Σ|wj|",
      "Σwj",
      "max(wj)"
    ],
    correctAnswer: "Σwj²",
    explanation: "L2, or Ridge, uses the sum of squared coefficients.",
    difficulty: "easy"
  },
  {
    id: "l11-q5",
    lecture: "Lecture 11",
    topic: "L1 and L2 Penalties",
    question: "Which penalty corresponds to L1 regularization?",
    options: [
      "Σ|wj|",
      "Σwj²",
      "Σ1/wj",
      "Σwj^3"
    ],
    correctAnswer: "Σ|wj|",
    explanation: "L1, or Lasso, uses the sum of absolute coefficient values.",
    difficulty: "easy"
  },
  {
    id: "l11-q6",
    lecture: "Lecture 11",
    topic: "Regularization Bias-Variance Tradeoff",
    question: "What tradeoff does regularization typically create?",
    options: [
      "Slightly higher bias in exchange for lower variance",
      "Lower bias and higher variance always",
      "Higher training accuracy and higher variance only",
      "No effect on variance"
    ],
    correctAnswer: "Slightly higher bias in exchange for lower variance",
    explanation: "Regularization constrains model flexibility, often reducing variance at the cost of some bias.",
    difficulty: "easy"
  },
  {
    id: "l11-q7",
    lecture: "Lecture 11",
    topic: "Ridge Regression",
    question: "For simple linear regression, what penalty is added by Ridge?",
    options: [
      "λm²",
      "λ|m|",
      "λc² only",
      "λx²"
    ],
    correctAnswer: "λm²",
    explanation: "The lecture's simple Ridge loss adds λm² to the squared-error objective.",
    difficulty: "easy"
  },
  {
    id: "l11-q8",
    lecture: "Lecture 11",
    topic: "Ridge Slope Derivation",
    question: "What happens to the Ridge denominator compared with OLS?",
    options: [
      "λ is added to the sum of squared centered x values",
      "λ is subtracted from the numerator",
      "λ removes the intercept",
      "λ multiplies only y"
    ],
    correctAnswer: "λ is added to the sum of squared centered x values",
    explanation: "The closed-form Ridge slope includes +λ in the denominator.",
    difficulty: "medium"
  },
  {
    id: "l11-q9",
    lecture: "Lecture 11",
    topic: "Effect of Lambda",
    question: "What happens as λ approaches infinity in Ridge regression?",
    options: [
      "The slope approaches zero",
      "The slope approaches infinity",
      "The intercept must become zero",
      "The training set disappears"
    ],
    correctAnswer: "The slope approaches zero",
    explanation: "Increasing λ shrinks coefficients toward zero, producing a flatter model.",
    difficulty: "easy"
  },
  {
    id: "l11-q10",
    lecture: "Lecture 11",
    topic: "Ridge Matrix Form",
    question: "What is the Ridge loss for multiple features?",
    options: [
      "(y − Xβ)^T(y − Xβ) + λβ^Tβ",
      "(y − Xβ)^T(y − Xβ) + λ|β|",
      "y^T y + β",
      "X^T X − λI"
    ],
    correctAnswer: "(y − Xβ)^T(y − Xβ) + λβ^Tβ",
    explanation: "Ridge adds an L2 penalty λβ^Tβ to the squared-error objective.",
    difficulty: "easy"
  },
  {
    id: "l11-q11",
    lecture: "Lecture 11",
    topic: "Ridge Normal Equation",
    question: "What is the Ridge closed-form solution shown in the lecture?",
    options: [
      "β_Ridge = (X^T X + λI)^−1 X^T y",
      "β_Ridge = (X^T X − λI)^−1 X^T y",
      "β_Ridge = X^T y + λI",
      "β_Ridge = (X^T X)^−1 y"
    ],
    correctAnswer: "β_Ridge = (X^T X + λI)^−1 X^T y",
    explanation: "The λI term is added to the diagonal to shrink coefficients and improve invertibility.",
    difficulty: "easy"
  },
  {
    id: "l11-q12",
    lecture: "Lecture 11",
    topic: "Ridge and Multicollinearity",
    question: "Why can Ridge handle multicollinearity better than OLS?",
    options: [
      "Adding λI improves invertibility of the matrix being inverted",
      "Ridge deletes all correlated features",
      "Ridge ignores the design matrix",
      "Ridge forces all coefficients to zero"
    ],
    correctAnswer: "Adding λI improves invertibility of the matrix being inverted",
    explanation: "The regularization term makes X^T X + λI strictly positive definite for λ > 0.",
    difficulty: "medium"
  },
  {
    id: "l11-q13",
    lecture: "Lecture 11",
    topic: "Ridge Properties",
    question: "Which statement is true about Ridge coefficients?",
    options: [
      "They shrink toward zero but typically do not become exactly zero",
      "They always become exactly zero",
      "They always become larger",
      "They are never affected by λ"
    ],
    correctAnswer: "They shrink toward zero but typically do not become exactly zero",
    explanation: "Ridge performs continuous shrinkage rather than exact feature elimination.",
    difficulty: "easy"
  },
  {
    id: "l11-q14",
    lecture: "Lecture 11",
    topic: "Lasso Regression",
    question: "What type of penalty does Lasso use?",
    options: [
      "L1 absolute-value penalty",
      "L2 squared penalty",
      "No penalty",
      "A cubic penalty"
    ],
    correctAnswer: "L1 absolute-value penalty",
    explanation: "Lasso adds λΣ|wj| to the loss.",
    difficulty: "easy"
  },
  {
    id: "l11-q15",
    lecture: "Lecture 11",
    topic: "Lasso Feature Selection",
    question: "Why can Lasso perform automatic feature selection?",
    options: [
      "Its L1 penalty can drive some coefficients exactly to zero",
      "It always keeps all coefficients nonzero",
      "It removes rows instead of features",
      "It increases every coefficient"
    ],
    correctAnswer: "Its L1 penalty can drive some coefficients exactly to zero",
    explanation: "Zero coefficients correspond to excluded features, creating a sparse model.",
    difficulty: "easy"
  },
  {
    id: "l11-q16",
    lecture: "Lecture 11",
    topic: "L1 vs L2 Geometry",
    question: "Why does the L1 constraint encourage sparse solutions geometrically?",
    options: [
      "Its diamond-shaped boundary has sharp corners where solutions can hit an axis",
      "Its circular boundary always touches axes at random",
      "It has no boundary",
      "Its shape is a cube"
    ],
    correctAnswer: "Its diamond-shaped boundary has sharp corners where solutions can hit an axis",
    explanation: "The corners of the L1 constraint make zero-valued coefficients more likely.",
    difficulty: "medium"
  },
  {
    id: "l11-q17",
    lecture: "Lecture 11",
    topic: "Feature Scaling for Regularization",
    question: "Why should features be standardized before Ridge or Lasso?",
    options: [
      "Otherwise differently scaled features receive unfairly different effective penalties",
      "Standardization removes the target",
      "Regularization works only on binary data",
      "Scaling guarantees perfect accuracy"
    ],
    correctAnswer: "Otherwise differently scaled features receive unfairly different effective penalties",
    explanation: "Regularization acts on coefficient magnitudes, so raw feature scales matter.",
    difficulty: "medium"
  },
  {
    id: "l11-q18",
    lecture: "Lecture 11",
    topic: "Hyperparameter Tuning",
    question: "How is the regularization parameter λ selected according to the lecture?",
    options: [
      "Using cross-validation",
      "By always setting λ to infinity",
      "By choosing the largest coefficient",
      "By using the test set repeatedly"
    ],
    correctAnswer: "Using cross-validation",
    explanation: "K-fold cross-validation is used to choose a λ that minimizes validation error.",
    difficulty: "easy"
  },
  {
    id: "l11-q19",
    lecture: "Lecture 11",
    topic: "Lambda Interpretation",
    question: "What problem can occur when λ is too small?",
    options: [
      "High variance and overfitting",
      "Strong underfitting only",
      "All coefficients become zero",
      "No model can be trained"
    ],
    correctAnswer: "High variance and overfitting",
    explanation: "A very small penalty behaves close to OLS and may not control complexity sufficiently.",
    difficulty: "easy"
  },
  {
    id: "l11-q20",
    lecture: "Lecture 11",
    topic: "Lambda Interpretation",
    question: "What problem can occur when λ is too large?",
    options: [
      "High bias and underfitting",
      "Zero training error always",
      "Infinite variance",
      "Automatic feature creation"
    ],
    correctAnswer: "High bias and underfitting",
    explanation: "An excessively strong penalty overshrinks coefficients and makes the model too simple.",
    difficulty: "easy"
  },

  {
    id: "l12-q1",
    lecture: "Lecture 12",
    topic: "Polynomial Regression as Feature Transformation",
    question: "Why can polynomial regression model a curved relationship while still using linear regression machinery?",
    options: [
      "It transforms the features into powers while remaining linear in the coefficients",
      "It changes OLS into a classification algorithm",
      "It removes all features",
      "It makes the coefficients nonlinear"
    ],
    correctAnswer: "It transforms the features into powers while remaining linear in the coefficients",
    explanation: "For example, adding x² creates a curved function of x while keeping the model linear in β0, β1, β2.",
    difficulty: "medium"
  },
  {
    id: "l12-q2",
    lecture: "Lecture 12",
    topic: "Polynomial Feature Transformation",
    question: "Which feature transformation is used for a quadratic model?",
    options: [
      "φ(x) = (x, x²)",
      "φ(x) = (x, log x only)",
      "φ(x) = (1/x)",
      "φ(x) = (sin x)"
    ],
    correctAnswer: "φ(x) = (x, x²)",
    explanation: "The lecture explicitly transforms x into x and x².",
    difficulty: "easy"
  },
  {
    id: "l12-q3",
    lecture: "Lecture 12",
    topic: "Polynomial Regression Geometry",
    question: "How can a quadratic model be interpreted in 3D?",
    options: [
      "As a plane in transformed (x, z, y) space where z = x²",
      "As a sphere in the original x-y plane",
      "As a classification boundary",
      "As a histogram"
    ],
    correctAnswer: "As a plane in transformed (x, z, y) space where z = x²",
    explanation: "The nonlinear curve in original x-space becomes a linear plane after introducing z = x².",
    difficulty: "medium"
  },
  {
    id: "l12-q4",
    lecture: "Lecture 12",
    topic: "Polynomial Degree",
    question: "What does polynomial degree n control?",
    options: [
      "The maximum power of x included in the model",
      "The number of target classes",
      "The number of training samples",
      "The learning rate"
    ],
    correctAnswer: "The maximum power of x included in the model",
    explanation: "A degree-n polynomial includes terms up to x^n.",
    difficulty: "easy"
  },
  {
    id: "l12-q5",
    lecture: "Lecture 12",
    topic: "Polynomial Degree and Overfitting",
    question: "What happens to training error as polynomial degree becomes larger?",
    options: [
      "It generally decreases",
      "It always increases",
      "It stays exactly constant",
      "It becomes undefined"
    ],
    correctAnswer: "It generally decreases",
    explanation: "Higher-degree models have more flexibility and can fit the training data more closely.",
    difficulty: "easy"
  },
  {
    id: "l12-q6",
    lecture: "Lecture 12",
    topic: "Polynomial Degree and Overfitting",
    question: "Why can a very high-degree polynomial overfit?",
    options: [
      "It can start fitting random noise instead of only the underlying trend",
      "It always has too few parameters",
      "It cannot fit training data",
      "It ignores the target"
    ],
    correctAnswer: "It can start fitting random noise instead of only the underlying trend",
    explanation: "The lecture contrasts a useful moderate degree with a high degree that chases noise.",
    difficulty: "easy"
  },
  {
    id: "l12-q7",
    lecture: "Lecture 12",
    topic: "Linearity Assumption",
    question: "What does the linearity assumption require?",
    options: [
      "E[y|X] is a linear combination of the features",
      "Every feature must be normally distributed",
      "All residuals must equal zero",
      "All predictors must be categorical"
    ],
    correctAnswer: "E[y|X] is a linear combination of the features",
    explanation: "The expected target is assumed to be linear in the predictors and coefficients.",
    difficulty: "easy"
  },
  {
    id: "l12-q8",
    lecture: "Lecture 12",
    topic: "Linearity Assumption Check",
    question: "Which pattern in a residual plot suggests a violation of linearity?",
    options: [
      "A systematic curved pattern",
      "Random scatter around zero",
      "Uniform spacing",
      "A perfectly horizontal zero line"
    ],
    correctAnswer: "A systematic curved pattern",
    explanation: "Systematic structure in residuals indicates the linear form may be inadequate.",
    difficulty: "easy"
  },
  {
    id: "l12-q9",
    lecture: "Lecture 12",
    topic: "Normality of Residuals",
    question: "What distribution is assumed for residual errors under the normality assumption?",
    options: [
      "Normal with mean 0 and constant variance σ²",
      "Uniform with mean 1",
      "Poisson with variance 0",
      "Bernoulli with p = 1"
    ],
    correctAnswer: "Normal with mean 0 and constant variance σ²",
    explanation: "The lecture writes ei ~ N(0, σ²).",
    difficulty: "easy"
  },
  {
    id: "l12-q10",
    lecture: "Lecture 12",
    topic: "Normality Check",
    question: "Which tool is suggested to check residual normality?",
    options: [
      "Histogram or Q-Q plot",
      "Confusion matrix",
      "ROC only",
      "K-Means plot"
    ],
    correctAnswer: "Histogram or Q-Q plot",
    explanation: "A bell-shaped residual histogram or approximately linear Q-Q plot supports normality.",
    difficulty: "easy"
  },
  {
    id: "l12-q11",
    lecture: "Lecture 12",
    topic: "Homoscedasticity",
    question: "What does homoscedasticity require?",
    options: [
      "Residual variance is constant across fitted values",
      "Residual mean changes continuously",
      "Features have zero variance",
      "Targets are categorical"
    ],
    correctAnswer: "Residual variance is constant across fitted values",
    explanation: "The assumption is Var(ei) = σ² across predicted values.",
    difficulty: "easy"
  },
  {
    id: "l12-q12",
    lecture: "Lecture 12",
    topic: "Heteroscedasticity",
    question: "What is a common consequence of heteroscedasticity?",
    options: [
      "Standard errors can become incorrect and statistical significance can be misleading",
      "The model becomes automatically unbiased",
      "All residuals become zero",
      "R² must equal 1"
    ],
    correctAnswer: "Standard errors can become incorrect and statistical significance can be misleading",
    explanation: "Changing error variance can invalidate standard-error-based inference.",
    difficulty: "medium"
  },
  {
    id: "l12-q13",
    lecture: "Lecture 12",
    topic: "Heteroscedasticity Remedies",
    question: "Which is listed as a remedy for heteroscedasticity?",
    options: [
      "Log transformation or weighted least squares",
      "Removing the target",
      "Adding arbitrary labels",
      "Ignoring residual plots"
    ],
    correctAnswer: "Log transformation or weighted least squares",
    explanation: "The lecture mentions transformations such as log and methods such as WLS.",
    difficulty: "easy"
  },
  {
    id: "l12-q14",
    lecture: "Lecture 12",
    topic: "Autocorrelation",
    question: "What does the no-autocorrelation assumption require?",
    options: [
      "Errors are independent across observations",
      "Errors must all have positive signs",
      "Predictors must be identical",
      "Features must have zero means"
    ],
    correctAnswer: "Errors are independent across observations",
    explanation: "The lecture states Cov(ei, ej) = 0 for i ≠ j.",
    difficulty: "easy"
  },
  {
    id: "l12-q15",
    lecture: "Lecture 12",
    topic: "Autocorrelation Check",
    question: "Which statistic is mentioned for checking autocorrelation?",
    options: [
      "Durbin-Watson",
      "Variance Inflation Factor",
      "Silhouette score",
      "F1 score"
    ],
    correctAnswer: "Durbin-Watson",
    explanation: "The lecture states that Durbin-Watson near 2 indicates little or no autocorrelation.",
    difficulty: "easy"
  },
  {
    id: "l12-q16",
    lecture: "Lecture 12",
    topic: "Multicollinearity",
    question: "Why is multicollinearity harmful for inference?",
    options: [
      "Highly correlated predictors can make coefficient estimates unstable",
      "It always improves interpretability",
      "It forces all coefficients to zero",
      "It removes residuals"
    ],
    correctAnswer: "Highly correlated predictors can make coefficient estimates unstable",
    explanation: "The lecture emphasizes unstable coefficients and inflated standard errors under multicollinearity.",
    difficulty: "medium"
  },
  {
    id: "l12-q17",
    lecture: "Lecture 12",
    topic: "Variance Inflation Factor",
    question: "What is the VIF formula shown?",
    options: [
      "VIFj = 1 / (1 − Rj²)",
      "VIFj = 1 − Rj²",
      "VIFj = Rj²",
      "VIFj = Rj / 1"
    ],
    correctAnswer: "VIFj = 1 / (1 − Rj²)",
    explanation: "The lecture defines VIF using the R² obtained by regressing feature j on the other predictors.",
    difficulty: "easy"
  },
  {
    id: "l12-q18",
    lecture: "Lecture 12",
    topic: "VIF Interpretation",
    question: "What does a VIF greater than 10 indicate according to the lecture?",
    options: [
      "Severe multicollinearity",
      "Perfect normality",
      "Zero heteroscedasticity",
      "Underfitting"
    ],
    correctAnswer: "Severe multicollinearity",
    explanation: "The lecture uses VIF > 10 as an indicator of severe multicollinearity.",
    difficulty: "easy"
  },

  {
    id: "l13-q1",
    lecture: "Lecture 13",
    topic: "Violation of IID",
    question: "Why is ordinary random shuffling problematic for time-series data?",
    options: [
      "Temporal ordering contains signal and shuffling can destroy that structure",
      "Time-series data contain no numerical values",
      "Shuffling always improves forecasting",
      "Time has no predictive relevance"
    ],
    correctAnswer: "Temporal ordering contains signal and shuffling can destroy that structure",
    explanation: "Time-series observations are dependent on previous values, so random shuffling breaks temporal structure.",
    difficulty: "easy"
  },
  {
    id: "l13-q2",
    lecture: "Lecture 13",
    topic: "Time-Series Validation",
    question: "Why can standard K-fold cross-validation create leakage for time series?",
    options: [
      "It may train on future data while evaluating on the past",
      "It always removes all labels",
      "It prevents any model training",
      "It can only be used with regression"
    ],
    correctAnswer: "It may train on future data while evaluating on the past",
    explanation: "Random folds can place future observations into training sets used to predict earlier observations.",
    difficulty: "medium"
  },
  {
    id: "l13-q3",
    lecture: "Lecture 13",
    topic: "Time-Series Validation",
    question: "Which validation strategy is more appropriate for time-series forecasting?",
    options: [
      "Rolling-window or forward-chaining splits",
      "Randomly shuffled K-fold only",
      "Leave-one-feature-out",
      "No validation"
    ],
    correctAnswer: "Rolling-window or forward-chaining splits",
    explanation: "The lecture recommends preserving temporal order during validation.",
    difficulty: "easy"
  },
  {
    id: "l13-q4",
    lecture: "Lecture 13",
    topic: "Time-Series Decomposition",
    question: "Which decomposition is shown?",
    options: [
      "Yt = Tt + St + εt",
      "Yt = Tt × St only",
      "Yt = εt − St",
      "Yt = Xt + β"
    ],
    correctAnswer: "Yt = Tt + St + εt",
    explanation: "The observed series is decomposed into trend, seasonality, and noise/residual.",
    difficulty: "easy"
  },
  {
    id: "l13-q5",
    lecture: "Lecture 13",
    topic: "Trend",
    question: "What does the trend component represent?",
    options: [
      "Long-term upward or downward direction",
      "Random unpredictable variation only",
      "Short-term lag correlation only",
      "Only periodic cycles"
    ],
    correctAnswer: "Long-term upward or downward direction",
    explanation: "Trend captures the long-term movement of the series.",
    difficulty: "easy"
  },
  {
    id: "l13-q6",
    lecture: "Lecture 13",
    topic: "Seasonality",
    question: "What is seasonality?",
    options: [
      "A fixed repeating cyclical pattern",
      "An unpredictable random error",
      "A one-time outlier",
      "A constant mean"
    ],
    correctAnswer: "A fixed repeating cyclical pattern",
    explanation: "Seasonality refers to repeated patterns at regular intervals.",
    difficulty: "easy"
  },
  {
    id: "l13-q7",
    lecture: "Lecture 13",
    topic: "Stationarity Criteria",
    question: "Which is a condition for weak stationarity?",
    options: [
      "Constant mean over time",
      "Continuously increasing variance",
      "Changing autocovariance with absolute time",
      "Randomly changing units"
    ],
    correctAnswer: "Constant mean over time",
    explanation: "The three criteria include constant mean, constant variance, and time-invariant autocovariance.",
    difficulty: "easy"
  },
  {
    id: "l13-q8",
    lecture: "Lecture 13",
    topic: "Stationarity Criteria",
    question: "What must be true about the variance of a stationary series?",
    options: [
      "Var(Yt) = σ² for all t",
      "Var(Yt) must increase with t",
      "Var(Yt) must be zero",
      "Var(Yt) depends only on the target label"
    ],
    correctAnswer: "Var(Yt) = σ² for all t",
    explanation: "Weak stationarity requires constant variance.",
    difficulty: "easy"
  },
  {
    id: "l13-q9",
    lecture: "Lecture 13",
    topic: "Stationarity Criteria",
    question: "How should autocovariance behave for a stationary series?",
    options: [
      "It depends only on lag k, not absolute time t",
      "It depends on absolute time but not lag",
      "It must always be zero",
      "It must always be positive"
    ],
    correctAnswer: "It depends only on lag k, not absolute time t",
    explanation: "Time-invariant autocovariance is the third stationarity criterion.",
    difficulty: "medium"
  },
  {
    id: "l13-q10",
    lecture: "Lecture 13",
    topic: "Why ML Fails on Non-Stationary Data",
    question: "Why can a model trained on historical non-stationary data generalize poorly?",
    options: [
      "The relationship learned from the past may no longer hold in the future",
      "Historical data are always unlabeled",
      "Non-stationary data contain no patterns",
      "All models require stationarity for computation only"
    ],
    correctAnswer: "The relationship learned from the past may no longer hold in the future",
    explanation: "Changing patterns mean historical relationships may become outdated.",
    difficulty: "easy"
  },
  {
    id: "l13-q11",
    lecture: "Lecture 13",
    topic: "Lag Differencing",
    question: "What is first-order lag differencing?",
    options: [
      "ΔYt = Yt − Yt−1",
      "ΔYt = Yt + Yt−1",
      "ΔYt = Yt / Yt−1",
      "ΔYt = Yt² − Yt−1²"
    ],
    correctAnswer: "ΔYt = Yt − Yt−1",
    explanation: "Differencing models step-to-step changes instead of the raw level.",
    difficulty: "easy"
  },
  {
    id: "l13-q12",
    lecture: "Lecture 13",
    topic: "Differencing Example",
    question: "For stock prices 100, 105, 110, 115, 122, what is the first difference on day 5?",
    options: [
      "5",
      "7",
      "12",
      "22"
    ],
    correctAnswer: "7",
    explanation: "The difference is 122 − 115 = 7.",
    difficulty: "easy"
  },
  {
    id: "l13-q13",
    lecture: "Lecture 13",
    topic: "Lags as Features",
    question: "What are lagged values used for in time-series modeling?",
    options: [
      "They become feature inputs for predicting the current value",
      "They are discarded immediately",
      "They replace the target with labels",
      "They remove temporal ordering"
    ],
    correctAnswer: "They become feature inputs for predicting the current value",
    explanation: "Past observations such as Yt−1 and Yt−2 can be used as predictors.",
    difficulty: "easy"
  },
  {
    id: "l13-q14",
    lecture: "Lecture 13",
    topic: "AR Model",
    question: "What does AR(p) model directly?",
    options: [
      "The current value as a linear function of its previous p values",
      "Only external shocks",
      "Only seasonal frequency",
      "Only residual variance"
    ],
    correctAnswer: "The current value as a linear function of its previous p values",
    explanation: "AR(p) uses lagged versions of the series as predictors.",
    difficulty: "easy"
  },
  {
    id: "l13-q15",
    lecture: "Lecture 13",
    topic: "AR Model Order",
    question: "What determines the order p of an AR model according to the lecture?",
    options: [
      "The number of significant lags in the PACF",
      "The number of classes",
      "The MA coefficient only",
      "The sample mean only"
    ],
    correctAnswer: "The number of significant lags in the PACF",
    explanation: "The lecture recommends using the PACF cutoff to choose AR order.",
    difficulty: "medium"
  },
  {
    id: "l13-q16",
    lecture: "Lecture 13",
    topic: "ACF",
    question: "What does the autocorrelation function measure?",
    options: [
      "Correlation between Yt and Yt−k",
      "Only direct causal effects",
      "Only variance of residuals",
      "Correlation between two unrelated features"
    ],
    correctAnswer: "Correlation between Yt and Yt−k",
    explanation: "ACF measures correlation between observations separated by lag k.",
    difficulty: "easy"
  },
  {
    id: "l13-q17",
    lecture: "Lecture 13",
    topic: "Ripple Effect Problem",
    question: "Why can ACF show a high correlation at a lag even when there is no direct effect?",
    options: [
      "Indirect relationships through intermediate lags can create correlation",
      "ACF ignores all previous observations",
      "ACF only measures variance",
      "ACF is identical to PACF"
    ],
    correctAnswer: "Indirect relationships through intermediate lags can create correlation",
    explanation: "The lecture calls this the ripple effect problem.",
    difficulty: "medium"
  },
  {
    id: "l13-q18",
    lecture: "Lecture 13",
    topic: "PACF",
    question: "What does PACF measure?",
    options: [
      "Direct correlation between Yt and Yt−k after accounting for intermediate lags",
      "Only total variance",
      "Only seasonality",
      "Correlation with future observations"
    ],
    correctAnswer: "Direct correlation between Yt and Yt−k after accounting for intermediate lags",
    explanation: "PACF removes the effect of intermediate lags and measures the remaining direct relationship.",
    difficulty: "medium"
  },
  {
    id: "l13-q19",
    lecture: "Lecture 13",
    topic: "PACF and AR Order",
    question: "What pattern is associated with an AR(p) process in the PACF?",
    options: [
      "Significant spikes up to lag p followed by a sharp cutoff",
      "No spikes at all",
      "Exponential decay forever with no cutoff",
      "Only negative spikes"
    ],
    correctAnswer: "Significant spikes up to lag p followed by a sharp cutoff",
    explanation: "For AR models, PACF typically cuts off after the true order p.",
    difficulty: "medium"
  },
  {
    id: "l13-q20",
    lecture: "Lecture 13",
    topic: "Random Shocks",
    question: "What are random shocks or innovations in a time series?",
    options: [
      "Unexpected events that temporarily disturb the series",
      "Fixed seasonal patterns",
      "Constant trends",
      "The regression intercept"
    ],
    correctAnswer: "Unexpected events that temporarily disturb the series",
    explanation: "Innovations are unpredictable events that cause shocks to the time series.",
    difficulty: "easy"
  },
  {
    id: "l13-q21",
    lecture: "Lecture 13",
    topic: "Moving Average Model",
    question: "What does an MA(q) model primarily use to predict the current value?",
    options: [
      "Current and past shock/error terms",
      "Only lagged target values",
      "Only seasonal indices",
      "Only feature means"
    ],
    correctAnswer: "Current and past shock/error terms",
    explanation: "Moving-average models represent the current series as a function of current and past innovations.",
    difficulty: "easy"
  },

  {
    id: "l14-q1",
    lecture: "Lecture 14",
    topic: "Probability vs Likelihood",
    question: "In probability notation P(Data | θ), what is treated as fixed?",
    options: [
      "The parameter θ",
      "The observed data",
      "Both are random",
      "Neither"
    ],
    correctAnswer: "The parameter θ",
    explanation: "Probability treats the model parameter as fixed and asks about possible outcomes.",
    difficulty: "easy"
  },
  {
    id: "l14-q2",
    lecture: "Lecture 14",
    topic: "Probability vs Likelihood",
    question: "In likelihood L(θ; D), what is treated as fixed?",
    options: [
      "The observed data D",
      "The parameter θ",
      "Both are fixed",
      "Neither is fixed"
    ],
    correctAnswer: "The observed data D",
    explanation: "Likelihood keeps the observed data fixed and varies the parameter to compare plausibility.",
    difficulty: "easy"
  },
  {
    id: "l14-q3",
    lecture: "Lecture 14",
    topic: "MLE Criterion",
    question: "What is the Maximum Likelihood Estimation criterion?",
    options: [
      "Choose θ that maximizes L(θ; D)",
      "Choose θ that minimizes the number of samples",
      "Choose θ that maximizes training error",
      "Choose θ = 0 always"
    ],
    correctAnswer: "Choose θ that maximizes L(θ; D)",
    explanation: "MLE finds the parameter value making the observed data most plausible under the model.",
    difficulty: "easy"
  },
  {
    id: "l14-q4",
    lecture: "Lecture 14",
    topic: "Coin Toss Likelihood",
    question: "If 7 heads occur in 10 tosses, what likelihood form is shown?",
    options: [
      "L(p) = C(10,7)p^7(1-p)^3",
      "L(p) = 7p + 3(1-p)",
      "L(p) = p^10",
      "L(p) = (1-p)^10"
    ],
    correctAnswer: "L(p) = C(10,7)p^7(1-p)^3",
    explanation: "The binomial likelihood combines the probability of seven heads and three tails with the combinatorial count.",
    difficulty: "easy"
  },
  {
    id: "l14-q5",
    lecture: "Lecture 14",
    topic: "Coin Toss MLE Example",
    question: "Approximately where does the likelihood peak in the 7-heads-out-of-10 example?",
    options: [
      "p ≈ 0.7",
      "p ≈ 0.1",
      "p ≈ 0.5 exactly",
      "p ≈ 1.0"
    ],
    correctAnswer: "p ≈ 0.7",
    explanation: "The displayed likelihood curve peaks near p = 0.7.",
    difficulty: "easy"
  },
  {
    id: "l14-q6",
    lecture: "Lecture 14",
    topic: "Accuracy Limitation",
    question: "Why is classification accuracy insufficient for logistic regression learning?",
    options: [
      "Discrete accuracy gives little or no useful gradient signal",
      "Accuracy is always continuous",
      "Accuracy cannot compare classes",
      "Accuracy is a probability density"
    ],
    correctAnswer: "Discrete accuracy gives little or no useful gradient signal",
    explanation: "Different decision boundaries can all obtain 100% training accuracy, making accuracy unsuitable as a smooth optimization objective.",
    difficulty: "medium"
  },
  {
    id: "l14-q7",
    lecture: "Lecture 14",
    topic: "Linear Score",
    question: "What is the logistic model's linear score?",
    options: [
      "z = x^Tβ",
      "z = x + β",
      "z = ||x||²",
      "z = β/x"
    ],
    correctAnswer: "z = x^Tβ",
    explanation: "The score is a linear combination of input features and coefficients.",
    difficulty: "easy"
  },
  {
    id: "l14-q8",
    lecture: "Lecture 14",
    topic: "Decision Boundary",
    question: "What is the decision boundary in logistic regression when using the sigmoid score?",
    options: [
      "z = 0",
      "z = 1",
      "z = ∞",
      "z = −1 only"
    ],
    correctAnswer: "z = 0",
    explanation: "For sigmoid output 0.5, the corresponding linear score is z = 0.",
    difficulty: "easy"
  },
  {
    id: "l14-q9",
    lecture: "Lecture 14",
    topic: "Sigmoid Function",
    question: "What is the sigmoid function?",
    options: [
      "σ(z) = 1 / (1 + e^−z)",
      "σ(z) = e^z",
      "σ(z) = z²",
      "σ(z) = 1/z"
    ],
    correctAnswer: "σ(z) = 1 / (1 + e^−z)",
    explanation: "The sigmoid maps any real-valued score to a value between 0 and 1.",
    difficulty: "easy"
  },
  {
    id: "l14-q10",
    lecture: "Lecture 14",
    topic: "Sigmoid Properties",
    question: "What is σ(0)?",
    options: [
      "0",
      "0.5",
      "1",
      "−0.5"
    ],
    correctAnswer: "0.5",
    explanation: "The sigmoid is symmetric around 0 and equals 0.5 when z = 0.",
    difficulty: "easy"
  },
  {
    id: "l14-q11",
    lecture: "Lecture 14",
    topic: "Sigmoid Properties",
    question: "What happens to σ(z) as z approaches +∞?",
    options: [
      "It approaches 1",
      "It approaches 0",
      "It approaches −1",
      "It becomes undefined"
    ],
    correctAnswer: "It approaches 1",
    explanation: "The sigmoid saturates near 1 for large positive inputs.",
    difficulty: "easy"
  },
  {
    id: "l14-q12",
    lecture: "Lecture 14",
    topic: "Step Function vs Sigmoid",
    question: "Why is the step function unsuitable for gradient-based learning?",
    options: [
      "It is non-differentiable and has zero gradient almost everywhere",
      "It is too smooth",
      "It always outputs probabilities",
      "It has no decision boundary"
    ],
    correctAnswer: "It is non-differentiable and has zero gradient almost everywhere",
    explanation: "The lecture contrasts the hard step function with the smooth sigmoid.",
    difficulty: "medium"
  },
  {
    id: "l14-q13",
    lecture: "Lecture 14",
    topic: "Bernoulli Class Probabilities",
    question: "For logistic regression, what is P(Yi = 1 | xi; β)?",
    options: [
      "pi = σ(zi) = 1/(1 + e^(−xi^Tβ))",
      "pi = xi^Tβ",
      "pi = 1 − σ(zi) always",
      "pi = β/xi"
    ],
    correctAnswer: "pi = σ(zi) = 1/(1 + e^(−xi^Tβ))",
    explanation: "The sigmoid transforms the linear score into the probability of class 1.",
    difficulty: "easy"
  },
  {
    id: "l14-q14",
    lecture: "Lecture 14",
    topic: "Bernoulli Compact Formula",
    question: "Which compact Bernoulli expression represents the probability of yi given pi?",
    options: [
      "pi^yi(1 − pi)^(1 − yi)",
      "pi + yi",
      "pi − yi",
      "yi/pi"
    ],
    correctAnswer: "pi^yi(1 − pi)^(1 − yi)",
    explanation: "For yi ∈ {0,1}, the expression selects pi when yi = 1 and 1 − pi when yi = 0.",
    difficulty: "easy"
  },
  {
    id: "l14-q15",
    lecture: "Lecture 14",
    topic: "Dataset Likelihood",
    question: "Under conditional independence, how is the dataset likelihood formed?",
    options: [
      "L(β) = ∏i pi^yi(1 − pi)^(1 − yi)",
      "L(β) = Σi pi",
      "L(β) = max(pi)",
      "L(β) = ∏i yi"
    ],
    correctAnswer: "L(β) = ∏i pi^yi(1 − pi)^(1 − yi)",
    explanation: "Conditional independence allows the individual Bernoulli probabilities to be multiplied.",
    difficulty: "easy"
  },
  {
    id: "l14-q16",
    lecture: "Lecture 14",
    topic: "Log-Likelihood",
    question: "Why is log-likelihood used instead of directly multiplying many probabilities?",
    options: [
      "It converts products into sums and improves numerical stability",
      "It changes probabilities into labels",
      "It guarantees zero loss",
      "It removes the model parameters"
    ],
    correctAnswer: "It converts products into sums and improves numerical stability",
    explanation: "Logarithms avoid underflow from multiplying many small probabilities and preserve the maximizing parameter.",
    difficulty: "easy"
  },
  {
    id: "l14-q17",
    lecture: "Lecture 14",
    topic: "Binary Cross-Entropy",
    question: "What is the binary cross-entropy objective shown?",
    options: [
      "BCE(β) = −(1/n)Σ[yi log(pi) + (1−yi)log(1−pi)]",
      "BCE = Σ(pi − yi)",
      "BCE = Σ(pi + yi)",
      "BCE = β^Tβ only"
    ],
    correctAnswer: "BCE(β) = −(1/n)Σ[yi log(pi) + (1−yi)log(1−pi)]",
    explanation: "BCE is the negative average Bernoulli log-likelihood.",
    difficulty: "easy"
  },
  {
    id: "l14-q18",
    lecture: "Lecture 14",
    topic: "Asymptotic Penalty",
    question: "What happens when a model assigns probability approaching 0 to an event that actually occurred?",
    options: [
      "The log-loss tends toward infinity",
      "The loss becomes zero",
      "The loss becomes negative infinity",
      "The prediction becomes perfect"
    ],
    correctAnswer: "The log-loss tends toward infinity",
    explanation: "For a true yi = 1, −log(pi) diverges as pi approaches 0.",
    difficulty: "easy"
  },
  {
    id: "l14-q19",
    lecture: "Lecture 14",
    topic: "Numerical Clipping",
    question: "Why do practical implementations clip probabilities away from exactly 0 and 1?",
    options: [
      "To prevent log(0) and numerical NaNs/infinite loss",
      "To make all probabilities equal",
      "To remove the sigmoid",
      "To increase class imbalance"
    ],
    correctAnswer: "To prevent log(0) and numerical NaNs/infinite loss",
    explanation: "Libraries often clip probabilities to a small interval such as [ε, 1−ε].",
    difficulty: "medium"
  },
  {
    id: "l14-q20",
    lecture: "Lecture 14",
    topic: "Convexity and Optimization",
    question: "What is stated about BCE with respect to the logistic-regression coefficients β?",
    options: [
      "It is strictly convex and requires iterative optimization",
      "It is always non-convex",
      "It has a simple OLS normal equation",
      "It cannot be optimized numerically"
    ],
    correctAnswer: "It is strictly convex and requires iterative optimization",
    explanation: "The lecture states that BCE is strictly convex but has no closed-form normal-equation solution.",
    difficulty: "medium"
  },
  {
    id: "l14-q21",
    lecture: "Lecture 14",
    topic: "Optimization Solvers",
    question: "Which method is suitable for optimizing logistic-regression BCE?",
    options: [
      "Gradient Descent",
      "Only matrix inversion from OLS",
      "Only K-Means",
      "Only PCA"
    ],
    correctAnswer: "Gradient Descent",
    explanation: "The lecture lists iterative solvers such as Gradient Descent, Newton-Raphson, and L-BFGS.",
    difficulty: "easy"
  },
  {
    id: "l14-q22",
    lecture: "Lecture 14",
    topic: "Regularized Logistic Regression",
    question: "Why may L1 or L2 regularization be added to logistic regression?",
    options: [
      "To control coefficient magnitude and improve generalization",
      "To remove the sigmoid function",
      "To eliminate the dataset",
      "To force BCE to zero"
    ],
    correctAnswer: "To control coefficient magnitude and improve generalization",
    explanation: "The lecture adds λ||β||² or λ||β||1 to the BCE objective to regularize coefficients.",
    difficulty: "easy"
  },
  {
    id: "l14-q23",
    lecture: "Lecture 14",
    topic: "Logistic Regression Pipeline",
    question: "Which sequence matches the lecture's logistic-regression pipeline?",
    options: [
      "Input features → linear score → sigmoid probability → Bernoulli likelihood → log-likelihood → BCE objective",
      "Input features → PCA → K-Means → MSE only",
      "Input features → accuracy → confusion matrix → OLS",
      "Input features → sorting → clustering → BCE"
    ],
    correctAnswer: "Input features → linear score → sigmoid probability → Bernoulli likelihood → log-likelihood → BCE objective",
    explanation: "This is the conceptual pipeline from the linear predictor to the probabilistic learning objective.",
    difficulty: "medium"
  },
  {
    id: "l15-q1",
    lecture: "Lecture 15",
    topic: "Binary Cross-Entropy Loss",
    question: "What loss function is used for binary logistic regression in Lecture 15?",
    options: [
      "Binary cross-entropy",
      "Mean absolute error",
      "Squared hinge loss",
      "K-means loss"
    ],
    correctAnswer: "Binary cross-entropy",
    explanation: "The lecture uses binary cross-entropy as the logistic regression loss.",
    difficulty: "easy"
  },
  {
    id: "l15-q2",
    lecture: "Lecture 15",
    topic: "Binary Cross-Entropy Loss",
    question: "Which expression represents the binary logistic-regression loss for n observations?",
    options: [
      "J(β) = −(1/n) Σ[yi log(p̂i) + (1−yi)log(1−p̂i)]",
      "J(β) = (1/n) Σ(yi + p̂i)",
      "J(β) = Σ(yi − p̂i)",
      "J(β) = βᵀβ"
    ],
    correctAnswer: "J(β) = −(1/n) Σ[yi log(p̂i) + (1−yi)log(1−p̂i)]",
    explanation: "Lecture 15 starts with the average binary cross-entropy objective.",
    difficulty: "easy"
  },
  {
    id: "l15-q3",
    lecture: "Lecture 15",
    topic: "Gradient Descent for Logistic Regression",
    question: "Why is Gradient Descent used for the logistic-regression objective discussed in the lecture?",
    options: [
      "There is no closed-form solution for the objective",
      "The data cannot be stored in matrices",
      "The sigmoid cannot produce probabilities",
      "OLS always gives the exact logistic solution"
    ],
    correctAnswer: "There is no closed-form solution for the objective",
    explanation: "The lecture explicitly states that logistic regression has no closed-form solution here, so iterative optimization is used.",
    difficulty: "easy"
  },
  {
    id: "l15-q4",
    lecture: "Lecture 15",
    topic: "Gradient Descent Update Rule",
    question: "What is the parameter update rule shown for logistic regression?",
    options: [
      "βj^(t+1) = βj^t − α ∂J/∂βj",
      "βj^(t+1) = βj^t + α ∂J/∂βj",
      "βj^(t+1) = αβj^t",
      "βj^(t+1) = βj^t / α"
    ],
    correctAnswer: "βj^(t+1) = βj^t − α ∂J/∂βj",
    explanation: "Gradient descent moves the parameter opposite the gradient direction.",
    difficulty: "easy"
  },
  {
    id: "l15-q5",
    lecture: "Lecture 15",
    topic: "Gradient Direction",
    question: "What does the derivative tell gradient descent about a parameter update?",
    options: [
      "The direction and steepness of local change",
      "The number of classes",
      "The dataset size only",
      "The final prediction directly"
    ],
    correctAnswer: "The direction and steepness of local change",
    explanation: "The derivative provides the direction and magnitude information used to descend the loss surface.",
    difficulty: "easy"
  },
  {
    id: "l15-q6",
    lecture: "Lecture 15",
    topic: "Learning Rate",
    question: "What does the learning rate α control?",
    options: [
      "The size of each parameter update",
      "The number of classes",
      "The number of features",
      "The target labels"
    ],
    correctAnswer: "The size of each parameter update",
    explanation: "A larger or smaller α changes how far parameters move in one gradient step.",
    difficulty: "easy"
  },
  {
    id: "l15-q7",
    lecture: "Lecture 15",
    topic: "Dependency Chain",
    question: "Which dependency chain is correct for one logistic-regression example?",
    options: [
      "βj → zi → p̂i → Li",
      "βj → Li → zi → p̂i",
      "Li → βj → p̂i → zi",
      "zi → Li → βj → p̂i"
    ],
    correctAnswer: "βj → zi → p̂i → Li",
    explanation: "The parameter affects the linear score, which affects the probability, which affects the BCE loss.",
    difficulty: "easy"
  },
  {
    id: "l15-q8",
    lecture: "Lecture 15",
    topic: "Chain Rule",
    question: "How is the derivative of one example's loss with respect to βj expressed using the chain rule?",
    options: [
      "∂Li/∂βj = (∂Li/∂p̂i)(∂p̂i/∂zi)(∂zi/∂βj)",
      "∂Li/∂βj = ∂Li/∂p̂i + ∂zi/∂βj",
      "∂Li/∂βj = ∂Li/∂zi",
      "∂Li/∂βj = βjLi"
    ],
    correctAnswer: "∂Li/∂βj = (∂Li/∂p̂i)(∂p̂i/∂zi)(∂zi/∂βj)",
    explanation: "The lecture explicitly expands the dependency chain through probability and score.",
    difficulty: "medium"
  },
  {
    id: "l15-q9",
    lecture: "Lecture 15",
    topic: "BCE Derivative",
    question: "What is the derivative of the BCE loss with respect to the predicted probability p̂i?",
    options: [
      "(p̂i − yi) / [p̂i(1 − p̂i)]",
      "p̂i − yi",
      "yi − p̂i",
      "p̂i(1 − p̂i)"
    ],
    correctAnswer: "(p̂i − yi) / [p̂i(1 − p̂i)]",
    explanation: "Differentiating the BCE expression with respect to p̂i gives the fraction shown in the lecture.",
    difficulty: "medium"
  },
  {
    id: "l15-q10",
    lecture: "Lecture 15",
    topic: "Sigmoid Derivative",
    question: "What is the derivative of the sigmoid function p̂i = σ(zi)?",
    options: [
      "∂p̂i/∂zi = p̂i(1 − p̂i)",
      "∂p̂i/∂zi = p̂i − 1",
      "∂p̂i/∂zi = zi(1 − zi)",
      "∂p̂i/∂zi = 1/p̂i"
    ],
    correctAnswer: "∂p̂i/∂zi = p̂i(1 − p̂i)",
    explanation: "The sigmoid derivative can be written directly in terms of its output.",
    difficulty: "easy"
  },
  {
    id: "l15-q11",
    lecture: "Lecture 15",
    topic: "Linear Score Derivative",
    question: "For zi = β0 + β1xi1 + ... + βd xid, what is ∂zi/∂βj?",
    options: [
      "xij",
      "βj",
      "zi",
      "1/xij"
    ],
    correctAnswer: "xij",
    explanation: "The coefficient βj multiplies feature xij, so differentiating with respect to βj gives xij.",
    difficulty: "easy"
  },
  {
    id: "l15-q12",
    lecture: "Lecture 15",
    topic: "Prediction Minus Target Gradient",
    question: "After applying the chain rule, what is the per-example gradient with respect to βj?",
    options: [
      "(p̂i − yi)xij",
      "(yi − p̂i)xij",
      "p̂i(1 − p̂i)xij",
      "(p̂i + yi)xij"
    ],
    correctAnswer: "(p̂i − yi)xij",
    explanation: "The sigmoid derivative cancels the denominator from the BCE derivative, leaving prediction minus target times the feature.",
    difficulty: "easy"
  },
  {
    id: "l15-q13",
    lecture: "Lecture 15",
    topic: "Gradient Intuition",
    question: "What does the term (p̂i − yi) represent intuitively?",
    options: [
      "The prediction error and update direction",
      "The feature magnitude only",
      "The learning rate",
      "The number of classes"
    ],
    correctAnswer: "The prediction error and update direction",
    explanation: "The lecture highlights prediction minus target as the direction/error signal in the gradient.",
    difficulty: "easy"
  },
  {
    id: "l15-q14",
    lecture: "Lecture 15",
    topic: "Gradient Intuition",
    question: "What does xij represent in the per-example gradient (p̂i − yi)xij?",
    options: [
      "How strongly that feature influences the parameter update",
      "The loss value",
      "The predicted class",
      "The learning rate"
    ],
    correctAnswer: "How strongly that feature influences the parameter update",
    explanation: "A larger feature value gives that observation a stronger contribution to the coefficient gradient.",
    difficulty: "easy"
  },
  {
    id: "l15-q15",
    lecture: "Lecture 15",
    topic: "Batch Gradient Descent",
    question: "How does Batch Gradient Descent combine the per-example logistic-regression gradients?",
    options: [
      "It averages the gradients over all observations",
      "It uses only the last observation",
      "It takes the maximum gradient",
      "It randomly discards half the observations"
    ],
    correctAnswer: "It averages the gradients over all observations",
    explanation: "Batch GD uses every observation and averages their gradient contributions.",
    difficulty: "easy"
  },
  {
    id: "l15-q16",
    lecture: "Lecture 15",
    topic: "Batch Gradient Update Rule",
    question: "Which is the batch update rule for βj?",
    options: [
      "βj ← βj − α(1/n)Σ(p̂i − yi)xij",
      "βj ← βj + αΣ(p̂i + yi)xij",
      "βj ← βj − αΣxij",
      "βj ← βj/n"
    ],
    correctAnswer: "βj ← βj − α(1/n)Σ(p̂i − yi)xij",
    explanation: "The update uses the average of all per-example gradients.",
    difficulty: "medium"
  },
  {
    id: "l15-q17",
    lecture: "Lecture 15",
    topic: "Vectorized Logistic Gradient",
    question: "What is the vector-form gradient shown in the lecture?",
    options: [
      "∇βJ = (1/n)Xᵀ(p̂ − y)",
      "∇βJ = X(p̂ + y)",
      "∇βJ = (1/n)X(y − p̂)",
      "∇βJ = XᵀXβ"
    ],
    correctAnswer: "∇βJ = (1/n)Xᵀ(p̂ − y)",
    explanation: "Vector notation compresses all parameter-wise gradient calculations into one matrix expression.",
    difficulty: "medium"
  },
  {
    id: "l15-q18",
    lecture: "Lecture 15",
    topic: "Batch Gradient Descent Iteration",
    question: "Which sequence correctly describes one logistic-regression Batch GD iteration?",
    options: [
      "Compute z → compute probabilities → compute average BCE and gradient → update parameters",
      "Update parameters → compute z → delete labels → compute loss",
      "Compute loss → randomize labels → update features",
      "Compute probabilities → remove X → update only intercept"
    ],
    correctAnswer: "Compute z → compute probabilities → compute average BCE and gradient → update parameters",
    explanation: "The lecture presents this as the repeated one-iteration workflow.",
    difficulty: "easy"
  },
  {
    id: "l15-q19",
    lecture: "Lecture 15",
    topic: "Simultaneous Parameter Updates",
    question: "How should all logistic-regression parameters be updated within one Batch GD step?",
    options: [
      "Simultaneously using the gradients computed from the current parameters",
      "One parameter using the newest value of every other parameter",
      "Only the largest gradient should be updated",
      "Only the intercept should be updated"
    ],
    correctAnswer: "Simultaneously using the gradients computed from the current parameters",
    explanation: "All parameters are updated from the same current parameter state.",
    difficulty: "medium"
  },
  {
    id: "l15-q20",
    lecture: "Lecture 15",
    topic: "Loss During Optimization",
    question: "What should generally happen to the logistic-regression loss during successful gradient-descent training?",
    options: [
      "It should decrease over iterations",
      "It should increase monotonically",
      "It should remain exactly constant",
      "It should alternate between zero and infinity"
    ],
    correctAnswer: "It should decrease over iterations",
    explanation: "The lecture's loss curve illustrates decreasing loss as optimization progresses.",
    difficulty: "easy"
  },
  {
    id: "l15-q21",
    lecture: "Lecture 15",
    topic: "Multiclass Problem Setup",
    question: "What type of problem is considered in the multiclass section?",
    options: [
      "K mutually exclusive classes with K ≥ 3",
      "Only two non-exclusive classes",
      "Continuous regression targets",
      "Unsupervised clusters only"
    ],
    correctAnswer: "K mutually exclusive classes with K ≥ 3",
    explanation: "The lecture considers mutually exclusive multiclass classification with at least three classes.",
    difficulty: "easy"
  },
  {
    id: "l15-q22",
    lecture: "Lecture 15",
    topic: "Multiclass Approaches",
    question: "Which two approaches are presented for multiclass classification?",
    options: [
      "One-vs-Rest and Softmax Regression",
      "K-Means and PCA",
      "Ridge and Lasso",
      "AR and MA"
    ],
    correctAnswer: "One-vs-Rest and Softmax Regression",
    explanation: "The lecture compares OVR with Softmax as the two multiclass strategies.",
    difficulty: "easy"
  },
  {
    id: "l15-q23",
    lecture: "Lecture 15",
    topic: "One-vs-Rest Setup",
    question: "How many binary classifiers are trained in One-vs-Rest for K classes?",
    options: [
      "K",
      "K − 1",
      "2K",
      "K²"
    ],
    correctAnswer: "K",
    explanation: "One independent binary classifier is trained for each class against all remaining classes.",
    difficulty: "easy"
  },
  {
    id: "l15-q24",
    lecture: "Lecture 15",
    topic: "One-vs-Rest Labels",
    question: "For the OVR classifier corresponding to class k, what label assignment is used?",
    options: [
      "yi = 1 if the example belongs to class k, otherwise 0",
      "yi = k for every example",
      "yi = 0 for class k and 1 for all others",
      "yi is always the original multiclass label"
    ],
    correctAnswer: "yi = 1 if the example belongs to class k, otherwise 0",
    explanation: "Each OVR model turns one class into the positive class and all others into the negative class.",
    difficulty: "easy"
  },
  {
    id: "l15-q25",
    lecture: "Lecture 15",
    topic: "One-vs-Rest Probabilities",
    question: "What does each OVR model output?",
    options: [
      "A sigmoid probability qk for its class",
      "A covariance matrix",
      "A single continuous regression target",
      "A guaranteed joint probability distribution"
    ],
    correctAnswer: "A sigmoid probability qk for its class",
    explanation: "Each binary classifier produces a sigmoid-based class score/probability.",
    difficulty: "easy"
  },
  {
    id: "l15-q26",
    lecture: "Lecture 15",
    topic: "One-vs-Rest Prediction",
    question: "How is the final class chosen in the basic OVR prediction rule?",
    options: [
      "Choose the class with the highest score",
      "Choose the class with the lowest score",
      "Average all classes and round down",
      "Choose a class randomly"
    ],
    correctAnswer: "Choose the class with the highest score",
    explanation: "The lecture defines the prediction as arg max over the class scores qk.",
    difficulty: "easy"
  },
  {
    id: "l15-q27",
    lecture: "Lecture 15",
    topic: "OVR Probability Limitation",
    question: "What is a limitation of raw OVR outputs?",
    options: [
      "They do not naturally sum to 1 across classes",
      "They can never produce probabilities",
      "They always sum exactly to 1",
      "They cannot be compared"
    ],
    correctAnswer: "They do not naturally sum to 1 across classes",
    explanation: "Each OVR classifier is trained independently, so the resulting class scores need not form one joint probability distribution.",
    difficulty: "medium"
  },
  {
    id: "l15-q28",
    lecture: "Lecture 15",
    topic: "OVR Normalization",
    question: "How can OVR scores be normalized into a probability-like distribution according to the lecture?",
    options: [
      "P(y = k) = qk / Σj qj",
      "P(y = k) = qk²",
      "P(y = k) = 1 − qk",
      "P(y = k) = log(qk)"
    ],
    correctAnswer: "P(y = k) = qk / Σj qj",
    explanation: "The lecture shows normalization by dividing each OVR score by the sum of all class scores.",
    difficulty: "medium"
  },
  {
    id: "l15-q29",
    lecture: "Lecture 15",
    topic: "OVR Use Cases",
    question: "When does the lecture suggest OVR can be useful?",
    options: [
      "When simple reduction or class-specific weighting is desired",
      "Only when classes are continuous",
      "Only when all probabilities must naturally sum to 1",
      "Only for unsupervised learning"
    ],
    correctAnswer: "When simple reduction or class-specific weighting is desired",
    explanation: "OVR is presented as useful when a simple binary reduction or class-specific weighting is valuable.",
    difficulty: "medium"
  },
  {
    id: "l15-q30",
    lecture: "Lecture 15",
    topic: "Softmax Model",
    question: "What is the class-specific linear score in Softmax regression?",
    options: [
      "zik = βkᵀxi",
      "zik = xi − βk",
      "zik = βk / xi",
      "zik = xi² + βk"
    ],
    correctAnswer: "zik = βkᵀxi",
    explanation: "Each class k has its own parameter vector βk producing a linear logit score.",
    difficulty: "easy"
  },
  {
    id: "l15-q31",
    lecture: "Lecture 15",
    topic: "Softmax Function",
    question: "Which formula gives the Softmax probability for class k?",
    options: [
      "p̂ik = e^(zik) / Σj e^(zij)",
      "p̂ik = zik / Σj zij",
      "p̂ik = 1 − e^(zik)",
      "p̂ik = e^(−zik)"
    ],
    correctAnswer: "p̂ik = e^(zik) / Σj e^(zij)",
    explanation: "Softmax exponentiates each class score and divides by the sum over all class scores.",
    difficulty: "easy"
  },
  {
    id: "l15-q32",
    lecture: "Lecture 15",
    topic: "Softmax Probability Properties",
    question: "What important property do Softmax class probabilities have?",
    options: [
      "They form a joint probability distribution that sums to 1",
      "They are independent and never normalized",
      "They can be negative",
      "They always equal 0 or 1"
    ],
    correctAnswer: "They form a joint probability distribution that sums to 1",
    explanation: "Softmax explicitly normalizes all class scores together, so class probabilities sum to one.",
    difficulty: "easy"
  },
  {
    id: "l15-q33",
    lecture: "Lecture 15",
    topic: "Softmax Computation Steps",
    question: "What is the first mathematical step in the Softmax calculation shown for K = 3?",
    options: [
      "Compute the logits z_i1, z_i2, z_i3",
      "Take the logarithm of the probabilities",
      "Choose the class immediately",
      "Compute the cross-entropy before probabilities"
    ],
    correctAnswer: "Compute the logits z_i1, z_i2, z_i3",
    explanation: "The lecture first computes the three linear scores before exponentiation and normalization.",
    difficulty: "easy"
  },
  {
    id: "l15-q34",
    lecture: "Lecture 15",
    topic: "Softmax Computation Steps",
    question: "After exponentiating the Softmax logits, what is the next step?",
    options: [
      "Sum the exponentiated scores",
      "Take their differences",
      "Discard the largest score",
      "Set all values to zero"
    ],
    correctAnswer: "Sum the exponentiated scores",
    explanation: "The denominator S = Σj e^(zij) is computed before dividing each exponentiated score by S.",
    difficulty: "easy"
  },
  {
    id: "l15-q35",
    lecture: "Lecture 15",
    topic: "Multiclass Cross-Entropy",
    question: "How is the per-example multiclass cross-entropy written using one-hot targets yik?",
    options: [
      "Li = −Σk yik log(p̂ik)",
      "Li = Σk(yik + p̂ik)",
      "Li = Σk p̂ik²",
      "Li = −Σk yik p̂ik"
    ],
    correctAnswer: "Li = −Σk yik log(p̂ik)",
    explanation: "The one-hot target selects the log probability of the true class.",
    difficulty: "easy"
  },
  {
    id: "l15-q36",
    lecture: "Lecture 15",
    topic: "One-Hot Target Encoding",
    question: "In the multiclass cross-entropy setup, what does yik equal for the true class?",
    options: [
      "1",
      "0",
      "k",
      "−1"
    ],
    correctAnswer: "1",
    explanation: "The one-hot encoding assigns 1 to the true class and 0 to all other classes.",
    difficulty: "easy"
  },
  {
    id: "l15-q37",
    lecture: "Lecture 15",
    topic: "Dataset Multiclass Objective",
    question: "What is the dataset objective for Softmax multiclass classification?",
    options: [
      "J(β) = −(1/n) Σi Σk yik log(p̂ik)",
      "J(β) = (1/n) Σi Σk(yik + p̂ik)",
      "J(β) = Σi βk² only",
      "J(β) = Σi max(p̂ik)"
    ],
    correctAnswer: "J(β) = −(1/n) Σi Σk yik log(p̂ik)",
    explanation: "The lecture uses the average multiclass cross-entropy over all observations and classes.",
    difficulty: "medium"
  },
  {
    id: "l15-q38",
    lecture: "Lecture 15",
    topic: "OVR vs Softmax",
    question: "Which statement best distinguishes OVR from Softmax?",
    options: [
      "OVR trains independent binary models, while Softmax learns joint class probabilities",
      "OVR always produces joint probabilities, while Softmax does not",
      "Both methods train exactly one binary classifier",
      "Softmax is only for binary classification"
    ],
    correctAnswer: "OVR trains independent binary models, while Softmax learns joint class probabilities",
    explanation: "This is the central comparison made in the lecture.",
    difficulty: "medium"
  },
  {
    id: "l15-q39",
    lecture: "Lecture 15",
    topic: "Multiclass Method Selection",
    question: "When does the lecture recommend Softmax over OVR?",
    options: [
      "When classes are mutually exclusive and joint probabilities are desired",
      "When class-specific weighting is the main goal",
      "When there are no labels",
      "When only regression is required"
    ],
    correctAnswer: "When classes are mutually exclusive and joint probabilities are desired",
    explanation: "Softmax is the preferred formulation when mutually exclusive classes should share a normalized probability distribution.",
    difficulty: "easy"
  },
  {
    id: "l15-q40",
    lecture: "Lecture 15",
    topic: "Logistic Regression Assumptions",
    question: "Which is listed as an assumption for the logistic-regression setup?",
    options: [
      "Observations are independent",
      "Targets must be continuous",
      "Classes must overlap perfectly",
      "Features must all be identical"
    ],
    correctAnswer: "Observations are independent",
    explanation: "The lecture lists independence of observations as one of the logistic-regression assumptions.",
    difficulty: "easy"
  },
  {
    id: "l15-q41",
    lecture: "Lecture 15",
    topic: "Logistic Regression Assumptions",
    question: "What relationship is assumed between continuous predictors and the log-odds?",
    options: [
      "A linear relationship",
      "A quadratic relationship only",
      "No relationship",
      "An exponential relationship only"
    ],
    correctAnswer: "A linear relationship",
    explanation: "The lecture assumes continuous predictors have a linear relationship with the log-odds.",
    difficulty: "easy"
  },
  {
    id: "l15-q42",
    lecture: "Lecture 15",
    topic: "Multicollinearity Assumption",
    question: "What feature condition is assumed in the logistic-regression model?",
    options: [
      "There is no severe multicollinearity among features",
      "All features are exact duplicates",
      "All features must have zero variance",
      "Features must be perfectly correlated"
    ],
    correctAnswer: "There is no severe multicollinearity among features",
    explanation: "Severe multicollinearity can make coefficient estimates unstable, so the lecture lists its absence as an assumption.",
    difficulty: "easy"
  },
  {
    id: "l15-q43",
    lecture: "Lecture 15",
    topic: "Binary and Multiclass Class Targets",
    question: "Which target structure is appropriate for the binary logistic-regression formulation?",
    options: [
      "Two possible classes",
      "A continuous real-valued target only",
      "An unlimited number of overlapping classes",
      "No target variable"
    ],
    correctAnswer: "Two possible classes",
    explanation: "Binary logistic regression models a binary outcome, while the multiclass sections extend the idea to multiple exclusive classes.",
    difficulty: "easy"
  },
  {
    id: "l15-q44",
    lecture: "Lecture 15",
    topic: "Nonlinear Feature Maps",
    question: "How can logistic regression represent nonlinear decision boundaries while remaining linear in parameters?",
    options: [
      "By adding transformed polynomial features while keeping the score linear in coefficients",
      "By replacing the sigmoid with K-Means",
      "By removing all features",
      "By making the coefficients nonlinear functions of themselves"
    ],
    correctAnswer: "By adding transformed polynomial features while keeping the score linear in coefficients",
    explanation: "Feature maps can introduce terms such as x² while the model remains linear in its parameters.",
    difficulty: "medium"
  },
  {
    id: "l15-q45",
    lecture: "Lecture 15",
    topic: "Polynomial Feature Maps",
    question: "Which score is an example of a logistic model using polynomial features?",
    options: [
      "z = β0 + β1x + β2x² + ...",
      "z = x only",
      "z = β0/x",
      "z = sin(βx) only"
    ],
    correctAnswer: "z = β0 + β1x + β2x² + ...",
    explanation: "Polynomial feature transformations create nonlinear boundaries in the original feature space.",
    difficulty: "easy"
  },
  {
    id: "l15-q46",
    lecture: "Lecture 15",
    topic: "Nonlinear Decision Boundaries",
    question: "Why can polynomial features create nonlinear decision boundaries in the original feature space?",
    options: [
      "The transformed score remains linear in parameters but nonlinear in the original inputs",
      "The parameters become random variables",
      "The target becomes continuous",
      "Softmax is automatically applied"
    ],
    correctAnswer: "The transformed score remains linear in parameters but nonlinear in the original inputs",
    explanation: "A polynomial feature such as x² changes the geometry of the boundary in the original feature space.",
    difficulty: "medium"
  },
  {
    id: "l15-q47",
    lecture: "Lecture 15",
    topic: "Regularization with Nonlinear Features",
    question: "Why does the lecture recommend regularization when using polynomial features?",
    options: [
      "To reduce the risk of overfitting from increased feature complexity",
      "To guarantee a linear boundary",
      "To remove the sigmoid",
      "To force every coefficient to increase"
    ],
    correctAnswer: "To reduce the risk of overfitting from increased feature complexity",
    explanation: "Polynomial expansions increase model flexibility, so L1 or L2 regularization can help control complexity.",
    difficulty: "easy"
  },
  {
    id: "l15-q48",
    lecture: "Lecture 15",
    topic: "Complete Logistic Training Pipeline",
    question: "Which sequence matches the complete training story in Lecture 15?",
    options: [
      "Initialize β → compute scores → compute probabilities → compute loss → compute gradient → update β → repeat",
      "Compute gradient → initialize β → compute loss → stop",
      "Compute probabilities → remove features → deploy immediately",
      "Choose classes → compute PCA → stop"
    ],
    correctAnswer: "Initialize β → compute scores → compute probabilities → compute loss → compute gradient → update β → repeat",
    explanation: "The lecture summarizes training as a repeated forward-loss-gradient-update cycle until convergence.",
    difficulty: "easy"
  },
  {
    id: "l15-q49",
    lecture: "Lecture 15",
    topic: "Convergence",
    question: "When does the logistic-regression training loop stop according to the complete training story?",
    options: [
      "When the optimization reaches convergence",
      "After exactly one update",
      "When every feature becomes zero",
      "When the loss becomes negative infinity"
    ],
    correctAnswer: "When the optimization reaches convergence",
    explanation: "The lecture ends the iterative training loop by repeating until convergence.",
    difficulty: "easy"
  },
  {
    id: "l15-q50",
    lecture: "Lecture 15",
    topic: "Gradient and Learning Rate Interaction",
    question: "Suppose the gradient magnitude becomes larger while α stays fixed. What happens to the gradient-descent step magnitude?",
    options: [
      "It becomes larger",
      "It becomes smaller",
      "It becomes exactly zero",
      "It becomes independent of the gradient"
    ],
    correctAnswer: "It becomes larger",
    explanation: "The update magnitude depends on α multiplied by the gradient magnitude.",
    difficulty: "medium"
  },
  {
    id: "l15-q51",
    lecture: "Lecture 15",
    topic: "Gradient Sign Interpretation",
    question: "For a feature value xij > 0, what does a positive term (p̂i − yi)xij imply about the gradient contribution?",
    options: [
      "It contributes a positive gradient for βj",
      "It contributes a negative gradient for βj",
      "It contributes zero regardless of prediction",
      "It reverses the feature sign"
    ],
    correctAnswer: "It contributes a positive gradient for βj",
    explanation: "With xij positive, the sign of the gradient contribution matches the sign of p̂i − yi.",
    difficulty: "medium"
  },
  {
    id: "l15-q52",
    lecture: "Lecture 15",
    topic: "Batch Averaging",
    question: "Why does Batch GD divide the summed logistic-regression gradient by n?",
    options: [
      "To compute the average contribution across all observations",
      "To remove the target variable",
      "To convert the model into OVR",
      "To make the sigmoid linear"
    ],
    correctAnswer: "To compute the average contribution across all observations",
    explanation: "The 1/n factor turns the sum of per-example gradients into the average gradient.",
    difficulty: "easy"
  },
  {
    id: "l15-q53",
    lecture: "Lecture 15",
    topic: "Softmax Joint Probability",
    question: "Why is Softmax particularly appropriate for mutually exclusive classes?",
    options: [
      "It distributes one total probability mass across all classes",
      "It trains K independent binary models",
      "It allows every class to be simultaneously true",
      "It does not normalize scores"
    ],
    correctAnswer: "It distributes one total probability mass across all classes",
    explanation: "Softmax probabilities jointly sum to 1, matching a mutually exclusive multiclass outcome.",
    difficulty: "medium"
  },
  {
    id: "l15-q54",
    lecture: "Lecture 15",
    topic: "OVR Class-Specific Weighting",
    question: "Which feature of OVR can be useful when classes require different treatment?",
    options: [
      "Class-specific weighting",
      "Guaranteed joint probability calibration",
      "Automatic dimensionality reduction",
      "Removal of all feature interactions"
    ],
    correctAnswer: "Class-specific weighting",
    explanation: "The lecture explicitly mentions class-specific weighting as one reason to use OVR.",
    difficulty: "easy"
  }
];