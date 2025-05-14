import React from "react";
import { Rocket, Flame, File, ChartBar, User } from "lucide-react";
import Info from "../../assets/info.svg?react";
import Sport from "../../assets/sport.svg?react";
import Betslip from "../../assets/betslip.svg?react";
import MyBets from "../../assets/myBets.svg?react";
import Account from "../../assets/account.svg?react";
import Menu from "../../assets/menu.svg?react";
const MobileLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-neutral-darkest">
      {/* Header */}
      <header className="bg-neutral-darkest p-4">
        <img src="/betPawa.svg" alt="betPawa" />
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <h1 className="text-neutral-darkest body-1-bold  p-4">Mini AI apps</h1>

        {/* Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4  border-b border-neutral-lighter ">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-dark rounded-lg">
                <Rocket size={24} className="text-white" />
              </div>
              <span className=" body-1-medium">Betslip Generator</span>
            </div>
            <Info />
          </div>

          <div className="flex items-center justify-between p-4  border-b border-neutral-lighter ">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Flame size={24} className="text-white" />
              </div>
              <span className="text-neutral-darkest body-1-medium">
                Popular Picks
              </span>
            </div>
            <Info />
          </div>
        </div>
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
          {/* <Football size={20} className="text-neutral-light" /> */}
          <Sport />
          <span className="text-neutral-light body-4">Sports</span>
        </button>
        <button className="flex flex-col items-center gap-1 relative">
          <div className="absolute -top-6 p-4 rounded-full bg-primary">
            <Betslip />
          </div>
          <span className="text-primary body-4 mt-6">Betslip</span>
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

export default MobileLayout;
