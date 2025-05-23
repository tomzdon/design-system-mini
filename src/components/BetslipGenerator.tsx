import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { ArrowLeft } from "lucide-react";
import { BaseLayout } from "./ui/BaseLayout";
import { GeneratedBetslipModal } from "../components/ui/GeneratedBetslipModal";
import { BookingCodeModal } from "../components/ui/BookingCodeModal";

interface BetslipGeneratorProps {
    onBack: () => void;
}

export const BetslipGenerator: React.FC<BetslipGeneratorProps> = ({
    onBack,
}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [odds, _setOdds] = useState(2); // eslint-disable-line @typescript-eslint/no-unused-vars
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selections, setSelections] = useState<any[]>([]);
    const [selectedCount, setSelectedCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [bookingCode, setBookingCode] = useState("");

    const fetchBoostedEvents = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const query = {
                queries: [
                    {
                        query: {
                            eventType: "UPCOMING",
                            categories: ["2", "3", "452"],
                            zones: {},
                            boosted: true,
                            hasOdds: true,
                        },
                        skip: 0,
                        take: 100,
                    },
                ],
            };

            const encodedQuery = encodeURIComponent(JSON.stringify(query));

            const response = await fetch(
                `/api/sportsbook/v3/events/lists/by-queries?q=${encodedQuery}`,
                {
                    headers: {
                        accept: "*/*",
                        devicetype: "web",
                        "x-pawa-brand": "betpawa-nigeria",
                        "x-pawa-language": "en",
                    },
                },
            );

            if (!response.ok) {
                throw new Error("Failed to fetch boosted events");
            }

            const data = await response.json();
            // Get all events and shuffle them
            const allEvents = data.responses[0].responses;
            const shuffledEvents = [...allEvents].sort(
                () => Math.random() - 0.5,
            );
            // Take only the number of events specified by selectedCount
            const selectedEvents = shuffledEvents.slice(0, selectedCount);
            const transformedSelections = selectedEvents.map((event: any) => {
                const startDate = new Date(event.startTime);
                const market = event.markets[0];
                const hotPrice =
                    market?.row[0]?.prices.find(
                        (p: any) => p.additionalInfo.hot,
                    ) || market?.row[0]?.prices[0];

                return {
                    time: startDate.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                    date: startDate.toLocaleDateString([], {
                        weekday: "short",
                        day: "2-digit",
                        month: "2-digit",
                    }),
                    homeTeam: event.participants[0].name,
                    awayTeam: event.participants[1].name,
                    league: event.competition.name,
                    market: market?.marketType?.displayName || "Match Result",
                    odds: hotPrice?.price || 1.0,
                    id: hotPrice?.id,
                    isHot: hotPrice?.additionalInfo?.hot || false,
                    marketId: market?.id, // Added marketId
                    selectionId: hotPrice?.selectionId, // Added selectionId
                };
            });

            setSelections(transformedSelections);
        } catch (err) {
            setError("Failed to load boosted matches");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            fetchBoostedEvents();
        }
    }, [isModalOpen, selectedCount]);

    const handleLoadBetslip = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const selectionIds = selections
                .slice(0, selectedCount)
                .map((selection) => selection.id);

            const response = await fetch(
                "/production/api/sportsbook/v2/booking-number",
                {
                    method: "POST",
                    headers: {
                        accept: "*/*",
                        "content-type": "application/json",
                        "x-pawa-brand": "betpawa-nigeria",
                    },
                    body: JSON.stringify({ selections: selectionIds }),
                },
            );

            if (!response.ok) {
                throw new Error("Failed to create booking");
            }

            const data = await response.json();
            setBookingCode(data.code);
            setIsBookingModalOpen(true);
            setIsModalOpen(false);
        } catch (err) {
            setError("Failed to create booking. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <BaseLayout>
            <div className="flex items-center gap-4 p-4 relative">
                <button
                    className="text-neutral-darkest"
                    aria-label="Go back"
                    onClick={onBack}
                >
                    <ArrowLeft size={24} />
                </button>
                <h1 className="body-1-bold text-neutral-darkest">
                    Betslip Generator
                </h1>
            </div>

            <div className="p-4 bg-neutral-lightest">
                <h2 className="text-neutral-darkest body-1-medium mb-6">
                    Target odds
                </h2>

                <div className="flex items-center gap-4 mb-8 rounded-md bg-white shadow-sm py-[8px] px-[12px]">
                    <span className="body-2">2</span>
                    <Slider
                        value={[selectedCount]}
                        min={2}
                        max={1000}
                        step={1}
                        onValueChange={(value) => setSelectedCount(value[0])}
                    />
                    <input
                        type="number"
                        value={selectedCount}
                        onChange={(e) =>
                            setSelectedCount(
                                Math.min(
                                    Math.max(Number(e.target.value), 2),
                                    1000,
                                ),
                            )
                        }
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
                actualOdds={Number(
                    selections
                        .slice(0, selectedCount)
                        .reduce(
                            (totalOdds, selection) =>
                                totalOdds * selection.odds,
                            1,
                        )
                        .toFixed(2),
                )}
                selections={selections.slice(0, selectedCount)}
                selectedCount={selectedCount}
                onSelectionsChange={setSelectedCount}
                isLoading={isLoading}
                error={error}
                onLoadBetslip={handleLoadBetslip}
            />
            <BookingCodeModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                bookingCode={bookingCode}
            />
        </BaseLayout>
    );
};
