import React, { useState } from 'react'
import CounterComponent from './CounterComponent'

export default function CounterApp() {

    const [arr, setArr] = useState([]);
    const [name, setName] = useState([]);

    const handleAdd = () => {
        let newarr = [...arr, name]

        console.log(arr, name)
        setArr(newarr);

    };

    const handleChange = (e) => {
        setName(e.target.value);

    };

    const handleDelete = () => {
        let newarr = [];
        setArr(newarr);

    }

    const mapper = (e) => {
        console.log('e', e)
        return <CounterComponent name={e} />
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Counter App</h1>
            <h2 className='App'>You can add your counter here</h2>
            <div className='App'>
                <input onChange={handleChange} type="text" placeholder='counter name' />                 <button onClick={handleAdd}>Add Counter</button>
                <button onClick={handleDelete}>Delete All</button> <span> {arr.length}</span>

            </div>
            <div>
                {arr.map(mapper)}

            </div>
        </div>




    )
}
