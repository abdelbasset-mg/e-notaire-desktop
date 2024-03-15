import { useState } from "react";
import axios from 'axios';


export const useConstants = () => {
    //SEARCH
    const [search,setSearch]=useState("");
    //---------------------//
    const [newFile,setNewFile]=useState(
        {number:'',
        fullName:'',
        natureOfContract:'',
        date:'',
        numberOfPerson:'',
        dateBirth:'',
        sexe:'',
        model:'',
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
    const [inputTableFiles,setInputTableFiles]=useState([
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'عقد بيع و شراء عقارات',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},
        {number:14,fullName:'احمد اياد',natureOfContract:'فسخ عقد شراكة بين شركة متعددة الجنسيات و مصنع محلي',date:'2003-08-15',numberOfPerson:5,dateBirth:'2004-09-02',sexe:'ذكر',model:"نموذج صيف 1996",placeOfBirth:' تيسمسيلت',blood:'O+',ID:'221458700236',address:'حي 40 مسكن أولاد بسام تيسمسيلت',nameFather:'محمد',firstNameMother:'مسعودة',lastNameMother:'حسنى',phone:'0642987414'},




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
        newFile,
        // handleInput,
        setNewFile,
        inputTableFiles,
        search,
        setSearch
    };
}