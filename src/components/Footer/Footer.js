import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return ( 
        <>
            <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5  d-none d-lg-block'>
          <span>Mantente conectado con nuestras redes sociales:</span> 
        </div>

        <div>
        <a href='https://twitter.com/BlankosRC?s=20&t=wqcNSv1k153G1uaYAxvbfg' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
            </a>
          <a href='http://twitter.com' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='http://instagram.com' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>
                Natacion y Gimnasia
              </h6>
              <p>
                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase  mb-4'>Links 1</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contacto
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Otro link
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  otro link mas
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase  mb-4'>Links 2</h6>
              <p>
                <a href='#!' className='text-reset'>
                  link 3
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  link 4
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  link 5
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  link 6
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase  mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tucuman, Argentina
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 54 381 xxxxx
              </p>
              <p>
                <MDBIcon fab icon="whatsapp" className="me-3" /> + 54 381 xxxxx
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://onyxs.com/'>
          Onyxs
        </a>
      </div>
    </MDBFooter>
        </>
     );
}
 
export default Footer;