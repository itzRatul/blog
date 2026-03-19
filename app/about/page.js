import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'আমার সম্পর্কে | রাতুলের ব্লগ',
  description: 'MD Ratul Hossen — Aspiring AI Researcher, CSE Student at DIU',
};

export default function AboutPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: '300px' }}>
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>আমার সম্পর্কে</h1>
          <p>MD Ratul Hossen</p>
        </div>
      </section>

      <div className="page-wrapper">
        <main className="main-content">
          <div className="page-content">
            <h1>আমার সম্পর্কে</h1>
            
            <p>
              আমি <strong>MD Ratul Hossen</strong>। আমি বর্তমানে Daffodil International University (DIU)-তে 
              Computer Science & Engineering বিভাগে পড়াশোনা করছি। 
            </p>
            <p>
              আমি মূলত একজন Aspiring AI Researcher এবং LLM Enthusiast। Python, Data Analysis, এবং Machine Learning নিয়ে কাজ করতে পছন্দ করি। এর পাশাপাশি C এবং C++ দিয়ে কোডিং সমস্যা সমাধান (Problem Solving) করতে ভালোবাসি। 
            </p>
            <p>
              আমার তৈরি কিছু প্রজেক্ট (যেমন: M.E.R.C.Y AI Agent, Project Rainfall) আমার <a href="https://github.com/itzRatul" target="_blank" rel="noopener noreferrer">GitHub Profile</a>-এ পাওয়া যাবে।
            </p>
            
            <h3>যোগাযোগ</h3>
            <ul>
              <li><strong>GitHub:</strong> <a href="https://github.com/itzRatul" target="_blank" rel="noopener noreferrer">itzRatul</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mdratulhossen" target="_blank" rel="noopener noreferrer">mdratulhossen</a></li>
              <li><strong>ইমেইল:</strong> <a href="mailto:251-15-596@diu.edu.bd">251-15-596@diu.edu.bd</a></li>
            </ul>
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
}
