import React from 'react';
import './Statistcs.css'
import MonthsList from './elements-statistics/Months';
import Chartday from './elements-statistics/Chartday'; 
import DataChart from './elements-statistics/DataChart';
import { useConstants } from './constantes/Constantes';
import SideBar from '../../SideBar';
import o1 from '../../icons/1.svg';
import o2 from '../../icons/2.svg';
import o3 from '../../icons/3.svg';
function Statistics() {
    const { numberOfAct1,numberOfAct2,numberOfAct3,DataPercentage1,DataPercentage2,file } = useConstants();


    return (
        <>
         <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%] h-[100%]'>
            <SideBar />
        </div>
        <div className='w-[87%] flex flex-col'>
         
           <div className='title1'>
                 <div className='title-1'>احصائيات</div>
                   <div className='Month'>
                       <MonthsList />
                  </div>
               </div>
               
              <div className='Second'>
                    <div className='circle-relatif'>
                        <div className='title-circle-relatif'> الزبائن الجدد</div>
                        <div className='Circle'>
                            <DataChart />
                        </div>
                    <div className='statstic-container'>
                        <div className='statistic'>
                               <div className='l1'>
                                   <div className='new'> <div className='b1' > •</div> الزبائن القدامى</div>
                                   <div className='l1title'>{DataPercentage1}</div>
                               </div>
                               <div className='l2'>
                               <div className='old'>  <div className='b2' > • </div> الزبائن الجدد </div>
                               <div className='l2title'> {DataPercentage2}</div>
                            </div>
                             </div>
                             </div>
                             </div>
                    <div className='diagramme'>
                        <div className='diagrame-title'> الملفات اليومية</div>
                        <div className='diag'><Chartday /></div>
                    </div>

                </div>
                      
            <div className='Foot2'>
                 <div className='last-folder'>
                    <div className='last-folder-title' >اخر الملفات</div>
                    
                        <div className='table'>
                           <div className='ligne1'>
                               <div className='titlec1'>رقم الملف</div>
                               <div className='titlec2'>نوع العقد</div>
                               <div className='titlec3'>حالة الملف</div>
                               </div>
                               { file.map((data,index)=>{
                        return (
                           <div className='ligne2'>
                           <div className='li1'>{data.fileNumber}</div>
                           <div className='li2'>{data.act}</div>
                           <div className='lit2 centered-element'>{data.status} </div>
                           </div>
                                  )
                         })
                   }
   
                        
                                  
                  
                             </div>

                           </div>
                     

            <div className='most-contrat'>
           
                <div className='title-most-contart'>العقود الاكثر طلبا</div>
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
            
           </div>
           </div>
           </div>

          
        </>
    );
}

export default Statistics;