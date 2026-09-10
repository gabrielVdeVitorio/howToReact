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
            console.log('Entering cancel repeat');
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
                console.log('Entering the start hold');
                isHoldRef.current = true;
                whetherRepeatFunction[whetherRepeat]();
            }, holdTime);
        }
    };

    const cancelHold = () =>
    {
        console.log(`Executing cancelHold function. whetherRepeat is '${whetherRepeat}' and whetherRepeatFunci.`);
        if (timerRef.current)
        {
            console.log(`Entering in the cancelHold if statement.`);
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
            onPointerDown={startHold}
            onPointerUp={cancelHold}
            onPointerLeave={cancelHold}
            onClick={handleClick}
            onDoubleClick={onDoubleClick}
            className={styles.button}
        >
            {content}
        </button>
    );
}

export default Button;