import React, {useCallback} from 'react';
import {cn} from '@/lib/utils';
import {useTransitionState} from '@/hooks/useTransitionState';
import Cross from "../../assets/cross.svg?react";

const TRANSITION_DURATION = 300;

interface TooltipModalProps {
    isOpen: boolean;
    unmountOnClose?: boolean;
    onCancel: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const TooltipModal: React.FC<TooltipModalProps> = ({
                                                              isOpen,
                                                              unmountOnClose = true,
                                                              onCancel,
                                                              children,
                                                              className,
                                                          }) => {
    const {visible, mounted} = useTransitionState(isOpen, TRANSITION_DURATION);

    const handleClickAway = useCallback(
        (event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            if (event.target === event.currentTarget) {
                onCancel();
            }
        },
        [onCancel]
    );

    if (unmountOnClose && !mounted) return null;

    return (
        <div
            className={cn(
                'absolute top-[30px] left-0 w-full z-[1000] flex items-start justify-center transition-opacity duration-300',
                visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                className
            )}
            onClick={handleClickAway}
        >
            <div
                className={cn(
                    'bg-white max-h-[90vh] w-full m-2 p-4 relative shadow-[0_2px_8px_rgba(0,0,0,0.33)] transition-all duration-300',
                    visible ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                )}
            >
                <button
                    onClick={onCancel}
                    className="absolute top-0 right-0 p-2 text-[12px] cursor-pointer"
                    aria-label="Close"
                >
                    <Cross/>
                </button>
                <div className="flex flex-col gap-[6px] my-4 text-center">{children}</div>
            </div>
        </div>
    );
};
