---
title: Unit-1 Introduction and Regression
layout: page
permalink: /teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-1/
hide_title: true
parent: Foundations-of-Machine-Learning
grand_parent: Foundations-of-Computing
math: true
wide: false
---

<h1 align="center"> Unit-1: Introduction and Regression</h1>

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color: #cc33cc;">The Beginning: Why Machine Learning Exists</strong></h2>

Imagine a world where every useful rule can be written by hand:

- A rule for classifying emails
    
- A rule for driving a car
    
- A rule for detecting diseases
    
- A rule for recognizing speech 


Very soon, we realize something powerful:

> **Most real-world problems are too complex to hand-program.**

The boundaries are fuzzy, patterns are hidden, and human intuition is insufficient.

Thus the fundamental need arises:

> **Can a system learn these rules directly from experience?**

This is the birth of **machine learning** — the science of building programs that improve by learning from data.

But to learn systematically, we must start by defining what a _good_ learning problem is.

---
---


<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color: #cc33cc;">Well-Posed Learning Problems</strong></h2>

A learning problem is _well-posed_ when three ingredients are clearly defined:

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color: #cc33cc;">Component 1 — Task (T)</strong></h3>

What must the system learn to do?

Examples:

- Classify emails as spam or not spam
    
- Predict house prices
    
- Recommend movies
    

This is the **goal** of the learner.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Component 2 — Performance Measure (P)</strong>
</h3>

How do we know if it is learning?

Some common performance measures:

- Accuracy
    
- Error rate
    
- Mean squared error
    
- Precision/recall
    
- F1 score
    

The learning system must know _what it is being judged on_.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Component 3 — Training Experience (E)</strong>
</h3>

Where does the learner get information?

- Labeled data
    
- Unlabeled data
    
- Rewards or penalties
    
- Past cases
    
- Simulated environments
    

Experience shapes improvement.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Formal Definition</strong>
</h3>

A learning problem is well-posed if:

> **A system improves at task T, with respect to performance measure P, based on experience E.**

This clean, three-part frame is the compass guiding all ML applications.


---
---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Designing a Learning System</strong>
</h2>

Once we have a well-posed problem, we step into the craft of **designing a learning system**.  
This design has four interconnected elements.

---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Choosing the Hypothesis Space</strong>
</h2>

When we design a learning system, one of the most important decisions — often invisible to beginners — is choosing the **hypothesis space**.

The hypothesis space is simply:

> **The set of all possible models the learner is allowed to consider.**

It is the _universe_ of candidate solutions.

---

<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why This Matters</strong>
</h2>

Imagine you are searching for treasure.  
If you search only the backyard, you'll never find treasure buried in the mountains.  
But if you decide to search the entire earth, you’ll become overwhelmed.

Machine learning faces the same dilemma:

- Search too _narrowly_ → you miss the true solution.
    
- Search too _widely_ → you waste time, get confused, or overfit noise.
    

Thus the hypothesis space must be **just right** — expressive enough to capture the truth, but constrained enough to avoid nonsense.

---

<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Examples of Hypothesis Spaces</strong>
</h2>

Each learning algorithm chooses a different “shape” of functions it can learn.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Linear Models</strong>
</h4>


These models assume the world behaves like a line or plane:

$$  
h(x) = w_0 + w_1 x_1 + \dots + w_n x_n  
$$

Pros:

- Fast
    
- Easy to interpret
    
- Good when relationships are roughly straight-line
    

Cons:

- Cannot model curves or complex interactions
    
- Too simple for many real-world tasks
    

Linear models live in a **small hypothesis space**.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Decision Trees</strong>
</h4>

Decision trees break the space using yes/no rules:

- “Is age > 30?”
    
- “Is income < ₹50k?”
    
- “Is color = red?”
    

Each path through the tree is a simple decision-making route.

Pros:

- Interpretability
    
- Works with categorical features
    

Cons:

- Can grow too complex
    
- Highly sensitive to noise
    

Hypothesis space can be **very large** if trees grow deep.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Neural Networks</strong>
</h4>


Neural networks allow layers of computation:

- Hidden neurons
    
- Activation functions
    
- Deep hierarchies
    

They can represent an enormous variety of functions, including extremely complex ones.

Pros:

- Can approximate _any_ function
    
- Good at learning patterns from images, sound, text
    

Cons:

- Easy to overfit
    
- Requires large data
    

This is a **massive hypothesis space** — almost too powerful if not controlled.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Support Vector Machines</strong>
</h4>

SVMs find separating boundaries — hyperplanes — in higher-dimensional spaces.  
With kernels, they can learn curves, circles, spirals, and more.

Pros:

- Very powerful with kernels
    
- Elegant mathematical foundation
    

Cons:

- Harder to interpret
    
- Kernel choice matters
    

Hypothesis space depends on the kernel:

- Linear kernel → limited
    
- RBF kernel → extremely flexible
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Probabilistic Models</strong>
</h4>

These models assume the data was generated by a probability process:

- Naive Bayes
    
- Gaussian mixtures
    
- Hidden Markov models
    

They search among functions that **represent distributions**.

Pros:

- Uncertainty built-in
    
- Natural interpretation
    

Cons:

- Assumptions may be violated
    
- Can be too rigid or too loose
    

Hypothesis space depends on model assumptions.

---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Balance: Underfitting vs. Overfitting</strong>
</h2>

Selecting a hypothesis space is a balancing act.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Too Simple → Underfitting</strong>
</h4>

The model cannot capture the true relationship.

- Linear model trying to fit a sine wave
    
- Shallow decision tree for a complex dataset
    
- Low-degree polynomial for highly curved data
    

Symptoms:

- High bias
    
- Poor performance even on training data
    

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Too Complex → Overfitting</strong>
</h4>

The model captures patterns that aren’t real — it memorizes noise.

- Deep trees
    
- Too many neural network layers
    
- Very flexible kernels
    
- High-degree polynomials
    

Symptoms:

- Very low training error
    
- Very poor test error
    
- Model becomes unstable
    

