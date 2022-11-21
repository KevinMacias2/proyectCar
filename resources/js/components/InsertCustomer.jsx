//Importaciones:
import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const InsertCustomer = () => {

    const [laborData, setLaborData] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("/api/laborData_index")
        setCars(response.data)
      }
      getData()
    },[])

    const [formValue, setformValue] = useState({
    
    name: '',
    lastName: '',
    address: '',
    location: '',
    city: '',
    CP: '',
    phone: '',
    rolJob: '',
    jobId: '',
  

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
    formData.append("name", formValue.name)
    formData.append("lastName", formValue.lastName)
    formData.append("address", formValue.address)
    formData.append("location", formValue.location)
    formData.append("city", formValue.city)
    formData.append("CP", formValue.CP)
    formData.append("phone", formValue.phone)
    formData.append("rolJob", formValue.roljob)
    formData.append("salary", formValue.salary)
    formData.append("jobId", formValue.jobId)

    

    axios.post("http://localhost/proyectCar/public/api/store_customer",
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
                        <Form.Control type="text" placeholder="Last name" required  name="lastname" value={formValue.lastName} onChange={onChange} />
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
                        <Form.Label>salary</Form.Label>
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
export default InsertCustomer;