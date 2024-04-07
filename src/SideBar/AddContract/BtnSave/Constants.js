import { useState } from "react";
import axios from 'axios';

export const useConstants = () => {
    //SEARCH
    const [result,setResult]=useState("");
    //---------------------//
    const [newContract,setNewContract]=useState(
        {number:'',
        natureOfContract:'',
        numberOfModels:''}

    );
    //Tableau des contrats
    const [inputTable,setInputTable]=useState([
        {number:1,natureOfContract:"فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع حلي",numberOfModels:3},
        {number:2,natureOfContract:"بيع و شراء قطعة ارض",numberOfModels:2},
        {number:3,natureOfContract:"كراء مسكن",numberOfModels:5},
        {number:4,natureOfContract:"تأسيس شركة ذات مسؤولية محدودة",numberOfModels:1},
        {number:5,natureOfContract:"هبة حصص اجتماعية في الشركة",numberOfModels:2},
        {number:6,natureOfContract:"تنازل عن حصص في شركة",numberOfModels:1},
        {number:7,natureOfContract:"بيع و شراء العقارات  ",numberOfModels:3},
        {number:8,natureOfContract:"بيع و شراء قطعة ارض",numberOfModels:0},
        {number:9,natureOfContract:"كراء مسكن",numberOfModels:0},
        {number:10,natureOfContract:"تأسيس شركة ذات مسؤولية محدودة",numberOfModels:0},
        {number:5,natureOfContract:"هبة حصص اجتماعية في الشركة",numberOfModels:0},
        {number:6,natureOfContract:"تنازل عن حصص في شركة",numberOfModels:0},
        {number:1,natureOfContract:"فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع حلي",numberOfModels:0},
        {number:2,natureOfContract:"بيع و شراء قطعة ارض",numberOfModels:0},
        {number:3,natureOfContract:"كراء مسكن",numberOfModels:0},
        {number:4,natureOfContract:"تأسيس شركة ذات مسؤولية محدودة",numberOfModels:0},
        {number:5,natureOfContract:"هبة حصص اجتماعية في الشركة",numberOfModels:0},
        {number:6,natureOfContract:"تنازل عن حصص في شركة",numberOfModels:0},
        {number:1,natureOfContract:"فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع حلي",numberOfModels:0},
        {number:2,natureOfContract:"بيع و شراء قطعة ارض",numberOfModels:0},
        {number:3,natureOfContract:"كراء مسكن",numberOfModels:0},
        {number:4,natureOfContract:"تأسيس شركة ذات مسؤولية محدودة",numberOfModels:0},
        {number:5,natureOfContract:"هبة حصص اجتماعية في الشركة",numberOfModels:0},
        {number:6,natureOfContract:"تنازل عن حصص في شركة",numberOfModels:0},
    
    ]);
    

    // const handleInput = (e) => {
    //     e.persist();
    //     setNewContract({...newContract,[e.target.name ]: e.target.value});
    // };

    // const saveNewContract = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         natureOfContract : newContract.natureOfContract,
    //     }
        
    //     axios.post(``,data).then();

    // }
    return{
        newContract,
        // handleInput,
        setNewContract,
        inputTable,
        result,
        setResult
    };
}