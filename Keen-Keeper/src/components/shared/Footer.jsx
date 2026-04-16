import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Content */}
        <div className="text-center mb-12">
          
          {/* Logo */}
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            KeenKeeper
          </h2>

          {/* Description */}
          <p className="text-emerald-100 max-w-md mx-auto text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the 
            relationships that matter most.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center mb-16">
          <p className="text-emerald-200 text-sm font-medium mb-4">Social Links</p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/s.b.himel3/" 
              className="w-11 h-11 bg-white/10 hover:bg-white/20 transition-all rounded-full flex items-center justify-center text-2xl"
            >
              <FaInstagram />
            </a>
            
            <a 
              href="https://www.facebook.com/s.b.himel.669113" 
              className="w-11 h-11 bg-white/10 hover:bg-white/20 transition-all rounded-full flex items-center justify-center text-2xl"
            >
              <FaFacebook />
            </a>
            
            <a 
              href="https://x.com/" 
              className="w-11 h-11 bg-white/10 hover:bg-white/20 transition-all rounded-full flex items-center justify-center text-2xl"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-200">
          
          {/* Copyright */}
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          {/* Links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          
        </div>

      </div>
    </footer>
  );
}

export default Footer;