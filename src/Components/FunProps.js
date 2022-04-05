import React from 'react'
import Profile from './Profile'
import User from './User'
//Here we are using user component for practice
export default function FunProps() {

    function GetData() {
        alert('Hello from FunProps')
    }



    return (
        <div>
            <h1 className='App'> Pass function as a props </h1>

            <User data={GetData} />
            <Profile data={GetData} />
        </div>
    )
}
