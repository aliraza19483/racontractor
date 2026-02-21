import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-white">RA</span>
            <span className="text-primary">CONTRACTOR</span>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Leading the way in premium home construction and interior design. We build dreams that last a lifetime.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/17ts8xuj11/" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/ra.interior.contractor?igsh=MXUzdzg0Z3M1OHE5ZA==" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@Racontractor" className="hover:text-primary transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Design Ideas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Get a Quote</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary">Services</h4>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Modular Kitchens</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Living Room Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Full Home Interiors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Wardrobes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Renovations</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary shrink-0" size={20} />
              <span>734/A, Site-3, NRR Puram, Moti Nagar, Hyderabad, Telangana 500018</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary shrink-0" size={20} />
              <span>+918374897487</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary shrink-0" size={20} />
              <span>farhanahmedansari0333@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} RA Constractor. All rights reserved.</p>
      </div>

      <style>{`
        .bg-secondary { background-color: var(--secondary); }
        .text-gray-400 { color: #9ca3af; }
        .text-gray-500 { color: #6b7280; }
        .border-gray-800 { border-color: #1f2937; }
        .shrink-0 { flex-shrink: 0; }
        .col-span-1 { grid-column: span 1 / span 1; }
      `}</style>
    </footer>
  );
}
