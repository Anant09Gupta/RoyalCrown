import React from 'react';
import { Wallet, TrendingUp, Clock, Award, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface DashboardProps {
  isConnected: boolean;
  walletAddress: string;
}

const Dashboard: React.FC<DashboardProps> = ({ isConnected, walletAddress }) => {
  const portfolioData = {
    totalBalance: 1250.67,
    crownBalance: 45000,
    totalValue: 45.00,
    dailyChange: 5.67,
    weeklyChange: 12.34,
    monthlyChange: -2.45,
  };

  const transactions = [
    { type: 'Mining Reward', amount: '+150 CROWN', value: '+$0.15', time: '2 hours ago', icon: Award, positive: true },
    { type: 'Exchange', amount: '-500 CROWN', value: '-$0.50', time: '5 hours ago', icon: ArrowUpRight, positive: false },
    { type: 'Mining Reward', amount: '+200 CROWN', value: '+$0.20', time: '1 day ago', icon: Award, positive: true },
    { type: 'Deposit', amount: '+1000 CROWN', value: '+$1.00', time: '3 days ago', icon: ArrowDownLeft, positive: true },
  ];

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-8)}`;
  };

  if (!isConnected) {
    return (
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-12 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <Wallet className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Wallet Required</h2>
            <p className="text-gray-300 mb-6">
              Please connect your wallet to view your dashboard
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-xl text-gray-300">
            Welcome back! Here's your portfolio overview.
          </p>
          <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg inline-block">
            <span className="text-green-400 font-medium">
              Connected: {formatAddress(walletAddress)}
            </span>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <Wallet className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">
                ${portfolioData.totalBalance.toFixed(2)}
              </span>
            </div>
            <div className="text-gray-400">Total Portfolio Value</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <span className="text-white font-bold text-sm">CROWN</span>
              </div>
              <span className="text-2xl font-bold text-white">
                {portfolioData.crownBalance.toLocaleString()}
              </span>
            </div>
            <div className="text-gray-400">CROWN Balance</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-green-400">
                +{portfolioData.dailyChange}%
              </span>
            </div>
            <div className="text-gray-400">24h Change</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">
                +{portfolioData.weeklyChange}%
              </span>
            </div>
            <div className="text-gray-400">7d Change</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Transactions</h2>
              <div className="space-y-4">
                {transactions.map((tx, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${tx.positive ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        <tx.icon className={`w-5 h-5 ${tx.positive ? 'text-green-400' : 'text-red-400'}`} />
                      </div>
                      <div>
                        <div className="font-medium text-white">{tx.type}</div>
                        <div className="text-sm text-gray-400">{tx.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${tx.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {tx.amount}
                      </div>
                      <div className="text-sm text-gray-400">{tx.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance & Stats */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Today:</span>
                  <span className="text-green-400 font-bold">+{portfolioData.dailyChange}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">This Week:</span>
                  <span className="text-green-400 font-bold">+{portfolioData.weeklyChange}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">This Month:</span>
                  <span className="text-red-400 font-bold">{portfolioData.monthlyChange}%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Mining Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Mined:</span>
                  <span className="text-white font-bold">2,450 CROWN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mining Power:</span>
                  <span className="text-white font-bold">125 H/s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Rewards:</span>
                  <span className="text-white font-bold">$2.45</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  Start Mining
                </button>
                <button className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-colors">
                  Exchange Tokens
                </button>
                <button className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-colors">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;