import React from 'react'
import { useState } from 'react'

export default function HideShow() {

    const [status, setStatus] = useState(true)

    return (
        <div className='App'>
            {/* by using 2 button  */}
            {/* <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button> */}
            {/* by using one button toggle */}
            <button onClick={() => setStatus(!status)}>Toggle</button>
            {
                status ? <h1>Hide and Show</h1> : null
            }

        </div>
    )
}
