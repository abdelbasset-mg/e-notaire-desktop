import "./Login.css";
import logoE_N from './icons/logoE-N.svg'
import logoe from './icons/e-n.svg'
import { Link } from "react-router-dom";
import eye from '../icons/eye.svg'
import eyeclose from '../icons/eyeclose.svg'
import { useState } from "react";

function Login (){
    const [visible,setVisible]=useState(false);

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
            <form className=" flex flex-col form">
                <div className="flex justify-end w-[70%] text-[20pt] font-bold"><div>تسجيل الدخول</div></div>
                <div className="flex flex-col inputs w-[80%] mt-[15%]">
                    <div className="flex flex-row-reverse justify-between w-[100%] log-in ">
                    <label className="mt-[1%]" for="user">اسم المستخدم</label>
                    <input dir="rtl" className="input input-user focus:outline-none" type="text" name="user" id="user" placeholder="اسم المستخدم"></input>
                    </div>
                    <div className="flex flex-row-reverse justify-between w-[100%] log-in">
                    <label className="mt-[1%]" >كلمة المرور</label>
                    <div className="seepass flex flex-row-reverse  justify-between">
                    {/* <input tupe={visible ? "password" : "text"} dir="rtl" className="input focus:outline-none"  placeholder="كلمة المرور"></input>
                    <div className="input-eye pt-[2px] pl-[8px]"  onClick={() => setVisible(!visible)}>
                                    {
                                        visible ? <img className="mt-[7px]" src={eyeclose}/> : <img className="mt-[7px]" src={eye}/>
                                    }

                    </div> */}
                     <input     dir="rtl"
                                className='input focus:outline-none' 
                                type={visible ? "text" : "password"}
                                name='currentPassword'
                                id='currentPassword' 
                                placeholder='كلمة المرور'></input>
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
                    <button className="btnLogin">تسجيل دخول</button>
                    </div>
                    <div>
                    <div dir="rtl" className="w-[84%] mt-2 flex flex-row">لا تملك حساب ؟ <div><Link to="/Sign" className="text-[#DDB660] mr-2">انشاء حساب</Link></div></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
   
    </>
    )

}
export default Login;