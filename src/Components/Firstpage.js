import React from 'react'
import { useState, useEffect } from 'react';

function Firstpage() {
    let tsf = [{ car: 'maruti zen', property: 'bunglow', vehicle: 'private' },
    { car: 'hondacity', property: 'building', vehicle: 'rent' }];
    // // console.log(productData[0].name)
    const [data, setData] = useState(0);
    const [count, setCount] = useState(0);


    useEffect(() => console.log('TSF', tsf), []

    )




    return (
        <div>
            <h1>    useEffect and useState Hooks</h1>
            {/* <p>{JSON.stringify(tsf)}</p> */}

            <h3>Data State = {data}</h3> <br />
            <h3>count state = {count}</h3> <br />
            <button onClick={() => setCount(count + 1)}> count</button>
            <button onClick={() => setData(data + 1)}> data</button>




            {/* <ProductComponent arr={[1, 2, 3, 4, 5, 6]} /> */}
            {/* {props.arr.map((e, i) => <p> i * </p>)} */}



        </div>
    )
}

export default Firstpage

