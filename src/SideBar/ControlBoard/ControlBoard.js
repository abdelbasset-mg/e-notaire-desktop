
import { NavLink, createBrowserRouter,useLocation } from 'react-router-dom';
import AddContract from '../AddContract/AddContract';
import Clock from './elements-controlBoard/Clock';
import DateC from './elements-controlBoard/DateC';
import FileGraph from './elements-controlBoard/FileChart';
import LogoClock from '../../icons/time.svg';
import './ControlBoard.css';
import { useConstants } from './Constants/Constants';
import SideBar from '../../SideBar';
import o1 from '../../icons/1.svg';
import o2 from '../../icons/2.svg';
import o3 from '../../icons/3.svg';


const router = createBrowserRouter([
    {
        path:'/',
        element:<ControlBoard />,

    },
        {
            path:'/تحرير عقد',
            element:<AddContract/>
        }
    
])



function ControlBoard(){
    const { archiveConract,archiveClients,Models,numberOfAct1,numberOfAct2,numberOfAct3 } = useConstants();
    const location = useLocation();
    const user = location.state ? location.state.user : null;

    
    console.log(user)
    return(
        
        <>
    <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
                <SideBar user={user} />
        </div>
        <div className='w-[87%] flex flex-col'>

        


    {/*------COMPONENT TITLE-------  */}
    <div className='title'>
        <div className='title-1'>لوحة التحكم</div>
    </div>

    {/* GENERAL INFO AND TIME */}

    <div className='second'> {/* FLEX INFORMATIONS AND TIME*/ }
            <div className='info'>
                <div className='title-info'>معلومات عامة حول المكتب</div>
            
                    <div className='circles'>
                        <div className='circle'><div className='c1'><div className='c2'><div className='number'>{Models}</div></div></div><div className='sousTitre'>أرشيف العقود</div></div>
                        <div className='circle'><div className='c1'><div className='c2'><div className='number'>{archiveClients}</div></div></div><div className='sousTitre'>أرشيف الزبائن</div></div>
                        <div className='circle'><div className='c1'><div className='c2'><div className='number'>{archiveConract}</div></div></div><div className='sousTitre'>نماذج العقود</div></div>
                    </div>
            </div>
        
            <div className='time'>
                
                    <div className='time-title flex flex-row-reverse '>  (ة)  مكتب الأستاذ <div className='mr-[6px]'> {user} </div> </div><div className='barre-time'></div>
                    <div className='time-time'>
                        <div className='time-clock'><Clock  color="#DDB660" fontSize="30pt" fontWeight="Bold" fontFamily="monospace"/></div>
                        <div className='time-icon'><img src={LogoClock} className='logoClock'/></div>
                    </div>
                    <div className='time-date'><DateC color="#DDB660" fontSize="18pt" /></div>

            </div>
    </div>{/*END SECOND */}
        
    
    <div className='foot-1'>{/*CHART --- MOST REQUESTED ---BUTTON ADD CONTRACT */}
        
        <div className='graph'>
            <div className='title-chart'>الملفات اليومية لاخر 30 يوم</div>
            <div className='chart h-[85%]'> <FileGraph/></div>
        </div>

        <div className='mostRequ-newContr'>
            <div className='mostRequ'>
            
                <div className='title-mostRequ'>العقود الاكثر طلبا</div>
                <div className='Contracts'>
                
                    <div className='contract'>
                    <div className='ordre mt-[2%]'><img src={o1}></img></div>
                       <div className='flex flex-col w-[100%] text-right '>
                        <div className='contract-c'>تنازل عن حصص في شركة</div>
                        <div className='numberOfAct text-[0.6em] mr-[2%]'>تم توثيق {numberOfAct1} عقد</div>
                       </div>
                    </div>
                    <div className='barre2'><div className='bardiv'></div></div>
    
                    <div className='contract'>
                    <div className='ordre mt-[2%]'><img src={o2}></img></div>
                       <div className='flex flex-col w-[100%] text-right '>
                        <div className='contract-c'> عقد بيع و شراء قطعة أرض</div>
                        <div className='numberOfAct text-[0.6em] mr-[2%]'>تم توثيق {numberOfAct2} عقد</div>
                       </div>

                    </div>
                    <div className='barre2'><div className='bardiv'></div></div>
                    <div className='contract'>
                    <div className='ordre mt-[2%]'><img src={o3}></img></div>
                       <div className='flex flex-col w-[100%] text-right '>
                        <div className='contract-c'>كراء مسكن </div>
                        <div className='numberOfAct text-[0.6em] mr-[2%]'>تم توثيق {numberOfAct3} عقد</div>
                       </div>

                    </div>
                
                    <div className='barre2'><div className='bardiv'></div></div>
                </div>

            </div>

            <div className='newContr'>
                <div className='Buttondiv'><NavLink className="button" to='/تحرير عقد'>تحرير عقد</NavLink></div>
            </div>

        </div>
    </div>
    </div>
    </div>
</>
)
}
export default ControlBoard;