---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">How ML Designers Think About Hypothesis Space</strong>
</h2>

Choosing the hypothesis space is guided by:

- **Domain knowledge**  
    (“Stock prices rarely follow straight lines — use a flexible model.”)
    
- **Data quantity**  
    (Small datasets demand simpler hypothesis spaces.)
    
- **Risk of overfitting**  
    (More complexity → more danger.)
    
- **Computational cost**  
    (Large hypothesis spaces require more processing.)
    
- **Interpretability needs**  
    (Doctors need explainable models; finance may require transparency.)
    

This choice often determines whether learning is possible at all.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">A Simple Illustration (Mini Example)</strong>
</h3>


Suppose you want to model temperature throughout the day.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Option A: Linear Model (Too simple)</strong>
</h4>

A line cannot capture morning rise, noon peak, evening drop.

Underfits badly.
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Option B: 10th-degree Polynomial (Too complex)</strong>
</h4>

It wiggles through every point, capturing noise (wind gusts, random fluctuations).

Overfits disastrously.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Option C: Smooth curve (like a sinusoidal function)</strong>
</h4>

Captures essential shape — morning rise, gradual fall — without insanity.

**This is the ideal hypothesis space.**

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Summary</strong>
</h3>


Choosing the hypothesis space is one of the most critical design decisions in machine learning.

It defines:

- What the learner _can_ learn
    
- What patterns are considered plausible
    
- How vulnerable the model is to noise
    
- How generalizable the final solution will be
    

A good hypothesis space is not the biggest or the smallest —  
it is the one that reflects a realistic, balanced understanding of the problem.


---
---

<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Choosing the Target Function (Unknown)</strong>
</h2>


When we study machine learning, we often talk about _learning a function_ — as if there is some hidden mathematical rule out there, waiting for us to uncover it.

But what exactly is this “rule”?  
Why do we call it a _target function_?  
And why do we say it is _unknown_?

To understand this, we need to look at the world from the perspective of a machine learning algorithm.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The World Always Has a Hidden Mechanism</strong>
</h3>


Every real-world phenomenon has some mechanism behind it.

- Whether an email is spam or not
    
- Whether a patient has a disease
    
- Whether a customer will buy a product
    
- What is the price of a house
    
- Whether the weather will be sunny
    

In theory, there is always a **true underlying process** that determines the output from the input — even if that process is messy, probabilistic, or partly random.

We call this hidden process the **target function**, denoted:

$$  
f(x)  
$$

It is the true mapping from inputs to outputs.

- In spam detection:  
    (f(x)) decides if this email _is truly_ spam
    
- In disease diagnosis:  
    (f(x)) determines if the patient _actually has_ the disease
    
- In regression:  
    (f(x)) produces the real-world numeric value
    

This function exists, whether or not we understand it.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Target Function Is Hidden From Us</strong>
</h3>


We never get to see this target function directly.

For example:

- We don’t see the exact biological equation mapping symptoms → disease
    
- We don’t know the true rule mapping pixels → “cat” or “dog”
    
- We don’t know the true psychological reason behind buying behavior
    
- We don’t know the exact financial mechanism behind house pricing
    

What we observe is only a **limited set of examples**, like shadows on a wall.

We see:

- Inputs (x)
    
- Outputs (y)
    

But never the underlying rule (f(x)).

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Machine Learning Is the Art of Approximating f(x)</strong>
</h3>


Since the true function is hidden (unknown), we attempt to build an **approximation**, called the hypothesis:

$$  
h(x)  
$$

This hypothesis is the model’s guess of what (f(x)) might be.

The goal is:

$$  
h(x) \approx f(x)  
$$

But we will never expect **perfect equality** because:

- The training data is finite
    
- The world is noisy
    
- Labels may be imperfect
    
- True relationships may be extremely complex
    
- Real processes may depend on hidden variables not present in the data
    

Thus, we aim for **best approximation**, not perfection.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why We Need to Choose a Target Function Form</strong>
</h3>


Although the true (f(x)) is unknown, we must _choose_ what kind of relationship we believe exists.

This is not guessing blindly; it’s guided by domain knowledge.

Examples:

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Linear regression assumption</strong>
</h4>


We assume:

$$  
f(x) \approx w^T x + b  
$$

This means we believe:

- The underlying pattern is mostly linear
    
- Noise exists, but trend is straight
    
- Inputs combine additively
    

For some problems, this is very reasonable.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Neural network assumption</strong>
</h4>


We assume:

$$  
f(x) \approx h(x) = \sigma(W_2, \sigma(W_1 x))  
$$

That is:

- The target function can be nonlinear
    
- It may have hierarchical structure
    
- Complex interactions exist
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Decision tree assumption</strong>
</h4>


We assume:

$$  
f(x) \text{ can be expressed as a sequence of if–then rules}  
$$

This means:

- The world can be split using yes/no questions
    
- Some features have threshold behavior
    
- Interpretability is important
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">kNN assumption</strong>
</h4>


We assume:

