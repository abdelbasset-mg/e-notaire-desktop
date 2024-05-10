import React, { useState } from "react";
import './ButtonAdd.css';
import { useConstants } from "./constantes/Constants";
import axios from "axios";
import toast from "react-hot-toast";
const Add = ({open, onClose, changeHandle})=>{
    const {handleInput,saveNewContract} = useConstants();
    const [templateName,setTemplateName]= useState("")

    const changeTemplateName = (event) =>{
        setTemplateName(event.target.value);

    }
    // const onSubmit = async (event) => {
    //     try{
    //         const response = await axios.post("http://localhost:5000/", {
    //             templateNature:nature
    //         })
    //         setNature("");
    //         toast.success("تم اضافة الطبيعة بنجاح")
    //     }catch(error){
    //         console.error("add failed",error)
    
    //     }
    // }

    if(!open) return null

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center ">
            <div className="modalcontainer bg-white p-4 rounded-lg pl-8 pr-10">
                <div className="title-modal pb-5 pt-4">اضافة نموذج جديد</div>
                <div className="enterNameContract">
                    <div className="name ml-1 font-bold  text-slate-700">اسم النموذج</div>
                    <input
                    name="natureOfContract"
                    className="natureContr focus:outline-none " 
                    type="text" 
                    placeholder="اسم النموذج" 
                    onChange={changeTemplateName}  >
                    

                    </input>
                </div>
                <div className="btnContainer">
                    <button className="btnCancel" onClick={onClose}>اغلاق</button>
                    <button className="btnSave"  >حفظ</button>


                </div>
            </div>
        </div>
    )


}
export default Add;