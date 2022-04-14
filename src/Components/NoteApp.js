
import "bootswatch/dist/lux/bootstrap.min.css";
import React, { useState } from 'react'
import { Form, Container, Card, Navbar, Row, Col } from 'react-bootstrap';


//In this app we are using this libaray npm install @material-ui/core
//Note install but not used.
export default function NoteApp() {

    const [notes, setNotes] = useState([]);

    const [form, setForm] = useState({ title: '', text: '' });



    const handleChange = (e) => {
        const { value, name } = e.target

        setForm({ ...form, [name]: value })

    };

    const addNote = () => {

        console.log(form)
        setNotes(note => [...note, form])
        setForm({ title: '', text: '' })

    };




    return (
        <div>
            <Container>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand >Note App</Navbar.Brand>

                        <p style={{ color: 'white' }}>This is the best notes app on the internet</p>

                    </Container>
                </Navbar>
            </Container>










            <h1 className="App" >NoteCreate</h1>
            <Container className='mt-3' >

                <Form className="mt-3" style={{
                    width: '50%'
                }}>
                    <Form.Group  >
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={handleChange} value={form.title} name='title' type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Text</Form.Label>
                        {/* <Form.Control onChange={handleChange} value={form.text} name='text' type="text" placeholder="Enter text" /> */}
                        <textarea cols="70" rows="10" onChange={handleChange} value={form.text} name='text' type="text" placeholder="Enter text"></textarea>

                    </Form.Group>
                </Form> <br />
                <button onClick={addNote} className='btn btn-dark'>Add Note</button>
            </Container >

            <Container className='mt-3'>

                <h1 className="App">Notes page</h1>
                <Row>
                    {notes.map(note =>
                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>{note.title}</Card.Title>
                                    <Card.Text>
                                        {note.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                    )}
                </Row>
            </Container>

        </div>

    )
}
