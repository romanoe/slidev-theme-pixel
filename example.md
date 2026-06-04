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

# Section title

_subtitle line_

---

# Default slide

Short, active sentences. One idea per bullet.

- First point
- Second point · with **emphasis**
- Third point

<div class="footer">Source · Author, <em>Title</em> (Year)</div>

---

# Table

| Column A | Column B | Column C |
|---|---|---|
| Row 1 | Value | Description of the item |
| Row 2 | Value | Description of the item |
| Row 3 | Value | Description of the item |

---

# Icons

Install a collection: `npm install @iconify-json/ph`

Then use directly as a component, no import needed:

```md
<ph-star />
<ph-star class="text-2xl text-red-500" />
<ph-arrow-right class="text-xl" />
```

<div class="cards cards-2" style="margin-top:1.5rem">
  <div class="card">
    <ph-arrow-right class="text-3xl" />
    <p class="card-title">ph-arrow-right</p>
    <p class="card-body">Browse at <a href="https://icones.js.org">icones.js.org</a></p>
  </div>
  <div class="card">
    <ph-warning class="text-3xl text-red-500" />
    <p class="card-title">ph-warning</p>
    <p class="card-body">Style with UnoCSS classes</p>
  </div>
</div>

---
layout: two-cols
---

# Two columns

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
layout: image-right
image: https://picsum.photos/800/600
backgroundSize: contain
caption: "Author, <em>Title</em> (Year)"
---

# Image right

Text left, image right with `backgroundSize: contain`.

---
layout: image
image: https://picsum.photos/1600/900
---

<div class="image-caption">
  <strong>Image Title</strong><br>
  Author · Year
</div>


---
layout: two-cols
---

# Callouts & cards

<div class="note-box">Neutral information or aside.</div>
<div class="tip-box">Positive advice or best practice.</div>
<div class="warning-box">Caution · something to verify carefully.</div>
<div class="danger-box">Critical · a common mistake or something that must not be done.</div>

::right::

<div class="card card card-solo">
  <span class="card-tag">Tag</span>
  <p class="card-title">Title</p>
  <p class="card-body">Short description of the item.</p>
  <div class="card-footer">footer text</div>
</div>

---

# Image mosaic

<div class="mosaic mosaic-3">
  <figure>
    <img src="https://picsum.photos/400/300?random=1" />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/400/300?random=2" />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/400/300?random=3" />
    <figcaption>Author, <em>Title</em> (Year)</figcaption>
  </figure>
</div>

---

# Book mosaic

<div class="mosaic mosaic-4 mosaic-books">
  <figure>
    <img src="https://picsum.photos/200/300?random=10" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/200/300?random=11" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/200/300?random=12" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/200/300?random=13" alt="Book cover" />
    <figcaption>Author, <em>Book Title</em> (Year)</figcaption>
  </figure>
</div>

---

<PhotoWall :images="[
  { src: 'https://picsum.photos/600/900?random=20', caption: 'Author · <em>Title</em> (Year)' },
  { src: 'https://picsum.photos/600/900?random=21', caption: 'Author · <em>Title</em> (Year)' },
  { src: 'https://picsum.photos/900/500?random=22', caption: 'Author · <em>Title</em> (Year)' },
  { src: 'https://picsum.photos/900/500?random=23', caption: 'Author · <em>Title</em> (Year)' },
]" />


---
layout: fact
---

**42%** of people cannot identify a misleading chart on first reading.

---
layout: four-cells
---

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
layout: two-cols-bottom
---

# Two cols + bottom

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

<div class="note-box">Bottom zone · full width · shared result, figure, or note spanning both columns.</div>

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
