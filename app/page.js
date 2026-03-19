import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'রাতুলের ব্লগ | প্রোগ্রামিং, অ্যালগরিদম ও AI Research',
  description: 'বাংলায় প্রোগ্রামিং, অ্যালগরিদম এবং AI Research নিয়ে লেখা — MD Ratul Hossen এর ব্যক্তিগত ব্লগ।',
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m13 2-2 2.5L9 3l-2 3L5 5l-1 4h16l-1-4-2 1-2-3-1.5 1.5z"/>
              <path d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
            </svg>
            Aspiring AI Researcher &amp; LLM Enthusiast
          </div>
          <h1>রাতুলের ব্লগ</h1>
          <p>প্রোগ্রামিং, অ্যালগরিদম, AI Research — বাংলায় কম্পিউটার সায়েন্স শেখার একটি প্ল্যাটফর্ম</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="page-wrapper">
        <main className="main-content">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))
          ) : (
            <div className="post-card">
              <p className="post-excerpt">এখনো কোনো পোস্ট নেই। শীঘ্রই নতুন লেখা আসছে!</p>
            </div>
          )}
        </main>
        <Sidebar />
      </div>
    </>
  );
}
