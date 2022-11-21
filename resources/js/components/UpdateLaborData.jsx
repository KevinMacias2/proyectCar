import React, { useState } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';

import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const UpdateLaborData = (props) => {

  console.log(props)

  const [formValue, setformValue] = useState({
   
    name_job: props.data.name_job,
    address_job: props.data.address_job,
    phone: props.data.phone,
    location: props.data.location,


  })


  //let history = useHistory(); 

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

    } else {
    

    }

    setValidated(true);

    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("name_job", formValue.name_job)
    formData.append("address_job", formValue.address_job)
    formData.append("phone", formValue.phone)
    formData.append("location", formValue.location)


    axios.post("api/update_laborData/{id}",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      toast.success('¡Successful Update!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }
      })
     
    }).catch(error => {
      console.log(error);
      toast.error('Failed Upgrade!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }

      })

    });
  };


  return (

<div style={{backgroundImage:`url('img/car5.jpg')`,backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed',    marginTop: '-24px',
    paddingTop: '40px'}}>
 

    <Form noValidate validated={validated} onSubmit={handleSubmit}>

    <Stack>
      <Stack gap={1} className="col-md-4 mx-auto shadow-lg p-3 mb-5 mt-4 bg-dark text-white rounded">


        <Stack className=" shadow rounded bg-info">
          <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Brand update</Form.Label>
        </Stack>


        <Form.Group className="mb-3">
          <Form.Label>Name of Job</Form.Label>
          <Form.Control type="text" placeholder="NameJob" required
            name="nameJob" value={formValue.name_job} onChange={onChange} />
          <Form.Text className="text-muted">

          </Form.Text>
          <Form.Control.Feedback>¡Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Name_address" required
            name="nameAddress" value={formValue.name_job} onChange={onChange} />
          <Form.Text className="text-muted">

          </Form.Text>
          <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" required
            name="phone" value={formValue.phone} onChange={onChange} />
          <Form.Text className="text-muted">

          </Form.Text>
          <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the phone
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" required
            name="location" value={formValue.phone} onChange={onChange} />
          <Form.Text className="text-muted">

          </Form.Text>
          <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the location
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
          <Button variant="info" type="submit">Update</Button>
          <Toaster />
        </Stack>

        <Stack className=" mx-auto col-md-8">
          <Button variant="secondary" type="button"  onClick={()=> props.setState({view:'index'})}>Return</Button>
          <Toaster />
        </Stack>
        </Stack>
      </Stack>
    </Form>
    </div>
  );
}
export default UpdateLaborData;