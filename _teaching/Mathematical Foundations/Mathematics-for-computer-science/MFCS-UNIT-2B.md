---
title: Unit-2B Algebraic Structures
layout: page
permalink: /teaching/Mathematical Foundations/Mathematics-for-computer-science/MFCS-UNIT-2B/
hide_title: true
parent: Mathematics For Computer Science
grand_parent: Mathematical Foundations
math: true
wide: false
---


---

<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">ALGEBRAIC STRUCTURES</strong>
</h2>


An algebraic structure arises whenever a set is equipped with one or more operations that describe how its elements combine. Instead of focusing on what the elements _are_, algebra studies **how the elements interact**. This viewpoint allows a unified treatment of many systems—integers, real numbers, logical values, matrices, and strings.

Every structure begins with the same idea: a **set** and **operations** acting on that set. By examining the properties of these operations, we classify structures such as semigroups, monoids, groups, and more.

---


<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">ALGEBRAIC SYSTEMS</strong>
</h2>

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Intuition and Motivation</strong>
</h3>
An algebraic system is the starting point for all algebraic structures. It consists of a **set** of objects and the **operations** defined on them. The set could be numbers, symbols, strings, or matrices, and the operations could be arithmetic, logical, or combinational.

Despite differences among examples, they all share the same structural form:

**A set + operations → an algebraic system**

This abstraction allows different mathematical worlds to be studied using common principles.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Formal Definition</strong>
</h3>

An **algebraic system** is written as:

$$  
(A, F)  
$$

where:

- $A$ is a non-empty set
    
- $F = {f_1, f_2, \dots, f_n}$ is a family of operations on $A$
    

A **$k$-ary operation** on $A$ is a function:

$$  
f : A^k \rightarrow A  
$$

Special cases:

- **Nullary** ($k=0$): constant element
    
- **Unary** ($k=1$): $f(a)$
    
- **Binary** ($k=2$): $f(a,b)$
    

This framework is flexible enough to model simple systems like integer addition and complex systems like automata and logic.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples of Algebraic Systems</strong>
</h3>

### **1. Integers under addition**

Set: $\mathbb{Z}$  
Operation: $+$

Closed and well-defined.

---

### **2. Real numbers under multiplication**

Set: $\mathbb{R}$  
Operation: $\times$

---

### **3. Boolean algebra**

Set: ${0,1}$  
Operations: $\land$, $\lor$, $\neg$

---

### **4. Strings under concatenation**

Set: $\Sigma^*$  
Operation: concatenation

---

### **5. Matrices under multiplication**

Set: all $n \times n$ matrices  
Operation: matrix multiplication

---
### **6. Binary Operations**

Consider the set  
**B = {0, 1}**  
and the operations **+** and **×** defined on **B** using the following tables:

### **Addition Table (+)**

|+|0|1|
|---|---|---|
|**0**|0|1|
|**1**|1|0|

---

### **Multiplication Table (×)**

|×|0|1|
|---|---|---|
|**0**|0|0|
|**1**|0|1|

---

The algebraic system  
**⟨B, +, ×⟩**  
satisfies all the structural properties required for the algebraic system **⟨I, +, ×⟩** described earlier.

---
---
<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">GENERAL PROPERTIES OF ALGEBRAIC SYSTEMS</strong>
</h2>

Operations in an algebraic system often satisfy additional properties such as closure, associativity, identity, and commutativity. These properties determine the structure’s behavior and influence what kinds of larger algebraic systems it can form.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Closure</strong>
</h3>
Closure requires that the operation never leaves the set:

$$  
a, b \in A \Rightarrow a * b \in A  
$$

**Closed examples:**

- Addition on integers
    
- Concatenation on strings
    

**Not closed:**

- Subtraction on natural numbers
    

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Associativity</strong>
</h3>

Associativity allows grouping of operations freely:

$$  
(a * b) * c = a * (b * c)  
$$

Examples:

- Addition of integers
    
- String concatenation
    

Non-example:

- Subtraction
    


---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Identity Elements</strong>
</h3>


An element $e$ acts as an identity if:

$$  
a * e = e * a = a  
$$

Examples:

- $0$ for addition
    
- $1$ for multiplication
    
- $\epsilon$ for concatenation
    

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Inverses</strong>
</h3>


An inverse of an element $a$ is another element $a^{-1}$ satisfying:

$$  
a * a^{-1} = e  
$$

Examples:

- Additive inverse in integers
    
- Multiplicative inverse in non-zero reals
    

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Commutativity</strong>
</h3>


A binary operation is commutative if:

$$  
a * b = b * a  
$$

Examples:

- Addition of integers
    
- Logical AND
    

Non-examples:

