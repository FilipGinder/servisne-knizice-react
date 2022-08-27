import '../css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'react-bootstrap';
import { useState, useEffect } from "react";

//import Head from '../Head';

function Admin_edit_novo_vozilo(props: any) {
    
    const [id_klijenta, setId_korisnika] = useState(props.id_korisnika);
    const [naziv, setNaziv] = useState<string>('');
    const [godiste, setGodiste] = useState<string>('');
    const [kubikaza, setKubikaza] = useState<string>('');
    const [boja, setBoja] = useState<string>('');
    const [kilometraza, setKilometraza] = useState<string>('');
    const [gorivo, setGorivo] = useState<string>();


    const Dodaj_vozilo = () => {

      if(naziv != "" && godiste != "" && kubikaza != "" && kilometraza != ""){
        
        fetch('http://localhost:7000/dodavanje_jos_jednog_vozila', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id_klijenta:id_klijenta,
            naziv_vozila: naziv,
            godiste_vozila: godiste,
            kubikaza_vozila: kubikaza,
            boja_vozila: boja,
            kilometraza_vozila:kilometraza,
            gorivo:gorivo
          })
         
        })
          .then(res => res.json())
          .then(data => {
    
            if(data.poruka === "uspesno"){
                 alert("Uspešno dodato novo vozilo korisnika");
                 setNaziv("");
                 setGodiste("");
                 setKubikaza("");
                 setBoja("");
                 setKilometraza("");
                 setGorivo("");
            }
            
          })

      }else{
        alert("Naziv, Godište, Kubikaža, i kilometraža su obavezni podaci");
        setNaziv("");
        setGodiste("");
        setKubikaza("");
        setBoja("");
        setKilometraza("");
        setGorivo("");
      }
    }



  return (
            <Row>
                <Col sm={12} md={3} lg={4}></Col>
                    <Col sm={12} md={6} lg={4} className="div_dod_novo_vozilo_izm">
                        <h4>Podaci o novom vozilu</h4>
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
						<br/>
						<span>Vrsta goriva</span>
						<br/>
						<div className="form-group">
                               <select  data-placeholder="Vrsta goriva" id="gorivo_izm" className="form-control input2" value={gorivo} onChange={(e) => {setGorivo(e.target.value) } }>
                                   	<option className="vr_goriva" value="Benzin">Benzin</option>
					            	<option className="vr_goriva" value="Dizel">Dizel</option>
					            	<option className="vr_goriva" value="Plin">Plin</option>
					            	<option className="vr_goriva" value="Metan">Metan</option>
                               </select>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={  (event) => { Dodaj_vozilo(); } }>Dodaj novo vozilo</button>
                        </div>

                    </Col>
                <Col sm={12} md={3} lg={4}></Col>
            </Row>
    );
}
export default Admin_edit_novo_vozilo;