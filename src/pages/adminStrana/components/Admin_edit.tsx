import '../css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Prvi_blok_k from './Prvi_blok_k';
//import Head from '../Head';
import {  useState } from "react";
//import { useLocation } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import Admin_edit_klijent_podaci from './Admin_edit_klijent_podaci';

function Admin_edit(props: any) {

  let { id } = useParams();
  const [id_korisnika, setId_korisnika] = useState<any>(id);

  return (
    <div> 
      <Admin_edit_klijent_podaci id_korisnika={id_korisnika}/>
     {/* <h1>Filip radi</h1> */}
     <Link to="/admin_tabela" className='linkovi'>Na tabelu</Link>
     {/* <h2>{id_korisnika}</h2> */}
     </div>
    );
}
export default Admin_edit;