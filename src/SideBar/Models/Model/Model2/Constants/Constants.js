import { useState } from "react";

export const useConstants_1 = () => {

const [inputTableVar,setInputTableVar]=useState([
    {Variable:"اسم المتغير"},
    {Variable:"اسم المتغير"},
    {Variable:"اسم المتغير"},
    {Variable:"اسم المتغير"},
    {Variable:"اسم المتغير"},
    
])

return{
    inputTableVar
}
}