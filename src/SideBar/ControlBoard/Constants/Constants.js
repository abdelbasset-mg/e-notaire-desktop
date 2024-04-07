import { useState } from "react"

export const useConstants = () =>{

    // LES CONSTANTES DES INFORMATIONS GENERALES
const [archiveConract,setArchiveContract] = useState(50)
const [archiveClients,setArchiveClients] = useState(42)
const [Models,setModels] = useState(20)
const [numberOfAct1,setNumberOfAct1]=useState(145)
const [numberOfAct2,setNumberOfAct2]=useState(120)
const [numberOfAct3,setNumberOfAct3]=useState(95)

   // LE NOM DE L'ADMIN
const [user,setUser] = useState("أحمد بوحمرة")
const [admin,setAdmin] = useState("admin1")

 
return{
    archiveClients,
    archiveConract,
    Models,
    user,
    numberOfAct1,
    numberOfAct2,
    numberOfAct3,
    admin
};
};