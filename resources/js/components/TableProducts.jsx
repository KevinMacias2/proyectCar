import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Table,  } from "react-bootstrap";
import { Link } from "react-router-dom";




   
    
                    
function TableShow(){

    const endpoint ='http://localhost/webprojectGamerConnection/public/api';
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
    },[])
    
    const getProducts = async ()=>{
        const res = await axios.get(`${endpoint}/products`)
        setProducts(res.data)
        console.log(res)
    }

    const deleteProduct = async (id)=>{
        await axios.delete(`${endpoint}/product/${id}`);
        getProducts();


    }

     
    

    return(
        <>
        <br/>
        <Container>
            <Link to={"/webprojectGamerConnection/public/products/insert"}>
            <Button variant="outline-success" >Insert new product</Button>
            </Link>
            
            <br/>
            <br/>
            <Table striped bordered hover variant="dark" >
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Stock</th>
                        <th>Image route</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product)=>(
                 <tr key={product.id}>
                 <td>{product.id}</td>
                 <td>{product.name}</td>
                 <td>{product.cost}</td>
                 <td>{product.stock}</td>
                 <td>{product.image}</td>
                 <td>
                    <Link to={`/webprojectGamerConnection/public/products/update/${product.id}`}>
                    <Button  style={{width:"80px"}}  variant="outline-warning">Update</Button>
                    </Link>
                    <br />
                 <Button onClick={()=>deleteProduct(product.id)} style={{width:"80px", marginTop:"5px"}} variant="outline-danger">Delete</Button></td>
             </tr>))} 
                </tbody>
            </Table>

        </Container>
        
       
        </>
    );
}

export default TableShow;

