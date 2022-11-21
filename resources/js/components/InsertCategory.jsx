import React, { useState } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const InsertCategory = () => {

    const [formValue, setformValue] = useState({
    
    description: '',
    minimumWage: '',
  

  })


  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });


  }

  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
   

    const form = e.currentTarget; 
    if (form.checkValidity() === false) {
   
      e.preventDefault();
      e.stopPropagation();


      toast.error('¡Registro Fallido!', {
        position: "top-center", 
        style: { background: "#212121", color: "white", }

      })

    } else {

      toast.success('¡Registro Exitoso!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }
      })

    }

    
    setValidated(true);

    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("description", formValue.description)
    formData.append("minimumWage", formValue.minimumWage)
   
    axios.post("http://localhost/proyectCar/public/api/store_category",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      console.log('response:');
      console.log(response);

    }).catch(error => {
      console.log(error);

    });
  };


  return (

    <div style={{backgroundImage:`url('img/car4.jpg')`,backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed',  marginTop: '-24px',
    paddingTop: '40px'}}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Stack>
                
                <Stack gap={1} className="col-md-4 mx-auto shadow-lg p-3 mb-5 mt-4 bg-dark text-white rounded">


                    <Stack className=" shadow rounded bg-success">
                    
                        <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Add new Category</Form.Label>
                    </Stack>
                   
                    <Form.Group className="mb-3">
                       
                        <Form.Label>Description</Form.Label>
                       
                        <Form.Control type="text" placeholder="Description" required name="description" value={formValue.description} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                       
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                      
                        <Form.Control.Feedback type="invalid">
                            Please add the description
                        </Form.Control.Feedback>
                    </Form.Group> 

                    <Form.Group className="mb-3">
                       
                       <Form.Label>Minimum Wage</Form.Label>
                      
                       <Form.Control type="text" placeholder="MinimumWage" required name="minimumWage" value={formValue.minimumWage} onChange={onChange} />
                       <Form.Text className="text-muted"></Form.Text>
                      
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                     
                       <Form.Control.Feedback type="invalid">
                           Please add the minimum wage
                       </Form.Control.Feedback>
                   </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="The information is correct"
                            feedback="Indicates that the information is correct"
                            feedbackType="invalid"
                        />

                    </Form.Group>

                   
                    <Stack className=" mx-auto col-md-8">

                        <Button variant="success" type="submit">Register</Button>
                        <Toaster />
                    </Stack>
                </Stack >
            </Stack >
        </Form>
    </div>
  );
}
export default InsertCategory;
