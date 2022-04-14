import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import NoteHeader from './NoteHeader';


export default function NoteNotes({ notes }) {

    return (

        <Container className='mt-3'>
            <NoteHeader />
            <h1>Notes page</h1>
            <Row>
                {notes.map(note =>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title style={{ fontFamily: " Arial, Helvetica, sans-serif", backgroundColor: 'grey', color: 'green' }}>{note.title}</Card.Title>
                                <Card.Text>
                                    {note.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                )}
            </Row>
        </Container>
    )


};
