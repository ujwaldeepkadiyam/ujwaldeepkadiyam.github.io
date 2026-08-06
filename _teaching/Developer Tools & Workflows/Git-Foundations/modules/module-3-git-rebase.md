---
title: Git Rebase
layout: page
permalink: /teaching/Developer Tools & Workflows/Git-Foundations/modules/module-3-git-rebase/
hide_title: true
parent: Git-Foundations
grand_parent: Developer Tools & Workflows
---

<h1 align="center">Module 3: Git Rebase</h1>

*Continues from [Module 2: Git Branches](/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/modules/module-2-git-branches/), where we merged two diverged branches together. Rebase is a second way to combine work between branches — one that produces a different kind of history.*

## What is Git Rebase?

> **Rebase: a second way of combining work between branches.**

It takes a set of commits, copies them, and drops them down somewhere else.

> **Advantage:** it can produce a nice, linear sequence of commits.

Merge, which you saw in the last module, is honest about parallel work — it keeps both branches' commits exactly where they were and adds a new commit tying the two together. Rebase takes a different approach: instead of recording that two lines of work happened side by side, it rewrites one branch's commits so they read as if they'd been written one after another. The files end up the same either way — same edits, same order — but the story Git tells about how they got there is different. That's the trade a linear history buys you: an easier `git log` to read top-to-bottom, and an easier time with `git bisect` when hunting down which commit introduced a bug.

## Rebase moves work to appear to start from another branch's latest commit

> **Rebase moves the work from one branch, so that it appears to have started from the latest commit of another branch.**

Say you branched `bugFix` off `C1`. While you were working on it, `main` kept moving and picked up `C2` and `C3`:

![Diverged branches: main has moved ahead with C2 and C3 while bugFix branched off at C1](/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/rebase-before-after.svg)

`bugFix` is now based on an older commit (`C1`) than `main`'s tip (`C3`).

This is a common situation on any team: you branch off, and while you're heads-down, everyone else keeps merging into `main`. Rebase fixes the resulting mismatch not by rewinding time, but by making the *history* read as if you'd started your work after `C2` and `C3` already existed — a clean story, with no evidence the two branches ever diverged.

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

**`B1 ≠ B1'` and `B2 ≠ B2'`. There are not the same commits.**

Git identifies "unique to the current branch" by walking back from `bugFix` until it finds the last commit also reachable from `main` — that's `C1`, the common ancestor. Everything after that point (`B1`, `B2`) gets rebased; everything before is shared and left untouched. Git then takes the *diff* each of those commits introduced and replays it on top of `main`'s tip as a brand-new commit — it doesn't literally cut and move the old commit. And because a commit's identity includes a reference to its parent, changing the parent unavoidably changes the hash: `B1'` carries the same file changes as `B1`, but it's a genuinely different commit as far as Git (and anyone else who already has `B1`) is concerned.

## The result: new commits appended to main

Now these new commits are appended to the `main` branch line, so it looks like:

```
C0 → C1 → C2 → C3 → B1' → B2'
```

**This is a linear history (no other branches).**

Compare that to a merge-based history of the same work: a fork at `C1`, two parallel lines, joined back by a merge commit. Both end up with identical final code — but the rebased version reads as one continuous story instead of two that happened to intersect.

## What does merge do?

```bash
git switch bugfix
git merge main
```

Git creates a merge commit `M`:

![Merge commit M combining C3 from main and B2 from bugFix](/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/merge-diamond.svg)

**`M` represents the combined project state from both `C3` and `B2` — so `M` has changes from both `C3` and `B2`.**

Now the next commit, say `N` — for `N`, `M` is the parent.

`M` isn't two snapshots glued together — it's one ordinary snapshot, like any other commit, except it remembers two parents instead of one. To build it, Git compares what changed from the common ancestor (`C1`) to each tip and combines the two sets of changes automatically, unless both branches touched the exact same lines — in which case it asks you to resolve the conflict by hand first.

## Merge vs. rebase

> **When you merge, Git preserves all the branch histories and then creates a merge commit.**

Compared with rebase: it rewrites `bugFix`'s history into a straight line:

```
C0 → C1 → C2 → C3 → B1' → B2'
```

So:

- **Merge preserves the true branching structure.**
- **Rebase produces a clear, linear history.**

Neither is universally correct — they trade off different things. Merge's honesty is useful on a shared branch like `main`, where knowing that a feature arrived as its own unit of work is meaningful context. Rebase's tidiness is useful on your own short-lived feature branch, where nobody downstream cares how many false starts it took — just the clean final result. A common convention: rebase your own branch to stay current and tidy it up, then merge (not rebase) it into `main` so the shared history stays honest.

## What happens to HEAD

> **In ordinary merge and rebase operations, HEAD remains attached to the same branch.**

**Rebase — before and after:**

![HEAD stays attached to bugFix before and after rebase; only bugFix's target commit changes](/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/head-during-rebase.svg)

**Merge:**

![HEAD stays attached to bugFix, which now points at the merge commit M](/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/head-during-merge.svg)

No matter how much the commits get rearranged underneath you, your own sense of "where am I" doesn't get scrambled. Run `git rebase main` while on `bugFix`, and the moment it finishes, `git status` still shows you on `bugFix` — the only thing that moved is what `bugFix` points at. This is why merge and rebase feel so different but are structurally similar: both are, from HEAD's perspective, just "the current branch got a new tip commit." The difference is entirely in *how* that new tip came to exist.

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

The old `B1` and `B2` don't disappear the instant you rebase — Git keeps a running log of everywhere `HEAD` and your branches have pointed, called the **reflog**, and for a while you can recover your old position with `git reflog` and a checkout. But reflog entries expire, and once nothing points at a commit, it becomes eligible for garbage collection. In everyday use that's rarely an issue, but it's exactly why the backup-branch habit is worth keeping — a named pointer to "before" costs nothing and never expires the way a reflog entry does.

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

## The core rule underneath both commands

Before running either `merge` or `rebase`, there's one question worth asking every time:

> **Which branch am I currently on?**

That's the branch that gets updated. `HEAD` is Git's answer to that question, and that branch is always the one that moves. Everything in "Direction matters" below is this one rule applied twice: run `git merge main` while on `bugFix`, and `bugFix` moves; run the same command while on `main`, and `main` moves instead. The command name tells you *what* you're bringing in; your current branch tells you *what actually changes*.

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

![Fast-forward merge simply moves the branch pointer forward, no new commit](/teaching/Developer%20Tools%20%26%20Workflows/Git-Foundations/img/fast-forward.svg)

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
