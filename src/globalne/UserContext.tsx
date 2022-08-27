import { useState, createContext} from "react";

export const UserContext = createContext<any>(null);

export const UserProvider = (props: any) => {

  const [podaci, setPodaci] = useState<any>([
    {
      id_vozila: null,
      id_korisnika: null,
      ime: '',
      prezime: '',
      telefon: '', 
      email: '',
    }
  ]);
  return(
    <UserContext.Provider value={[podaci, setPodaci]}>
        {props.children}
    </UserContext.Provider>
  );
};





