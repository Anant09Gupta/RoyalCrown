import React, { useState, useEffect } from 'react';
import { Pickaxe, Zap, Trophy, Clock, TrendingUp } from 'lucide-react';

interface MiningProps {
  isConnected: boolean;
}

const Mining: React.FC<MiningProps> = ({ isConnected }) => {
  const [miningActive, setMiningActive] = useState(false);
  const [hashRate, setHashRate] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (miningActive && isConnected) {
      interval = setInterval(() => {
        setHashRate(prev => prev + Math.random() * 10);
        setEarnings(prev => prev + Math.random() * 0.001);
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [miningActive, isConnected]);

  const toggleMining = () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    setMiningActive(!miningActive);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Mining Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start mining CROWN tokens and earn passive rewards with our proof-of-stake algorithm
          </p>
        </div>

        {!isConnected ? (
          <div className="text-center p-12 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <Pickaxe className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Wallet Required</h2>
            <p className="text-gray-300 mb-6">
              Please connect your wallet to start mining CROWN tokens
            </p>
          </div>
        ) : (
          <>
            {/* Mining Control */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
                <div className="mb-6">
                  <div className={`inline-flex p-6 rounded-full ${miningActive ? 'bg-green-500/20 border-green-500/30' : 'bg-gray-500/20 border-gray-500/30'} border-2`}>
                    <Pickaxe className={`w-12 h-12 ${miningActive ? 'text-green-400' : 'text-gray-400'}`} />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">
                  Mining Status: {miningActive ? 'Active' : 'Inactive'}
                </h2>
                
                <button
                  onClick={toggleMining}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                    miningActive
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                  }`}
                >
                  {miningActive ? 'Stop Mining' : 'Start Mining'}
                </button>
              </div>
            </div>

            {/* Mining Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">
                    {hashRate.toFixed(2)}
                  </span>
                </div>
                <div className="text-gray-400">Hash Rate (H/s)</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="w-8 h-8 text-green-400" />
                  <span className="text-2xl font-bold text-white">
                    {earnings.toFixed(6)}
                  </span>
                </div>
                <div className="text-gray-400">CROWN Earned</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8 text-blue-400" />
                  <span className="text-2xl font-bold text-white">
                    {formatTime(timeElapsed)}
                  </span>
                </div>
                <div className="text-gray-400">Mining Time</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                  <span className="text-2xl font-bold text-white">
                    12.5%
                  </span>
                </div>
                <div className="text-gray-400">APY Rate</div>
              </div>
            </div>

            {/* Mining Pool Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Pool Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Pool Hash Rate:</span>
                    <span className="text-white font-bold">2.5 TH/s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Active Miners:</span>
                    <span className="text-white font-bold">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Pool Fee:</span>
                    <span className="text-white font-bold">2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Next Reward:</span>
                    <span className="text-white font-bold">~4 hours</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Mining Tips</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Keep your mining session active for higher rewards</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Stake more CROWN tokens to increase your mining power</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Join our Discord for mining strategies and updates</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Rewards are distributed every 24 hours automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mining;