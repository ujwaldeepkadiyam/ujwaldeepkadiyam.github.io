---
title: Unit-2 Margin-Based (SVM) and Instance-Based (KNN) Learning
layout: page
permalink: /teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-2/
hide_title: true
parent: Foundations of Machine Learning
grand_parent: Foundations of Computing
math: true
wide: false
---


<h2
class="page-header" style="text-align: center ; color: blue;"><strong style="color:#cc33cc;">Support Vector Machines</strong></h2>

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Why Support Vector Machines Were Created</strong></h3>

Imagine you are looking at a scatterplot where red points lie on one side, and blue points lie on the other. You draw a straight line that separates them.

You feel satisfied — you found a separator.

But then someone else draws another line slightly tilted… also separating the points.

Then another, and another.  
There are infinitely many separating lines.

So the natural question arises:

> **Among all the lines that separate the two classes, which one is the best?**

Support Vector Machines (SVMs) arise from a beautiful idea:

> **The best boundary is the one that stays as far away as possible from both classes.**  


<h4 class="page-header" style="text-align: left; color: blue;">
<strong style="color:#cc33cc;">The best boundary is the one that stays as far away as possible from both classes.</strong>
</h4>

The safest separator.  
The most “cautious” separator.  
The boundary with the **maximum margin**.

This is the heart of SVMs.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">The Margin: A Buffer Zone Between Classes</strong></h3>

Suppose we draw a separating line (in 2D) or hyperplane (in higher dimensions).  
We then measure the smallest distance from this line to any training point.

This distance is called the **margin**.

If the margin is big:

- The classes are comfortably separated
- Small variations in new data won’t cause misclassification
- The model is more robust and generalizes better

If the margin is tiny:

- The separator is dangerously close to one class
- Training noise can move points and cause errors
- The model is fragile

So SVMs choose the separator with the **largest** possible margin.

This leads to two important consequences:

1. Only a few points determine the margin — these become **support vectors**.
2. All other points are irrelevant to the final boundary, making SVMs elegant and efficient.

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126140904.png)
_“Four examples of datasets that aren’t linearly separable.”_

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126141016.png)
_"Linearly separable data is shown in frame A. Frames B, C, and D show possible valid lines separating the two classes of data."_

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126141108.png)
_"The distance from point A to the separating plane is measured by a line normal to the separating plane."_


---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Finding the Maximum Margin</strong></h3>

Now the mathematical examples of datasets that aren’t linearly separably begins.

We want a hyperplane:

$$  
w^T x + b = 0  
$$

that separates the data.

For one class:

$$  
w^T x + b \ge 1  
$$

For the other:

$$  
w^T x + b \le -1  
$$

These two parallel lines are the **margin boundaries**.

The distance between them is:

$$  
\frac{2}{|w|}  
$$

So to maximize the margin, we must **minimize** (|w|).

This leads to the classic SVM objective:

$$  
\min_{w,b} \frac{1}{2}|w|^2  
$$

subject to the class separation constraints.

This optimization problem is convex — meaning it has one global minimum and no local minima traps.


![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126141108.png)
_"The distance from point A to the separating plane is measured by a line normal to the separating plane."_

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">The Role of Support Vectors</strong></h3>

Among all training points, only the few that lie exactly on the margin boundary influence the solution.

These are the **support vectors**.
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126150709.png)
								_"Support vectors are circled"_

If you remove any point that is not a support vector, the SVM decision boundary **does not change**.

This is astonishing:

- SVMs ignore most of the dataset when constructing the boundary
- Only the critical points matter
- This makes them robust and elegant

Support vectors are the “guardians” of the margin.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Real Data Isn’t Perfectly Separatable</strong></h3>

In the ideal world, we would find a perfect separator.  
But real data has overlaps, noise, and mislabeled points.

So SVM introduces the idea of **soft margins**:

Allow some points to be on the wrong side of the margin, but **penalize** them.

This leads to the soft-margin objective:

$$  
\min_{w,b}  
\frac{1}{2}|w|^2 +  
C \sum \xi_i  
$$

