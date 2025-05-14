
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
    <div className="flex flex-col h-screen bg-neutral-darkest">
      {/* Header */}
      <header className="bg-neutral-darkest p-4">
        <img src="/betPawa.svg" alt="betPawa" />
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        {children}
      </main>

      {/* Bottom Banner */}
      <div className="bg-primary p-1">
        <p className="text-neutral-darkest body-3">
          Add 3 legs to your betslip to earn up to a{" "}
          <span className="body-3-bold">500% Win Bonus.</span>
        </p>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-neutral-darkest px-4 py-3 grid grid-cols-5 gap-2">
        <button className="flex flex-col items-center gap-1">
          <Menu />
          <span className="text-neutral-light body-4">Menu</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Sport />
          <span className="text-neutral-light body-4">Sports</span>
        </button>
        <button className="flex flex-col items-center gap-1 relative z-1">
          <div className="absolute w-16 h-16 flex flex-col items-center -top-4 p-2 rounded-full bg-neutral-darkest ring-2 ring-neutral-dark">
            <Betslip className="w-7 h-7" />
            <span className="text-neutral-light body-4 mt-2">Betslip</span>
          </div>
        </button>
        <button className="flex flex-col items-center gap-1">
          <MyBets />
          <span className="text-neutral-light body-4">My Bets</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Account />
          <span className="text-neutral-light body-4">Account</span>
        </button>
      </nav>
    </div>
  );
};
