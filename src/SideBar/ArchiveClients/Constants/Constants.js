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
        {number:14,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:15,fullName:'مروان تركي',dateBirth:'1989-05-14',sexe:'ذكر',numberOfContracts:14,placeOfBirth:' بسكرة',blood:'O+',ID:'221458700236',address:'اولاد جلال',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:16,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:17,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:18,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:19,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:20,fullName:'احمد اياد',dateBirth:'2004-09-02',sexe:'ذكر',numberOfContracts:77,placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
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