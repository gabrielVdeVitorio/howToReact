import Counter from './Counter.tsx'
import Button from '../Button/Button.tsx'
import './MyComponent.css'
import React, {useState} from 'react'

function MyComponent()
{
    const [name, setName] = useState('guest');
    const [age, setAge] = useState(0);

    const update = () =>
    {
        setName('Gabriel');
        setAge(5);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <Button onClick={update} content='Update your data'/>
        </div>
    );
}

export default MyComponent