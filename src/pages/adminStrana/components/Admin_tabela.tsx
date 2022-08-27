import { Button, Container,  Row, Col} from 'react-bootstrap';
import '../css/index.scss';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate  } from 'react-router-dom';

interface Tipovi_podataka {
    id_korisnika: number;
    row: any;
}

function Admin(props:Tipovi_podataka) {

    const dolaz_param = useLocation();
    const podaci = dolaz_param.state as Tipovi_podataka;
    const [id_korisnika, setId_korisnika] = useState(props.id_korisnika);
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [klijenti, setKlijenti] = useState<any>([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const svi_klijenti = async () => {
        const response = await axios.get("http://localhost:7000/pregled_svih_klijenata");
        setKlijenti(response.data);
        setFilteredCountries(response.data);
    }
    const columns = [
        {
            name: "Ime",
            selector: (row: any) => <Link to={'/admin_edit/'+row.id } className='linkovi'>{row.ime}</Link>,   
            //sortable: true
        },
        {
            name: "Prezime",
            selector: (row: any) => <Link to={'/admin_edit/'+row.id } className='linkovi'>{row.prezime}</Link>,
            //sortable: true
        },
        {
            name: "Telefon",
            selector: (row: any) => <Link to={'/admin_edit/'+row.id } className='linkovi'>{row.telefon}</Link>,
            //sortable: true
        },
        {
            name: "Email",
            selector: (row: any) => <Link to={'/admin_edit/'+row.id } className='linkovi'>{row.email}</Link>,

            

            //sortable: true
        },
        {
            name: "Ključ",
            selector: (row: any) => row.unique_key,
            //sortable: true
        },
        // {
        //     name: "Action",
        //     cell: (row: any) => <button className='btn btn-primary' onClick={() => alert(row.id)}>Edit</button>
        // }
    ];

    useEffect(() => { 
        svi_klijenti();
      }, []); 

    useEffect(() => { 
    const result = klijenti.filter((klijent:any) => {
        return klijent.name?.toLowerCase().match(search?.toLowerCase());
    });//alert(result)
    setFilteredCountries(result);
    }, [search]);  

    // const Svi_klijenti = () => {

    //     fetch('http://localhost:7000/pregled_svih_klijenata', {
    //       method: 'GET', 
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     //   body: JSON.stringify({
    //     //     kor_kod: kor_kod
    //     //   })
         
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data);
    //               if(data !== ""){
    //                 {data.map((item: any) => {

                        
           
    //                 })}

    //               }
    //       })
    //   }

    //   useEffect(() => { 
    //     Svi_klijenti();
    //   }, []); // componentDidMount




    return (
            <Container fluid className="cela-sirina-boja">
                <Container  id="div_nsl">
                    <Row>
                        <Col sm={12} md={6} lg={12}>
                            
                            <DataTable
                             columns={columns}
                             data={filteredCountries}
                             pagination
                             fixedHeader
                             highlightOnHover
                             selectableRowsHighlight
                             fixedHeaderScrollHeight='450px'
                             // selectableRows
                            //  actions={<button className='btn btn-sm btn-info'>Dogadjaj</button>}
                             subHeader
                             subHeaderComponent={
                                <input
                                type="text"
                                placeholder='Pretraži'
                                className='w-25 form-control'
                                 value={search}
                                 onChange={(e) => setSearch(e.target.value)}
                                />
                             }
                            />
                        
                        </Col>

                        <Col sm={12} md={12} lg={12}>
                                <Link to={'/admin_ins'} className='btn btn-danger'>Dodaj novog klijenta</Link>
                        </Col>
        

                    </Row>
                </Container>       
            </Container>
          );
      }
      
export default Admin;