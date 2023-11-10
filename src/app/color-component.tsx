"use client"
import { useState, useEffect } from 'react';
import Clock from './color-clock';

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function ClockComponent() {
    const time = useTime();
    const [color, setColor] = useState('text-pink-400');
    return (
        <div>
            <p>
                Pick a color:{' '}
                <select value={color} className={"text-zinc-900"} onChange={e => setColor(e.target.value)}>
                    <option value="text-pink-400">lightcoral</option>
                    <option value="text-blue-600">midnightblue</option>
                    <option value="text-purple-500">rebeccapurple</option>
                </select>
            </p>
            <Clock color={color} time={time.toLocaleTimeString()} />
        </div>
    );
}