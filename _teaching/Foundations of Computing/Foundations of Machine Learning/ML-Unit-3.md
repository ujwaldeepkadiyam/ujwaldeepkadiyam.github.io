---
title: Unit-3 Evaluation Hypotheses
layout: page
permalink: /teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-3/
hide_title: true
parent: Foundations of Machine Learning
grand_parent: Foundations of Computing
math: true
wide: false
---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color:#cc33cc;">Motivation for Evaluating Hypotheses</strong></h2>

Machine learning aims to discover rules or patterns from data that allow us to make accurate predictions about unseen cases. But no matter how sophisticated the algorithm is, the **quality of learning is always limited by two factors**:

1. **The amount of data available**
    
2. **The noise or randomness in the data**
    

Because of this, **every hypothesis we learn is uncertain**.  
It may perform differently on new data compared to the training set.

This leads to the foundational motivations for evaluating hypotheses:

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Why Hypothesis Evaluation is Necessary</strong></h3>

When a model achieves high accuracy on the training data, it is tempting to assume the model is good. However:

- Training accuracy is **optimistic**.
    
- Training accuracy often reflects **memorization**, not **generalization**.
    
- Real-world data rarely matches the training data exactly.
    
- Noise, missing values, class imbalance, rare events, and sampling bias distort performance.
    

Thus, we must answer:

> **“How well will this hypothesis perform on future unseen data drawn from the same source?”**

This question cannot be answered using intuition alone; it requires **statistical estimation**, **probabilistic reasoning**, and **sampling theory**.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">The Core Principle</strong></h3>

Every learned hypothesis has a **true accuracy**, but this is unknowable directly because the real-world data distribution is unknown.  
We can only observe **sample accuracy** on a finite test set.

Performance evaluation is the bridge from:

- **Observed accuracy** → what happens on the finite sample
    
- **True accuracy** → what would happen across all future data
    

Evaluating this relationship requires:

1. **Statistical models (binomial trials)**
    
2. **Confidence intervals**
    
3. **Sampling distributions**
    
4. **Error bounds (Hoeffding, normal approximation)**
    

These tools help quantify:  
**How close our sample accuracy is to the true performance.**

---
---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Estimating Hypothesis Accuracy</strong></h3>

Estimating accuracy means determining how well a hypothesis is expected to perform on future data.

To formalize this, think of each prediction by the hypothesis as a **Bernoulli trial**:

- **Success (1):** hypothesis correctly predicts the target
    
- **Failure (0):** hypothesis misclassifies the target
    

If we test a hypothesis on **n** independent examples:

- Let **k** = number of correct predictions
    
- Observed accuracy =  
    $$\hat{p} = \frac{k}{n}$$
    
- True accuracy = an unknown value **p**
    

Thus, accuracy estimation is equivalent to estimating the parameter **p** of a **binomial distribution**.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Why the Binomial Model?</strong></h3>

Because each prediction is an independent event with two possible outcomes, the count of correct predictions follows:

> **Binomial(n, p)**

This yields powerful consequences:

- The variance shrinks as n increases
    
- Large test sets give more accurate estimates
    
- Confidence intervals can be computed
    
- The distribution approaches normality for large n
    

This becomes the backbone for hypothesis evaluation.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Normal Approximation for Accuracy</strong></h3>

When **n is reasonably large**, the binomial distribution is approximated by a normal distribution:

$$\hat{p} \sim \mathcal{N}\left( p , \frac{p(1-p)}{n} \right)$$

Thus, the **standard deviation** of sample accuracy is:

$$\sigma_{\hat{p}} = \sqrt{ \frac{p(1-p)}{n} }$$

Because **p** is unknown, we use $$\hat{p}$$ in its place.

---
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251127132519.png)
						_“Normal Approximation to Binomial Distribution”_

---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color:#cc33cc;">Confidence Intervals for Hypothesis Accuracy</strong></h2>

Confidence intervals quantify uncertainty.  
A **95% confidence interval** estimates the range in which true accuracy lies with 95% confidence.

The formula (normal approximation):

