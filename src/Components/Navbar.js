import React from 'react'
import { Container, Navbar, Nav, Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function NavbarComponent() {
    return (
        <div>

            <Container fluid>
                <Navbar bg="light" variant="light">
                    <Container >
                        <Navbar.Brand>  <Link to="/home" className='navlink' >TSF PRACTICE</Link></Navbar.Brand>
                        <Nav className="me-auto">

                            <Nav.Link>  <Link to="/home" className='navlink'>Home</Link></Nav.Link>
                            <Nav.Link>  <Link to="/links" className='navlink'>Links</Link></Nav.Link>


                            <Nav.Link>  <Link to="/formpractice" className='navlink'>FormPractice</Link></Nav.Link>

                            <Nav.Link>  <Link to="/" className='navlink'>ABOUT</Link></Nav.Link>
                            <Nav.Link>  <Link to="/" className='navlink'>CONTACT US</Link></Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </Container>

        </div>
    )
}
