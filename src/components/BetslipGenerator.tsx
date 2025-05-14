import React, { useState } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { ArrowLeft } from "lucide-react";
import { BaseLayout } from "./ui/BaseLayout";
import { GeneratedBetslipModal } from "../components/ui/GeneratedBetslipModal";
interface BetslipGeneratorProps {
  onBack: () => void;
}

export const BetslipGenerator: React.FC<BetslipGeneratorProps> = ({
  onBack,
}) => {
  const [odds, setOdds] = useState(2);

  const handleSliderChange = (value: number[]) => {
    setOdds(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 2), 1000);
    setOdds(value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockSelections = [
    {
      time: "12:00pm",
      date: "Tue 15/12",
      homeTeam: "Manchester United",
      awayTeam: "Athletic Bilbao",
      league: "Football / UEFA Europa League",
      market: "Both teams to score - Full Time - Yes",
      odds: 1.73,
      isHot: true,
    },
    // Duplicate for demo
    {
      time: "12:00pm",
      date: "Tue 15/12",
      homeTeam: "Manchester United",
      awayTeam: "Athletic Bilbao",
      league: "Football / UEFA Europa League",
      market: "Both teams to score - Full Time - Yes",
      odds: 1.73,
      isHot: true,
    },
  ];

  return (
    <BaseLayout>
      <div className="flex items-center gap-4 p-4">
        <button
          className="text-neutral-darkest"
          aria-label="Go back"
          onClick={onBack}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="body-1-bold text-neutral-darkest">Betslip Generator</h1>
      </div>

      <div className="p-4 bg-neutral-lightest">
        <h2 className="text-neutral-darkest body-1-medium mb-6">Target odds</h2>

        <div className="flex items-center gap-4 mb-8 rounded-md bg-white shadow-sm py-[8px] px-[12px]">
          <span className="body-2">2</span>
          <Slider
            value={[odds]}
            min={2}
            max={1000}
            step={1}
            onValueChange={handleSliderChange}
          />
          <input
            type="number"
            value={odds}
            onChange={handleInputChange}
            min={2}
            max={1000}
            className="w-16 p-1 border border-primary rounded-lg text-center hover:border-primary focus:border-primary focus:outline-none"
          />
        </div>

        <div className="flex justify-end">
          <Button
            size="large"
            variant="primary"
            title="GENERATE"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <GeneratedBetslipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        targetOdds={odds}
        actualOdds={14.18}
        selections={mockSelections}
        onLoadBetslip={() => {
          console.log("Loading betslip...");
          setIsModalOpen(false);
        }}
      />
    </BaseLayout>
  );
};
