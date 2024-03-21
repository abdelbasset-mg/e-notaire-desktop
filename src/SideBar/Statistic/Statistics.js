import React from 'react';
import './Statistcs.css'
import MonthsList from './elements-statistics/Months';
import Chartday from './elements-statistics/Chartday'; 
import DataChart from './elements-statistics/DataChart';
import { useConstants } from './constantes/Constantes';
import SideBar from '../../SideBar';
function Statistics() {
    const DataPercentage1 = "63%";
    const DataPercentage2 = "37%";

    return (
        <>
         <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
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
                           <div className='ligne2'>
                           <div className='li1'>1000</div>
                           <div className='li2'>عقد بيع و شراء العقارات</div>
                           <div className='lit2 centered-element'>مستحضر </div>
                           </div>
   
                           <div className='ligne3'>
                           <div className='li1'>1000</div>
                           <div className='li2'>عقد بيع و شراء العقارات</div>
                           <div className='lit3 centered-element'>مستحضر </div>
                            
                           </div>
                           <div className='ligne4'>
                           <div className='li1'>1000</div>
                           <div className='li2'>عقد بيع و شراء العقارات</div>
                           <div className='lit4 centered-element'>مستحضر </div>
                            
                           </div>           
                  
                             </div>
                           </div>

            <div className='most-contrat'>
           
                <div className='title-most-contart'>العقود الاكثر طلبا</div>
               <div className='Contracts-stat'>
               
                   <div className='contrat-stat'>
                       <div className='num'>1</div>
                       <div className='contrat'></div>
                    </div>                     <div className='barre'><div className='bar'></div></div>
   
                   <div className='contrat-stat'>
                       <div className='num' >2</div>
                        <div className='contart'></div>
                    </div>
                    <div className='barre'><div className='bar'></div></div>
                   <div className='contrat-stat'>
                      <div className='num'>3</div>
                      <div className='contrat'></div>
                   </div>
               
                    <div className='barre'><div className='bar'></div></div>
                </div>

          </div>
            
           </div>
           </div>
           </div>

          
        </>
    );
}

export default Statistics;