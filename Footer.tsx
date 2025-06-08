import React from 'react';
import { Crown, Twitter, MessageCircle, Github, Mail, Gem } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const footerLinks = {
    'Royal Platform': ['Mining', 'Exchange', 'Dashboard', 'Whitepaper'],
    'Kingdom Resources': ['Documentation', 'API', 'Help Center', 'Royal Blog'],
    'The Crown': ['About Us', 'Careers', 'Press Kit', 'Contact'],
    'Royal Decree': ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Disclaimer'],
  };

  return (
    <footer className="bg-red-950/60 border-t border-amber-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img 
                  src="/ROYAL CROWN (Colours).png" 
                  alt="Royal Crown" 
                  className="w-10 h-10 rounded-full border-2 border-amber-400/50"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  RoyalCrown
                </span>
                <span className="text-xs text-amber-200/80 -mt-1">MEMECOIN</span>
              </div>
            </div>
            
            <p className="text-amber-200/80 mb-6 leading-relaxed">
              The most prestigious memecoin in the crypto kingdom. Join our royal court 
              and ascend to digital sovereignty with the power of the crown.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-red-900/30 border border-amber-500/20 rounded-lg text-amber-200 hover:text-amber-100 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-amber-100 font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-amber-200/80 hover:text-amber-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-amber-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-200/80 mb-4 md:mb-0 flex items-center">
              <Crown className="w-4 h-4 mr-2" />
              © 2024 RoyalCrown. All royal rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-amber-200/80 text-sm">Royal Contract:</span>
              <div className="px-3 py-1 bg-red-900/30 border border-amber-500/20 rounded-lg">
                <span className="text-amber-300 text-sm font-mono">
                  0x1234...5678
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;