$$  
f(x) \approx f(x') \quad \text{if } x \text{ is close to } x'  
$$

This is a very human view of learning:

> “Similar cases have similar outcomes.”

---

In each case, we are making an educated **assumption** about the shape of the target function.

This assumption defines what kind of hypothesis the model can produce.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Learner Does Not Choose f(x); It Chooses h(x)</strong>
</h3>


Since we cannot see the true function (f(x)), the model is forced to:

- Choose a hypothesis space (linear? tree? neural network?)
    
- Search within that space
    
- Find the best hypothesis (h(x)) based on training examples
    

This gives a new perspective:

- **The target function exists independently of our model.**
    
- **The hypothesis is our best attempt to approximate it.**
    

The quality of learning depends on:

- How expressive our hypothesis space is
    
- How well our algorithm searches it
    
- How much data we have
    
- How noisy the real world is
    

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why This Matters in Machine Learning</strong>
</h3>
Understanding the target function concept helps us see the entire ML process clearly:

- Overfitting means:  
    ( h(x) ) matches training data too closely, but not ( f(x) )
    
- Underfitting means:  
    ( h(x) ) is too simple to match ( f(x) )
    
- Good generalization means:  
    ( h(x) $\approx$  f(x) ) on unseen data
    

The moment we accept that (f(x)) is hidden and only approximable, machine learning stops being a guessing game and becomes a controlled, principled process.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Numerical Example (Simple Illustration)</strong>
</h3>

Suppose the true relationship between study hours and exam score is:

$$  
f(x) = 10x + 20  
$$

But we **don’t know** this function.

We only observe 3 sample points:

- (1 hour, 35 marks)
    
- (2 hours, 40 marks)
    
- (3 hours, 48 marks)
    

Due to noise, the observed outputs do not match the perfect line (10x + 20).

Now suppose we choose a linear model:

$$  
h(x) = \theta_0 + \theta_1 x  
$$

We fit it to the observed data and get:

- $(\theta_0 = 22.0)$
    
- $(\theta_1 = 8.5)$
    

So:

$$  
h(x) = 22.0 + 8.5x  
$$

This is clearly **not the true function**, but:

- It captures the upward trend
    
- It generalizes reasonably
    
- It approximates (f(x)) as well as possible given limited data
    

Thus:

$$  
h(x) \approx f(x)  
$$

This is the essence of machine learning.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Final Summary</strong>
</h3>


- The target function (f(x)) represents the true relationship in the world.
    
- We never see (f(x)) directly — only input–output examples.
    
- Learning is the process of constructing a hypothesis (h(x)) that approximates (f(x)).
    
- The chosen hypothesis space limits what kinds of functions (h(x)) can represent.
    
- Understanding (f(x)) vs (h(x)) is essential to reasoning about underfitting, overfitting, generalization, and model selection.
    

---
---

<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Choosing a Learning Algorithm</strong>
</h2>


Choosing a learning algorithm is like choosing _how_ to search for treasure in a vast landscape.

- The **hypothesis space** tells us _where_ the treasure might be.
    
- The **learning algorithm** tells us _how_ we search for it.
    

Different learning algorithms use different strategies, assumptions, and tools for navigating the hypothesis space. Some crawl slowly but safely, some jump around cleverly, and some follow gradients like mountain climbers.

Let us explore what “choosing a learning algorithm” truly means.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Learning Algorithm Is a Search Strategy</strong>
</h3>


Once we define a hypothesis space — say, all linear functions, or all neural networks with 3 layers — we still need a way to find the **best** hypothesis inside it.

The core idea:

> **Learning is a search for the hypothesis that best fits the data.**

Let the set of all possible hypotheses be:

$$  
H = { h_1, h_2, h_3, \dots }  
$$

We want to find:

$$  
h^* = \arg\min_{h \in H} ; error(h)  
$$

But simply enumerating all hypotheses is impossible — hypothesis spaces are often infinite.

So we need **algorithms**.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why Different Algorithms Exist</strong>
</h3>


Different learning algorithms exist because different hypothesis spaces require different search strategies.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Decision trees need ID3 / C4.5</strong>
</h4>


These algorithms greedily choose the feature with maximum information gain.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Neural networks need backpropagation</strong>
</h4>


A gradient-based method that tunes millions of weights.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">SVMs need quadratic or SMO optimization</strong>
</h4>


Specialized solvers handle constraints and margins.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">kNN doesn’t “train”</strong>
</h4>


Its algorithm is a simple lookup structure: “store the data.”

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Bayesian models need probability computations</strong>
</h4>


They derive hypotheses by maximizing posterior probability.

Thus, the choice of algorithm is inseparable from the representation and hypothesis space.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Algorithms Search Using Optimization Principles</strong>
</h3>


Most modern algorithms are essentially **optimization engines**.

They start with some initial guess (e.g., random weights) and iteratively move toward a solution minimizing a loss function:

$$  
J(\theta)  
$$

The goal:

$$  
\theta^{*} = \arg\min_\theta J(\theta)  
$$

This might represent:

- Sum of squared errors (linear regression)
    
- Cross-entropy loss (logistic regression, neural nets)
    
- Margin-based loss (SVMs)
    
- Negative log-likelihood (probabilistic models)
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Gradient Descent — the Universal Workhorse</strong>
</h4>


Many algorithms rely on **gradient descent** because it gives a simple recipe:

> “Follow the direction of steepest descent on the error surface.”

The update rule is:

$$  
\theta := \theta - \alpha \nabla_\theta J(\theta)  
$$

Where:

- $( \theta )$ are model parameters
    
- $( \alpha )$ is the learning rate
    
- $( \nabla_\theta J(\theta) )$ is the gradient
    

This lets the model move through a high-dimensional landscape, step by step, toward a good solution.

It works beautifully for:

- Linear regression
    
- Logistic regression
    
- Neural networks
    
- Many deep learning models
    

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Greedy Algorithms — fast but approximate</strong>
</h3>
Some hypothesis spaces cannot support smooth gradient surfaces.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Decision Trees:</strong>
</h4>

Algorithms like **ID3** and **C4.5** make greedy, local decisions:

- Pick the feature that splits the data best
    
- Repeat recursively
    
- Stop when purity is high
    

These algorithms don’t guarantee the _global_ best tree — but they produce good trees quickly.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Probabilistic Algorithms — reasoning under uncertainty</strong>
</h3>

Some algorithms choose the best hypothesis by calculating **probabilities**.

Examples:

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Naive Bayes</strong>
</h4>


Find hypothesis $( h \in H )$ that maximizes:

$$  
P(h \mid Data)  
$$

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Bayesian Networks</strong>
</h4>

Use structured probability models.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Expectation–Maximization (EM)</strong>
</h4>

Refines hidden variable models by alternating between:

1. **Expectation step**: infer hidden data
    
2. **Maximization step**: update parameters
    

Probabilistic algorithms are crucial when uncertainty matters deeply.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Instance-Based Algorithms — no training at all</strong>
</h3>
Algorithms like kNN flip the idea of learning:

- No weights
    
- No fitting
    
- No optimization
    

They simply **store** all training examples.

During prediction:

> Find the nearest stored instances → make a decision.

Learning happens “on demand” during prediction.

This simplicity makes kNN powerful for data with strong _local_ structure.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Algorithm Choice Depends on the Nature of the Problem</strong>
</h3>
Different real-world problems demand different algorithmic behaviors.

Let’s examine how various aspects influence the choice.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Data Size</strong>
</h4>


- **Huge datasets** → linear models, SGD, shallow neural nets
    
- **Small datasets** → decision trees, SVMs, probabilistic models
    

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Dimensionality</strong>
</h4>

- High-dimensional data (text, images) → SVM with linear kernel, deep networks
    
- Low-dimensional data → kNN, decision trees
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Interpretability Needs</strong>
</h4>

- Doctors need explanations → Logistic regression, decision trees
    
- No need for interpretability → Deep nets, boosted trees
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Noise Tolerance</strong>
</h4>

- Noisy data → Regularized linear models, SVMs
    
- Low noise → Decision trees, nearest-neighbor
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Computational Constraints</strong>
</h4>

- Neural networks require GPUs
    
- SVMs may be slow for large datasets
    
- Linear models are extremely fast
    

Thus, choosing the algorithm is a careful engineering decision.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Numerical Example — Choosing a Learning Algorithm</strong>
</h3>

A bank wants to predict loan defaulters using:

- Income
    
- Credit history
    
- Debt-to-income ratio
    
- Age
    

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Option A: Decision Tree</strong>
</h4>

- Pros: easy to interpret
    
- Cons: may overfit small datasets
    

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Option B: Logistic Regression</strong>
</h4>

- Pros: fast, interpretable
    
- Cons: limited to linear boundaries
    

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Option C: SVM with RBF Kernel</strong>
</h4>

- Pros: strong performance
    
- Cons: slow on large datasets
    

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Option D: Neural Network</strong>
</h4>

- Pros: handles nonlinear interactions
    
- Cons: needs much data, tuning, compute
    

Assume the dataset has:

- 5,000 examples
    
- Moderate noise
    
- Requirement: explainability for regulation
    

Best Choice: Logistic Regression or a small Decision Tree  
because they offer a balance between accuracy and interpretability.

This illustrates how algorithm choice depends on practical constraints.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Final Summary</strong>
</h3>

Choosing the learning algorithm is choosing how the system will search the hypothesis space.  
It determines:

- How the model learns
    
- How fast it learns
    
- How much data it needs
    
- How complex a function it can represent
    
- How well it generalizes
    

Every algorithm carries unique assumptions, strengths, and weaknesses.

A good ML designer understands the landscape and chooses the algorithm whose search strategy matches the structure of the problem.

---
---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Choosing a Representation for Input</strong>
</h2>

When we look at a dataset, we often focus on the algorithm:  
“Should I use logistic regression? SVM? Neural networks?”

But before any algorithm even begins learning, something far more fundamental decides whether learning is even possible.

That fundamental element is representation.

Representation is the language in which the data speaks to the algorithm.

If the language is poor, distorted, or incomplete, even the most powerful algorithm becomes helpless.  
If the language is rich, precise, and meaningful, even a simple algorithm becomes surprisingly effective.

Let’s unfold why.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Algorithm Sees the World Only Through Representation</strong>
</h3>

Consider an image of a handwritten digit “5”.

Your eyes perceive:

- Curves
    
- Shape
    
- Thickness
    
- Orientation
    

But to a machine learning algorithm, the same “5” may be represented as:

- 784 grayscale pixel intensities (MNIST)
    
- A vector of edge orientations
    
- A compressed embedding from a convolutional neural network
    

Each representation tells a different story about the same image.

Thus:

> Representation determines what the model can see.  
> What it cannot see, it cannot learn.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Features Are the “Inputs” to the Learning Algorithm</strong>
</h3>

Every input is converted into measurable properties called features.

These features might be:

- Numeric (age, income, height)
    
- Categorical (color = red/blue/green)
    
- Binary (spam/not spam)
    
- Structured (trees, graphs)
    
- Sequences (sentences)
    
- Images (pixels)
    
- Audio (waveforms, MFCCs)
    

The learner receives only these features.

So the question becomes:

> Which features best capture the essence of the problem?

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Good Representations Make Learning Easy</strong>
</h3>

A good representation:

- Simplifies the underlying pattern
    
- Makes the target function less complicated
    
- Makes the hypothesis space effective
    
- Reduces the burden on the learning algorithm
    

Consider the classic example from Tom Mitchell:

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Learning to recognize days with high sales</strong>
</h3>

Poor representation:

- “Is it a holiday? yes/no”
    
- “Number of customers”
    

Good representation:

- Trend information (moving averages)
    
- Day-of-week patterns
    
- Special event encoding
    
- Weather encoding
    

Better features → clearer patterns → easier learning.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Bad Representations Make Learning Impossible</strong>
</h3>

Examples:

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Failure Case 1 — Wrong Encoding</strong>
</h4>

Representing a nominal feature (e.g., “color”) as:

- red → 1
    
- blue → 2
    
- green → 3
    

This accidentally tells the model that “green > blue > red,”  
which is meaningless.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Failure Case 2 — Missing Key Information</strong>
</h4>

Trying to predict house prices but missing:

- Location
    
- Size
    
- Number of bedrooms
    

The model becomes blind.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Failure Case 3 — Redundant and Noisy Features</strong>
</h4>

Many irrelevant columns → higher dimensionality → curse of dimensionality.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Choosing a Representation is Choosing a Worldview</strong>
</h3>

Different algorithms expect different kinds of input:

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Linear Models</strong>
</h4>

Expect data in a nice tabular form:

- Numeric columns
    
- Clean normalization
    
- No weird distributions
    

They assume straight-line separability.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Decision Trees</strong>
</h4>

Are flexible with representation:

- Handle categories well
    
- Don’t need scaling
    
- Can handle missing values
    

They prefer features that split the data meaningfully.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Neural Networks</strong>
</h4>

Can digest:

- Images
    
- Sound
    
- Text
    
- Sensor data
    

But they often require dense numeric vectors.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">SVMs</strong>
</h4>

Work best with:

- Properly scaled continuous features
    
- Kernel-transformed inputs
    

They hate:

- High redundancy
    
- Non-standard scales
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">kNN</strong>
</h4>

Depends heavily on distance representation:

- If distance is meaningful → works well
    
- If poorly scaled → fails completely

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Feature Engineering — Crafting Representation</strong>
</h3>

Feature engineering is the art of creating better representations.

Examples:

- Log-transforming skewed features
    
- Normalizing income or age
    
- Creating ratios (debt-to-income)
    
- Encoding categories with one-hot vectors
    
- Extracting edges from images
    
- Using TF-IDF for text
    

This process determines how easy or hard the learning task becomes.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Representation–Hypothesis Interaction</strong>
</h3>

Representation and hypothesis space always interact.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Example</strong>
</h4>

You choose linear regression but your data is nonlinear.

Option 1: Change the representation  
Introduce polynomial features:

$$  
x,; x^2,; x^3  
$$

Option 2: Change the algorithm  
Use a neural network or SVM with RBF kernel.

Thus:

> Choosing representation sometimes transforms the learning problem into a simpler one.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Representation Determines the Shape of the Target Function</strong>
</h3>

Even if the true function (f(x)) is nonlinear,  
a good representation can make it look linear.

Example:

To predict area of a square:

- True relationship:  
    ( \text{Area} = s^2 )
    
- Representation 1: use feature “s” → nonlinear, needs complex model
    
- Representation 2: use feature “s²” → perfectly linear
    

Thus representation can simplify the world.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Numerical Example — Good vs Bad Representation</strong>
</h3>

Suppose we want to predict whether a student will pass or fail.

Data available:

- Study hours
    
- Mood
    
- Sleep hours
    
- Mobile usage
    

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Case 1 — Bad Representation</strong>
</h4>

Use only:

- Mood (“happy/sad” encoded as 1/2)
    
- Mobile usage in minutes
    

Missing study hours makes prediction almost meaningless.

The model might attempt to learn random correlations.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Case 2 — Good Representation</strong>
</h4>

Use:

- Study hours
    
- Slee

---
---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Perspectives in Machine Learning</strong>
</h2>

Different viewpoints exist on what “learning” really means.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Learning as Function Approximation</strong>
</h3>

This viewpoint says:

> “The learner finds a function that best maps inputs to outputs.”

Regression, neural networks, SVMs — all follow this idea.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Learning as Probability Estimation</strong>
</h3>

Here, the goal is to model uncertainty:

- What is the probability this email is spam?
    
- What is the probability of disease?
    

This is central to Bayesian learning and logistic regression.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Learning as Optimization</strong>
</h3>

Another perspective sees learning as:

> “Find the parameters that minimize error.”

Many algorithms boil down to:

$$  
\theta := \theta - \alpha \nabla J(\theta)  
$$

Learning is climbing/descending a landscape.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Learning as Pattern Recognition</strong>
</h3>

Humans are good at noticing patterns.  
Machine learning formalizes this:

- Detect clusters
    
- Separate classes
    
- Find structure in data
    

Pattern recognition is especially central for kNN, SVMs, neural networks.

---
---

<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Issues in Machine Learning</strong>
</h2>

Machine learning is powerful, but fragile. Several fundamental issues shape its success.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Problem of Overfitting</strong>
</h3>

A model may fit the noise instead of the true pattern.

Symptoms:

- Perfect training accuracy
    
- Terrible test accuracy
    

Overfitting is the central danger in ML.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Bias–Variance Dilemma</strong>
</h3>

- High bias → model too simple
    
- High variance → model too complex
    

Balancing these is key to good generalization.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Curse of Dimensionality</strong>
</h3>

As features increase:

- Distances become meaningless
    
- Data becomes sparse
    
- Overfitting skyrockets
    

kNN and RBF are especially sensitive.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Noise and Insufficient Data</strong>
</h3>

Learning is only as good as the data.

- Incorrect labels
    
- Missing values
    
- Small datasets
    
- Hidden variables
    

These create fundamental limits.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Computational Constraints</strong>
</h3>

Large hypothesis spaces require:

- Efficient algorithms
    
- Good optimization
    
- Smart data structures
    

This is why algorithms like SMO for SVMs are critical.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Evaluation and Generalization</strong>
</h3>

We must test hypotheses on data not seen before.  
This leads to:

- Validation sets
    
- Test sets
    
- Cross-validation
    
- Confidence intervals
    

Generalization is the final goal of ML.

---
---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Numerical Example – Well-Posed Learning Problem</strong>
</h2>

Let’s define a learning scenario.

A supermarket wants a system to predict whether a customer will buy a product (yes/no) based on:

- Age
    
- Income
    
- Shopping history
    

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Step 1: Define Task (T)</strong>
</h4>

Binary classification:  
“Predict purchase decision.”

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Step 2: Define Performance (P)</strong>
</h4>

Use accuracy:

$$  
P = \frac{\text{correct predictions}}{\text{total predictions}}  
$$

Suppose test accuracy = 87%.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Step 3: Define Experience (E)</strong>
</h4>

Training data of 10,000 customers with past purchase labels.

Thus the problem is well-posed:

> The system improves at predicting purchases (T),  
> measured by accuracy (P),  
> based on 10,000 labeled examples (E).

---

<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Final Summary</strong>
</h2>

Machine learning begins with clarity:  
Every problem must specify what we want to learn, how we measure success, and what experience is available.

Then we choose:

- representations,
    
- hypothesis spaces,
    
- and learning algorithms
    

— all guided by perspectives from statistics, optimization, and pattern recognition.

Throughout, challenges such as overfitting, noise, high dimensions, and poor evaluation threaten the quality of learning.

Understanding these foundations gives us the lens through which all future machine learning algorithms make sense.

---
---
<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Regression</strong>
</h2>

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Regression: The Search for a Predictive Law</strong>
</h3>

When we collect pairs of numbers — like hours studied and marks scored, engine size and fuel consumption, or room area and rent — we sense that one quantity influences the other.

If we put these pairs on a graph as points, we usually see some inclination: the cloud of points drifts upward or downward. Amid all the randomness, there is direction.

The natural question is:

“Can we write a rule that captures this relationship and lets us predict new values?”

Regression is the study of such rules for numeric prediction.

The simplest rule we can imagine is a straight line. It may not capture every twist of reality, but it often captures the broad trend. A line is easy to understand, to compute, and to explain.

So we start with:

$$  
h(x) = \theta_0 + \theta_1 x  
$$

Two numbers — the intercept and the slope — become our knobs for fitting the data.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why Use a Line?</strong>
</h3>

A line is the simplest nontrivial function. It does not bend, oscillate, or surprise us. It tells a clear story:

- When (x = 0), the output is (\theta_0).
    
- For each unit increase in (x), the output changes by (\theta_1).
    

Many real-world relationships, when not pushed to extremes, behave almost linearly: double the input, roughly double the effect. Even when the relationship is not exactly linear, a line still offers a good first approximation.

This simplicity is powerful:

- It avoids overreacting to noise.
    
- It is easy to fit and analyze.
    
- It serves as a foundation for more complex models.
    

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Best-Fit Line: Making “Best” Precise</strong>
</h3>

Imagine standing in front of a scatter plot with a transparent ruler. You slide and tilt it until the line seems to pass “through the middle” of the points. Your eyes are trying to minimize the overall discrepancy.

For a data point $((x_i, y_i))$, the line predicts $(h(x_i))$. The vertical difference is:

$$  
\text{error}_i = h(x_i) - y_i  
$$

If we simply summed these errors, positive and negative ones might cancel out. Instead, we square them:

$$  
\text{Total squared error} = \sum_{i=1}^{m} \left( h(x_i) - y_i \right)^2  
$$

The best-fit line is the line for which this total squared error is as small as possible.

Formally, we choose (\theta_0, \theta_1) to minimize:

$$  
J(\theta_0,\theta_1)
\frac{1}{2m}  
\sum_{i=1}^{m} \left( h(x_i) - y_i \right)^2  
$$

The factor (1/(2m)) is just a convenient scaling; it doesn’t change which line is best.

![](/teaching/Foundations of Computing/Foundations of Machine Learning/Data/attachments/Pasted image 20251120145120.png)
- An *Example* data with **Fitted**  Line.
---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">How the Computer Finds the Best Line</strong>
</h3>

We can think of the total error $(J(θ₀, θ₁))$ as a landscape over the $(θ₀, θ₁)$ plane. Each pair of parameters corresponds to one point in this landscape, with height equal to the error.

Our goal is to find the lowest point in this landscape.

There are two common strategies:

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Direct jump using linear algebra</strong>
</h4>

In matrix notation, the solution for the best weights (w) (the vector of $(θⱼ)$) can be written as:

$$  
\hat{w} = (X^T X)^{-1} X^T y  
$$

This is the ordinary least squares formula. Here:

- $(X)$ is the matrix of inputs (with a column of ones for $(θ₀)$).
    
- $(y)$ is the column vector of outputs.
    
- $(ŵ)$ denotes our best estimate of the parameter vector.
    

This formula jumps directly to the bottom of the error landscape, provided the inverse $((X^T X)^{-1})$ exists.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Walking downhill using gradient descent</strong>
</h4>

Another strategy is more intuitive: start somewhere in the landscape and keep walking downhill until no further decrease in error is possible.

At each step, we update:

$$  
\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)  
$$

