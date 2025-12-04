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


<style>
/* Apply to all headings inside the LaTeX content */
.notes-content h1,
.notes-content h2,
.notes-content h3,
.notes-content h4,
.notes-content h5,
.notes-content h6 {
  color: #cc33cc !important;
  font-weight: normal !important; /* normal if we dont want bold font: options are `normal` and  'bold`*/
  text-align: left !important;
}

/* If you want H1 centered (like your old style), keep this: */
.notes-content h1 {
  text-align: center !important;
}

/* Remove strong override since heading already has the color */
.notes-content h1 strong,
.notes-content h2 strong,
.notes-content h3 strong {
  color: inherit !important;
}
</style>


<div class="notes-content">
<h1 id="mathematical-logic">Mathematical Logic</h1>
<h2 id="introduction">Introduction</h2>
<p>Mathematical logic provides a structured language for expressing
reasoning with precision. While natural language allows ambiguity and
multiple interpretations, propositional logic offers a formal symbolic
system in which statements have clearly defined truth values. This
chapter introduces the foundational components of propositional logic,
beginning with simple statements and building toward more complex
expressions using connectives, truth tables, equivalence, implication,
and canonical normal forms. The aim is to move from intuitive
understanding toward a rigorous formal framework suitable for
mathematics, computer science, and digital logic.</p>
<h1 id="statements-and-notation">Statements and Notation</h1>
<h2 id="intuition">Intuition</h2>
<p>Logical reasoning begins with assertions about the world—facts that
can be evaluated as true or false. Such assertions must be precise;
vague or context-dependent expressions cannot serve as reliable
components of formal reasoning. Propositional logic abstracts these
assertions into symbolic units that can be combined, manipulated, and
evaluated mechanically.</p>
<h2 id="formal-definition">Formal Definition</h2>
<p>A <strong>statement</strong> (or proposition) is a declarative
sentence that is either true (T) or false (F), but not both. Statements
are represented by uppercase letters: <span class="math display">\[P, Q,
R, \ldots\]</span> Each statement carries a truth value from the set
<span class="math inline">\(\{T, F\}\)</span>.</p>
<h2 id="examples">Examples</h2>
<p><strong>Example 1.</strong> <span class="math inline">\(P\)</span>:
London is a city. This has a definite truth value and is therefore a
statement.</p>
<p><strong>Example 2.</strong> “This table is big.” Because the term
“big” is subjective, this is not suitable as a logical statement.</p>
<p><strong>Example 3.</strong> <span class="math inline">\(Q: 3+5 =
9\)</span>. This is a statement; its truth value is <span class="math inline">\(F\)</span>.</p>
<p><strong>Example 4.</strong> “<span class="math inline">\(x &gt;
5\)</span>.” This is not a statement; its truth depends on the value of
<span class="math inline">\(x\)</span>.</p>
<h2 id="applications">Applications</h2>
<p>Statements are essential components of Boolean algebra, digital
circuit design, programming language semantics, automated theorem
proving, and formal verification. All further concepts in propositional
logic depend on the ability to work with clearly defined statements.</p>
<h2 class="unnumbered" id="practice-problems">Practice Problems</h2>
<p><strong>Problem 1.</strong> Determine whether “Water boils at 100°C”
is a statement.<br />
<strong>Solution.</strong> It has a definite truth value under standard
conditions; therefore it is a statement.</p>
<p><strong>Problem 2.</strong> Determine whether “Close the door” is a
statement.<br />
<strong>Solution.</strong> It is a command and does not carry a truth
value; hence it is not a statement.</p>
<p><strong>Problem 3.</strong> Is “Mars has two moons” a
statement?<br />
<strong>Solution.</strong> Yes; it has a definite truth value.</p>
<p><strong>Problem 4.</strong> Is “This is beautiful” a statement?<br />
<strong>Solution.</strong> The truth value depends on subjective
interpretation; not a logical statement.</p>
<p><strong>Problem 5.</strong> Is “<span class="math inline">\(x^2 &gt;
4\)</span>” a statement?<br />
<strong>Solution.</strong> Its truth value depends on <span class="math inline">\(x\)</span>; therefore it is not a statement in
propositional logic.</p>
<h1 id="connectives">Connectives</h1>
<h2 id="intuition-1">Intuition</h2>
<p>To express complex reasoning, individual statements are combined
using logical connectives. These connectives describe relationships such
as negation, conjunction, disjunction, and implication. Just as
arithmetic operators combine numbers, logical connectives combine
statements into compound expressions whose truth can be evaluated.</p>
<h2 id="formal-definitions">Formal Definitions</h2>
<p>Let <span class="math inline">\(P\)</span> and <span class="math inline">\(Q\)</span> be statements. The fundamental
connectives are:</p>
<ul>
<li><p><strong>Negation:</strong> <span class="math inline">\(\neg
P\)</span> means “not <span class="math inline">\(P\)</span>”.</p></li>
<li><p><strong>Conjunction:</strong> <span class="math inline">\(P \land
Q\)</span> means “<span class="math inline">\(P\)</span> and <span class="math inline">\(Q\)</span>”.</p></li>
<li><p><strong>Disjunction:</strong> <span class="math inline">\(P \lor
Q\)</span> means “<span class="math inline">\(P\)</span> or <span class="math inline">\(Q\)</span>” (inclusive).</p></li>
<li><p><strong>Implication:</strong> <span class="math inline">\(P \to
Q\)</span> means “If <span class="math inline">\(P\)</span>, then <span class="math inline">\(Q\)</span>”.</p></li>
<li><p><strong>Biconditional:</strong> <span class="math inline">\(P
\leftrightarrow Q\)</span> means “<span class="math inline">\(P\)</span>
if and only if <span class="math inline">\(Q\)</span>”.</p></li>
</ul>
<h2 id="examples-1">Examples</h2>
<p><strong>Example 1.</strong> If <span class="math inline">\(P\)</span>: “It is raining,” then <span class="math inline">\(\neg P\)</span>: “It is not raining.”</p>
<p><strong>Example 2.</strong> Let <span class="math inline">\(P\)</span>: “I study,” and <span class="math inline">\(Q\)</span>: “I pass.” Then <span class="math inline">\(P \land Q\)</span>: “I study and I pass.”</p>
<p><strong>Example 3.</strong> “If it rains, the match is cancelled” is
represented by <span class="math inline">\(R \to C\)</span>.</p>
<h2 id="applications-1">Applications</h2>
<p>Connectives underpin decision-making in computer programs, digital
circuit construction, specification languages, and formal systems used
for proof verification.</p>
<h2 class="unnumbered" id="practice-problems-1">Practice Problems</h2>
<p><strong>Problem 1.</strong> Write the negation of “All lights are
on.”<br />
<strong>Solution.</strong> “Not all lights are on.”</p>
<p><strong>Problem 2.</strong> Express “I will go only if you go”
symbolically.<br />
<strong>Solution.</strong> <span class="math inline">\(I \to
Y\)</span>.</p>
<p><strong>Problem 3.</strong> Represent “He is tall or strong.”<br />
<strong>Solution.</strong> <span class="math inline">\(T \lor
S\)</span>.</p>
<p><strong>Problem 4.</strong> Represent “It is not the case that both
are true.”<br />
<strong>Solution.</strong> <span class="math inline">\(\neg(P \land
Q)\)</span>.</p>
<p><strong>Problem 5.</strong> Express “You will win if and only if you
try.”<br />
<strong>Solution.</strong> <span class="math inline">\(W \leftrightarrow
T\)</span>.</p>
<h1 id="well-formed-formulas">Well-Formed Formulas</h1>
<h2 id="intuition-2">Intuition</h2>
<p>Not every combination of symbols yields a meaningful logical
expression. A well-formed formula (WFF) obeys syntactic rules that
determine which expressions are valid. This is similar to arithmetic,
where an expression like “<span class="math inline">\(3+\)</span>” is
syntactically invalid.</p>
<h2 id="formal-definition-1">Formal Definition</h2>
<p>The set of WFFs is defined recursively as follows:</p>
<ul>
<li><p>Every statement symbol is a WFF.</p></li>
<li><p>If <span class="math inline">\(A\)</span> is a WFF, then <span class="math inline">\(\neg A\)</span> is a WFF.</p></li>
<li><p>If <span class="math inline">\(A\)</span> and <span class="math inline">\(B\)</span> are WFFs, then <span class="math inline">\((A \land B)\)</span>, <span class="math inline">\((A \lor B)\)</span>, <span class="math inline">\((A \to B)\)</span>, and <span class="math inline">\((A \leftrightarrow B)\)</span> are WFFs.</p></li>
</ul>
<h2 id="examples-2">Examples</h2>
<p><strong>Example 1.</strong> <span class="math inline">\((P \lor Q)
\to \neg R\)</span> is a WFF because each component satisfies the
formation rules.</p>
<p><strong>Example 2.</strong> <span class="math inline">\(P \lor \land
Q\)</span> is not a WFF because the connective usage is incorrect.</p>
<h2 id="applications-2">Applications</h2>
<p>WFFs provide the syntactic foundation for formal derivations, parsing
in compilers, automated theorem proving, and symbolic computation.</p>
<h2 class="unnumbered" id="practice-problems-2">Practice Problems</h2>
<p><strong>Problem 1.</strong> Determine whether <span class="math inline">\(\neg(P \lor Q)\)</span> is a WFF.<br />
<strong>Solution.</strong> Yes; both <span class="math inline">\((P \lor
Q)\)</span> and its negation follow formation rules.</p>
<p><strong>Problem 2.</strong> Determine whether <span class="math inline">\(P \neg Q\)</span> is a WFF.<br />
<strong>Solution.</strong> No; a connective is missing.</p>
<p><strong>Problem 3.</strong> Is <span class="math inline">\((P \to Q)
\land R\)</span> a WFF?<br />
<strong>Solution.</strong> Yes; both components are valid WFFs.</p>
<p><strong>Problem 4.</strong> Is <span class="math inline">\(\lor P
Q\)</span> a WFF?<br />
<strong>Solution.</strong> No; the connective is not placed between
formulas.</p>
<p><strong>Problem 5.</strong> Is <span class="math inline">\(\neg(P
\leftrightarrow Q)\)</span> a WFF?<br />
<strong>Solution.</strong> Yes; it is the negation of a valid WFF.</p>
<h1 id="truth-tables">Truth Tables</h1>
<h2 id="intuition-3">Intuition</h2>
<p>Truth tables provide a systematic procedure to determine the truth
value of any compound expression. By enumerating all possible truth
assignments for the component statements, the behavior of the expression
can be fully analyzed.</p>
<h2 id="example">Example</h2>
<p>Truth table for <span class="math inline">\(P \lor Q\)</span>:</p>
<p><span class="math display">\[\begin{array}{c|c|c}
        P &amp; Q &amp; P \lor Q \\ \hline
        T &amp; T &amp; T \\
        T &amp; F &amp; T \\
        F &amp; T &amp; T \\
        F &amp; F &amp; F \\
    \end{array}\]</span></p>
