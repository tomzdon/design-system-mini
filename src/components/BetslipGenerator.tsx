
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { ArrowLeft } from "lucide-react";

export const BetslipGenerator = () => {
  const [odds, setOdds] = useState(2);

  const handleSliderChange = (value: number[]) => {
    setOdds(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 2), 1000);
    setOdds(value);
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-darkest">
      {/* Header */}
      <header className="flex items-center gap-4 p-4 bg-white">
        <button className="text-neutral-darkest" aria-label="Go back">
          <ArrowLeft size={24} />
        </button>
        <h1 className="body-1-bold text-neutral-darkest">Betslip Generator</h1>
      </header>

      {/* Content */}
      <main className="flex-1 bg-white p-4">
        <h2 className="text-neutral-darkest body-1-medium mb-6">Target odds</h2>
        
        <div className="flex items-center gap-4 mb-8">
          <span className="body-2">2</span>
          <Slider
            value={[odds]}
            min={2}
            max={1000}
            step={1}
            showThumbValue
            onValueChange={handleSliderChange}
          />
          <input
            type="number"
            value={odds}
            onChange={handleInputChange}
            min={2}
            max={1000}
            className="w-16 p-2 border border-neutral-lighter rounded-lg text-center"
          />
        </div>

        <Button 
          variant="primary"
          title="GENERATE"
          fullwidth
          onClick={() => console.log('Generate with odds:', odds)}
        />
      </main>

      {/* Bottom Banner */}
      <div className="bg-primary p-1">
        <p className="text-neutral-darkest body-3">
          Add 3 legs to your betslip to earn up to a{" "}
          <span className="body-3-bold">500% Win Bonus.</span>
        </p>
      </div>
    </div>
  );
};
