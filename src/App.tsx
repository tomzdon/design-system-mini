
import { useState } from "react";
import { MobileLayout } from "./components/ui/MobileLayout";
import { BetslipGenerator } from "./components/BetslipGenerator";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'betslip'>('home');
  
  return currentView === 'home' ? (
    <MobileLayout onBetslipGeneratorClick={() => setCurrentView('betslip')} />
  ) : (
    <BetslipGenerator onBack={() => setCurrentView('home')} />
  );
}

export default App;