- Matrix multiplication
    
- String concatenation
    

	```hello+world```  is ```hello world```. ```world + hello``` is ```word hello```. Both are not the same.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Practice Problems: Algebraic Systems</strong>
</h3>
**Problem 1:**  
Show that $(\mathbb{Z}, +)$ is an algebraic system.

**Solution:**  
Addition is a binary operation $+: \mathbb{Z}\times\mathbb{Z} \to \mathbb{Z}$.  
Thus closure holds, forming an algebraic system.

---

**Problem 2:**  
Give a unary algebraic system.

**Solution:**  
Let $A = \mathbb{Z}$ and $f(a)= -a$.  
Then $(A,f)$ is a unary algebraic system.

---

**Problem 3:**  
Is $(\mathbb{N}, -)$ an algebraic system?

**Solution:**  
No. Subtraction is not closed on $\mathbb{N}$.

---

**Problem 4:**  
Does concatenation on strings have an identity?

**Solution:**  
Yes. The empty string $\epsilon$ satisfies $w\epsilon=\epsilon w=w$.

---

**Problem 5:**  
Is matrix multiplication commutative?

**Solution:**  
No. For most matrices $A$ and $B$, $AB \ne BA$.

---
---
<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">SEMIGROUPS AND MONOIDS</strong>
</h2>
A semigroup is one of the simplest algebraic structures built from an algebraic system.  
By requiring only one property—**associativity**—semigroups provide the first meaningful extension beyond arbitrary operations. Monoids add one extra ingredient: an **identity element**.

Both structures arise naturally in many contexts, including string processing, automata, modular arithmetic, and matrix operations.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Semigroup: Definition</strong>
</h3>


A **semigroup** is an ordered pair:

$$  
(S, *)  
$$

where:

1. $S$ is a non-empty set
    
2. $*$ is a **binary operation** on $S$
    
3. $*$ is **associative**:
    

$$  
(a * b) * c = a * (b * c)  
$$

No identity element or inverses are required.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples of Semigroups</strong>
</h3>


### **1. Strings under concatenation**

Set: $\Sigma^*$  
Operation: concatenation

Associative, but no requirement of identity or inverses.

---

### **2. Positive integers under multiplication**

Set: $\mathbb{Z}^+$  
Operation: $\times$

Multiplication is associative.

---

### **3. Modular arithmetic tables**

Example modulo 3: We want a structure:

- Set: **M = {0, 1, 2}**
    
- Operation: **addition modulo 3**
    
- Identity element: **0**
    

This forms a **commutative monoid**.

---
The set:

$$  
\mathbb{Z}_3 = {0,1,2}  
$$

with the operation **addition mod 3** satisfies:

1. **Closure:**  
    For any $a,b \in \mathbb{Z}_3$,  
    $a + b \ (\text{mod } 3) \in \mathbb{Z}_3$
    
2. **Associativity:**  
    Addition mod 3 is associative.
    
3. **Identity:**  
    $0$ acts as additive identity.  
    $a + 0 \equiv a \pmod 3$
    
4. **Inverses not required:**  
    (We only need an identity, not inverses → _monoid_, not a group.)
    

---
 **Operation Table — (ℤ₃, + mod 3)**


| + | 0 | 1 | 2 |
|---|---|---|---|
| **0** | 0 | 1 | 2 |
| **1** | 1 | 2 | 0 |
| **2** | 2 | 0 | 1 |


---

**Why (ℤ₃, +) is a Monoid?**

### **Closure**

All results stay inside {0,1,2}.

### **Associativity**

Inherited from integer addition.

### **Identity**

$0$ satisfies:

$$  
a + 0 \equiv a \pmod 3  
$$

### **Not a group**

Only 0 has an inverse (0).  
1 and 2 do have inverses in mod 3 actually (1 and 2), so technically **(Z3, +)** _is_ a group also.  
But if you want a **non-group monoid**, you can use **multiplication mod 3**, shown below.

---

 **Optional: Non-Group Monoid for Teaching**

Use **multiplication mod 3**:

- Set: {0,1,2}
    
- Operation: × mod 3
    
- Identity: 1
    
- **Only 1 has inverse**, so it's a monoid but **not a group**.
    

---

### **4. Matrix multiplication**

All $n \times n$ matrices under multiplication form a semigroup.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Monoid: Definition</strong>
</h3>


A **monoid** is a semigroup with an **identity element**.

Formally:

A monoid $(M, *)$ satisfies:

1. Closure
    
2. Associativity
    
3. Existence of identity $e$:
    

$$  
e * a = a * e = a  
$$

There is **no requirement** for inverses.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples of Monoids</strong>
</h3>