Where (\xi_i) are slack variables measuring “how badly” a point violates the margin.

The constant (C) controls:

- Large (C): hard margin (strict separation)
- Small (C): soft margin (more tolerance for overlap)

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Optimization With SMO (Sequential Minimal Optimization)</strong></h3>

Classic SVM training requires solving a quadratic programming problem — heavy and slow.  
SVMs became truly practical only after **SMO** was introduced.

SMO breaks a large optimization problem into tiny subproblems:

- At each step, choose **two** Lagrange multipliers
- Hold everything else constant
- Solve this tiny problem analytically
- Update
- Repeat

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126145105.png)

This results in dramatic speed improvements:

- No need for large matrix storage
- No need for expensive numerical solvers
- Works efficiently on large datasets
- 
The beauty of SMO is that each subproblem has a **closed-form solution**, making training fast and scalable.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">When Linear Boundaries Are Not Enough: Kernels</strong></h3>

Many datasets cannot be separated by a line at all — even with a soft margin.

Think of a circular pattern:

- Class 1 forming an inner circle
- Class 2 forming an outer ring

No straight line can separate them.

The solution is the kernel trick:  
Instead of trying to separate the data in its original space, **map it to a higher-dimensional space** where separation becomes linear.

But doing this explicitly is expensive.  
So we use kernels — functions that compute the inner product in the higher-dimensional space **without ever actually going there**.

Common kernels:

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Polynomial Kernel</strong></h4>

$$  
K(x, x') = (x^T x' + 1)^d  
$$

Allows curved boundaries of increasing complexity.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Radial Basis Function (RBF) / Gaussian Kernel</strong></h4>

$$  
K(x, x') = \exp!\left(-\frac{|x - x'|^2}{2\sigma^2}\right)  
$$

This is the most powerful and widely used kernel.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Sigmoid Kernel</strong></h4>

$$  
K(x, x') = \tanh(\alpha x^T x' + c)  
$$

Historically linked to neural networks.

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126151131.png)
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126151800.png)
				_"Non-linearly separable problem becomes separable in higher dimension"_

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Decision Boundary With Kernels</strong></h3>

With kernels, SVMs no longer compute $$w^T x.$$
Instead, the decision function becomes:

$$  
f(x) = \sum_i \alpha_i y_i K(x_i, x) + b  
$$

Here $$\alpha_i$$  are found via SMO
- Only support vectors have non-zero $$(\alpha_i)$$
- $$(K)$$ replaces the inner product

This allows SVMs to draw:

- Circles
- Ellipses
- Spirals
- Arbitrarily complex curves

All while the underlying mathematics remains clean and elegant.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Numerical Example (Small + Intuitive)</strong></h3>

Consider two classes of points in 2D:

Class +1:

- (2, 2)
- (4, 4)

Class –1:

- (4, 0)
- (0, 4)

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Step 1: Visualize</strong></h4>

A diagonal separator seems natural.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Step 2: One possible separating hyperplane</strong></h4>

Suppose the SVM finds:

$$  
w = [1, 1], \quad b = -5  
$$

So the decision function is:

$$  
f(x) = x_1 + x_2 - 5  
$$

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Step 3: Compute predictions</strong></h4>

For point (2, 2):

- (2 + 2 - 5 = -1) → predicts **–1** (incorrect)

For point (4, 4):

- (4 + 4 - 5 = 3) → predicts **+1** (correct)

For point (4, 0):

- (4 + 0 - 5 = -1) → predicts **–1** (correct)

For point (0, 4):

- (0 + 4 - 5 = -1) → predicts **–1** (correct)

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Step 4: Margin check</strong></h4>

Distance to hyperplane:

$$  
\frac{|w^T x + b|}{|w|} = \frac{|x_1 + x_2 - 5|}{\sqrt{1^2+1^2}} = \frac{|x_1 + x_2 - 5|}{\sqrt{2}}  
$$

Support vectors are the closest ones.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">The Story of SVMs</strong></h3>

SVMs begin with dual impulses:

