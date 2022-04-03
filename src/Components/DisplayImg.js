import React from 'react'
import IMAGES from '../Data/images/imagesData'


export default function DisplayImg() {
    console.log("Imgaes", IMAGES)


    return (
        <div>
            <h1>Displaying Images</h1>
            {IMAGES.map(i => <img width="25%" height="300px" src={i} alt="img1" />)}
            div


        </div>

    )
}
