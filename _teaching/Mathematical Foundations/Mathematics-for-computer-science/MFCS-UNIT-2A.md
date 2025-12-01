---
title: Unit-2A Set Theory And Relations
layout: page
permalink: /teaching/Mathematical Foundations/Mathematics-for-computer-science/MFCS-UNIT-2A/
hide_title: true
parent: Mathematics For Computer Science
grand_parent: Mathematical Foundations
math: true
wide: false
---

<!-- 
This is inline: \(a^2 + b^2 = c^2\).

And display:

\[
\sum_{i=1}^n i = \frac{n(n+1)}{2}
\]

Inline dollar: $a^2 + b^2 = c^2$

Display dollar:

$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$ -->




<h2 style="text-align:center; color:blue;"><strong style="color:#cc33cc;">Set Theory & Relations</strong></h2>

Sets and relations form the foundation of discrete mathematics. They define how objects are grouped, connected, classified, and ordered. These structures appear throughout algorithms, databases, automata theory, programming language design, and graph theory.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1. Introduction to Sets</strong></h3>

A **set** is a well-defined collection of distinct elements. Sets can be described by:

- Listing elements (roster form)
    
- Giving a defining rule (set-builder form)
    

Sets appear in automata (alphabet symbols), databases (domain values), graphs (nodes), and programming languages (types). They support essential operations such as union, intersection, difference, complement, Cartesian product, and power set.

These operations allow set combinations, comparisons, and construction of more advanced structures like relations and functions.

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1.1 Practice Problems</strong></h4>

**Problem 1:**  
List the power set of {1,2}.  
**Solution:**  
∅, {1}, {2}, {1,2}.

**Problem 2:**  
Let A={1,2,3}, B={3,4}. Find A ∪ B.  
**Solution:**  
{1, 2, 3, 4}.

**Problem 3:**  
A={x | x even ≤10}, B={3,4,5,8}. Find A ∩ B.  
**Solution:**  
{4,8}.

**Problem 4:**  
Check if 7 ∈ {x | x is prime}.  
**Solution:**  
Yes.

**Problem 5:**  
Compute A×B for A={a,b}, B={1}.  
**Solution:**  
{(a,1),(b,1)}.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2. Introduction to Relations</strong></h3>

A **relation** R from set A to set B is a subset of A×B.  
If A=B, the relation is **binary**.

Relations represent associations such as:

- “less than”
    
- “is equal to”
    
- “divides”
    
- “is enrolled in”
    
- “is connected to”
    

They can be expressed using ordered pairs, directed graphs, or adjacency matrices. Relations are essential in databases (keys), automata transitions, state machines, graph structures, dependency networks, and ordering systems.

---

`<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2.1 Practice Problems</strong></h4>`

**Problem 1:**  
List all relations on A={1,2}.  
**Solution:**  
All subsets of {(1,1),(1,2),(2,1),(2,2)}.

**Problem 2:**  
Represent R={(1,2),(2,3)} as a directed graph.  
**Solution:**  
1 → 2 → 3.

**Problem 3:**  
Is {(1,1),(1,2)} a relation on {1,2}?  
**Solution:**  
Yes.

**Problem 4:**  
Is {(a,b)} a binary relation on {a,b,c}?  
**Solution:**  
Yes.

**Problem 5:**  
A={x,y}, B={z}. Compute A×B.  
**Solution:**  
{(x,z),(y,z)}.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">3. Ordering Relations</strong></h3>

A relation R on set A is a **partial order** if it is:

- **Reflexive**
    
- **Antisymmetric**
    
- **Transitive**
    

Examples:

- ≤ on integers
    
- ⊆ on sets
    
- Divisibility on ℕ
    
- Task precedence
    

If every pair of elements is comparable, R is a **total order**.

Ordering relations are used in sorting, scheduling, ranking, dependency analysis, and hierarchical modeling.

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">3.1 Practice Problems</strong></h4>

