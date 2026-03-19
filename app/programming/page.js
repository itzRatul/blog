import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'প্রোগ্রামিং | রাতুলের ব্লগ',
  description: 'প্রোগ্রামিং এবং অ্যালগরিদম টিউটোরিয়ালের সম্পূর্ণ তালিকা',
};

const categories = [
  {
    name: 'সার্চিং অ্যালগরিদম',
    posts: [
      { title: 'বাইনারি সার্চ – ১', slug: 'binary-search-1' },
      { title: 'বাইনারি সার্চ – ২ (বাইসেকশন)', slug: 'binary-search-2' },
    ],
  },
  {
    name: 'সর্টিং অ্যালগরিদম',
    posts: [
      { title: 'সর্টিং অ্যালগরিদম (বাবল, সিলেকশন, মার্জ, কুইক)', slug: 'sorting-algorithms' },
    ],
  },
  {
    name: 'কমপ্লেক্সিটি',
    posts: [
      { title: 'বিগ "O" নোটেশন', slug: 'big-o-notation' },
    ],
  },
  {
    name: 'গ্রাফ থিওরি',
    posts: [
      { title: 'গ্রাফ থিওরিতে হাতেখড়ি', slug: 'graph-basics' },
    ],
  },
  {
    name: 'ডেটা স্ট্রাকচার',
    posts: [
      { title: 'লিংকড লিস্ট', slug: null },
      { title: 'স্ট্যাক', slug: null },
      { title: 'কিউ + সার্কুলার কিউ', slug: null },
      { title: 'সেগমেন্ট ট্রি', slug: null },
    ],
  },
  {
    name: 'ডাইনামিক প্রোগ্রামিং',
    posts: [
      { title: 'ডাইনামিক প্রোগ্রামিং – ১ (ফিবোনাচ্চি)', slug: 'dp-1' },
      { title: 'ডাইনামিক প্রোগ্রামিং-২ (শর্টেস্ট পাথ)', slug: 'dp-2' },
    ],
  },
];

export default function ProgrammingPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: '300px' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>প্রোগ্রামিং</h1>
          <p>অ্যালগরিদম এবং ডেটা স্ট্রাকচার টিউটোরিয়ালের সম্পূর্ণ তালিকা</p>
        </div>
      </section>

      <div className="page-wrapper">
        <main className="main-content">
          <div className="page-content">
            <h1>অ্যালগরিদম নিয়ে যত লেখা!</h1>

            {categories.map((cat, i) => (
              <div key={i} className="algo-section animate-in" style={{ animationDelay: `${i * 80}ms` }}>
                <h2 className="algo-category">{cat.name}</h2>
                <ul className="algo-list">
                  {cat.posts.map((post, j) => (
                    <li key={j}>
                      {post.slug ? (
                        <Link href={`/blog/${post.slug}`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                          {post.title}
                        </Link>
                      ) : (
                        <span style={{
                          display: 'flex', alignItems: 'center', gap: '8px',
                          padding: '10px 4px', color: 'var(--text-dim)',
                          borderBottom: '1px solid var(--border)', fontSize: '1rem',
                          fontFamily: 'var(--font-bengali)',
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                          {post.title}
                          <span style={{
                            marginLeft: '8px', fontSize: '0.7rem', fontFamily: 'var(--font-body)',
                            background: 'var(--bg-secondary)', color: 'var(--text-muted)',
                            padding: '2px 8px', borderRadius: '100px', fontWeight: 500,
                            letterSpacing: '0.02em',
                          }}>শীঘ্রই</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
}
