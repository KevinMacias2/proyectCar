import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link, useNavigate } from "react-router-dom";



const InsertProduct = () => {
    const endpoint = 'http://localhost/webprojectGamerConnection/public/api/product';
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, { name: name, cost: cost, stock: stock, image: image });
        navigate('//localhost/webprojectGamerConnection/public/products');

    }

    return (
        <Container style={{marginTop:'20px'}}>
            <Form onSubmit={store}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product name</Form.Label>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Product name" />
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

export default InsertProduct;