**Problem 1:**  
Show ≤ is a partial order.  
**Solution:**  
It satisfies reflexivity, antisymmetry, transitivity.

**Problem 2:**  
Is “divides” a partial order on ℕ?  
**Solution:**  
Yes.

**Problem 3:**  
Is “<” a partial order?  
**Solution:**  
No; not reflexive.

**Problem 4:**  
Check antisymmetry for R={(1,1),(2,2),(2,3)}.  
**Solution:**  
No violation → antisymmetric.

**Problem 5:**  
Is “is a friend of” a partial order?  
**Solution:**  
No; not antisymmetric.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">4. Properties of Binary Relations</strong></h3>

Relations can satisfy specific structural properties:

- **Reflexive**
    
- **Irreflexive**
    
- **Symmetric**
    
- **Antisymmetric**
    
- **Transitive**
    
- **Asymmetric**
    

These properties help classify relations into equivalence relations, partial orders, and compatibility relations. They are used heavily in databases, algebra, graph analysis, and formal logic systems.

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">4.1 Practice Problems</strong></h4>

**Problem 1:**  
Check reflexivity of R={(1,1),(2,2),(1,2)}.  
**Solution:**  
Reflexive.

**Problem 2:**  
Is it symmetric?  
**Solution:**  
No.

**Problem 3:**  
Is it transitive?  
**Solution:**  
Yes.

**Problem 4:**  
Is {(a,b),(b,a)} antisymmetric?  
**Solution:**  
No.

**Problem 5:**  
Is the empty relation reflexive?  
**Solution:**  
No.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">5. Equivalence Relations</strong></h3>

A relation R on A is an **equivalence relation** if:

- Reflexive
    
- Symmetric
    
- Transitive
    

Equivalence relations partition a set into **equivalence classes**, grouping elements with shared structure or behavior.

Examples:

- Congruence mod n
    
- Same length
    
- Graph isomorphism
    
- Same type in programming languages
    

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">5.1 Practice Problems</strong></h4>

**Problem 1:**  
Show ≡ mod 3 is an equivalence relation.  
**Solution:**  
All three properties hold.

**Problem 2:**  
Find the equivalence class of 2 mod 3.  
**Solution:**  
{…, −4, −1, 2, 5, 8, …}.

**Problem 3:**  
Is “has same age” an equivalence relation?  
**Solution:**  
Yes.

**Problem 4:**  
Is “divides” an equivalence relation?  
**Solution:**  
No (not symmetric).

**Problem 5:**  
Is R={(a,a),(b,b),(a,b),(b,a)} an equivalence relation?  
**Solution:**  
Yes.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">6. Compatibility Relations</strong></h3>

A relation R is **compatible** with an operation ⊕ if:

a R b and c R d ⇒ (a ⊕ c) R (b ⊕ d)

Examples:

- Congruence mod n under addition
    
- Equality under addition
    
- Divisibility under multiplication
    
- Parity equivalence under addition
    

Compatibility ensures operations preserve structural relationships.

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">6.1 Practice Problems</strong></h4>

**Problem 1:**  
Show congruence mod n is compatible with addition.  
**Solution:**  
a≡b & c≡d ⇒ a+c ≡ b+d (mod n).

**Problem 2:**  
Is equality compatible with addition?  
**Solution:**  
Yes.

**Problem 3:**  
Is “<” compatible with addition?  
**Solution:**  
Yes.

**Problem 4:**  
Is divisibility compatible with multiplication?  
**Solution:**  
Yes.

**Problem 5:**  
Is parity compatible with addition?  
**Solution:**  
Yes.

---
---

<h2 style="text-align:center; color:blue;"><strong style="color:#cc33cc;">Partial Ordering & Hasse Diagrams</strong></h2>

Partial orders and Hasse diagrams are essential tools for analyzing hierarchical structures, precedence relationships, set inclusions, divisibility patterns, versioning systems, and dependency graphs used throughout mathematics and computer science.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1. Partial Ordering</strong></h3>

