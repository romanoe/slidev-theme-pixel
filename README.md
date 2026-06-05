# slidev-theme-pixel

[![NPM version](https://img.shields.io/npm/v/slidev-theme-pixel?color=000&label=)](https://www.npmjs.com/package/slidev-theme-pixel) [![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A stark, pixel-driven theme for [Slidev](https://github.com/slidevjs/slidev). Black and white. Monospace. Every slide carries a random pixel grid (unique every load and refresh !)

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/cover.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/cover-dark.png" width="49%" />
</p>

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: pixel
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Cover slide

Add the following fields to the root frontmatter of your `slides.md`:

```
---
theme: pixel
layout: cover
title: "Course Title"
subtitle: "Course subtitle"
author: "Firstname Lastname"
email: "firstname.lastname@example.com"
github: "https://github.com/example/repo"
breadcrumb: "short label"
logos:
  - /images/logo-a.svg
  - src: /images/logo-b.svg
    height: 48px
---
```

Toggle dark mode with the `D` key.

## Layouts

This theme provides the following layouts:

---

### Section `section`

Inverts the current color mode (dark on light · light on dark). Animated pixel grid overlay.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/section.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/section-dark.png" width="49%" />
</p>

```
---
layout: section
---

# Section title

_Subtitle_
```

---

### Default `default`

Standard content slide. Use `.footer` for a vertical source label (top-right).

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/default.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/default-dark.png" width="49%" />
</p>

```
---

# Slide title

Short sentences. One idea per bullet.

- First point
- Second point · with **emphasis**

<div class="footer">Source · Author, <em>Title</em> (Year)</div>
```

---

### Two columns `two-cols`

Two-column layout with optional full-width title.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/two-cols.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/two-cols-dark.png" width="49%" />
</p>

```
---
layout: two-cols
---

::title::
# Title

::left::

Left column content.

::right::

Right column content.
```

---

### Two columns with bottom `two-cols-bottom`

Two columns with a full-width zone below both.

```
---
layout: two-cols-bottom
---

::title::
# Title

::left::

Left column.

::right::

Right column.

::bottom::

Full-width content below both columns.
```

---

### Grid `grid`

- Add `grid` in the layout field.
- Set the number of columns with `cols`.
- Prose elements (`h1`-`h3`, `p`, `pre`, `blockquote`) span all columns automatically.
- Components (`<Figure>`, `<Card>`, ...) become the grid items.
- To place text in a single cell, wrap it in a `<div>`.
- Add `variant: book` for book covers (fixed height · object-fit contain · shadow).

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/grid.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/grid-dark.png" width="49%" />
</p>

```
---
layout: grid
cols: 3
---

# Title

<Figure src="/img/photo.jpg" caption="Author, <em>Title</em> (Year)" />
<Figure src="/img/photo2.jpg" caption="Author, <em>Title</em> (Year)" />
<Figure src="/img/photo3.jpg" caption="Author, <em>Title</em> (Year)" />
```

---

### Image right `image-right`

- Add `image-right` in the layout field.
- Add the image URL in the `image` field.
- Set `backgroundSize` to `contain` (default) or `cover`.
- Add a caption with the `caption` field.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image-right.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image-right-dark.png" width="49%" />
</p>

```
---
layout: image-right
image: /images/photo.jpg
backgroundSize: contain
caption: "Author, <em>Title</em> (Year)"
---

# Title

Text on the left.
```

---

### Full-bleed image `image`

- Add `image` in the layout field.
- Add the image URL in the `image` field.
- Use `.image-caption` for an overlay caption.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image-dark.png" width="49%" />
</p>

```
---
layout: image
image: /images/photo.jpg
---

<div class="image-caption">
  <strong>Image title</strong><br>
  Author · Year
</div>
```

---

### Fact `fact`

A single bold statement, vertically centered.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/fact.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/fact-dark.png" width="49%" />
</p>

```
---
layout: fact
---

**1 in 5** data visualisations contains a misleading element.
```

---

## Components

---

### `<Figure>`

Image with optional caption and link. Use inside `layout: grid` or standalone.

- `src` · image URL
- `caption` · accepts inline HTML (`<em>`, `<a>`)
- `href` · optional, makes the image a link
- `alt` · alt text

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/figure.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/figure-dark.png" width="49%" />
</p>

```
<Figure
  src="/img/photo.jpg"
  caption="Author · <em>Title</em> (Year)"
  href="https://..."
/>
```

---

### `<Card>`

Terminal-style card with a header bar (three dots + tag). Use inside `layout: grid`.

- `tag` · small label in the header
- `title` · card title
- `footer` · optional footer line
- `color` · CSS color, tints dots, tag, border, and header

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/card.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/card-dark.png" width="49%" />
</p>

```
---
layout: grid
cols: 3
---

<Card tag="concept" title="Title">Body text.</Card>
<Card color="#e92528" tag="warning" title="Title">Body text.</Card>
```

Use `color` to replace callout-style admonitions:

```
<Card color="#6b7280" tag="note"    title="Note">Neutral information.</Card>
<Card color="#16a34a" tag="tip"     title="Tip">Positive advice.</Card>
<Card color="#d97706" tag="warning" title="Warning">Something to verify.</Card>
<Card color="#e92528" tag="danger"  title="Danger">Critical mistake to avoid.</Card>
```

---

### `<PhotoWall>`

Full-screen photo grid. Always dark. Automatic layout based on image count.

- `images` · array of `{ src, caption?, href? }`
- `caption` · accepts inline HTML
- `href` · optional, makes the image a link

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/photowall.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/photowall-dark.png" width="49%" />
</p>

```
<PhotoWall :images="[
  { src: '/images/photo.jpg', caption: 'Author · <em>Title</em> (Year)', href: 'https://...' },
  { src: '/images/photo2.jpg', caption: 'Author · <em>Title</em> (Year)' },
  { src: '/images/photo3.jpg', caption: 'Author · <em>Title</em> (Year)' },
  { src: '/images/photo4.jpg', caption: 'Author · <em>Title</em> (Year)' },
]" />
```

| Count | Layout |
|---|---|
| 2 | Side by side |
| 3 | Equal thirds |
| 4 | Two tall left · two stacked right |
| 5-6 | 3-column grid · random spans |
| 7-9 | 4-column grid · random spans |

---

## Icons

This theme includes [Pixelify Icons](https://github.com/halfmage/pixelarticons) · 816 free pixel-art icons.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/icons.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/icons-dark.png" width="49%" />
</p>

```bash
npm install @iconify-json/pixelarticons
```

```
<pixelarticons-star />
<pixelarticons-arrow-right class="text-2xl" />
```

Browse all icons at [icones.js.org](https://icones.js.org) (collection: `pixelarticons`). Any Iconify collection works · the prefix matches the collection ID.

---

## Development

```bash
npm install
npm run dev
```

---

## License

[MIT](./LICENSE)
