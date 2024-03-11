import { useState } from "react"

export const useConstants = () =>{

    // LES CONSTANTES DES INFORMATIONS GENERALES
const [archiveConract,setArchiveContract] = useState(0)
const [archiveClients,setArchiveClients] = useState(0)
const [Models,setModels] = useState(0)

   // LE NOM DE L'ADMIN
const [user,setUser] = useState("أحمد بوحمرة")
 
return{
    archiveClients,
    archiveConract,
    Models,
    user
};
};