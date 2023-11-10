"use client"

import { useState, useContext } from 'react';
import { places } from './data';
import { getImageUrl } from './utils';
import {ImageSizeContext} from "@/passing-data-context/context";

export default function LargeImage() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <ImageSizeContext.Provider value={imageSize}>
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <List  />
        </ImageSizeContext.Provider>
    )
}

function List(

) {

    const listItems = places.map(place =>
        <li key={place.id}>
            <Place
                place={place}

            />
        </li>
    );
    return <ul>{listItems}</ul>;
}

function Place({ place }) {
    return (
        <>
            <PlaceImage
                place={place}

            />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    );
}

function PlaceImage({ place}) {
    const imageSize = useContext(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}
