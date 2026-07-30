# Blog Content and Taxonomy Audit

Audit date: July 30, 2026

Scope: Blog landing page, posts, tags, categories, archives, featured posts, pagination, related posts, comments, redirects, thumbnails, and breadcrumbs.

This is an audit report only. No Blog behavior or content was changed as part of this audit.

## Executive summary

The Blog system is technically feature-rich and functional, but its current content is still the demonstration catalogue inherited from the al-folio theme.

- Total posts: 30
- Posts categorized as `sample-posts`: 27
- Posts categorized as `external-services`: 3
- Distinct tags: 19
- Featured posts: 2
- Redirect-only posts: 1
- Posts per Blog page: 5
- Expected paginated Blog pages: 6

The current Blog branding also remains the theme default:

- Blog name: `al-folio`
- Blog description: `a simple whitespace theme for academics`

The most important issue is not a technical failure. It is that the Blog currently presents theme examples—charts, formatting, comments, media, and code demonstrations—as if they were the site's real published content.

## Current Blog structure

The Blog landing page is `_pages/blog.md`, available at:

```text
/blog/
```

Individual post URLs follow:

```text
/blog/:year/:title/
```

For example, a post dated 2025 with the title `a post with plotly.js` receives a URL based on its year and slugified title.

Posts live in `_posts/` and follow the standard Jekyll filename convention:

```text
YYYY-MM-DD-post-title.md
```

The Blog displays:

1. The configured Blog name and description.
2. Selected tag and category shortcuts.
3. Featured posts.
4. A reverse-chronological paginated list of all posts.
5. Five posts per page.

## What the hashtag symbol means

The hashtag icon represents a Jekyll **tag**. It is not a social-media hashtag and does not publish anything to Twitter, LinkedIn, or another external service.

Example post metadata:

```yaml
tags: [coding-theory, information-theory]
```

The Blog renders each tag with a hashtag icon:

```text
# coding-theory
# information-theory
```

Clicking a tag opens an automatically generated tag archive:

```text
/blog/tag/coding-theory/
```

That archive lists every post carrying the same tag.

Tags are best used as specific, reusable topics. Suitable future tags include:

- `coding-theory`
- `error-correcting-codes`
- `information-theory`
- `wireless-communications`
- `signal-processing`
- `machine-learning`
- `deep-learning`
- `agentic-ai`
- `theoretical-computer-science`
- `teaching`
- `research`

The URL uses a slugified form. For example, `Error Correcting Codes` becomes:

```text
/blog/tag/error-correcting-codes/
```

Lowercase hyphenated tag names are recommended because they are predictable and consistent.

## Tags currently in use

The current 19 tags and post counts are:

| Tag | Posts |
|---|---:|
| `formatting` | 27 |
| `charts` | 5 |
| `code` | 4 |
| `diagrams` | 3 |
| `comments` | 2 |
| `images` | 2 |
| `toc` | 2 |
| `audios` | 1 |
| `bib` | 1 |
| `blockquotes` | 1 |
| `citation` | 1 |
| `distill` | 1 |
| `jupyter` | 1 |
| `links` | 1 |
| `maps` | 1 |
| `math` | 1 |
| `sidebar` | 1 |
| `tables` | 1 |
| `videos` | 1 |

These are theme-demonstration tags. They describe presentation features rather than the owner's academic subjects.

## Tags displayed at the top of the Blog

The `display_tags` setting controls which tag shortcuts appear at the top of `/blog/`:

```yaml
display_tags:
  - formatting
  - images
  - links
  - math
  - code
  - blockquotes
```

This setting does not restrict which tags may be used and does not hide posts with other tags. It only selects shortcuts for the Blog header.

For example, `charts` exists and appears beneath relevant posts, but it is not included in the header shortcut list.

Once real posts exist, the top shortcuts should represent the site's most important subjects instead of formatting demonstrations.

## Categories and how they differ from tags

Categories are broader organizational groups. They appear with a tag-shaped icon rather than a hashtag icon.

Recommended distinction:

- Category: a broad editorial section.
- Tag: a specific subject or concept that may occur across sections.

Example:

```yaml
categories: [Research]
tags: [coding-theory, locally-recoverable-codes]
```

This would generate:

```text
/blog/category/research/
/blog/tag/coding-theory/
/blog/tag/locally-recoverable-codes/
```

Possible future categories include:

- `Research`
- `Teaching`
- `Communication Engineering`
- `Coding Theory`
- `Computing`
- `Data Science`
- `Commentary`

Avoid creating too many categories. A post should normally have one primary category and several descriptive tags.

## Categories currently in use

Only two categories currently exist:

| Category | Posts |
|---|---:|
| `sample-posts` | 27 |
| `external-services` | 3 |

The Blog header displays only:

```yaml
display_categories:
  - external-services
```

The dominant `sample-posts` category does not appear as a header shortcut, although it remains visible on posts and has its own archive.

## Year archives

Every post displays its year with a calendar icon. Clicking the year opens an automatically generated year archive:

```text
/blog/2025/
```

The archive lists posts from that year. Year archives, tag archives, and category archives are generated by `jekyll-archives-v2`.

The active archive configuration is:

```yaml
jekyll-archives:
  posts:
    enabled: [year, tags, categories]
```

## Featured posts

Posts with:

```yaml
featured: true
```

are displayed in a special card area above the ordinary post list.

Two posts are currently featured:

- `a post with code`
- `a distill-style blog post`

Both are theme examples rather than personal content.

Featured posts are also part of the normal paginated post collection. They can therefore appear once in the featured area and again in the chronological list.

