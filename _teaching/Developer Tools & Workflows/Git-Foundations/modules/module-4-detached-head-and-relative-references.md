---
title: Detached HEAD & Relative References
layout: page
permalink: /teaching/Developer Tools & Workflows/Git-Foundations/modules/module-4-detached-head-and-relative-references/
hide_title: true
parent: Git-Foundations
grand_parent: Developer Tools & Workflows
---

<h1 align="center">Module 4: Detached HEAD & Relative References</h1>

*Continues from [Module 3: Git Rebase](/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/modules/module-3-git-rebase/), where we combined branches two different ways. This module zooms in on a single, more fundamental question: what exactly is HEAD, and how do you move it around without typing out full commit hashes every time?*

## II. Ramping Up — 1: Detach Yo' Head

### Moving Around in Git

There are different ways to move through the commit tree of the project.

Every Git command you've used so far — `checkout`, `switch`, `commit` — has been quietly moving you through this tree. Before relative references and detached HEAD make sense, it helps to be explicit about the one thing that's *always* tracking your position in that tree: HEAD.

### HEAD

- HEAD always points to the most recent commit which is reflected in the working tree.
- It's essentially what commit you are working on top of.
- Normally HEAD points to a branch name.

Think of HEAD as a sticky note that says "you are here." Most of the time that sticky note is stuck to a branch label — `main`, `feature`, whatever you're on — and the branch label is what's really pinned to a specific commit. HEAD just follows the branch. That's why, when you commit normally, both HEAD *and* your current branch appear to move forward together: HEAD didn't move on its own, it's riding along on the branch that did.

### Detaching HEAD

- Attaching HEAD to a commit instead of a branch.
- HEAD can indirectly reach any commit through a branch, or it can point directly to any commit in detached HEAD mode.

This is the one-sentence version of the entire module: **normally HEAD → branch → commit**, but Git also lets you strip out the middle step and go **HEAD → commit** directly. That second mode is called a detached HEAD, and it's not an error state or something to be afraid of — it's just a different, more direct way of telling Git "check out exactly this commit, and don't attach me to any branch while you're at it."

#### Demo

<img src="/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/detached-head-checkout-demo.svg" alt="Diagram showing HEAD attached to main via git checkout with a commit hash, versus HEAD detaching directly onto commit C1 via git checkout C1" style="max-width: 100%;" />

`git checkout <commit hash>` works, but hashes are long and easy to mistype. Once you have the hash memorized (or copy-pasted) `git checkout C1` does the same job in a system with only a couple of named commits — the point being that Git looks at what you passed in, decides "that's a commit, not a branch name," and detaches HEAD onto it directly. `main` doesn't move at all; it's still exactly where it was. Only HEAD's attachment changed.

### Quick recap

| Concept | What it means |
|---|---|
| HEAD | Always points to the most recent commit reflected in the working tree — the commit you're currently building on top of |
| Normal state | HEAD points to a branch name, which in turn points to a commit |
| Detached HEAD | HEAD points directly to a commit, with no branch in between |
| `git checkout <commit>` | Detaches HEAD onto that commit; the branch you were on does not move |
| Reaching a commit | Indirectly, through a branch — or directly, in detached HEAD mode |

---

## Relative Refs

Moving around in Git using commit hashes is a bit tedious. Hashes are longer, and we have to use `git log` to see them.

So we use relative refs — they allow us to identify a commit relative to a known reference, such as:

- HEAD
- main
- another branch name
- tag
- commit hash

Relative refs exist purely for convenience. Nothing about them is more "correct" than typing out a full hash — they just save you a trip to `git log` and a lot of copy-pasting. The two operators Git gives you for this are the caret (`^`) and the tilde (`~`), and both work the same way: start at a reference you already know, then step backward through parent commits.

### Two Common Operators

`^` and `~` allow us to move backward through commit history.

<img src="/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/head-main-linear-history.svg" alt="Diagram of a linear commit history C0 to C1 to C2, with both main and HEAD pointing at the tip commit C2" style="max-width: 100%;" />

Take this three-commit history as the running example for the rest of the module: `main` and `HEAD` both currently sit on `C2`, which has `C1` as its parent, which in turn has `C0` as its parent.

#### Caret Operator (`^`)

- Single caret `^` → Go to the parent of the specified commit.