<h2 id="applications-3">Applications</h2>
<p>Truth tables are essential for verifying equivalence, determining
tautologies, constructing digital circuits, analyzing logical
dependencies, and designing control systems.</p>
<h2 class="unnumbered" id="practice-problems-3">Practice Problems</h2>
<p><strong>Problem 1.</strong> Construct a truth table for <span class="math inline">\(P \land \neg Q\)</span>.<br />
<strong>Solution.</strong> Compute <span class="math inline">\(\neg
Q\)</span> and then evaluate <span class="math inline">\(P \land \neg
Q\)</span> for all combinations of truth values.</p>
<p><strong>Problem 2.</strong> Construct a truth table for <span class="math inline">\(P \to Q\)</span>.<br />
<strong>Solution.</strong> Use the rule that <span class="math inline">\(P \to Q\)</span> is false only when <span class="math inline">\(P\)</span> is true and <span class="math inline">\(Q\)</span> is false.</p>
<p><strong>Problem 3.</strong> Construct a truth table for <span class="math inline">\(\neg(P \lor Q)\)</span>.<br />
<strong>Solution.</strong> Evaluate <span class="math inline">\(P \lor
Q\)</span> and negate the result.</p>
<p><strong>Problem 4.</strong> Determine when <span class="math inline">\(P \leftrightarrow Q\)</span> is true.<br />
<strong>Solution.</strong> It is true when both <span class="math inline">\(P\)</span> and <span class="math inline">\(Q\)</span> share the same truth value.</p>
<p><strong>Problem 5.</strong> Compare truth tables of <span class="math inline">\(P \lor (Q \land R)\)</span> and <span class="math inline">\((P \lor Q) \land R\)</span>.<br />
<strong>Solution.</strong> They produce different results for some
inputs, showing they are not equivalent.</p>
<h1 id="tautology">Tautology</h1>
<h2 id="intuition-4">Intuition</h2>
<p>A tautology is a formula that evaluates to true for every possible
assignment of truth values to its variables. Such expressions represent
absolute logical truths and are important for proving validity in
deductive systems.</p>
<h2 id="formal-definition-2">Formal Definition</h2>
<p>A formula <span class="math inline">\(A\)</span> is a
<strong>tautology</strong> if every entry in its truth table evaluates
to <span class="math inline">\(T\)</span>.</p>
<h2 id="examples-3">Examples</h2>
<p><strong>Example 1.</strong> <span class="math display">\[P \lor \neg
P\]</span> is a tautology because exactly one of <span class="math inline">\(P\)</span>, <span class="math inline">\(\neg
P\)</span> is always true.</p>
<p><strong>Example 2.</strong> <span class="math display">\[(P \to Q)
\lor (Q \to P)\]</span></p>
<h2 class="unnumbered" id="practice-problems-4">Practice Problems</h2>
<p><strong>Problem 1.</strong> Determine whether <span class="math inline">\(P \lor \neg P\)</span> is a tautology.<br />
<strong>Solution.</strong> It evaluates to <span class="math inline">\(T\)</span> for both truth values of <span class="math inline">\(P\)</span>.</p>
<p><strong>Problem 2.</strong> Test whether <span class="math inline">\((P \to Q) \lor (Q \to P)\)</span> is a
tautology.<br />
<strong>Solution.</strong> It is true for all four combinations of truth
values.</p>
<p><strong>Problem 3.</strong> Check whether <span class="math inline">\((P \land Q) \lor (\neg P \lor \neg Q)\)</span> is
a tautology.<br />
<strong>Solution.</strong> The final column of its truth table contains
all <span class="math inline">\(T\)</span>.</p>
<p><strong>Problem 4.</strong> Determine whether <span class="math inline">\((P \lor Q) \to (Q \lor P)\)</span> is a
tautology.<br />
<strong>Solution.</strong> Since disjunction is commutative, the
implication always holds.</p>
<p><strong>Problem 5.</strong> Verify whether <span class="math inline">\(P \leftrightarrow (P \lor (Q \land \neg
Q))\)</span> is a tautology.<br />
<strong>Solution.</strong> The formula simplifies to <span class="math inline">\(P \leftrightarrow P\)</span>, which is always
true.</p>
<h1 id="equivalence-and-implication">Equivalence and Implication</h1>
<h2 id="intuition-5">Intuition</h2>
<p>Two formulas may express the same logical content when their truth
tables match exactly. One formula may guarantee the truth of another
regardless of input. Logical equivalence and implication formalize these
relationships.</p>
<h2 id="formal-definition-3">Formal Definition</h2>
<p>Formulas <span class="math inline">\(A\)</span> and <span class="math inline">\(B\)</span> are <strong>logically
equivalent</strong> if: <span class="math display">\[A \leftrightarrow
B\]</span> is a tautology.</p>
<p>Formula <span class="math inline">\(A\)</span> <strong>logically
implies</strong> formula <span class="math inline">\(B\)</span> if:
<span class="math display">\[A \to B\]</span> is a tautology.</p>
<h2 id="examples-4">Examples</h2>
<p><span class="math display">\[\neg(P \lor Q) \equiv \neg P \land \neg
Q\]</span></p>
<p><span class="math display">\[P \to Q \equiv \neg P \lor
Q\]</span></p>
<h2 class="unnumbered" id="practice-problems-5">Practice Problems</h2>
<p><strong>Problem 1.</strong> Show that <span class="math inline">\(\neg(P \lor Q)\)</span> is equivalent to <span class="math inline">\(\neg P \land \neg Q\)</span>.<br />
<strong>Solution.</strong> Construct the truth table; the columns match
exactly.</p>
<p><strong>Problem 2.</strong> Determine whether <span class="math inline">\(P \to Q\)</span> is equivalent to <span class="math inline">\(\neg P \lor Q\)</span>.<br />
<strong>Solution.</strong> The truth tables coincide, proving
equivalence.</p>
<p><strong>Problem 3.</strong> Show that <span class="math inline">\((P
\leftrightarrow Q)\)</span> implies <span class="math inline">\((P \to
Q)\)</span>.<br />
<strong>Solution.</strong> Whenever <span class="math inline">\(P
\leftrightarrow Q\)</span> is true, both implications hold.</p>
<p><strong>Problem 4.</strong> Determine whether <span class="math inline">\((P \to Q) \land (Q \to P)\)</span> is equivalent
to <span class="math inline">\(P \leftrightarrow Q\)</span>.<br />
<strong>Solution.</strong> Their truth tables are identical.</p>
<p><strong>Problem 5.</strong> Verify whether <span class="math inline">\(P \lor Q\)</span> implies <span class="math inline">\(P \land Q\)</span>.<br />
<strong>Solution.</strong> No; when exactly one of <span class="math inline">\(P,Q\)</span> is true, the implication fails.</p>
<h1 id="normal-forms">Normal Forms</h1>
<h2 id="intuition-6">Intuition</h2>
<p>Logical expressions can be rewritten into standardized canonical
forms. These normal forms provide uniform structure for evaluating
expressions, designing digital circuits, and applying systematic
reasoning techniques.</p>
<h2 id="types">Types</h2>
<ul>
<li><p><strong>Principal Disjunctive Normal Form
(PDNF)</strong></p></li>
<li><p><strong>Principal Conjunctive Normal Form
(PCNF)</strong></p></li>
</ul>
<h2 id="examples-5">Examples</h2>
<p><span class="math display">\[P \lor (Q \land R)\]</span> can be
rewritten by distributing <span class="math inline">\(\lor\)</span> over
<span class="math inline">\(\land\)</span> to obtain its canonical
expansion.</p>
<h2 class="unnumbered" id="practice-problems-6">Practice Problems</h2>
<p><strong>Problem 1.</strong> Convert <span class="math inline">\(P
\lor (Q \land R)\)</span> into PDNF.<br />
<strong>Solution.</strong> Distribute <span class="math inline">\(\lor\)</span> over <span class="math inline">\(\land\)</span>; then expand into minterms.</p>
<p><strong>Problem 2.</strong> Convert <span class="math inline">\(\neg(P \land Q)\)</span> into PCNF.<br />
<strong>Solution.</strong> Apply De Morgan’s law and rewrite as a
product of maxterms.</p>
<p><strong>Problem 3.</strong> Express <span class="math inline">\(P \to
Q\)</span> in PDNF.<br />
<strong>Solution.</strong> Rewrite as <span class="math inline">\(\neg P
\lor Q\)</span>; enumerate truth table rows where expression is
true.</p>
<p><strong>Problem 4.</strong> Convert <span class="math inline">\(P
\leftrightarrow Q\)</span> into PCNF.<br />
<strong>Solution.</strong> List all rows where the biconditional is
false and convert to maxterms.</p>
<p><strong>Problem 5.</strong> Reduce <span class="math inline">\(\neg(P
\lor \neg Q)\)</span> to PDNF.<br />
<strong>Solution.</strong> Using De Morgan’s law, obtain <span class="math inline">\(\neg P \land Q\)</span>, already in minterm
form.</p>
<h1 id="theory-of-inference-for-the-statement-calculus">Theory of
Inference for the Statement Calculus</h1>
<h2 id="introduction-1">Introduction</h2>
<p>Inference is the process of deriving new statements from existing
ones. In everyday reasoning, we frequently jump from known facts to
conclusions, but formal logic demands that such steps follow precise
rules. The goal of the statement calculus is to provide a symbolic
framework in which the correctness of an argument does not depend on
interpretation but purely on structure.</p>
<p>Inference in propositional logic answers one fundamental question:
<em>Given certain statements as premises, can a particular conclusion be
logically deduced from them?</em></p>
<p>This chapter formalizes the idea of a valid argument, introduces
rules of inference, and demonstrates how these rules allow us to
construct formal proofs mechanically.</p>
<h1 id="basic-idea-of-inference">Basic Idea of Inference</h1>
<h2 id="intuition-7">Intuition</h2>
<p>Reasoning begins by accepting some statements as given (premises).
From these, we wish to conclude another statement. If the conclusion
follows solely from the logical structure of the premises — independent
of the truth of individual statements — the argument is valid.</p>
<p>For example: <span class="math display">\[P \to Q, \quad P \quad
\vdash \quad Q\]</span> The structure guarantees correctness: if <span class="math inline">\(P\)</span> implies <span class="math inline">\(Q\)</span>, and <span class="math inline">\(P\)</span> is true, then <span class="math inline">\(Q\)</span> must be true.</p>
<h2 id="formal-definition-4">Formal Definition</h2>
<p>Given premises <span class="math inline">\(P_1, P_2, \ldots,
P_n\)</span> and a conclusion <span class="math inline">\(C\)</span>,
the inference <span class="math display">\[P_1, P_2, \ldots, P_n \vdash
C\]</span> is <strong>valid</strong> if and only if the compound formula
<span class="math display">\[(P_1 \land P_2 \land \ldots \land P_n) \to
C\]</span> is a tautology.</p>
<h2 id="examples-6">Examples</h2>
<p><strong>Example 1.</strong> From <span class="math inline">\(P \land
Q\)</span>, infer <span class="math inline">\(P\)</span>. This is valid
because: <span class="math display">\[(P \land Q) \to P\]</span> is
always true.</p>
<p><strong>Example 2.</strong> From <span class="math inline">\(P\)</span>, infer <span class="math inline">\(P
\lor Q\)</span>. This is valid since if <span class="math inline">\(P\)</span> is true, <span class="math inline">\(P
\lor Q\)</span> must be true.</p>
<h2 id="practice-problems-7">Practice Problems</h2>
<p><strong>Problem 1.</strong> Show that from <span class="math inline">\(P \land Q\)</span> we may infer <span class="math inline">\(Q\)</span>.<br />
<strong>Solution.</strong> Because <span class="math inline">\((P \land
Q) \to Q\)</span> evaluates to <span class="math inline">\(T\)</span>
for every assignment, the inference is valid.</p>
<p><strong>Problem 2.</strong> Show that from <span class="math inline">\(P\)</span> we may infer <span class="math inline">\(P \lor R\)</span>.<br />
<strong>Solution.</strong> Whenever <span class="math inline">\(P\)</span> is true, <span class="math inline">\(P
\lor R\)</span> is also true; hence the implication is a tautology.</p>
<p><strong>Problem 3.</strong> Determine whether <span class="math inline">\(P \to R\)</span> follows from <span class="math inline">\(P \to Q\)</span> and <span class="math inline">\(Q
\to R\)</span>.<br />
<strong>Solution.</strong> The implication <span class="math inline">\([(P \to Q) \land (Q \to R)] \to (P \to R)\)</span>
is a tautology; thus the inference is valid.</p>
<p><strong>Problem 4.</strong> Does <span class="math inline">\(P\)</span> follow from <span class="math inline">\(P \lor Q\)</span>?<br />
<strong>Solution.</strong> No. <span class="math inline">\((P \lor Q)
\to P\)</span> is not always true (false when <span class="math inline">\(Q\)</span> is true and <span class="math inline">\(P\)</span> false).</p>
<p><strong>Problem 5.</strong> Does <span class="math inline">\(Q\)</span> follow from <span class="math inline">\(P \land (P \to Q)\)</span>?<br />
<strong>Solution.</strong> Yes. When <span class="math inline">\(P\)</span> is true and implies <span class="math inline">\(Q\)</span>, <span class="math inline">\(Q\)</span>
must hold.</p>
<h1 id="rules-of-inference">Rules of Inference</h1>
<h2 id="intuition-8">Intuition</h2>
<p>Rules of inference are logical templates that guarantee valid
reasoning. They serve as the “legal moves’’ permitted in a formal proof.
These include direct rules such as Modus Ponens and Modus Tollens, as
well as inferential laws derived from equivalences.</p>
<h2 id="major-rules">Major Rules</h2>
<ul>
<li><p><strong>Modus Ponens:</strong> From <span class="math inline">\(P\)</span> and <span class="math inline">\(P \to
Q\)</span>, infer <span class="math inline">\(Q\)</span>.</p></li>
<li><p><strong>Modus Tollens:</strong> From <span class="math inline">\(\neg Q\)</span> and <span class="math inline">\(P
\to Q\)</span>, infer <span class="math inline">\(\neg
P\)</span>.</p></li>
<li><p><strong>Hypothetical Syllogism:</strong> From <span class="math inline">\(P \to Q\)</span> and <span class="math inline">\(Q
\to R\)</span>, infer <span class="math inline">\(P \to
R\)</span>.</p></li>
<li><p><strong>Addition:</strong> From <span class="math inline">\(P\)</span>, infer <span class="math inline">\(P
\lor Q\)</span>.</p></li>
<li><p><strong>Simplification:</strong> From <span class="math inline">\(P \land Q\)</span>, infer <span class="math inline">\(P\)</span> (or <span class="math inline">\(Q\)</span>).</p></li>
<li><p><strong>Conjunction:</strong> From <span class="math inline">\(P\)</span> and <span class="math inline">\(Q\)</span>, infer <span class="math inline">\(P
\land Q\)</span>.</p></li>
</ul>
<h2 id="examples-7">Examples</h2>
<p><strong>Example.</strong> Given <span class="math inline">\(P \to
Q\)</span>, <span class="math inline">\(Q \to R\)</span>, and <span class="math inline">\(P\)</span>, we may conclude <span class="math inline">\(R\)</span>. Steps: <span class="math display">\[P
\to Q, \quad Q \to R \quad \vdash \quad P \to R\]</span> then by Modus
Ponens with <span class="math inline">\(P\)</span>, infer <span class="math inline">\(R\)</span>.</p>
<h2 id="practice-problems-8">Practice Problems</h2>
<p><strong>Problem 1.</strong> Using Modus Ponens, show that <span class="math inline">\(Q\)</span> follows from <span class="math inline">\(P\)</span> and <span class="math inline">\(P \to
Q\)</span>.<br />
<strong>Solution.</strong> Since <span class="math inline">\(P\)</span>
is true and <span class="math inline">\(P \to Q\)</span> is true, <span class="math inline">\(Q\)</span> must be true.</p>
<p><strong>Problem 2.</strong> Use Modus Tollens to infer <span class="math inline">\(\neg P\)</span> from <span class="math inline">\(\neg Q\)</span> and <span class="math inline">\(P
\to Q\)</span>.<br />
<strong>Solution.</strong> If <span class="math inline">\(P\)</span>
implies <span class="math inline">\(Q\)</span> but <span class="math inline">\(Q\)</span> is false, then <span class="math inline">\(P\)</span> must be false.</p>
<p><strong>Problem 3.</strong> From <span class="math inline">\(P \to
Q\)</span> and <span class="math inline">\(Q \to R\)</span>, infer <span class="math inline">\(P \to R\)</span>.<br />
<strong>Solution.</strong> This is Hypothetical Syllogism; it is a
tautological rule.</p>
<p><strong>Problem 4.</strong> From <span class="math inline">\(P \land
Q\)</span>, infer <span class="math inline">\(P\)</span>.<br />
<strong>Solution.</strong> Simplification: conjunction requires both
<span class="math inline">\(P\)</span> and <span class="math inline">\(Q\)</span> true, so <span class="math inline">\(P\)</span> alone must be true.</p>
<p><strong>Problem 5.</strong> From <span class="math inline">\(P\)</span> and <span class="math inline">\(Q\)</span>, infer <span class="math inline">\(P
\land Q\)</span>.<br />
<strong>Solution.</strong> Conjunction rule: if both are true, their
conjunction is true.</p>
<h1 id="consistency-of-premises-and-indirect-proof">Consistency of
Premises and Indirect Proof</h1>
<h2 id="intuition-9">Intuition</h2>
<p>A set of premises is <em>consistent</em> if no contradiction can be
derived from them. If premises lead to both a statement and its
negation, the system becomes useless because every statement becomes
deducible.</p>
<p>Indirect proofs rely on assuming the negation of the desired
conclusion and deriving a contradiction.</p>
<h2 id="formal-definition-5">Formal Definition</h2>
<p>A set of premises <span class="math inline">\(\{P_1, \ldots,
P_n\}\)</span> is <strong>consistent</strong> if there is at least one
truth assignment under which all are true.</p>
<p>To prove <span class="math inline">\(C\)</span> indirectly:</p>
<ol>
<li><p>Assume <span class="math inline">\(\neg C\)</span>.</p></li>
<li><p>Show that this assumption contradicts the premises.</p></li>
<li><p>Conclude <span class="math inline">\(C\)</span> must be
true.</p></li>
</ol>
<h2 id="example-1">Example</h2>
<p>If <span class="math inline">\(P \to Q\)</span> and <span class="math inline">\(P\)</span> are both true, then <span class="math inline">\(\neg Q\)</span> cannot be true. Thus we indirectly
prove <span class="math inline">\(Q\)</span> by assuming <span class="math inline">\(\neg Q\)</span> and reaching a contradiction.</p>
<h2 id="practice-problems-9">Practice Problems</h2>
<p><strong>Problem 1.</strong> Determine if the premises <span class="math inline">\(P \to Q\)</span> and <span class="math inline">\(P
\land \neg Q\)</span> are consistent.<br />
<strong>Solution.</strong> <span class="math inline">\(P \to Q\)</span>
requires <span class="math inline">\(Q\)</span> true when <span class="math inline">\(P\)</span> is true, but <span class="math inline">\(P \land \neg Q\)</span> makes <span class="math inline">\(Q\)</span> false. Contradiction →
inconsistent.</p>
<p><strong>Problem 2.</strong> Prove <span class="math inline">\(Q\)</span> indirectly from <span class="math inline">\(P \to Q\)</span> and <span class="math inline">\(P\)</span>.<br />
<strong>Solution.</strong> Assume <span class="math inline">\(\neg
Q\)</span>. Then with <span class="math inline">\(P \to Q\)</span> and
<span class="math inline">\(P\)</span>, contradiction occurs. Thus <span class="math inline">\(Q\)</span> holds.</p>
<p><strong>Problem 3.</strong> Are <span class="math inline">\(P\)</span>, <span class="math inline">\(\neg P
\lor Q\)</span>, and <span class="math inline">\(\neg Q\)</span>
consistent?<br />
<strong>Solution.</strong> From <span class="math inline">\(P\)</span>
and <span class="math inline">\(\neg P \lor Q\)</span>, <span class="math inline">\(Q\)</span> must be true. This contradicts <span class="math inline">\(\neg Q\)</span>. Hence inconsistent.</p>
<p><strong>Problem 4.</strong> Show that <span class="math inline">\(P
\lor Q\)</span>, <span class="math inline">\(\neg P\)</span>, and <span class="math inline">\(\neg Q\)</span> are inconsistent.<br />
<strong>Solution.</strong> <span class="math inline">\(\neg P\)</span>
and <span class="math inline">\(\neg Q\)</span> together make <span class="math inline">\(P \lor Q\)</span> false → contradiction.</p>
<p><strong>Problem 5.</strong> Using indirect proof, derive <span class="math inline">\(P\)</span> from <span class="math inline">\(\neg P
\to (Q \land \neg Q)\)</span>.<br />
<strong>Solution.</strong> Assume <span class="math inline">\(\neg
P\)</span>. Then <span class="math inline">\(Q \land \neg Q\)</span>
follows, a contradiction. Thus <span class="math inline">\(P\)</span> is
true.</p>
<h1 id="automatic-theorem-proving">Automatic Theorem Proving</h1>
<h2 id="intuition-10">Intuition</h2>
<p>The rules and methods so far allow a mechanical procedure for
checking whether a conclusion follows from premises. According to
Tremblay &amp; Manohar, theorem proving can be automated by
systematically applying inference rules until no new conclusions can be
added.</p>
<h2 id="method-outline">Method Outline</h2>
<ol>
<li><p>Express premises and conclusion in propositional form.</p></li>
<li><p>Apply rules of inference exhaustively.</p></li>
<li><p>If the conclusion appears, the proof succeeds.</p></li>
<li><p>If a contradiction arises under the assumption of the negation of
the conclusion, the proof is also successful.</p></li>
</ol>
<h2 id="example-2">Example</h2>
<p>Given premises <span class="math inline">\(P\)</span>, <span class="math inline">\(P \to Q\)</span>, and <span class="math inline">\(Q \to R\)</span>, theorem provers sequentially
apply Modus Ponens to derive <span class="math inline">\(Q\)</span> and
then <span class="math inline">\(R\)</span>.</p>
<h2 id="practice-problems-10">Practice Problems</h2>
<p><strong>Problem 1.</strong> Show how a theorem prover derives <span class="math inline">\(R\)</span> from <span class="math inline">\(P\)</span>, <span class="math inline">\(P \to
Q\)</span>, and <span class="math inline">\(Q \to R\)</span>.<br />
<strong>Solution.</strong> Apply Modus Ponens to get <span class="math inline">\(Q\)</span>, then apply it again to get <span class="math inline">\(R\)</span>.</p>
<p><strong>Problem 2.</strong> Using automatic inference, derive <span class="math inline">\(\neg P\)</span> from <span class="math inline">\((P \to Q)\)</span> and <span class="math inline">\(\neg Q\)</span>.<br />
<strong>Solution.</strong> Modus Tollens gives <span class="math inline">\(\neg P\)</span> immediately.</p>
<p><strong>Problem 3.</strong> Determine whether <span class="math inline">\(S\)</span> can be proven from premises unrelated
to <span class="math inline">\(S\)</span>.<br />
<strong>Solution.</strong> If no rule generates <span class="math inline">\(S\)</span>, theorem prover halts → <span class="math inline">\(S\)</span> is not derivable.</p>
<p><strong>Problem 4.</strong> Show that assuming <span class="math inline">\(\neg C\)</span> and deriving contradiction yields
a valid proof of <span class="math inline">\(C\)</span>.<br />
<strong>Solution.</strong> Indirect proof rule: contradiction closes the
branch, establishing <span class="math inline">\(C\)</span>.</p>
<p><strong>Problem 5.</strong> Use inference rules to show <span class="math inline">\((P \land Q) \to P\)</span> is a theorem.<br />
<strong>Solution.</strong> Assume <span class="math inline">\(P \land
Q\)</span>. Simplification gives <span class="math inline">\(P\)</span>.
Hence theorem.</p>
<h1 id="predicates-and-statement-functions">Predicates and Statement
Functions</h1>
<h2 id="intuition-11">Intuition</h2>
<p>Propositional logic allows whole statements to be treated as
indivisible units. However, many mathematical assertions have internal
structure involving objects. For example, “5 is even’’ and “7 is even’’
share the same underlying idea but differ in the object being discussed.
To capture this internal structure, logic introduces
<em>predicates</em>. A predicate expresses a property or relation, and
becomes true or false only after its variables are given specific
values.</p>
<h2 id="formal-definition-6">Formal Definition</h2>
<p>A <strong>predicate</strong> is an expression involving variables
that becomes a statement once specific values are substituted. If <span class="math inline">\(P\)</span> is a predicate and <span class="math inline">\(x\)</span> is a variable, we write <span class="math display">\[P(x)\]</span> to denote the statement obtained by
assigning a value to <span class="math inline">\(x\)</span>.</p>
<p>A <strong>statement function</strong> is a predicate together with
its variables before any substitution is made. It is neither true nor
false until the variables receive values.</p>
<h2 id="examples-8">Examples</h2>
<p><strong>Example 1.</strong> <span class="math inline">\(E(x)\)</span>: “<span class="math inline">\(x\)</span> is even<span class="math inline">\(.\)</span>’’ <span class="math inline">\(E(4)\)</span> is true; <span class="math inline">\(E(5)\)</span> is false.</p>
<p><strong>Example 2.</strong> <span class="math inline">\(G(x,y)\)</span>: “<span class="math inline">\(x
&gt; y\)</span>.’’ Assigning <span class="math inline">\(x=7,
y=3\)</span> yields a true statement; switching them gives a false
one.</p>
<p><strong>Example 3.</strong> <span class="math inline">\(P(x)\)</span>: “<span class="math inline">\(x^2 -
4 = 0\)</span>.’’ <span class="math inline">\(P(2)\)</span> and <span class="math inline">\(P(-2)\)</span> are true; all other substitutions
give false.</p>
<h2 id="applications-4">Applications</h2>
<p>Predicates form the basis of mathematical definitions, set theory,
database queries, algorithm correctness proofs, and first-order
logic.</p>
<h2 class="unnumbered" id="practice-problems-11">Practice Problems</h2>
<p><strong>Problem 1.</strong> Determine whether <span class="math inline">\(P(x): x^2 = 9\)</span> is true for <span class="math inline">\(x = -3\)</span>.<br />
<strong>Solution.</strong> Substituting <span class="math inline">\(x=-3\)</span> gives <span class="math inline">\((-3)^2 = 9\)</span>, true.</p>
<p><strong>Problem 2.</strong> Let <span class="math inline">\(R(x,y): x
+ y = 10\)</span>. Evaluate <span class="math inline">\(R(3,7)\)</span>.<br />
<strong>Solution.</strong> <span class="math inline">\(3+7=10\)</span>,
so the statement is true.</p>
<p><strong>Problem 3.</strong> For <span class="math inline">\(E(x):
x\)</span> is even, evaluate <span class="math inline">\(E(11)\)</span>.<br />
<strong>Solution.</strong> <span class="math inline">\(11\)</span> is
not even, so the predicate is false.</p>
<p><strong>Problem 4.</strong> Let <span class="math inline">\(S(x):
x\)</span> is a prime. Evaluate <span class="math inline">\(S(1)\)</span>.<br />
<strong>Solution.</strong> <span class="math inline">\(1\)</span> is not
prime; the statement is false.</p>
<p><strong>Problem 5.</strong> For <span class="math inline">\(G(x,y): x
&gt; y\)</span>, evaluate <span class="math inline">\(G(0,0)\)</span>.<br />
<strong>Solution.</strong> <span class="math inline">\(0&gt;0\)</span>
is false.</p>
<h1 id="variables-and-quantifiers">Variables and Quantifiers</h1>
<h2 id="intuition-12">Intuition</h2>
<p>In predicate logic, variables represent elements of some universe.
Quantifiers turn predicate expressions into full logical statements.
There are two fundamental quantifiers: “for all’’ and “there exists.’’
They allow universal and existential properties of sets and structures
to be expressed with precision.</p>
<h2 id="formal-definitions-1">Formal Definitions</h2>
<p>Let <span class="math inline">\(U\)</span> be a universe of
discourse.</p>
<ul>
<li><p><strong>Universal quantifier</strong>: <span class="math inline">\(\forall x\, P(x)\)</span> means “<span class="math inline">\(P(x)\)</span> is true for every <span class="math inline">\(x \in U\)</span>.’’</p></li>
<li><p><strong>Existential quantifier</strong>: <span class="math inline">\(\exists x\, P(x)\)</span> means “There exists an
<span class="math inline">\(x \in U\)</span> for which <span class="math inline">\(P(x)\)</span> is true.’’</p></li>
</ul>
<p>A variable is <strong>quantified</strong> if it is bound by a
quantifier; otherwise it is free.</p>
<h2 id="examples-9">Examples</h2>
<p><strong>Example 1.</strong> <span class="math inline">\(\forall x \in
\mathbb{Z},\ x^2 \ge 0.\)</span> This statement is true because squares
of integers are always non-negative.</p>
<p><strong>Example 2.</strong> <span class="math inline">\(\exists x \in
\mathbb{R} \text{ such that } x^2 = 2.\)</span> This is true (e.g.,
<span class="math inline">\(x=\sqrt{2}\)</span>).</p>
<p><strong>Example 3.</strong> For <span class="math inline">\(P(x):
x&gt;5\)</span>, the expression <span class="math inline">\(\forall x\,
P(x)\)</span> is false in the universe of integers.</p>
<h2 id="applications-5">Applications</h2>
<p>Quantifiers are used in mathematical proofs, formal verification,
definition of sets, logical specifications for programs, and constraints
in algorithm design.</p>
<h2 class="unnumbered" id="practice-problems-12">Practice Problems</h2>
<p><strong>Problem 1.</strong> Decide the truth of <span class="math inline">\(\forall x \in \mathbb{N},\ x+1 &gt;
x\)</span>.<br />
<strong>Solution.</strong> Always true for natural numbers.</p>
<p><strong>Problem 2.</strong> Evaluate <span class="math inline">\(\exists x \in \mathbb{Z}\)</span> such that <span class="math inline">\(x^2 = 5\)</span>.<br />
<strong>Solution.</strong> No integer satisfies <span class="math inline">\(x^2 = 5\)</span>, so false.</p>
<p><strong>Problem 3.</strong> Is <span class="math inline">\(\forall x
\in \mathbb{R},\ x^2 \ge x\)</span> true?<br />
<strong>Solution.</strong> False; counterexample <span class="math inline">\(x=\frac12\)</span>.</p>
<p><strong>Problem 4.</strong> Determine whether <span class="math inline">\(\exists x \in \mathbb{N}\)</span> such that <span class="math inline">\(x\)</span> is even and prime.<br />
<strong>Solution.</strong> <span class="math inline">\(2\)</span> is
even and prime, so true.</p>
<p><strong>Problem 5.</strong> Evaluate <span class="math inline">\(\forall x \in \mathbb{R},\ \exists y \in
\mathbb{R}\)</span> such that <span class="math inline">\(x+y=0\)</span>.<br />
<strong>Solution.</strong> For each <span class="math inline">\(x\)</span>, choose <span class="math inline">\(y=-x\)</span>. True.</p>
<h1 id="predicate-formulas">Predicate Formulas</h1>
<h2 id="intuition-13">Intuition</h2>
<p>Predicate formulas extend propositional formulas by allowing
variables, quantifiers, and predicates. They describe logical assertions
with structure internal to objects, enabling the expression of relations
and general mathematical properties.</p>
<h2 id="formal-definition-7">Formal Definition</h2>
<p>Predicate formulas are built recursively from:</p>
<ul>
<li><p>predicate symbols applied to variables (<span class="math inline">\(P(x), R(x,y)\)</span>),</p></li>
<li><p>logical connectives (<span class="math inline">\(\land, \lor,
\neg, \to, \leftrightarrow\)</span>),</p></li>
<li><p>quantifiers (<span class="math inline">\(\forall,
\exists\)</span>).</p></li>
</ul>
<p>Every variable in a formula is classified as free or bound.</p>
<h2 id="examples-10">Examples</h2>
<p><strong>Example 1.</strong> <span class="math inline">\(\forall x\,
(P(x) \to Q(x)).\)</span> A universally quantified conditional
statement.</p>
<p><strong>Example 2.</strong> <span class="math inline">\(\exists y\,
\forall x\, (x + y = 0).\)</span></p>
<p><strong>Example 3.</strong> <span class="math inline">\((\exists x\,
P(x)) \land (\forall y\, Q(y)).\)</span></p>
<h2 class="unnumbered" id="practice-problems-13">Practice Problems</h2>
<p><strong>Problem 1.</strong> Classify the variables in <span class="math inline">\(\forall x\, (P(x,y))\)</span>.<br />
<strong>Solution.</strong> <span class="math inline">\(x\)</span> is
bound; <span class="math inline">\(y\)</span> is free.</p>
<p><strong>Problem 2.</strong> Determine if <span class="math inline">\(\exists x (P(x) \lor Q(z))\)</span> is a valid
formula.<br />
<strong>Solution.</strong> Yes; <span class="math inline">\(z\)</span>
remains free.</p>
<p><strong>Problem 3.</strong> Identify the main connective in <span class="math inline">\((\forall x\, P(x)) \lor (\exists y\,
Q(y))\)</span>.<br />
<strong>Solution.</strong> The main connective is <span class="math inline">\(\lor\)</span>.</p>
<p><strong>Problem 4.</strong> Express “Every real number has an
additive inverse’’ as a predicate formula.<br />
<strong>Solution.</strong> <span class="math inline">\(\forall x \in
\mathbb{R}\, \exists y \in \mathbb{R},\ x+y=0\)</span>.</p>
<p><strong>Problem 5.</strong> Determine whether <span class="math inline">\(\forall x\, (P(x) \land \exists x\, Q(x))\)</span>
is well formed.<br />
<strong>Solution.</strong> Yes; different quantifiers may reuse variable
names.</p>
<h1 id="free-and-bound-variables">Free and Bound Variables</h1>
<h2 id="intuition-14">Intuition</h2>
<p>A variable that appears without a quantifier is <em>free</em>. A
variable that is governed by a quantifier is <em>bound</em>. Free
variables behave like placeholders; bound variables no longer refer to
external values and act like dummy parameters.</p>
<h2 id="definitions">Definitions</h2>
<p>In a formula:</p>
<ul>
<li><p>A variable is <strong>bound</strong> if it lies within the scope
of a quantifier.</p></li>
<li><p>All other occurrences are <strong>free</strong>.</p></li>
</ul>
<p>A formula with no free variables is a <strong>closed
formula</strong>.</p>
<h2 id="examples-11">Examples</h2>
<p><strong>Example 1.</strong> <span class="math inline">\(\forall x\,
P(x,y)\)</span> <span class="math inline">\(x\)</span> is bound; <span class="math inline">\(y\)</span> is free.</p>
<p><strong>Example 2.</strong> <span class="math inline">\(\exists x\,
(P(x) \land Q(z))\)</span> <span class="math inline">\(x\)</span> is
bound; <span class="math inline">\(z\)</span> is free.</p>
<p><strong>Example 3.</strong> <span class="math inline">\(\forall x\,
\exists y\, R(x,y)\)</span> Both <span class="math inline">\(x\)</span>
and <span class="math inline">\(y\)</span> are bound.</p>
<h2 class="unnumbered" id="practice-problems-14">Practice Problems</h2>
<p><strong>Problem 1.</strong> Identify free variables in <span class="math inline">\(P(x) \land \forall y\, Q(y)\)</span>.<br />
<strong>Solution.</strong> <span class="math inline">\(x\)</span> is
free; <span class="math inline">\(y\)</span> is bound.</p>
<p><strong>Problem 2.</strong> Determine whether <span class="math inline">\(\forall x\, (P(x) \to Q(z))\)</span> is
closed.<br />
<strong>Solution.</strong> No; <span class="math inline">\(z\)</span> is
free.</p>
<p><strong>Problem 3.</strong> In <span class="math inline">\(\exists
x\, \exists y\, (R(x,y,z))\)</span>, find free variables.<br />
<strong>Solution.</strong> <span class="math inline">\(z\)</span> is
free.</p>
<p><strong>Problem 4.</strong> Decide if <span class="math inline">\(P(x) \to \exists x\, Q(x)\)</span> binds the first
<span class="math inline">\(x\)</span>.<br />
<strong>Solution.</strong> No; the first <span class="math inline">\(x\)</span> is free; the second is bound.</p>
<p><strong>Problem 5.</strong> Is <span class="math inline">\(\forall
x\, P(x)\)</span> closed?<br />
<strong>Solution.</strong> Yes; no free variables.</p>
<h1 id="universe-of-discourse">Universe of Discourse</h1>
<h2 id="intuition-15">Intuition</h2>
<p>A predicate’s meaning depends on the set over which its variables
range. This set is called the <em>universe of discourse</em>. Different
universes can change the truth of statements.</p>
<h2 id="definition">Definition</h2>
<p>The <strong>universe of discourse</strong> is the domain of values
that variables implicitly range over in a logical formula.</p>
<h2 id="examples-12">Examples</h2>
<p><strong>Example 1.</strong> For <span class="math inline">\(P(x)\)</span>: “<span class="math inline">\(x\)</span> is prime”, the truth of <span class="math inline">\(P(2)\)</span> depends on whether the universe is
integers or even integers.</p>
<p><strong>Example 2.</strong> <span class="math inline">\(\forall x\,
(x &gt; 0)\)</span> is false in <span class="math inline">\(\mathbb{Z}\)</span> but true in <span class="math inline">\(\mathbb{R}^+\)</span>.</p>
<h2 class="unnumbered" id="practice-problems-15">Practice Problems</h2>
<p><strong>Problem 1.</strong> Evaluate <span class="math inline">\(\forall x\, (x^2 &gt; 0)\)</span> in <span class="math inline">\(\mathbb{Z}\)</span>.<br />
<strong>Solution.</strong> False; <span class="math inline">\(x=0\)</span> violates it.</p>
<p><strong>Problem 2.</strong> Evaluate the same in <span class="math inline">\(\mathbb{R}\setminus\{0\}\)</span>.<br />
<strong>Solution.</strong> True; all nonzero reals satisfy it.</p>
<p><strong>Problem 3.</strong> For universe <span class="math inline">\(U=\{\text{even integers}\}\)</span>, determine if
<span class="math inline">\(\exists x\, (x=3)\)</span> is true.<br />
<strong>Solution.</strong> False; <span class="math inline">\(3 \notin
U\)</span>.</p>
<p><strong>Problem 4.</strong> For <span class="math inline">\(U=\mathbb{N}\)</span>, evaluate <span class="math inline">\(\forall x\, (x+1 &gt; x)\)</span>.<br />
<strong>Solution.</strong> True.</p>
<p><strong>Problem 5.</strong> For <span class="math inline">\(U=\{1,2,3\}\)</span>, evaluate <span class="math inline">\(\exists x\, (x&gt;3)\)</span>.<br />
<strong>Solution.</strong> False.</p>
<h1 id="inference-theory-of-the-predicate-calculus">Inference Theory of
the Predicate Calculus</h1>
<h2 id="introduction-2">Introduction</h2>
<p>Predicate calculus extends propositional logic by allowing statements
to include variables and quantifiers. While propositional logic deals
with truth values of whole statements, predicate logic allows us to talk
about *properties of objects* and *relationships among objects*. This
greatly increases expressive power and enables reasoning in mathematics,
databases, artificial intelligence, and automated theorem proving.</p>
<p>Inference theory for the predicate calculus studies how valid
conclusions can be derived from given premises using rules that respect
quantifiers, variables, and logical form. The central idea is that
correct reasoning proceeds by applying sound rules of derivation that
preserve truth regardless of the domain of interpretation.</p>
<h1 id="predicate-formulas-1">Predicate Formulas</h1>
<h2 id="intuition-16">Intuition</h2>
<p>A predicate represents a property or relation that objects may
satisfy. When variables are substituted with actual objects from the
universe of discourse, the predicate becomes a statement that is either
true or false.</p>
<p>A predicate formula is built using predicates, variables, logical
connectives, and quantifiers. These formulas express general
mathematical truths such as:</p>
<p><span class="math display">\[\forall x (P(x) \to Q(x)), \qquad
\exists y\, R(x,y)\]</span></p>
<h2 id="formal-definition-8">Formal Definition</h2>
<p>A <em>predicate formula</em> is defined recursively:</p>
<ul>
<li><p>If <span class="math inline">\(P\)</span> is an <span class="math inline">\(n\)</span>-place predicate symbol and <span class="math inline">\(x_1,\dots,x_n\)</span> are variables, then <span class="math inline">\(P(x_1,\dots,x_n)\)</span> is a formula.</p></li>
<li><p>If <span class="math inline">\(A\)</span> is a formula, then
<span class="math inline">\(\neg A\)</span> is a formula.</p></li>
<li><p>If <span class="math inline">\(A\)</span> and <span class="math inline">\(B\)</span> are formulas, then <span class="math inline">\(A \land B\)</span>, <span class="math inline">\(A
\lor B\)</span>, <span class="math inline">\(A \to B\)</span>, and <span class="math inline">\(A \leftrightarrow B\)</span> are
formulas.</p></li>
<li><p>If <span class="math inline">\(A\)</span> is a formula and <span class="math inline">\(x\)</span> is a variable, then <span class="math inline">\(\forall x A\)</span> and <span class="math inline">\(\exists x A\)</span> are formulas.</p></li>
</ul>
<h2 id="examples-13">Examples</h2>
<p><strong>Example 1.</strong> <span class="math inline">\(P(x): x &gt;
5\)</span> is a predicate; <span class="math inline">\(P(7)\)</span>
becomes a statement which is true.</p>
<p><strong>Example 2.</strong> <span class="math inline">\(R(x,y): x + y
= 10\)</span> represents a binary relation on integers.</p>
<p><strong>Example 3.</strong> <span class="math inline">\(\forall x
\exists y (x &lt; y)\)</span> is a predicate formula that expresses that
every number has a larger number.</p>
<h2 id="practice-problems-16">Practice Problems</h2>
<p><strong>Problem 1.</strong> Identify whether <span class="math inline">\(P(x) \lor \forall x Q(x)\)</span> is a
formula.<br />
<strong>Solution.</strong> Yes. Both <span class="math inline">\(P(x)\)</span> and <span class="math inline">\(\forall x Q(x)\)</span> are formulas, and their
disjunction is valid.</p>
<p><strong>Problem 2.</strong> Is <span class="math inline">\(P(x,)\)</span> a valid predicate formula?<br />
<strong>Solution.</strong> No. Predicate arity requires proper argument
structure.</p>
<p><strong>Problem 3.</strong> Is <span class="math inline">\(\exists x
(P(x) \to Q)\)</span> a formula?<br />
<strong>Solution.</strong> No. <span class="math inline">\(Q\)</span>
must be a predicate, not a propositional constant.</p>
<p><strong>Problem 4.</strong> Determine if <span class="math inline">\((\forall x P(x)) \land Q(y)\)</span> is a
formula.<br />
<strong>Solution.</strong> Yes; both components are formulas joined by
conjunction.</p>
<p><strong>Problem 5.</strong> Is <span class="math inline">\(\forall
(P(x))\)</span> a formula?<br />
<strong>Solution.</strong> No. A quantifier must bind a variable.</p>
<h1 id="free-and-bound-variables-1">Free and Bound Variables</h1>
<h2 id="intuition-17">Intuition</h2>
<p>A variable is <em>bound</em> if it is attached to a quantifier within
the formula. Otherwise, it is <em>free</em>. The distinction matters
because formulas with free variables do not have a truth value until the
free variables are given specific values or are universally closed.</p>
<h2 id="formal-definition-9">Formal Definition</h2>
<ul>
<li><p>In <span class="math inline">\(\forall x A\)</span>, all
occurrences of <span class="math inline">\(x\)</span> in <span class="math inline">\(A\)</span> are bound.</p></li>
<li><p>In <span class="math inline">\(\exists x A\)</span>, occurrences
of <span class="math inline">\(x\)</span> in <span class="math inline">\(A\)</span> are bound.</p></li>
<li><p>Any variable not bound by a quantifier is free.</p></li>
</ul>
<p>A <strong>sentence</strong> or <strong>closed formula</strong>
contains no free variables.</p>
<h2 id="examples-14">Examples</h2>
<p><strong>Example 1.</strong> In <span class="math inline">\(\forall x
(P(x,y))\)</span>, <span class="math inline">\(x\)</span> is bound,
<span class="math inline">\(y\)</span> is free.</p>
<p><strong>Example 2.</strong> In <span class="math inline">\(\exists y
(R(x,y) \to S(y))\)</span>, <span class="math inline">\(y\)</span> is
bound, <span class="math inline">\(x\)</span> is free.</p>
<h2 id="practice-problems-17">Practice Problems</h2>
<p><strong>Problem 1.</strong> Identify the free variables in <span class="math inline">\(\forall x (P(x,y) \lor Q(z))\)</span>.<br />
<strong>Solution.</strong> <span class="math inline">\(y\)</span> and
<span class="math inline">\(z\)</span> are free; <span class="math inline">\(x\)</span> is bound.</p>
<p><strong>Problem 2.</strong> Does <span class="math inline">\(\exists
y (P(y) \land Q(x))\)</span> contain free variables?<br />
<strong>Solution.</strong> Yes. <span class="math inline">\(x\)</span>
is free.</p>
<p><strong>Problem 3.</strong> Is <span class="math inline">\(\forall x
P(x)\)</span> a sentence?<br />
<strong>Solution.</strong> Yes; no free variables.</p>
<p><strong>Problem 4.</strong> Free variables in <span class="math inline">\(P(x) \lor \exists z R(z)\)</span>?<br />
<strong>Solution.</strong> <span class="math inline">\(x\)</span> is
free; <span class="math inline">\(z\)</span> is bound.</p>
<p><strong>Problem 5.</strong> Are there bound variables in <span class="math inline">\(P(x,y)\)</span>?<br />
<strong>Solution.</strong> No. Both variables are free.</p>
<h1 id="universe-of-discourse-1">Universe of Discourse</h1>
<h2 id="intuition-18">Intuition</h2>
<p>The <em>universe of discourse</em> is the set of objects over which
variables range. Interpretation of predicates depends entirely on this
universe.</p>
<p>For example, the formula <span class="math inline">\(\forall x (x+1
&gt; x)\)</span> is true in integers but false in some modular
arithmetic systems.</p>
<h2 id="formal-definition-10">Formal Definition</h2>
<p>Given a universe <span class="math inline">\(U\)</span>, each
predicate symbol <span class="math inline">\(P\)</span> is assigned a
relation on <span class="math inline">\(U\)</span>. A formula is
evaluated by interpreting:</p>
<ul>
<li><p>Variables as elements of <span class="math inline">\(U\)</span>,</p></li>
<li><p>Predicates as relations on <span class="math inline">\(U\)</span>,</p></li>
<li><p>Connectives as logical operations,</p></li>
<li><p>Quantifiers as ranging over <span class="math inline">\(U\)</span>.</p></li>
</ul>
<h2 id="examples-15">Examples</h2>
<p><strong>Example 1.</strong> If <span class="math inline">\(U =
\mathbb{Z}\)</span> and <span class="math inline">\(P(x): x &gt;
0\)</span>, then <span class="math inline">\(P(-3)\)</span> is
false.</p>
<p><strong>Example 2.</strong> If <span class="math inline">\(U =
\{1,2,3\}\)</span>, the formula <span class="math inline">\(\exists x (x
&gt; 3)\)</span> is false.</p>
<h2 id="practice-problems-18">Practice Problems</h2>
<p><strong>Problem 1.</strong> Let <span class="math inline">\(U =
\mathbb{R}\)</span>. Is <span class="math inline">\(\forall x (x^2 \ge
0)\)</span> true?<br />
<strong>Solution.</strong> Yes. Squares are non-negative in reals.</p>
<p><strong>Problem 2.</strong> Let <span class="math inline">\(U =
\{1,2,3\}\)</span>. Evaluate <span class="math inline">\(\exists x (x^2
= 4)\)</span>.<br />
<strong>Solution.</strong> True for <span class="math inline">\(x=2\)</span>.</p>
<p><strong>Problem 3.</strong> Let <span class="math inline">\(U =
\mathbb{N}\)</span>. Is <span class="math inline">\(\exists x (x &lt;
0)\)</span> true?<br />
<strong>Solution.</strong> False. Naturals are non-negative.</p>
<p><strong>Problem 4.</strong> Let <span class="math inline">\(U =
\{0,1\}\)</span>. Is <span class="math inline">\(\forall x \exists y
(x=y)\)</span> true?<br />
<strong>Solution.</strong> Yes. Each element equals itself.</p>
<p><strong>Problem 5.</strong> Universe <span class="math inline">\(U=\mathbb{Z}\)</span>. Is <span class="math inline">\(\exists x (2x = 3)\)</span> true?<br />
<strong>Solution.</strong> False. No integer satisfies <span class="math inline">\(2x=3\)</span>.</p>
<h1 id="inference-theory-of-predicate-logic">Inference Theory of
Predicate Logic</h1>
<h2 id="intuition-19">Intuition</h2>
<p>Just as propositional logic has rules such as Modus Ponens and Modus
Tollens, predicate logic includes analogous rules but must account for
quantifiers. Inference rules must preserve validity regardless of domain
or interpretation.</p>
<p>These rules allow us to derive conclusions like:</p>
<p><span class="math display">\[\forall x (P(x) \to Q(x)),\quad P(a)
\quad \vdash \quad Q(a)\]</span></p>
<p>and</p>
<p><span class="math display">\[\forall x P(x) \quad \vdash \quad
P(t)\]</span></p>
<h2 id="core-rules-of-inference">Core Rules of Inference</h2>
<ul>
<li><p><strong>Universal Instantiation (UI)</strong> From <span class="math inline">\(\forall x\, P(x)\)</span> infer <span class="math inline">\(P(t)\)</span>.</p></li>
<li><p><strong>Universal Generalization (UG)</strong> From <span class="math inline">\(P(x)\)</span> (with <span class="math inline">\(x\)</span> not free in premises) infer <span class="math inline">\(\forall x P(x)\)</span>.</p></li>
<li><p><strong>Existential Instantiation (EI)</strong> From <span class="math inline">\(\exists x P(x)\)</span> introduce a new constant
<span class="math inline">\(c\)</span> and infer <span class="math inline">\(P(c)\)</span>.</p></li>
<li><p><strong>Existential Generalization (EG)</strong> From <span class="math inline">\(P(t)\)</span> infer <span class="math inline">\(\exists x P(x)\)</span>.</p></li>
<li><p><strong>Quantifier Negation</strong> <span class="math display">\[\neg \forall x P(x) \equiv \exists x \neg P(x),
\qquad
        \neg \exists x P(x) \equiv \forall x \neg P(x)\]</span></p></li>
