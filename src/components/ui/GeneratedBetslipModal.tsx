
import React, { useCallback } from "react";
import { Button } from "./button";
import { Slider } from "./slider";
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
  const handleClickAway = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50"
      onClick={handleClickAway}
    >
      <div
        className="fixed bottom-[88px] left-0 right-0 bg-white rounded-t-lg w-full max-w-[480px] mx-auto"
        style={{
          maxHeight: "calc(100vh - 88px)",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 300ms ease-in-out",
        }}
      >
        <div className="flex flex-col h-full relative">
          <div className="flex items-center justify-between p-4 border-b border-neutral-lighter">
            <div className="w-12 h-1 bg-neutral-lighter rounded-full absolute left-1/2 -translate-x-1/2 -top-3" />
            <h2 className="body-1-bold text-neutral-darkest">
              Generated Betslip
            </h2>
            <button onClick={onClose} className="p-2" aria-label="Close">
              <Cross />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-4 mb-6 bg-neutral-lightest rounded-lg p-4">
              <span className="body-2">2</span>
              <Slider
                value={[targetOdds]}
                min={2}
                max={1000}
                step={1}
                className="flex-1"
                readOnly
              />
              <input
                type="number"
                value={targetOdds}
                className="w-16 p-1 border border-primary rounded-lg text-center"
                readOnly
              />
            </div>

            <div className="grid grid-cols-3 text-center border-b border-neutral-lighter pb-4">
              <div>
                <div className="body-3 text-neutral-medium">Target odds:</div>
                <div className="body-2-bold text-neutral-darkest">
                  {targetOdds.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="body-3 text-neutral-medium">Actual odds:</div>
                <div className="body-2-bold text-neutral-darkest">
                  {actualOdds.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="body-3 text-neutral-medium">Selections:</div>
                <div className="body-2-bold text-neutral-darkest">
                  {selections.length}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-4">
            {selections.map((selection, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="body-3">{selection.time}</span>
                    <span className="body-3">{selection.date}</span>
                    <span className="text-[#831aed]">⬆</span>
                  </div>
                  <span className="bg-neutral-darkest text-white px-3 py-1 rounded-full body-3">
                    {selection.odds.toFixed(2)}
                  </span>
                </div>
                <div className="body-2-bold">{`${selection.homeTeam} - ${selection.awayTeam}`}</div>
                <div className="body-3 text-neutral-medium">
                  {selection.league}
                </div>
                <div className="body-2-bold flex items-center gap-1">
                  {selection.market}
                  {selection.isHot && <span>🔥</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 left-0 right-0 bg-white p-4 border-t border-neutral-lighter">
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
