import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Table} from "react-bootstrap";
import { Link } from "react-router-dom";




   
const endpoint ='http://localhost/webprojectGamerConnection/public/api';
                    
function TableRole(){

    const [roles, setRole] = useState([])

    useEffect(()=>{
        getRole()
    },[])
    
    const getRole = async ()=>{
        const res = await axios.get(`${endpoint}/roles`)
        setRole(res.data)
        console.log(res)
    }

    const deleteRole = async (id)=>{
        await axios.delete(`${endpoint}/role/${id}`);
        getRole();
    }

     
    

    return(
        <>
        <br/>
        <Container>
            <Link to={"/webprojectGamerConnection/public/roles/insert"}>
            <Button variant="outline-success">Insert new role</Button>
            </Link>
            
            <br/>
            <br/>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {roles.map((role)=>(
                 <tr key={role.id}>
                 <td>{role.id}</td>
                 <td>{role.name}</td>
                 
                 <td>
                    <Link to={`/webprojectGamerConnection/public/roles/update/${role.id}`}>
                    <Button  style={{width:"80px"}}  variant="outline-warning">Update</Button>
                    </Link>
                    <br />
                 <Button onClick ={()=>deleteRole(role.id)}
                 style={{width:"80px", marginTop:"5px"}} variant="outline-danger">Delete</Button></td>
             </tr>))} 
                </tbody>
            </Table>

        </Container>
        
       
        </>
    );
}

export default TableRole;

