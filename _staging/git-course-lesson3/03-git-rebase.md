---
layout: page
title: "Git Rebase"
description: "A second way to combine branches: how rebase rewrites history into a straight line, how it compares to merge, and what happens to HEAD."
course: "Git Fundamentals"
lesson: 3
permalink: /learning/git/git-rebase/
---

*Continues from [Git Branches](/learning/git/git-branches/), where we merged two diverged branches together. Rebase is a second way to combine work between branches — one that produces a different kind of history.*

## What is Git Rebase?

> **Rebase: a second way of combining work between branches.**

It takes a set of commits, copies them, and drops them down somewhere else.

> **Advantage:** it can produce a nice, linear sequence of commits.

## Rebase moves work to appear to start from another branch's latest commit

> **Rebase moves the work from one branch, so that it appears to have started from the latest commit of another branch.**

Say you branched `bugFix` off `C1`. While you were working on it, `main` kept moving and picked up `C2` and `C3`:

```
          C2 → C3     main
         ╱
C0 → C1
         ╲
          B1 → B2     bugFix
```

`bugFix` is now based on an older commit (`C1`) than `main`'s tip (`C3`).

## Running the rebase

```bash
git switch bugfix
git rebase main
```

Now the following happens:

- **We are on the `bugFix` branch.**
- **Git identifies the commits unique to the current branch, `bugFix`.** They are `B1` and `B2`.
- **Git takes `B1` and `B2` and creates new commits containing those changes** — `B1'` and `B2'` (new commits).

```
B1 → B1'
B2 → B2'
```

`B1 ≠ B1'` and `B2 ≠ B2'` — these are **not** the same commits. A commit's identity is bound up with its parent, so once the parent changes, the commit itself is a different commit with a new hash, even though it carries the same file changes forward.

![Diverged branches before rebase, and the resulting straight line after rebase](/assets/img/git-course/rebase-before-after.svg)

## The result: new commits appended to main

Now these new commits are appended to the `main` branch line, so it looks like:

```
C0 → C1 → C2 → C3 → B1' → B2'
```

**This is a linear history (no other branches).**

## What does merge do?

```bash
git switch bugfix
git merge main
```

Git creates a merge commit `M`:

```
          C2 → C3
         ╱        ╲
C0 → C1            M     bugFix
         ╲        ╱
          B1 → B2
```

`M` represents the **combined project state** from both `C3` and `B2` — so `M` has changes from both `C3` and `B2`.

Now the next commit, say `N` — for `N`, `M` is the parent.

![Merge commit M with two parent commits, C3 and B2](/assets/img/git-course/merge-diamond.svg)

## Merge vs. rebase

> **When you merge, Git preserves all the branch histories and then creates a merge commit.**

Compared with rebase: it rewrites `bugFix`'s history into a straight line:

```
C0 → C1 → C2 → C3 → B1' → B2'
```

So:

- **Merge preserves the true branching structure.**
- **Rebase produces a clear, linear history.**

## What happens to HEAD

> **In ordinary merge and rebase operations, HEAD remains attached to the same branch.**

**Rebase:**

```
HEAD
 ↓
bugFix
 ↓
B2'
```

**Merge:**

```
HEAD
 ↓
bugFix
 ↓
M
```

![HEAD stays attached to the same branch across both merge and rebase](/assets/img/git-course/head-pointer.svg)

## What happens to the old branch and commits after rebase?

- **The current branch's commits move to the newly created commit.**
- **Other branches remain where they were.**
- **Old commits remain temporarily, reachable through `reflog`.**
- **Old commits are not guaranteed to remain forever** if no branch or tag points to them.
- **So, create a backup branch before rebasing** — this guarantees an easy return path. Back up the existing branch if you want to access it later. Then rebase.

```bash
git branch backup-before-rebase
git rebase main
```

## Recap of everything above

| Concept | What it means |
|---|---|
| Rebase | Copies a branch's unique commits and re-applies them on top of another branch's latest commit |
| `git rebase main` (from `bugFix`) | Git finds commits unique to `bugFix` (`B1`, `B2`), recreates them as new commits (`B1'`, `B2'`) on top of `main`'s tip |
| Result | A single, linear history — `main` and `bugFix`'s work sit on one line, no diverging branches |
| `git merge main` (from `bugFix`) | Creates one merge commit `M`, which has both `C3` and `B2` as parents and combines both states |
| Merge vs. rebase | Merge preserves branching structure; rebase produces a clean linear history instead |
| HEAD | Stays attached to the branch you're on in both operations — the branch pointer is what actually moves |
| After rebasing | The rebased branch points at new commits; other branches don't move; old commits live on temporarily via reflog, but aren't guaranteed forever unless something still references them |
| Safety habit | Create a backup branch before rebasing, so you always have an easy way back |

---

## Beyond the basics: more on merge, rebase, and HEAD

Everything below builds on the same ideas above, filling in a few practical details that come up once you start using merge and rebase day to day.

### Fast-forward merges

A merge doesn't always need a new commit. If your current branch hasn't moved since the other branch was created — a straight ancestor relationship rather than a diverged one — Git performs a **fast-forward merge** instead: it simply slides the branch label forward.

