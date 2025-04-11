---
title: "Test Post"
date: "2025-04-11"
tags: ["test", "example"]
---

---
title: "Testing Markdown Capabilities"
date: 2025-04-11
tags: ["test", "markdown", "styling"]
description: "A comprehensive test of various markdown features and styling options"
---

# Testing Markdown Capabilities

## Introduction

This post is created to test if the posts feature is working correctly with various markdown styling elements. Markdown is a lightweight markup language that allows you to write using an easy-to-read, easy-to-write plain text format.

## Text Formatting

You can create **bold text** with double asterisks or __underscores__.

*Italic text* can be created with single asterisks or _underscores_.

***Bold and italic*** can be combined with three asterisks or ___underscores___.

~~Strikethrough~~ text uses two tildes.

## Headings

# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

## Lists

### Unordered Lists

* Item 1
* Item 2
  * Nested Item 2.1
  * Nested Item 2.2
* Item 3

### Ordered Lists

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task to do

## Links and Images

[Visit Astro's website](https://astro.build)

![Alt text for an image](https://via.placeholder.com/300x200)

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
>
> > Nested blockquotes are also possible.

## Code

Inline `code` can be created with backticks.

```javascript
// Code blocks can specify a language
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Cell 7   | Cell 8   | Cell 9   |

## Horizontal Rules

Three or more hyphens, asterisks, or underscores:

---

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Footnotes

Here's a sentence with a footnote reference[^1].

[^1]: This is the footnote content.

## Abbreviations

The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium

## Emoji

Some platforms support emoji shortcodes like :smile: :heart: :rocket:

## Mathematical Formulas

When supported by your markdown processor:

$$
E = mc^2
$$

## Conclusion

This post demonstrates the variety of markdown features that might be available in your Astro blog. Not all markdown processors support all these features, so check your specific implementation for compatibility.

---

*Hope this helps test your markdown rendering capabilities!*