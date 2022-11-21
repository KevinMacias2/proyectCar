//Actualizar venta
import React, { useState , useEffect} from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const UpdateCustomer = (props) => {



  const [labor_data, setlabor_data] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/laborData_index")
      setlabor_data(response.data)
    }
    getData()
  },[])

  console.log(props)

  const [formValue, setformValue] = useState({
   
    name: props.data.name,
    last_name: props.data.last_name,
    address: props.data.address,
    location: props.data.location,
    city: props.data.city,
    CP: props.data.CP,
    phone: props.data.phone,
    rol_job: props.data.rol_job,
    salary: props.data.salary,
    jobId: props.data.jobId,



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

      formData.append("name", formValue.name)
      formData.append("last_name", formValue.last_sale)
      formData.append("address", formValue.address)
      formData.append("location", formValue.location)
      formData.append("city", formValue.city)
      formData.append("CP", formValue.CP)
      formData.append("phone", formValue.phone)
      formData.append("jobId", formValue.jobId)


    axios.post("api/update_sale/{id}",
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
          <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Customer Update</Form.Label>
        </Stack>

        <Form.Group className="mb-3">
                       
                       <Form.Label>Name of Customer</Form.Label>
                       {/*
                       Se coloca "type" para especificar el tipo de dato que recibirá el campo
                       Se coloca "placeholder" para poner texto en el espacio donde se colocará la información
                       Se coloca "required" para hacer que ese campo sea obligatorio
                       */ }
                       <Form.Control type="text" placeholder="Name" required name="name" value={formValue.name} onChange={onChange} />
                       <Form.Text className="text-muted"></Form.Text>
                       {/*Se coloca el "Form.Control.Feedback" para indicar cuál será la retroalimentación
                       en caso de que la información ingresada sea correcta*/}
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                       {/*Se coloca un "Form.Control.Feedback de tipo ""invalid" para 
                       que aparezca una señal cuando se haya ingresado incorrectamente 
                       la información*/}
                       <Form.Control.Feedback type="invalid">
                           Please add the name
                       </Form.Control.Feedback>
                   </Form.Group> 

                   <Form.Group className="mb-3">
                       <Form.Label>Last name of Customer</Form.Label>
                       <Form.Control type="text" placeholder="Last name" required  name="lastname" value={formValue.last_name} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>

                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                            Please add the last name
                       </Form.Control.Feedback>

                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>Address</Form.Label>
                       <Form.Control type="text" placeholder="Address" required name="address" value={formValue.address} onChange={onChange} />
                       <Form.Text className="text-muted">
                       </Form.Text>

                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the address
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>Location</Form.Label>
                       <Form.Control type="text" placeholder="Location" required
                           name="location" value={formValue.location} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                       <Form.Control.Feedback type="invalid">
                             Please add the location
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>City</Form.Label>
                       {/*Se pone en "type" el tipo de dato "number" para que únicamente permita el ingreso 
                       de números*/}
                       <Form.Control type="text" placeholder="City" required
                           name="city" value={formValue.city} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the city
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>CP</Form.Label>
                       <Form.Control type="text" placeholder="CP" required
                           name="CP" value={formValue.CP} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the CP
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
                       <Form.Label>Rol Job</Form.Label>
                       <Form.Control type="text" placeholder="RolJob" required
                           name="rolJob" value={formValue.rolJob} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the rol job
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>Salary</Form.Label>
                       <Form.Control type="text" placeholder="Salary" required
                           name="salary" value={formValue.salary} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the salary
                       </Form.Control.Feedback>
                   </Form.Group>


           <Form.Group className="mb-3" controlId="formBasicEmail">

               <Form.Label>Job ID</Form.Label>

               <Form.Select type="number" name="jobId" value={formValue.jobId} onChange={onChange} required aria-label="Default select example">
                   <option select disable value="">Select customer ID...</option>
                   {laborData.map((laborData) => ( <option value={laborData.id} >{laborData.name_job}</option>))}
               </Form.Select>

               <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

               <Form.Control.Feedback type="invalid">
                   Please select job ID
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
export default UpdateCustomer;