1. **Find a clean, safe separation between classes**
2. **Be robust to noise and maximize generalization**

The maximum-margin principle fulfills both.

The magic continues with:

- Soft margins for real data
- SMO for efficient optimization
- Kernel trick for handling curved or high-dimensional boundaries

SVMs combine geometry, optimization, and mathematical elegance.  
The result is a model that remains one of the most powerful classical ML algorithms.



---



<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">Instance-Based Learning</strong>
</h2>
Instance-Based Learning (IBL) belongs to a very different world than models like decision trees or logistic regression.  
Instead of learning explicit patterns or equations, IBL embraces a simpler belief:

> **The data itself is the model.**

There is no training phase in the traditional sense.  
No parameters to tune inside the model itself.  
The intelligence emerges during **prediction**, not beforehand.

> The learner waits quietly, **storing examples exactly as they are**. When a new query arrives, it awakens—**searching** for the **most similar stored instances** and using them to make a decision.

This feels almost human:

When someone asks us,  
“What does this plant look like?”  
We immediately recall the closest match from our memory.

Instance-Based Learning is machine learning’s version of memory-based reasoning.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Introduction to Instance-Based Learning</strong>
</h3>
IBL systems operate on one fundamental principle:

> **Examples that are close to each other tend to have similar outputs.**

This idea became one of the cornerstones of modern non-parametric learning.

Key characteristics:

- **No explicit model is built.**  
    The model is literally the stored dataset.
    
- **Lazy learners.**  
    Learning = storing.  
    Real work happens during prediction.
    
- **Similarity-based reasoning.**  
    The heart of IBL is the _distance function_.
    

Common distance measures:

- Euclidean distance  
    $$d(x, x') = \sqrt{\sum_i (x_i - x'_i)^2}$$
    
- Manhattan distance  
    $$d(x, x') = \sum_i |x_i - x'_i|$$
    
- Weighted distances (important when attributes have different importance)
    

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">k-Nearest Neighbor Learning (k-NN)</strong>
</h3>

k-NN is the most iconic instance-based method.  
It feels intuitive because it mirrors human thinking:

When a doctor sees a rare disease, they recall the **closest** previously seen case.  
The patient is treated based on similarity with earlier cases.

k-NN does exactly this—but with mathematical precision.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">The Story of k-NN</strong>
</h4>

Let’s imagine a new point arrives:  A fruit with unknown label—Apple or Orange.

It looks reddish. It has medium weight. The sweetness is medium.

Instead of learning explicit rules like  
“Weight $$>$$ some value(x kg) → Apple”,  k-NN searches for the **k nearest neighbors** from memory and simply votes. If 4 out of 5 neighbors are apples → the fruit is predicted as apple.

k-NN’s power comes from two ideas:

> 1. **Locality**

The closer two points are, the more they are alike.

> 2. **Smoothness of the world**

Nature generally behaves smoothly, not abruptly. This means data is found in groups and transitions from center of one group to another is gradual and not abrupt.

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126153731.png)
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126154042.png)


---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Distance, Decision, and Voting</strong>
</h4>

Euclidean distance is the most common:

$$d(x, x') = \sqrt{\sum_i (x_i - x'_i)^2}$$

Prediction:

- **Classification:** majority vote
    
- **Regression:** average of nearest neighbors  
    $$f(x) = \frac{1}{k} \sum_{i \in N_k(x)} y_i$$
    

The choice of **k** is critical:

- **Small k → sensitive to noise**
    
- **Large k → overly smooth, loses detail**
    

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126155148.png)
						_“Decision boundaries of k-NN for small vs large k.”_

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Curse of Dimensionality</strong>
</h4>

In high-dimensional space, all points become far away from each other.  
Distances lose meaning.

Example:

- In 2D → points are nicely scattered
    
- In 100D → everything becomes sparse
    

This weakens k-NN.  
Feature selection or dimensionality reduction becomes essential.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Radial Basis Function (RBF) Methods in Instance-Based Learning</strong>
</h3>

