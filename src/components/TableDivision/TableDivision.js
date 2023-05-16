import { useState, useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import AddModal from '../AddModal/AddModal';
//import { UserContext } from '../../context/UserContext';

const TableDivision = () => {

  //const { user } = useContext(UserContext)
  //console.log(user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handledelete = () =>{
      return (
        alert('Esta seguro que desea borrar: user ?')
      )
    }

    return ( 
        <>

        <br/>
        <Table size="ms" striped bordered hover>
      <thead >
        <tr>
          <th>M-10</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody  size="ms">
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <AddModal show={show} handleClose={handleClose} />
          <td><Button onClick={handleShow} variant="success" size="sm">Editar</Button>
          <Button  onClick={handledelete}variant="danger" size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <AddModal show={show} handleClose={handleClose} />
          <td><Button onClick={handleShow} variant="success" size="sm">Editar</Button>
          <Button  onClick={handledelete}variant="danger" size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <AddModal show={show} handleClose={handleClose} />
          <td><Button onClick={handleShow} variant="success" size="sm">Editar</Button>
          <Button  onClick={handledelete}variant="danger" size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <AddModal show={show} handleClose={handleClose} />
          <td><Button onClick={handleShow} variant="success" size="sm">Editar</Button>
          <Button  onClick={handledelete}variant="danger" size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <AddModal show={show} handleClose={handleClose} />
          <td><Button onClick={handleShow} variant="success" size="sm">Editar</Button>
          <Button  onClick={handledelete}variant="danger" size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>other</td>
          <td>@twitter</td>
          <AddModal show={show} handleClose={handleClose} />
          <td><Button onClick={handleShow} variant="success" size="sm">Editar</Button>
          <Button  onClick={handledelete}variant="danger" size="sm">Borrar</Button></td>
        </tr>
      </tbody>
    </Table>
    </>

     );
}
 
export default TableDivision;