---
layout: page
title: "Git Branches"
description: "What a branch really is, how to create and switch between them, and how the HEAD pointer tracks where you are."
course: "Git Fundamentals"
lesson: 2
permalink: /learning/git/git-branches/
---

*Continues from [Introduction to Git Commits](/learning/git/introduction-to-git-commits/), where we saw that `main` is just a movable label pointing at the latest commit.*

## A branch is just a pointer

Branches are lightweight in exactly the same way commits are. In fact:

> **A branch is simply a named, movable pointer to the latest commit in one line of development.**

`main` isn't special hardware — it's a branch too. It happens to be the default one.

**Example:** say your history looks like this:

- `C0` — created the platform base
- `C1` — added the login feature
- `C2` — added the login/landing page

```
C0 → C1 → C2
           ↑
          main
```

## Creating another branch

Suppose you now want to build a payment feature. Instead of building it directly on `main`, you create a **new branch**:

```bash
git branch payment
```

Git creates another label. Both pointers currently point at exactly the same commit — nothing about the project changes yet:

![Two branch pointers, main and payment, both pointing at the same commit](/assets/img/git-course/branch-create.svg)

This is why branches are cheap:

- No files are duplicated
- No new commit is created
- Just a new named pointer

## Switching branches

Right now `main` and `payment` both point at `C2`, but your **current branch** — the one you're actually working on — is still `main`. To start working on `payment`, switch to it:

```bash
git checkout payment
# or, the more modern equivalent:
git switch payment
```

`payment` is now your current branch.

## Working on the payment branch

With `payment` checked out, modify your files as usual, then commit:

```bash
git commit
```

```
C0 → C1 → C2 → C3
           ↑     ↑
         main  payment
```

Notice: **`main` did not move — only `payment` moved.** A commit always advances whichever branch is currently checked out, never any other branch.

Keep working, commit again:

```
C0 → C1 → C2 → C3 → C4
           ↑          ↑
         main      payment
```

## Switching back to main

Say a bug is found in production while you're mid-feature on `payment`. You can pause and jump back:

```bash
git checkout main
```

```
C0 → C1 → C2 → C3 → C4
           ↑          ↑
         main      payment
```

When you switch branches, Git restores your working directory to match the files at that branch's commit — here, back to `C2`'s snapshot. Your `payment` work isn't lost; it's just parked on the `payment` branch until you return to it.

## Fixing the bug on main

Work on `main`, fix the bug, and commit:

```
                  → C3 → C4   (payment)
                 ↗
C0 → C1 → C2
                 ↘
                  → C5        (main, after commit)
```

The bug fix is now live in `C5`. You've got two branches that have **diverged** — two independent lines of work built on top of the same `C2`.

```bash
git checkout payment   # switch back and finish the payment work
```

## Merging branches back together

Once the payment feature is ready, bring it into `main`:

```bash
git merge payment
```

![Two branches diverging from a shared commit, then merging back together](/assets/img/git-course/diverge-merge.svg)

After the merge, `main` contains **both** the production bug fix and the payment feature — the two lines of work are combined without either branch's history being lost.

## The HEAD pointer

There's one more piece: **HEAD**. HEAD tells Git *"which branch am I currently working on?"*

Normally, HEAD points to a branch, and that branch points to a commit — an indirect reference:

```
HEAD → payment → C4
```

If you switch to `main`:

```
HEAD → main → C5
```

### How HEAD behaves when you commit

- **On a branch (the normal case):** the *branch* pointer moves to the new commit. HEAD keeps pointing at that same branch — it doesn't need to move, because it's just following the branch.
- **In detached HEAD state:** HEAD points *directly* at a commit instead of at a branch. When you commit here, HEAD itself moves to the new commit, since there's no branch label following along.

![HEAD pointing to a branch versus HEAD detached, pointing directly at a commit](/assets/img/git-course/head-pointer.svg)

### When does HEAD move?

This is the rule worth remembering:

> **HEAD only moves when a `checkout` or `switch` happens to a branch.** Creating a branch does *not* move HEAD — only checking it out does.

```bash
git branch payment      # payment is created at the current commit — HEAD stays on main
git switch payment       # NOW HEAD moves to point at payment
```

Both of these create a branch **and** switch to it in one step:

```bash
git switch -c payment
git checkout -b payment   # older, equivalent command
```

## Quick recap

| Concept | What it means |
|---|---|
| Branch | A named, movable pointer to the latest commit on a line of development |
| `git branch <name>` | Creates a new pointer at the current commit — does **not** switch to it |
| `git checkout <name>` / `git switch <name>` | Moves HEAD to point at a different branch |
| `git commit` | Advances whichever branch is currently checked out |
| `git merge <name>` | Combines another branch's history into your current branch |
| HEAD | Points to your current branch (normal) or directly to a commit (detached) |
| Detached HEAD | HEAD moves itself on commit, instead of a branch moving |

**Branches are cheap** — no files are duplicated and no extra commits are created just by branching. That's what makes it practical to create a new branch for almost anything.
