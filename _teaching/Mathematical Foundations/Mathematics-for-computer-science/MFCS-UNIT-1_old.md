---
title: Unit-1 Mathematical Logic and Predicate Calculus
layout: page
permalink: /teaching/Mathematical Foundations/Mathematics-for-computer-science/MFCS-UNIT-1/
hide_title: true
parent: Mathematics For Computer Science
grand_parent: Mathematical Foundations
math: true
wide: false
---


<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">Mathematical Logic</strong>
</h2>

Mathematical logic provides the formal language used to express statements, construct arguments, and reason about program correctness.  
This section covers statements, logical connectives, well-formed formulas, truth tables, and tautologies, following the foundations presented in standard discrete mathematics textbooks _(Tremblay, Ch.1)_ _(Liu, Ch.1)_.

---


<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">1. Statements and Notation</strong>
</h3>

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">1.1 Definition of a Statement</strong>
</h4>


A **statement** (proposition) is a declarative sentence that has a definite truth value—either **True** or **False**, but never both _(Tremblay, pp.1–3)_ _(Liu, pp.1–2)_.

**Examples (statements)**

- “7 is an odd number.”
    
- “The Earth orbits the Sun.”
    
- “10 < 3.”
    

**Not statements**

- “Close the door.”
    
- “What is your name?”
    
- “x + 5 = 12” (open sentence)
    

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">1.2 Statement Variables</strong>
</h4>


Logic uses variables such as **P, Q, R** to denote statements _(Tremblay, p.4)_.  
These allow formation of compound expressions.

Example:

- P: “It is raining.”
    
- Q: “The ground is wet.”
    


<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">1.3 Practice Problems</strong>
</h3>

 **Problem 1**

Identify whether the following is a statement:  
**“All even numbers are divisible by 4.”**

**Solution:**  
False. Not all even numbers (e.g., 6, 10) are divisible by 4.  
(Valid statement because it has a truth value.)

---

 **Problem 2**

Is “x > 12” a statement?

**Solution:**  
Not a statement. Truth depends on x → an _open sentence_.

---

 **Problem 3**

Classify the following as True (T) or False (F):  
**“0 is a natural number.”**

**Solution:**  
Depends on definition. Under CS conventions (including Tremblay), 0 ∈ ℕ.  
So True.

---

 **Problem 4**

Is the sentence “Please submit your assignment” a statement?

**Solution:**  
No. It is a command.

---

 **Problem 5**

Let P = “The sky is blue today.”  
Is P a logically valid statement even if weather changes?

**Solution:**  
Yes. A statement is evaluated at a moment. It has a definite truth value.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">2. Logical Connectives</strong>
</h3>


Logical connectives combine statements into compound expressions whose truth values are determined by truth tables _(Tremblay, pp.7–18)_.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">2.1 Negation (¬P)</strong>
</h4>


Negation reverses the truth value of P.

|P|¬P|
|---|---|
|T|F|
|F|T|

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">2.2 Conjunction (P ∧ Q)</strong>
</h4>


Represents “P and Q”.

|P|Q|P ∧ Q|
|---|---|---|
|T|T|T|
|T|F|F|
|F|T|F|
|F|F|F|

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">2.3 Disjunction (P ∨ Q)</strong>
</h4>

Represents “P or Q” (inclusive OR).

| P   | Q   | P ∨ Q |
| --- | --- | ----- |
| T   | T   | T     |
| T   | F   | T     |
| F   | T   | T     |
| F   | F   | F     |

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">2.4 Implication (P → Q)</strong>
</h4>


False only when P is true and Q is false.

|P|Q|P → Q|
|---|---|---|
|T|F|F|
|T|T|T|
|F|T|T|
|F|F|T|

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">2.5 Biconditional (P ↔ Q)</strong>
</h4>

True when P and Q have the same truth value.

|P|Q|P ↔ Q|
|---|---|---|
|T|T|T|
|T|F|F|
|F|T|F|
|F|F|T|

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">2.6 Practice Problems</strong>
</h3>


 **Problem 1**

