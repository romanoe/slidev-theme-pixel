---
theme: ./
themeConfig:
  primary: "tomato"
  accent: "#e92528"
title: "Title"
subtitle: "Subtitle"
author: "Firstname Lastname"
email: "firstname.lastname@example.com"
github: "https://github.com/example/repo"
logos:
  - /images/logo-a.svg
  - /images/logo-b.svg
mdc: true
layout: cover
---

---
layout: section
---

# Layouts

---
references:
  - "Author, <em>Title</em> (Year)"
  - "<a href='https://example.com'>source</a>"
---

# Default

Short, active sentences. One idea per bullet.

- First point
- Second point · with **emphasis**
- Third point

---
layout: image-right
image: https://picsum.photos/800/600?grayscale
backgroundSize: contain
caption: "Author, <em>Title</em> (Year)"
---

# Image right

`backgroundSize: contain` or `cover`. Caption via `caption:` frontmatter prop.

---
layout: image-full
image: https://picsum.photos/1600/900?grayscale
caption: "<strong>Image title</strong><br>Author · Year"
---

---
layout: fact
---

**tremate tremate**, le streghe son tornate

---
layout: grid
cols: 3
---

# Grid

`cols: N` : images, cards, or any component. Prose and code span all columns automatically.

<Figure src="https://picsum.photos/400/300?random=1&grayscale" caption="Author, <em>Title</em> (Year)" />
<Figure src="https://picsum.photos/400/300?random=2&grayscale" caption="Author, <em>Title</em> (Year)" />
<Figure src="https://picsum.photos/400/300?random=3&grayscale" caption="Author, <em>Title</em> (Year)" />

---
layout: section
---

# Components

---
layout: two-cols
---

::title::
# Card

::left::

```js
<Card tag="concept" title="Title">Body text.</Card>

<Card color="#e92528" tag="warning" title="Title">
  Body text.
</Card>
```

::right::

<Card tag="concept" title="Default">Neutral style : no color prop.</Card>

<Card color="#e92528" tag="warning" title="Colored">Use <code>color</code> to set the accent · dots, tag, border, and header.</Card>

---
layout: two-cols
---

::title::
# Figure

::left::

```js
<Figure
  src="/img/photo.jpg"
  caption="Author · <em>Title</em> (Year)"
  href="https://..."
/>
```

::right::

<Figure src="https://picsum.photos/600/400?random=5&grayscale" caption="Author · <em>Title</em> (Year)" />

---
layout: photowall
images:
  - src: "https://picsum.photos/600/900?random=20&grayscale"
    caption: "Author · <em>Title</em> (Year)"
  - src: "https://picsum.photos/600/900?random=21&grayscale"
    caption: "Author · <em>Title</em> (Year)"
  - src: "https://picsum.photos/900/500?random=22&grayscale"
    caption: "Author · <em>Title</em> (Year)"
  - src: "https://picsum.photos/900/500?random=23&grayscale"
    caption: "Author · <em>Title</em> (Year)"
---

---
layout: section
---

# Features

---

# Table

| Column A | Column B | Column C |
|---|---|---|
| Row 1 | Value | Description of the item |
| Row 2 | Value | Description of the item |
| Row 3 | Value | Description of the item |

---
layout: two-cols
---

::title::
# Icons : Pixelify Icons

::left::

[Pixelify Icons](https://github.com/halfmage/pixelarticons) : **816** free pixel-art icons

```bash
npm install @iconify-json/pixelarticons
```

```js
<pixelarticons-star class="text-2xl" />
<pixelarticons-arrow-right />
```

::right::

<div class="flex flex-wrap gap-4 items-center text-4xl primary">
  <pixelarticons-star />
  <pixelarticons-heart />
  <pixelarticons-home />
  <pixelarticons-user />
  <pixelarticons-search />
  <pixelarticons-mail />
  <pixelarticons-camera />
  <pixelarticons-map />
  <pixelarticons-chart />
  <pixelarticons-database />
  <pixelarticons-globe />
  <pixelarticons-zap />
  <pixelarticons-arrow-right />
  <pixelarticons-eye />
  <pixelarticons-menu />
  <pixelarticons-file />
</div>

