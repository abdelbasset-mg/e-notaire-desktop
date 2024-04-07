import { useState } from "react";
import axios from 'axios';


export const useConstants = () => {
    //SEARCH
    const [search,setSearch]=useState("");
    //---------------------//
    const [newClient,setNewClient]=useState(
        {number:'',
        fullName:'',
        dateBirth:'',
        sexe:'',
        numberOfContracts:'',
        placeOfBirth:'',
        blood:'',
        ID:'',
        address:'',
        nameFather:'',
        firstNameMother:'',
        lastNameMother:'',
        phone:''

    }

    );
    //Tableau des contrats
    const [inputTableClients,setInputTableClients]=useState([
        {number:1,fullName:'أحمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:2,fullName:'تركي مروان ',dateBirth:'1989-05-14',sexe:'ذكر',numberOfContracts:14,placeOfBirth:' بسكرة',blood:'O+',ID:'221458700236',address:'اولاد جلال',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:3,fullName:'بن تواتي صفاء ',dateBirth:'2001-01-02',sexe:'انثى',numberOfContracts:15,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'بلطرش عماد',dateBirth:'1999-12-25',sexe:'ذكر',numberOfContracts:47,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:5,fullName:'بلور اية',dateBirth:'2004-10-26',sexe:'انثى',numberOfContracts:10,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:6,fullName:'تليلي محمد',dateBirth:'2000-04-18',sexe:'ذكر',numberOfContracts:2,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:7,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:33,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:8,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:4,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},

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
        newClient,
        // handleInput,
        setNewClient,
        inputTableClients,
        search,
        setSearch
    };
}