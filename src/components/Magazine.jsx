import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import InteriorDesignTrends2026 from '../assets/magazine/2026 Interior Design Trends.avif';
import SustainableConstruction from '../assets/magazine/Sustainable Construction.avif';
import SmartHomeIntegration from '../assets/magazine/Smart Home Integration.avif';
import MaximizingSmallSpaces from '../assets/magazine/Maximizing Small Spaces.avif';

const articles = [
  {
    id: 1,
    title: "2026 Interior Design Trends",
    category: "Design",
    image: InteriorDesignTrends2026,
    excerpt: "Discover the top color palettes and materials defining luxury homes this year."
  },
  {
    id: 2,
    title: "Sustainable Construction",
    category: "Architecture",
    image: SustainableConstruction,
    excerpt: "How we're using eco-friendly materials to build better, longer-lasting homes."
  },
  {
    id: 3,
    title: "Smart Home Integration",
    category: "Technology",
    image: SmartHomeIntegration,
    excerpt: "The future of living: Seamlessly blending technology with comfort."
  },
  {
    id: 4,
    title: "Maximizing Small Spaces",
    category: "Renovation",
    image: MaximizingSmallSpaces,
    excerpt: "Creative solutions for urban apartments and compact living areas."
  }
];

export default function Magazine() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };

  return (
    <section id="magazine" className="magazine section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div className="header-box mb-12 text-center">
          <span className="badge text-primary font-bold tracking-widest uppercase text-sm">Our Blog</span>
          <h2 className="text-3xl font-bold text-secondary mt-2">From Our Magazine</h2>
        </div>

        <div className="slider-container relative">
          <button onClick={prevSlide} className="slider-btn prev-btn" aria-label="Previous article">
            <ChevronLeft size={24} />
          </button>

          <div className="slider-track overflow-hidden">
            {/* 
                We show 1 card on mobile, 2 on tablet, 3 on desktop. 
                For simplicity in this non-Tailwind setup, we'll just show one active card 
                or a simple flex row that slides. Let's do a simple one-main-card view 
                or a grid that shifts.
                
                Actually, a better approach for a "slider" in this constrained env 
                is to map the current index to the visible set.
             */}
            <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.slice(0, 3).map((article, idx) => {
                // logic to show a window of articles based on currentIndex is complex to do purely with inline styles/basic css
                // without a library. Let's simplify: Display all 3 static for desktop, 
                // or make it a real single-item slider. 

                // Let's implement a proper carousel that shifts.
                // But strictly for the requested "Slider that loops".

                // Let's go with a simple active card highlight or just show one big card for now 
                // to ensure it works reliably, OR iterate through the array.

                // Revised: Display 3 cards, but calculate which ones based on index.
                const item = articles[(currentIndex + idx) % articles.length];
                return (
                  <div key={item.id} className="card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="img-container h-48 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary uppercase">{item.category}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3 text-secondary">{item.title}</h3>
                      <p className="text-muted text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                      <a href="#" className="flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
                        Read Article <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button onClick={nextSlide} className="slider-btn next-btn" aria-label="Next article">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .magazine {
          background-color: #f8fafc;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          color: #334155;
          transition: all 0.2s;
        }
        .slider-btn:hover {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        .prev-btn { left: -20px; }
        .next-btn { right: -20px; }

        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        /* Utils shim */
        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .relative { position: relative; }
        .overflow-hidden { overflow: hidden; }
        .w-full { width: 100%; }
        .object-cover { object-fit: cover; }
        .h-48 { height: 12rem; }
        .p-6 { padding: 1.5rem; }
        .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
        .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); }
        .transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .hover\\:scale-105:hover { transform: scale(1.05); }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-1 { gap: 0.25rem; }
        .hover\\:gap-2:hover { gap: 0.5rem; }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .mt-2 { margin-top: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-12 { margin-bottom: 3rem; }
        .tracking-widest { letter-spacing: 0.1em; }
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
      `}</style>
    </section>
  );
}