for each parameter (θⱼ), with (α) being the learning rate.

This process slowly adjusts the line to reduce the total squared error, just as you would gently tilt the ruler until it “looks right.”

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">When a Single Line Isn’t Enough: Locally Weighted Linear Regression</strong>
</h3>

Sometimes the relationship is not globally linear. Consider temperature over a day: it rises in the morning, peaks, then falls. One straight line cannot describe this pattern.

Locally Weighted Linear Regression (LWLR) addresses this by fitting many local lines instead of one global line.

When predicting at a particular point $(x)$:

- Nearby training points should matter more.
    
- Far-away points should matter less.
    

To express this, each training point $((xᵢ, yᵢ))$ is given a weight:

$$  
w_i = \exp\left( -\frac{(x - x_i)^2}{2k^2} \right)  
$$

Here, $(k)$ controls how “local” the model is:

- Large $(k)$: many points have significant weight → behavior close to standard linear regression.
    
- Small $(k)$: only very close points influence the fit → model adapts to local bends.
    

The regression formula is then solved with these weights included, yielding a line that is tailored to the neighborhood of (x). As we move across the input range, the local line changes smoothly, tracing out a curve.

![](attachments/Pasted%20image%2020251120145251.png)


-  Plot showing the original data in the top frame and the weights applied to each piece of data (if we were forecasting the value of x=0.5). The second frame shows that with k=0.5, most of the data is included, whereas the bottom frame shows that if k=0.01, only a few local points will be included in the regression.

  ![](attachments/Pasted%20image%2020251120145440.png)
  - Plot showing locally weighted linear regression with three smoothing values. The top frame has a smoothing value of k=1.0, the middle frame has k=0.01, and the bottom frame has k=0.003. The top value of k is no better than least squares. The middle value captures some of the underlying data pattern. The bottom frame fits the best-fit line to noise in the data and results in overfitting.

