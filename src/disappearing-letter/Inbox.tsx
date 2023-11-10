"use client"

import { useState } from 'react';
import { initialLetters } from './data';
import Letter from './Letter';
import {set} from "zod";

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedLetterId, setHighlightedLetterId] = useState(null);

 function handleHover(letterId){
        setHighlightedLetterId(letterId);
 }

    function handleStar(starred) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul className={"flex flex-col gap-4"}>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedLetterId
                        }
                        onHover={handleHover}

                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}
