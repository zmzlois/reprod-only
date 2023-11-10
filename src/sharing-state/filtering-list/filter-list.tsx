"use client"
import { useState } from 'react';
import { foods, filterItems } from './data';

export default function FilterableList() {

    const [query, setQuery] = useState('');

    const items =  filterItems(foods, query)
    function handleChange(e) {
        setQuery(e.target.value);

    }
    return (
        <div className={"flex flex-col gap-3"}>
            <SearchBar query={query} onChange={handleChange}/>
            <hr className={"bg-white"}/>
            <List items={items} />
        </div>
    );
}

function SearchBar({ query, onChange}: { query: string; onChange: (e) => void }) {


    return (
        <label>
            Search:{' '}
            <input
                value={query}
                className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
                onChange={onChange}
            />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody className={"flex flex-col gap-3"}>
            {items.map(food => (
                <tr key={food.id}>
                    <td>{food.name}: </td>
                    <td>{food.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
