
import { NavLink, createBrowserRouter } from 'react-router-dom';
import AddContract from '../AddContract/AddContract';
import Clock from './elements-controlBoard/Clock';
import DateC from './elements-controlBoard/DateC';
import FileGraph from './elements-controlBoard/FileChart';
import LogoClock from '../../icons/time.svg';
import './ControlBoard.css';
import { useConstants } from './Constants/Constants';
import SideBar from '../../SideBar';
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
    const { archiveConract,archiveClients,Models,user } = useConstants();
    return(
        
        <>
    <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
                <SideBar />
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
                
                    <div className='time-title'>  مكتب الأستاذ  {user}</div><div className='barre-time'></div>
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
            <div className='chart'> <FileGraph/></div>
        </div>

        <div className='mostRequ-newContr'>
            <div className='mostRequ'>
            
                <div className='title-mostRequ'>العقود الاكثر طلبا</div>
                <div className='Contracts'>
                
                    <div className='contract'>
                        <div className='ordre'>1</div>
                        <div className='contract'></div>
                    </div>
                    <div className='barre2'><div className='bardiv'></div></div>
    
                    <div className='contract'>
                        <div className='ordre' >2</div>
                        <div className='contract'></div>
                    </div>
                    <div className='barre2'><div className='bardiv'></div></div>
                    <div className='contract'>
                        <div className='ordre'>3</div>
                        <div className='contract'></div>
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