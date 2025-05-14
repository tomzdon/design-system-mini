import React, { useState } from "react";
import { Rocket, Flame } from "lucide-react";
import Info from "../../assets/info.svg?react";
import Sport from "../../assets/sport.svg?react";
import Betslip from "../../assets/betslip.svg?react";
import MyBets from "../../assets/myBets.svg?react";
import Account from "../../assets/account.svg?react";
import Menu from "../../assets/menu.svg?react";
import { TooltipModal } from "../../components/TooltipModal"; // Assuming the path to TooltipModal

const MobileLayout = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

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
          <div className="flex items-center justify-between p-4 border-b border-neutral-lighter relative">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-dark rounded-lg">
                <Rocket size={24} className="text-white" />
              </div>
              <span className="body-1-medium">Betslip Generator</span>
            </div>
            <button 
              onClick={() => setIsTooltipOpen(prev => !prev)}
              aria-label="More information about Betslip Generator"
            >
              <Info />
            </button>
            <TooltipModal
              isOpen={isTooltipOpen}
              onCancel={() => setIsTooltipOpen(false)}
              className="max-w-[280px]"
            >
              <p className="body-2 text-neutral-darkest text-left">
                Automatically generate your betslip based on selected odds.
              </p>
            </TooltipModal>
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

export default MobileLayout;