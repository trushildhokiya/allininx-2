import React, { useState } from 'react';
import { FaWallet, FaSignOutAlt } from 'react-icons/fa';

interface WalletLogoutButtonsProps {
  walletAddress: string;
  onLogout: () => void;
}

const WalletLogoutButtons: React.FC<WalletLogoutButtonsProps> = ({ 
  walletAddress, 
  onLogout 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyWallet = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="absolute top-4 left-4 z-10 flex items-center space-x-3">
      <div 
        onClick={handleCopyWallet}
        className="relative flex items-center justify-center 
        bg-gradient-to-br from-purple-600/30 to-blue-500/30 
        backdrop-blur-sm rounded-full p-3 
        cursor-pointer hover:bg-opacity-70 
        transition-all duration-300 
        group"
      >
        <FaWallet className="text-white/80 group-hover:text-white" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 
        bg-black/70 text-white text-xs px-2 py-1 rounded-md 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {copied ? 'Copied!' : walletAddress.slice(0,6) + '...' + walletAddress.slice(-4)}
        </span>
      </div>
      
      <button 
        onClick={onLogout}
        className="flex items-center justify-center 
        bg-gradient-to-br from-red-600/30 to-orange-500/30 
        backdrop-blur-sm rounded-full p-3 
        hover:bg-opacity-70 
        transition-all duration-300 
        group"
      >
        <FaSignOutAlt className="text-white/80 group-hover:text-white" />
      </button>
    </div>
  );
};

export default WalletLogoutButtons;