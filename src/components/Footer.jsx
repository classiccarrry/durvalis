import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield, Truck, Award, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="inline-block">
                <div className="border-2 border-red-600 rounded-full px-6 py-2 bg-gray-900/50 backdrop-blur-sm">
                  <span className="text-2xl font-black italic text-white tracking-tight">
                    DURVALIS
                  </span>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-300 max-w-md">
                Premium equine health solutions for healthier, happier horses.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield size={16} className="text-green-500" />
                <span>Veterinarian Approved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Truck size={16} className="text-blue-500" />
                <span>Free Shipping*</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award size={16} className="text-yellow-500" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Quick Links
            </h3>
            <nav className="space-y-3">
              {['Home', 'About', 'Products', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-red-500 transition-colors hover:translate-x-1 duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:support@durvalis.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Mail size={16} />
                </div>
                <span>support@durvalis.com</span>
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Phone size={16} />
                </div>
                <span>+1 (800) 555-1234</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span>123 Equine Way<br />Lexington, KY 40507</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Durvalis. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Professional equine health products
            </p>

            {/* Powered by AppCrafters with anchor tag */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-gray-500">Powered by</span>
              <a
                href="https://appcrafters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors group"
              >
                <Sparkles size={12} className="text-purple-500" />
                <span className="font-medium">AppCrafters</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-white transition-colors">Returns</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-800/30">
          <p className="text-xs text-gray-600 text-center max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> For veterinary use only. Consult a licensed veterinarian before use.
            Always follow label instructions. Keep out of reach of children. Not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;