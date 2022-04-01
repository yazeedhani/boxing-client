import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const BoxerForm = (props) => {
    const {handleSubmit, handleChange, newBoxer} = props
    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="What is boxer's name?"
                    value={newBoxer.name}
                    name="name"
                    onChange={handleChange}
                />
                <Form.Label>Record</Form.Label>
                <Form.Control
                    placeholder="What is the boxer's record?"
                    value={newBoxer.record}
                    name="record"
                    onChange={handleChange}
                />
                <Form.Label>Active</Form.Label>
                <Form.Control
                    placeholder="Is boxer active?"
                    value={newBoxer.active}
                    type="boolean"
                    name="active"
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default BoxerForm