These figures make it clear how adjusting (k) moves us from a stiff straight line to an over-flexible wiggly curve.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Shrinking Coefficients (Regularization)</strong>
</h3>

When a model has many parameters, or when data is noisy, the fitted line (or surface) can become too aggressive. Coefficients take on large values, and the model starts chasing noise instead of the underlying pattern.

To prevent this, we shrink the coefficients by adding a penalty term to the cost function.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Ridge regression (L2 regularization)</strong>
</h4>

We modify the cost function:

$$  
J_{\text{ridge}}(\theta) =  
\frac{1}{2m}  
\sum_{i=1}^{m} (h(x_i) - y_i)^2  
+  
\lambda \sum_{j} \theta_j^2  
$$

Here, $(λ)$ is a regularization parameter:

- If $(λ)$ is 0, there is no shrinkage.
    
- If $(λ)$ is large, coefficients are heavily penalized and forced to be small.
    

This discourages extreme coefficients and produces smoother, more stable models.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Lasso regression (L1 regularization)</strong>
</h4>

Another approach penalizes the **absolute value** of coefficients:

$$  
J_{\text{lasso}}(\theta) =  
\frac{1}{2m}  
\sum_{i=1}^{m} (h(x_i) - y_i)^2  
+  
\lambda \sum_{j} |\theta_j|  
$$

