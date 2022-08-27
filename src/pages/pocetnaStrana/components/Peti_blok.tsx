import { Container,  Row, Col} from 'react-bootstrap';
import '../css/index.scss';
import ford from '../slike/ford-logo.png';
import bmw from '../slike/bmw.png';
import Volkswagen from '../slike/Volkswagen.png';
import citroen from '../slike/citroen.png';

function Peti_blok() {
   
    return (


            <Container fluid className="cela-sirina-boja"  id="marke_vozila">
                <Container>
                    <h3>Održavamo sve marke i vrste vozila</h3>
                    
                    <Row>
                        <Col sm={6} md={6} lg={3}>
                                <img className="d-block marke" src={ford} alt="ford" width="190px" height="120px"/>
                        </Col>

                        <Col sm={6} md={6} lg={3}>
                                <img className="d-block marke" src={bmw} alt="bmw" width="190px" height="120px"/>
                        </Col>

                        <Col sm={6} md={6} lg={3}>
                                <img className="d-block marke" src={Volkswagen} alt="Volkswagen" width="190px" height="120px"/>
                        </Col>

                        <Col sm={6} md={6} lg={3}>
                                <img className="d-block marke" src={citroen} alt="citroen" width="190px" height="120px"/>
                        </Col>
                    </Row>

                </Container>       
            </Container>
          );
      }
      
export default Peti_blok;