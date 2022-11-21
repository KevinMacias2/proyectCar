import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';









function Example() {

    const [formValue, setformValue] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });


    }

    const [email, setEmail] = useState('');
    const [student, setStudent] = useState([]);



    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        //formData.append("email", formValue.email)
        formData.append("name", formValue.email);
        //formData.append("password", formValue.password)
        axios.post("http://localhost/webprojectGamerConnection/public/api/show_test",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            console.log('response:');
            console.log(response.status);
            if (response.status == 200) {
                //setEmail(response.data);
                setStudent(response.data);
                console.log(response.data);
            }
        }).catch(error => {
            console.log(error);
        })
    }





















    /**
     * const get_name()=>{
        axios.get('http://localhost/folder/api/name_student');
        }
     */


    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email"
                                name="email" value={formValue.email} onChange={onChange}
                            />

                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                name="password" value={formValue.password} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Col>

                    
                        {student.map((student) => (

                            <Card style={{ width: '18rem' }} key={student.id}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{student.email}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        ))}
                    
                        


                    </Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Example;

