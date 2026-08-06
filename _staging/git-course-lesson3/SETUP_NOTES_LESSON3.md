# Adding Module 3: Git Rebase

This staging folder contains the third lesson for the existing **Git Foundations**
course (under **Developer Tools & Workflows**), continuing on from Module 1
(Introduction to Git Commits) and Module 2 (Git Branches).

```
03-git-rebase.md
assets/img/git-course/rebase-before-after.svg
assets/img/git-course/merge-diamond.svg
assets/img/git-course/fast-forward.svg
```

Note: `03-git-rebase.md` also references `head-pointer.svg`, which is NOT
in this folder — it's the diagram already added for Module 2 (Git Branches).
Reuse that existing file from wherever Module 2's images ended up rather
than duplicating it; just make sure the image path in Module 3 resolves
to it correctly.

Same deal as last time: reformat `03-git-rebase.md`'s front matter to match
whatever the real Module 1 / Module 2 files ended up using
(`parent`/`grand_parent`/`hide_title`/explicit `permalink`, etc.) rather than
keeping the standalone front matter it currently has. Content and diagram
references should carry over as-is — this file is long by design (it
follows the source PDF notes in order first, then adds extra material
pulled from a longer chat transcript afterward, each half with its own
recap table). Preserve it in full; don't summarize or trim anything while
reformatting.

Also update the **course index page**
(`_teaching/Developer Tools & Workflows/Git-Foundations.md`) to add a third
bullet under "Course Materials":

```
Module 3: Git Rebase — a second way to combine branches: how rebase rewrites
history into a straight line, how it compares to merge, and what happens to
HEAD.
```

— matching the exact style/markup of the existing Module 1 and Module 2
bullets there.