$$CI = \hat{p} \pm z \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

Where:

- $$\hat{p}$$ = sample accuracy
    
- **z** = 1.96 for 95% confidence
    
- **n** = test set size
    

Interpretation:

- Larger n → narrower interval
    
- Accuracy estimates become more reliable
    
- Uncertainty decreases as data increases
    

This is the basis for performance claims in ML research and engineering.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Hoeffding’s Inequality (Distribution-Free Bound)</strong></h3>

In case we do not want to assume a normal approximation, a non-parametric bound gives a powerful guarantee.

Hoeffding’s inequality states:

$$P(|\hat{p} - p| > \epsilon) \le 2e^{-2n\epsilon^2}$$

This gives worst-case guarantees:

- No need to assume the data is normally distributed
    
- Works for any hypothesis and any distribution
    
- Shows how estimation error decreases exponentially with sample size
    

This inequality forms the foundation of **Probably Approximately Correct (PAC)** learning.

---
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251127153850.png)
									_"Hoeffding Bound vs Sample Size”_
									

---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color:#cc33cc;">Basics of Sampling Theory</strong></h2>

Sampling theory underpins all statistical accuracy estimates.  
It explains how conclusions drawn from a sample reflect the larger population.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Key Principles of Sampling Theory</strong></h3>



<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">1. Independent and Identically Distributed (i.i.d.) Sampling</strong></h4>



Every example must be drawn from the same distribution and independently.  
If the sample is biased:

- Accuracy estimation becomes incorrect
    
- Confidence intervals become invalid
    
- Learning algorithms overfit to sample artifacts
    
<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">2. Law of Large Numbers</strong></h4>

As n → ∞,

$$\hat{p} \to p$$

Sample accuracy converges to true accuracy.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">3. Central Limit Theorem</strong></h4>

For large n:

$$\hat{p} \text{ becomes approximately normally distributed}$$

This justifies the use of normal-based confidence intervals.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">4. Sampling Error</strong></h4>

Even with perfect sampling, variability exists.  
Sampling error decreases at rate:

$$\sigma_{\hat{p}} \propto \frac{1}{\sqrt{n}}$$

Thus, doubling accuracy requires **quadrupling** data.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">5. Representativeness</strong></h4>

A small representative sample is more valuable than a large biased sample.

Practical failure modes include:

- Temporal drift
    
- Class imbalance
    
- Skewed examples
    
- Non-random test set selection
    
- Human labeling bias
    

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">The Sampling Distribution Of Accuracy</strong></h3>

The sampling distribution describes how accuracy values vary from sample to sample.

Key elements:

- **Mean** = true accuracy p
    
- **Variance** = ( p(1-p)/n )
    
- **Shape** → becomes normal for large samples
    

This distribution is the theoretical backbone for:

- Hypothesis testing
    
- Confidence intervals
    
- A/B comparisons
    
- Statistical significance
    

---
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251127154437.png)
									_“Sampling Distribution Curve”_ 

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Summary</strong></h3>

**We now have:** 

- A deep understanding of **why hypothesis evaluation is essential**
    
- A statistical foundation for **estimating true performance**
    
- A clear explanation of **accuracy as a binomial parameter estimation problem**
    
- Practical and theoretical tools such as:
    
    - Confidence intervals
        
    - Normal approximation
        
    - Hoeffding inequality
        
    - Sampling distributions
        
    - Law of large numbers
        




---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color:#cc33cc;">A General Approach for Deriving Confidence Intervals</strong></h2>

Confidence intervals estimate the **uncertainty** in the observed accuracy of a hypothesis.  
When we measure accuracy on a finite sample, we obtain only an **estimate**, not the true underlying accuracy.

The general approach for deriving confidence intervals proceeds through the following conceptual path:

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">1. Model the Prediction Process as Repeated Bernoulli Trials</strong></h3>

Each prediction made by a hypothesis is treated as a **Bernoulli trial**:

- **Success (1):** correct classification
    
- **Failure (0):** incorrect classification
    

