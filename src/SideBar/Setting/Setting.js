import { useState } from 'react';
import './Setting.css';
import eye from '../../icons/eye.svg';
import eyeclose from '../../icons/eyeclose.svg';
import SideBar from '../../SideBar';




function Setting(){
    const [password,setPassword]=useState("");
    const [visible,setVisible]=useState(true);
    return(
        <>
         <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
            <SideBar />
        </div>
        <div className='w-[87%] flex flex-col'>
        <div className="container-setting" dir="rtl">
             <div className='title-setting '>
                <div className='title-1-setting'> الاعدادات</div>
            </div>

            <div className=" soustitre-setting "> قائمة الاعدادات</div>
            <div className='flex flex-row'>
                <div className='info-setting'>
                    <form>
                        <div className='input-info'>
                            <label className='label' for='deskName'>اسم المكتب</label>
                            <input className='input-info-1' type='text' name='deskName' id='deskName' placeholder='طرف'></input>
                        </div>
                        <div className='input-info'>
                            <label className='label'  for='wilaya'>الولاية </label>
                            <input className='input-info-1' type='text' name='wilaya' id='wilaya' placeholder='طرف'></input>
                        </div>
                        <div className='input-info'>
                            <label className='label'  for='address'>العنوان</label>
                            <input className='input-info-1' type='text' name='address' id='address' placeholder='طرف'></input>
                        </div>
                        <div className='input-info'>
                            <label className='label'  for='ragional'> الغرفة الجهوية</label>
                            <input className='input-info-1' type='number' name='ragional' id='ragional' placeholder='رقم'></input>
                        </div>
                        <div className='input-info'>
                            <label className='label'  for='seller'>مولد البائع</label>
                            <input  className='input-info-1' type='date' name='seller' id='seller' placeholder='طرف'></input>
                        </div>
                        <div className='input-info'>
                            <label className='label'  for='buyer'>مولد المشتري</label>
                            <input className='input-info-1' type='date' name='buyer' id='buyer' ></input>
                        </div>
                        <div className='input-info'>
                            <label className='label'  for='rooms'>عدد الغرف</label>
                            <input className='input-info-1' type='number' name='rooms' id='rooms' placeholder='رقم'></input>
                        </div>
                        </form>

                </div>
             
             
             
             
             
                <div className='password-2 '>
                    <div className='password  flex flex-col'>
                        <div className='mt-4 mr-4 text-[#284A68] font-bold '>تغيير كلمة المرور</div>
                        <div>
                        <div className='Pass flex flex-col'>
                            <label className='label-2' for='currentPassword'>كلمة المرور الحالية</label>
                           <div className='flex flex-row eye'>
                            <input 
                                className='input-pass' 
                                type={visible ? "text" : "password"}
                                name='currentPassword'
                                id='currentPassword' 
                                placeholder='111111111111'></input>
                                <div className='mr-3 mt-3 ml-5' onClick={() => setVisible(!visible)}>
                                    {
                                        visible ? <img src={eye}/> : <img src={eyeclose}/>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className='Pass flex flex-col'>
                            <label className='label-2'  for='newPassword'>كلمة المرور الجديدة</label>
                            <div className='flex flex-row eye'>
                            <input 
                                className='input-pass' 
                                type={visible ? "text" : "password"}
                                name='currentPassword'
                                id='currentPassword' 
                                placeholder='111111111111'></input>
                                <div className='mr-3 mt-3 ml-5' onClick={() => setVisible(!visible)}>
                                    {
                                        visible ? <img src={eye}/> : <img src={eyeclose}/>
                                    }

                                </div>
                                </div>                        </div>
                        <div className='Pass flex flex-col'>
                            <label className='label-2'  for='confirmNewPassword'>تأكيد كلمة المرور الجديدة</label>
                            <div className='flex flex-row eye'>
                            <input 
                                className='input-pass' 
                                type={visible ? "text" : "password"}
                                name='currentPassword'
                                id='currentPassword' 
                                placeholder='111111111111'></input>
                                <div className='mr-3 mt-3 ml-4' onClick={() => setVisible(!visible)}>
                                    {
                                        visible ? <img src={eye}/> : <img src={eyeclose}/>
                                    }

                                </div>
                                </div>                        </div>

                        </div>

                    </div>
                    <div className='savePass '>
                            <button className='save bg-[#284A68] text-white'> تغيير كلمة المرور</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
        </>
    )

}
export default Setting;