For example: `main^` means "the parent of the commit currently pointed to by main." Since `main` points to `C2`, and the parent of `C2` is `C1` — `main^` resolves to `C1`.

The caret is doing exactly one thing: taking whatever commit is on its left and returning that commit's parent. It doesn't matter whether the left side is a branch name, `HEAD`, a tag, or even another relative reference — as long as it resolves to a commit, `^` can be chained onto it.

#### Multiple Caret

```text
main   = C2
main^  = C1
main^^ = C0
```

<img src="/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/caret-parent-chain.svg" alt="Diagram of commits C0, C1, C2 labeled with main, main caret, and main double-caret respectively" style="max-width: 100%;" />

Each caret you add is one more hop backward through the parent chain. `main^^` isn't a special new operator — it's just `main^` with another `^` applied to the result, which is why it lands two commits behind `main` instead of one.

### Now — Checking Out `main^`

Starting from `HEAD → main → C2`, running `git checkout main^` makes Git first calculate what `main^` actually is (`C1`), and only then checks that commit out directly.

<img src="/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/head-detached-after-caret.svg" alt="Before and after diagram: before, HEAD and main both point to C2; after checking out main caret, HEAD points to C1 while main stays at C2" style="max-width: 100%;" />

So branch `main` is at commit `C2`. HEAD is at commit `C1`.

That single sentence is worth sitting with, because it's easy to misread this state as "the branch is main and the commit is C1" — but `main` and `C1` are two separate, independent things after this command. `main` never moved; only HEAD did, and it's now detached. If you ran `git branch` right now, you'd still see `main` listed as pointing at `C2` — HEAD's new position at `C1` doesn't change that.

### Recap

| Reference | Resolves to |
|---|---|
| `main` | Commit currently pointed to by `main` (`C2`) |
| `main^` | Parent of `main`'s commit (`C1`) |
| `main^^` | Grandparent of `main`'s commit (`C0`) |
| `git checkout main^` | Detaches HEAD onto `main^`'s resolved commit; `main` itself does not move |

---

## Beyond the Basics

*Everything below extends past what's in the source notes, filling in the parts of HEAD, detaching, and relative references that the handwritten notes didn't get to cover.*

### Walking Through a Full Detach → Reattach → Commit Sequence

The clearest way to see attached vs. detached HEAD in action is to follow one continuous sequence of commands against the same history:

```text
C0 ← C1 ← C2
           ↑
          main
           ↑
          HEAD
```

**1. `git checkout C1`** — `C1` is a commit, not a branch, so Git detaches HEAD:

```text
main → C2
HEAD → C1
```

You're viewing the project exactly as it existed at `C1`. `main` does not move.

**2. `git checkout main`** — HEAD reattaches to the branch:

```text
HEAD → main → C2
```

**3. `git commit`** — a new commit `C3` is created on top of `C2`. Because HEAD is attached to `main`, `main` moves forward with it:

```text
HEAD → main → C3
```

**4. `git checkout C2`** — Git checks out the older commit directly, detaching HEAD again:

```text
HEAD → C2
main → C3
```

### Rule — A New Commit Moves the Branch HEAD Is Attached To

> When HEAD is attached to a branch, a new commit moves that branch forward.

This is why step 3 above moved `main` and step 1 didn't touch it at all — the only thing that determines whether a commit advances a branch is whether HEAD happened to be attached to that branch at the moment you committed.

### Rule — Checking Out an Older Commit Does Not Move the Branch

> Checking out an older commit does not move the branch that was used to locate it.

Even when the command you type includes a branch name — like `git checkout main^` — the branch itself is only being *read* to calculate a commit. It is never *written to*. Only an actual commit (or an explicit command like `git branch -f`) moves a branch pointer.

### Why "HEAD and a Branch Point to the Same Commit" Isn't the Same as "Attached"

It's possible for HEAD and a branch to land on the identical commit while HEAD is still detached — for example, if you check out the exact commit a branch already points to. Visually, both labels sit on the same circle in a diagram. Logically, they're doing different things:

```text
Attached state:
HEAD → main → C2

Detached state:
HEAD ───────→ C2
main ───────→ C2
```

The distinction only becomes visible once you commit again. While attached, a new commit moves `main` forward along with HEAD. While detached at that same commit, a new commit moves HEAD only — `main` stays exactly where it was.

