import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import Sidebar from '@/components/Sidebar';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | রাতুলের ব্লগ`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <section className="hero" style={{ minHeight: '260px' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            {post.category || 'প্রোগ্রামিং'}
          </div>
          <h1 style={{ fontSize: '2.2rem' }}>{post.title}</h1>
        </div>
      </section>

      <div className="page-wrapper">
        <main className="main-content">
          <article className="page-content">
            <div className="blog-post-header">
              <div className="post-meta" style={{ marginBottom: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span>{post.date}</span>
                <span className="separator">|</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
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
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </article>
        </main>
        <Sidebar />
      </div>
    </>
  );
}
