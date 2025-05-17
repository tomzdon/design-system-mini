import React from "react";
// @ts-ignore
import Menu from "../../assets/menu.svg?react";
// @ts-ignore
import Sport from "../../assets/sport.svg?react";
// @ts-ignore
import Betslip from "../../assets/betslip.svg?react";
// @ts-ignore
import MyBets from "../../assets/myBets.svg?react";
// @ts-ignore
import Account from "../../assets/account.svg?react";
// @ts-ignore

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-darkest max-w-[660px] m-auto">
      {/* Header */}
      <header className="bg-neutral-darkest p-4 sticky top-0 z-50">
        <img src="/betPawa.svg" alt="betPawa" />
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white relative overflow-y-hidden">
        {children}
      </main>

      {/* Bottom Banner */}

      {/* Bottom Navigation */}
    </div>
  );
};
