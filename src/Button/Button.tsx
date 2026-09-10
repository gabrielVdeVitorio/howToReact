import styles from './Button.module.css';
import React, { useRef } from 'react';

interface ButtonProps {
    whetherRepeat?: string;
    holdTime?: number;
    content?: string;
    onClick?: (e: React.PointerEvent<HTMLButtonElement>) => void;
    onDoubleClick?: (e: React.PointerEvent<HTMLButtonElement>) => void;
    onPressedAndHold?: () => void;
}

function Button(
    {
        onPressedAndHold,
        onDoubleClick,
        onClick,
        content = "Click here",
        holdTime = 1000,
        whetherRepeat = 'repeat'
    }: ButtonProps)
{
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isHoldRef = useRef<boolean>(false);
    const holdRepeatTicket = useRef<number>(null);
    const whetherRepeatFunction =
    {
        repeat: () => { holdRepeatTicket.current = requestAnimationFrame(onPressedAndHold) },
        norepeat: () => { onPressedAndHold() },
        cancelrepeat: () =>
        {
            cancelAnimationFrame(holdRepeatTicket.current);
            this.cancelnorepeat();
        },
        cancelnorepeat: () =>
        {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }
    const startHold = () =>
    {
        isHoldRef.current = false;
        if (onPressedAndHold)
        {
            timerRef.current = setTimeout(() =>
            {
                isHoldRef.current = true;
                whetherRepeatFunction[whetherRepeat]();
            }, holdTime);
        }
    };

    const cancelHold = () =>
    {
        if (timerRef.current)
        {
            whetherRepeatFunction[`cancel${whetherRepeat}`];
        }
    };

    const handleClick = (e: React.PointerEvent<HTMLButtonElement>) =>
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
            onPointerDown={cancelHold}
            onPointerUp={cancelHold}
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