### Committing While Detached

```text
C0 ← C1 ← C2
      ↑     ↑
     HEAD  main
```

Running `git commit` here creates a new commit — call it `C3` — based on `C1`, since that's what was checked out:

```text
HEAD → C3
main → C2
```

The commit genuinely exists in the repository. It simply isn't referenced by any branch yet, which means it's vulnerable to being garbage-collected later if nothing ever points to it.

### Preserving Detached Commits

To keep a commit made in detached HEAD mode safe, attach a branch to it:

```bash
git switch -c experiment
```

```text
HEAD → experiment → C3
main → C2
```

Now `experiment` references `C3` directly, and HEAD is attached again — the detached commit has a permanent home.

### The Tilde Operator `~`

The tilde is the second relative-reference operator, and it also moves backward through parent commits — but it's written with a count instead of repeated characters.

```bash
main~1   # one parent backward → C1
main~2   # two parents backward → C0
```

In a straight, linear history, `^` and `~` land on the same commits:

```text
main^    = main~1
main^^   = main~2
main^^^  = main~3
```

The tilde form is easier to read once you're going back more than two or three commits — `git checkout main~5` versus `git checkout main^^^^^`.

### Using Relative References With HEAD

Everything above works identically if you start from `HEAD` instead of a branch name:

```bash
git checkout HEAD^      # parent of the current commit
git checkout HEAD~2     # two commits behind the current commit
```

Given `HEAD → main → C2`, `HEAD^` and `HEAD~2` resolve to `C1` and `C0` respectively — the exact same commits `main^` and `main~2` would resolve to, since HEAD and `main` are pointing at the same place to start with.

### Rule — Relative References Do Not Move Anything by Themselves

> `^` and `~` calculate commits relative to another reference. They do not move a branch. Checking out the resulting commit normally places HEAD in detached mode.

An expression like `main^` or `HEAD~3` only *identifies* a commit — it doesn't change HEAD, a branch, the working directory, or history on its own. `git show main^` displays the parent of `main` without moving anything. `git log HEAD~3` starts a log listing from three commits back without touching HEAD. Movement only happens when the resolved commit is handed to a command that actually changes state, like `git checkout` or `git switch --detach`.

### Caret vs. Tilde on a Merge Commit

For a purely linear history, `^` and `~` are interchangeable. They diverge once a merge commit — which has *two* parents — enters the picture.

<img src="/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/merge-commit-caret-vs-tilde.svg" alt="Diagram of a merge commit M with first parent B and second parent D, showing M caret 1 resolving to B, M caret 2 resolving to D, and M tilde 2 following the first-parent path back to A" style="max-width: 100%;" />

Given a merge commit `M` with first parent `B` and second parent `D`:

- `M^1` → the first parent (`B`)
- `M^2` → the second parent (`D`)
- `M~2` → follow the first-parent path backward twice (`M` → `B` → `A`)

Caret is the tool for picking a *specific* parent of a merge commit. Tilde only ever follows the first-parent line, however many times you repeat it — it has no way to reach `D` at all. This distinction is invisible in a linear history because there's only ever one parent to follow, which is exactly why it's easy to assume `^` and `~` are interchangeable until a merge commit proves otherwise.

### Reference Summary

| Reference | Meaning |
|---|---|
| `main` | Commit currently pointed to by `main` |
| `main^` | First parent of `main`'s commit |
| `main^^` | Parent of the parent of `main`'s commit |
| `main~1` | One first-parent step behind `main` |
| `main~2` | Two first-parent steps behind `main` |
| `HEAD^` | Parent of the currently checked-out commit |
| `HEAD~3` | Three first-parent steps behind HEAD |
| `M^1` / `M^2` | First / second parent of merge commit `M` |
| `M~2` | Two steps back along `M`'s first-parent path only |

### Command Reference

```bash
git show main^                  # view the parent of main, without moving anything
git show main~3                 # view the commit three steps behind main
git checkout main^              # check out the parent of main (detaches HEAD)
git checkout HEAD~2             # check out a commit two steps behind HEAD
git switch --detach HEAD~2      # modern equivalent of the line above
git switch main                 # return to main, reattaching HEAD
git switch -c experiment        # branch off the current (possibly detached) commit
```

