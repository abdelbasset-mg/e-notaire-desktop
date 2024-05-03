import { useState } from "react";

export const useConstants_1 = () => {

const [inputTermTitle, setInputTermTitle]=useState('');
const [inputTermText, setInputTermText]=useState('');


const [inputTableVar,setInputTableVar]=useState([
    {Variable:"الطرف الأول"},
  
])

return{
    inputTableVar,
    inputTermText,
    setInputTermText,
    inputTermTitle,
    setInputTermTitle
}
}