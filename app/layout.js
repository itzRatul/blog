import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github-dark.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: {
    default: 'রাতুলের ব্লগ | প্রোগ্রামিং, অ্যালগরিদম ও AI',
    template: '%s | রাতুলের ব্লগ',
  },
  description: 'বাংলায় প্রোগ্রামিং, অ্যালগরিদম এবং AI Research — MD Ratul Hossen এর ব্লগ',
  openGraph: {
    siteName: 'রাতুলের ব্লগ',
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@itzRatul',
  },
  metadataBase: new URL('https://itzratul-blog.vercel.app'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
