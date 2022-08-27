import '../css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'react-bootstrap';
import { useState, useEffect, useContext } from "react";
import Accordion from 'react-bootstrap/Accordion';

import { UserContext } from "../../../globalne/UserContext"

//import Head from '../Head';

function Admin_edit_izm_vozilo(props:any) {
    
    const [podaci, setPodaci] = useContext(UserContext);
    console.log(podaci[0].ime)
    //const [id_vozila, setId_vozila] = useState<any>(podaci[0].id_vozila);
    const [id_korisnika, setId_korisnika] = useState<any>(podaci[0].id_korisnika);

    const [ime_klijenta, setIme_klijenta] = useState<any>(podaci[0].ime);
    const [prezime_klijenta, setPrezime_klijenta] = useState<any>(podaci[0].prezime);
    const [telefon_klijenta, setTelefon_klijenta] = useState<any>(podaci[0].telefon);
    const [email_klijenta, setEmail_klijenta] = useState<any>(podaci[0].email);

    const [naziv, setNaziv] = useState<string>();
    const [godiste, setGodiste] = useState<string>();
    const [kubikaza, setKubikaza] = useState<string>();
    const [boja, setBoja] = useState<string>();
    const [kilometraza, setKilometraza] = useState<string>();
    const [gorivo, setGorivo] = useState<string>();

    const [servisi, setServisi] = useState();

    const [nova_kilometraza, setNova_kilometraza] = useState<string>();
    const [novi_servis, setNovi_servis] = useState<string>('');

    const Sve_o_vozilu = () => {
   
        fetch('http://localhost:7000/sve_o_vozilu', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id_vozila: podaci[0].id_vozila
          })
         
        })
          .then(res => res.json())
          .then(data => {
            if(data !== ""){
                 setNaziv(data[0].naziv);
                 setGodiste(data[0].godiste);
                 setKubikaza(data[0].kubikaza);
                 setBoja(data[0].boja);
                 setKilometraza(data[0].kilometraza);
                 setGorivo(data[0].vrsta_goriva);
            }
            
          })
      }

      useEffect(() => { // izvrsenje na svaku promenu....bez ovoga pravi neogranicen loop....milion poziva
        Sve_o_vozilu();
      },[podaci[0].id_vozila]); // componentDidMount


      const callAPI1 = () => {
        fetch('http://localhost:7000/svi_vozilovi_servisi', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_klijenta: podaci[0].id_vozila
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

                                            <Accordion key={item.id}>
                                                <Accordion.Item eventKey={item.id} >
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

useEffect(() => {
  callAPI1();
  //console.log('napises funkciju koja vuce servise i vraca u state vednopsti');
}, [podaci[0].id_vozila]); 

const Izmeni_klijenta = () => {
   //alert(id_korisnika);
   //alert(ime_klijenta);
    fetch('http://localhost:7000/izmena_klijenta', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          
          id_klijenta:id_korisnika,
          ime_klijenta_izm:ime_klijenta,
          prezime_klijenta_izm:prezime_klijenta,
          telefon_klijenta_izm:telefon_klijenta,
          email_klijenta_izm:email_klijenta,

          naziv_vozila:naziv,
          godiste_vozila:godiste,
          kubikaza_vozila:kubikaza,
          boja_vozila:boja,
          kilometraza_vozila:kilometraza,
          gorivo:gorivo,
          id_vozila: podaci[0].id_vozila,
          
          servis_opis_nov:novi_servis,
          kilometraza_izm_nova:nova_kilometraza
          
        })
       
      })
        .then(res => res.json())
        .then(data => {

          setNova_kilometraza('');
          setNovi_servis('');
          callAPI1();
          props.Sva_klijentova_vozila();
          /*alert(props.refreshp)*/
        })
}


  return (
            <Row>
                <Col sm={12} md={3} lg={4}></Col>
                    <Col sm={12} md={6} lg={4} className="div_vozilo_izm">
                        <h4>Podaci o vozilu</h4>
               			<span>Naziv</span>
			            <br/>
						<input type="text" className="input2" value={naziv} onChange={(e) => {setNaziv(e.target.value) } }/>
			            <br/>
						<span>Godište</span>
						<br/>
						<input type="text" className="input2" value={godiste} onChange={(e) => {setGodiste(e.target.value) } }/>

						<br/>
						<span>Kubikaža</span>
						<br/>
						<input type="text" className="input2" value={kubikaza} onChange={(e) => {setKubikaza(e.target.value) } }/>

						<br/>
						<span>Boja</span>
						<br/>
						<input type="text" className="input2" value={boja} onChange={(e) => {setBoja(e.target.value) } }/>
						<br/>
						<span>Kilometraža</span>
						<br/>
						<input type="text" className="input2" value={kilometraza} onChange={(e) => {setKilometraza(e.target.value) } }/>
						<br/>
						
						<span>Vrsta goriva</span>						
						<div className="form-group">
                               <select  data-placeholder="Vrsta goriva" id="gorivo_izm" className="form-control input2" value={gorivo} onChange={(e) => {setGorivo(e.target.value) } }>
                                   	<option className="vr_goriva" value="Benzin">Benzin</option>
					            	<option className="vr_goriva" value="Dizel">Dizel</option>
					            	<option className="vr_goriva" value="Plin">Plin</option>
					            	<option className="vr_goriva" value="Metan">Metan</option>
                               </select>
                        <br/>
                        </div>

                    </Col>
                <Col sm={12} md={3} lg={4}></Col>







                <Col sm={12} md={3} lg={4}></Col>
                <Col sm={12} md={6} lg={4} className="servisi_div_okvir" id="servisi_div_okvir">
                    <h4>Pregled svih servisa</h4>
		            <div className="accordion accordion-flush" id="servisi_div">
					{servisi}
		            </div>
                </Col>
                <Col sm={12} md={3} lg={4}></Col>






                <Col sm={12} md={3} lg={4}></Col>
                <Col sm={12} md={6} lg={4} className="novi_servis_izm" id="novi_servisi_div">
                    <br/>
                    <h4>Podaci o novom servisu</h4>
                    <span>Kilometraža</span>
                        <br/>
                        <input type="text" className="input2" value={nova_kilometraza} onChange={(e) => {setNova_kilometraza(e.target.value) } }/>
                        <br/>
                        <br/>
                    <textarea className="input2" placeholder="Opis servisa" /* autofocus */  value={novi_servis} onChange={(e) => {setNovi_servis(e.target.value) } }></textarea>
                    <br/>
                    
                    <input type="button" className="btn btn-danger" onClick={  (event) => { Izmeni_klijenta(); } } value="Dodaj - Sačuvaj"/>
                </Col>
                <Col sm={12} md={3} lg={4}> 

               
                              {/* {podaci.map((pod: any) => (
                                <div>
                                  <h1>{pod.id_vozila}</h1>
                                  <h1>{pod.ime}</h1>
                                  <h1>{pod.prezime}</h1>
                                  <h1>{pod.telefon}</h1>
                                  <h1>{pod.email}</h1>
                                </div>
                               ))} */}
                </Col>




            </Row>
    );
}
export default Admin_edit_izm_vozilo;