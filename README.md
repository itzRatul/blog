<div align="center">
  <img src="assets/avater.jpg" alt="Ratul Dev Logo" width="120" style="border-radius: 50%;">
  <h1>Ratul.dev — Thoughts on AI, Life & Code</h1>
  <p><strong>A personal blog built from scratch using HTML, CSS, Vanilla JS, and Markdown.</strong></p>
  
  [![Portfolio](https://img.shields.io/badge/Portfolio-Ratul-orange?logo=vercel)](https://itzratul.github.io/portfolio)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin)](https://linkedin.com/in/mdratulhossen)
  [![GitHub](https://img.shields.io/badge/GitHub-itzRatul-black?logo=github)](https://github.com/itzRatul)
  [![Kaggle](https://img.shields.io/badge/Kaggle-Profile-blue?logo=kaggle)](https://kaggle.com/mdratulhossen)

</div>

---

## 🚀 About The Project

This is my personal blog and portfolio website. I built it without heavy frameworks to keep it fast, lightweight, and easy to maintain. The blog features a sleek, dark-mode aesthetic with custom animations and dynamic content loading. 

Content is written purely in **Markdown**, and JavaScript parses it into the beautiful UI you see.

### ✨ Features
- **Markdown Support:** Write posts normally in `.md` files; the site handles the rest.
- **Dynamic Routing:** A modular JSON architecture (`index.json`) handles rendering the grid and featured posts.
- **Pinning System:** Highlight important posts at the top of the feed.
- **Categories Breakdown:** Built-in filtering for AI, LLM, Programming, Lifestyle, and Others.
- **No Build Step:** Serve it instantly via Live Server or Python HTTP Server.

---

## 📝 How to Manage Blog Posts

Managing the blog is incredibly simple. All you need to edit is the `posts/` folder.

### ➕ How to Create a New Post

1. **Create the Markdown file**:
   Inside the `posts/` folder, create a new file like `my-new-post.md`.
2. **Add Front Matter (Metadata)**:
   At the very top of your `.md` file, add this block:
   ```markdown
   ---
   title: "Your Awesome Title"
   category: "ai"
   date: "March 2026"
   readTime: "5 min read"
   ---
   
   Your actual blog content starts here...
   ```
   *(Valid categories: `ai`, `llm`, `prog`, `lifestyle`, `other`)*
3. **Add an Image**:
   Place your post's cover image in the `assets/` folder (e.g., `assets/my-image.jpg`).
4. **Register the post in `index.json`**:
   Open `posts/index.json` and add a new block to the array. If you want it to be pinned to the top, add `"pinned": true`!
   ```json
   {
     "slug": "my-new-post",
     "title": "Your Awesome Title",
     "category": "ai",
     "categoryLabel": "AI Research",
     "date": "March 2026",
     "readTime": "5 min read",
     "excerpt": "A short engaging summary for the blog card on the home page.",
     "image": "assets/my-image.jpg"
   }
   ```

### ✏️ How to Edit a Post
1. To edit the **content**, simply open the `.md` file in the `posts/` folder (e.g., `posts/running-llama-locally.md`) and make your changes. 
2. To edit the **title, image, snippet, or tags**, update the corresponding entry in `posts/index.json`.

### 🗑️ How to Remove a Post
1. Delete the `.md` file from the `posts/` folder.
2. Delete its JSON block from the array in `posts/index.json`.
3. *(Optional)* Delete its image from the `assets/` folder if it's no longer used.

---

## 🛠️ How to Run Locally

You don't need Node.js or npm. Just serve the directory locally!

Using Python 3:
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your browser.

---

## 👨‍💻 About Me

**MD Ratul Hossen**  
*Aspiring AI Researcher | CS Student at DIU | LLM Enthusiast*

I'm obsessed with understanding how Large Language Models work from the ground up, deploying them locally, and one day building scalable LLMs from scratch. Beyond the technical, I write about life as a student in Bangladesh and the discipline I've learned from chess.

**Connect with me:**
- 🖼️ [Portfolio](https://itzratul.github.io/portfolio)
- 💼 [LinkedIn](https://linkedin.com/in/mdratulhossen)
- 💻 [GitHub](https://github.com/itzRatul)
- 🏆 [Kaggle](https://kaggle.com/mdratulhossen)
- 📧 Email: 251-15-596@diu.edu.bd

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
