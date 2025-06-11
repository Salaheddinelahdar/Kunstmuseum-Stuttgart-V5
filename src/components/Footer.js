import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <footer id="footer" className="bg-[#C19A6B] border-t border-[#8B5E3C] mt-8 py-8 rounded-t-2xl">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-12">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="h-8 w-8 text-[#8B5E3C] hover:text-[#D2691E] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.596 0 0 .592 0 1.326v21.348C0 23.408.596 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.408 24 22.674V1.326C24 .592 23.404 0 22.675 0"/></svg>
          </a>
           <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            {/* Single-color WhatsApp Outline Icon for consistency */}
            <svg className="h-8 w-8 text-[#8B5E3C] hover:text-[#25D366] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 2.02.6 3.97 1.736 5.606L2.057 22l4.394-1.18A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.793 14.793c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.07-.26-.13-1.09-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32.02-.44-.02-.12-.19-.47-.36-.81-.17-.34-.34-.29-.47-.3-.12-.01-.27-.01-.42-.01-.15 0-.39.06-.59.29-.2.23-.77.75-.77 1.83s.79 2.13.9 2.28c.11.15 1.54 2.35 3.78 3.21.53.19.94.31 1.27.41.54.17 1.03.15 1.43.1.44-.06 1.34-.55 1.53-1.08.19-.53.19-.93.13-1.07-.06-.14-.23-.23-.46-.34z"/>
            </svg>
          </a>
           <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            {/* Official TikTok SVG */}
            <svg className="h-8 w-8 text-[#8B5E3C] hover:text-[#69C9D0] transition-colors" viewBox="0 0 32 32" fill="currentColor"><path d="M28.646 10.667c-2.98 0-5.413-2.433-5.413-5.413a1.254 1.254 0 0 0-1.253-1.254h-3.22v17.04a2.5 2.5 0 1 1-2.5-2.5c.138 0 .273.014.406.04V15.56a6.667 6.667 0 1 0 6.667 6.667v-8.12c1.553 1.053 3.427 1.66 5.413 1.66.692 0 1.254-.561 1.254-1.254v-3.22h-1.254z"/></svg>
          </a>
          <a href="mailto:your@email.com" aria-label="Email">
            <EnvelopeIcon className="h-8 w-8 text-[#8B5E3C] hover:text-[#D2691E] transition-colors" />
          </a>
        </div>
        <p className="text-[#F9F6F1] text-sm mt-2">&copy; {new Date().getFullYear()} Kunstmuseum Stuttgart. Cash only. Contact via links above.</p>
      </div>
    </footer>
  );
}

export default Footer;
