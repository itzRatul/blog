# রাতুলের ব্লগ — সম্পূর্ণ Content Management Guide 📝

> এই গাইডটিতে ব্লগ পরিচালনার সমস্ত কিছু বিস্তারিতভাবে আলোচনা করা হয়েছে — Vercel deployment থেকে শুরু করে AI automation পর্যন্ত।

---

## 📋 সূচিপত্র

1. [প্রথমবার Vercel-এ Deploy করা](#-প্রথমবার-vercel-এ-deploy-করা)
2. [নতুন পোস্ট আপলোড করা](#-নতুন-পোস্ট-আপলোড-করা)
3. [পুরানো পোস্ট Modify করা](#-পুরানো-পোস্ট-modify-করা)
4. [SEO Guide](#-seo-guide)
5. [AI Automation দিয়ে পোস্ট তৈরি](#-ai-automation-দিয়ে-পোস্ট-তৈরি)
6. [API ব্যবহার করে Automation](#-api-ব্যবহার-করে-automation)

---

## 🚀 প্রথমবার Vercel-এ Deploy করা

### ধাপ ১ — GitHub এ Repository Push করো

যদি এখনো push করা না হয়ে থাকে:

```bash
cd c:\GitHub\blog

# Git initialize (যদি না থাকে)
git init
git add .
git commit -m "Initial commit: রাতুলের ব্লগ"

# GitHub repository create করে URL লিঙ্ক করো
git remote add origin https://github.com/itzRatul/blog.git
git branch -M main
git push -u origin main
```

### ধাপ ২ — Vercel Account তৈরি করো

1. [vercel.com](https://vercel.com) এ যাও
2. **"Sign Up"** ক্লিক করো
3. **"Continue with GitHub"** সিলেক্ট করো (same GitHub account)

### ধাপ ৩ — Project Import করো

1. Vercel Dashboard এ **"Add New → Project"** ক্লিক করো
2. তোমার `blog` repository খুঁজে **"Import"** ক্লিক করো
3. Framework: **Next.js** automatically detect হবে
4. কিছু change না করে সরাসরি **"Deploy"** ক্লিক করো

### ধাপ ৪ — Custom Domain (Optional)

Deployment শেষে Vercel একটি URL দেবে (যেমন `itzratul-blog.vercel.app`)।

নিজের domain থাকলে:
- Vercel Dashboard → Settings → Domains → Add Domain

### ✅ এখন থেকে Auto-Deploy চালু!

তুমি যখনই `git push` করবে, Vercel **৩০-৬০ সেকেন্ডের** মধ্যে নতুন version deploy করে ফেলবে।

---

## ✍️ নতুন পোস্ট আপলোড করা

### ধাপ ১ — MDX ফাইল তৈরি করো

`content/posts/` ফোল্ডারে একটি নতুন `.mdx` ফাইল তৈরি করো।

**ফাইলের নাম = URL slug** (lowercase, hyphen দিয়ে শব্দ আলাদা করো):
- `binary-search-advanced.mdx` → `/blog/binary-search-advanced`
- `dp-3-knapsack.mdx` → `/blog/dp-3-knapsack`

### ধাপ ২ — Frontmatter লিখো

ফাইলের একদম শুরুতে এই block লিখতে হবে:

```yaml
---
title: 'Binary Search এর উন্নত ব্যবহার'
date: 'মার্চ ২০, ২০২৬'
tags: ['Binary Search', 'অ্যালগরিদম', 'সার্চিং']
excerpt: 'এই পোস্টে আমরা দেখব কিভাবে Binary Search কে বিভিন্ন উপায়ে ব্যবহার করা যায়।'
category: 'সার্চিং অ্যালগরিদম'
---
```

**Available Categories:**
| Category | ব্যবহার |
|---|---|
| `সার্চিং অ্যালগরিদম` | Binary Search, Linear Search |
| `সর্টিং অ্যালগরিদম` | Merge Sort, Quick Sort, Heap Sort |
| `কমপ্লেক্সিটি` | Big O, Time & Space Complexity |
| `গ্রাফ থিওরি` | BFS, DFS, Dijkstra, Floyd-Warshall |
| `ডেটা স্ট্রাকচার` | Stack, Queue, Tree, Heap |
| `ডাইনামিক প্রোগ্রামিং` | Memoization, Tabulation, LCS, LIS |

> ⚠️ **সতর্কতা:** Category এর বানান হুবহু মিলতে হবে, নাহলে Sidebar এ সঠিকভাবে দেখাবে না।

### ধাপ ৩ — Content লিখো

```markdown
## ভূমিকা

এই পোস্টে আমরা দেখব...

## কোড উদাহরণ

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

## Math Formula

Time Complexity: $O(\log n)$

$$T(n) = T(n/2) + O(1)$$
```

### ধাপ ৪ — GitHub এ Push করো

```bash
git add .
git commit -m "New post: Binary Search এর উন্নত ব্যবহার"
git push origin main
```

**✅ ৩০-৬০ সেকেন্ড পরে পোস্টটি Live!**

---

## 🔧 পুরানো পোস্ট Modify করা

### কন্টেন্ট ঠিক করা

1. `content/posts/` ফোল্ডারে সেই `.mdx` ফাইলটি খোলো
2. যা পরিবর্তন করতে চাও (typo fix, নতুন section যোগ, কোড আপডেট) করো
3. Push করো:

```bash
git add content/posts/your-post-name.mdx
git commit -m "Fix: big-o-notation পোস্টে typo সংশোধন"
git push origin main
```

### Frontmatter আপডেট করা

Title, tags, বা category পরিবর্তন করতে হলে সেই ফাইলের উপরের `---` block এ পরিবর্তন করো।

**`date` field** পরিবর্তন করার দরকার নেই (publish date সাধারণত same রাখা হয়)।

### পোস্ট Delete করা

```bash
# ফাইলটা delete করো
Remove-Item content/posts/post-to-delete.mdx

# Push করো
git add .
git commit -m "Remove: old post deleted"
git push origin main
```

---

## 🔍 SEO Guide

তোমার ব্লগে SEO support built-in আছে। কিছু important টিপস:

### ১. প্রতিটি পোস্টের জন্য Frontmatter সঠিকভাবে পূরণ করো

| Field | SEO-তে প্রভাব |
|---|---|
| `title` | Page title ও Google search snippet |
| `excerpt` | Meta description (Google-এ যা দেখায়) |
| `tags` | Related terms |
| `category` | Content grouping |

**ভালো excerpt এর উদাহরণ:**
```yaml
excerpt: 'Binary Search কি এবং কিভাবে কাজ করে — বাংলায় বিস্তারিত ব্যাখ্যা এবং Python কোড উদাহরণসহ।'
```
> Excerpt ৮০–১৬০ character রাখলে Google-এ সুন্দরভাবে দেখায়।

### ২. পোস্টের URL slug keyword-rich রাখো

❌ খারাপ: `post1.mdx`, `new-post.mdx`  
✅ ভালো: `binary-search-bangla.mdx`, `dp-1-memoization.mdx`

### ৩. Heading Structure ঠিক রাখো

প্রতিটি পোস্টে:
- `## H2` দিয়ে main sections ভাগ করো
- `### H3` দিয়ে sub-sections
- H1 ব্যবহার করো না (title থেকে automatically আসে)

### ৪. Internal Linking

পোস্টে related পোস্টের link দাও:

```markdown
এই বিষয়টি বুঝতে হলে আগে [Big O Notation](/blog/big-o-notation) পড়ে নাও।
```

### ৫. Image Alt Text

```markdown
![Binary Search এর step-by-step diagram দেখানো হচ্ছে](/images/binary-search.png)
```

### ৬. `layout.js` এ Site-wide SEO

`app/layout.js` এ `metadataBase` URL তোমার actual Vercel URL দিয়ে আপডেট রাখো:

```js
metadataBase: new URL('https://itzratul-blog.vercel.app'),
```

---

## 🤖 AI Automation দিয়ে পোস্ট তৈরি

এই ব্লগের structure অনুযায়ী AI দিয়ে দ্রুত পোস্ট তৈরি করতে পারো।

### ChatGPT / Claude Prompt Template

নিচের prompt কপি করে AI-তে দাও:

```
আমি একটি বাংলা প্রোগ্রামিং ব্লগের জন্য একটি পোস্ট লিখতে চাই।

**টপিক:** [এখানে তোমার টপিক লিখো, যেমন: Merge Sort]
**ক্যাটেগরি:** [এখানে category লিখো, যেমন: সর্টিং অ্যালগরিদম]
**ভাষা:** বাংলা (বাংলাদেশ)
**কোড ভাষা:** Python এবং C++

নিচের MDX frontmatter format এ লিখো:

---
title: '[বাংলায় টাইটেল]'
date: '[আজকের তারিখ বাংলায়]'
tags: ['tag1', 'tag2', 'tag3']
excerpt: '[১২০-১৫০ character এর meta description]'
category: '[category]'
---

তারপর পোস্টের কন্টেন্ট লিখো যেখানে থাকবে:
1. ভূমিকা
2. অ্যালগরিদম কিভাবে কাজ করে (step by step)
3. Python কোড উদাহরণ (code block)
4. C++ কোড উদাহরণ (code block)
5. Time & Space Complexity (KaTeX math সহ)
6. উপসংহার
```

### GitHub Copilot দিয়ে দ্রুত লেখা

`.mdx` ফাইলে frontmatter লিখলে Copilot বাকি structure suggest করতে পারে।

---

## 🔌 API ব্যবহার করে Automation

### তোমার ব্লগের "API" — GitHub + Vercel

তোমার ব্লগে কোনো আলাদা backend API নেই, কিন্তু **GitHub API** এবং **Vercel API** ব্যবহার করে সম্পূর্ণ automation করা সম্ভব।

### GitHub API দিয়ে পোস্ট Auto-Publish

Python script দিয়ে সরাসরি GitHub repo-তে ফাইল create করে পোস্ট publish করা যায়:

```python
import requests
import base64
import json
from datetime import datetime

# Configuration
GITHUB_TOKEN = "your_github_personal_access_token"
REPO_OWNER = "itzRatul"
REPO_NAME = "blog"
BRANCH = "main"

def create_post(slug, title, date, tags, excerpt, category, content):
    """GitHub API দিয়ে নতুন MDX পোস্ট তৈরি করে।"""
    
    mdx_content = f"""---
title: '{title}'
date: '{date}'
tags: {json.dumps(tags, ensure_ascii=False)}
excerpt: '{excerpt}'
category: '{category}'
---

{content}
"""
    
    # Base64 encode করো
    encoded = base64.b64encode(mdx_content.encode('utf-8')).decode('utf-8')
    
    # GitHub API call
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/content/posts/{slug}.mdx"
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }
    data = {
        "message": f"Auto-publish: {title}",
        "content": encoded,
        "branch": BRANCH
    }
    
    response = requests.put(url, headers=headers, json=data)
    
    if response.status_code == 201:
        print(f"✅ পোস্ট published: {slug}")
        print(f"🔗 URL: https://itzratul-blog.vercel.app/blog/{slug}")
    else:
        print(f"❌ Error: {response.json()}")

# AI-generated content দিয়ে পোস্ট বানাও
create_post(
    slug="graph-bfs-bangla",
    title="Graph BFS — বাংলায় বিস্তারিত ব্যাখ্যা",
    date="মার্চ ২০, ২০২৬",
    tags=["Graph", "BFS", "অ্যালগরিদম"],
    excerpt="BFS কি, কিভাবে কাজ করে এবং কোথায় ব্যবহার হয় — বাংলায় সম্পূর্ণ গাইড।",
    category="গ্রাফ থিওরি",
    content="## ভূমিকা\n\nBFS বা Breadth-First Search হলো..."
)
```

### GitHub Personal Access Token তৈরি করো

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. **"Generate new token"** ক্লিক করো
3. Permissions: `repo` (full control) চেক করো
4. Token টি নিরাপদে রাখো

### OpenAI + GitHub API দিয়ে Full Automation

```python
import openai
import requests
import base64
import json

openai.api_key = "your_openai_api_key"
GITHUB_TOKEN = "your_github_token"

def ai_generate_and_publish(topic, category):
    """AI দিয়ে content generate করে automatically publish করো।"""
    
    # ১. OpenAI দিয়ে content generate করো
    prompt = f"""
    বাংলায় একটি প্রোগ্রামিং পোস্ট লিখো। Topic: {topic}
    Category: {category}
    
    Format: MDX frontmatter (---) দিয়ে শুরু করো, তারপর markdown content।
    শুধু MDX content return করো, অন্য কিছু না।
    """
    
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    
    mdx_content = response.choices[0].message.content
    
    # ২. slug তৈরি করো
    slug = topic.lower().replace(" ", "-")
    
    # ৩. GitHub এ publish করো
    encoded = base64.b64encode(mdx_content.encode('utf-8')).decode('utf-8')
    url = f"https://api.github.com/repos/itzRatul/blog/contents/content/posts/{slug}.mdx"
    
    requests.put(url, 
        headers={"Authorization": f"token {GITHUB_TOKEN}"},
        json={"message": f"AI post: {topic}", "content": encoded, "branch": "main"}
    )
    
    print(f"✅ AI পোস্ট published: /blog/{slug}")

# ব্যবহার
ai_generate_and_publish("Heap Sort Algorithm", "সর্টিং অ্যালগরিদম")
```

### Vercel Deployment API (Manual Trigger)

```python
import requests

VERCEL_TOKEN = "your_vercel_token"
PROJECT_ID = "your_project_id"

def trigger_deploy():
    """Manually Vercel redeploy trigger করো।"""
    response = requests.post(
        f"https://api.vercel.com/v13/deployments",
        headers={"Authorization": f"Bearer {VERCEL_TOKEN}"},
        json={"name": "blog", "gitSource": {"type": "github", "repoId": "...", "ref": "main"}}
    )
    print("Deploy triggered:", response.json().get("url"))
```

> ℹ️ **নোট:** সাধারণত GitHub push করলে Vercel auto-deploy হয়, তাই manual trigger দরকার হয় না।

---

## 📸 ছবি যোগ করা

1. ছবি `public/images/` ফোল্ডারে রাখো (ফোল্ডার না থাকলে তৈরি করো)
2. পোস্টে এভাবে ব্যবহার করো:

```markdown
![ছবির বিবরণ](/images/your-image.png)
```

**Recommended size:** ১২০০×৬৩০ px, WebP format এ (smaller file size)।

---

## 🗂️ Quick Reference

### Daily Workflow

```bash
# ১. নতুন পোস্ট লিখো
# content/posts/new-post.mdx তৈরি করো

# ২. Local এ check করো
npm run dev
# http://localhost:3000 এ দেখো

# ৩. Publish করো  
git add .
git commit -m "New post: [টাইটেল]"
git push origin main
# Vercel auto-deploy — ৩০-৬০ সেকেন্ড পরে live!
```

### Markdown Cheatsheet

```markdown
**বোল্ড**          *ইটালিক*          ~~strikethrough~~

## H2 Heading      ### H3 Heading

- Bullet item      1. Numbered item

`inline code`

[Link text](https://example.com)

![Image alt text](/images/img.png)

> Blockquote

$inline math$      $$block math$$

```python
code block
```
```

---

> **প্রশ্ন বা সমস্যা হলে:** GitHub Issues বা [itzRatul@github](https://github.com/itzRatul) তে যোগাযোগ করো।
