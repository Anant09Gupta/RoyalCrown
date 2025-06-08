import React from 'react';
import { Crown, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'mining' | 'exchange' | 'dashboard';
  setCurrentPage: (page: 'home' | 'mining' | 'exchange' | 'dashboard') => void;
  isWalletConnected: boolean;
  walletAddress: string;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  isWalletConnected,
  walletAddress,
  onConnectWallet,
  onDisconnectWallet,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'mining', label: 'Mining' },
    { id: 'exchange', label: 'Exchange' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-red-950/80 backdrop-blur-lg border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="relative">
              <img 
                src="/ROYAL CROWN (Colours).png" 
                alt="Royal Crown" 
                className="w-10 h-10 rounded-full border-2 border-amber-400/50 group-hover:border-amber-400 transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                RoyalCrown
              </span>
              <span className="text-xs text-amber-200/80 -mt-1">MEMECOIN</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'text-amber-300 bg-amber-500/20 border border-amber-500/30'
                    : 'text-amber-100 hover:text-amber-300 hover:bg-amber-500/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Wallet Connection */}
          <div className="hidden md:block">
            {isWalletConnected ? (
              <div className="flex items-center space-x-4">
                <div className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                  <span className="text-emerald-300 text-sm font-medium">
                    {formatAddress(walletAddress)}
                  </span>
                </div>
                <button
                  onClick={onDisconnectWallet}
                  className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm font-medium hover:bg-red-500/30 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={onConnectWallet}
                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg text-red-900 font-bold hover:from-amber-400 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/25"
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-amber-200 hover:text-amber-100 hover:bg-amber-500/20"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-500/30">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as any);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-left transition-colors ${
                    currentPage === item.id
                      ? 'text-amber-300 bg-amber-500/20'
                      : 'text-amber-100 hover:text-amber-300 hover:bg-amber-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="mt-4 pt-4 border-t border-amber-500/30">
              {isWalletConnected ? (
                <div className="space-y-2">
                  <div className="px-3 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                    <span className="text-emerald-300 text-sm font-medium">
                      {formatAddress(walletAddress)}
                    </span>
                  </div>
                  <button
                    onClick={onDisconnectWallet}
                    className="w-full px-3 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm font-medium hover:bg-red-500/30 transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={onConnectWallet}
                  className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg text-red-900 font-bold hover:from-amber-400 hover:to-yellow-400 transition-all"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;