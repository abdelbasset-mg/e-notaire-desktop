import { useState } from "react"

export const useConstants = () =>{

    // LES CONSTANTES DES INFORMATIONS GENERALES
const [numberOfAct1,setNumberOfAct1]=useState(145)
const [numberOfAct2,setNumberOfAct2]=useState(120)
const [numberOfAct3,setNumberOfAct3]=useState(95)

   // LE NOM DE L'ADMIN
const [admin,setAdmin] = useState("admin1")

return{
    numberOfAct1,
    numberOfAct2,
    numberOfAct3,
    admin
};
};