Given P = True and Q = False, compute:  
a) ¬P  
b) P ∧ Q  
c) P ∨ Q  
d) P → Q  
e) P ↔ Q

**Solution:**  
a) F  
b) F  
c) T  
d) F  
e) F

---

 **Problem 2**

Write the negation of the statement:  
**“All students submitted the assignment.”**

**Solution:**  
“There exists at least one student who did not submit the assignment.”

---

 **Problem 3**

Simplify using truth tables:  
**(P ∧ Q) ∨ P**

**Solution:**  
Equivalent to **P** (absorption law).  
(Confirmed via full table.)

---

 **Problem 4**

Determine the truth value of:  
**(P → Q) ∧ (¬Q)**  
when P = True and Q = False.

**Solution:**  
P → Q = F  
¬Q = T  
So whole expression = **F ∧ T = F**

---

 **Problem 5**

Find when the expression **P ∨ (¬P ∧ Q)** is False.

**Solution:**  
Construct truth table:

|P|Q|¬P|¬P ∧ Q|P ∨ (¬P ∧ Q)|
|---|---|---|---|---|
|T|T|F|F|T|
|T|F|F|F|T|
|F|T|T|T|T|
|F|F|T|F|**F**|

Expression is false only when **P = F, Q = F**.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">3. Well-Formed Formulas (WFFs)</strong>
</h3>
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">3.1 Formation Rules</strong>
</h4>

A **WFF** is a syntactically correct logical expression formed as follows _(Tremblay, p.20)_:

1. Any statement variable is a WFF.
    
2. If P is a WFF, then ¬P is a WFF.
    
3. If P and Q are WFFs, then
    
    - (P ∧ Q), (P ∨ Q), (P → Q), (P ↔ Q) are WFFs.
        
4. Nothing else is a WFF.
    

**Examples:**

- (P ∧ Q)
    
- ¬(P → Q)
    
- ((P ∨ R) ∧ ¬Q)
    


<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">3.2 Practice Problems</strong>
</h3>


**Problem 1**

Determine whether the following is a WFF:  
**¬(P ∧ (Q → R))**

**Solution:**  
Valid WFF: follows recursive formation rules.

---

**Problem 2**

Is the expression **P Q ∧ → R** a WFF?

**Solution:**  
Not a WFF. Operators incorrectly placed.

---

**Problem 3**

Construct a WFF using variables P, Q, R and at least two connectives.

**Sample Solution:**  
**(P → Q) ∧ ¬R**

---

**Problem 4**

