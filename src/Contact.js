import React from "react";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

function Contact() {
  const handleBackClick = (e) => {
    e.preventDefault();
    // Navigate to home page by changing the URL
    window.location.href = '/';
  };
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 5:00 PM' }
  ];

  const contactMethods = [
    {
      name: 'Email',
      value: 'info@kunstmuseum-stuttgart.com',
      icon: <EnvelopeIcon className="h-6 w-6 text-[#8B5E3C]" />,
      href: 'mailto:info@kunstmuseum-stuttgart.com'
    },
    {
      name: 'Phone',
      value: '+49 123 456 789',
      icon: <PhoneIcon className="h-6 w-6 text-[#8B5E3C]" />,
      href: 'tel:+49123456789'
    },
    {
      name: 'WhatsApp',
      value: '+49 123 456 789',
      icon: (
        <svg className="h-6 w-6 text-[#8B5E3C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.2.3-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.27-.465-2.42-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.02-.465.13-.615.136-.135.3-.345.45-.525.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.046 1.02-1.046 2.475s1.07 2.865 1.219 3.075c.149.195 2.1 3.195 5.076 4.485.715.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.878 9.878 0 01-1.5-5.26c.001-5.445 4.436-9.885 9.888-9.885 2.64 0 5.118 1.03 6.984 2.898 1.87 1.86 2.897 4.35 2.897 6.99-.004 5.444-4.404 9.885-9.865 9.885M20.52 3.448C18.24 1.245 15.24 0 12.03 0 5.64 0 .5 5.16.5 11.52c0 2.1.549 4.14 1.595 5.94L0 24l6.765-1.785a11.94 11.94 0 005.58 1.38h.006c6.39 0 11.53-5.16 11.53-11.52 0-3.18-1.26-6.165-3.56-8.415z"/>
        </svg>
      ),
      href: 'https://wa.me/49123456789'
    }
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/KunstmuseumStuttgart/'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      href: 'https://www.instagram.com/kunstmuseumstuttgart/'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32">
          <path d="M28.646 10.667c-2.98 0-5.413-2.433-5.413-5.413a1.254 1.254 0 0 0-1.253-1.254h-3.22v17.04a2.5 2.5 0 1 1-2.5-2.5c.138 0 .273.014.406.04V15.56a6.667 6.667 0 1 0 6.667 6.667v-8.12c1.553 1.053 3.427 1.66 5.413 1.66.692 0 1.254-.561 1.254-1.254v-3.22h-1.254z"/>
        </svg>
      ),
      href: 'https://www.tiktok.com/@kunstmuseum.stuttgart'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F1] relative">
      {/* Mobile Back Button - Only visible on small screens */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button
          onClick={handleBackClick}
          className="flex items-center justify-center bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 transform hover:scale-105 active:scale-95"
          aria-label="Back to home"
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[#8B5E3C]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
      </div>
      {/* Hero Section */}
      <div className="bg-[#8B5E3C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl mr-4">{method.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-900">{method.name}</h3>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">Business Hours</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.day}</span>
                    <span className="font-medium text-gray-900">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow h-full">
              <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.272781349466!2d9.18394031567276!3d48.78468597928444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db4a4f3a7c9d%3A0x5e7c5a7a9b9b9b9b!2sKunstmuseum%20Stuttgart!5e0!3m2!1sen!2sde!4v1623523456789!5m2!1sen!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kunstmuseum Stuttgart Location"
                ></iframe>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-gray-900">Kunstmuseum Stuttgart</h3>
                <p className="text-gray-600">Kleiner Schloßplatz 1, 70173 Stuttgart, Germany</p>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-[#A67C52] hover:bg-[#8B5E3C] flex items-center justify-center text-white transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;