import React, { useState } from 'react'



export default function Profile(props) {

    const [loggedIn, setLoggedIn] = useState(3)


    return (
        <div>

            {/* {loggedIn ? <h1> WelCome Tauseef </h1> : <h1> WelCome Guest </h1>}
            <button onClick={() => setLoggedIn(true)}>Log In</button>
            <button onClick={() => setLoggedIn(false)}>Log Out</button> */}
            {loggedIn == 1 ? <h1> WelCome User 1 </h1>
                : loggedIn == 2 ? <h1> WelCome 2 </h1>
                    : <h1> WelCome 3 </h1>}
            <div style={{ color: 'red', backgroundColor: 'black', width: '500px', border: '5px outset yellow' }}>
                <br />    <button onClick={props.data}>Call Data Function</button> <br />


                <p >
                    This part is on 2:40:30 hours in React Js full tutorial in Hindi
                </p>
            </div>

        </div>
    )
}
