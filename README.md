# slidev-theme-pixel

[![NPM version](https://img.shields.io/npm/v/slidev-theme-pixel?color=000&label=)](https://www.npmjs.com/package/slidev-theme-pixel) [![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A stark, pixel-driven Slidev theme. Black and white. Monospace. Every slide carries a pixel grid · subtle, structural, always present.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/01-cover.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/02-section.png" width="49%" />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/07-img-right.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/12-masonry.png" width="49%" />
</p>

### Light · Dark

| light theme | dark theme |
|---|---|
| <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/01-cover.png" height="220" /> | <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/01-cover-dm.png" height="220" /> |

---

## Installation

Add to your presentation frontmatter:

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

### Frontmatter fields

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Course title · `h1` on cover |
| `subtitle` | `string` | Subtitle below the title |
| `author` | `string` | Author name |
| `email` | `string` | Author email · rendered as `mailto:` link |
| `github` | `string` | GitHub URL · shown as repo link |
| `breadcrumb` | `string` | Short label in bottom breadcrumb (all slides) |
| `logos` | `string[] \| LogoItem[]` | One or two logos · top-left / top-right |
| `logo` | `string` | Single logo alias |
| `license` | `string` | License URL · defaults to CC BY 4.0 |

---

## Layouts

### `section`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/02-section.png" width="60%" />

```md
---
layout: section
---

# Section title

_Subtitle line_
```

### `default`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/03-default.png" width="60%" />

```md
# Slide title

Short sentences. One idea per bullet.

- First point
- Second point · with **emphasis**

<div class="footer">Source · Author, <em>Title</em> (Year)</div>
```

### `two-cols`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/06-two-cols.png" width="60%" />

```md
---
layout: two-cols
---

# Title

Left column content.

::right::

Right column content.
```

### `image-right`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/07-img-right.png" width="60%" />

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


---

## Components

### `<PhotoWall>`

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/12-masonry.png" width="60%" />

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
| 6 | 3×2 grid |

`href` is optional. `caption` accepts inline HTML.

---

## Utility classes

### Admonitions

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/09-callout-cards.png" width="60%" />

```html
<div class="note-box">Neutral information or aside.</div>
<div class="tip-box">Positive advice or best practice.</div>
<div class="warning-box">Caution · something to verify carefully.</div>
<div class="danger-box">Critical · a common mistake or something that must not be done.</div>
```

### Cards

<img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/09-callout-cards.png" width="60%" />

```html
<div class="cards cards-3">
  <div class="card">
    <span class="card-tag">Tag</span>
    <p class="card-title">Title</p>
    <p class="card-body">Short description of the item.</p>
    <div class="card-footer">footer text</div>
  </div>
</div>
```

Grid variants: `cards-2`, `cards-3`, `cards-4`. Single centered card: add `card-solo`.

### Image mosaics

```html
<div class="mosaic mosaic-3">
  <figure>
    <img src="..." />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
</div>
```

Grid variants: `mosaic-2`, `mosaic-3`, `mosaic-4`.

Book covers (fixed height · object-fit contain · drop shadow):

```html
<div class="mosaic mosaic-4 mosaic-books">
  <figure>
    <img src="..." alt="Book title" />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
</div>
```

### Sources

Vertical · top-right · for slides with code or no image:

```html
<div class="footer">Source · Author, <em>Title</em> (Year) · <a href="...">link</a></div>
```

Horizontal · below content · for slides with images:

```html
<div class="source">Source · Author, <em>Title</em> (Year) · <a href="...">link</a></div>
```

### Image height utilities

| Class | Height |
|---|---|
| `.h-img-sm` | 160px |
| `.h-img-md` | 220px |
| `.h-img-lg` | 300px |

### Typography utilities

| Class | Effect |
|---|---|
| `.mono` | Force monospace font |
| `.text-muted` | Muted color |
| `.bg-light` | Light grey background |

---

## Icons

Slidev uses `unplugin-icons` with Iconify. Install any collection and use it as a component, no import needed.

```bash
npm install @iconify-json/ph   # Phosphor Icons (included)
npm install @iconify-json/mdi  # Material Design Icons
```

```md
<ph-star />
<ph-arrow-right class="text-2xl" />
<mdi-github />
```

Browse all icons at [icones.js.org](https://icones.js.org).

---

## Dark mode

Toggle with the `D` key during presentation. All layouts support dark mode via CSS variables.

---

## Development

```bash
npm install
npm run dev
```

---

## License

[MIT](./LICENSE)
