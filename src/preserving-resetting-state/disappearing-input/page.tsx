"use client"

import { useState } from 'react';

export default function ShowHint() {
    const [showHint, setShowHint] = useState(false);

    return(<>
        {showHint &&  (<p><i>Hint: Your favorite city?</i></p>)}
            <div>

                <Form />
                <button onClick={() => {
                    setShowHint(!showHint);
                }}>{showHint ? "Hide hint" : "Show hint"}</button>
            </div>
 </>
    )
}

function Form() {
    const [text, setText] = useState('');
    return (
        <textarea
            className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
            value={text}
            onChange={e => setText(e.target.value)}
        />
    );
}
