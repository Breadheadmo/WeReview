import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import CarInspectProLogo from './CarInspectProLogo';
// You can replace this with your actual logo import
// import CarInspectProLogo from './CarInspectProLogo';



const Footer = () => (
  <footer className="bg-dark-slate text-white pt-12 pb-6 mt-16 border-t border-light-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
      {/* Logo & Description */}
      <div className="flex flex-col items-start">
  <CarInspectProLogo className="mb-2" textClassName="text-white" />
        <span className="text-base text-muted-gray mb-4">Trusted Car Inspections. Peace of Mind for Every Purchase.</span>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold mb-3">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-brand-green">Home</Link></li>
          <li><Link to="/about" className="hover:text-brand-green">About</Link></li>
          <li><Link to="/services" className="hover:text-brand-green">Services</Link></li>
          <li><Link to="/contact" className="hover:text-brand-green">Contact Us</Link></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-bold mb-3">Contact Us</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-brand-green" /><span>55 Richards Drive, Halfway House, Midrand, 1685</span></li>
          <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-brand-green" /><span>+27 123 456 7890</span></li>
          <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-brand-green" /><span>info@carinspectpro.co.za</span></li>
        </ul>
      </div>
      {/* Social Media */}
      <div>
        <h3 className="text-lg font-bold mb-3">Follow Us</h3>
        <div className="flex gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-muted-gray hover:text-brand-green transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-gray hover:text-brand-green transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-muted-gray hover:text-brand-green transition" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-light-border mt-10" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center mt-6">
  <div className="text-xs text-muted-gray">&copy; {new Date().getFullYear()} WeReview. All rights reserved.</div>
      <div className="flex gap-6 mt-2 md:mt-0">
        <Link to="/privacy-policy" className="text-xs text-muted-gray hover:text-brand-green">Privacy Policy</Link>
        <Link to="/terms-of-service" className="text-xs text-muted-gray hover:text-brand-green">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
