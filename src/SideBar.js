import { Link,NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import logoE_N from './icons/logo.svg';
import logoC from './icons/control.svg';
import logoS from './icons/statistics.svg';
import logoContr from './icons/contract.svg';
import logoModel from './icons/model.svg';
import logoCli from './icons/client.svg';
import logoFile from './icons/file.svg';
import logoSett from './icons/Setting.svg';
import logoE from './icons/exit.svg';
import logoE_N2 from './icons/logo2.svg'
import React from 'react';
import { useState } from 'react';
import Login from './Login-Sign/Login';


const SideBar = () => {
    const [user,setUser]=useState("####")
    return(
    <>
                 <div  className='SideBar w-[100%]'>
            
            <div className='logoE-N'>
            <img src={logoE_N} className='logo' alt='logo'/>
            </div>
            
            <div className='links'>
                  <div className='link '><div className='l-ink'><NavLink className="navlink" to='/' >لوحة التحكم</NavLink></div><div className='icon-1 '><img src={logoC} className='icon'/></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/احصائيات'> احصائيات</NavLink></div><div className='icon-1 '><img src={logoS} className='icon'/></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/تحرير عقد'>تحرير عقد</NavLink></div><div className='icon-1 '><img src={logoContr} className='icon'/></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/نماذج العقود'>نماذج العقود</NavLink></div><div className='icon-1 '> <img src={logoModel} className='icon'/></div></div>
                  <div className='link '><div className='l-ink'><NavLink className="navlink" to='/ارشيف الزبائن'> أرشيف الزبائن</NavLink></div><div className='icon-1 '><img src={logoCli} className='icon'/></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/ارشيف الملفات'>أرشيف الملفات</NavLink></div><div className='icon-1 '><img src={logoFile} className='icon'/></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/اعدادات'>اعدادات</NavLink></div><div className='icon-1 '><img src={logoSett} className='icon'/></div></div>
            </div>
            
            <div className='foot'>
                  <div className='admin'>{user}</div>
                  <div className='admin-name'> {user} مكتب الاستاذ </div>
                  <div className='exit'><Link to='/Login' className='exit-Button'><img src={logoE} className='logoC'/></Link></div>
            </div>
            </div>
            
            
            
            
            {/*  SIDBAR QUAND ON REDUIT L ECRAN */}
            <div  className='SideBar-m w-[100%] mt-[-1cm] '>
            <div className='logoE-N2'>
                  <img src={logoE_N2} className='logo2 mt-[30%]' alt='logo'/>
            </div>
            <div className='links'>
                  <div className='link '><div className='l-ink'><NavLink className="navlink" to='/' ><div className='icon-1 '><img src={logoC} className='icon'/></div></NavLink></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/احصائيات'> <div className='icon-1 i1 '><img src={logoS} className='icon'/></div></NavLink></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/تحرير عقد'><div className='icon-1 '><img src={logoContr} className='icon'/></div></NavLink></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/نماذج العقود'><div className='icon-1 '> <img src={logoModel} className='icon'/></div></NavLink></div></div>
                  <div className='link '><div className='l-ink'><NavLink className="navlink" to='/ارشيف الزبائن'> <div className='icon-1 i1 '><img src={logoCli} className='icon'/></div></NavLink></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/ارشيف الملفات'><div className='icon-1 '><img src={logoFile} className='icon'/></div></NavLink></div></div>
                  <div className='link '><div className='l-ink'><NavLink className='navlink' to='/اعدادات'><div className='icon-1 i1 i2 '><img src={logoSett} className='icon'/></div></NavLink></div></div>
            </div>
            <div className='foot'>
                <div className='exit'><Link to="/Login" className='exit-Button'><img src={logoE} className='logoC'/></Link></div>
            </div>
            </div>
    </>
    )

}
export default SideBar ;