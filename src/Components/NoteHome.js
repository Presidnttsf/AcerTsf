import React from 'react'
import { Container } from 'react-bootstrap'
import NoteHeader from './NoteHeader'


export default function NoteHome() {

    return (
        <Container className='mt-3'>
            <NoteHeader />
            <h1>Note App</h1>
            <p>This is the best notes app on the internet</p>

        </Container>
    )
}
