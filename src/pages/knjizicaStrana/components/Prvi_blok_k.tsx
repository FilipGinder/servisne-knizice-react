import { Button, Container,  Row, Col, Nav, Navbar, Form, FormControl} from 'react-bootstrap';
import { useEffect, useState } from "react";
import '../css/index.scss';
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';

interface Tipovi_podataka1 {
      kor_kod: string;
      id: number;
      ime: string;
      prezime: string;
      telefon: string;
      email:string;
  }
  

function Prvi_blok_k(props:Tipovi_podataka1) { //u ovom objektu props su svi podaci koje dostavljamo ovoj komponenti     props

    const [id_klijenta, setId_klijenta] = useState(props.id);
    const [ime, setIme] = useState(props.ime);
    const [prezime, setPrezime] = useState(props.prezime);
    const [telefon, setTelefon] = useState(props.telefon);
    const [email, setEmail] = useState(props.email);
    const [sva_vozila, setRez1] = useState<any>();
    const [odb_vozilo, setOdb_vozilo] = useState<string | undefined>();
    const [servisi, setServisi] = useState();
    

    const  callAPI = async  () => {
        await      fetch('http://localhost:7000/sva_klijentova_vozila', {
                        method: 'POST', 
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id_klijenta: id_klijenta
                        })      
                    })
                        .then(res => res.json())
                        .then(data => {
                
                        if(data !== ""){
                            setOdb_vozilo(data[0].id);                         
                            const sva_vozila = <select data-placeholder="Vozila" className="form-control" value={odb_vozilo}    onChange={(e) => {setOdb_vozilo(e.target.value) } }>
                                                   {data.map((item: any) => {
                                                    //{data.map(item => { 
                                                        return ( 
                                                            
                                                            <option key={item.id} value={item.id}>{item.naziv}</option>
                                                            
                                                        )                           
                                                    })}
                                                </select>
                                                
                            setRez1(sva_vozila);
                            
                        }
                        else{ //NE RADI ???????????????????????????????????????????????????????????????????????????????????????????
                            const sva_vozila = <select data-placeholder="Vozila" className="form-control">                                                
                                                            <option>Klijent trenutno nema ni jedno vozilo</option>                                                    
                                                </select>
                            setRez1(sva_vozila);
                        }
                        })
    }

    useEffect(() => { // izvrsenje na svaku promenu....bez ovoga pravi neogranicen loop....milion poziva
      callAPI();
    }, []); // componentDidMount


    useEffect(() => {
        callAPI1();
        //console.log('napises funkciju koja vuce servise i vraca u state vednopsti');
      }, [odb_vozilo]); // kada god se neki od varova u nizu promeni, okinuce se ova funkcija

    // useEffect(() => { 
    //     return () => {
    //         console.log('This log will execute only when component unmounts')
    //     }
    //   },[]); // kada god se neki od varova u nizu promeni, okinuce se ova funkcija


    const callAPI1 = () => {
        fetch('http://localhost:7000/svi_vozilovi_servisi', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_klijenta: odb_vozilo
            })      
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            if(data !== ""){
                
                const svi_servisi = 
                                      data.map((item: any) => {
                                   // data.map(item => { 
                                        return ( 
                                           
                                            


                                            <Accordion>
                                                <Accordion.Item eventKey={item.id}>
                                                <Accordion.Header><b>{item.vreme_servisa}</b>&nbsp; - &nbsp;{item.kilometraza}km</Accordion.Header>
                                                <Accordion.Body>
                                                    {item.opis}
                                                </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            
                                        )    
                                                            
                                        })    
                                        
                                        setServisi(svi_servisi);
            }
            })
}




// const Svi_servisi = (id_vozila) => {
//    // alert(id_vozila);
    

// }

    return (
    <Container fluid className="cela-sirina-boja" id="servisna_knjizica_div">

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
                            //={kor_kod}
                            // onChange={e=>setKor_kod(e.target.value)}
                            />

                            <Button variant="danger"  className='poz_rez' /*onClick={  (event) => { Prikaz_korisniku_sk(); } }*/>
                                Pretraži 
                            </Button>
                            
                            <Link to="/">
                                <Button variant="danger"  /*onClick={  (event) => { Prikaz_korisniku_sk(); } }*/>
                                    <IoIosCloseCircle />
                                </Button>
                            </Link>
                            
                        </Form>                                                
                    </Navbar.Collapse>
            
            </Container>
        </Navbar>

            <Container>
                <Row>
                    <Col sm={12} md={12} lg={12} className="mid">
                        <h1 id="">SERVISNA KNJIŽICA</h1>
                    </Col>

                    <Col sm={12} md={12} lg={12} className="mid">
                        <h2>{ime} {prezime}</h2>
                    </Col>

                    <Col sm={12} md={12} lg={12} className="mid">
                        <h2>{telefon}</h2>
                    </Col>
                    
                    <Col sm={12} md={12} lg={12} className="mid">
                        <h2>{email}</h2>
                    </Col>
                                            
                    <Col sm={12} md={12} lg={12} className="mid">
                        <h2>VOZILA</h2>
                    </Col>
                                            
                    <Col sm={12} md={12} lg={12} className="mid"  id="select_vozila_div">
                        <Col className="form-group">
                                    {sva_vozila}                           
                        </Col>
                    </Col>

                    <Col sm={12} md={12} lg={12} className="mid">
                        <br/>
                            {servisi}
                    </Col>

                </Row>
            </Container>       
    </Container>
          );
      }
      
export default Prvi_blok_k;