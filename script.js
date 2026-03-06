// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
});

function initCursorHover() {
    document.querySelectorAll('a,button,.blog-card,.featured-post,.cat-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(2)';
            cursor.style.background = 'rgba(212,162,76,0.15)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}
initCursorHover();

// ===== MOBILE MENU =====
function toggleMobile() {
    document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile() {
    document.getElementById('mobileMenu').classList.remove('open');
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== SUBSCRIBE =====
function subscribe() {
    const email = document.getElementById('emailInput').value;
    if (!email || !email.includes('@')) {
        document.getElementById('emailInput').style.borderLeft = '3px solid #c0392b';
        return;
    }
    document.getElementById('subMsg').style.opacity = '1';
    document.getElementById('emailInput').value = '';
}

// ===== BLOG POSTS DATA (loaded from index.json) =====
let postsData = [];

// Parse YAML Front Matter from markdown
function parseFrontMatter(md) {
    // Normalize line endings
    md = md.replace(/\r\n/g, '\n').trim();
    const match = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!match) return { meta: {}, content: md };
    const meta = {};
    match[1].split('\n').forEach(line => {
        const idx = line.indexOf(':');
        if (idx > 0) {
            const key = line.slice(0, idx).trim();
            let val = line.slice(idx + 1).trim();
            // Remove surrounding quotes
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            meta[key] = val;
        }
    });
    return { meta, content: match[2] };
}

// Load posts from index.json and render
async function loadPosts() {
    try {
        const resp = await fetch('posts/index.json');
        postsData = await resp.json();
        renderFeaturedPost();
        renderBlogGrid();
        initCursorHover();
    } catch (err) {
        console.log('Could not load posts/index.json:', err);
    }
}

function renderFeaturedPost() {
    const featured = postsData.find(p => p.featured) || postsData[0];
    if (!featured) return;
    const container = document.getElementById('featuredPost');
    if (!container) return;

    const img = featured.image || 'assets/main_bg.png';

    container.setAttribute('data-slug', featured.slug);
    container.innerHTML = `
    <div class="feat-visual">
      <div class="feat-cat-badge">${featured.categoryLabel || featured.category}</div>
      <img src="${img}" alt="${featured.title}" class="img-shadow" />
    </div>
    <div class="feat-content">
      <div class="post-meta">
        <span>📅 ${featured.date}</span>
        <span>⏱ ${featured.readTime}</span>
        <span>👁 ${featured.categoryLabel || featured.category}</span>
      </div>
      <h2 class="post-title">${featured.title}</h2>
      <p class="post-excerpt">${featured.excerpt}</p>
      <a class="read-more" href="#" onclick="openPost('${featured.slug}'); return false;">Read Full Article</a>
    </div>
  `;
    container.onclick = () => openPost(featured.slug);
}

function renderBlogGrid() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let nonFeatured = postsData.filter(p => !p.featured);

    // Sort posts: Pinned posts come first, then sort by recent date
    nonFeatured.sort((a, b) => {
        // 1. Sort by pinned status (if a post has "pinned": true)
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;

        // 2. Sort by date (newest first)
        // Adding " 1" to the month/year string makes it parseable by Date()
        const dateA = new Date(a.date + " 1");
        const dateB = new Date(b.date + " 1");
        return dateB.getTime() - dateA.getTime();
    });

    const MAX_VISIBLE = 3;
    const hasMore = nonFeatured.length > MAX_VISIBLE;

    nonFeatured.forEach((post, index) => {
        const img = post.image || 'assets/main_bg.png';
        const catClass = 'cat-' + post.category;
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.setAttribute('data-cat', post.category);
        if (index >= MAX_VISIBLE) {
            card.classList.add('blog-card-hidden');
            card.style.display = 'none';
        }
        card.onclick = () => openPost(post.slug);
        card.innerHTML = `
      <div class="blog-card-img">
        <img src="${img}" alt="${post.title}" />
      </div>
      <div class="blog-card-body">
        <span class="blog-card-cat ${catClass}">${post.categoryLabel || post.category}</span>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <span>${post.date}</span>
          <span>${post.readTime}</span>
        </div>
      </div>
    `;
        grid.appendChild(card);
    });

    // Add "View All Posts" button if there are more posts
    if (hasMore) {
        const btnWrap = document.createElement('div');
        btnWrap.className = 'view-all-wrap';
        btnWrap.id = 'viewAllWrap';
        btnWrap.innerHTML = `<button class="btn-view-all" onclick="showAllPosts()">View All Posts →</button>`;
        grid.parentNode.insertBefore(btnWrap, grid.nextSibling);
    }
}

// ===== SHOW ALL POSTS =====
function showAllPosts() {
    document.querySelectorAll('.blog-card-hidden').forEach(c => {
        c.style.display = '';
        c.classList.remove('blog-card-hidden');
    });
    const wrap = document.getElementById('viewAllWrap');
    if (wrap) wrap.remove();
}

// ===== FILTER POSTS =====
function filterPosts(cat) {
    // When filtering, show all cards first
    showAllPosts();
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(c => {
        if (cat === 'all' || c.dataset.cat === cat) {
            c.style.display = '';
        } else {
            c.style.display = 'none';
        }
    });
    setTimeout(() => {
        document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ===== MODAL =====
async function openPost(slug) {
    const post = postsData.find(p => p.slug === slug);
    if (!post) return;

    const modalContent = document.getElementById('modalContent');
    const img = post.image || 'assets/main_bg.png';

    // Show loading state
    modalContent.innerHTML = `
    <div class="modal-cat">${post.categoryLabel || post.category}</div>
    <h2 class="modal-title">${post.title}</h2>
    <div class="modal-meta">${post.date} · ${post.readTime} · ${post.categoryLabel || post.category}</div>
    <div class="modal-cover"><img src="${img}" alt="${post.title}" /></div>
    <div class="modal-body"><p style="color:var(--text3);font-family:'JetBrains Mono',monospace;font-size:0.8rem;">Loading article...</p></div>
  `;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Load and render the markdown
    try {
        const resp = await fetch(`posts/${post.slug}.md`);
        const mdText = await resp.text();
        const { meta, content } = parseFrontMatter(mdText);
        const htmlContent = marked.parse(content);
        modalContent.querySelector('.modal-body').innerHTML = htmlContent;
    } catch (err) {
        modalContent.querySelector('.modal-body').innerHTML = `<p>Could not load the article. Please try again.</p>`;
    }
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function closeModalOutside(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});
