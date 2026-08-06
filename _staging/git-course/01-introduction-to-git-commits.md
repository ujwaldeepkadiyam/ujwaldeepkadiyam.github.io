---
layout: page
title: "Introduction to Git Commits"
description: "What a commit actually is, why they're lightweight, and how Git builds history from them."
course: "Git Fundamentals"
lesson: 1
permalink: /learning/git/introduction-to-git-commits/
---

## What is a commit?

A **commit** records a snapshot of all the tracked files in your project directory at a single point in time. It's not a copy of the whole project — Git is smart about storage — but conceptually, think of a commit as *"here's exactly what every file looked like right now."*

A commit does three things:

- **Records a snapshot** of all tracked files in the project
- **Records the changes (the delta)** from one version to the next
- **Maintains a history of commits** — a timeline of *when* things changed

> Commits are very lightweight. Creating one doesn't duplicate your whole project.

## Every commit remembers its parent

This is the detail that makes Git's history possible: **every commit stores a reference to the commit that came before it (its parent)**. Because each commit points backward to its parent, Git can reconstruct the entire history of a project just by following that chain.

```
C0 → C1 → C2
```

Here, `C1`'s parent is `C0`, and `C2`'s parent is `C1`. Follow the arrows backward from any commit and you get the full story of the project.

![Commit chain with main pointing at the latest commit](/assets/img/git-course/commit-chain.svg)

## `main` is just a label

This is the part that trips people up early on: **`main` is not a commit — it's a movable label** that points at whatever commit is currently the "latest" on that line of work.

- Commits themselves **never move** once created — they're permanent snapshots.
- **Only the label (`main`) moves**, forward, as new commits are added.

So when you run:

```bash
git commit
```

Git doesn't move any existing commit. It creates a brand-new commit whose parent is the commit `main` currently points to, and then **slides the `main` label forward** to point at that new commit.

Walking through it commit by commit:

```
main
 ↓
C0
```

After one commit:

```
        main
         ↓
C0 → C1
```

After another:

```
              main
               ↓
C0 → C1 → C2
```

## Quick recap

| Concept | What it means |
|---|---|
| Commit | A snapshot of tracked files, plus a link to its parent |
| History | Built by following each commit's parent link backward |
| `main` | A movable pointer/label — not a commit itself |
| `git commit` | Creates a new commit and moves the current branch label forward to it |

Next up: **[Git Branches](/learning/git/git-branches/)** — where `main` stops being the only label in town.
