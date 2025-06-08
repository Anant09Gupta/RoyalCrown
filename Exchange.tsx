import React, { useState } from 'react';
import { ArrowUpDown, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

interface ExchangeProps {
  isConnected: boolean;
}

const Exchange: React.FC<ExchangeProps> = ({ isConnected }) => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BNB');
  const [toCurrency, setToCurrency] = useState('CROWN');
  const [isLoading, setIsLoading] = useState(false);

  const exchangeRates = {
    'BNB': 300,
    'ETH': 2000,
    'USDT': 1,
    'CROWN': 0.001,
  };

  const marketData = [
    { pair: 'CROWN/BNB', price: '0.00000333', change: '+5.67%', volume: '1,234,567', positive: true },
    { pair: 'CROWN/ETH', price: '0.0000005', change: '-2.34%', volume: '987,654', positive: false },
    { pair: 'CROWN/USDT', price: '0.001', change: '+12.45%', volume: '2,345,678', positive: true },
  ];

  const calculateExchange = (amount: string, from: string, to: string) => {
    if (!amount || isNaN(Number(amount))) return '';
    
    const fromRate = exchangeRates[from as keyof typeof exchangeRates];
    const toRate = exchangeRates[to as keyof typeof exchangeRates];
    
    const result = (Number(amount) * fromRate) / toRate;
    return result.toFixed(6);
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    setToAmount(calculateExchange(value, fromCurrency, toCurrency));
  };

  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    setFromAmount(calculateExchange(value, toCurrency, fromCurrency));
  };

  const swapCurrencies = () => {
    const tempCurrency = fromCurrency;
    const tempAmount = fromAmount;
    
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleExchange = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    if (!fromAmount || !toAmount) {
      alert('Please enter valid amounts');
      return;
    }

    setIsLoading(true);
    
    // Simulate exchange process
    setTimeout(() => {
      setIsLoading(false);
      alert(`Successfully exchanged ${fromAmount} ${fromCurrency} for ${toAmount} ${toCurrency}`);
      setFromAmount('');
      setToAmount('');
    }, 2000);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Exchange</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trade CROWN tokens with major cryptocurrencies at competitive rates
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Exchange Interface */}
          <div className="xl:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Swap Tokens</h2>
              
              {/* From Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">From</label>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={fromAmount}
                      onChange={(e) => handleFromAmountChange(e.target.value)}
                      placeholder="0.0"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white text-lg focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <select
                    value={fromCurrency}
                    onChange={(e) => {
                      setFromCurrency(e.target.value);
                      if (fromAmount) {
                        setToAmount(calculateExchange(fromAmount, e.target.value, toCurrency));
                      }
                    }}
                    className="px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="BNB">BNB</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                    <option value="CROWN">CROWN</option>
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={swapCurrencies}
                  className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 hover:bg-purple-500/30 transition-colors"
                >
                  <ArrowUpDown className="w-6 h-6" />
                </button>
              </div>

              {/* To Section */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-3">To</label>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={toAmount}
                      onChange={(e) => handleToAmountChange(e.target.value)}
                      placeholder="0.0"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white text-lg focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <select
                    value={toCurrency}
                    onChange={(e) => {
                      setToCurrency(e.target.value);
                      if (fromAmount) {
                        setToAmount(calculateExchange(fromAmount, fromCurrency, e.target.value));
                      }
                    }}
                    className="px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="CROWN">CROWN</option>
                    <option value="BNB">BNB</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>

              {/* Exchange Rate */}
              {fromAmount && toAmount && (
                <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>Exchange Rate:</span>
                    <span>1 {fromCurrency} = {calculateExchange('1', fromCurrency, toCurrency)} {toCurrency}</span>
                  </div>
                </div>
              )}

              {/* Exchange Button */}
              <button
                onClick={handleExchange}
                disabled={isLoading || !isConnected}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </div>
                ) : !isConnected ? (
                  'Connect Wallet to Exchange'
                ) : (
                  'Exchange Tokens'
                )}
              </button>
            </div>
          </div>

          {/* Market Data */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Market Data</h3>
              <div className="space-y-4">
                {marketData.map((market, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">{market.pair}</span>
                      <div className={`flex items-center ${market.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {market.positive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        <span className="text-sm font-medium">{market.change}</span>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{market.price}</div>
                    <div className="text-sm text-gray-400">Vol: {market.volume}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">24h Volume:</span>
                  <span className="text-white font-bold">$125,432</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Liquidity:</span>
                  <span className="text-white font-bold">$1,234,567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Trades:</span>
                  <span className="text-white font-bold">5,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Exchange Fee:</span>
                  <span className="text-white font-bold">0.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;