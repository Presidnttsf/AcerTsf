import React from 'react'

export default function Student(props) {

    // console.log('check', props)
    return (
        <div className='myCss'>

            {/* < h3 > Hello! {props.name}</h3 > */}
            <h3>You are {props.age} years old.</h3> <br />
            <h4>Your city is {props.other.city} and your phone no. is {props.other.mobile}</h4> <br />




        </div >
    )
}
