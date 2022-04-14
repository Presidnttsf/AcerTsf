import React, { useState } from 'react'
import { Form, Container } from 'react-bootstrap';
import NoteHeader from './NoteHeader';

export default function NoteCreate({ setNotes }) {

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
            <NoteHeader />
            <h1 >NoteCreate</h1>
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
                        <textarea cols="70" rows="10" onChange={handleChange} value={form.text} name='text' type="text" placeholder="Enter text"></textarea>
                    </Form.Group>
                </Form> <br />
                <button onClick={addNote} className='btn btn-dark'>Add Note</button>
            </Container >





        </div >
    )
}
