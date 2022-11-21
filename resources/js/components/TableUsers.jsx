import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Table,  } from "react-bootstrap";
import { Link } from "react-router-dom";




   
const endpoint ='http://localhost/webprojectGamerConnection/public/api';
                    
function TableUser(){

    

    //Get users
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        getUsers()
    },[])
    
    const getUsers = async ()=>{
        const res = await axios.get(`${endpoint}/users`)
        setUsers(res.data)
        console.log(res)
    }

    const deleteUser = async (id)=>{
        await axios.delete(`${endpoint}/user/${id}`);
        getUsers();


    }
    
    

    return(
        <>
        <br/>
        <Container>
            <Link to={"/webprojectGamerConnection/public/users/insert"}>
            <Button variant="outline-success" >Insert new user</Button>
            </Link>
            
            <br/>
            <br/>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Father LastName</th>
                        <th>Mother LastName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user)=>(

                   
                 <tr key={user.id}>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.lastname_p}</td>
                 <td>{user.lastname_m}</td>
                 <td>{user.password}</td>
                 <td>{user.email}</td>
                 <td>{user.gender}</td>
                 <td>{user.age}</td>
                 <td>{user.role_id}</td>
                 
                 
                 <td>
                    <Link to={`/webprojectGamerConnection/public/users/update/${user.id}`}>
                    <Button  style={{width:"80px"}}  variant="outline-warning">Update</Button>
                    </Link>
                    
                 
                 <br />
                 <Button onClick={()=>deleteUser(user.id)} style={{width:"80px", marginTop:"5px"}} variant="outline-danger">Delete</Button></td>
             </tr>))} 

            
                        
                       
                   
                </tbody>
            </Table>

        </Container>
        
       
        </>
    );
}

export default TableUser;

