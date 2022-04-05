import React from 'react'
import IMAGES from '../Data/images/imagesData'

export default function FullImages() {
    return (
        <div className='App'>
            <h1>Displaying Full Image</h1>
            <img src={IMAGES[0]} alt="" />

        </div>
    )
}
// use props method similar to imdb app
