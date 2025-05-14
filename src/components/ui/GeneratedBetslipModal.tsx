
import React from "react";
import { Slider } from "./slider";
import { Button } from "./button";
import Cross from "../../assets/cross.svg?react";

interface BetSelection {
  time: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  market: string;
  odds: number;
  isHot?: boolean;
}

interface GeneratedBetslipModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetOdds: number;
  actualOdds: number;
  selections: BetSelection[];
  onLoadBetslip: () => void;
}

export const GeneratedBetslipModal: React.FC<GeneratedBetslipModalProps> = ({
  isOpen,
  onClose,
  targetOdds,
  actualOdds,
  selections,
  onLoadBetslip,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-[480px] relative">
        <div className="space-y-6">
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="w-12 h-1 bg-neutral-lighter rounded-full mx-auto mb-4" />
            <h2 className="body-1-bold text-neutral-darkest">Generated Betslip</h2>
            <button onClick={onClose} className="p-2">
              <Cross />
            </button>
          </div>

          <div className="px-4">
            <Slider
              value={[targetOdds]}
              min={2}
              max={1000}
              step={1}
              className="mb-6"
            />

            <div className="grid grid-cols-3 text-center border-b border-neutral-lighter pb-4">
              <div>
                <div className="body-3 text-neutral-medium">Target odds:</div>
                <div className="body-2-bold text-neutral-darkest">{targetOdds.toFixed(2)}</div>
              </div>
              <div>
                <div className="body-3 text-neutral-medium">Actual odds:</div>
                <div className="body-2-bold text-neutral-darkest">{actualOdds.toFixed(2)}</div>
              </div>
              <div>
                <div className="body-3 text-neutral-medium">Selections:</div>
                <div className="body-2-bold text-neutral-darkest">{selections.length}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 px-4 max-h-[400px] overflow-y-auto">
            {selections.map((selection, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="body-3">{selection.time}</span>
                    <span className="body-3">{selection.date}</span>
                  </div>
                  <span className="bg-[#2c2c2c] text-white px-3 py-1 rounded-full body-3">
                    {selection.odds.toFixed(2)}
                  </span>
                </div>
                <div className="body-2-bold">{`${selection.homeTeam} - ${selection.awayTeam}`}</div>
                <div className="body-3 text-neutral-medium">{selection.league}</div>
                <div className="body-2 flex items-center gap-1">
                  {selection.market}
                  {selection.isHot && <span>🔥</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 pb-4">
            <Button
              variant="primary"
              size="large"
              title="LOAD BETSLIP"
              fullwidth
              onClick={onLoadBetslip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
