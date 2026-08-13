# Deep Learning Notes - Project Rules & Design System

> **Agent Instruction:** Before creating any new lecture notes or making structural changes to this repository, you MUST read and strictly adhere to the guidelines documented in this file. Failure to follow this pattern will result in inconsistent layouts.

## 1. Project Architecture
- **`index.html`**: The main Dashboard. Contains a CSS Grid of lecture cards linking to specific notes. Uses `css/home.css`.
- **`lectures/lecture-XX.html`**: Individual lecture notes (e.g., `lecture-01.html`, `lecture-02.html`). Follows a strict layout template. Uses `css/style.css` and `js/script.js`.
- **`pdfs/X.pdf`**: The original lecture slide decks (e.g., `1.pdf`, `2.pdf`).
- **`css/style.css`**: The core aesthetic engine. Contains variables, typography, sidebar layouts, content boxes, and syntax-highlighted code blocks.
- **`css/home.css`**: Styles specifically for the dashboard hero section and lecture cards.
- **`js/script.js`**: Controls the dynamic Table of Contents, smooth scrolling, active section highlighting, and the logic to embed/hide PDFs.

## 2. Lecture Page Template (`lecture-XX.html`)
Every new lecture page MUST be an exact structural clone of `lecture-01.html`. 

### Header Section
- Do NOT use custom inline `<style>` tags or completely different headers. 
- You must use the exact `<header>` block:
```html
<header>
    <div class="header-titles">
        <h1>Deep Learning Foundations</h1>
        <p>Lecture XX - [Lecture Name]</p>
        <a href="../index.html" style="color: var(--blue); text-decoration: none; font-weight: bold; font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;">← Back to Dashboard</a>
    </div>
    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search notes...">
    </div>
</header>
```

### Table of Contents (`<aside>`)
- The header MUST use the flex layout: `<div class="aside-header"><h3>Table of Contents</h3><div class="topic-count">Total Topics: X</div></div>`.
- Main topics are `<li><a href="#topic-N">...<span class="sub-count">Y</span></a></li>`.
- Subtopics are in an unordered list: `<ul class="sub-index">`. 
- **Behavior:** Sub-indices are collapsed by default and only expand when the user scrolls to that specific section.

### Notes Body (`<main id="notesContent">`)
- Each major topic must be wrapped in `<section id="topic-N" class="topic-section">`.
- It must contain an interactive header: `<div class="topic-header" onclick="toggleSection('content-N')">` featuring a `<div class="topic-number">`.
- Content sits inside `<div id="content-N" class="collapsible-content">`.
- Subheadings must use `<h3 id="sub-N-X">`.
- The bottom of each topic must have `<div class="topic-nav">` containing Previous and Next buttons.

### Original PDF Embed
- The final section of every page must be the `original-pdf` section.
- It must use an SVG icon for the header, not an emoji.
- It must have a `<button class="btn" id="loadPdfBtn" onclick="loadPDF()">` which triggers the script to embed the original `X.pdf` (using path `../pdfs/X.pdf`) inside `<div id="pdfContainer">`.

## 3. Design & Aesthetic Rules

### Global Rules
- **NO EMOJIS.** Under no circumstances should emojis be used. Only use professional SVG icons.
- **Favicons:** Use an SVG data URI in the `<head>` representing the lecture number (e.g., a blue rounded square with "01" in the center).

### Content Formatting
- **No Markdown Syntax:** Do NOT use markdown syntax (such as **text** or *text*) in HTML files for formatting bold or italic text. Use standard HTML tags like <strong> or <em> instead.
- **Information Boxes:** Use the predefined CSS classes to highlight information:
  - `.box-blue`: For Definitions and standard data.
  - `.box-green`: For Analogies and positive points.
  - `.box-red`: For Warnings, critical errors (like Kernel Panic), and negative points.
  - `.box-orange`: For Checkpoint Questions and Mode Transitions.
  - `.box-beige`: For Summaries and Real Talk observations.
- **Graphs & Flow Charts:** Extract and show important graphs or flow charts from the PDF slides. If they are only for a case study, you can skip them.

### Code Blocks
- When raw code (like C structs, bash commands) appears in the PDF, it MUST be formatted using `<pre class="code-block"><code>`.
- Apply manual syntax highlighting spans:
  - `<span class="code-type">` for types (int, void*, long)
  - `<span class="code-comment">` for comments (// ...)
  - `<span class="code-keyword">` for keywords

## 4. Workflow for Creating New Lectures
1. **Analyze the PDF:** Read `X.pdf` to grasp the full structure.
2. **Draft a Plan:** Identify the main topics (H2) and subtopics (H3).
3. **Generate HTML:** Duplicate the structure of an existing `lecture-XX.html`, replacing text, IDs, and fixing Previous/Next buttons.
4. **Update Dashboard:** Modify `index.html` to activate the corresponding Lecture Card, remove the disabled opacity, update the subtopic counts, and link the "Open Notes" button to the new file.
5. **Verify:** Ensure `style.css` and `script.js` are correctly linked and no rogue inline styles break the established pattern.
