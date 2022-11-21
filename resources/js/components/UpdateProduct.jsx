import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const endpoint = 'http://localhost/webprojectGamerConnection/public/api/product/';

const UpdateProduct = () =>{

    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const {id} = useParams();

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, 
        { name: name, cost: cost, stock: stock, image: image })
        navigate('//localhost/webprojectGamerConnection/public/products');
    }

    useEffect(()=>{
        const getProductById = async () => {
            const res = await axios.get(`${endpoint}${id}`)
            setName(res.data.name);
            setCost(res.data.cost);
            setStock(res.data.stock);
            setImage(res.data.image);
        }
            getProductById()
    }, [])

    return (
        <Container style={{marginTop:'20px'}}>
            <Form onSubmit={update}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product name</Form.Label>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control value={cost} onChange={(e)=>setCost(e.target.value)} type="number" placeholder="Cost" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
                <Form.Label>stock</Form.Label>
                <Form.Control value={stock} onChange={(e)=>setStock(e.target.value)} type="number" placeholder="Stock" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image route</Form.Label>
                <Form.Control value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Link" />
            </Form.Group>
            <Button  variant="primary" type="submit">
                Save
            </Button>
            {'   '}
            <Link  to ={'//localhost/webprojectGamerConnection/public/products'}>
            <Button  variant="dark">
                Cancel
            </Button>
            </Link>
        </Form>

        </Container>
        

    );

  
}

export default UpdateProduct;