This not only shrinks coefficients but can drive some of them exactly to zero, effectively removing those features from the model.

A simple way to think of regularization:

> “We allow the model to fit the data, but we charge a small price every time a coefficient grows too large.”

The model chooses the best compromise between fit quality and coefficient size.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Bias and Variance: The Underlying Balance</strong>
</h3>

Every model faces a tension between two types of errors.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Bias</strong>
</h4>

Bias is the error due to overly simple assumptions.

- A straight line trying to fit a strongly curved relationship has high bias.
    
- It systematically misses important structure.
    
- No matter how much data we collect, the line remains fundamentally mis-specified.
    

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Variance</strong>
</h4>

Variance is the error due to sensitivity to fluctuations in the training data.

- A highly flexible model can twist and bend to pass through almost every point.
    
- It fits not only the true pattern, but also random noise.
    
- A small change in the training set can lead to a very different fitted curve.
    

A good model balances both:

- Too simple → high bias, low variance.
    
- Too complex → low bias, high variance.
    
- Just right → moderate bias and moderate variance, leading to the lowest total error on unseen data.
    

Regularization and choices like the LWLR smoothing parameter (k) are tools to navigate this balance.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Story So Far</strong>
</h3>

Regression begins with one simple idea: the world often has approximate linear trends. A straight line provides a clear and practical summary of these trends.

