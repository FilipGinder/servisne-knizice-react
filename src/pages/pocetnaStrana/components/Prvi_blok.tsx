import { Button, Container,  Row, Col, Nav, Navbar, Form, FormControl} from 'react-bootstrap';
import '../css/index.scss';
import prva_slika from '../slike/glavna.png';
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';


function Prvi_blok() {

  
  
  const [kor_kod, setKor_kod] = useState('');
  const navigate = useNavigate();


  const Prikaz_korisniku_sk = () => {

    fetch('http://localhost:7000/pretraga_knjizica', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        kor_kod: kor_kod
      })
     
    })
      .then(res => res.json())
      .then(data => {
              if(data !== ""){
                {data.map((item: any) => {
              //{data.map(item => {
                    navigate("/knjizica",{state: {kor_kod:kor_kod, id:item.id, ime:item.ime, prezime:item.prezime, telefon:item.telefon, email:item.email} })
                
                })}
              }else{
                alert('Pogrešan pin kod');
                setKor_kod('');
              }
      })
  }
  
//   useEffect(() => { // react hooks
//     if(kor_kod == 'Pera') alert('POzdrav, pero');
// }, [kor_kod]);

    return (
        <Container fluid id="glv_slika">
            <Navbar id="navig">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                      <Nav
                        className="collapse navbar-collapse"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>

                          <Button variant="success" className='poz_rez'> 
                            POČETNA
                          </Button>   
                          <Button variant="success" className='poz_rez'> 
                            USLUGE
                          </Button> 
                          <Button variant="success" className='poz_rez'> 
                            KONTAKT
                          </Button>             
                      </Nav>

                      <Form className="d-flex sto">
                        <FormControl
                          id="pretraga"
                          type="search"
                          placeholder="Servisne knjižice - unesite Vaš kod"
                          className="pretrazi poz_rez"
                          aria-label="Search"
                          value={kor_kod}
                          onChange={e=>setKor_kod(e.target.value)}
                        />
                         
                        <Button variant="danger" id='pretrazi_butt' onClick={  (event) => { Prikaz_korisniku_sk(); } }>
                            Pretraži <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                      </Form>                            
                      
                    </Navbar.Collapse>
            
                </Container>
            </Navbar>
            


            <Container fluid  className="glv_slika">
                <Row>
                    <Col sm={12} md={12} lg={12} className="glv_slika">
                        <img className="d-block w-100" src={prva_slika} alt="Prva slika"/>   
                    </Col>
                </Row>
            </Container>
        </Container>
        );
    }
    
    export default Prvi_blok;