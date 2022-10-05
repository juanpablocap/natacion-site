import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { useState} from 'react';



const RegisterForm = () => {

    const [values, setValues] = useState({
        nombre:"",
        apellido:"",
        email: "",
        edad:"",
        division:"",
        direccion:"",
        ciudad:"",
        cp:"",
        foto:"",
        rol:"",
        password: ""
    });

    const handleKeyUp = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
      };
//const navigate = useNavigate();

const handleSubmit = () =>{
    console.log("Se envio el formulario de registro!")
}

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label>Nombre</Form.Label>
          <Form.Control onKeyUp={(e) => handleKeyUp(e)} className="mb-3" placeholder="Nombre" autoFocus />
        </Col>
        <Col>
        <Form.Label>Apellido</Form.Label>
          <Form.Control onKeyUp={(e) => handleKeyUp(e)} placeholder="Apellido" />
        </Col>
      </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control  onKeyUp={(e) => handleKeyUp(e)} type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>

        <Form.Group>
        <Form.Label>Seleeciona tu Division</Form.Label>
        <Form.Select className="mb-3" aria-label="Default select example">
          
          <option>Division</option>
          <option value="1">M-9</option>
          <option value="2">M-10</option>
          <option value="3">M-11</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1" >
        <Form.Label>Direccion</Form.Label>
        <Form.Control onKeyUp={(e) => handleKeyUp(e)} placeholder="Lavalle nº 523" name="calle" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control onKeyUp={(e) => handleKeyUp(e)} name="ciudad"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control onKeyUp={(e) => handleKeyUp(e)} name="cp"/>
        </Form.Group>
      </Row>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Seleccione un foto</Form.Label>
        <Form.Control onKeyUp={(e) => handleKeyUp(e)} type="file" />
        </Form.Group>

        <Form.Label htmlFor="inputPassword1">Ingresa una contraseña</Form.Label>
        <Form.Control

          type="password"
          id="inputPassword1"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text className="mb-3" id="passwordHelpBlock" muted>
          Tu contraseña debe tener entre 8-20 letras y numeros.
        </Form.Text>
        <Form.Label htmlFor="inputPassword2">Re ingresa la Contraseña</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword2"
          aria-describedby="passwordHelpBlock"
        />
        <div className=" mt-2 d-grid gap-2">
        <Button type="submit" variant="primary" >Agregar</Button>
        <Button variant="secondary" >Cancelar</Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
