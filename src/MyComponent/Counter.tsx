import Button from '../Button/Button.tsx'
import React, {useState} from 'react'

function Counter()
{
    const [count, setCount] = useState(0);
    const increment = () =>
    {
        setCount(count + 1);
    }

    const decrement = () =>
    {
        setCount(count - 1);
    }

    return (
        <div className="div--counter-container">
            <p className="div__p--counter-display">Count is {count}</p>
            <Button onClick={increment} content='Increment'/>
            <Button onClick={() => setCount(0)} content='Reset'/>
            <Button onClick={decrement} content='Decrement'/>
        </div>
    );
}

export default Counter