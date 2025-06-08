import React from 'react';
import { Crown, Sparkles, TrendingUp, Shield, Gem } from 'lucide-react';

interface HeroProps {
  onConnectWallet: () => void;
  isConnected: boolean;
}

const Hero: React.FC<HeroProps> = ({ onConnectWallet, isConnected }) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500/20 border border-amber-500/40 backdrop-blur-sm mb-8">
            <Gem className="w-5 h-5 text-amber-300 mr-2" />
            <span className="text-amber-200 text-sm font-medium">
              The Royal Meme Coin Revolution
            </span>
          </div>

          {/* Royal Crown Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/ROYAL CROWN (Colours).png" 
                alt="Royal Crown" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-400/50 shadow-2xl shadow-amber-500/25"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              RoyalCrown
            </span>
            <br />
            <span className="text-amber-100 text-4xl md:text-5xl">Memecoin</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-amber-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ascend to crypto royalty with RoyalCrown, the most prestigious memecoin in the kingdom. 
            Mine, trade, and rule your digital empire with the power of the crown.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {!isConnected ? (
              <button
                onClick={onConnectWallet}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl text-red-900 font-bold text-lg hover:from-amber-400 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/25"
              >
                Claim Your Crown
              </button>
            ) : (
              <div className="px-8 py-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                <span className="text-emerald-300 font-bold text-lg flex items-center justify-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Crown Connected ✓
                </span>
              </div>
            )}
            
            <button className="px-8 py-4 bg-red-800/50 backdrop-blur-sm border border-amber-500/30 rounded-xl text-amber-100 font-bold text-lg hover:bg-red-800/70 transition-all">
              Royal Whitepaper
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-red-900/30 backdrop-blur-sm rounded-xl border border-amber-500/20">
              <div className="flex justify-center mb-4">
                <Crown className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-amber-100 mb-2">1,000,000</div>
              <div className="text-amber-200/80">Royal Supply</div>
            </div>

            <div className="text-center p-6 bg-red-900/30 backdrop-blur-sm rounded-xl border border-amber-500/20">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-amber-100 mb-2">$0.001</div>
              <div className="text-amber-200/80">Crown Price</div>
            </div>

            <div className="text-center p-6 bg-red-900/30 backdrop-blur-sm rounded-xl border border-amber-500/20">
              <div className="flex justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-amber-100 mb-2">5,847</div>
              <div className="text-amber-200/80">Royal Subjects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Royal Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;