Radial Basis Function (RBF) methods belong to the same broad family as **k-NN** — the family of algorithms that _store_ examples and use them later during prediction.  
But they behave very differently.

Where **k-NN** draws _hard boundaries_ and decides based only on the **k nearest neighbors**, RBFs bring a much more **smooth, elegant, mathematical flavor** to the idea of memory-based prediction.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">The RBF Philosophy: Every Example Matters — but Softly</strong>
</h4>



Imagine each training example as a **small hill** (a “bump”) placed on the landscape of the input space.

- When a query point falls **near a hill**, it is strongly influenced by its height.
    
- When it falls **far away**, the hill’s influence fades naturally.
    

This creates a beautifully smooth surface that changes gently rather than sharply.

Mathematically, each stored example contributes:

```
Influence = φ(distance(query, example))
```

Where **φ** is the radial basis function (usually a Gaussian):

```
φ(r) = exp(- r² / (2σ²))
```

- **Close points** → distance is small → influence ≈ 1
    
- **Far points** → distance is large → influence → 0
    

This is why we call it a **soft neighborhood**.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">k-NN vs RBF: The Core Difference</strong>
</h3>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">k-NN</strong>
</h4>

- Looks only at the **nearest k examples**
- Hard cutoff — examples outside the boundary have _zero_ effect
- Decision boundary can be jagged and irregular

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">RBF Networks</strong>
</h4>

- Every training sample contributes something  
- But contribution decreases smoothly with distance  
- Produces **smooth, continuous function approximations**

> **k-NN = hard boundaries**  
> **RBF = soft influence**

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Why RBF Feels More “Elegant”</strong>
</h3>

RBF methods turn stored instances into **local soft experts**.

Each expert “speaks up” about what the output should be:

- Loudly if the query point is nearby  
- Quietly if it is far away  

The final prediction is like listening to all experts, weighted by how relevant they are.

This avoids both extremes:

- The **over-sensitivity** of small-k k-NN  
- The **over-smoothing** of large-k k-NN  

Instead, you get:

- Controlled smoothness  
- Beautiful function surfaces  
- Stable generalization  

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Where RBF Networks Shine</strong>
</h3>

- Function approximation  
- Regression tasks  
- Smoothing noisy data  
- Interpolation between sparse samples  
- Creating smooth decision boundaries  

They are commonly used in:

- Neural networks (RBF networks)  
- Kernelized algorithms  
- Gaussian processes  

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color: #cc33cc;">Summary Table</strong>
</h3>

| Aspect            | k-NN                     | RBF                                 |
| ----------------- | ------------------------ | ----------------------------------- |
| Influence         | Hard cutoff              | Smooth decay                        |
| Decision boundary | Jagged                   | Smooth                              |
| Uses              | Classification           | Both classification & regression    |
| Memory            | All examples             | All examples (but weighted)         |
| Thinking style    | "Pick nearest neighbors" | "Blend contributions of all points" |

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Gaussian RBF: The Most Famous</strong>
</h4>

The Gaussian RBF is:

$$  
K(x, x_i) = \exp\left(-\frac{||x - x_i||^2}{2\sigma^2}\right)  
$$

Interpretation:

- If x is very close to (x_i) → kernel ≈ 1
    
- If x is far → kernel ≈ 0
    

The model:

$$  
f(x) = \sum_i w_i K(x, x_i)  
$$

Image Placeholder  
_insert: “Figure — Gaussian bumps centered at instance points.”_

RBFs lie at the heart of:

- RBF networks
    
- Gaussian Processes
    
- Kernelized SVMs (RBF kernel)
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">From Local Influence to Smooth Global Decisions</strong>
</h4>
RBFs avoid the sharp, blocky boundaries of k-NN.  
Every point contributes, but nearby points contribute more.

This makes RBFs excellent for:

- Smooth regression problems
    
- Function approximation
    
- Time-series interpolation
    

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Case-Based Reasoning (CBR)</strong>
</h3>


Case-Based Reasoning extends IBL into the world of **human-like problem solving**.

