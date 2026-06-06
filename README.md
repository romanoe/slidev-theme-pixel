# slidev-theme-pixel

[![NPM version](https://img.shields.io/npm/v/slidev-theme-pixel?color=000&label=)](https://www.npmjs.com/package/slidev-theme-pixel) [![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A stark, typographic theme for [Slidev](https://github.com/slidevjs/slidev). Black and white by default. Monospace accents. Animated pixel grid on section slides.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/cover.png" width="49%" />
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/cover-dark.png" width="49%" />
</p>

## Install

Add the following frontmatter to your `slides.md`. Start Slidev and it will prompt you to install the theme automatically.

```
---
theme: pixel
---
```

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

---

## Primary color

Set `themeConfig.primary` in your root frontmatter to give the theme a brand color. Defaults to `#000000`.

```yaml
---
theme: pixel
themeConfig:
  primary: '#e92528'
---
```

Any CSS color works. The section layout always uses this color as its background with white text, so contrast stays readable regardless of your choice.

---

## Fonts

Default font pair: **Plus Jakarta Sans** (sans) + **Atkinson Hyperlegible Mono** (mono). Override in frontmatter:

```yaml
fonts:
  sans: Roboto
  mono: Space Mono
```

---

## Cover slide

```yaml
---
theme: pixel
layout: cover
title: "Course Title"
subtitle: "Course subtitle"
author: "Firstname Lastname"
email: "firstname.lastname@example.com"
github: "https://github.com/example/repo"
logos:
  - /images/logo-a.svg
  - src: /images/logo-b.svg
    height: 48px
---
```

Toggle dark mode with the `D` key.

---

## Layouts

### `cover`

Full-bleed cover with title, subtitle, author, and logos. Fields: `title`, `subtitle`, `author`, `email`, `github`, `logos` (array of `src` strings or `{ src, height }` objects).

---

### `section`

Dark slide for transitions between parts. Background uses `--slidev-theme-primary` (default black), text always white. Animated pixel grid overlay.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/section.png" width="49%" />
</p>

```
---
layout: section
---

# Section title

_Subtitle_
```

---

### `default`

Standard content slide. Use `.ref` or `.footer` for a vertical source label (top-right).

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

### `two-cols`

Two-column layout with an optional `::title::` slot.

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

### `two-cols-bottom`

Two columns with a full-width zone below.

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

### `grid`

CSS grid. Set `cols` (number of columns). Prose elements (`h1`-`h3`, `p`, `pre`, `blockquote`) span all columns automatically. Components (`<Figure>`, `<Card>`, ...) become grid items.

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
<Figure src="/img/photo2.jpg" caption="..." />
<Figure src="/img/photo3.jpg" caption="..." />
```

---

### `image-right`

Image on the right, text on the left. `backgroundSize`: `contain` (default) or `cover`.

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

### `image-full`

Full-bleed image with optional caption and link.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/image-full.png" width="49%" />
</p>

```
---
layout: image-full
image: /images/photo.jpg
caption: "<strong>Image title</strong><br>Author · Year"
href: "https://..."
---
```

`caption` accepts inline HTML. `href` makes the caption a link. `backgroundSize`: `cover` (default) or `contain`.

---

### `fact`

Single bold statement, vertically centered.

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

### `photowall`

Full-screen photo grid. Always dark. Automatic layout based on image count.

<p align="center">
  <img src="https://raw.githubusercontent.com/romanoe/slidev-theme-pixel/main/screenshots/photowall.png" width="49%" />
</p>

```
---
layout: photowall
images:
  - src: "/images/photo.jpg"
    caption: "Author · <em>Title</em> (Year)"
    href: "https://..."
  - src: "/images/photo2.jpg"
    caption: "Author · <em>Title</em> (Year)"
---
```

`href` is optional (makes the image a link). `caption` accepts inline HTML.

| Count | Layout |
|---|---|
| 2 | Side by side |
| 3 | Equal thirds |
| 4 | Two tall left · two stacked right |
| 5-6 | 3-column grid · random spans |
| 7-9 | 4-column grid · random spans |

---

## Components

### `<Figure>`

Image with optional caption and link.

```
<Figure
  src="/img/photo.jpg"
  caption="Author · <em>Title</em> (Year)"
  href="https://..."
  alt="Description"
/>
```

Props: `src`, `caption` (inline HTML), `href` (optional), `alt`.

---

### `<Card>`

Terminal-style card. Use inside `layout: grid`.

```
---
layout: grid
cols: 3
---

<Card tag="concept" title="Title">Body text.</Card>
<Card color="#e92528" tag="warning" title="Title">Body text.</Card>
```

Props: `tag`, `title`, `footer` (optional), `color` (CSS color, tints header and border).

Semantic color conventions:

```
<Card color="#6b7280" tag="note"    title="Note">Neutral information.</Card>
<Card color="#16a34a" tag="tip"     title="Tip">Positive advice.</Card>
<Card color="#d97706" tag="warning" title="Warning">Something to verify.</Card>
<Card color="#e92528" tag="danger"  title="Danger">Critical mistake to avoid.</Card>
```

---

## CSS classes

### Source label

`.ref` — vertical source label, top-right, monospace. Use on any slide:
```html
<div class="ref">Source · Author, <em>Title</em> (Year) · <a href="...">link</a></div>
```

### Utilities

| Class | Effect |
|---|---|
| `.ref` | Vertical source label, top-right |
| `.mono` | Force monospace font |
| `.muted` | Muted text color |
| `.primary` | Primary text color |

---

## Icons

Includes [Pixelify Icons](https://github.com/halfmage/pixelarticons) (816 pixel-art icons, installed automatically).

```
<pixelarticons-star />
<pixelarticons-arrow-right class="text-2xl" />
```

Browse at [icones.js.org](https://icones.js.org) (collection: `pixelarticons`).

---

## Development

```bash
npm install
npm run dev
```

---

## License

[MIT](./LICENSE)
