import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';

export default function PrintTable() {

    const [arr, setArr] = useState([]);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const handleChange = (e) => {
        let start = (e.target.value)
        setStart(start);
    }
    const handleChange1 = (e) => {
        let limit = (e.target.value)
        setEnd(limit);
    }

    const table = (a, b) => {
        if (!a)
            return

        if (!b)
            return null
        let out = [];

        for (let index = 1; index <= b; index++) {
            // console.log(a * index);
            out.push(<h3 className='myCss'> {`${a} * ${index} = ${a * index}`}</h3>)

        }
        const finalOut = (
            <>
                <br />
                <h3 >{a}'s table till {b}</h3>
                {out}

            </>
        )

        return finalOut;

    }
    const handleAdd = () => {
        let newArr = [...arr, [start, end]];
        console.log(arr)
        setArr(newArr);

    };





    return (
        <div>
            <h1>Printing Tables</h1>
            <input type="number" placeholder='table number' onChange={handleChange} />
            <input type="number" placeholder='table limit' onChange={handleChange1} />
            <button onClick={handleAdd}>Show Table</button>
            <Row>
                {arr.map((e) =>
                    <Col sm={4}>
                        {table(e[0], e[1])}
                    </Col>
                )}
            </Row>
        </div>
    )
}
