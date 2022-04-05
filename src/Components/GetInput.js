import React from 'react'
import { useState } from 'react'


export default function GetInput() {

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    const getData = (val) => {

        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }

    return (
        <div className='App'>
            <h1>GetInput Box Value</h1>
            <input type="text" onChange={getData} />

            <button onClick={() => setPrint(true)}>Print Data</button>
            {
                print ? <h1>{data}</h1> : null

            }
            <textarea name="tsf" id="" cols="50" rows="10" >
                We can use HTML through props in both component functional and class based.  We can send it by using this.children in functional componenet.


            </textarea>

        </div>
    )
}
