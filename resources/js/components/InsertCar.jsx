//Importaciones:
import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const InsertCar = () => {

    const [brands, setBrands] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("/api/brands")
        setCars(response.data)
      }
      getData()
    },[])

    const [formValue, setformValue] = useState({
    
    image: '',
    model: '',
    type: '',
    year: '',
    color: '',
    price: '',
    km: '',
    source: '',
    equipment: '',
    numSales: '',
    observation: '',
    brandId: '',

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
    formData.append("imagen", formValue.imagen)
    formData.append("model", formValue.model)
    formData.append("type", formValue.type)
    formData.append("year", formValue.year)
    formData.append("color", formValue.color)
    formData.append("price", formValue.price)
    formData.append("km", formValue.km)
    formData.append("source", formValue.source)
    formData.append("equipment", formValue.equipment)
    formData.append("numSales", formValue.numSales)
    formData.append("observation", formValue.observation)
    formData.append("brandId", formValue.brandId)
    

    axios.post("http://localhost/proyectCar/public/api/car",
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
                        <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Add new Car</Form.Label>
                    </Stack>
                   
                    <Form.Group className="mb-3">
                       
                        <Form.Label>Image of Car</Form.Label>
                        {/*
                        Se coloca "type" para especificar el tipo de dato que recibirá el campo
                        Se coloca "placeholder" para poner texto en el espacio donde se colocará la información
                        Se coloca "required" para hacer que ese campo sea obligatorio
                        */ }
                        <Form.Control type="text" placeholder="Image" required name="image" value={formValue.image} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                        {/*Se coloca el "Form.Control.Feedback" para indicar cuál será la retroalimentación
                        en caso de que la información ingresada sea correcta*/}
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                        {/*Se coloca un "Form.Control.Feedback de tipo ""invalid" para 
                        que aparezca una señal cuando se haya ingresado incorrectamente 
                        la información*/}
                        <Form.Control.Feedback type="invalid">
                            Please add the image
                        </Form.Control.Feedback>
                    </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Model" required  name="model" value={formValue.model} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>

                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                             Please add the model
                        </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Type" required name="type" value={formValue.type} onChange={onChange} />
                        <Form.Text className="text-muted">
                        </Form.Text>

                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the type
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" placeholder="Year" required
                            name="year" value={formValue.year} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                              Please add the year
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Color</Form.Label>
                        {/*Se pone en "type" el tipo de dato "number" para que únicamente permita el ingreso 
                        de números*/}
                        <Form.Control type="text" placeholder="Color" required
                            name="color" value={formValue.warranty} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the color
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" required
                            name="price" value={formValue.price} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the price
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Km</Form.Label>
                        <Form.Control type="text" placeholder="Km" required
                            name="km" value={formValue.km} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the km
                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group className="mb-3">
                        <Form.Label>Source</Form.Label>
                        <Form.Control type="text" placeholder="Source" required
                            name="source" value={formValue.source} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the source
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Equipment</Form.Label>
                        <Form.Control type="text" placeholder="Equipment" required
                            name="equipment" value={formValue.equipment} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the equipment
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Number of Sales</Form.Label>
                        <Form.Control type="text" placeholder="NumSales" required
                            name="numsales" value={formValue.numSales} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the number of sales
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>observation</Form.Label>
                        <Form.Control type="text" placeholder="Observation" required
                            name="observation" value={formValue.observation} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the obsertavion
                        </Form.Control.Feedback>
                    </Form.Group>

        

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Brand ID</Form.Label>

                <Form.Select type="number" name="brandId" value={formValue.brandId} onChange={onChange} required aria-label="Default select example">
                    <option select disable value="">Select brand ID...</option>
                    {brands.map((brand) => ( <option value={brand.id} >{brand.name}</option>))}
                </Form.Select>

                <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    Please select brand ID
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
                            label="La información es correcta"
                            feedback="Indica que la información es correcta"
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
export default InsertCar;