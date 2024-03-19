import { useState } from "react";
export const useConstants = () => {
    const [Result, setResult] = useState("");
    const [model,setModel] = useState("");

    
    const [newModel,setNewModel]=useState(
        {number:'',
        natureOfModel:'',
        numberOfModel:''}

    );
    const [inputTable, setInputTable] = useState([
        {number: 1, natureOfModel: "نموذج صيف 1996", numberOfModel: 7},
        {number: 2, natureOfModel: "نموذج الموثق سعيد نواصرية", numberOfModel: 7},
        {number: 3, natureOfModel: "نموذج 1 بعد تعديل 2011", numberOfModel: 7},
        {number: 4, natureOfModel: "نموذج صيف 1996", numberOfModel: 7},
        {number: 5, natureOfModel: "نموذج صيف 1996", numberOfModel: 7},
        {number: 6, natureOfModel: "نموذج صيف 1996", numberOfModel: 7},
    ]);
    
   
    return{
        newModel,
        setNewModel,
        Result,
        setResult,
        inputTable,
        setInputTable,
        model,
        setModel
    };
}