import { Container,  Row, Col} from 'react-bootstrap';
import '../css/index.scss';
import akumulator from '../slike/akumulator.png';
import alnaser from '../slike/alnaser.jpg';
import alternator from '../slike/alternator.jpg';
import amortizer from '../slike/amortizer.jpg';
import hladnjak from '../slike/hladnjak.jpg';
import kocnice from '../slike/kocnice.jpg';
import kvacilo from '../slike/kvacilo.jpeg';
import motor from '../slike/motor.png';
import trap from '../slike/trap.png';
import ulje from '../slike/ulje.jpg';

function Treci_blok() {
   
    return (
            <Container fluid id="usluge_div">
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={motor} alt="motor" width="144px" height="144px"/>
                            <h5>POPRAVKA I SERVIS MOTORA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={akumulator} alt="akumulator" width="144px" height="144px"/>
                            <h5>ZAMENA AKUMULATORA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={amortizer} alt="amortizer" width="144px" height="144px"/>
                            <h5>ZAMENA AMORTIZERA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                             <img className="d-block w-100" src={hladnjak} alt="hladnjak" width="144px" height="144px"/>
                             <h5>SERVIS KLIME I SISTEMA HLADJENJA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={kocnice} alt="kocnice" width="144px" height="144px"/> 
                            <h5>SERVIS I ZAMENA KOČIONOG SISTEMA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                             <img className="d-block w-100" src={kvacilo} alt="kvacilo" width="144px" height="144px"/>
                             <h5>ZAMENA KVAČILA </h5> 
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={trap} alt="trap" width="144px" height="144px"/>
                            <h5>ZAMENA TRAPA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={ulje} alt="ulje" width="144px" height="144px"/>
                            <h5>ZAMENA ULJA I FILTERA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={alnaser} alt="alnaser" width="144px" height="144px"/>
                            <h5>SERVIS I ZAMENA ALNASERA</h5>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="uslige">
                            <img className="d-block w-100" src={alternator} alt="alternator" width="144px" height="144px"/>
                            <h5>SERVIS I ZAMENA ALTERNATORA</h5>
                        </Col>
                    </Row>
                </Container>       
            </Container>
          );
      }
      
export default Treci_blok;