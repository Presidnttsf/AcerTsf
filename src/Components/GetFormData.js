import React, { useState } from 'react'

export default function GetFormData() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [tnc, setTnc] = useState(false);
    const [gender, setGender] = useState('');

    const getFormData = (e) => {

        e.preventDefault()
        console.log(name, tnc, email, phone, gender)

    }

    return (
        <div>
            <h1 className='App'> Get Data from the form</h1>
            <form onSubmit={getFormData}>
                <input size={30} type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} /> <br /> <br />
                <select onChange={(e) => setGender(e.target.value)}>
                    <option>Select option</option>
                    <option>Male</option>
                    <option>Female</option>

                </select> <br /> <br />
                <input size={30} type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <input size={30} type="number" placeholder='Enter phone number' onChange={(e) => setPhone(e.target.value)} /> <br /> <br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.check)} /><span> Accept terms and conditions</span> <br /> <br />
                <button type='submit'>submit</button>
                <button >Clear</button>


            </form> <br />
            <div style={{ color: 'red', backgroundColor: 'black', width: '500px', border: '5px outset yellow' }}>
                <p >This is a basic form practice, but we can use hook form for better handling.</p>
            </div>
        </div >
    )
}
