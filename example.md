---
theme: ./
title: "Title"
subtitle: "Subtitle"
author: "Firstname Lastname"
email: "firstname.lastname@example.com"
github: "https://github.com/example/repo"
logos:
  - /images/logo-a.svg
  - /images/logo-b.svg
breadcrumb: "course"
mdc: true
layout: cover
---

---
layout: section
---

# Layouts

---

# Default

Short, active sentences. One idea per bullet.

- First point
- Second point · with **emphasis**
- Third point

<div class="footer">Source · Author, <em>Title</em> (Year)</div>

---
layout: two-cols
---

::title::
# Two columns

::left::
Left column · context, definitions.

- Item A
- Item B

::right::

```javascript
const data = [1, 2, 3, 4, 5]

const result = data
  .filter(d => d > 2)
  .map(d => d * 2)

console.log(result) // [6, 8, 10]
```

---
layout: two-cols-bottom
---

::title::
# Two cols + bottom

::left::
Left column · context, definitions, narrative.

- Point A
- Point B
- Point C

::right::

```javascript
const data = [1, 2, 3, 4, 5]

const result = data
  .filter(d => d > 2)
  .map(d => d * 2)

console.log(result) // [6, 8, 10]
```

::bottom::

<Callout type="note">Bottom zone · full width · shared result, figure, or note spanning both columns.</Callout>

---
layout: four-cells
---

::title::
# Four cells

Description · context · narrative.

::result::

<div class="border-box" style="height:100%;display:flex;align-items:center;justify-content:center;">live result · SVG · canvas</div>

::left::

```js
// Approach A
const data = [1, 2, 3]
data.forEach(d => console.log(d))
```

::right::

```js
// Approach B
d3.selectAll('circle')
  .data([1, 2, 3])
  .join('circle')
```

---
layout: image-right
image: https://picsum.photos/800/600?grayscale
backgroundSize: contain
caption: "Author, <em>Title</em> (Year)"
---

# Image right

Text left, image right with `backgroundSize: contain`.

---
layout: image
image: https://picsum.photos/1600/900?grayscale
---

<div class="image-caption">
  <strong>Image Title</strong><br>
  Author · Year
</div>

---
layout: fact
---

**tremate tremate** le streghe son tornate

---
layout: section
---

# Components

---

# Card

```md
<Card tag="Tag" title="Title">Body text.</Card>
```

<div class="cards cards-3" style="margin-top:1rem">
  <Card tag="Concept" title="Perception">How readers decode visual variables · position, size, colour, shape.</Card>
  <Card tag="Tool" title="D3.js">Data-driven DOM manipulation. Scales, axes, layouts, projections.</Card>
  <Card tag="Method" title="Scrollytelling">Narrative driven by scroll position. Scrollama + IntersectionObserver.</Card>
</div>

---

# Callout

```md
<Callout type="note|tip|warning|danger">Text.</Callout>
```

<Callout type="note">Neutral information or aside.</Callout>
<Callout type="tip">Positive advice or best practice.</Callout>
<Callout type="warning">Caution · something to verify carefully.</Callout>
<Callout type="danger">Critical · a common mistake or something that must not be done.</Callout>

---

<PhotoWall :images="[
  { src: 'https://picsum.photos/600/900?random=20&grayscale', caption: 'Author · <em>Title</em> (Year)' },
  { src: 'https://picsum.photos/600/900?random=21&grayscale', caption: 'Author · <em>Title</em> (Year)' },
  { src: 'https://picsum.photos/900/500?random=22&grayscale', caption: 'Author · <em>Title</em> (Year)' },
  { src: 'https://picsum.photos/900/500?random=23&grayscale', caption: 'Author · <em>Title</em> (Year)' },
]" />

---
layout: section
---

# Fonctionnalités

---

# Table

| Column A | Column B | Column C |
|---|---|---|
| Row 1 | Value | Description of the item |
| Row 2 | Value | Description of the item |
| Row 3 | Value | Description of the item |

---

# Icons

Install: `npm install @iconify-json/pixelarticons`

```md
<pixelarticons-star />
<pixelarticons-arrow-right class="text-2xl" />
```

<div class="cards cards-3" style="margin-top:1rem">
  <Card title="pixelarticons-arrow-right">
    <pixelarticons-arrow-right class="text-3xl" />
  </Card>
  <Card title="pixelarticons-chart">
    <pixelarticons-chart class="text-3xl" />
  </Card>
  <Card title="pixelarticons-map">
    <pixelarticons-map class="text-3xl" />
  </Card>
</div>

---

# Image mosaic

<div class="mosaic-3">
  <figure>
    <img src="https://picsum.photos/400/300?random=1&grayscale" />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/400/300?random=2&grayscale" />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/400/300?random=3&grayscale" />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
</div>

---

# Book mosaic

<div class="mosaic-4 book">
  <figure>
    <img src="https://picsum.photos/200/300?random=10&grayscale" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/200/300?random=11&grayscale" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/200/300?random=12&grayscale" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/200/300?random=13&grayscale" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
</div>

---
layout: default
---

# References

<div class="paragraph-section">

### Books
- Author, <em>Book Title</em>, Publisher, Year

</div>
<div class="paragraph-section">

### Articles & online resources
- Author, "Article Title", Publication, Year · [link](#)

</div>
<div class="paragraph-section">

### Tools
- Tool name · [link](#)

</div>

---
layout: end
---

Thank you
