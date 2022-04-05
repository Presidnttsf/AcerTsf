import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";

export default function FormPractice() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const getData = (e) => {
        console.log('testing submit')



    }



    return (
        <div>
            <h1 className='App'>UseForm Hooks of React</h1>
            <Form onSubmit={handleSubmit(getData)}>


                <Col sm={3}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                            We'll never share your details with anyone else.
                        </Form.Text>
                    </Form.Group>

                </Col>
                <Col>
                    <select>
                        <option>Select option</option>
                        <option>Male</option>
                        <option>Female</option>

                    </select>


                </Col> <br />




                <Col sm={3}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>


                <Col sm={3}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control type="number" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your contact with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <input type="checkbox" /> <span> Accept terms and conditions</span>
                <Col sm={3}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Col>

            </Form>

        </div >
    )
};
