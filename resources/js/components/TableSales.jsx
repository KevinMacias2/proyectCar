import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Table} from "react-bootstrap";
import { Link } from "react-router-dom";




   
    
const endpoint = 'http://localhost/webprojectGamerConnection/public/api';

function TableSale(){

    const [sales, setSale] = useState([])

    useEffect(()=>{
        getSale()
    },[])
    
    const getSale = async ()=>{
        const res = await axios.get(`${endpoint}/sales`)
        setSale(res.data)
        console.log(res)
    }

    const deleteSale= async (id) =>{

        await axios.delete(`${endpoint}/sale/${id}`);
        getSale();

    }

     
    

    return(
        <>
        <br/>
        <Container>
            <Link to={`//localhost/webprojectGamerConnection/public/sales/insert`}>
            <Button variant="outline-success" >Insert new sale</Button>
            </Link>
            
            <br/>
            <br/>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Client</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {sales.map((sale)=>(
                 <tr key={sale.id}>
                 <td>{sale.id}</td>
                 <td>{sale.product_id}</td>
                 <td>{sale.client_id}</td>
                 <td>{sale.stock}</td>
                 
                 <td>
                    <Link to={`//localhost/webprojectGamerConnection/public/sales/update/${sale.id}`}>
                    <Button  style={{width:"80px"}}  variant="outline-warning">Update</Button>
                    </Link>
                    
                 <br /><Button onClick={() => deleteSale(sale.id)} style={{width:"80px", marginTop:"5px"}} variant="outline-danger">Delete</Button></td>
             </tr>))} 
                </tbody>
            </Table>

        </Container>
        
       
        </>
    );
}

export default TableSale;

