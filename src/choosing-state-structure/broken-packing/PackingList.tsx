import {useState} from 'react';

export default function PackingList({
                                        items,
                                        onChangeItem,
                                        onDeleteItem
                                    }) {
    return (
        <ul className={"flex flex-col gap-4"}>
            {items.map(item => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.packed}
                            onChange={e => {
                                onChangeItem({
                                    ...item,
                                    packed: e.target.checked
                                });
                            }}
                        />
                        {' '}
                        {item.title}
                    </label>
                    <button className={"bg-zinc-400 py-1 rounded-md px-4 mx-2"} onClick={() => onDeleteItem(item.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