From there, the story unfolds:

- We make “best” precise by minimizing squared error.
    
- We have closed-form and iterative ways to find the best line.
    
- When the world is too curved for one line, we allow many local lines (LWLR).
    
- When the model becomes too clever for its own good, we impose discipline through regularization.
    
- Throughout, we are guided by the tradeoff between bias and variance.
    

With these tools, regression becomes more than just a line on a graph; it becomes a disciplined way of building numeric prediction models that generalize beyond the data we see.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Worked Numerical Example – Simple Best-Fit Line</strong>
</h3>

Let us see a very small numerical example to make the idea concrete.

Suppose we have three data points:

- ((1, 2))
- ((2, 3))
- ((3, 5))

Think of $(x)$ as hours studied and $(y)$ as marks.

We assume a line:

$$  
h(x) = \theta_0 + \theta_1 x  
$$

Our goal is to find $(\theta_0)$ and $(\theta_1)$ that best fit these points in the least-squares sense.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Write down the normal equation form</strong>
</h4>

We construct the matrix $X$ and vector $y$:

$$  
X =  
\begin{bmatrix}  
1 & 1 \\
1 & 2 \\
1 & 3  
\end{bmatrix},  
\quad  
y =  
\begin{bmatrix}  
2 \\
3 \\
5  
\end{bmatrix}  
$$

Each row of $X$ is $[1 \;\; x_i]$, where the 1 corresponds to $(\theta_0)$.

The normal equation for the best weights is:

$$  
\hat{w} = (X^T X)^{-1} X^T y  
$$

where

$$  
\hat{w} =  
\begin{bmatrix}  
\theta_0 \\
\theta_1  
\end{bmatrix}  
$$

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Compute $(X^T X)$ and $(X^T y)$</strong>
</h4>

First:

$$  
X^T X =  
\begin{bmatrix}  
1 & 1 & 1 \\
1 & 2 & 3  
\end{bmatrix}  
\begin{bmatrix}  
1 & 1 \\
1 & 2 \\
1 & 3  
\end{bmatrix}
=
\begin{bmatrix}  
3 & 6 \\
6 & 14  
\end{bmatrix}  
$$

Next:

$$  
X^T y =  
\begin{bmatrix}  
1 & 1 & 1 \\
1 & 2 & 3  
\end{bmatrix}  
\begin{bmatrix}  
2 \\
3 \\
5  
\end{bmatrix}
=
\begin{bmatrix}  
2 + 3 + 5 \\
1\cdot 2 + 2\cdot 3 + 3\cdot 5  
\end{bmatrix}
=
\begin{bmatrix}  
10 \\
23  
\end{bmatrix}  
$$

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Solve for $(\hat{w})$</strong>
</h4>

We must solve:

$$  
\begin{bmatrix}  
3 & 6 \\
6 & 14  
\end{bmatrix}  
\begin{bmatrix}  
\theta_0 \\
\theta_1  
\end{bmatrix}
=
\begin{bmatrix}  
10 \\
23  
\end{bmatrix}  
$$

Solving this linear system gives:

- $(\theta_0 = \frac{1}{3} \approx 0.333)$  
- $(\theta_1 = \frac{3}{2} = 1.5)$

So the best-fit line is:

$$  
h(x) = \frac{1}{3} + 1.5x  
$$

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Interpret the result</strong>
</h4>

- The slope $1.5$ means: each extra hour of study increases marks by about 1.5.  
- The intercept $\frac{1}{3}$ is the predicted mark at $x = 0$.

Check predictions:

- For $(x = 1)$:  
  $h(1) = \frac{1}{3} + 1.5(1) = 1.833$ (actual 2)

- For $(x = 2)$:  
  $h(2) = \frac{1}{3} + 1.5(2) = 3.333$ (actual 3)

- For $(x = 3)$:  
  $h(3) = \frac{1}{3} + 1.5(3) = 4.833$ (actual 5)

The errors are small and balanced.

For such a tiny dataset, this line is a reasonable summary of the relationship.

