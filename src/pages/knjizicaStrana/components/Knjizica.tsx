import '../css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Prvi_blok_k from './Prvi_blok_k';
//import Head from '../Head';
import { useLocation } from 'react-router-dom';

import { useContext } from "react";
import { UserContext } from "../../../globalne/UserContext"


type Tipovi_podataka = {

      kor_kod: string;
      id: number;
      ime: string;
      prezime: string;
      telefon: string;
      email: string;
 
}

function Knjizica(props: any) {

    const {kontrolna, setKontrolna} = useContext(UserContext);

    

  const dolaz_param = useLocation();
  const podaci = dolaz_param.state as Tipovi_podataka;

  return (
    <div>
        <Prvi_blok_k
            kor_kod={podaci.kor_kod}
            id={podaci.id}
            ime={podaci.ime}
            prezime={podaci.prezime}
            telefon={podaci.telefon}
            email={podaci.email}
        /> 
        <h1>{kontrolna}</h1>
        </div>
    );
}
export default Knjizica;