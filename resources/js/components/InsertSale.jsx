//Importaciones:
import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const InsertSale = () => {

    const [cars, setCar] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("/api/category_index")
        setCars(response.data)
      }
      getData()
    },[])

    const [customers, setCustomer] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("/api/customer_index")
        setCars(response.data)
      }
      getData()
    },[])

    const [sellers, setSeller] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("/api/seller_index")
        setCars(response.data)
      }
      getData()
    },[])



    const [formValue, setformValue] = useState({
    
    date_sales: '',
    carId: '',
    customerId: '',
    sellerId: '',
  

  })

  //let history = useHistory(); 

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });


  }

  const [validated, setValidated] = useState(false);// Declaración de una variable de estado que llamaremos "validated"
  const handleSubmit = (e) => {
    //la constante "handleSubmit" atrapa el evento "e" que es el envío del formulario.

    const form = e.currentTarget; 
    if (form.checkValidity() === false) {
      /*Si la validación del formulario es falsa entonces se detendrá el envío del formulario y 
            de la propagación */
      e.preventDefault();
      e.stopPropagation();

      /*Además, aparecerá una notificación que indique
              que el formulario falló*/
      toast.error('¡Registro Fallido!', {
        position: "top-center", //posición de la notificación en la pantalla
        /*se indica el color del fondo de la notificación y el color de la letra: 
        (negro y blanco respectivamente)*/
        style: { background: "#212121", color: "white", }

      })

    } else {
      /*En caso de que el formulario sí haya sido validado correctamente se enviará una 
            notificación de registro exitoso. La posición y el color serán los mismos que en la notificación
            anterior*/

      toast.success('¡Registro Exitoso!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }
      })

    }

    
    setValidated(true);

    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("date_sales", formValue.date_sales)
    formData.append("carId", formValue.carId)
    formData.append("customerId", formValue.customerId)
    formData.append("sellerId", formValue.sellerId)

    

    axios.post("http://localhost/proyectCar/public/api/store_seller",
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
     /*Imagen que estara de fondo del formulario 
       Abajo de este comentario, hay un "Form". A éste se le colocó el "noValidate" para que no se use
       la validación del navegador*/

    /*el evento "OnSubmit" se iguala a "handleSubmit".
 De esta manera obtendrá la información de lo que suceda con el envío del formulario en la parte donde se
 declararon las constantes (arriba)
 
 el evento "validated" se iguala a "validated".
 De esta manera obtendrá la información de lo que suceda con la validación del formulario en la parte donde 
 se
 declararon las constantes
 */
    <div style={{backgroundImage:`url('img/car4.jpg')`,backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed',  marginTop: '-24px',
    paddingTop: '40px'}}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/*
            
            Se crea un "Stack" con un "gap" de 1 (separación entre los campos que se rellenarán)
            El "Stack" cubrirá todos los campos.
            Se le coloca un "col-md-4" (largo de los campos)
            Se coloca un "mx-auto" para centrar los elementos del formulario
            Se coloca un "shadow-lg" para ponerle sombra a todo el conjunto de los campos
            Se coloca un "p-3" para regular qué tan pegados estarán los campos al borde del Stack
            Se coloca un "mb-5" para establecer el margen-inferior o el relleno-inferior
            Se coloca un "mt-4" para establecer el qué tan pegado estara el "Stack" del margen superior
            Se coloca un "bg-dark text-white" para modificar el color del "Stack" y de las letras.
            Se coloca un "rounded" para redondear los bordes del "Stack"
            */}
            <Stack>
                
                <Stack gap={1} className="col-md-4 mx-auto shadow-lg p-3 mb-5 mt-4 bg-dark text-white rounded">

                    {/*Se crea otro Stack:
                    con "shadow se agrega sombra regular
                    con "rounded" se redondea los bordes
                    con "bg-success" se hace que el recuadro sea verde"*/}
                    <Stack className=" shadow rounded bg-success">
                        {/*Se coloca un "Form.Label" para hacer un encabezado
                        Se coloca un "fw-bold" para hacer que las letras del encabezado estén en "negritas"
                        Se coloca un "p-3" para regular qué tan pegado estará el encabezado al borde del Stack
                        Se coloca un "mb-1" para establecer el margen-inferior o el relleno-inferior
                        Se coloca "text-white" para que el texto del encabezado sea blanco
                        Se coloca un "mt-1" para hacer que el texto del encabezado se centré en el eje vertical (de arriba a abajo)
                        Se coloca un "fs-5" para agrandar el texto
                        Se coloca un "text-uppercase" para poner mayúsculas al texto*/}
                        <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Add new Customer</Form.Label>
                    </Stack>
                   
                    <Form.Group className="mb-3">
                       
                        <Form.Label>Date of sale</Form.Label>
                        {/*
                        Se coloca "type" para especificar el tipo de dato que recibirá el campo
                        Se coloca "placeholder" para poner texto en el espacio donde se colocará la información
                        Se coloca "required" para hacer que ese campo sea obligatorio
                        */ }
                        <Form.Control type="date" placeholder="DateSales" required name="datesale" value={formValue.date_sales} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                        {/*Se coloca el "Form.Control.Feedback" para indicar cuál será la retroalimentación
                        en caso de que la información ingresada sea correcta*/}
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                        {/*Se coloca un "Form.Control.Feedback de tipo ""invalid" para 
                        que aparezca una señal cuando se haya ingresado incorrectamente 
                        la información*/}
                        <Form.Control.Feedback type="invalid">
                            Please add the date sale
                        </Form.Control.Feedback>
                    </Form.Group> 


            <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Car ID</Form.Label>

                    <Form.Select type="number" name="carId" value={formValue.carId} onChange={onChange} required aria-label="Default select example">
                        <option select disable value="">Select car ID...</option>
                        {cars.map((car) => ( <option value={car.id} >{car.model}</option>))}
                    </Form.Select>

                    <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                    <Form.Control.Feedback type="invalid">
                        Please select car ID
                    </Form.Control.Feedback>

            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Customer ID</Form.Label>

                <Form.Select type="number" name="customerId" value={formValue.customerId} onChange={onChange} required aria-label="Default select example">
                    <option select disable value="">Select customer ID...</option>
                    {customers.map((customer) => ( <option value={customer.id} >{customer.name}</option>))}
                </Form.Select>

                <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    Please select customer ID
                </Form.Control.Feedback>

            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Seller ID</Form.Label>

                <Form.Select type="number" name="sellerId" value={formValue.sellerId} onChange={onChange} required aria-label="Default select example">
                    <option select disable value="">Select customer ID...</option>
                    {sellers.map((seller) => ( <option value={seller.id} >{seller.name}</option>))}
                </Form.Select>

                <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    Please select seller ID
                </Form.Control.Feedback>

            </Form.Group>

                    {/*Se pone un "mb-3" para regular qué tan cerca estará el botón de la casilla
                    Se pone un "label" para colocar la información que aparecerá cuando 
                    los datos ingresados sean correctos

                    Se pone un "feedback" para poner un mensaje cuando no se haya
                    marcado la casilla

                    Se pone un "feedbackType" para indicar qué hacer cuando la casilla no se haya marcado
                    */}
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="The information is correct"
                            feedback="Indicates that the information is correct"
                            feedbackType="invalid"
                        />

                    </Form.Group>

                   
                    <Stack className=" mx-auto col-md-8">

                        {/*Se crea un botón con "variant" "success" que indica que el botón
                        será de color verde

                        El "type" del bóton es "submit" porque enviará informaicón*/}
                        <Button variant="success" type="submit">Register</Button>
                        {/*Se coloca el "Toaster" para que se detecte que debe aparecer una notificación
                        cuando la información se haya enviado con la acción del botón*/}
                        <Toaster />
                    </Stack>
                </Stack >
            </Stack >
        </Form>
    </div>
  );
}
export default InsertSale;