
import React from 'react';
import { Info, Rocket, Flame, Menu, Football, File, ChartBar, User } from 'lucide-react';

const MobileLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-neutral-darkest">
      {/* Header */}
      <header className="bg-neutral-darkest p-4">
        <img src="/betPawa.svg" alt="betPawa" className="h-8" />
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white p-4">
        <h1 className="text-neutral-darkest body-1-bold mb-4">Mini AI apps</h1>

        {/* Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-neutral-dark rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-darker rounded-lg">
                <Rocket size={24} className="text-white" />
              </div>
              <span className="text-white body-1-medium">Betslip Generator</span>
            </div>
            <Info size={20} className="text-neutral-light" />
          </div>

          <div className="flex items-center justify-between p-4 bg-primary rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-dark rounded-lg">
                <Flame size={24} className="text-white" />
              </div>
              <span className="text-neutral-darkest body-1-medium">Popular Picks</span>
            </div>
            <Info size={20} className="text-neutral-dark" />
          </div>
        </div>
      </main>

      {/* Bottom Banner */}
      <div className="bg-primary p-4">
        <p className="text-neutral-darkest body-2">
          Add 3 legs to your betslip to earn up to a <span className="body-2-bold">500% Win Bonus.</span>
        </p>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-neutral-darkest px-4 py-3 grid grid-cols-5 gap-2">
        <button className="flex flex-col items-center gap-1">
          <Menu size={20} className="text-neutral-light" />
          <span className="text-neutral-light body-4">Menu</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Football size={20} className="text-neutral-light" />
          <span className="text-neutral-light body-4">Sports</span>
        </button>
        <button className="flex flex-col items-center gap-1 relative">
          <div className="absolute -top-6 p-4 rounded-full bg-primary">
            <File size={24} className="text-neutral-darkest" />
          </div>
          <span className="text-primary body-4 mt-6">Betslip</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <ChartBar size={20} className="text-neutral-light" />
          <span className="text-neutral-light body-4">My Bets</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <User size={20} className="text-neutral-light" />
          <span className="text-neutral-light body-4">Account</span>
        </button>
      </nav>
    </div>
  );
};

export default MobileLayout;
