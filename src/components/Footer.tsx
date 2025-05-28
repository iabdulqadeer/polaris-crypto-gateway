
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Polaris</h3>
            <p className="text-secondary-300 leading-relaxed">
              Licensed Polish VASP providing secure crypto and fiat services with regulatory compliance.
            </p>
            <div className="text-sm text-secondary-400">
              Operated by Vertamon SP Z O.O.
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Polaris</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/#features')}
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/#faq')}
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <span className="text-secondary-300">Security</span>
              </li>
              <li>
                <span className="text-secondary-300">Compliance</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/privacy')}
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/terms')}
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <span className="text-secondary-300">Cookie Policy</span>
              </li>
              <li>
                <span className="text-secondary-300">GDPR Compliance</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:support@polaris.exchange"
                className="text-secondary-300 hover:text-white transition-colors block"
              >
                support@polaris.exchange
              </a>
              <div className="text-secondary-400">
                Licensed in Poland
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-2">
              <div className="text-sm text-secondary-400">Accepted Payment Methods</div>
              <div className="flex space-x-3 items-center">
                {/* Visa */}
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center">
                  <span className="text-white font-bold text-[9px] tracking-wider">VISA</span>
                </div>
                
                {/* MasterCard with official overlapping circles */}
                <div className="relative w-6 h-5 flex items-center justify-center">
                  <div className="absolute w-3 h-3 bg-red-500 rounded-full" style={{left: '0px'}}></div>
                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full opacity-90" style={{left: '8px'}}></div>
                </div>
                
                {/* SEPA */}
                <div className="w-8 h-5 bg-primary-600 rounded text-xs flex items-center justify-center">
                  <span className="text-white font-bold text-[8px]">SEPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-400 text-sm">
            © 2024 Vertamon SP Z O.O. All rights reserved.
          </div>
          <div className="text-secondary-400 text-sm mt-4 md:mt-0">
            Licensed Virtual Asset Service Provider (VASP) in Poland
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