```
C0 → C1 → B1 → B2
       ↑         ↑
     main     bugFix
```

Switch to `main` and run `git merge bugFix`: Git doesn't need a new commit, it just moves `main` forward to `B2`.

![Fast-forward merge simply moves the branch pointer forward, no new commit](/assets/img/git-course/fast-forward.svg)

So a merge has two possible outcomes:

- **Diverged branches** → a real merge commit (like `M` above)
- **Straight ancestry** → a fast-forward, just a pointer move, no new commit

### Direction matters — for both commands

`git merge <branch>` and `git rebase <branch>` both act on whichever branch you're **currently on** — the direction you run them in changes the result.

**Merge**, while on `bugFix`:

```bash
git switch bugFix
git merge main
```

Result: `bugFix` moves to a new merge commit `M`; `main` stays at `C3`.

**Merge**, the other direction, while on `main`:

```bash
git switch main
git merge bugFix
```

Result: `main` moves to a new merge commit `M`; `bugFix` stays at `B2`.

**Rebase**, while on `bugFix`:

```bash
git switch bugFix
git rebase main
```

Result: `bugFix`'s commits are replayed on top of `main`; `bugFix` moves to `B2'`, `main` stays at `C3`.

**Rebase**, the other direction, while on `main`:

```bash
git switch main
git rebase bugFix
```

Result: `main`'s commits are replayed on top of `bugFix`; `main` moves, `bugFix` stays put. This is a very different operation from the first rebase.

| Operation | Current branch | Command | What moves? | Result |
|---|---|---|---|---|
| Merge | `bugFix` | `git merge main` | `bugFix` | Combined history, possibly a merge commit |
| Rebase | `bugFix` | `git rebase main` | `bugFix` | Rewritten, linear history |
| Merge | `main` | `git merge bugFix` | `main` | `bugFix` is brought into `main` |
| Rebase | `main` | `git rebase bugFix` | `main` | `main`'s commits are replayed on top of `bugFix` |

A simple way to hold onto this:

- `git merge Y` → *"Bring Y into where I am."*
- `git rebase Y` → *"Move my work on top of Y."*
- Either way: **the branch under HEAD is the branch that changes.**

### A merge commit's parents have an order

`M`'s two parents aren't interchangeable labels — they're ordered by which branch you were on when you ran the merge. While on `bugFix`, running `git merge main`:

```
Parent 1: B2   (the commit HEAD was on)
Parent 2: C3   (the tip of the branch being merged in)
```

This ordering is why `git log --graph` renders one line as the "main" line of the graph and the other as the incoming branch — it's following parent 1 first.

### Reading the real structure with `git log --graph`

Once a merge commit exists, `git log --oneline` prints commits one row at a time, so the order shown doesn't necessarily reflect the actual parent-child structure. For example, after the merge above, it might print:

```
M
C3
C2
B2
B1
C1
C0
```

— but that does **not** mean `C3` comes before `B2` in the history; both branches developed independently from `C1`. To see the real branching structure, use:

```bash
git log --oneline --graph --all
```

Which shows something closer to:

```
*   M
|\
| * C3
| * C2
* | B2
* | B1
|/
* C1
* C0
```

The rule to hold onto: **after a merge, `M` comes after both tips it combined — but the two tips don't have any ordering relative to each other.**

### Handling conflicts

**Merge conflict:** the merge pauses, you stay on the same branch, resolve the conflicting files, stage them, then commit:

```bash
git add .
git commit
```

Or back out entirely:

```bash
git merge --abort
```

**Rebase conflict:** the rebase pauses mid-replay, partway through re-applying your commits. Resolve the conflicting files, stage them, then continue:

```bash
git add .
git rebase --continue
```

Git carries on replaying the remaining commits. Or bail out completely:

```bash
git rebase --abort
```

During a rebase, Git may briefly put itself into a detached HEAD state internally while recreating commits one at a time — but once the rebase finishes, HEAD is automatically reattached to your original branch.

### The golden rule of rebasing

> **Rebase your private work; avoid rebasing shared public history.**

Rebase changes commit hashes and rewrites history. That's harmless for commits that exist only on your local branch — but if someone else has already pulled the commits you're about to rewrite, rebasing creates a mismatch between your history and theirs, and things get messy fast. This is exactly why the backup-branch habit from earlier is worth keeping: it gives you an easy way back if a rebase doesn't go the way you expected.

### Extended recap

| Concept | What it means |
|---|---|
| Fast-forward merge | A merge with no divergence — the branch pointer just slides forward, no new commit created |
| Merge/rebase direction | Both commands act on your *current* branch; running them from the other branch produces a different result entirely |
| Merge commit parent order | Parent 1 is the commit HEAD was on; parent 2 is the tip being merged in — this is what `--graph` follows |
| `git log --oneline --graph --all` | Shows the real parent-child branching structure, unlike the flattened `--oneline` list |
| Conflicts | Both merge and rebase can pause on conflicts; resolve + `git add .`, then `--continue`/`commit`, or `--abort` to back out entirely |
| Golden rule | Only rebase commits that are still private to you — rewriting shared history breaks things for anyone who already has the old commits |
