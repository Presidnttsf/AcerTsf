import React from 'react'
import { Link } from "react-router-dom";

import { Row, Col, Card, ListGroup, } from 'react-bootstrap';
import IMAGES from '../Data/images/imagesData';


export default function Home() {


    return (
        <div>

            <div className='App'>
                <h3>   Well-Come to TSF practice App</h3>
                <img src={IMAGES[4]} alt="cryptography" width={300} />

            </div >

            <h2 className='App'>INTRODUCTION</h2>
            <Row>
                <Col sm={3}>
                    <h4>Declarative</h4>
                    <p >React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        <b r />
                        <b r />
                        Declarative views make your code more predictable and easier to debug.



                    </p>
                </Col>
                <Col sm={3}>
                    <h4>Component-Based</h4>
                    <p >Build encapsulated components that manage their own state, then compose them to make complex UIs.

                        <b r />
                        <b r />
                        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.



                    </p>
                </Col>
                <Col sm={6}>
                    <h4> Learn Once, Write Anywhere </h4>
                    <p> We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

                        React can also render on the server using Node and power mobile apps using React Native.
                    </p>
                </Col>

            </Row>
            <h1>INDEX TOPICS</h1>

            <Card style={{ width: '18rem' }}>

                <ul className='number'>

                    <li> <Link to="/" >App Page</Link> <br /></li>
                    <li> <Link to="/firstpage" >FIRST PAGE</Link> <b r /></li>
                    <li> <Link to="/trianglecomponent" >Triangle</Link> <b r /></li>
                    <li> <Link to="/formpractice" >Form practice</Link> <br /></li>
                    <li> <Link to="/datafrompc" >Data from PC</Link> <br /></li>
                    <li> <Link to="/axiosapi" >Axios Api page</Link> <br /></li>
                    <li> <Link to="/displayimages" >Displaying Images</Link> <br /></li>
                    <li> <Link to="/printtables" >Printing Table</Link> <br /></li>
                    <li> <Link to="/propscomponent" >Props Practice</Link> <br /></li>
                </ul>



            </Card>

        </div>
    )
}