Check if **((P ∧ Q)** is a WFF.

**Solution:**  
Not a WFF. Missing closing parenthesis.

---

**Problem 5**

Is **(¬¬P ∨ (Q → R))** a WFF?

**Solution:**  
Yes. Negation rule and binary connective rules satisfied.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">4. Truth Tables</strong>
</h3>
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">4.1 Construction of Truth Tables</strong>
</h4>
Truth tables enumerate all possible truth-value combinations of a WFF.  They allow verification of equivalence and validity.

Example for (P ∨ Q) → P:

|P|Q|P ∨ Q|(P ∨ Q) → P|
|---|---|---|---|
|T|T|T|T|
|T|F|T|T|
|F|T|T|F|
|F|F|F|T|


 <h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">4.2 Practice Problems</strong>
</h3>


**Problem 1**

Construct the truth table for:  
**P → (Q ∧ R)**

**Solution:**

|P|Q|R|Q ∧ R|P → (Q ∧ R)|
|---|---|---|---|---|
|T|T|T|T|T|
|T|T|F|F|F|
|T|F|T|F|F|
|T|F|F|F|F|
|F|T|T|T|T|
|F|T|F|F|T|
|F|F|T|F|T|
|F|F|F|F|T|

---

**Problem 2**

Find when **(P ∨ Q) ∧ ¬P** is true.

**Solution:**  
True only when P = F and Q = T.

---

 **Problem 3**

Construct the truth table for **¬(P ∨ Q)**.

**Solution:**

|P|Q|P ∨ Q|¬(P ∨ Q)|
|---|---|---|---|
|T|T|T|F|
|T|F|T|F|
|F|T|T|F|
|F|F|F|T|

---

**Problem 4**

Check if **(P ↔ Q)** and **(P → Q) ∧ (Q → P)** have identical truth tables.

**Solution:**  
Yes. They match in all rows → logically equivalent.

---

**Problem 5**

Complete the table for **¬P → Q** and determine when it is false.

|P|Q|¬P|¬P → Q|
|---|---|---|---|
|T|T|F|T|
|T|F|F|T|
|F|T|T|T|
|F|F|T|**F**|

False only when **P = F, Q = F**.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">5. Tautologies</strong>
</h3>
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">5.1 Definition and Examples</strong>
</h4>


A **tautology** is a WFF that is **true for every possible assignment** of truth values.

Classic examples:

- P ∨ ¬P
    
- (P → Q) ↔ (¬Q → ¬P)
    

A truth table is the standard method to determine tautologies.


<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">5.2 Practice Problems</strong>
</h3>


**Problem 1**

Show using truth table that **P ∨ ¬P** is a tautology.

**Solution:**

|P|¬P|P ∨ ¬P|
|---|---|---|
|T|F|T|
|F|T|T|

Always true → tautology.

---

 **Problem 2**

Check whether **(P → Q) ∨ P** is a tautology.

**Solution:**  
Truth table shows at least one false row → NOT a tautology.

---

**Problem 3**

Is **(P ∨ Q) ↔ (Q ∨ P)** a tautology?

**Solution:**  
Yes. Both expressions always match → commutativity ensures tautology.

---

 **Problem 4**

Determine whether **(P ∧ Q) → P** is a tautology.

**Solution:**  
Yes. P ∧ Q being true guarantees P is true → always T in table.

---

**Problem 5**

Test if **(P ∧ ¬P)** is a tautology, contradiction, or contingency.

**Solution:**  
Always false → **Contradiction**.

---
---
<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">Equivalence, Implication, Normal Forms & Rules of Inference</strong>
</h2>


<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">6. Logical Equivalence</strong>
</h4>

<p style="text-align: justify;"> Logical equivalence is the foundational relationship between two formulas that always share the same truth value regardless of how truth assignments are made. If two propositions are equivalent, replacing one with the other in any expression never alters the logical meaning of the expression. </p> <p style="text-align: justify;"> Equivalence is denoted by symbols such as <strong>P ≡ Q</strong> or <strong>P ↔ Q</strong>. To demonstrate equivalence, we typically use truth tables or apply known equivalence laws such as commutativity, associativity, distributive laws, De Morgan’s laws, double negation, implication elimination, or biconditional elimination. </p> <p style="text-align: justify;"> Examples of standard equivalences include: - <em>P → Q</em> is equivalent to <em>¬P ∨ Q</em>. - <em>¬(P ∧ Q)</em> is equivalent to <em>¬P ∨ ¬Q</em>. - <em>P ↔ Q</em> is equivalent to <em>(P → Q) ∧ (Q → P)</em>. Such transformations are essential when simplifying complex statements or preparing them for normal-form conversion.</p>

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">6.1 Practice Problems</strong>
</h3>

**Problem 1:**  
Show that ¬(P ∧ Q) is equivalent to ¬P ∨ ¬Q.  
**Solution:**  
Truth-table comparison confirms identical outputs; this is De Morgan’s law.

**Problem 2:**  
Prove that (P ∨ Q) ∧ P is equivalent to P.  
**Solution:**  
Whenever P is true, the expression is true; when P is false, entire expression is false → matches P.

**Problem 3:**  
Show that P ↔ Q is equivalent to (P ∧ Q) ∨ (¬P ∧ ¬Q).  
**Solution:**  
Truth-table yields true only when both are true or both are false.

**Problem 4:**  
Simplify (P → Q) ∧ P using equivalences.  
**Solution:**  
(P → Q) ∧ P ≡ (¬P ∨ Q) ∧ P ≡ (P ∧ Q).

**Problem 5:**  
Show P ∨ (P ∧ Q) ≡ P.  
**Solution:**  
Absorption law.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">7. Implication</strong>
</h4>
<p style="text-align: justify;"> Implication expresses a conditional relationship of the form <strong>P → Q</strong>, read as “If P then Q”. The conditional is false only in the scenario where P is true and Q is false. In propositional logic, implication does not express causal or temporal relation; it expresses a truth-functional condition. </p> <p style="text-align: justify;"> An important way to simplify implications is to use equivalence transformations: </p>

- P → Q ≡ ¬P ∨ Q
    
- ¬(P → Q) ≡ P ∧ ¬Q
    
- P ↔ Q ≡ (P → Q) ∧ (Q → P)
    

<p style="text-align: justify;"> Implication rules are central to proofs, program correctness conditions, and inference derivations. </p>

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">7.1 Practice Problems</strong>
</h3>


**Problem 1:**  
Rewrite P → (Q ∧ R) using only ¬ and ∨.  
**Solution:**  
¬P ∨ (Q ∧ R).

**Problem 2:**  
Simplify ¬(P → Q).  
**Solution:**  
P ∧ ¬Q.

**Problem 3:**  
Show that (P → Q) ∨ (P → R) is equivalent to P → (Q ∨ R).  
**Solution:**  
Rewrite each implication using ¬P ∨ … and compare.

**Problem 4:**  
Determine the truth value of P → Q when P is false.  
**Solution:**  
Always true.

**Problem 5:**  
Show that (¬P → ¬Q) is equivalent to (Q → P).  
**Solution:**  
Convert both to disjunction forms and verify equivalence.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">8. Normal Forms (CNF & DNF)</strong>
</h4>

<p style="text-align: justify;"> A logical formula can be rewritten systematically into a standard structured form known as a <strong>normal form</strong>. The two most widely used normal forms are: </p> <p style="text-align: justify;"> <strong>Conjunctive Normal Form (CNF):</strong> A conjunction of disjunctions. Example: (P ∨ Q) ∧ (¬P ∨ R). </p> <p style="text-align: justify;"> <strong>Disjunctive Normal Form (DNF):</strong> A disjunction of conjunctions. Example: (P ∧ Q) ∨ (¬P ∧ R). </p> <p style="text-align: justify;"> To convert a formula into CNF or DNF, the typical steps include removing implications, reducing negations (using De Morgan's laws), applying distributive laws, and arranging the final structure into the standardized conjunction-of-disjunctions (or vice versa). Normal forms are essential in theorem proving, automated reasoning, and computer implementation of logic. </p>

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">8.1 Practice Problems</strong>
</h3>


**Problem 1:**  
Convert ¬(P → Q) into CNF.  
**Solution:**  
¬(¬P ∨ Q) → P ∧ ¬Q (already CNF).

**Problem 2:**  
Write (P ∧ (Q ∨ R)) in DNF.  
**Solution:**  
(P ∧ Q) ∨ (P ∧ R).

**Problem 3:**  
Convert (P → Q) ∧ (R → P) to CNF.  
**Solution:**  
(¬P ∨ Q) ∧ (¬R ∨ P) (already CNF).

**Problem 4:**  
Write (¬P ∨ Q) ∧ (¬Q ∨ R) as a verbal statement.  
**Solution:**  
“If P is true then Q is true, and if Q is false then R is true.”

**Problem 5:**  
Convert ¬(P ∨ ¬Q) into CNF.  
**Solution:**  
¬P ∧ Q.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">9. Theory of Inference & Rules of Inference</strong>
</h4>
<p style="text-align: justify;"> Inference theory establishes how new statements can be derived logically from existing ones. The process of deriving valid conclusions uses structured rules known as <strong>rules of inference</strong>. These rules ensure that we move from premises to conclusion without violating logical consistency. </p> <p style="text-align: justify;"> Some common rules include: </p>

- <strong>Modus Ponens:</strong> From P and (P → Q), infer Q.
    
- <strong>Modus Tollens:</strong> From ¬Q and (P → Q), infer ¬P.
    
- <strong>Simplification:</strong> From (P ∧ Q), infer P.
    
- <strong>Conjunction:</strong> From P and Q, infer (P ∧ Q).
    
- <strong>Addition:</strong> From P, infer (P ∨ Q).
    
- <strong>Hypothetical Syllogism:</strong> From (P → Q) and (Q → R), infer (P → R).
    

<p style="text-align: justify;"> Inference principles form the basis of proof systems used in mathematics, computer science, and automated theorem proving. </p>


---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">9.1 Practice Problems</strong>
</h3>


**Problem 1:**  
Using Modus Ponens:  
P: “It is raining.”  
P → Q: “If it is raining, the ground is wet.”  
Infer Q.  
**Solution:**  
Conclusion: “The ground is wet.”

---

**Problem 2:**  
Using Modus Tollens:  
P → Q and ¬Q.  
Infer ¬P.  
**Solution:**  
Premises tell us Q must be true if P is true. Q is false → therefore P is false.

---

**Problem 3:**  
From (P ∧ Q), infer P.  
**Solution:**  
Rule of simplification.

---

**Problem 4:**  
Given (P → Q) and (Q → R), infer (P → R).  
**Solution:**  
Hypothetical syllogism.

---

**Problem 5:**  
From P, infer (P ∨ R).  
**Solution:**  
Rule of addition.

---
---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">10. Consistency of Premises and Indirect Method of Proof</strong>
</h3>

A set of premises is said to be **consistent** when there exists at least one assignment of truth values that makes **all** the premises true at the same time. Logical systems rely on this requirement because if premises become inconsistent, **any conclusion** can be derived from them. This phenomenon is known as the _principle of explosion_ (from contradiction, anything follows).

To test whether a set of premises is consistent, we consider their conjunction. If the conjunction has at least one truth-table row evaluating to **True**, the set is consistent. If no such row exists, the premises are **inconsistent**.  
Example: the set {P, ¬P} is inconsistent because there is no truth assignment where both P and ¬P are true simultaneously.

The **indirect method of proof**, also known as **proof by contradiction** or _reductio ad absurdum_, is a classical method used when direct proof is not straightforward. The technique begins by **assuming the negation** of the desired conclusion. If this assumption leads logically to a contradiction—such as a statement and its negation, or an impossibility—then the assumption must be false. Consequently, the original statement is proven true.

A typical structure of an indirect proof is:

- Assume ¬S, where S is the proposition to be proved.
    
- Combine ¬S with the given premises.
    
- Derive a contradiction using standard inference rules.
    
- Conclude that ¬S is false, so S must be true.
    

This method is widely used in mathematics, computer science proofs, and automated reasoning where contradiction detection is easier than constructive demonstration.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">10.1 Practice Problems</strong>
</h4>

**Problem 1:**  
Determine whether the set of premises {P ∧ Q, ¬Q} is consistent.  
**Solution:**  
From P ∧ Q, Q must be true; but from ¬Q, Q is false. Contradiction → inconsistent.

---

**Problem 2:**  
Use indirect reasoning to prove that “If P ∧ ¬P is false, then P is not always false.”  
**Solution:**  
Assume the negation: assume P is always false. Then P ∧ ¬P becomes False ∧ True = False, which matches the premise and produces no contradiction. However, if P were always false, ¬P would always be true, making P ∧ ¬P false—but no contradiction arises. The indirect proof shows that assuming “P is always false” leads to no contradiction; the statement reduces to evaluating logical structure, where the key contradiction arises in the interpretation of “always.” Therefore, indirect proof identifies that the assertion depends solely on the contradiction within P ∧ ¬P.

---

**Problem 3:**  
Check consistency of {P → Q, P, ¬Q}.  
**Solution:**  
From P and P → Q, Q must be true. But ¬Q says Q is false. Contradiction → inconsistent set.

---

**Problem 4:**  
Use proof by contradiction to show that ¬(P → Q) implies P ∧ ¬Q.  
**Solution:**  
Assume the opposite (its negation): suppose ¬(P → Q) is true but P ∧ ¬Q is false.  
From ¬(P → Q), we know the implication is false → P is true and Q is false.  
So P ∧ ¬Q must be true, contradicting the assumption.  
Hence, ¬(P → Q) → (P ∧ ¬Q).

---

**Problem 5:**  
Check whether the set {P ∨ Q, ¬P, ¬Q} is consistent.  
**Solution:**  
¬P and ¬Q together imply both are false → P ∨ Q is false.  
But the premise states P ∨ Q is true.  
Contradiction → inconsistent.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">11. Automatic Theorem Proving</strong>
</h3>

Automatic theorem proving refers to the algorithmic process by which a computer proves logical formulas without human intervention. The goal is to convert logical reasoning into **mechanical procedures** based on formal rules and symbolic manipulation. Automated systems operate entirely through syntax, without interpreting the meaning of statements.

These systems generally rely on:

- **Normal form conversion**
    
- **Resolution principle**
    
- **Unification algorithms**
    
- **Search strategies** (depth-first, breadth-first, heuristic-guided)
    
- **Inference rules** applied systematically
    

Automatic theorem proving begins by transforming statements into a standardized form, such as Conjunctive Normal Form (CNF). Once transformed, algorithms like **resolution** repeatedly apply inference rules to derive contradictions or conclusions.  
If the negation of a desired conclusion leads to an explicit contradiction under systematic rule application, then the conclusion is proven.

Automatic theorem proving is foundational to areas like:

- Logic programming
    
- SAT solvers
    
- AI reasoning engines
    
- Prolog inference
    
- Formal verification of software
    
- Symbolic mathematics
    

The emphasis is on converting logical reasoning into steps a machine can perform efficiently and reliably.

---

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">11.1 Practice Problems</strong>
</h4>


**Problem 1:**  
Convert the formula ¬(P → Q) into CNF for use in resolution.  
**Solution:**  
¬(¬P ∨ Q) → P ∧ ¬Q.

---

**Problem 2:**  
Given clauses {P ∨ R} and {¬P ∨ Q}, perform one resolution step.  
**Solution:**  
Resolvent: R ∨ Q.

---

**Problem 3:**  
Explain why CNF is required in resolution-based theorem proving.  
**Solution:**  
Resolution works only on disjunctions of literals; CNF ensures all formulas are decomposed into such clauses.

---

**Problem 4:**  
Show the first step in proving (P → Q) using automated negation.  
**Solution:**  
Negate the goal Q and add ¬Q to the clause set along with clauses from P → Q → (¬P ∨ Q).

---

**Problem 5:**  
In an automated prover, why is unification necessary?  
**Solution:**  
Unification identifies compatible literals across clauses so resolution can be applied; without matching structures, inference cannot proceed.

---
---

<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">Predicate Calculus</strong>
</h2>
Predicate calculus extends propositional logic by allowing internal structure within statements.  
While propositional logic treats entire statements as indivisible units, predicate logic analyzes the **objects**, **properties**, and **relations** inside statements.  
This expansion makes predicate calculus expressive enough to model mathematical reasoning, database queries, program verification, and formal specifications.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">12. Predicates and Statement Functions</strong>
</h3>
A **predicate** is an expression containing variables that becomes a statement when the variables are assigned specific values.  
Predicates represent properties or relations.

Examples:

- “x is even” → predicate **E(x)**
    
- “x is greater than y” → predicate **G(x, y)**
    
- “x is a student” → predicate **S(x)**
    

A predicate becomes a **statement** only when each variable takes a value.  
For example, E(4) is a true statement; E(5) is false.

A predicate with variables is also called a **statement function** because it becomes a statement when arguments (“inputs”) are provided.

Predicates allow logic to speak about _classes_ of objects, not just entire statements.  
This is the key extension beyond propositional logic.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">12.1 Practice Problems</strong>
</h4>

**Problem 1:**  
Classify P(x): “x is a prime number” as predicate or statement.  
**Solution:**  
Predicate (depends on x).

---

**Problem 2:**  
Evaluate S(x): “x is an even integer” for x = 14.  
**Solution:**  
True.

---

**Problem 3:**  
Let R(x, y): “x divides y.” Evaluate R(4, 20).  
**Solution:**  
True; 20 ÷ 4 = 5.

---

**Problem 4:**  
Determine whether P(x): “x > 10” is a statement or statement function.  
**Solution:**  
Statement function (depends on x).

---

**Problem 5:**  
Is “x + y = y + x” a predicate?  
**Solution:**  
Yes. It becomes true/false when x and y are given.

---
---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">13. Variables and Quantifiers</strong>
</h3>


Predicate logic uses variables to represent objects in a domain and quantifiers to express generality.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">13.1 Universal Quantifier (∀)</strong>
</h4>


The symbol **∀x P(x)** means “P(x) is true for all x.”

Examples:

- ∀x (x + 0 = x)
    
- ∀n (n² ≥ 0)
    

Universal statements assert global truth.

<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">13.2 Existential Quantifier (∃)</strong>
</h4>

The symbol **∃x P(x)** means “There exists at least one x such that P(x) is true.”

Examples:

- ∃x (x is even)
    
- ∃x (x > 100)
    

Existential statements assert that at least one object satisfies the predicate.

Quantifiers allow compact, expressive representation of mathematical facts and constraints used in databases, program specification, and theorem proving.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">13.3 Practice Problems</strong>
</h4>

**Problem 1:**  
Interpret ∀x (x > 0 → x² > 0).  
**Solution:**  
“All positive numbers have positive squares.”

---

**Problem 2:**  
Is ∃x (x² = 25) true over the integers?  
**Solution:**  
Yes; x = 5 or x = -5.

---

**Problem 3:**  
Write “All birds can fly” using quantifiers.  
**Solution:**  
∀x (Bird(x) → Fly(x)).

---

**Problem 4:**  
Negate ∀x P(x).  
**Solution:**  
∃x ¬P(x).

---

**Problem 5:**  
Negate ∃x (x is prime).  
**Solution:**  
∀x (x is not prime).

---

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">14. Predicate Formulas</strong>
</h3>


Predicate formulas are built recursively from predicates, logical connectives, and quantifiers.

A predicate formula may include:

- atomic predicates: P(x), R(x, y)
    
- logical connectives: ∧, ∨, →, ¬
    
- quantifiers: ∀, ∃
    
- nested expressions: ∀x (P(x) → ∃y R(x, y))
    

Predicate formulas express mathematical statements like:

- ∀x ∃y (x < y)
    
- ∀x (Prime(x) → ∃y Factor(y, x))
    

These formulas form the basis for formal reasoning in mathematics and computer science.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">14.1 Practice Problems</strong>
</h4>

**Problem 1:**  
Is ∀x (P(x) ∨ ¬Q(x)) a predicate formula?  
**Solution:**  
Yes; it uses predicates, connectives, and quantifier correctly.

---

**Problem 2:**  
Convert “Every student submitted some assignment” to a predicate formula.  
**Solution:**  
∀x (Student(x) → ∃y Submitted(x, y)).

---

**Problem 3:**  
Express “Some number is divisible by all positive integers.”  
**Solution:**  
∃x ∀n (n > 0 → Divides(n, x)).

---

**Problem 4:**  
Is ¬∀x ∃y P(x, y) equivalent to ∃x ∀y ¬P(x, y)?  
**Solution:**  
No. Correct negation: ¬∀x ∃y P(x, y) = ∃x ¬∃y P(x, y) = ∃x ∀y ¬P(x, y).

---

**Problem 5:**  
Write a predicate formula expressing “Every prime is odd except 2.”  
**Solution:**  
∀x (Prime(x) ∧ x ≠ 2 → Odd(x)).

---
---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">15. Free and Bound Variables</strong>
</h3>


A variable is **bound** if it lies within the scope of a quantifier.  
A variable is **free** if it is not bound by any quantifier.

Examples:

- In ∀x P(x), x is **bound**.
    
- In P(x) ∧ Q(y), both x and y are **free**.
    
- In ∃y (R(x, y)), y is bound but x is free.
    

A formula with **no free variables** is a **closed formula** or a **sentence**.  
Closed formulas have definite truth values; formulas with free variables do not.

Understanding free and bound variables is essential when substituting, manipulating formulas, or avoiding variable capture during transformations.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">15.1 Practice Problems</strong>
</h4>

**Problem 1:**  
Identify free and bound variables in ∀x (P(x) ∨ Q(y)).  
**Solution:**  
x is bound; y is free.

---

**Problem 2:**  
Is ∃y (R(x, y)) a closed formula?  
**Solution:**  
No. x is free → formula is open.

---

**Problem 3:**  
Convert P(x) ∧ ∃x Q(x) into a form without variable collision.  
**Solution:**  
Rename: P(x) ∧ ∃z Q(z).

---

**Problem 4:**  
Which variable is bound in ∀z (S(z) → T(x))?  
**Solution:**  
z is bound; x is free.

---

**Problem 5:**  
Determine if ∀x (∃y R(x, y)) has free variables.  
**Solution:**  
No; both x and y are bound → closed formula.

---

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">16. Universe of Discourse</strong>
</h3>

The **universe of discourse** (domain) is the set of objects over which the variables of a predicate formula range.  
The truth of quantified statements depends entirely on the chosen universe.

Examples:

- Over ℕ: “∀x (x + 1 > x)” is true.
    
- Over negative integers: “∃x (x > 0)” is false.
    
- Over real numbers: “∀x (x² ≥ 0)” is true.
    

Choosing the universe is crucial when interpreting logical formulas, especially in mathematics, databases, and formal specifications.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">16.1 Practice Problems</strong>
</h4>
**Problem 1:**  
Evaluate ∀x (x > 0) over integers.  
**Solution:**  
False; negative integers exist.

---

**Problem 2:**  
Interpret ∃x (x² = 2) over rationals.  
**Solution:**  
False; √2 is irrational.

---

**Problem 3:**  
Is ∃x (x < 0) true over natural numbers?  
**Solution:**  
No.

---

**Problem 4:**  
Is ∀x (x + 5 ≠ x) true over all real numbers?  
**Solution:**  
Yes.

---

**Problem 5:**  
Interpret ∀x ∃y (x + y = 0) over real numbers.  
**Solution:**  
True; y = −x works.

---

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">17. Inference Theory of Predicate Calculus</strong>
</h3>
Inference theory in predicate logic extends propositional inference by incorporating quantifiers and predicates.  
Inference rules allow us to derive new logical truths from known ones while respecting quantifier structure.

Important rules include:

- **Universal Instantiation (UI):**  
    From ∀x P(x), infer P(a).
    
- **Universal Generalization (UG):**  
    From P(x) (x arbitrary), infer ∀x P(x).
    
- **Existential Instantiation (EI):**  
    From ∃x P(x), introduce a new symbol c such that P(c).
    
- **Existential Generalization (EG):**  
    From P(a), infer ∃x P(x).
    

These rules allow formal reasoning about mathematical properties, database constraints, and computational logic.

---
<h4 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">17.1 Practice Problems</strong>
</h4>

**Problem 1:**  
From ∀x (S(x) → T(x)) and S(a), infer T(a).  
**Solution:**  
UI gives S(a) → T(a); Modus Ponens gives T(a).

---

**Problem 2:**  
From ∃x P(x), infer a specific P(c).  
**Solution:**  
EI: introduce constant c such that P(c).

---

**Problem 3:**  
From P(a), infer ∃x P(x).  
**Solution:**  
EG.

---

**Problem 4:**  
Given ∀x (P(x)) and ∀x (P(x) → Q(x)), prove ∀x Q(x).  
**Solution:**  
UI: P(a); UI: P(a) → Q(a); MP gives Q(a); UG yields ∀x Q(x).

---

**Problem 5:**  
Is the following valid? From ∃x P(x), infer ∀x P(x).  
**Solution:**  
Invalid; existential does not imply universal.

---

