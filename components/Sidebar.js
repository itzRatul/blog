import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Sidebar() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 5);

  // Derive categories dynamically from post data
  const categoryMap = {};
  allPosts.forEach((post) => {
    if (post.category) {
      if (!categoryMap[post.category]) categoryMap[post.category] = [];
      categoryMap[post.category].push(post);
    }
  });

  return (
    <aside className="sidebar">
      {/* About Widget */}
      <div className="sidebar-widget about-widget">
        <h3 className="widget-title">আমার সম্পর্কে</h3>
        <div className="author-avatar">R</div>
        <p className="author-name">MD Ratul Hossen</p>
        <p className="author-role">CSE @ Daffodil International University</p>
        <Link href="/about" className="about-link">আরও পড়ুন →</Link>
      </div>

      {/* Recent Posts — Dynamic */}
      <div className="sidebar-widget">
        <h3 className="widget-title">নতুন লেখা</h3>
        {recentPosts.length > 0 ? (
          <ul className="link-list">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>শীঘ্রই নতুন লেখা আসছে!</p>
        )}
      </div>

      {/* Categories — Dynamic from post frontmatter */}
      {Object.keys(categoryMap).length > 0 && (
        <div className="sidebar-widget">
          <h3 className="widget-title">ক্যাটেগরি</h3>
          {Object.entries(categoryMap).map(([cat, posts]) => (
            <div key={cat}>
              <p className="category-group-title">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                </svg>
                {cat}
              </p>
              <ul className="link-list">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
