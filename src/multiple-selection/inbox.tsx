"use client"
import { useState } from 'react';
import { letters } from './data';
import Letter from './Letter';

export default function MailClient() {
    const [selectedId, setSelectedId] = useState<number[]>([]);
   // const [toggle, setToggle] = useState(false);

    // TODO: allow multiple selection
    const selected = (toggledId) =>  selectedId.find(id => id === toggledId);

    function handleToggle(toggledId) {
        // TODO: allow multiple selection
       if (selectedId.includes(toggledId)) {
           setSelectedId(selectedId.filter(id => id !== toggledId))
       } else {
           setSelectedId([...selectedId, toggledId])
       }



    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            // TODO: allow multiple selection
                          selected(letter)
                        }
                        onToggle={(id) => {
                            handleToggle(id)
                        }}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedId.length} letters
                    </b>
                </p>
            </ul>
        </>
    );
}
