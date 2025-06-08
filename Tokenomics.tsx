import React from 'react';
import { PieChart, Lock, Users, Rocket, Gift, Crown } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const distribution = [
    {
      category: 'Royal Treasury',
      percentage: 30,
      amount: '300,000',
      icon: Users,
      color: 'from-amber-400 to-yellow-500',
      description: 'Available for public acquisition',
    },
    {
      category: 'Mining Rewards',
      percentage: 25,
      amount: '250,000',
      icon: PieChart,
      color: 'from-red-400 to-rose-500',
      description: 'Distributed through royal mining',
    },
    {
      category: 'Crown Vault',
      percentage: 20,
      amount: '200,000',
      icon: Lock,
      color: 'from-emerald-400 to-green-500',
      description: 'Secured for trading liquidity',
    },
    {
      category: 'Kingdom Development',
      percentage: 15,
      amount: '150,000',
      icon: Rocket,
      color: 'from-blue-400 to-indigo-500',
      description: 'Royal platform expansion fund',
    },
    {
      category: 'Royal Gifts',
      percentage: 10,
      amount: '100,000',
      icon: Gift,
      color: 'from-purple-400 to-violet-500',
      description: 'Community rewards & royal airdrops',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-950/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Crown className="w-12 h-12 text-amber-400" />
          </div>
          <h2 className="text-4xl font-bold text-amber-100 mb-4">
            Royal Tokenomics
          </h2>
          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
            Transparent and noble distribution of RoyalCrown tokens across the kingdom
          </p>
        </div>

        {/* Token Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-red-900/30 backdrop-blur-sm rounded-xl border border-amber-500/20">
            <div className="text-2xl font-bold text-amber-100 mb-2">CROWN</div>
            <div className="text-amber-200/80">Royal Symbol</div>
          </div>
          
          <div className="text-center p-6 bg-red-900/30 backdrop-blur-sm rounded-xl border border-amber-500/20">
            <div className="text-2xl font-bold text-amber-100 mb-2">1,000,000</div>
            <div className="text-amber-200/80">Total Supply</div>
          </div>
          
          <div className="text-center p-6 bg-red-900/30 backdrop-blur-sm rounded-xl border border-amber-500/20">
            <div className="text-2xl font-bold text-amber-100 mb-2">BSC</div>
            <div className="text-amber-200/80">Royal Chain</div>
          </div>
          
          <div className="text-center p-6 bg-red-900/30 backdrop-blur-sm rounded-xl border border-amber-500/20">
            <div className="text-2xl font-bold text-amber-100 mb-2">3%</div>
            <div className="text-amber-200/80">Royal Tax</div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visualization */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Pie Chart Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-900/40 to-amber-900/40 backdrop-blur-sm border-2 border-amber-500/30"></div>
              
              {/* Chart Segments (Visual representation) */}
              <div className="absolute inset-4 rounded-full bg-gradient-conic from-amber-400 via-red-500 via-emerald-500 via-blue-500 to-purple-500 opacity-80"></div>
              
              {/* Center */}
              <div className="absolute inset-1/3 rounded-full bg-red-950/90 backdrop-blur-sm border-2 border-amber-400/50 flex items-center justify-center">
                <div className="text-center">
                  <Crown className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-amber-100">CROWN</div>
                  <div className="text-sm text-amber-200/80">Distribution</div>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="space-y-4">
            {distribution.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-red-900/20 backdrop-blur-sm rounded-xl border border-amber-500/20 hover:bg-red-900/30 hover:border-amber-500/40 transition-colors"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} mr-4 shadow-lg`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-amber-100">{item.category}</h3>
                    <span className="text-lg font-bold text-amber-300">{item.percentage}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-amber-200/80">{item.description}</p>
                    <span className="text-sm text-amber-200">{item.amount} CROWN</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;