A **partial order** is a relation ≤ on a set **P** that satisfies the following three properties:

### **1. Reflexive**

Every element relates to itself.  
For all a ∈ P: a ≤ a.

### **2. Antisymmetric**

If a ≤ b and b ≤ a, then a = b.

### **3. Transitive**

If a ≤ b and b ≤ c, then a ≤ c.

A set P accompanied by a partial order is called a **partially ordered set**, or **poset**.

### **Examples of Partial Orders**

- **Divisibility** on positive integers
    
- **Subset relation (⊆)** on power sets
    
- **Task dependencies** in project planning
    
- **File system hierarchy**
    
- **Version ordering** (v1.2 ≤ v1.3 ≤ v2.0)
    

### **Image Placeholder – Poset Example**

![Poset Example Placeholder](https://chatgpt.com/c/assets/images/poset_example.png)

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1.1 Practice Problems</strong></h4>

**Problem 1:**  
Show that ⊆ is a partial order on the power set of {1,2,3}.  
**Solution:**  
Reflexive (A⊆A), antisymmetric (A⊆B and B⊆A ⇒ A=B), transitive.

**Problem 2:**  
Is the relation R={(1,1),(2,2),(1,2)} a partial order on {1,2}?  
**Solution:**  
Yes.

**Problem 3:**  
Is “≤” on ℤ a partial order?  
**Solution:**  
Yes.

**Problem 4:**  
Is “<” on ℤ a partial order?  
**Solution:**  
No (not reflexive).

**Problem 5:**  
Check if divisibility on {1,2,3,4,6} is a partial order.  
**Solution:**  
Yes; it satisfies all three properties.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2. Hasse Diagram</strong></h3>

A **Hasse diagram** is a simplified graphical representation of a finite partially ordered set (**poset**).  
It shows the structure of the poset by displaying only the essential ordering relationships.

### **Construction Rules**

1. Represent each element of the set as a point.
    
2. Draw an upward line **from a to b** if:
    
    - a < b (a is less than b in the poset), and
        
    - there is **no element c** such that a < c < b  
        (i.e., **c covers b**).
        
3. Remove:
    
    - all reflexive loops
        
    - all transitive edges
        
    - arrowheads (the diagram implies upward direction)
        

This produces a minimal, clean ordering diagram.

### **Image Placeholder – Hasse Diagram Example**

![Hasse Diagram Placeholder](https://chatgpt.com/c/assets/images/hasse_example.png)

### **Example**

Consider the poset (**P**, ⊆) where  
P = {∅, {1}, {2}, {1,2}}

The Hasse diagram:

- ∅ at the bottom
    
- {1} and {2} above it
    
- {1,2} at the top
    

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2.1 Practice Problems</strong></h4>

**Problem 1:**  
Draw the Hasse diagram of divisibility on {1,2,4,8}.  
**Solution:**  
1 at bottom → 2 → 4 → 8 (a vertical chain).

**Problem 2:**  
Draw the Hasse diagram of subsets of {a,b}.  
**Solution:**  
∅ → {a}, {b} → {a,b}.

**Problem 3:**  
For poset ({1,2,3}, ≤), draw its Hasse diagram.  
**Solution:**  
A straight vertical chain: 1 → 2 → 3.

**Problem 4:**  
Given R={(a,b),(b,c),(a,c)}, draw minimal edges only.  
**Solution:**  
a → b → c (remove a→c as transitive).

**Problem 5:**  
Determine if the Hasse diagram of set inclusion on {a,b,c} forms a lattice.  
**Solution:**  
Yes; every pair has a meet and join.

---
---

<h2 style="text-align:center; color:blue;"><strong style="color:#cc33cc;">Functions</strong></h2>

A **function** (or mapping) associates every element of a set **A** (domain) with exactly one element of another set **B** (codomain).  
Functions appear everywhere in computer science — state transitions in automata, hashing, encryption/decryption, recursion in algorithms, transformations in machine learning models, etc.

A function _f : A → B_ assigns to each _a ∈ A_ a unique element _f(a) ∈ B_.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1. Composition of Functions</strong></h3>

If:

- _f : A → B_
    
- _g : B → C_
    

Then the **composition** of g and f is:

**g ∘ f : A → C**  
defined by **(g ∘ f)(a) = g(f(a))**

### Why composition matters?

- Multi-step transformations in algorithms
    
- Function pipelines (machine learning feature transformations)
    
- Database query operations
    
- Program semantics (nested functions)
    
- Encryption layers (e.g., substitution + permutation networks)
    

### Properties

- Composition may be **associative**,  
    (h ∘ g) ∘ f = h ∘ (g ∘ f)
    
- Not necessarily commutative  
    f ∘ g ≠ g ∘ f
    

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1.1 Practice Problems</strong></h4>

**Problem 1:**  
Let f(x)=2x and g(x)=x+3. Find (g∘f)(2).  
**Solution:**  
f(2)=4 → g(4)=7.

**Problem 2:**  
Compute (f∘g)(x) for same f, g.  
**Solution:**  
g(x)=x+3 → f(x+3)=2x+6.

**Problem 3:**  
Show (h∘g)∘f = h∘(g∘f) for f(x)=x+1, g(x)=2x, h(x)=x².  
**Solution:**  
Both give (2x+2)² = 4x²+8x+4.

**Problem 4:**  
Give an example where f∘g ≠ g∘f.  
**Solution:**  
f(x)=x+1, g(x)=2x → f(g(x))=2x+1 ≠ g(f(x))=2x+2.

**Problem 5:**  
If f:A→B and g:B→C are both onto, is g∘f onto?  
**Solution:**  
Yes; surjections compose to surjections.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2. Inverse Function</strong></h3>

A function f : A→B has an **inverse** f⁻¹ : B→A if:

- f is **one-to-one (injective)**
    
- f is **onto (surjective)**
    

i.e., **f must be a bijection**.

If f⁻¹ exists, then:

- f⁻¹(f(a)) = a
    
- f(f⁻¹(b)) = b
    

### Where inverse functions appear?

- Cryptography (encryption ↔ decryption)
    
- Hashing & reversible mappings
    
- Relational databases (key lookups)
    
- Functional programming
    
- Solving equations
    
- Normalization and denormalization of data
    

### Identifying inverse existence

- A function that “collapses” different inputs into the same output **cannot** be inverted
    
- A function missing elements in its range **cannot** be inverted
    

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2.1 Practice Problems</strong></h4>

**Problem 1:**  
Does f(x)=x² from ℝ→ℝ have an inverse?  
**Solution:**  
No; not injective.

**Problem 2:**  
If f(x)=3x+1, find f⁻¹(x).  
**Solution:**  
x = 3y + 1 → y = (x−1)/3  
Thus f⁻¹(x) = (x−1)/3.

**Problem 3:**  
Does f:{1,2,3}→{a,b,c} with f(1)=a,f(2)=b,f(3)=c have an inverse?  
**Solution:**  
Yes; bijection.

**Problem 4:**  
Does g:{1,2,3}→{a,b} with g(1)=a,g(2)=a,g(3)=b have inverse?  
**Solution:**  
No; not injective.

**Problem 5:**  
If f is bijective, what is (f⁻¹)⁻¹ ?  
**Solution:**  
f.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">3. Recursive Functions</strong></h3>

A **recursive function** is defined in terms of itself, using:

1. **Base case**
    
2. **Recursive step**
    

Recursive definitions are essential in:

- Algorithm design (divide & conquer)
    
- Tree and graph traversal
    
- Mathematical sequences (Fibonacci, factorial)
    
- Grammar definitions (formal languages)
    
- Compiler construction
    
- Dynamic programming (state recurrence)
    

### Examples

**1. Factorial**  
f(0)=1  
f(n)=n·f(n−1)

**2. Fibonacci**  
F(0)=0, F(1)=1  
F(n)=F(n−1)+F(n−2)

**3. Length of a list**  
len([])=0  
len(x::xs)=1+len(xs)

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">3.1 Practice Problems</strong></h4>

**Problem 1:**  
Compute f(4) for f(n)=n·f(n−1), f(0)=1.  
**Solution:**  
f(4)=24.

**Problem 2:**  
Compute F(5) for Fibonacci.  
**Solution:**  
5.

**Problem 3:**  
Define a recursive function for the sum of first n natural numbers.  
**Solution:**  
S(0)=0; S(n)=n+S(n−1).

**Problem 4:**  
Write a recursive definition for aⁿ.  
**Solution:**  
a⁰=1; aⁿ=a·aⁿ⁻¹.

**Problem 5:**  
Is f(n)=n² recursive? Provide a definition.  
**Solution:**  
Yes. f(0)=0; f(n)=f(n−1)+2n−1.

---
---

<h2 style="text-align:center; color:blue;"><strong style="color:#cc33cc;">Lattice and its Properties</strong></h2>

A **lattice** is a special type of partially ordered set (poset) in which every pair of elements has:

- a **greatest lower bound (GLB)** or **meet**, denoted by a ∧ b
    
- a **least upper bound (LUB)** or **join**, denoted by a ∨ b
    

Lattices unify order theory, algebra, logic, and many structures in computer science (Boolean algebra, dataflow analysis, type hierarchies, and dependency graphs).

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1. Definition of a Lattice</strong></h3>

A poset (L, ≤) is a **lattice** if **every pair** (a, b) ∈ L satisfies:

- **Meet (a ∧ b):** the greatest element ≤ both a and b
    
- **Join (a ∨ b):** the least element ≥ both a and b
    

### Examples:

- **(P(S), ⊆)** → the power set lattice
    
    - Meet = intersection
        
    - Join = union
        
- **Divisors of a number under divisibility**
    
    - Meet = gcd(a, b)
        
    - Join = lcm(a, b)
        

### Image Placeholder – Lattice Example

![Lattice Example Placeholder](https://chatgpt.com/c/assets/images/lattice_example.png)

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2. Properties of Lattices</strong></h3>

Every lattice satisfies the following algebraic properties.

### **1. Commutativity**

a ∧ b = b ∧ a  
a ∨ b = b ∨ a

### **2. Associativity**

(a ∧ b) ∧ c = a ∧ (b ∧ c)  
(a ∨ b) ∨ c = a ∨ (b ∨ c)

### **3. Idempotence**

a ∧ a = a  
a ∨ a = a

### **4. Absorption Laws**

a ∧ (a ∨ b) = a  
a ∨ (a ∧ b) = a

These properties make lattices useful for:

- Boolean algebra
    
- Logic simplification
    
- Database query optimization
    
- Compiler dataflow
    
- AI reasoning systems
    
- Type theory & semantic domains
    

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2.1 Practice Problems</strong></h4>

**Problem 1:**  
Show (P(S), ⊆) is a lattice.  
**Solution:**  
Meet = intersection, Join = union → both always exist.

**Problem 2:**  
Find meet and join of {a}, {a,b}.  
**Solution:**  
Meet = {a}, Join = {a,b}.

**Problem 3:**  
Is (ℕ, | ) under divisibility a lattice?  
**Solution:**  
Yes; meet = gcd, join = lcm.

**Problem 4:**  
Verify absorption laws for sets A= {1,2}, B= {2,3}.  
**Solution:**  
A ∧ (A ∨ B)= A; A ∨ (A ∧ B)= A.

**Problem 5:**  
Does every poset form a lattice?  
**Solution:**  
No; meet/join may not exist for some pairs.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">3. Types of Lattices</strong></h3>

### **1. Bounded Lattice**

Has unique **0 (bottom)** and **1 (top)** elements.

### **2. Distributive Lattice**

Meet and join distribute over each other.

### **3. Complemented Lattice**

Every element has a complement.

Boolean algebra is a **complemented, distributive, bounded lattice**.

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">3.1 Practice Problems</strong></h4>

**Problem 1:**  
Is (P(S), ⊆) bounded?  
**Solution:**  
Yes; bottom=∅, top=S.

**Problem 2:**  
Is the divisibility lattice of positive integers bounded?  
**Solution:**  
Depends on the set; e.g., divisors of 12 → yes.

**Problem 3:**  
Give an example of a distributive lattice.  
**Solution:**  
Power set; because ∧=∩ and ∨=∪ distribute.

**Problem 4:**  
Does every distributive lattice have complements?  
**Solution:**  
No.

**Problem 5:**  
Is a Boolean algebra always a lattice?  
**Solution:**  
Yes; it is a specialized lattice.

---
---

<h2 style="text-align:center; color:blue;"><strong style="color:#cc33cc;">Pigeonhole Principle and its Applications</strong></h2>

The **Pigeonhole Principle (PHP)** states:

> If _n+1_ or more objects are placed into _n_ boxes, then **at least one box contains ≥ 2 objects**.

This simple idea has profound applications in:

- Number theory
    
- Hashing
    
- Distributed systems
    
- Cryptography
    
- File storage
    
- Network routing
    
- Load balancing
    
- Combinatorics
    

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1. Basic Pigeonhole Principle</strong></h3>

If _k_ objects are placed into _n_ boxes and **k > n**, then at least one box has more than one object.

### Example

If 13 people are in a room, at least **two share the same birth month**.

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">1.1 Practice Problems</strong></h4>

**Problem 1:**  
Show that in any group of 5 people, at least two have the same number of friends (0–4).  
**Solution:**  
5 people, 5 possible values (0–4) → cannot all be distinct.

**Problem 2:**  
If 27 socks are drawn from a drawer with 4 colors, show at least 7 of one color must appear.  
**Solution:**  
⌈27/4⌉ = 7.

**Problem 3:**  
Show at least two people in Andhra Pradesh have the same Aadhaar last digit.  
**Solution:**  
10 digits → millions of people → trivial by PHP.

**Problem 4:**  
Show that among any 8 integers, two have the same remainder mod 7.  
**Solution:**  
Remainders are 0–6 → 7 boxes → 8 numbers.

**Problem 5:**  
Show that at least two students in a class of 40 scored the same integer mark (0–100).  
**Solution:**  
101 boxes → 40 objects → possible to be all distinct → **NOT guaranteed**.  
But with 102 students → guaranteed.

---

<h3 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2. Generalized Pigeonhole Principle</strong></h3>

If _k_ objects are distributed into _n_ boxes, then **at least one box contains**:

### ⌈k / n⌉ objects

This version is used in most modern applications.

### Example

If 1000 items are hashed into 200 buckets:  
⌈1000/200⌉ = 5  
→ at least one bucket has ≥ 5 items.

---

<h4 style="text-align:left; color:blue;"><strong style="color:#cc33cc;">2.1 Practice Problems</strong></h4>

**Problem 1:**  
Show that in any set of 60 numbers, two must have the same remainder mod 50.  
**Solution:**  
⌈60/50⌉ = 2.

**Problem 2:**  
Distribute 100 balls into 9 buckets. Show one bucket has ≥ 12.  
**Solution:**  
⌈100/9⌉ = 12.

**Problem 3:**  
At a company of 73 employees, show two have the same birthday.  
**Solution:**  
⌈73/365⌉ = 1 → trivial → but with 366 employees → guaranteed.

**Problem 4:**  
Show that in any sequence of 20 integers, two have the same value mod 9.  
**Solution:**  
⌈20/9⌉ = 3 → at least one remainder appears ≥ 3 times.

**Problem 5:**  
In a class of 45, at least 5 students share the same favorite subject (10 subjects).  
**Solution:**  
⌈45/10⌉ = 5.

---

