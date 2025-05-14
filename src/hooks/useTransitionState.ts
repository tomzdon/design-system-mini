import {useEffect, useState} from 'react';

export const useTransitionState = (
    isActive: boolean,
    transitionDuration = 300,
) => {
    const [visible, setVisible] = useState(isActive);
    const [mounted, setMounted] = useState(isActive);

    useEffect(() => {
        if (isActive) {
            setMounted(true);
            setTimeout(() => {
                setVisible(true);
            }, 10);
        } else {
            setVisible(false);
            setTimeout(() => {
                setMounted(false);
            }, transitionDuration);
        }
    }, [isActive, transitionDuration]);

    return {visible, mounted};
};
