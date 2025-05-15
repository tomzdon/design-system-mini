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
    <div className="flex flex-col h-screen bg-neutral-darkest max-w-[660px] m-auto relative">
      {/* Header */}
      <header className="bg-neutral-darkest p-4 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[660px] mx-auto">
          <img src="/betPawa.svg" alt="betPawa" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white relative mt-[72px]">{children}</main>

      {/* Bottom Banner */}

      {/* Bottom Navigation */}
    </div>
  );
};
