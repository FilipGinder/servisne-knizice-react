import Pocetna from './pages/pocetnaStrana/components/Pocetna';
import Knjizica from './pages/knjizicaStrana/components/Knjizica';
import Login from './pages/adminStrana/components/Login';
import Admin from './pages/adminStrana/components/Admin_tabela';
import Admin_edit from './pages/adminStrana/components/Admin_edit';
import Admin_ins from './pages/adminStrana/components/Admin_ins';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { UserContext } from "./globalne/UserContext"
//import { useState, useMemo } from 'react';


import { UserProvider } from './globalne/UserContext'

function App() {

//const [kontrolna, setKontrolna] = useState("Prva proba");
//const svakaPromena = useMemo( () => ({ kontrolna, setKontrolna }) ,[kontrolna, setKontrolna] );
//console.log(UserProvider);
  return (
    <Router>
      <UserProvider>
        {/* <UserContext.Provider value={svakaPromena}> */}
            <Routes>           
                    <Route path="/" /*exact*/ element={<Pocetna/>} />
                    
                    <Route path="/knjizica" element={<Knjizica/>} />

                    <Route path="/login" element={<Login/>} />

                    <Route path="/admin_tabela" element={<Admin id_korisnika={0} row={0}/>} />

                    <Route path="/admin_edit/:id" element={<Admin_edit/>} />

                    <Route path="/admin_ins" element={<Admin_ins/>} />      
            </Routes>   
        {/* </UserContext.Provider>   */}
        </UserProvider>
    </Router>
  );
}

export default App;
