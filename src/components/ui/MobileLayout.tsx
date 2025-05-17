import React, { useState } from "react";

// @ts-ignore
import Info from "../../assets/info.svg?react";
import { TooltipModal } from "./tooltipModal";
import { BaseLayout } from "./BaseLayout";
// @ts-ignore
import Rocket from "../../assets/rocket.svg?react";
// @ts-ignore
import Flame from "../../assets/Flame.svg?react";
interface MobileLayoutProps {
  onBetslipGeneratorClick: () => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  onBetslipGeneratorClick,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <BaseLayout>
      <h1 className="text-neutral-darkest body-1-bold p-4">Mini AI apps</h1>
      <div className="">
        <div className="flex items-center justify-between p-4 border-b border-neutral-lighter relative">
          <button
            className="flex items-center gap-3"
            onClick={onBetslipGeneratorClick}
          >
            <div className="p-4 bg-neutral-dark rounded-lg">
              <Rocket />
            </div>
            <span className="body-1-medium">Betslip Generator</span>
          </button>
          <button
            onClick={() => setIsTooltipOpen((prev) => !prev)}
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

        <div className="flex items-center justify-between p-4 border-b border-neutral-lighter">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-primary rounded-lg">
              <Flame />
            </div>
            <span className="text-neutral-darkest body-1-medium">
              Popular Picks
            </span>
          </div>
          <Info />
        </div>
      </div>
    </BaseLayout>
  );
};

export { MobileLayout };
