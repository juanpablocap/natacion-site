import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

const TableDivision = () => {
    const handledelete = () =>{

    }
    return ( 
        <>
        <br/>
        <Table size="ms" striped bordered hover>
      <thead>
        <tr>
          <th>M-10</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Button size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Button size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td><Button size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Button size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Button size="sm">Borrar</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td><Button variant="success" size="sm">Editar</Button>
          <Button  onClick={handledelete}variant="danger" size="sm">Borrar</Button></td>
        </tr>
      </tbody>
    </Table>
    </>

     );
}
 
export default TableDivision;