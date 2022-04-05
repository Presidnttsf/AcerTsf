import React from 'react'

export default function User(props) {


    return (
        <div>
            <h1>User Component</h1>


            <button onClick={props.data}>Call Data Function</button> <br />
            <br /> <textarea style={{ backgroundColor: 'lightgreen' }} cols="30" rows="10">Many times we have so many child component that is why we need to pass function as a props instead of creating function on the child component.  Use function in parent component makes thing easy when u have reapeted child component for same thing.  It is good practice.</textarea>
        </div>
    )
}