### **1. $(\Sigma^*, \cdot)$: Strings with concatenation**

Identity = empty string $\epsilon$

---

### **2. $(\mathbb{Z}, +)$: Integers under addition**

Identity = $0$

---

### **3. $(\mathbb{R}, \times)$: Real multiplication**

Identity = $1$

---

### **4. Set of matrices under multiplication**

Identity = identity matrix $I$

---

<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">GROUPS</strong>
</h2>
A **group** strengthens the monoid structure by requiring that every element have an inverse.  
This allows for reversible operations, symmetry transformations, and permutation structures.

Formally, a **group** $(G, *)$ satisfies:

1. Closure
    
2. Associativity
    
3. Identity element $e$
    
4. Inverse for every element:
    

$$  
\forall a\in G, \exists a^{-1} : a * a^{-1} = e  
$$

Groups appear in algebra, coding theory, number theory, geometry, and physics.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples of Groups</strong>
</h3>


### **1. $(\mathbb{Z}, +)$: Integers under addition**

Inverse: $-a$

---

### **2. $(\mathbb{R} - {0}, \times)$**

Inverse: $\frac{1}{a}$

---

### **3. Symmetric group $S_n$**

Set: all permutations of $n$ elements  
Operation: function composition

To illustrate what a **symmetric group** looks like, let us study the case:

$$  
S_4 = \text{all permutations of } {1,2,3,4}  
$$

**Elements of (S_4)**

All **bijective mappings** from ({1,2,3,4} \to {1,2,3,4}).  There are (4! = 24) such permutations. 
Below are a few representative elements written in **cycle notation**:

- Identity permutation  
    $$ 
    e = (1)(2)(3)(4)  
    $$
    
- A 2-cycle (transposition)        
    $$(1\ 3)  $$ 
    
- A 3-cycle  
    $$ (1\ 2\ 4)  $$
    
    
- A 4-cycle  
      
    $$(1\ 2\ 3\ 4)  $$

    
- Product of disjoint cycles  
      
    $$(1\ 4)(2\ 3)$$  
    
    

---

**Operation: Composition of Permutations**

The group operation in $(S_n)$ is **function composition**.  
When we write:
$$\sigma \circ \tau $$ 

it means:  
**apply $(\tau)$ first, then apply $(\sigma)$**.

---

**Worked Example: Computing Composition in $(S_4)$**

---

Let:

$$  
\sigma = (1\ 3\ 2), \qquad \tau = (1\ 4)  
$$

We compute:

$$  
\sigma \circ \tau  
$$

---

**Step 1: Apply $\tau$**

$$  
\tau: 1 \leftrightarrow 4 \quad (2,3\ \text{fixed})  
$$

---

**Step 2: Apply $\sigma$**

$$  
\sigma: 1 \to 3,; 3 \to 2,; 2 \to 1,; 4\ \text{fixed}  
$$

---

 **Compute output for each element**

**For 1**

- $\tau(1) = 4$
    
- $\sigma(4) = 4$
    

Result:

$$  
1 \mapsto 4  
$$

---

 **For 4**

- $\tau(4) = 1$
    
- $\sigma(1) = 3$
    

Result:

$$  
4 \mapsto 3  
$$

---

 **For 3**

- $\tau(3) = 3$
    
- $\sigma(3) = 2$
    

Result:

$$  
3 \mapsto 2  
$$

---

**For 2**

- $\tau(2) = 2$
    
- $\sigma(2) = 1$
    

Result:

$$  
2 \mapsto 1  
$$

---

**Final result in cycle notation**

$$  
\sigma \circ \tau = (1\ 4\ 3\ 2)  
$$

This is a **4-cycle**, meaning a single cycle that rotates all four elements.

---

# ⭐ **Key Takeaways**

- $S_n$ contains **all permutations** of $n$ elements.
    
- The operation is **composition**, not multiplication or addition.
    
- Cycle notation reveals structure clearly.
    
- Composition is **not commutative**:
    
    $$  
    \sigma \circ \tau \neq \tau \circ \sigma  
    $$
    
- $S_n$ is **non-abelian** for all $n \ge 3$.
    

---
---

### **4. Modular arithmetic under addition**

$(\mathbb{Z}_n, +)$ is a group for all $n$.

---

### **5. Invertible matrices**

$GL(n, \mathbb{R})$ under matrix multiplication.

The group  
$$  
GL(2,\mathbb{R})  
$$  
consists of all **invertible (2\times 2)** real matrices.  
The operation is **matrix multiplication**, which is associative and has an identity matrix:

$$  
I = \begin{pmatrix}  
1 & 0 \\  
0 & 1 
\end{pmatrix}  
$$

