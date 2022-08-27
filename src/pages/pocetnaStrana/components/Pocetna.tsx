import 'bootstrap/dist/css/bootstrap.min.css'

import Prvi_blok from './Prvi_blok';
import Drugi_blok from './Drugi_blok';
import Treci_blok from './Treci_blok';
import Cetvrti_blok from './Cetvrti_blok';
import Peti_blok from './Peti_blok';
import Sesti_blok from './Sesti_blok';

function Pocetna() {

        return (
          <div className='visina100'>

             {/* <Head/> */}
              
             <Prvi_blok></Prvi_blok>  
             <Drugi_blok></Drugi_blok> 
             <Treci_blok></Treci_blok>   
             <Cetvrti_blok></Cetvrti_blok>  
             <Peti_blok></Peti_blok> 
             <Sesti_blok></Sesti_blok> 
             
          

          </div> 
          
        );

}
export default Pocetna;