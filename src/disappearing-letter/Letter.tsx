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
                onHover(letter.id);
            }}
            onPointerMove={() => {
                onHover(letter.id);
            }}
        >
            <button onClick={() => {
                onToggleStar(letter.id);
            }}>
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
        </li>
    )
}
