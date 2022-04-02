import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function LinksComponent() {



    return (

        <Container fluid>
            <Row>


                <h1>This is my link page</h1>

                <p>This is link to Home:  <Link to="/home" >Home</Link></p>


                <p> This is link to first page:  <Link to="/firstpage" >FIRST PAGE</Link></p>

                <p>This is link to Triangle:  <Link to="/trianglecomponent" >Triangle</Link>          </p>
                <p>This is link to Form Practice:  <Link to="/formpractice" >Form practice</Link>            </p>
                <p>            This is link to Data from PC with useEffect practice:  <Link to="/datafrompc" >Data from PC</Link>            </p>
                <p>            This is link to Axios page with useEffect practice:  <Link to="/axiosapi" >Axios Api page</Link>            </p>

            </Row>
        </Container>



    )
}
