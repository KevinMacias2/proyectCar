import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//route api for methods
const endpoint = 'http://localhost/webprojectGamerConnection/public/api/role/';

const UpdateRole =()=>{
    //Const state for store data
    const [name, setName] = useState([]);
    //const to use navigate
    const navigate = useNavigate();


    //Const to get id company
    const {id} = useParams();

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, 
        { name: name})
        navigate('//localhost/webprojectGamerConnection/public/roles');
    }

    useEffect(()=>{
        const getRoleById = async () => {
            const res = await axios.get(`${endpoint}${id}`)
            setName(res.data.name);
        }
            getRoleById()
    }, [])

    return(
        <Container style={{marginTop:'20px'}}>
            <Form onSubmit={update}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
            </Form.Group>
            <Button  variant="primary" type="submit">
                Save
            </Button>
            {'   '}
            <Link  to ={'//localhost/webprojectGamerConnection/public/roles'}>
            <Button  variant="dark">
                Cancel
            </Button>
            </Link>
        </Form>

        </Container>
    );


}

export default UpdateRole;