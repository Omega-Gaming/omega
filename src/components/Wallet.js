import React from "react";
import "../styles/Wallet.css";

const Wallet = () => {
  return (
    <div className="wallet-container">
      <div className="prize">
        <span>Claim Prize</span>
      </div>
      <div className="og-price">
        <span>$OG Price: $.0013526</span>
      </div>
      <div className="og-balance">
        <span>Balance: 14,990 OG</span>
      </div>
      <div className="connection-status">
        <span>Connect Wallet</span>
      </div>
    </div>
  );
};

export default Wallet;
