import React, { useEffect } from 'react'
import Student from './Student'
import { useState } from 'react'
export default function PropsComponent() {
    const [name, setName] = useState('Tauseef')
    //note: This file is link to student.js for using props
    useEffect(() => {
        return name;

    });

    return (
        <div className='App'>
            <h1>#Props in React😍</h1>
            {/* <Student name={name} /> */}
            <Student name={'Tauseef'} age={'29'} other={{ city: 'Nagpur', mobile: '9021980236' }} />
            <Student name={'AMD'} age={'30'} other={{ city: 'Banglore', mobile: '9021980238' }} />
            <Student name={'Tariqu'} age={'25'} other={{ city: 'California', mobile: '9021980240' }} />


            {/* <button onClick={() => { setName('Tauseef Bhai') }}>update name</button> */}

        </div>
    )
}
