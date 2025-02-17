"use client";
import { PrivyProvider } from '@privy-io/react-auth';
import {bsc} from 'viem/chains';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
        <PrivyProvider 
        appId={"cm6bq8q8300ieoino3gz657wh"}
        config={{
        "appearance": {
          "accentColor": "#6A6FF5",
          "theme":"#FFFFFF",
          "showWalletLoginFirst": false,
          "logo": "https://auth.privy.io/logos/privy-logo.png",
          "walletChainType": 'ethereum-only',
          "walletList": ['metamask', 'wallet_connect', 'coinbase_wallet', 'rabby_wallet', 'cryptocom','safe']
        },
        "loginMethods": [
          "email",
          "wallet"
        ],
        "embeddedWallets": {
          "createOnLogin": "all-users",
          "requireUserPasswordOnCreate": false,
          "showWalletUIs": true
        },
        "mfa": {
          "noPromptOnMfaRequired": false
        },
        defaultChain: bsc,
        supportedChains: [bsc]
      }}
      >
        {children}
      </PrivyProvider>
  );
}