---
---

<h2 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Logistic Regression</strong>
</h2>

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why Logistic Regression Exists</strong>
</h3>

When the output we want to predict is a class, not a number — like spam or not spam, disease or healthy, pass or fail — a straight line is no longer the right tool.

A line can produce any real value from negative infinity to positive infinity.  
But in classification we want something simpler:

> A function that outputs a value between 0 and 1 —  
> something we can interpret as probability.

A perfect candidate would be a step function:

- Output 0 for one class
- Output 1 for the other class

But a step function is abrupt. It has no smooth transition, and because it jumps instantly from 0 to 1, it is almost impossible to optimize with calculus.

So we search for a smooth function that behaves like a step function…  
and we find one.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Sigmoid: A Smooth Step</strong>
</h3>

The sigmoid function is a beautifully shaped curve:

$$  
\sigma(z) = \frac{1}{1 + e^{-z}}  
$$

At very negative $(z)$: $(\sigma(z) \approx 0)$  
At very positive $(z)$: $(\sigma(z) \approx 1)$  
At $(z = 0)$: $(\sigma(0) = 0.5)$

It rises gently, never abruptly, and gives us a perfect probability-like value.

   ![](attachments/Pasted%20image%2020251120145607.png)
- Two plots of the sigmoid — one zoomed in, one zoomed out.


---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Turning Features Into a Probability</strong>
</h3>

How do we move from features to a useful $(z)$ value?

We create a linear combination of the inputs:

$$  
z = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \dots + \theta_n x_n  
$$

In vector form:

$$  
z = w^T x  
$$

This $(z)$ is then passed through the sigmoid:

$$  
h(x) = \sigma(w^T x)  
$$

Now:

- If $(h(x) > 0.5)$, predict Class 1  
- If $(h(x) < 0.5)$, predict Class 0  

This is the simplest interpretation: logistic regression outputs the probability of belonging to class 1.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why Optimization Is Needed</strong>
</h3>

Just like linear regression tries to find the best line, logistic regression tries to find the best set of weights.

But the error function is different, because squared error does not play well with the sigmoid.

Instead, logistic regression uses a likelihood (or equivalently, the “log-likelihood”) as the objective function.

Intuitively:

- If the model assigns high probability to the correct class → high score  
- If it assigns low probability to the correct class → low score  

The best weights maximize this score.

Since we cannot jump directly to the answer using the normal equation, we use optimization algorithms.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Gradient Ascent: Climbing the Likelihood Hill</strong>
</h3>

The objective in logistic regression is to maximize the likelihood, not minimize error.  
So instead of “gradient descent,” we use gradient ascent:

$$  
w := w + \alpha \nabla L(w)  
$$

Where:

- $(L(w))$ is the log-likelihood  
- $(\alpha)$ is the learning rate  
- The gradient tells us the direction of steepest increase

Visually, imagine standing on a hill of likelihood values. Each step takes you upward until no further improvement is possible.

![](attachments/Pasted%20image%2020251120145653.png)
-  Gradient ascent example illustration.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Stochastic Gradient Ascent (SGA): Faster Learning</strong>
</h3>

Using all data points at once to compute the gradient is expensive.

A faster idea:

> Update the weights using one data point at a time.

This has two advantages:

- Much faster
- Adds randomness → helps escape poor local maxima
- Works better for large datasets

In practice, SGA is preferred for logistic regression training.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Decision Boundary</strong>
</h3>

Once we have the best weights, how do we see what the model has learned?

The decision boundary is the set of all points where $(h(x)=0.5)$, i.e., $(z=0)$:

$$  
w^T x = 0  
$$

For two features:

$$  
\theta_0 + \theta_1 x_1 + \theta_2 x_2 = 0  
$$

This is a straight line.

For more features, it becomes a plane or a hyperplane.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Missing Values and Practical Use</strong>
</h3>

Harrington suggests a practical trick when features have missing values:  
Replace them with 0.

Why?

Because:

- 0 multiplied by its weight does not influence the prediction
- The sigmoid of 0 is 0.5 → a neutral value

This is not universally the best strategy, but it works reasonably well for many datasets.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Numerical Example – Logistic Regression Prediction</strong>
</h3>

This example shows how logistic regression converts inputs to a probability.

Suppose we already have a trained logistic regression model with:

- $(\theta_0 = -4)$
- $(\theta_1 = 2)$
- $(\theta_2 = 1)$

And suppose a new data point has:

- $(x_1 = 2)$
- $(x_2 = 3)$

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Step 1: Compute $(z = w^T x)$</strong>
</h4>

$$  
z = \theta_0 + \theta_1 x_1 + \theta_2 x_2  
$$

Substitute values:

$$  
z = -4 + 2(2) + 1(3)  
$$

$$  
z = -4 + 4 + 3 = 3  
$$

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Step 2: Apply the sigmoid</strong>
</h4>

$$  
h(x) = \frac{1}{1 + e^{-3}}  
$$

Compute:

- $(e^{-3} \approx 0.0498)$

So:

$$  
h(x) \approx \frac{1}{1 + 0.0498} = 0.9526  
$$

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Step 3: Interpret the result</strong>
</h4>

The model assigns a 95.26% probability to Class 1.

Since this is greater than 0.5, the predicted class is:

> Class 1

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">The Story of Logistic Regression</strong>
</h3>

Logistic regression begins with a simple need:  
We want a model that outputs probabilities instead of arbitrary numbers.

The step function would be ideal — but it’s too abrupt, impossible to optimize, and blind to subtle patterns. The sigmoid gives us the same spirit but with smoothness.

We then build a linear score, pass it into the sigmoid, and obtain a probability.  
We adjust the weights so that the model gives high probability to the correct class.  
Optimization — especially gradient ascent and stochastic gradient ascent — helps us climb the likelihood landscape efficiently.

The result is a model that is:

- Simple
    
- Interpretable
    
- Efficient
    
- Surprisingly strong for linearly separable data
    

Logistic regression remains one of the most elegant and enduring ideas in machine learning.

---

