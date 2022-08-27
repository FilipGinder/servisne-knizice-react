import '../css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,  Row, Col} from 'react-bootstrap';
import { useState, useEffect, useContext } from "react";
import Admin_edit_novo_vozilo from './Admin_edit_novo_vozilo'; //drugi blok
import Admin_edit_izm_vozilo from './Admin_edit_izm_vozilo'; //blok izmene vozila
import { Link } from 'react-router-dom';

//import Head from '../Head';
//import {  useState } from "react";
//import { useLocation } from 'react-router-dom';
//import { Link, useParams } from 'react-router-dom';

import { UserContext } from "../../../globalne/UserContext"

interface Tipovi_podataka {
    id_korisnika: number;
}

function Admin_edit_klijent_podaci(props:Tipovi_podataka) {
  
  const [podaci, setPodaci] = useContext(UserContext);
  ///const {kontrolna, setKontrolna} = useContext(UserContext);


  const [id_korisnika, setId_korisnika] = useState<any>(props.id_korisnika);

  const [ime_k_izm, setIme_k_izm] = useState<string>();
  const [prezime_k_izm, setPrezime_k_izm] = useState<string>();
  const [tel_k_izm, setTel_k_izm] = useState<string>();
  const [email_k_izm, setEmail_k_izm] = useState<string>();
  const [unique_key_k_izm, setUnique_key_k_izm] = useState<string>();
  const [select_vozila, setSelect_vozila] = useState<any>();
  const [vozilo_k_izm, setVozilo_k_izm] = useState<any>();

  const [block_dod_vozila, setBlock_dod_vozila] = useState(true); //true - po defaultu sa prvim ucitavanje stranice vidljivo

  const [refreshp, setRefreshp] = useState(true);


  //const [provera, setProvera] = useState<any>();

  const Sve_o_klijentu = () => {

    fetch('http://localhost:7000/sve_o_klijentu', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_klijenta: id_korisnika
      })
     
    })
      .then(res => res.json())
      .then(data => {
        if(data !== ""){
            setIme_k_izm(data[0].ime);
            setPrezime_k_izm(data[0].prezime);
            setTel_k_izm(data[0].telefon);
            setEmail_k_izm(data[0].email);
            setUnique_key_k_izm(data[0].unique_key);
        }
        
      })
  }

  useEffect(() => { // izvrsenje na svaku promenu....bez ovoga pravi neogranicen loop....milion poziva
    Sve_o_klijentu();
    Sva_klijentova_vozila();
  }, [id_korisnika]); // componentDidMount




  const Sva_klijentova_vozila = () => {

    fetch('http://localhost:7000/sva_klijentova_vozila', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_klijenta: id_korisnika
      })
     
    })
      .then(res => res.json())
      .then(data => {
        if(data !== ""){
            //setVozilo_k_izm(data[0].id);           
            const sva_vozila = <select data-placeholder="Vozila" id="vozila" className="form-control" value={vozilo_k_izm}    onChange={(e) => {setVozilo_k_izm(e.target.value); Dod_izm_vozilo(e);} }>
                                   <option value="odaberi_vozilo">Dodaj / odaberi vozilo</option>
                                   {data.map((item: any) => {
                                        return (                                           
                                            <option key={item.id} value={item.id}>{item.naziv}</option>                                         
                                        )                           
                                    })}
                                </select>
                                
            setSelect_vozila(sva_vozila);
            
        }
        
      })
  }

  // useEffect(() => { // izvrsenje na svaku promenu....bez ovoga pravi neogranicen loop....milion poziva
    
  //   Sva_klijentova_vozila();
  // }, [vozilo_k_izm,id_korisnika,ime_k_izm,prezime_k_izm,tel_k_izm,block_dod_vozila,email_k_izm]); // componentDidMount




  const Dod_izm_vozilo = (e:any) => {

    if(e.target.value == "odaberi_vozilo"){
      setBlock_dod_vozila(true);
    }else{ 
      setBlock_dod_vozila(false);
      setPodaci((prevPodaci:any) => [  /*...prevPodaci,*/ {id_vozila: e.target.value, id_korisnika:id_korisnika, ime:ime_k_izm, prezime: prezime_k_izm, telefon: tel_k_izm, email: email_k_izm}]);
    }
  }


  // const Podaci = ({
  //   id_vozila:vozilo_k_izm,
  //   id_korisnika:id_korisnika,
  //   ime:ime_k_izm,
  //   prezime:prezime_k_izm,
  //   telefon:tel_k_izm,
  //   email:email_k_izm
  // }) 


  return (
    <Container fluid id="klijenat_izm">
        <Container>
            <Row>
                <Col sm={12} md={3} lg={4}></Col>
                    <Col sm={12} md={6} lg={4} className="div_klijent_izm">
                        <Link to="/admin_tabela" className='linkovi'>Na tabelu</Link>
                        <h4>Podaci o klijentu</h4>
                        <span>Ime</span>
                        <br/>
                        <input type="text" className="input2" value={ime_k_izm} onChange={(e) => {setIme_k_izm(e.target.value) } }/>
                              <br/>
                        <span>Prezime</span>
                        <br/>
                        <input type="text" className="input2" value={prezime_k_izm} onChange={(e) => {setPrezime_k_izm(e.target.value) } }/>

                        <br/>
                        <span>Telefon</span>
                        <br/>
                        <input type="text" className="input2" value={tel_k_izm} onChange={(e) => {setTel_k_izm(e.target.value) } }/>

                        <br/>
                        <span>Email</span>
                        <br/>
                        <input type="text" className="input2" value={email_k_izm} onChange={(e) => {setEmail_k_izm(e.target.value) } }/>
                        <br/>
                        <br/>
                        <h3>Ključ</h3>
                        <h1 id="unique_key_izm">{unique_key_k_izm}</h1>
                        <br/>
                        <div className="form-group">
                                        {select_vozila}
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={4}> 
                    
                       
                            {/* {podaci.map((pod: any) => (
                                <div>
                                  <h1>{pod.ime}</h1>
                                  <h1>{pod.prezime}</h1>
                                  <h1>{pod.telefon}</h1>
                                  <h1>{pod.email}</h1>
                                </div>
                            ))} */}
                    
                    </Col>
            </Row>

            {block_dod_vozila?<Admin_edit_novo_vozilo id_korisnika={id_korisnika}/>:<Admin_edit_izm_vozilo  refreshParent={ Sva_klijentova_vozila() } /*podaci={Podaci}*//>}

        </Container>
    </Container>
    );
}
export default Admin_edit_klijent_podaci;