A matrix is invertible iff its determinant is **non-zero**.

---

# 👉 **Simple Worked Example**

Consider the matrix:

$$  
A = \begin{pmatrix}  
2 & 1 \\  
1 & 1  
\end{pmatrix}  
$$

### **Step 1: Check determinant**

$$  
\det(A) = (2)(1) - (1)(1) = 1 \neq 0  
$$

So **(A) is invertible** and belongs to $(GL(2,\mathbb{R}))$.

---

### **Step 2: Compute the inverse**

For a $(2\times2)$ matrix:

$$  
A^{-1} =  
\frac{1}{ad - bc}  
\begin{pmatrix}  
d & -b \\ 
-c & a  
\end{pmatrix}  
$$

Apply formula:

$$  
A^{-1} =  
\begin{pmatrix}  
1 & -1 \\  
-1 & 2  
\end{pmatrix}  
$$

(Because determinant = 1)

---

### **Step 3: Verify that the inverse works**

Compute:

$$  
A A^{-1} =

 \begin{pmatrix}  
2 & 1\\  
1 & 1  
\end{pmatrix}  
\begin{pmatrix}  
1 & -1\\  
-1 & 2  
\end{pmatrix}
=
\begin{pmatrix}  
1 & 0\\  
0 & 1  
\end{pmatrix}  
= I  
$$

Thus:

- $(A A^{-1} = I)$
    
- $(A^{-1} A = I)$
    

This confirms that **(A) is invertible**, so $(A \in GL(2,\mathbb{R}))$.

---

# ⭐ **Why this is a group example**

- **Closure:**  
    Product of two invertible matrices is invertible.
    
- **Associativity:**  
    Matrix multiplication is always associative.
    
- **Identity:**  
    (I) acts as the identity.
    
- **Inverses:**  
    Every matrix in (GL(n,\mathbb{R})) has an inverse.
    

Thus:

$$  
GL(n,\mathbb{R}) \quad \text{is a group under matrix multiplication.}  
$$

---
---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Properties of Groups</strong>
</h3>

- Identity is unique
    
- Inverses are unique
    
- Left and right cancellation laws hold
    
- $(a * b)^{-1} = b^{-1} * a^{-1}$
    

---
<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">SUBGROUPS</strong>
</h2>
A **subgroup** is a subset of a group that is itself a group under the same operation.

Let $(G, *)$ be a group.  
A nonempty subset $H \subseteq G$ is a subgroup if:

1. $a, b \in H \Rightarrow a * b \in H$
    
2. $a \in H \Rightarrow a^{-1} \in H$
    
3. $e \in H$ (follows from the above)
    

This is the **two-step subgroup test**.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples of Subgroups</strong>
</h3>


### **1. Even integers under addition**

$2\mathbb{Z}$ is a subgroup of $(\mathbb{Z}, +)$.

---

### **2. Multiples of $n$**

$n\mathbb{Z}$ is a subgroup of $(\mathbb{Z}, +)$.

---

### **3. Determinant-1 matrices**

$SL(n, \mathbb{R})$ is a subgroup of $GL(n, \mathbb{R})$.

---

### **4. Cyclic subgroups**

Generated by one element:

$$  
\langle a \rangle = {a^k : k\in\mathbb{Z}}  
$$

---

### **5. Rotation symmetries of polygons**

A subgroup of the full symmetry group.

![](../../../../assets/img/Lecture%20Notes/Computing/Foundations%20of%20ML/attachments/Pasted%20image%2020251203163920.png)

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Practice Problems: Semigroups, Monoids, Groups, Subgroups</strong>
</h3>
---

**Problem 1:**  
Show that $(\Sigma^*, \cdot)$ is a monoid.

**Solution:**  
Concatenation is associative, and $\epsilon$ serves as identity. Therefore, it is a monoid.

---

**Problem 2:**  
Is $(\mathbb{R}, \times)$ a group?

**Solution:**  
No. Zero has no multiplicative inverse; thus only $\mathbb{R}\setminus{0}$ forms a group.

---

**Problem 3:**  
Show that $(\mathbb{Z}, +)$ is a group.

**Solution:**  
Closure holds, $+$ is associative, identity = $0$, inverse of $a$ is $-a$.

---

**Problem 4:**  
Find a subgroup of $(\mathbb{Z}, +)$ other than $n\mathbb{Z}$.

**Solution:**  
The trivial subgroups: ${0}$ and $\mathbb{Z}$ itself.

---

**Problem 5:**  
Is the set ${1, -1}$ a subgroup of $(\mathbb{R}-{0}, \times)$?

**Solution:**  
Yes. Closed under multiplication, identity = $1$, inverses exist.

