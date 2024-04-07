import { useState } from "react";


export const useConstants = () => {

//Les constantes du circle
const [DataPercentage1,setDataPercentage1] = useState("63%");
const [DataPercentage2,setDataPercentage2] = useState("37%");
const [numberOfAct1,setNumberOfAct1]=useState(145)
const [numberOfAct2,setNumberOfAct2]=useState(120)
const [numberOfAct3,setNumberOfAct3]=useState(95)
const [file,setFile]=useState([
    {fileNumber:200,act:"عقد بيع و شراء العقارات",status:"مستحضر"},
    {fileNumber:199,act:" فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي",status:"مستخرج"},
    {fileNumber:198,act:"تأسيس شركة ذات مسؤولية محدودة",status:"مستحضر"}
])

return{
    DataPercentage1,
    DataPercentage2,
    numberOfAct1,
    numberOfAct2,
    numberOfAct3,
    file
};
};