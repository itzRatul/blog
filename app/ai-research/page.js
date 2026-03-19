import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'AI Research | রাতুলের ব্লগ',
  description: 'AI Research, LLM, Transformer Architecture নিয়ে আমার গবেষণা',
};

export default function AIResearchPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: '300px' }}>
        <div className="hero-content">
          <h1>AI Research</h1>
          <p>Artificial Intelligence, Large Language Models এবং Transformer Architecture নিয়ে আমার গবেষণা ও পরীক্ষা-নিরীক্ষা</p>
        </div>
      </section>

      <div className="page-wrapper">
        <main className="main-content">
          <div className="page-content">
            <h1>AI Research</h1>

            <p>
              আমি বর্তমানে Artificial Intelligence — বিশেষ করে Large Language Models (LLMs) নিয়ে গবেষণা করছি।
              Transformer architecture, self-attention mechanisms, এবং model fine-tuning নিয়ে কাজ করছি।
            </p>

            <h2>আমার AI Research Interests</h2>
            <ul>
              <li><strong>Large Language Models (LLMs):</strong> Architecture understanding এবং practical deployment</li>
              <li><strong>Local LLM Deployment:</strong> Ollama এবং Hugging Face integration ব্যবহার করে লোকাল মডেল চালানো</li>
              <li><strong>Transformer Architecture:</strong> Self-attention mechanisms, encoder-decoder structures</li>
              <li><strong>Model Fine-Tuning:</strong> Parameter-efficient training techniques</li>
              <li><strong>AI Agent Development:</strong> n8n দিয়ে workflow automation</li>
            </ul>

            <h2>M.E.R.C.Y — AI Agent System</h2>
            <p>
              আমি একটি context-aware AI companion তৈরি করেছি যেটি Ollama ব্যবহার করে লোকালি LLM ডিপ্লয় করে।
              এটিতে custom memory management system আছে — user profiling, conversation history retention,
              এবং task/reminder tracking সিস্টেমসহ। Adaptive personality architecture ডিজাইন করেছি
              যেটি dynamic mood-based responses দিতে পারে।
            </p>
            <p>
              <a href="https://github.com/itzRatul/M.E.R.C.Y" target="_blank" rel="noopener noreferrer">
                GitHub: M.E.R.C.Y →
              </a>
            </p>

            <h2>Project Rainfall — Data Analysis &amp; Prediction</h2>
            <p>
              ২৪ বছরের (২০০১–২০২৪) দৈনিক বৃষ্টিপাতের ডেটা প্রসেস এবং অ্যানালাইজ করেছি।
              Automated data pipelines তৈরি করেছি যেটি CSV এবং Excel ফরম্যাট হ্যান্ডল করতে পারে।
              Linear regression models ব্যবহার করে future rainfall trends forecast করেছি।
            </p>
            <p>
              <a href="https://github.com/itzRatul/project-rainfall" target="_blank" rel="noopener noreferrer">
                GitHub: Project Rainfall →
              </a>
            </p>

            <h2>ML Stack</h2>
            <ul>
              <li><strong>Deep Learning &amp; ML Base:</strong> PyTorch, Scikit-learn</li>
              <li><strong>Data Processing Pipeline:</strong> NumPy, Pandas</li>
              <li><strong>Visualization &amp; Evaluation:</strong> Matplotlib, Seaborn</li>
            </ul>

            <blockquote>
              এই সেকশনে শীঘ্রই আরো AI research related posts এবং experiments যোগ করা হবে।
              আমার লক্ষ্য হলো scalable LLMs from scratch তৈরি করা।
            </blockquote>
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
}
