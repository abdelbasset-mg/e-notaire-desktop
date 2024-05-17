import React, { useState } from "react";
import "./BtnSave.css";
import { useConstants } from "./Constants";
import axios from "axios";
import toast from "react-hot-toast";
const Add = ({open, onClose, changeHandle})=>{
    const {handleInput,saveNewContract} = useConstants();
    const [nature,setNature]=useState("")

    const changeNature = (event) => {
        setNature(event.target.value)

    }


    const onSubmit = async (event) =>{
        try{
        const response = await axios.post("http://localhost:5000/add-nature", {
            templateNature:nature
        })
        setNature("");
        toast.success("تم اضافة الطبيعة بنجاح")
    }catch(error){
        console.error("add failed",error)

    }
}

    

    if(!open) return null

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center ">
            <div className="modalcontainer bg-white p-4 rounded-lg pl-8 pr-10">
                <form onSubmit={onSubmit}>
                <div className="title-modal pb-5 pt-4">اضافة طبيعة عقد جديدة</div>
                <div className="enterNameContract">
                    <div className="name ml-1 font-bold  text-slate-700">اسم الطبيعة</div>
                    <input name="natureOfContract" className="natureContr focus:outline-none " type="text" placeholder="طبيعة العقد" onChange={changeNature}  ></input>
                </div>
                <div className="btnContainer">
                    <button className="btnCancel" onClick={onClose}>اغلاق</button>
                    {/* <button className="btnSave" onClick={changeHandle} >حفظ</button> */}
                    <button type="submit" className="btnSave"  >حفظ</button>


                </div>
                </form>
            </div>
        </div>
    )


}
export default Add;