import '../css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

//import Head from '../Head';
// import { useLocation } from 'react-router-dom';

// type Tipovi_podataka = {

//       kor_kod: string;
//       id: number;
//       ime: string;
//       prezime: string;
//       telefon: string;
//       email: string;
 
// }

function Login() {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const Log = () => {

    if(username === "" || password === ""){
       alert("Popunite obavezna polja");
    }else{
            fetch('http://localhost:7000/login', {
              method: 'POST', 
              headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password
              })      
          })
              .then(res => res.json())
              .then(data => {
                  if(data.poruka === "Pogresan username"){
                      alert("Pogrešno korisničko ime");
                  }
                  else if(data.poruka === "Pogresna lozinka"){
                    alert("Pogrešna lozinka");
                  }
                  else if(data.id_korisnika !== ""){
                    //alert(data.id_korisnika);
                    navigate("/admin_tabela",{state: {id_korisnika:data.id_korisnika} }) 
                  }else{
                    alert("Greška");
                  }
              })
    }

}

return (

  <div id="login_box_ceo">
    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg" id="login_box">

        <span>Email - korisničko ime</span>
        <input type="text" name="" id="email_login" onChange={(e) => {setUsername(e.target.value) } }/>
        <br/>
        <br/>
        <span>Lozinka</span>
        <input type="password" name="" id="password_login" onChange={(e) => {setPassword(e.target.value) } }/>
        <br/>

        <p id="capslock">UPOZORENJE! Caps lock je ukljucen.</p>
        <br/>
        <input type="checkbox" name="" id="checkbox_zapamti"/>&nbsp;
        <span>Zapamti me</span>
        <br/>
        <div id="login_dugme_div">
        
          <button type="button" className="btn btn-primary" id="nazad"><i className="bi-arrow-bar-left"></i> <Link to="/">Nazad</Link></button>
          <a href="">Zaboravili ste sifru?</a> &nbsp;
          <button type="button" id="logovanje"  className="btn btn-dark" onClick={  (event) => { Log(); } }>Prijavite se<i className="bi-arrow-bar-right"></i></button>
          
        </div>	
	  </div>
  </div>
 
    );
}
export default Login;