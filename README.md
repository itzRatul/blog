<div align="center">

# রাতুলের ব্লগ 📖

**বাংলায় প্রোগ্রামিং, অ্যালগরিদম ও AI Research**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

[🌐 Live Site](https://itzratul-blog.vercel.app) · [📝 Content Guide](./CONTENT_GUIDE.md) · [👤 About Me](#-about-the-author)

</div>

---

## ✨ About the Project

**রাতুলের ব্লগ** is a personal Bengali-language tech blog built with **Next.js 16** and **MDX**. It covers Programming, Algorithms, and AI Research — written entirely in Bangla to make Computer Science more accessible to Bengali-speaking learners.

### 🔑 Key Features

- 📝 **MDX-powered posts** — write content in Markdown with math & code support
- 🔢 **KaTeX math rendering** — beautifully formatted equations (`$O(n \log n)$`)
- 💻 **Syntax highlighting** — powered by `highlight.js` with GitHub Dark theme
- 🗂️ **Category-based organization** — Algorithm, DP, Graph Theory, etc.
- 🔍 **SEO-ready** — metadata, Open Graph, and Twitter Card support built-in
- ⚡ **Zero-config deployment** — push to GitHub → auto-deploys on Vercel
- 📱 **Fully responsive** — mobile, tablet, and desktop friendly
- 🇧🇩 **Bengali-first design** — `Noto Sans Bengali` font for perfect rendering

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript (ES2024) |
| Styling | Vanilla CSS (Swiss Modernism design system) |
| Content | MDX (Markdown + JSX) |
| Math | KaTeX via `rehype-katex` |
| Code Highlight | highlight.js + `rehype-highlight` |
| Markdown Parser | Remark + Rehype pipeline |
| Deployment | Vercel |

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- **Node.js** 18.17 or later
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/itzRatul/blog.git
cd blog

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server (with hot reload)
npm run build    # Build for production
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
blog/
├── app/                    # Next.js App Router pages
│   ├── layout.js           # Root layout (Navbar, Footer)
│   ├── page.js             # Homepage (post list + sidebar)
│   ├── blog/[slug]/        # Dynamic blog post page
│   ├── programming/        # Algorithms index page
│   ├── about/              # About me page
│   └── globals.css         # Global design system styles
├── components/             # Reusable UI components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── PostCard.js
│   ├── Sidebar.js
│   └── ScrollToTop.js
├── content/
│   └── posts/              # ✍️ All blog posts (MDX files)
│       ├── big-o-notation.mdx
│       ├── dp-1.mdx
│       └── ...
├── lib/
│   └── posts.js            # MDX parsing utility
├── public/                 # Static assets (images, etc.)
├── CONTENT_GUIDE.md        # 📖 Full guide for managing content
└── AGENTS.md               # AI agent instructions
```

---

## ✍️ Adding New Blog Posts

Create a new `.mdx` file inside `content/posts/`:

```yaml
---
title: 'আমার নতুন পোস্ট'
date: 'মার্চ ২০, ২০২৬'
tags: ['অ্যালগরিদম', 'ডেটা স্ট্রাকচার']
excerpt: 'পোস্টের সংক্ষিপ্ত বিবরণ।'
category: 'ডাইনামিক প্রোগ্রামিং'
---

## ভূমিকা

এখানে কন্টেন্ট লিখুন...
```

Then push to GitHub — Vercel auto-deploys in ~10 seconds. See [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md) for the full workflow including Vercel setup, SEO, and AI automation.

---

## 👤 About the Author

<table>
  <tr>
    <td width="120" align="center">
      <b>MD Ratul Hossen</b><br/>
      <sub>Aspiring AI Researcher & LLM Enthusiast</sub>
    </td>
    <td>
      I'm a Computer Science student passionate about Artificial Intelligence, Large Language Models, and Competitive Programming. I write in Bangla to make advanced CS concepts accessible to Bengali-speaking students who don't have quality resources in their native language.<br/><br/>
      <a href="https://github.com/itzRatul">GitHub</a> ·
      <a href="https://itzratul-blog.vercel.app">Blog</a>
    </td>
  </tr>
</table>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

You are free to fork this project and use it as the base for your own blog. If you do, a credit in your README would be appreciated! 🙏

---

<div align="center">
Made with ❤️ in Bangladesh · © 2026 MD Ratul Hossen
</div>
