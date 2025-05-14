
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
    <div 
      className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg w-full max-w-[480px] mx-auto transition-transform duration-300 transform translate-y-0"
        style={{
          maxHeight: 'calc(100vh - env(safe-area-inset-bottom))'
        }}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="w-12 h-1 bg-neutral-lighter rounded-full mx-auto mb-4" />
            <h2 className="body-1-bold text-neutral-darkest">Generated Betslip</h2>
            <button onClick={onClose} className="p-2" aria-label="Close">
              <Cross />
            </button>
          </div>

          <div className="px-4">
            <div className="flex items-center gap-4 py-4 bg-neutral-lightest rounded-lg px-4">
              <span className="body-2">2</span>
              <Slider
                value={[targetOdds]}
                min={2}
                max={1000}
                step={1}
                className="flex-1"
              />
              <input
                type="number"
                value={targetOdds}
                className="w-16 p-1 border border-primary rounded-lg text-center"
                readOnly
              />
            </div>

            <div className="grid grid-cols-3 text-center border-b border-neutral-lighter py-4">
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

          <div className="space-y-4 px-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
            {selections.map((selection, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="body-3">{selection.time}</span>
                    <span className="body-3">{selection.date}</span>
                    <span className="text-[#831aed]">⬆</span>
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

          <div className="px-4 py-4 border-t border-neutral-lighter">
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
