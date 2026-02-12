import React from 'react';
import { User, PenTool, Hammer, Key } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <User size={40} />,
      title: "Meet Our Experts",
      description: "Book an appointment and discuss your requirements with our certified designers."
    },
    {
      icon: <PenTool size={40} />,
      title: "Design & Personalize",
      description: "Co-create your dream home with 3D models and premium material selection."
    },
    {
      icon: <Hammer size={40} />,
      title: "Execution & Build",
      description: "Watch your dream come to life with our 45-day delivery guarantee."
    },
    {
      icon: <Key size={40} />,
      title: "Move In",
      description: "Get the keys to your beautiful new home and start making memories."
    }
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-2">How It Works</h2>
        <p className="text-center text-muted mb-12">Your journey to a dream home in 4 simple steps</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card text-center p-6 bg-white rounded-lg hover:shadow-lg transition-all relative">
              <div className="icon-box w-20 h-20 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>

              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 w-8 border-t-2 border-dashed border-gray-300 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .bg-light { background-color: var(--bg-light); }
        .bg-primary\\/10 { background-color: rgba(212, 175, 55, 0.1); }
        .rounded-full { border-radius: 9999px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .hover\\:shadow-lg:hover { box-shadow: var(--shadow-lg); }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms; }
        .top-16 { top: 4rem; }
        .-right-4 { right: -1rem; }
        .w-8 { width: 2rem; }
        .border-t-2 { border-top-width: 2px; }
        .border-dashed { border-style: dashed; }
        .border-gray-300 { border-color: #d1d5db; }
      `}</style>
    </section>
  );
}
