import React from 'react';
import { Pickaxe, ArrowLeftRight, BarChart3, Shield, Zap, Users, Crown, Gem } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Pickaxe,
      title: 'Royal Mining',
      description: 'Mine CROWN tokens through our noble proof-of-stake system and earn rewards fit for royalty.',
      color: 'from-amber-400 to-yellow-500',
    },
    {
      icon: ArrowLeftRight,
      title: 'Crown Exchange',
      description: 'Trade your CROWN tokens with major cryptocurrencies through our royal treasury exchange.',
      color: 'from-red-400 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Royal Analytics',
      description: 'Monitor your kingdom\'s wealth with comprehensive portfolio tracking and royal insights.',
      color: 'from-emerald-400 to-green-500',
    },
    {
      icon: Shield,
      title: 'Crown Security',
      description: 'Protected by the finest royal guards with audited smart contracts and enterprise security.',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Lightning Throne',
      description: 'Experience instant royal decrees with our optimized blockchain infrastructure.',
      color: 'from-purple-400 to-violet-500',
    },
    {
      icon: Crown,
      title: 'Royal Court',
      description: 'Join the noble court of crypto royalty and shape the future of the RoyalCrown kingdom.',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Gem className="w-12 h-12 text-amber-400" />
          </div>
          <h2 className="text-4xl font-bold text-amber-100 mb-4">
            Royal Crown Features
          </h2>
          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
            Discover the noble features that make RoyalCrown the most prestigious memecoin in the realm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-red-900/20 backdrop-blur-sm rounded-xl border border-amber-500/20 hover:bg-red-900/30 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-amber-100 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-amber-200/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;