---

Below is **Part 3** of your professional lecture notes, covering:

- **Homomorphisms**
    
- **Isomorphisms**
    
- **Definitions & Examples**
    
- **Figure placeholders with real printed textbook pages**
    
- **Practice problems with detailed solutions**
    

All headings follow your exact HTML format inside backticks.

---
---

<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">HOMOMORPHISMS</strong>
</h2>
A homomorphism is a structure-preserving mapping between two algebraic structures.  
It provides a way to compare different algebraic systems by observing whether their operations behave consistently under a given mapping.

Homomorphisms allow complex systems to be studied through simpler ones, and they reveal internal symmetries and equivalences between different algebraic worlds.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Definition</strong>
</h3>
Let $(A, *)$ and $(B, \circ)$ be algebraic structures (such as semigroups, monoids, or groups).  
A function $\phi : A \rightarrow B$ is a **homomorphism** if:

$$  
\phi(a * b) = \phi(a) \circ \phi(b)  
\qquad \text{for all } a,b \in A.  
$$

This condition ensures that $\phi$ “respects” the operation. The mapping must preserve the way elements combine.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Properties of Homomorphisms</strong>
</h3>


- **Identity is preserved** (for monoid/group homomorphisms):
    
    $$  
    \phi(e_A) = e_B  
    $$
    
- **Inverses are preserved** (in groups):
    
    $$  
    \phi(a^{-1}) = (\phi(a))^{-1}  
    $$
    
- **Structure is preserved but not necessarily elements**
    

Different elements in $A$ may map to the same element in $B$ (non-injective homomorphism).

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples</strong>
</h3>


### **1. Homomorphism from integers to integers modulo $n$**

Define:

$$  
\phi: \mathbb{Z} \rightarrow \mathbb{Z}_n, \qquad \phi(a) = a \bmod n.  
$$

Then:

$$  
\phi(a+b) = (a+b) \bmod n = (a \bmod n) + (b \bmod n)  
$$

Thus, $\phi$ is a homomorphism.


---

We define a mapping:

$$  
\phi : \mathbb{Z} \to \mathbb{Z}_n, \qquad \phi(a) = a \bmod n.  
$$

This means:

- Every integer is mapped to its **equivalence class mod $n$**
    
- $\phi$ “wraps” all integers onto the $n$-element set ${0,1,\dots,n-1}$
    

---

**Worked Example (Take $n = 5$)**

Define:

$$  
\phi(a) = a \bmod 5  
$$

**Check the homomorphism rule**

We want:

$$  
\phi(a+b) = \phi(a) + \phi(b)  
$$

Test with values:  
Let $a = 12$, $b = 17$.

---

**Step 1 — LHS**

$$  
\phi(a+b) = \phi(12 + 17) = \phi(29)  
$$

Since $29 \bmod 5 = 4$:

$$  
\phi(a+b) = 4  
$$

---

**Step 2 — RHS**

Compute separately:

$$  
\phi(12) = 12 \bmod 5 = 2  
$$

$$  
\phi(17) = 17 \bmod 5 = 2  
$$

Now add inside $\mathbb{Z}_5$:

$$  
\phi(12) + \phi(17) = 2 + 2 = 4  
$$

---

**Conclusion**

Both sides match:

$$  
\phi(a+b) = \phi(a) + \phi(b)  
$$

Thus:

$$  
\phi : \mathbb{Z} \to \mathbb{Z}_n \quad \text{is a homomorphism.}  
$$

---
---

### **2. Determinant function**

Let $GL(n,\mathbb{R})$ be the group of invertible matrices.  
Define:

$$  
\phi(A) = \det(A)  
$$

Then:

$$  
\det(AB) = \det(A)\det(B)  
$$

Thus, determinant is a homomorphism from matrix multiplication to real multiplication.

---

### **3. String length function**

Let $(\Sigma^*, \cdot)$ be the monoid of strings.

Define:

$$  
\ell(w) = \text{length of string } w  
$$

Then:

$$  
\ell(xy) = \ell(x) + \ell(y)  
$$

Thus $\ell: (\Sigma^*, \cdot) \rightarrow (\mathbb{N}, +)$ is a homomorphism.

---
---
<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">ISOMORPHISMS</strong>
</h2>


An isomorphism is a **bijective homomorphism**.  
It identifies two algebraic structures as “the same” in terms of their structure, even if their elements differ.

If an isomorphism exists between $(A, *)$ and $(B, \circ)$, then the two systems are **structurally identical**.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Definition</strong>
</h3>


A homomorphism $\phi : A \rightarrow B$ is an **isomorphism** if:

1. It preserves structure:
    
    $$  
    \phi(a * b) = \phi(a) \circ \phi(b)  
    $$
    
