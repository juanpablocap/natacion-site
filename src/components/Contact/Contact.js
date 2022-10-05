import { Alert, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Iframe from 'react-iframe';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    //poner urlMap en carpeta constantes
    const urlMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4263.205821795663!2d-65.19327188178892!3d-26.835129135077153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225eaa03d83683%3A0x153ce2927a11461e!2sClub%20Nataci%C3%B3n%20y%20Gimnasia!5e0!3m2!1ses-419!2sar!4v1664579639381!5m2!1ses-419!2sar";
    const handleSubmit = () =>{

      
        navigate('/');
    }
  
  return (   // ARREGLAR ELEMENTOS Y RESPONSIVE!! quiza usar dos cards con grid
    <Container className='d-flex justify-content-evenly '>
    <div className='d-flex p-2 w-100'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" autoFocus />
        <Form.Text className="text-muted">
          Nunca compartiremos tus datos.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Tu nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Consulta</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Escribe tu consulta.." />
      </Form.Group>
      <Button onSubmit={handleSubmit} size='sm' variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
    <div className=' p-4'>
        <Iframe url={urlMap}
        width="550px"
        height="400px"
        id=""
        allow="fullscreen" 
        className=""
        display="block"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        position="relative" />
    </div>
    </Container>
  );
}

export default Contact;