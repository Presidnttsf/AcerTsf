import React, { useState } from 'react'

export default function CounterComponent(props) {

    const [count, setCount] = useState(0);

    const handlePlus = () => {

        setCount(count + 1);

    }
    const handleMinus = () => {

        setCount(count - 1);

    }



    return (
        <div className='App'>
            {/* <h1>Counter Component</h1> */}

            <div style={{ backgroundColor: 'green' }}>
                <span style={{ margin: '10px', color: 'white' }}>{props.name + ':'}</span>
                <button onClick={handleMinus}>-</button>
                <span style={{ margin: '10px', color: 'white' }}>{count}</span>
                <button onClick={handlePlus}>+</button>
                <button style={{ margin: '10px' }} onClick={() => setCount(0)}>Reset</button>



            </div>
        </div >
    )
}
