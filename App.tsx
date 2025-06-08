import React, { useState } from 'react';
import { Crown } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Mining from './components/Mining';
import Exchange from './components/Exchange';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'mining' | 'exchange' | 'dashboard'>('home');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');

  const connectWallet = async () => {
    if (typeof (window as any).ethereum !== 'undefined') {
      try {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask to connect your wallet');
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress('');
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'mining':
        return <Mining isConnected={isWalletConnected} />;
      case 'exchange':
        return <Exchange isConnected={isWalletConnected} />;
      case 'dashboard':
        return <Dashboard isConnected={isWalletConnected} walletAddress={walletAddress} />;
      default:
        return (
          <>
            <Hero onConnectWallet={connectWallet} isConnected={isWalletConnected} />
            <Features />
            <Tokenomics />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-amber-900 relative">
      {/* Royal Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isWalletConnected={isWalletConnected}
        walletAddress={walletAddress}
        onConnectWallet={connectWallet}
        onDisconnectWallet={disconnectWallet}
      />
      
      <main className="relative">
        {renderCurrentPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;