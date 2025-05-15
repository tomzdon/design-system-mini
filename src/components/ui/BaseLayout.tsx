import React from "react";
import Menu from "../../assets/menu.svg?react";
import Sport from "../../assets/sport.svg?react";
import Betslip from "../../assets/betslip.svg?react";
import MyBets from "../../assets/myBets.svg?react";
import Account from "../../assets/account.svg?react";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-darkest max-w-[660px] m-auto">
      {/* Header */}
      <header className="bg-neutral-darkest p-4 ">
        <img src="/betPawa.svg" alt="betPawa" />
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white relative">{children}</main>

      {/* Bottom Banner */}

      {/* Bottom Navigation */}
    </div>
  );
};
