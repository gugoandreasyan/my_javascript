import React, {Component} from 'react';
import {Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container style={{width:'500px'}}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" placeholder="email"/>
                        <FormText>
                            We'll never share your email whit anyone else
                        </FormText>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                    <FormLabel>Example textarea</FormLabel>
                        <FormControl as="textarea" rows="3"/>
                    </FormGroup>

                    <FormGroup controlId="formBasicCheckbox">
                        <FormCheck type="checkbox" label="chech me out"/>
                    </FormGroup>

                    <Button variant="primary" type="submit">Submit</Button>


                </Form>
            </Container>
        );
    }
}

export default Contacts;