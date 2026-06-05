# slidev-theme-pixel

[![NPM version](https://img.shields.io/npm/v/slidev-theme-pixel?color=000&label=)](https://www.npmjs.com/package/slidev-theme-pixel) [![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A stark, pixel-driven Slidev theme. Black and white. Monospace. Every slide carries a pixel grid · subtle, structural, always present.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/cover.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/section.png" width="49%" />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image-right.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/photowall.png" width="49%" />
</p>

Toggle dark mode with the `D` key. All layouts support dark mode via CSS variables.

---

## Installation

```yaml
---
theme: pixel
---
```

Slidev will prompt to install the theme automatically on first run.

---

## Cover slide

```yaml
---
theme: pixel
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
layout: cover
---
```

| Field | Description |
|---|---|
| `title` | Course title · `h1` on cover |
| `subtitle` | Subtitle below the title |
| `author` | Author name |
| `email` | Author email · rendered as `mailto:` link |
| `github` | GitHub URL · shown as repo link |
| `breadcrumb` | Short label in bottom breadcrumb (all slides) |
| `logos` | One or two logos · top-left / top-right |
| `license` | License URL · defaults to CC BY 4.0 |

---

## Layouts

### `section`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/section.png" width="60%" />

Inverts the current color mode (dark background in light mode, light in dark mode). Animated pixel grid overlay.

```md
---
layout: section
---

# Section title

_Subtitle line_
```

### `default`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/default.png" width="60%" />

```md
# Slide title

Short sentences. One idea per bullet.

- First point
- Second point · with **emphasis**

<div class="footer">Source · Author, <em>Title</em> (Year)</div>
```

### `two-cols`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/two-cols.png" width="60%" />

```md
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

### `two-cols-bottom`

Two columns with a full-width zone below.

```md
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

### `grid`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/grid.png" width="60%" />

CSS grid layout. `cols` sets the number of columns. Prose elements (`h1`–`h3`, `p`, `pre`, `blockquote`) span all columns automatically — only components (`<Figure>`, `<Card>`, …) become grid items. To place text in a single cell, wrap it in a `<div>`.

```md
---
layout: grid
cols: 3
---

# Title

<Figure src="/img/photo.jpg" caption="Author, <em>Title</em> (Year)" />
<Figure src="/img/photo2.jpg" caption="Author, <em>Title</em> (Year)" />
<Figure src="/img/photo3.jpg" caption="Author, <em>Title</em> (Year)" />
```

```md
<div>Text in the first cell.</div>
<Figure src="/img/photo.jpg" caption="..." />
<Figure src="/img/photo2.jpg" caption="..." />
```

Add `variant: book` for book covers (fixed height · object-fit contain · drop shadow):

```md
---
layout: grid
cols: 4
variant: book
---

<Figure src="/img/cover.jpg" alt="Book title" caption="Author, <em>Title</em> (Year)" />
```

### `image-right`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image-right.png" width="60%" />

```md
---
layout: image-right
image: /images/photo.jpg
backgroundSize: contain
caption: "Author, <em>Title</em> (Year)"
---

# Title

Text on the left.
```

`backgroundSize` accepts `contain` (default) or `cover`.

### `image`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image.png" width="60%" />

Full-bleed image with an optional caption overlay.

```md
---
layout: image
image: /images/photo.jpg
---

<div class="image-caption">
  <strong>Image title</strong><br>
  Author · Year
</div>
```

### `fact`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/fact.png" width="60%" />

A single bold statement, vertically centered.

```md
---
layout: fact
---

**1 in 5** data visualisations contains a misleading element.
```

---

## Components

### `<Figure>`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/figure.png" width="60%" />

Image with optional caption and link. Use inside `layout: grid` or standalone.

```md
<Figure
  src="/img/photo.jpg"
  caption="Author · <em>Title</em> (Year)"
  href="https://..."
/>
```

`href` is optional. `caption` accepts inline HTML (`<em>`, `<a>`).

### `<Card>`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/card.png" width="60%" />

Use inside `layout: grid`.

```md
---
layout: grid
cols: 3
---

<Card tag="Tag" title="Title">Body text.</Card>
<Card tag="Tag" title="Title" footer="Footer">Body text.</Card>
```

| Prop | Description |
|---|---|
| `tag` | Small label above the title |
| `title` | Card title |
| `footer` | Optional footer line |
| `color` | Accent color for dots and tag · any CSS color value |

Use `color` to replace callouts — the dots and tag reflect the semantic meaning:

```md
<Card color="#6b7280" tag="note" title="Note">Neutral information.</Card>
<Card color="#16a34a" tag="tip" title="Tip">Positive advice.</Card>
<Card color="#d97706" tag="warning" title="Warning">Something to verify.</Card>
<Card color="#e92528" tag="danger" title="Danger">Critical mistake to avoid.</Card>
```

### `<PhotoWall>`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/photowall.png" width="60%" />

Full-screen photo grid · always dark · automatic layout based on image count.

```md
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
| 5–6 | 3-column grid · random spans |
| 7–9 | 4-column grid · random spans |

---

## Sources

Vertical source · top-right · for slides with code or no image:

```html
<div class="footer">Source · Author, <em>Title</em> (Year) · <a href="...">link</a></div>
```

---

## Icons

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/icons.png" width="60%" />

This theme includes [Pixelify Icons](https://github.com/halfmage/pixelarticons) — 816 free pixel-art icons that match the theme aesthetic.

```bash
npm install @iconify-json/pixelarticons
```

```md
<pixelarticons-star />
<pixelarticons-arrow-right class="text-2xl" />
<pixelarticons-chart class="text-3xl" />
```

Browse all icons at [icones.js.org](https://icones.js.org) (collection: `pixelarticons`). Any Iconify collection works — the prefix matches the collection ID (e.g. `mdi-github` for Material Design Icons).

---

## Development

```bash
npm install
npm run dev
```

---

## License

[MIT](./LICENSE)
