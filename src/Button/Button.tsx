import styles from './Button.module.css';
import React, { useRef } from 'react';

interface ButtonProps {
    holdTime?: number;
    content?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onDoubleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onPressedAndHold?: () => void;
}

function Button(
    {
    onPressedAndHold,
    onDoubleClick,
    onClick,
    content = "Click here",
    holdTime = 1000,
    }: ButtonProps)
    {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isHoldRef = useRef<boolean>(false);
    const isHolding = () => { while (isHoldRef.current) { if (onPressedAndHold) onPressedAndHold} }
    const startHold = () =>
    {
        isHoldRef.current = false;
        timerRef.current = setTimeout(() =>
        {
            isHoldRef.current = true;
            isHolding();
        }, holdTime);
    };

    const cancelHold = () =>
    {
        if (timerRef.current)
        {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    {
        if (isHoldRef.current)
        {
            e.preventDefault();
            return;
        }
        if (onClick) onClick(e);
    };

    return (
        <button
            onMouseDown={startHold}
            onMouseUp={cancelHold}
            onMouseLeave={cancelHold}
            onTouchStart={startHold}
            onTouchEnd={cancelHold}
            onClick={handleClick}
            onDoubleClick={onDoubleClick}
            className={styles.button}
        >
            {content}
        </button>
    );
}

export default Button;