import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, FormCheck } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link, useNavigate } from "react-router-dom";



const InsertUser = () => {
    const endpoint = 'http://localhost/webprojectGamerConnection/public/api/user';

    //Get all roles 
    const [roles, setRoles] = useState([])

    useEffect(() => {
        getRoles()
    }, [])

    const getRoles = async () => {
        const res = await axios.get(`http://localhost/webprojectGamerConnection/public/api/roles`)
        setRoles(res.data)
        console.log(res)
    }






    const [name, setName] = useState('');
    const [lastname_p, setLastNameP] = useState('');
    const [lastname_m, setLastNameM] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [role_id, setRole] = useState(0);

    const navigate = useNavigate();


    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            name: name, lastname_p: lastname_p, lastname_m: lastname_m, password: password,
            email: email, gender: gender, age: age, role_id: role_id
        });
        navigate('//localhost/webprojectGamerConnection/public/users');

    }

    return (
        <Container style={{ marginTop: '20px' }}>
            <Form onSubmit={store}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname_p">
                    <Form.Label>Father's Lastname</Form.Label>
                    <Form.Control value={lastname_p} onChange={(e) => setLastNameP(e.target.value)} type="text" placeholder="Father's Lastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname_m">
                    <Form.Label>Mother's Lastname</Form.Label>
                    <Form.Control value={lastname_m} onChange={(e) => setLastNameM(e.target.value)} type="text" placeholder="Mother's lastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                </Form.Group>




                <Form.Group className="mb-3" controlId="gender">
                    <Form.Label>Gender</Form.Label>

                    <Form.Select onChange={(e) => setGender(e.target.value)} >
                        <option hidden defaultValue={true}>Select an option</option>
                        <option value={"Man"}>Man</option>
                        <option value={"Woman"}>Woman</option>
                    </Form.Select>

                </Form.Group>






                <Form.Group className="mb-3" controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="role_id">
                    <Form.Label>Role</Form.Label>

                    <Form.Select onChange={(e) => setRole(e.target.value)} >
                        <option hidden defaultValue={true}>Select your role</option>
                        {roles.map(role =>
                            <option key  = {role.id} value={role.id}>{role.name}</option>

                        )}

                    </Form.Select>
                </Form.Group>
                {/*
                <Form.Group className="mb-3" controlId="role_id">
                <Form.Label>Role</Form.Label>
                <Form.Control value={role_id} onChange={(e)=>setRole(e.target.value)} type="number" placeholder="Role" />
            </Form.Group>
            
            
            
            */}






                <Button variant="primary" type="submit">
                    Save
                </Button>
                {'   '}
                <Link to={'//localhost/webprojectGamerConnection/public/users'}>
                    <Button variant="dark">
                        Cancel
                    </Button>
                </Link>
            </Form>

        </Container>


    );
}

export default InsertUser;