2. It is **one-to-one** (injective)
    
3. It is **onto** (surjective)
    

If such a function exists, then $A$ and $B$ are said to be **isomorphic**, written:

$$  
A \cong B  
$$

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples</strong>
</h3>
### **1. Even integers and integers**

Define $\phi: \mathbb{Z} \rightarrow 2\mathbb{Z}$ by:

$$  
\phi(n) = 2n  
$$

This is bijective, and:

$$  
\phi(a+b) = 2(a+b) = 2a + 2b = \phi(a) + \phi(b)  
$$

Thus $\mathbb{Z} \cong 2\mathbb{Z}$.

---

### **2. Rotation group of a square and permutation group $S_4$**

The rotational symmetries correspond to specific permutations of vertices. Thus, the rotation group is isomorphic to a subgroup of $S_4$.

---

### **3. $(\mathbb{Z}_n, +)$ and a cyclic subgroup**

A cyclic group generated by $a$ of order $n$:

$$  
\langle a \rangle = {e, a, a^2, \ldots, a^{n-1}}  
$$

is isomorphic to $(\mathbb{Z}_n, +)$.

---

### **4. Real numbers under addition and positive reals under multiplication**

Define:

$$  
\phi(x) = e^x  
$$

Then:

$$  
\phi(x + y) = e^{x+y} = e^x e^y = \phi(x)\phi(y)  
$$

This is an isomorphism between $(\mathbb{R}, +)$ and $(\mathbb{R}^+, \times)$.

---
## **Isomorphism between $((\mathbb{Z}_4, +))$and a 4-element group under “⊙”**

---

# ✅ **Group 1: $((\mathbb{Z}_4, +))$**

| +   | 0   | 1   | 2   | 3   |
| --- | --- | --- | --- | --- |
| 0   | 0   | 1   | 2   | 3   |
| 1   | 1   | 2   | 3   | 0   |
| 2   | 2   | 3   | 0   | 1   |
| 3   | 3   | 0   | 1   | 2   |

---

# ✅ **Group 2: ((G, ,\circ))**

A 4–element abstract group that is isomorphic to $(\mathbb{Z}_4)$.

Let the group elements be:
$$G = {e, a, b, c}$$  
and operation `∘` follows a cyclic group of order 4.

| ∘   | e   | a   | b   | c   |
| --- | --- | --- | --- | --- |
| e   | e   | a   | b   | c   |
| a   | a   | b   | c   | e   |
| b   | b   | c   | e   | a   |
| c   | c   | e   | a   | b   |


---

# ✅ **Isomorphism Mapping**

The mapping is:
$$\phi : \mathbb{Z}_4 \rightarrow G$$$$  \phi(0)=e,\quad \phi(1)=a,\quad \phi(2)=b,\quad \phi(3)=c $$ 
 

---

# 💡 **Why this is an isomorphism**

Check the homomorphism property:
$$\phi(x + y \bmod 4) = \phi(x) \circ \phi(y)  $$


Example:

- $(1 + 2 = 3)$ in $(\mathbb{Z}_4)$
    
-$ (\phi(1) = a)$, $(\phi(2) = b)$, $(\phi(3) = c)$
    
- $(a \circ b = c)$
    

Thus, the mapping preserves structure.

---

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Practice Problems: Homomorphisms & Isomorphisms</strong>
</h3>
---

**Problem 1:**  
Show that $\phi: \mathbb{Z} \rightarrow \mathbb{Z}_5$ defined by $\phi(n)=n\bmod 5$ is a homomorphism.

**Solution:**  
$\phi(a+b) = (a+b)\bmod 5 = (a\bmod 5)+(b\bmod 5) = \phi(a)+\phi(b)$.

---

**Problem 2:**  
Does $\phi(x)=|x|$ define a group homomorphism from $(\mathbb{R}, +)$ to $(\mathbb{R}, +)$?

**Solution:**  
No. $|(a+b)| \neq |a|+|b|$ in general (counterexample: $a=1$, $b=-1$).

---

**Problem 3:**  
Show that $\phi(n)=2n$ is an isomorphism from $\mathbb{Z}$ to $2\mathbb{Z}$.

**Solution:**  
It is bijective and preserves addition: $\phi(a+b)=2a+2b$.

---

**Problem 4:**  
Show that determinant is a homomorphism.

**Solution:**  
$\det(AB)=\det(A)\det(B)$; thus the structure is preserved.

---

**Problem 5:**  
Is $\phi(x)=x^2$ an isomorphism from $(\mathbb{R}, \times)$ to itself?

**Solution:**  
No. It is not injective since $\phi(2)=\phi(-2)$.

