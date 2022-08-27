import { Container,  Row, Col} from 'react-bootstrap';
import '../css/index.scss';
import telephone from '../slike/telephone.png';
import location from '../slike/location.png';
import email from '../slike/email.png';

function Sesti_blok() {
    
    interface Tipovi_podataka {
        iframe: string;
    }
    
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.972479416642!2d20.522502064961134!3d44.78304953751571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70bcaca2ee49%3A0xcce4571b1b5488db!2z0JHRg9C70LXQstCw0YAg0LrRgNCw0ZnQsCDQkNC70LXQutGB0LDQvdC00YDQsCA0NDksINCR0LXQvtCz0YDQsNC0IDExMDAw!5e0!3m2!1ssr!2srs!4v1655065930177!5m2!1ssr!2srs" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'; 
    function Iframe(props:Tipovi_podataka) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }


    return (
            <Container fluid className="cela-sirina-boja"  id="mapa">
                <Container>

                    <Row>
                        <Col sm={12} md={12} lg={3}>
                                <h3>KONTAKT</h3>
                                <img src={telephone} alt="Error" width="40px" height="40px"/><h6 className="inline">&nbsp;066/003828</h6><br/><br/>
                                <img src={telephone} alt="Error" width="40px" height="40px"/><h6 className="inline">&nbsp;064/2566260</h6><br/><br/>
                                <img src={location} alt="Error" width="40px" height="40px"/><h6 className="inline">&nbsp;Bul. kralja Aleksandra 449</h6><br/><br/>
                                <img src={email} alt="Error" width="40px" height="40px"/><h6 className="inline">&nbsp;milosrvovic@gmail.com</h6><br/><br/>

                                <h3>Radno vreme</h3>
                                <h6>Pon - Sub 08:00 - 18:00</h6>
                                <h6>Nedelja: Zatvoreno</h6>
                        </Col>

                        <Col sm={12} md={9} lg={9}>
                                <h2>KAKO DO NAS</h2>
                                <Iframe iframe={iframe} />
                        </Col>
                    </Row>

                </Container>       
            </Container>
          );
      }
      
export default Sesti_blok;