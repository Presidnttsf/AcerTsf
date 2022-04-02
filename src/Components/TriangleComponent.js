import React from 'react'
import { useState } from 'react';
import { Row } from 'react-bootstrap';
export default function TriangleComponent() {

    const [print, setPrint] = useState([]);
    const [print1, setPrint1] = useState([]);
    const [name, setName] = useState([]);
    const [heading, setHeading] = useState('Details');
    const [arr, setArr] = useState([]);


    const getNumber = (n) => {
        console.log("Get Num", n)
        let s = '';
        for (let index = 1; index <= n; index++) {
            s += index + ' ';


        }

        return s
    }

    const getArrayByNumber = (e) => {
        console.log('Array', e)
        return [...Array(Number(e))].map((a, b) => b + 1)
    }

    const handleChange = (e) => {
        let temp = getArrayByNumber(Number(e.target.value));
        console.log('Arr', temp)
        setPrint(temp)
    }


    const getNumber1 = (n) => {
        console.log("Get Num", n)
        let s = '';
        for (let index = 0; index <= n; index++) {
            s += print1[index] + ' ';
        }

        return s
    }
    const handleChange1 = (e) => {
        let str = e.target.value;

        let arr = str.split("");
        console.log('Arr', arr)
        setPrint1(arr)
    }

    const handleAdd = () => {
        let newArr = [...arr, print.length];
        setArr(newArr);
        setHeading("ABC")
        console.log("Arr, arr");
    }

    const mapper = (e) => {
        console.log('check', arr)
        return <p>
            {print.map((e) => {
                return <p>
                    {getNumber(e)}

                </p>
            })}
        </p>

    }
    const Triangle = (p) => {
        return (
            <>
                {p.map((e) => {
                    return <p>
                        {getNumber(e)}
                    </p>
                }
                )
                }
            </>
        )
    }

    return (
        <div>


            <h1>Print Triangle of size {print.length}  </h1>
            <input onChange={handleChange} type="number" placeholder='type number' /> <br />
            <input onChange={handleChange1} type="text" />
            <br />
            count ={arr.length}
            <br />
            <button onClick={handleAdd}>Add</button>

            {arr.map((e, i) => {
                return <p>
                    {Triangle(getArrayByNumber(e))}
                </p>

            })}


            <div className="bodydiv">
                {arr.map(mapper)}
            </div>

        </div>


    );
};