---
---

#  These are additional topics
---
<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">CYCLIC GROUPS</strong>
</h2>
A cyclic group is one of the simplest and most fundamental types of algebraic structures.  
It is generated by repeatedly applying the group operation to a single element.  
This idea of “building the entire group from one seed element” gives cyclic groups a strong internal structure and predictable behavior.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Definition</strong>
</h3>
A group $G$ is **cyclic** if there exists an element $a \in G$ such that every element of $G$ can be written as a power of $a$.

$$  
G = \langle a \rangle = {a^k : k \in \mathbb{Z}}  
$$

The element $a$ is called a **generator** of $G$.

- If $G$ is finite of order $n$, then:
    
    $$  
    \langle a \rangle = {e, a, a^2, \ldots, a^{n-1}}  
    $$
    
- If $G$ is infinite, then $a$ generates infinitely many powers.
    

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples</strong>
</h3>
### **1. $(\mathbb{Z}, +)$**

Generated by $1$ or $-1$:

$$  
\mathbb{Z} = \langle 1 \rangle = \langle -1 \rangle  
$$

---

### **2. $(\mathbb{Z}_n, +)$**

Generated by $1$:

$$  
\mathbb{Z}_n = {0,1,2,\dots,n-1}  
$$

---

### **3. Complex roots of unity**

The set:

$$  
{1, \omega, \omega^2, \dots, \omega^{n-1}}  
$$

is cyclic under multiplication.

---

### **4. Powers of a matrix**

If $A$ is invertible and $A^k$ cycles, then:

$$  
\langle A \rangle = {I, A, A^2, \dots}  
$$

---
A **cyclic group** is a group that can be generated by a single element.

Formally:

$$  
G \text{ is cyclic } \iff \exists g \in G \text{ such that }  
G = \langle g \rangle = { g^k \mid k \in \mathbb{Z} }.  
$$

---

**Example: The group $(\mathbb{Z}_6, +)$**

Consider:

$$  
\mathbb{Z}_6 = {0,1,2,3,4,5} \quad \text{under addition mod 6.}  
$$

Take the element:

$$  
g = 1.  
$$

Compute its powers (repeated addition mod 6):

- $1^1 = 1$
    
- $1^2 = 1+1 = 2$
    
- $1^3 = 1+1+1 = 3$
    
- $1^4 = 4$
    
- $1^5 = 5$
    
- $1^6 = 6 \equiv 0 \pmod{6}$
    

Thus:

$$  
\langle 1 \rangle = {0,1,2,3,4,5} = \mathbb{Z}_6.  
$$

So the entire group is generated by a single element $1$.

---

# ⭐ **Conclusion**

$(\mathbb{Z}_6, +)$ is a **cyclic group**, and its generator is:

$$  
1.  
$$

Other generators exist too:

- $\langle 5 \rangle = \mathbb{Z}_6$
    
- $\langle 1 \rangle = \mathbb{Z}_6$
    
- $\langle g \rangle = \mathbb{Z}_6$ **iff** $\gcd(g,6) = 1$
    

---

**Another Example: Multiplicative Group Modulo 7**

Consider:

$$  
(\mathbb{Z}_7^*, \times)  
$$

where:

$$  
\mathbb{Z}_7^* = {1,2,3,4,5,6}.  
$$

Take $g = 3$.

Compute powers:

- $3^1 \equiv 3$
    
- $3^2 \equiv 2$
    
- $3^3 \equiv 6$
    
- $3^4 \equiv 4$
    
- $3^5 \equiv 5$
    
- $3^6 \equiv 1$
    

Thus:

$$  
\langle 3 \rangle = {1,2,3,4,5,6} = \mathbb{Z}_7^*.  
$$

So $3$ is a **generator** and the group is **cyclic**.

---
---
<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">PERMUTATION GROUPS</strong>
</h2>

Permutation groups describe symmetries of finite sets.  They play a central role in algebra, geometry, coding theory, and combinatorics.

A **permutation** of a set $X$ is a bijective function from $X$ to itself.  
The set of all permutations of $n$ elements forms the **symmetric group** $S_n$.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Definition</strong>
</h3>

For a finite set of $n$ elements:

$$  
S_n = {\text{all bijections of } {1,2,\dots,n}}  
$$

Operation: **composition of functions**

Composition is:

- associative
    
- closed
    
- has identity (identity permutation)
    
- every permutation has an inverse
    

Hence $(S_n, \circ)$ is a group.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Cycle Notation</strong>
</h3>
A permutation can be written using **cycle notation**, which groups together positions that rotate among themselves.

Example:

$$  
(1\ 3\ 5)(2\ 4)  
$$

