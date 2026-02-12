import React, { useState, useEffect } from 'react';
import room from '../assets/Portfolio/room.jpeg';
import p19 from '../assets/Portfolio/project19.jpeg';
import p20 from '../assets/Portfolio/project20.jpeg';
import p17 from '../assets/Portfolio/project17.jpeg';
import p18 from '../assets/Portfolio/project18.jpeg';
import p15 from '../assets/Portfolio/project15.jpeg';

const images = [room, p19, p20, p17, p18, p15];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero section relative flex items-center" style={{ minHeight: '85vh', paddingTop: '80px' }}>
      {/* Slider Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >

            <img
              src={img}
              alt={`Hero Background ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>


      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content Box */}
        <div className="hero-content bg-white/95 p-8 md:p-12 rounded-lg shadow-xl backdrop-blur-sm max-w-lg">
          <div className="badge mb-4 inline-block">WELCOME 2026 OFFER</div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
            Design Your <span className="text-primary">Dream Home</span> With Us
          </h1>
          <p className="text-muted mb-6 text-lg">
            Experience premium construction and interior design services tailored to your lifestyle.
          </p>

          <div className="offer-box border-l-4 border-primary pl-4 mb-8">
            <p className="text-xl font-bold text-secondary">FLAT 25% OFF</p>
            <p className="text-sm text-muted">On Complete Home Interiors*</p>
          </div>

          <div className="flex flex-col gap-3">
            <button onClick={() => window.location.href = 'https://wa.me/918374897487'} className="btn btn-primary w-full text-lg py-4 shadow-lg">Book A Free Consultation</button>
            <p className="text-center text-sm text-muted">Or call us at <span className="text-primary font-semibold">+918374897487</span></p>
            <br />
            <a href="https://photos.app.goo.gl/oXLJhAdXo3mSZ6LP8"
              className="btn-clickHere"
            >Click here to see work</a>
          </div>
        </div>

        {/* Empty col for spacing on large screens if needed, or visual elements */}
        <div className="hidden md:block"></div>
      </div>

      <style>{`
      .btn-clickHere{
        background-color: var(--primary);
        color: white;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 250px;
        height: 50px;
        text-align: center;
        padding-top: 10px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      .btn-clickHere:hover{
        background-color: var(--secondary);
        color: white;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .text-center.text-sm.text-muted{
        padding-top: 20px;
      }
        .bg-black\\/40 { background-color: rgba(0,0,0,0.4); }
        .bg-white\\/95 { background-color: rgba(255,255,255,0.95); }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .relative { position: relative; }
        .z-0 { z-index: 0; }
        .z-10 { z-index: 10; }
        .max-w-lg { max-width: 32rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
        .border-l-4 { border-left-width: 4px; }
        .pl-4 { padding-left: 1rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .p-8 { padding: 2rem; }
        .w-full { width: 100%; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .opacity-0 { opacity: 0; }
        .opacity-100 { opacity: 1; }
        .transition-opacity { transition: opacity 1s ease-in-out; }
        @media (min-width: 768px) {

          .md\\:p-12 { padding: 3rem; }
          .md\\:text-5xl { font-size: 3rem; }
        }
      `}</style>
    </section>
  );
}
