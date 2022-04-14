import React, { useState } from 'react'
import { Card, Stack } from 'react-bootstrap';

export default function CounterComponent(props) {

    const [count, setCount] = useState(0);

    const handlePlus = () => {

        setCount(count + 1);

    }
    const handleMinus = () => {

        setCount(count - 1);

    }



    return (
        <div className='App' >

            <Stack gap={3}>
                <div className="p">
                    <span style={{ margin: '10px', color: 'black' }}>{props.name + ':'}</span>
                    <button onClick={handleMinus}>-</button>
                    <span style={{ margin: '10px', color: 'black' }}>{count}</span>
                    <button onClick={handlePlus}>+</button>
                    <button style={{ margin: '10px' }} onClick={() => setCount(0)}>Reset</button>





                </div>

            </Stack>


        </div >
    )
}