Use `featured: true` selectively for major articles, research explainers, or important announcements.

## Pagination

The Blog uses `jekyll-paginate-v2`.

Current behavior:

- Five posts per page.
- Newest posts first.
- Previous and next controls.
- A numbered page trail.
- URLs such as `/blog/page/2/`.

With 30 posts, the Blog produces approximately six listing pages.

Pagination is working as configured, but retaining 30 demonstration posts makes the Blog appear much larger than its real content warrants.

## Reading-time estimate

The Blog estimates reading time using:

```text
word count ÷ 180 + 1
```

The result is always rounded down before adding one minute. Consequently, even a very short post is shown as a one-minute read.

For externally sourced posts, the estimate uses feed content when available.

## Related posts

Related posts are globally enabled:

```yaml
related_blog_posts:
  enabled: true
  max_related: 5
```

A post can disable them with:

```yaml
related_posts: false
```

The site has `lsi: false`, so Jekyll does not use latent semantic indexing. Related-post quality may therefore be limited and may not reflect strong topical similarity.

## Optional post features

The Blog supports several useful front-matter fields.

### Description

```yaml
description: A concise summary of the article.
```

The description appears on the Blog list, featured cards, and metadata. Every current post has a description.

### Thumbnail

```yaml
thumbnail: /assets/img/example.jpg
```

When present, the Blog list displays the image beside the post summary.

### Redirect

```yaml
redirect: /assets/pdf/report.pdf
```

or:

```yaml
redirect: https://example.com/article
```

The post title then links to the target instead of opening the post page. One current demonstration post redirects to an example PDF.

### Table of contents

Posts can request a generated table of contents through their front matter. The post layout supports a table of contents at the beginning of the article and the theme also contains examples of sidebar TOCs.

### Citation

```yaml
citation: true
```

This enables citation information for a suitable academic post.

### Related publications

```yaml
related_publications: true
```

This renders cited bibliography entries in a References section.

### Comments

The layout supports Disqus and Giscus, but the site's Giscus repository identifiers are currently empty. Comments will not become operational until the required repository, repository ID, category ID, and per-post comment settings are configured.

## Breadcrumb audit

Individual posts use the post layout, which includes breadcrumbs. However, posts currently do not declare Blog as their parent, and the breadcrumb collection map has no entry for posts.

An individual post may therefore show:

```text
Home › Post Title
```

instead of:

```text
Home › Blog › Post Title
```

The Blog landing page uses the default layout directly and does not include breadcrumbs. Archive pages also use the default layout and do not currently include breadcrumbs.

Recommended eventual hierarchy:

```text
Home › Blog
Home › Blog › Post Title
Home › Blog › Tag › coding-theory
Home › Blog › Category › Research
Home › Blog › 2026
```

## Content-quality findings

### High priority: demonstration content

All 30 posts appear to be theme examples rather than original site content. Examples include:

- Plotly
- image galleries
- tabs
- typograms
- citations
- pseudocode
- Vega-Lite
- GeoJSON
- Chart.js
- TikZJax
- Jupyter notebooks
- blockquotes
- audio and video
- Bootstrap tables
- Disqus and Giscus examples

These posts are helpful during theme development but should not remain publicly presented as the owner's Blog unless they are intentionally retained as technical demonstrations.

### High priority: default Blog identity

The public Blog header still says:

```text
al-folio
a simple whitespace theme for academics
```

This should eventually be replaced with a personal title and description aligned with the site's research and teaching focus.

### Medium priority: taxonomy is unrelated to the site's subject matter

The current taxonomy emphasizes formatting features. It does not represent communication engineering, coding theory, theoretical computer science, or data science.

### Medium priority: incomplete breadcrumb hierarchy

Blog posts and archive pages do not consistently identify Blog as their parent.

### Low priority: metadata syntax

Many current posts use space-separated strings:

```yaml
tags: formatting charts
categories: sample-posts external-services
```

Jekyll supports this convention, but explicit YAML arrays are clearer and safer:

```yaml
tags: [formatting, charts]
categories: [sample-posts, external-services]
```

Arrays are especially important when a label contains spaces.

## Recommended future post template

```yaml
---
layout: post
title: "Your Article Title"
date: 2026-07-30 10:00:00 +0530
description: "A concise one- or two-sentence summary for the Blog listing and search metadata."
categories: [Research]
tags: [coding-theory, information-theory]
featured: false
related_posts: true
giscus_comments: false
---
```

Use a concise filename:

```text
2026-07-30-article-title.md
```

## Recommended implementation sequence

1. Decide whether demonstration posts should be removed, archived, or hidden.
2. Replace the default `al-folio` Blog name and description.
3. Establish a small, stable set of real categories.
4. Establish consistent subject tags.
5. Correct Blog and archive breadcrumb hierarchy.
6. Select genuine featured posts.
7. Configure comments only if reader discussion is desired.
8. Add thumbnails selectively rather than requiring them for every post.
9. Publish original content before exposing large tag and category shortcut lists.

## Suggested initial taxonomy

Categories:

```yaml
- Research
- Teaching
- Communication Engineering
- Computing
- Data Science
```

Tags:

```yaml
- coding-theory
- error-correcting-codes
- information-theory
- wireless-communications
- signal-processing
- networking
- algorithms
- theoretical-computer-science
- machine-learning
- deep-learning
- agentic-ai
- academic-writing
```

This taxonomy should be adjusted based on actual articles. It is better to introduce a tag when at least one genuine post needs it than to create many empty archives in advance.
