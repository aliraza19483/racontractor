import React, { useState } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <header className="header">
      <div className="container flex justify-between items-center" style={{ height: '80px' }}>
        {/* Logo */}
        <div className="logo text-2xl font-bold flex items-center gap-2">
          <a href="/home" className="text-secondary" >RA</a>
          <a href="/home" className="text-primary" >CONTRACTOR</a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#projects" className="nav-link">Design Ideas</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#magazine" className="nav-link">Magazine</a>
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToContact(); }}
            className="flex items-center gap-2 text-sm font-semibold text-secondary"
          >
            <span className="text-primary"><b>Fill a Form</b></span>
          </a>
          <button onClick={scrollToContact} className="btn btn-primary">Get Free Quote</button>

          <a href="#" className="text-secondary"><User size={24} /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-toggle md:hidden ${isOpen ? 'open' : 'text-secondary'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-menu md:hidden absolute top-[80px] left-0 w-full shadow-lg p-4 flex flex-col gap-4 z-50">
          <a href="#projects" className="nav-link">Design Ideas</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#magazine" className="nav-link">Magazine</a>

          <hr />
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToContact(); }}
            className="text-primary font-semibold"
          >
            Fill a Form
          </a>
          <a href="#" className="text-white font-semibold">Join as Partner</a>
          <button onClick={scrollToContact} className="btn btn-primary w-full">Get Free Quote</button>

        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #ffffffff;
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-shadow: var(--shadow);
        }
        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 6px;
          transition: all 0.2s ease;
          border: none;
          background: transparent;
          cursor: pointer;
        }
        .mobile-toggle.open {
          background-color: var(--secondary);
          color: white;
        }
        .mobile-menu {
          background-color: var(--secondary);
          color: white;
        }
        .mobile-menu .nav-link {
          color: rgba(255, 255, 255, 0.9);
        }
        .mobile-menu .nav-link:hover {
          color: var(--primary);
        }
        .mobile-menu hr {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .text-white {
          color: white;
        }
        .hidden { display: none; }
        @media (min-width: 768px) {
          .hidden { display: initial;}
          .md\\:hidden { display: none; }
          .md\\:flex { display: flex; }
      }

      `}</style>
    </header>
  );
}
