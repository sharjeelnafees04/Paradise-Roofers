import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-2 text-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left Section - Email */}
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@paradiseroofers.com" className="hover:underline">
              info@paradiseroofers.com
            </a>
          </div>

          {/* Center Section - Phone (Orange Background) */}
          <div 
            className="flex items-center gap-2 px-4 py-1 rounded-full font-semibold"
            style={{ backgroundColor: 'rgb(255, 156, 69)', color: 'rgb(0, 0, 0)' }}
          >
            <Phone className="h-4 w-8" />
            <a href="tel:437-564-2790" className="hover:underline">
              +1 437-564-2790
            </a>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex items-center gap-3">
            <span className="text-white/70 text-xs uppercase tracking-wider hidden md:inline">
              Follow Us:
            </span>
            <div className="flex items-center gap-2">
              <a 
                href="https://facebook.com/paradiseroofers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/paradiseroofers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com/paradiseroofers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}