Instead of simply using nearest examples, CBR stores **cases**:  
Each case is a story—a problem, a solution, and the reasoning behind it.

CBR follows a natural human cycle:

1. **Retrieve** the most similar past case
    
2. **Reuse** the solution
    
3. **Revise** it if needed
    
4. **Retain** the new solution as a fresh case
    

Doctors, engineers, and lawyers do this all the time.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Example Story</strong>
</h4>
Imagine a medical diagnosis system:

- A patient arrives with fever + rash.
    
- The system retrieves 10 past patients with similar symptoms.
    
- From these cases, the best treatment plan is extracted.
    
- After the doctor refines it, the updated result is saved as a new case for future use.
    

CBR systems grow wiser over time.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">CBR vs k-NN</strong>
</h4>

|Aspect|k-NN|CBR|
|---|---|---|
|Memory|Stores points|Stores full problem–solution pairs|
|Reasoning|Purely mathematical|Human-like, contextual|
|Adaptation|None|Solutions can be revised|
|Learning|None|Learns new cases with experience|

---

<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">Summary of Instance-Based Learning</strong>
</h2>


Instance-Based Learning teaches us a powerful lesson:

You don't always need complex rules.

Sometimes, remembering examples and comparing new situations to the past is enough.  
From simple k-NN to smooth RBF networks to memory-based CBR systems, the essence remains:

> **Similarity is knowledge.  
> The world often repeats itself,  
> and learning means remembering these repetitions.**

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Numerical Example – k-Nearest Neighbor (k-NN)</strong>
</h3>

<p>
We will build a small, concrete example to see exactly how k-NN works: distances, neighbors, and prediction.
</p>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Dataset Setup</strong>
</h4>

<p>
Suppose we are classifying students as <b>Pass</b> or <b>Fail</b> based on:
</p>

<ul>
  <li><b>x₁</b> = Number of hours studied</li>
  <li><b>x₂</b> = Number of practice tests taken</li>
</ul>

<p><b>Training data:</b></p>

| Student | x₁: Hours | x₂: Tests | Class     |
|---------|-----------|------------|-----------|
| A       | 2         | 1          | Fail (0)  |
| B       | 4         | 2          | Fail (0)  |
| C       | 4         | 4          | Pass (1)  |
| D       | 6         | 3          | Pass (1)  |


Now we get a new student New student X: studied 5 hours and took 2 practice tests → $$x = (5, 2)$$. We want to predict whether X will <b>Pass</b> or <b>Fail</b> using k-NN.

<hr>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Step 1 – Choose k and Distance Measure</strong>
</h4>

We choose:

<ul>
  <li><b>k = 3</b> (we will look at the 3 nearest neighbors)</li>
  <li><b>Distance = Euclidean</b></li>
</ul>


Euclidean distance between two points $$x = (x_1, x_2)$$ and $$x' = (x'_1, x'_2)$$ is:



