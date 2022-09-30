import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../img/news/worldcup.jpg'

const NewsBoard = () => {
    let today = new Date().toLocaleDateString()
    return ( 
        <>
        <br/>
        <h2 className='p-2'>Ultimas Noticias</h2>
        <Row xs={1} md={3} className="g-4 p-2">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Las primeras entradas para la copa del mundo estaran en julio</Card.Title>
              <Card.Text>
              World Rugby Chairman Sir Bill Beaumont said: “The ticketing programme offers a variety 
              of purchasing options at accessible price points for fans, starting with the unique 
              Mastercard RWC 2021 Tournament Pass. The RWC 2021 experience will be like no other 15s tournament.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Publicado el {today}</small>
        </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
    </>
     );
}
 
export default NewsBoard;




    