If a test set contains **n independent examples**, and the hypothesis classifies **k of them correctly**, then the observed accuracy is:

$$  
\hat{p} = \frac{k}{n}  
$$

The number of correct predictions follows a **Binomial(n, p)** distribution.  
This probabilistic model forms the base for deriving confidence intervals.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">2. Estimate the Standard Error of the Accuracy</strong></h3>

The **variance** of a binomial variable with success probability (p) is:

$$  
Var = p(1-p)  
$$

When normalized by sample size:

$$  
SE(\hat{p}) = \sqrt{\frac{p(1-p)}{n}}  
$$

Since **p** is unknown, we use the sample estimate:

$$  
SE(\hat{p}) \approx \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}  
$$

This value quantifies the natural variability expected simply from sampling noise.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">3. Apply the Central Limit Theorem</strong></h3>

For sufficiently large **n**, the sampling distribution of **(\hat{p})** becomes approximately **normal**, regardless of the underlying distribution.

Thus:

$$  
\hat{p} \sim \mathcal{N}\left(p,, \frac{p(1-p)}{n}\right)  
$$

This approximation allows confidence intervals to be derived using the standard normal z-scores.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">4. Construct the Confidence Interval</strong></h3>

Using the normal approximation:

$$  
CI =  
\hat{p} \pm z_{\alpha/2}  
\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}  
$$

Where:

- ( \hat{p} ) = sample accuracy
    
- ( z_{\alpha/2} ) = critical value (1.96 for 95%)
    
- ( n ) = sample size
    

This gives a probabilistic range within which the **true accuracy** lies with the chosen confidence level.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">5. Interpretation</strong></h3>

A confidence interval is not a guarantee; it reflects the variability if we repeatedly sampled new test sets from the same distribution.

- **Wider intervals** mean more uncertainty
    
- **Narrower intervals** require larger n
    
- **Highly imbalanced data** produces misleadingly narrow or wide intervals depending on the minority class frequency
    

Thus, deriving confidence intervals is not just a formulaic exercise —  
it reflects deep interaction between **data size**, **noise**, **distribution shape**, and **error characteristics**.

---
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251127153808.png)
					_“Normal Approximation to Binomial Confidence Interval”_ 
					
---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Difference in Error of Two Hypotheses</strong></h3>

When comparing two hypotheses, we rarely care about their absolute accuracy alone.  
The central question becomes:

> **Is the difference in their performance statistically significant, or is it due to random variation in the test samples?**

This requires analyzing the **difference between two proportions**, each estimated from sampling.

---

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">1. Formulating the Difference in Errors</strong></h4> 

Let:

- Hypothesis $$( h_1 )$$ have sample accuracy $$( \hat{p}_1 )$$ on $$( n_1 )$$ examples
    
- Hypothesis $$( h_2 )$$ have sample accuracy $$( \hat{p}_2 )$$ on $$( n_2 )$$ examples
    

We define:

$$  
\Delta = \hat{p}_1 - \hat{p}_2  
$$

This observed difference is only an estimate of the true difference:

$$  
\Delta_{true} = p_1 - p_2  
$$

The goal is to determine **how confident we are that $$( \Delta_{true} )$$ differs from zero

---

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">2. Standard Error of the Difference</strong></h4>

If both samples are independent:

$$  
SE_\Delta  
= \sqrt{  
\frac{\hat{p}_1(1-\hat{p}_1)}{n_1}  
+  
\frac{\hat{p}_2(1-\hat{p}_2)}{n_2}  
}  
$$

This represents how much the observed difference $$( \Delta )$$ might fluctuate merely due to randomness.

---

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">3. Confidence Interval for the Difference</strong></h4>

A confidence interval for the difference is:

$$  
CI_\Delta = \Delta \pm z_{\alpha/2} , SE_\Delta  
$$

Interpretation:

- If the interval **includes 0**, there is **no statistically significant difference**.
    
- If it **excludes 0**, the difference is meaningful and not due to noise.
    

This condition is essential for model comparison, where tiny numerical differences may not justify preferring one hypothesis over another.

---

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">4. Paired Difference Scenario</strong></h4>

