import '../css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,  Row, Col} from 'react-bootstrap';
//import Head from '../Head';
import {  useState, useRef } from "react";

import { Link, useNavigate } from 'react-router-dom';


function Admin_ins() {


  const [ins_ime, setIns_ime] = useState<string>();
  const [ins_prezime, setIns_prezime] = useState<string>();
  const [ins_telefon, setIns_telefon] = useState<string>();
  const [ins_email, setIns_email] = useState<string>();
  const [id_nov_klijent, setId_nov_klijent] = useState<number>(0);
  const [block_dod_vozila, setDlock_dod_vozila] = useState(false); //false - po defaultu skriveno


  const [naziv_vozila, setNaziv_vozila] = useState<string>();
  const [godiste_vozila, setGodiste_vozila] = useState<string>();
  const [kubikaza_vozila, setKubikaza_vozila] = useState<string>();
  const [boja_vozila, setBoja_vozila] = useState<string>();
  const [kilometraza_vozila, setKilometraza_vozila] = useState<string>();
  const [gorivo, setGorivo] = useState<string>();
  const [opis_servisa, setOpis_servisa] = useState<string>();

  const sac_koris = useRef<any>();
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  

  const Dodaj_korisnika = () => {

    fetch('http://localhost:7000/dod_nov_klijenta', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ime: ins_ime,
        prezime: ins_prezime,
        telefon: ins_telefon,
        email: ins_email
      })
     
    })
      .then(res => res.json())
      .then(data => {
        if(data !== ""){
            alert("Uspešno dodat novi klijent");
            setId_nov_klijent(data.id);      //setovanje novog ID-a klijenta 
            setDlock_dod_vozila(true);
            //sac_koris.current.disabled = true;
            setDisable(true);
        }
        
      })
  }






  const Dodaj_vozilo = () => {

    fetch('http://localhost:7000/dodavanje_jos_jednog_vozila', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_klijenta:id_nov_klijent,
        naziv_vozila: naziv_vozila,
        godiste_vozila: godiste_vozila,
        kubikaza_vozila: kubikaza_vozila,
        boja_vozila: boja_vozila,
        kilometraza_vozila:kilometraza_vozila,
        gorivo:gorivo,
        opis_servisa:opis_servisa
      })
     
    })
      .then(res => res.json())
      .then(data => {

        if(data.poruka === "uspesno"){
            alert("Uspešno dodato novo vozilo");
            navigate("/admin_tabela");
        }
        
      })
  }



  return (
    <Container fluid className="cela-sirina-boja">
                <Container  id="div_nsl">
                    <Row>
                        <Col sm={12} md={3} lg={4}></Col>
                        <Col sm={12} md={6} lg={4}>
                            <span>Ime</span>
                            <br/>
                            <input type="text" className="input2" value={ins_ime} onChange={(e) => {setIns_ime(e.target.value) } } disabled={disable}/>
                            <br/>
                            <span>Prezime</span>
                            <br/>
                            <input type="text" className="input2" value={ins_prezime} onChange={(e) => {setIns_prezime(e.target.value) } } disabled={disable}/>

                            <br/>
                            <span>Telefon</span>
                            <br/>
                            <input type="text" className="input2" value={ins_telefon} onChange={(e) => {setIns_telefon(e.target.value) } } disabled={disable}/>

                            <br/>
                            <span>Email</span>
                            <br/>
                            <input type="text" className="input2" value={ins_email} onChange={(e) => {setIns_email(e.target.value) } } disabled={disable}/>
                            <br/>
                            <br/>
                            <input type="button" className="btn btn-danger" value="Sačuvaj" onClick={  (event) => { Dodaj_korisnika(); } }  ref={sac_koris} disabled={disable}/>
                            &nbsp;
                            <Link to={'/admin_tabela'} className='btn btn-primary'>Nazad</Link>
                            

                        </Col>
                        <Col sm={12} md={3} lg={4}></Col>
                    </Row>


   {block_dod_vozila?<Row>
                        <Col sm={12} md={3} lg={4}></Col>
                        <Col sm={12} md={6} lg={4}>
                            <span>Naziv vozila</span>
                            <br/>
                            <input type="text" className="input2" value={naziv_vozila} onChange={(e) => {setNaziv_vozila(e.target.value) } }/>
                            <br/>
                            <span>Godina proizvodnje</span>
                            <br/>
                            <input type="text" className="input2" value={godiste_vozila} onChange={(e) => {setGodiste_vozila(e.target.value) } }/>

                            <br/>
                            <span>Kubikaza</span>
                            <br/>
                            <input type="text" className="input2" value={kubikaza_vozila} onChange={(e) => {setKubikaza_vozila(e.target.value) } }/>

                            <br/>
                            <span>Boja</span>
                            <br/>
                            <input type="text" className="input2" value={boja_vozila} onChange={(e) => {setBoja_vozila(e.target.value) } }/>
                            <br/>
                            <span>Kilometraza</span>
                            <br/>
                            <input type="text" className="input2" value={kilometraza_vozila} onChange={(e) => {setKilometraza_vozila(e.target.value) } }/>
                            <br/>
                            <br/>
                            <span>Vrsta groiva</span>
                            <div className="form-group">
                                <select  data-placeholder="Vrsta goriva" id="gorivo" className="form-control" value={gorivo} onChange={(e) => {setGorivo(e.target.value) } }>
                                        <option value="">Izaberi</option>
                                        <option value="Benzin">Benzin</option>
                                        <option value="Dizel">Dizel</option>
                                        <option value="Plin">Plin</option>
                                        <option value="Metan">Metan</option>
                                </select>
                                </div>
                            <br/>
                            <span>Opis radova</span>
                            <br/>
                            <textarea className="input2" placeholder="Opis servisa" /*autofocus*/ value={opis_servisa} onChange={(e) => {setOpis_servisa(e.target.value) } }></textarea>
                            <br/>
                            <button type="button" className="btn btn-danger" onClick={  (event) => { Dodaj_vozilo(); } }>Sačuvaj</button>
                        </Col>
                        <Col sm={12} md={3} lg={4}></Col>
                </Row>:null
    }


                </Container>
    </Container>
    );
}
export default Admin_ins;