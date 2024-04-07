import { useState } from "react";
export const useConstants = () => {
    const [Result, setResult] = useState("");
    
    const [newModel,setNewModel]=useState(
        {number:'',
        natureOfModel:'',
        numberOfModel:''}

    );
    const [inputTable, setInputTable] = useState([
        {number: 1, natureOfModel: "نموذج صيف 1996", numberOfModel: 5},
        {number: 2, natureOfModel: "نموذج الموثق سعيد نواصرية", numberOfModel: 0},

    ]);
    
   
    return{
        newModel,
        setNewModel,
        Result,
        setResult,
        inputTable,
        setInputTable,
    };
}