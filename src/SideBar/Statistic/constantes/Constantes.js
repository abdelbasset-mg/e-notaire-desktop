import { useState } from "react";


export const useConstants = () => {

//Les constantes du circle
const [DataPercentage1,setDataPercentage1] = useState("63%");
const [DataPercentage2,setDataPercentage2] = useState("37%");
return{
    DataPercentage1,
    DataPercentage2
};
};