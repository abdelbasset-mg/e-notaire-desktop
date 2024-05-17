import axios from 'axios';
import { useState } from "react";
import { Link,Navigate,useNavigate } from "react-router-dom";
import eye from '../icons/eye.svg';
import eyeclose from '../icons/eyeclose.svg';
import "./Sign.css";
import logoE_N from './icons/logoE-N.svg';
import toast from "react-hot-toast";
import { useEffect } from 'react';


function Sign (){
    const [visible,setVisible]=useState(false);
    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [exist,setExist]=useState("")


    

    const history = useNavigate();


    const changeUsername = (event) => {
        setUserName(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = async (event) => {
        // console.log(userName,password,confirmPassword)
        console.log("Password state before validation:", password);
        console.log("Password length:", password.length);
        event.preventDefault()

        if (password===""){
            toast.error("لم يتم ادخال كلمة المرور")
            return;
        }
        if (confirmPassword===""){
            toast.error("لم يتم تأكيد كلمة المرور")
            return;
        }
        if (password !== confirmPassword) {
            toast.error("خطأ في كلمة المرور")
            return;
        }
        if (userName===""){
            toast.error("لم يتم ادخال اسم المستخدم")
            return;
        }
        if (password.length<8){
            toast.error("الرجاء ادخال كلمة مرور تحتوي على الاقل على 8 احرف او ارقام")
            return;
        }
    

        const registered = {
            username: userName,
            password: password
        }
        try {
            const response = await axios.post("http://localhost:5000/register", {
                username: userName,
                password: password
            });
            setUserName("");
            setPassword("");
            toast.success("تم انشاء حسابك")
            
            history("/");
            
        } catch (error) {
            console.error("Registration failed:", error);
            toast.error("اسم المستخدم موجود من قبل")
        }
        

    
      
    }



    return(
    <>
    <div className="flex flex-row-reverse h-[100%] outer">
        <div className="
        w-[50%] h-[100%] bg-[#DDB660] rounded-bl-[40px] flex flex-col justify-center element
        ">
            <img src={logoE_N} className="w-[40%] h-[40%] mb-14"></img>
            <div className="w-[60%] h-[17%] border-white border-[1px] rounded-2xl text-white rect" >
                 <Link>اعرف المزيد عن الموثق الالكتروني</Link>
                 <div className="font-bold not">e-notaire.dz</div>

            </div>
            
        </div>
        <div className="w-[50%] h-[100%] formulaire ">
            <form  onSubmit={onSubmit}  className=" flex flex-col form">
                <div className="flex justify-end w-[70%] text-[20pt] font-bold"><div>انشاء حساب</div></div>
                <div className="flex flex-col inputs w-[80%] mt-[15%]">
                    <div className="flex flex-row-reverse justify-between w-[100%] log-in ">
                   
                    <label className="mt-[1%]" for="user">اسم المستخدم</label>
                    <input 
                    dir="rtl" 
                    className="input input-user focus:outline-none" 
                    type="text"
                    name="user"
                    id="user" 
                    placeholder="اسم المستخدم"
                    onChange={(event) => changeUsername(event)}
                    >
                
                    </input>
                    </div>
                    <div className="flex flex-row-reverse justify-between w-[100%] log-in">
                   
                    <label className="mt-[1%]" >كلمة المرور</label>
                    <div className="seepass flex flex-row-reverse  justify-between">
                     <input     dir="rtl"
                                className='input focus:outline-none' 
                                type={visible ? "text" : "password"}
                                name='currentPassword'
                                id='currentPassword' 
                                placeholder='كلمة المرور'
                                onChange={(event) => changePassword(event)}
                                >

                                </input>
                                <div className='mr-3 mt-[2.5%] ml-3' onClick={() => setVisible(!visible)}>
                                    {
                                        visible ? <img src={eye}/> : <img src={eyeclose}/>
                                    }

                                </div>
                    </div>
                    </div>
                    <div className="flex flex-row-reverse justify-between w-[100%] log-in">
                    <label className="mt-[1%] " >تأكيد كلمة المرور</label>
                    <div className="seepass flex flex-row-reverse  justify-between">
                     <input     dir="rtl"
                                className='input focus:outline-none' 
                                type={visible ? "text" : "password"}
                                name='currentPassword'
                                id='currentPassword' 
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                placeholder='تأكيد كلمة المرور'></input>
                                <div className='mr-3 mt-[2.5%] ml-3' onClick={() => setVisible(!visible)}>
                                    {
                                        visible ? <img src={eye}/> : <img src={eyeclose}/>
                                    }

                                </div>
                    </div>
                    </div>
                </div>
                <div className="w-[100%] flex flex-col justify-center mt-[15%]">
                    <div className="w-[100%] flex justify-center">
                    <button type='submit' className="btnLogin">انشاء حساب</button>
                    </div>
                    <div>
                    <div dir="rtl" className="w-[84%] mt-2 flex flex-row"> تملك حساب ؟ <div><Link to="/" className="text-[#DDB660] mr-2">تسجيل دخول</Link></div></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
   
    </>
    )

}
export default Sign;