$$
d(x, x') = \sqrt{(x_1 - x'_1)^2 + (x_2 - x'_2)^2}
$$


<hr>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Step 2 – Compute Distances from X to All Training Points</strong>
</h4>


New student X has features: $$x = (5, 2)$$.


1. **Distance to A: (2, 1), class = Fail (0)**
    
    - Distance:  
        $d(X, A) = \sqrt{(5 - 2)^2 + (2 - 1)^2}$  
        $= \sqrt{3^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10} \approx 3.162$
        
2. **Distance to B: (4, 2), class = Fail (0)**
    
    - Distance:  
        $d(X, B) = \sqrt{(5 - 4)^2 + (2 - 2)^2}$  
        $= \sqrt{1^2 + 0^2} = \sqrt{1} = 1.0$
        
3. **Distance to C: (4, 4), class = Pass (1)**
    
    - Distance:  
        $d(X, C) = \sqrt{(5 - 4)^2 + (2 - 4)^2}$  
        $= \sqrt{1^2 + (-2)^2} = \sqrt{1 + 4} = \sqrt{5} \approx 2.236$
        
4. **Distance to D: (6, 3), class = Pass (1)**
    
    - Distance:  
        $d(X, D) = \sqrt{(5 - 6)^2 + (2 - 3)^2}$  
        $= \sqrt{(-1)^2 + (-1)^2} = \sqrt{1 + 1} = \sqrt{2} \approx 1.414$
        

Let’s summarize these distances:


<table border="1" cellpadding="4" cellspacing="0">
  <tr>
    <th>Student</th>
    <th>Point (x₁, x₂)</th>
    <th>Class</th>
    <th>Distance to X = (5, 2)</th>
  </tr>
  <tr>
    <td>A</td>
    <td>(2, 1)</td>
    <td>Fail (0)</td>
    <td>≈ 3.162</td>
  </tr>
  <tr>
    <td>B</td>
    <td>(4, 2)</td>
    <td>Fail (0)</td>
    <td>1.000</td>
  </tr>
  <tr>
    <td>C</td>
    <td>(4, 4)</td>
    <td>Pass (1)</td>
    <td>≈ 2.236</td>
  </tr>
  <tr>
    <td>D</td>
    <td>(6, 3)</td>
    <td>Pass (1)</td>
    <td>≈ 1.414</td>
  </tr>
</table>

<hr>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Step 3 – Pick the k Nearest Neighbors</strong>
</h4>

<p>
We sort distances in ascending order:
</p>

<ol>
  <li>B: distance = 1.000, class = Fail (0)</li>
  <li>D: distance ≈ 1.414, class = Pass (1)</li>
  <li>C: distance ≈ 2.236, class = Pass (1)</li>
  <li>A: distance ≈ 3.162, class = Fail (0)</li>
</ol>

<p>
We chose <b>k = 3</b>, so we take the closest 3 neighbors:
</p>

<ul>
  <li><b>B</b> → Fail (0)</li>
  <li><b>D</b> → Pass (1)</li>
  <li><b>C</b> → Pass (1)</li>
</ul>

<p>
Class votes among these 3 neighbors:
</p>

<ul>
  <li>Fail: 1 vote (B)</li>
  <li>Pass: 2 votes (C, D)</li>
</ul>

<p>
Majority class = <b>Pass (1)</b>.
</p>

<p><b>k-NN prediction for X = (5, 2): Pass.</b></p>

<hr>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Step 4 – What if We Change k?</strong>
</h4>

<p>
Now suppose we choose <b>k = 4</b>, i.e., consider all training points.
</p>

<ul>
  <li>A → Fail (0)</li>
  <li>B → Fail (0)</li>
  <li>C → Pass (1)</li>
  <li>D → Pass (1)</li>
</ul>

<p>
Votes:
</p>

<ul>
  <li>Fail: 2 (A, B)</li>
  <li>Pass: 2 (C, D)</li>
</ul>

<p>
Now there is a tie. Different implementations handle ties differently:
</p>

<ul>
  <li>Some choose the class of the <b>nearest neighbor</b> (here B → Fail).</li>
  <li>Some choose based on <b>class priors</b>.</li>
  <li>Some choose the class with <b>smaller index</b> by convention.</li>
</ul>

<p>
This example shows why:
</p>

<ul>
  <li><b>Too small k</b> → highly sensitive to noise.</li>
  <li><b>Too large k</b> → decision can become blurred and may cross class boundaries.</li>
</ul>

<hr>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Geometric Intuition</strong>
</h4>

<p>
If you plot these 5 points in the 2D plane (Hours vs Tests):
</p>
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251126163253.png)
<ul>
  <li>Fail class points lie closer to the bottom-left region.</li>
  <li>Pass class points lie more toward upper-right.</li>
  <li>The new point X = (5, 2) sits between them, but slightly closer to the Pass region.</li>
</ul>

<p>
With <b>k = 3</b>, the local majority around X belongs to the <b>Pass</b> class, so the boundary near X bends to include it as a Pass.
</p>

<p>
This numerical example makes the core idea of k-NN clear:
</p>
> **The prediction is not based on a fixed equation learned earlier, but on the local neighborhood of the query point at prediction time.** 
