import React from 'react'
import { Container, Navbar, Nav, Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//adding/installing bootswatch n library


export default function NoteHeader() {


    return (
        <div>
            <Container>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand >Notes</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/notehome'>
                                    <Nav.Link >Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/notenotes'>
                                    <Nav.Link >Notes</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/notecreate'>
                                    <Nav.Link >Create</Nav.Link>
                                </LinkContainer>




                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

        </div>
    )
}
