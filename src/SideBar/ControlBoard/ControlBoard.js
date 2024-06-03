
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
import { useUser } from '../../context/userContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { set } from 'mongoose';




const router = createBrowserRouter([
    {
        path:'/dashboard',
        element:<ControlBoard />,

    },
        {
            path:'/تحرير عقد',
            element:<AddContract/>
        }
    
])



function ControlBoard(){
    const [act1,setAct1] = useState("");
    const [act2,setAct2] = useState("");
    const [act3,setAct3] = useState("");
    const [numberOfAct1,setNumberOfAct1] = useState(0)
    const [numberOfAct2,setNumberOfAct2] = useState(0)
    const [numberOfAct3,setNumberOfAct3] = useState(0)


    const { user } = useUser();
    const [clientCount, setClientCount] = useState(0)
    const [contractCount, setContractCount] = useState(0)
    const [templateCount, setTemplateCount] = useState(0)
    const [frequence,setFrequence]=useState([])

    useEffect(() => {
        const fetchData = async (req,res) => {
          const clientCount = await axios.get("http://localhost:5000/clients-count")
          const contractCount = await axios.get("http://localhost:5000/contracts-count")
          const templateCount = await axios.get("http://localhost:5000/templates-count")


          setClientCount(clientCount.data.doubleContractCount)
          setContractCount(contractCount.data.contractCount)
          setTemplateCount(templateCount.data.adjustedJsonFileCount)
          
          setFrequence(contractCount.data.topThreeFrequencies)
          console.log(contractCount.data.topThreeFrequencies)
          setAct1(frequence[0]?.contractNature || '');
          setAct2(frequence[1]?.contractNature || '');
          setAct3(frequence[2]?.contractNature || '');
          setNumberOfAct1(frequence[0]?.frequency || 0);
          setNumberOfAct2(frequence[1]?.frequency || 0);
          setNumberOfAct3(frequence[2]?.frequency || 0);
        }
        console.log(contractCount)
        console.log(templateCount)
        console.log(clientCount)
      
        fetchData()
      }, [])
   
   
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
                        <div className='circle'><div className='c1'><div className='c2'><div className='number'>{contractCount}</div></div></div><div className='sousTitre'>أرشيف العقود</div></div>
                        <div className='circle'><div className='c1'><div className='c2'><div className='number'>{contractCount}</div></div></div><div className='sousTitre'>أرشيف الزبائن</div></div>
                        <div className='circle'><div className='c1'><div className='c2'><div className='number'>{templateCount}</div></div></div><div className='sousTitre'>نماذج العقود</div></div>
                    </div>
            </div>
        
            <div className='time'>
                
                    <div className='time-title flex flex-row-reverse pt-[20px] pr-[25%] '>  (ة)  مكتب الأستاذ </div><div className='flex justify-center'><div className='time-title pb-[20px]'> {user} </div> </div><div className='barre-time'></div>
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
                        <div className='contract-c'>{act1}</div>
                        <div className='numberOfAct text-[0.6em] mr-[2%]'>تم توثيق {numberOfAct1} عقد</div>
                       </div>
                    </div>
                    <div className='barre2'><div className='bardiv'></div></div>
    
                    <div className='contract'>
                    <div className='ordre mt-[2%]'><img src={o2}></img></div>
                       <div className='flex flex-col w-[100%] text-right '>
                        <div className='contract-c'> {act2}</div>
                        <div className='numberOfAct text-[0.6em] mr-[2%]'>تم توثيق {numberOfAct2} عقد</div>
                       </div>

                    </div>
                    <div className='barre2'><div className='bardiv'></div></div>
                    <div className='contract'>
                    <div className='ordre mt-[2%]'><img src={o3}></img></div>
                       <div className='flex flex-col w-[100%] text-right '>
                        <div className='contract-c'>{act3}  </div>
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