</ul>
<h2 id="examples-16">Examples</h2>
<p><strong>Example 1.</strong> Premises: <span class="math inline">\(\forall x (P(x) \to Q(x))\)</span>, <span class="math inline">\(P(a)\)</span>. Inference: <span class="math inline">\(Q(a)\)</span> by UI and Modus Ponens.</p>
<p><strong>Example 2.</strong> Premise: <span class="math inline">\(\exists x R(x)\)</span>. Inference: Introduce new
constant <span class="math inline">\(c\)</span>; conclude <span class="math inline">\(R(c)\)</span> by EI.</p>
<h2 id="diagram-placeholder">Diagram Placeholder</h2>
<h2 id="practice-problems-19">Practice Problems</h2>
<p><strong>Problem 1.</strong> From <span class="math inline">\(\forall
x (P(x) \to Q(x))\)</span> and <span class="math inline">\(P(b)\)</span>
derive <span class="math inline">\(Q(b)\)</span>.<br />
<strong>Solution.</strong> Apply universal instantiation to get <span class="math inline">\(P(b) \to Q(b)\)</span>, then Modus Ponens.</p>
<p><strong>Problem 2.</strong> From <span class="math inline">\(\exists
x P(x)\)</span> infer a formula.<br />
<strong>Solution.</strong> Introduce new constant <span class="math inline">\(c\)</span> and conclude <span class="math inline">\(P(c)\)</span>.</p>
<p><strong>Problem 3.</strong> Show that <span class="math inline">\(\neg \forall x P(x)\)</span> implies <span class="math inline">\(\exists x \neg P(x)\)</span>.<br />
<strong>Solution.</strong> Apply quantifier negation equivalence.</p>
<p><strong>Problem 4.</strong> From <span class="math inline">\(P(t)\)</span> derive <span class="math inline">\(\exists x P(x)\)</span>.<br />
<strong>Solution.</strong> Use existential generalization.</p>
<p><strong>Problem 5.</strong> From <span class="math inline">\(P(x)\)</span> (with <span class="math inline">\(x\)</span> arbitrary) prove <span class="math inline">\(\forall x P(x)\)</span>.<br />
<strong>Solution.</strong> Use universal generalization, ensuring <span class="math inline">\(x\)</span> is not free in any premise.</p>
</div>