Often both hypotheses are tested on the **same test set**, producing **paired outcomes** (correct/incorrect per instance).

In this scenario:

- Let $$( d_i = 1 )$$ if $$( h_1 )$$ is correct and $$( h_2 )$$ incorrect
    
- Let $$( d_i = -1 )$$ if $$( h_2 )$$ is correct and $$( h_1 )$$ incorrect
    
- Let $$( d_i = 0 )$$ otherwise
    

The sample mean:

$$  
\bar{d} = \frac{1}{n} \sum_{i=1}^n d_i  
$$

represents the average advantage of $$( h_1 )$$ over $$( h_2 ).$$

A paired t-test or normal approximation can be used to determine significance.

---

![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251127155517.png)
							_“Difference-of-Proportions Comparison Diagram”_ 
			
---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color:#cc33cc;">Comparing Learning Algorithms</strong></h2>

Comparing learning algorithms is not simply about checking which one yields higher accuracy.  
It requires a systematic evaluation process grounded in statistics, fairness, and robustness.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">1. The Problem of Overgeneralization</strong></h3>

A single test–train split may accidentally:

- Favor algorithms that benefit from the structure of a particular split
    
- Misrepresent true differences
    
- Mask performance in rare edge cases
    
- Produce unstable conclusions
    

Thus, algorithm comparison must use **repeatable, unbiased sampling procedures**.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">2. k-Fold Cross-Validation</strong></h3>

The dataset is split into **k non-overlapping folds**:

- Train on k–1 folds
    
- Test on the remaining fold
    
- Repeat this process k times
    
- Aggregate performance across all folds
    

Advantages:

- Reduces variance in performance estimates
    
- Utilizes all data for both training and testing
    
- Uncovers sensitivity to data distribution
    

Common choices: **k = 5 or 10**.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">3. Repeated k-Fold or Bootstrap Methods</strong></h3>

**Bootstrap sampling** creates multiple datasets by resampling with replacement.  
Each bootstrap sample is used to:

- Train an algorithm
    
- Test it on the non-sampled items (“out-of-bag” samples)
    

This provides stable estimates of:

- Variance
    
- Bias
    
- Confidence intervals
    
- Algorithm robustness
    

This is valuable when datasets are small or noisy.

---

<h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">4. Statistical Tests for Algorithm Comparison</strong></h3>

To judge whether one algorithm is _truly_ better:

- Compute the per-fold difference in performance
    
- Treat each fold as a pair
    
- Conduct a **paired statistical test** to decide whether the difference is significant
    

Popular tests:

- **Paired t-test**
    
- **Wilcoxon signed-rank test**
    
- **McNemar test** (for paired classification decisions)
    

These tests prevent misleading conclusions caused by random fluctuations.

---

 <h3 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">5. Fairness in Comparison</strong></h3>

A fair comparison requires:

- Same data preprocessing
    
- Same features
    
- Same training/test splits
    
- Same performance metrics
    
- Same hyperparameter tuning protocol
    
- Repeated experiments and aggregated results
    

Comparing algorithms without equal treatment leads to biased and invalid conclusions.

---
![](/assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251127160303.png)
						
						_“k-Fold Cross-Validation Diagram”_ 

---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color:#cc33cc;">Summary</strong></h2>

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;"> Confidence Intervals</strong></h4>

Derived using binomial modeling + normal approximation.  
Give an uncertainty range for estimated accuracy.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;">Difference in Error of Two Hypotheses</strong></h4>

Analyzed using difference of proportions, standard error, and interval tests.  
Shows whether performance differences are meaningful.

<h4 class="page-header" style="text-align: left; color: blue;"><strong style="color:#cc33cc;"> Comparing Algorithms</strong></h4>

Uses structured evaluation (CV, bootstrap) + statistical tests to ensure fairness.  
Prevents misleading conclusions from isolated train–test splits.

Together, these concepts form the **scientific foundation of machine learning evaluation**.  
They ensure that decisions about algorithms are **data-driven, statistically grounded, and reproducible**.

---