Means:

- $1 \to 3$, $3 \to 5$, $5 \to 1$
    
- $2 \to 4$, $4 \to 2$
    

Cycle notation simplifies the study of permutation structure.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples</strong>
</h3>


### **1. Symmetries of a square**

Rotations and reflections correspond to specific permutations of vertices.

[Figure Placeholder – Tremblay p. 302: Square Rotation Permutation Mapping]

---

### **2. Two-cycle (transposition)**

$(a\ b)$ swaps $a$ and $b$; all other elements stay fixed.

---

### **3. Three-cycle**

$(1\ 2\ 3)$ rotates three elements in a cycle.

---

### **4. Disjoint cycles commute**

If cycles operate on completely different sets of positions:

$$  
(a\ b)(c\ d\ e) = (c\ d\ e)(a\ b)  
$$

---

<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">NORMAL SUBGROUPS</strong>
</h2>


A subgroup $N$ of a group $G$ is **normal** if it is invariant under conjugation.

Formally:

$$  
gNg^{-1} = N \quad \forall g \in G  
$$

Equivalent definition:

$$  
g n g^{-1} \in N  
\quad \text{for all } n \in N,\ g \in G  
$$

Normal subgroups are important because quotient groups can be formed only using normal subgroups.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples</strong>
</h3>


### **1. Kernel of a homomorphism**

If $\phi: G \to H$ is a group homomorphism, then:

$$  
\ker(\phi) = {g \in G : \phi(g) = e_H}  
$$

is always a normal subgroup.

---

### **2. Center of a group**

$$  
Z(G) = {g \in G : gx = xg\ \forall x\in G}  
$$

The center is always normal.

---

### **3. Even permutations $A_n$**

The group of even permutations is a normal subgroup of $S_n$.

---
---

<h2 class="page-header" style="text-align: center; color: blue;">
  <strong style="color:#cc33cc;">FACTOR (QUOTIENT) GROUPS</strong>
</h2>


Given a group $G$ and a normal subgroup $N$, we can “collapse” the elements of $N$ to form a simpler group called the **quotient group** $G/N$.

Its elements are **cosets**:

$$  
aN = {an : n \in N}  
$$

The operation on cosets is:

$$  
(aN)(bN) = (ab)N  
$$

This operation is well-defined only because $N$ is normal.

---

<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Examples</strong>
</h3>


### **1. $\mathbb{Z}/n\mathbb{Z}$**

Let $G=\mathbb{Z}$ and $N=n\mathbb{Z}$.  
Then:

$$  
\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}_n  
$$

---

### **2. Cosets in symmetry groups**

The rotation subgroup of a square forms cosets inside the full dihedral group.

---

### **3. Kernel quotient theorem**

If $\phi: G \rightarrow H$ is a group homomorphism, then:

$$  
G / \ker(\phi) \cong \text{Im}(\phi)  
$$

This is the **First Isomorphism Theorem**.

---
<h3 class="page-header" style="text-align: left; color: blue;">
  <strong style="color:#cc33cc;">Practice Problems: Cyclic, Permutations, Normal, Quotients</strong>
</h3>

**Problem 1:**  
Find all generators of $\mathbb{Z}_8$.

**Solution:**  
$a$ generates $\mathbb{Z}_8$ iff $\gcd(a,8)=1$.  
Thus generators are ${1,3,5,7}$.

---

**Problem 2:**  
Express the permutation $(1\ 4\ 3\ 2)$ in disjoint cycle form.

**Solution:**  
$(1\ 4\ 3\ 2)$ is already a 4-cycle; no further simplification.

---

**Problem 3:**  
Show that $2\mathbb{Z}$ is a normal subgroup of $\mathbb{Z}$.

**Solution:**  
Since $\mathbb{Z}$ is abelian, all subgroups are normal.  
Thus $g + (2\mathbb{Z}) = (2\mathbb{Z}) + g$.

---

**Problem 4:**  
Find the cosets of $3\mathbb{Z}$ in $\mathbb{Z}$.

**Solution:**  
Cosets are:

- $0+3\mathbb{Z} = {0,3,6,\dots}$
    
- $1+3\mathbb{Z} = {1,4,7,\dots}$
    
- $2+3\mathbb{Z} = {2,5,8,\dots}$
    

---

**Problem 5:**  
Show that $G/\ker(\phi) \cong \text{Im}(\phi)$.

**Solution:**  
Construct the function $\psi: G/\ker(\phi) \rightarrow \text{Im}(\phi)$ by:

$$  
\psi(g\ker(\phi)) = \phi(g)  
$$

This map is well-defined, bijective, and a homomorphism. Thus the isomorphism holds.

---

