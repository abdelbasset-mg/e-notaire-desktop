import { Link,NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import ControlBoard from './SideBar/ControlBoard';
import Statistics from './SideBar/Statistics';
import AddContract from './SideBar/AddContract';
import Models from './SideBar/Models';
import ArchiveClients from './SideBar/ArchiveClients';
import ArchiveFiles from './SideBar/ArchiveFiles';
import Notification from './SideBar/Notification';
import Settings from './SideBar/Setting';
import logoE_N from './icons/logo.svg';
import logoC from './icons/control.svg';
import logoS from './icons/statistics.svg';
import logoContr from './icons/contract.svg';
import logoModel from './icons/model.svg';
import logoCli from './icons/client.svg';
import logoFile from './icons/file.svg';
import logoNotf from './icons/Notification.svg';
import logoSett from './icons/Setting.svg';
import logoE from './icons/exit.svg';
import logoE_N2 from './icons/logo2.svg'
import React from 'react';
import { useState } from 'react';



//---------CREATE COMPONENTS------//

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:'/',
        element:<ControlBoard/>
      },
      {
        path:'/احصائيات',
        element:<Statistics />
      },
      {
        path:'/تحرير عقد',
        element:<AddContract />
      },
      {
        path:'/نماذج العقود',
        element:<Models />
      },
      {
        path:'/ارشيف الزبائن',
        element:<ArchiveClients />
      },
      {
        path:'/ارشيف الملفات',
        element:<ArchiveFiles />
      },
      {
        path:'/اشعارات',
        element:<Notification />
      },
      {
        path:'/اعدادات',
        element:<Settings />
      }
    ]

  }
])



function Root(){
  const [user,setUser] = useState("####")

  return<>
          <div className='container'>

              <div className='component'>
                <Outlet />
              </div>

              <div className='SideBar'>

                  <div className='logoE-N'>
                  <img src={logoE_N} className='logo' alt='logo'/>
                  </div>

                  <div className='links'>
                        <div className='link '><div className='l-ink'><NavLink className="navlink" to='/' >لوحة التحكم</NavLink></div><div className='icon-1 '><img src={logoC} className='icon'/></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/احصائيات'> احصائيات</NavLink></div><div className='icon-1 '><img src={logoS} className='icon'/></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/تحرير عقد'>تحرير عقد</NavLink></div><div className='icon-1 '><img src={logoContr} className='icon'/></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/نماذج العقود'>نماذج العقود</NavLink></div><div className='icon-1 '> <img src={logoModel} className='icon'/></div></div>
                        <div className='link '><div className='l-ink'><NavLink className="navlink" to='/ارشيف الزبائن'> ارشيف الزبائن</NavLink></div><div className='icon-1 '><img src={logoCli} className='icon'/></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/ارشيف الملفات'>ارشيف الملفات</NavLink></div><div className='icon-1 '><img src={logoFile} className='icon'/></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/اشعارات'>اشعارات</NavLink></div><div className='icon-1 '><img src={logoNotf} className='icon'/></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/اعدادات'>اعدادات</NavLink></div><div className='icon-1 '><img src={logoSett} className='icon'/></div></div>
                  </div>

                  <div className='foot'>
                        <div className='admin'>{user}</div>
                        <div className='admin-name'> {user} مكتب الاستاذ </div>
                        <div className='exit'><button className='exit-Button'><img src={logoE} className='logoC'/></button></div>
                  </div>
              </div>



              {/*  SIDBAR QUAND ON REDUIT L ECRAN */}
              <div className='SideBar-m'>
                  <div className='logoE-N2'>
                        <img src={logoE_N2} className='logo2' alt='logo'/>
                  </div>
                  <div className='links'>
                        <div className='link '><div className='l-ink'><NavLink className="navlink" to='/' ><div className='icon-1 '><img src={logoC} className='icon'/></div></NavLink></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/احصائيات'> <div className='icon-1 i1 '><img src={logoS} className='icon'/></div></NavLink></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/تحرير عقد'><div className='icon-1 '><img src={logoContr} className='icon'/></div></NavLink></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/نماذج العقود'><div className='icon-1 '> <img src={logoModel} className='icon'/></div></NavLink></div></div>
                        <div className='link '><div className='l-ink'><NavLink className="navlink" to='/ارشيف الزبائن'> <div className='icon-1 i1 '><img src={logoCli} className='icon'/></div></NavLink></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/ارشيف الملفات'><div className='icon-1 '><img src={logoFile} className='icon'/></div></NavLink></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/اشعارات'><div className='icon-1 '><img src={logoNotf} className='icon'/></div></NavLink></div></div>
                        <div className='link '><div className='l-ink'><NavLink className='navlink' to='/اعدادات'><div className='icon-1 i1 i2 '><img src={logoSett} className='icon'/></div></NavLink></div></div>
                  </div>
                  <div className='foot'>
                      <div className='exit'><button className='exit-Button'><img src={logoE} className='logoC'/></button></div>
                  </div>
              </div>
          
          
          
          </div>
  
  
  
  
  </>

}
function App(){
  return <RouterProvider router={router}/>

}
export default App;