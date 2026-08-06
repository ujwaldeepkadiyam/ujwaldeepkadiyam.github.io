# Wiring this into your site

I couldn't verify from here whether your site already has a "Learning" collection/nav item, so these files are set up as a self-contained new collection called `_learning`. Four files, drop-in ready:

```
_learning/00-git-fundamentals-index.md      → /learning/git/
_learning/01-introduction-to-git-commits.md → /learning/git/introduction-to-git-commits/
_learning/02-git-branches.md                → /learning/git/git-branches/
assets/img/git-course/commit-chain.svg
assets/img/git-course/branch-create.svg
assets/img/git-course/diverge-merge.svg
assets/img/git-course/head-pointer.svg
```

Each lesson uses `layout: page` and its own `permalink`, so Jekyll will build working pages even before it's registered as a formal collection — but for it to show up cleanly (e.g. get listed automatically, or use a nicer layout than the generic `page`), a few things are worth checking against your actual theme (al-folio) before you commit:

1. **Does `_config.yml` need a `learning` collection entry?** Since every file already sets its own `permalink`, Jekyll doesn't strictly require this to render the pages — but registering it as a collection (`output: true`) is what would let you list/loop over lessons automatically later.
2. **Layout name** — I used `layout: page`, al-folio's plainest layout. If you have something closer to a blog-post layout you'd rather use (e.g. `distill` for a nicer typographic look, or whatever `teaching` already uses), swap it in the front matter of all three lesson files.
3. **Nav bar** — add a "Learning" (or "Courses") entry pointing at `/learning/git/` if you want it in the top nav, the same way `teaching` or `publications` are listed.

### Prompt you can hand to Claude Code

```
I've added a new _learning/ collection to the site (4 markdown files + 4 SVG
diagrams under assets/img/git-course/). Please:

1. Register `learning` as a proper Jekyll collection in _config.yml
   (output: true), matching the pattern used for existing collections
   like _teaching or _news.
2. Check whether `layout: page` (currently used in all _learning files)
   renders correctly with this theme, or whether a different existing
   layout (e.g. whatever _teaching uses) would look more consistent —
   swap it in if so, without changing any of the written content.
3. Add a "Learning" nav entry pointing to /learning/git/, following the
   same pattern as the existing nav items.
4. Run bundle exec jekyll build and confirm no Liquid errors, then show
   me the diff before I commit.
```
