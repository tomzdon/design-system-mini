
import React from "react";
import { Button } from "./button";
//@ts-ignore
import Boosted from "../../assets/boosted.svg?react";

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

interface GeneratedResultsProps {
  targetOdds: number;
  actualOdds: number;
  selectedCount: number;
  onSelectionsChange: (value: number) => void;
  selections: BetSelection[];
  isLoading: boolean;
  error: string | null;
  onLoadBetslip: () => void;
}

export const GeneratedResults: React.FC<GeneratedResultsProps> = ({
  targetOdds,
  actualOdds,
  selections,
  isLoading,
  error,
  onLoadBetslip,
}) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="grid grid-cols-3 text-center border-b border-neutral-lighter p-4">
        <div>
          <div className="body-3-bold text-neutral-dark">Target odds:</div>
          <div className="body-3-bold text-neutral-dark">
            {targetOdds.toFixed(2)}
          </div>
        </div>
        <div className="border-l border-r border-border">
          <div className="body-3-bold text-neutral-dark">Actual odds:</div>
          <div className="body-3-bold ext-neutral-dark">{actualOdds}</div>
        </div>
        <div>
          <div className="body-3-bold text-neutral-dark">Selections:</div>
          <div className="body-3-bold text-neutral-dark">
            {selections.length}
          </div>
        </div>
      </div>

      <div className="overflow-y-auto px-4" style={{ maxHeight: "calc(100vh - 400px)" }}>
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
            {selections.map((selection, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 mb-[6px]">
                    <span className="body-2">{selection.time}</span>
                    <span className="body-2-bold">{selection.date}</span>
                    <Boosted />
                  </div>
                  <span className="bg-neutral-dark text-white px-3 py-1 rounded-full body-3">
                    {selection.odds.toFixed(2)}
                  </span>
                </div>
                <div className="body-1-medium">{`${selection.homeTeam} - ${selection.awayTeam}`}</div>
                <div className="body-3 text-neutral-medium">
                  {selection.league}
                </div>
                <div className="body-2-medium flex items-center gap-1">
                  {selection.market}
                  {selection.isHot && <span>🔥</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sticky bottom-0 left-0 right-0 bg-white p-4 border-t border-neutral-lighter">
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
  );
};
