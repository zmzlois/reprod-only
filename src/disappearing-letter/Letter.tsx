"use client"
export default function Letter({
                                   letter,
                                   isHighlighted,
                                   onHover,
                                   onToggleStar,
                               }) {
    return (
        <li
            className={
                isHighlighted ? 'bg-blue-400' : ''
            }
            onFocus={() => {
                onHover(letter);
            }}
            onPointerMove={() => {
                onHover(letter);
            }}
        >
            <button onClick={() => {
                onToggleStar(letter);
            }}>
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
        </li>
    )
}
