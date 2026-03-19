import Link from 'next/link';

export default function PostCard({ post, index = 0 }) {
  return (
    <article
      className="post-card animate-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <h2 className="post-title">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      <div className="post-meta">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
        <span>{post.date}</span>
        <span className="separator">|</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span>MD Ratul Hossen</span>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="post-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}

      <p className="post-excerpt">{post.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className="btn-read-more">
        বিস্তারিত পড়ুন
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </Link>
    </article>
  );
}
