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
  selectedCount: number;
  onSelectionsChange: (value: number) => void;
  selections: BetSelection[];
  isLoading: boolean;
  error: string | null;
  onLoadBetslip: () => void;
}

export const GeneratedBetslipModal: React.FC<GeneratedBetslipModalProps> = ({
  isOpen,
  onClose,
  targetOdds,
  actualOdds,
  selectedCount,
  onSelectionsChange,
  selections,
  isLoading,
  error,
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

  const displayedSelections = selections.slice(0, selectedCount);

  return (
    <div
      className="absolute bottom-0 inset-0 bg-black/50 z-50 max-w-[660px]"
      onClick={handleClickAway}
    >
      <div
        className="absolute bottom-[0px] left-0 right-0 bg-white rounded-t-lg w-full mx-auto flex flex-col"
        style={{
          height: "90vh",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 300ms ease-out",
        }}
      >
        <div className="flex-shrink-0">
          <div className="flex items-center justify-between p-4 border-b border-neutral-lighter">
            <div className="w-12 h-1 bg-neutral-lighter rounded-full absolute left-1/2 -translate-x-1/2 -top-3" />
            <h2 className="body-1-bold text-neutral-darkest">
              Generated Betslip
            </h2>
            <button onClick={onClose} className="p-2" aria-label="Close">
              <Cross />
            </button>
          </div>

          <div className="bg-neutral-lightest p-4">
            <div className="flex items-center gap-4 mb-2 rounded-md bg-white shadow-sm py-[8px] px-[12px]">
              <span className="body-2">2</span>
              <Slider
                value={[selectedCount]}
                min={2}
                max={1000}
                step={1}
                className="flex-1"
                onValueChange={(value) => onSelectionsChange(value[0])}
              />
              <input
                type="number"
                value={selectedCount}
                onChange={(e) => onSelectionsChange(Math.min(Math.max(Number(e.target.value), 2), 1000))}
                className="w-16 p-1 border border-primary rounded-lg text-center"
                min={2}
                max={1000}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 text-center border-b border-neutral-lighter p-4">
            <div>
              <div className="small text-neutral-medium">Target odds:</div>
              <div className="label-medium text-neutral-darkest">
                {targetOdds.toFixed(2)}
              </div>
            </div>
            <div>
              <div className="body-3 text-neutral-medium">Actual odds:</div>
              <div className="body-2-bold text-neutral-darkest">
                {actualOdds}
              </div>
            </div>
            <div>
              <div className="body-3 text-neutral-medium">Selections:</div>
              <div className="body-2-bold text-neutral-darkest">
                {displayedSelections.length}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto px-4 flex-1">
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center py-8">{error}</div>
          )}

          {!isLoading && !error && (
            <div className="space-y-4 py-4">
              {displayedSelections.map((selection, index) => (
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
                  <div className="body-1-bold">{`${selection.homeTeam} - ${selection.awayTeam}`}</div>
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
          )}
        </div>

        <div className="flex-shrink-0 sticky bottom-0 left-0 right-0 bg-white p-4 border-t border-neutral-lighter">
          <Button
            variant="primary"
            size="large"
            title="LOAD BETSLIP"
            fullwidth
            onClick={onLoadBetslip}
            disabled={isLoading || !!error}
          />
        </div>
      </div>
    </div>
  );
};