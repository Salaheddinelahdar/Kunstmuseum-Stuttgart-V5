import React from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="bg-[#8B5E3C] text-[#F9F6F1] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm text-[#F0E6DB] leading-relaxed">
              Kunstmuseum Stuttgart is your premier destination for unique pre-loved items. 
              We're committed to sustainability and helping you find quality second-hand treasures.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-[#F0E6DB] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#F0E6DB]">123 Museum St, Stuttgart, Germany</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-[#F0E6DB] mr-3" />
                <a href="tel:+49123456789" className="text-sm text-[#F0E6DB] hover:text-white transition-colors">+49 123 456 789</a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-[#F0E6DB] mr-3" />
                <a href="mailto:info@kunstmuseum-stuttgart.com" className="text-sm text-[#F0E6DB] hover:text-white transition-colors">info@kunstmuseum-stuttgart.com</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <p className="text-sm text-[#F0E6DB] mb-3">Stay connected with us on social media</p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-[#A67C52] hover:bg-[#D2691E] flex items-center justify-center text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-full bg-[#A67C52] hover:bg-[#25D366] flex items-center justify-center text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.2.3-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.27-.465-2.42-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.02-.465.13-.615.136-.135.3-.345.45-.525.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.046 1.02-1.046 2.475s1.07 2.865 1.219 3.075c.149.195 2.1 3.195 5.076 4.485.715.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.878 9.878 0 01-1.5-5.26c.001-5.445 4.436-9.885 9.888-9.885 2.64 0 5.118 1.03 6.984 2.898 1.87 1.86 2.897 4.35 2.897 6.99-.004 5.444-4.404 9.885-9.865 9.885M20.52 3.448C18.24 1.245 15.24 0 12.03 0 5.64 0 .5 5.16.5 11.52c0 2.1.549 4.14 1.595 5.94L0 24l6.765-1.785a11.94 11.94 0 005.58 1.38h.006c6.39 0 11.53-5.16 11.53-11.52 0-3.18-1.26-6.165-3.56-8.415"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="h-9 w-9 rounded-full bg-[#A67C52] hover:bg-[#69C9D0] flex items-center justify-center text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M28.646 10.667c-2.98 0-5.413-2.433-5.413-5.413a1.254 1.254 0 0 0-1.253-1.254h-3.22v17.04a2.5 2.5 0 1 1-2.5-2.5c.138 0 .273.014.406.04V15.56a6.667 6.667 0 1 0 6.667 6.667v-8.12c1.553 1.053 3.427 1.66 5.413 1.66.692 0 1.254-.561 1.254-1.254v-3.22h-1.254z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@kunstmuseum-stuttgart.com" 
                aria-label="Email"
                className="h-9 w-9 rounded-full bg-[#A67C52] hover:bg-[#D2691E] flex items-center justify-center text-white transition-colors md:hidden"
              >
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[#A67C52] pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[#F0E6DB] text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} Kunstmuseum Stuttgart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  // Add your privacy policy logic here
                  console.log('Privacy Policy clicked');
                }} 
                className="text-xs text-[#F0E6DB] hover:text-white transition-colors focus:outline-none"
              >
                Privacy Policy
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  // Add your terms of service logic here
                  console.log('Terms of Service clicked');
                }} 
                className="text-xs text-[#F0E6DB] hover:text-white transition-colors focus:outline-none"
              >
                Terms of Service
              </button>
              <a 
                href="/sitemap" 
                className="text-xs text-[#F0E6DB] hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
