//Actualizar venta
import React, { useState , useEffect} from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const UpdateSale = (props) => {

  const [cars, setCars] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/cars")
      setCars(response.data)
    }
    getData()
  },[])

  const [customers, setCustomers] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/customer_index")
      setCustomers(response.data)
    }
    getData()
  },[])

  const [sellers, setSellers] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/seller_index")
      setSellers(response.data)
    }
    getData()
  },[])

  console.log(props)

  const [formValue, setformValue] = useState({
   
    date_sale: props.data.date_sale,
    carId: props.data.carId,
    customerId: props.data.customerId,
    sellerId: props.data.sellerId,



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

      formData.append("date_sale", formValue.date_sale)
      formData.append("carId", formValue.carId)
      formData.append("customerId", formValue.customerId)
      formData.append("sellerId", formValue.sellerId)


    axios.post("api/update_sale/{id}",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      toast.success('¡Actualización Exitosa!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }
      })

    }).catch(error => {
      console.log(error);
      toast.error('¡Actualización Fallida!', {
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
          <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Sale Update</Form.Label>
        </Stack>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date sale</Form.Label>
          <Form.Control type="date" placeholder="Date_Sale" required
            name="date_sale" value={formValue.date_sale} onChange={onChange} />
          <Form.Text className="text-muted">
          
          </Form.Text>
          <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the date sale
          </Form.Control.Feedback>
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car</Form.Label>
          <Form.Select type="number" name="carId" value={formValue.carId} onChange={onChange}required aria-label="Default select example">
            <option select disable value="">Select car ID...</option>
             {cars.map((car) => ( <option value={car.id} >{car.model}</option>))}
          </Form.Select>
       
          <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the car
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer</Form.Label>
          <Form.Select type="number" name="customerId" value={formValue.customerId} onChange={onChange} required aria-label="Default select example">
            <option select disable value="">Select customer ID...</option>
            {customers.map((customer) => ( <option value={customer.id} >{customer.name}</option>))}
          </Form.Select>
          <Form.Text className="text-muted">
          
          </Form.Text>
          <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the customer
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seller</Form.Label>
          <Form.Select type="number" name="sellerId" value={formValue.sellerId} onChange={onChange} required aria-label="Default select example">
            <option select disable value="">Select seller ID...</option>
            {sellers.map((seller) => ( <option value={seller.id} >{seller.name}</option>))}
          </Form.Select> 
          <Form.Text className="text-muted">
          
          </Form.Text>
          <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please add the seller
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
export default UpdateSale;