import React from "react";
import './ArchiveClients.css';
import triangle from '../../icons/triangle.svg';
import { useConstants } from "./Constants/Constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../SideBar";
function ArchiveClients(){
    const {search,setSearch,inputTableClients}= useConstants();
    const [tableInfo,setTableInfo]=useState(
        {number:'',
        fullName:'',
        dateBirth:'',
        sexe:'',
        numberOfContracts:'',
        placeOfBirth:'',
        blood:'',
        ID:'',
        address:'',
        nameFather:'',
        firstNameMother:'',
        lastNameMother:'',
        phone:''}
    );
    const handleClick= (inputTableClients,index) => {
        setTableInfo(inputTableClients[index])
    }
    
    return(
        <>
          <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
            <SideBar />
        </div>
        <div className='w-[87%] flex flex-col'>
        <div className="container-clients" dir="rtl">
             <div className='title-clt '>
                <div className='title-1-clt'>أرشيف الزبائن</div>
            </div>

            <div className=" soustitre-clt "> قائمة الزبائن</div>
            
            <div className="clients">
                <div className="cln1">
                        <div className='search-clt'>
                            <input
                                className='text-clt focus:outline-none'
                                type="search"
                                name='searchBar'
                                id='seacrhBar'
                                placeholder='البحث'
                                onChange={e=>setSearch(e.target.value)}
                            />
                        </div>
                        <div className='flex mt-[5%] mr-[2%] '>
                            <div className='t1-clt w-[20%] justify-end'><div className='t2-clt t2-1-clt'>رقم الزبون</div><div className='triangle-clt'><img src={triangle}></img></div></div>
                            <div className='t1-clt w-[20%] justify-end'><div className='t2-clt t2-name '>اسم و لقب الزبون </div><div className='triangle-clt'><img src={triangle}></img></div></div>
                            <div className='t1-clt w-[20%] justify-center'><div className='t2-clt '>تاريخ الميلاد</div><div className='triangle-clt'><img src={triangle}></img></div></div>
                            <div className='t1-clt w-[20%] justify-center'><div className='t2-clt '> جنس الزبون</div><div className='triangle-clt'><img src={triangle}></img></div></div>
                            <div className='t1-clt w-[20%] justify-center'><div className='t2-clt t2-2-clt'>عدد العقود</div><div className='triangle-clt'><img src={triangle}></img></div></div>
        
                        </div>
                        <div className="table-clt">
                        {
                                inputTableClients.filter(client=>client.fullName.includes(search)).map(
                                    (info,index)=>{
                                        return(
                                            
                                            <div className='line-client hover:bg-[#FFF5DE]' onClick={()=>handleClick(inputTableClients, index)} key={index}  >

                                               <div className="w-[20%] flex justify-start mr-[3%] ">
                                                   <div className=' info2  '>{info.number}</div>
                                               </div>
                                               <div className="w-[20%] flex justify-start">
                                                   <div key={info.fullName} className='info2  '>{info.fullName}</div>
                                               </div>
                                                <div className="w-[20%] flex justify-center text-center">
                                                   <div className='birth info2'>{info.dateBirth}</div>
                                                </div>
                                                <div className="w-[20%] flex justify-center text-center ">
                                                <div className='sexe info2 bg-[#284A68] text-white rounded-lg w-[45%]'><div >{info.sexe}</div></div>
                                                </div>
                                                <div className="w-[20%] flex justify-center text-center">
                                                <div className='numberOfContracts info2'>{info.numberOfContracts}</div>
                                                </div>
                                              
                    
                                            </div>
        
                                            
                                        )
                                    }
                                    
                                )
                        }

                        </div>
                </div>
                <div className="cln2">
                        <div className="info-client ">

                                    <div className="entete">
                                        <div className="text-[#284A68] font-bold mt-4 text-xl">{tableInfo.fullName}</div>
                                        <div className="text-[#284A68] font-bold mt-2-text-xl">{tableInfo.number}</div>
                                    </div>
                                    <div className="informations-client-1  mt-4 mr-4">
                                        
                                            <div className="data text-sm text-[#284A68]" >تاريخ الميلاد : {tableInfo.dateBirth}</div>
                                            <div className="data text-sm text-[#284A68]">مكان الميلاد : {tableInfo.placeOfBirth}</div>

                                        
                                        
                                        <div className="flex  data data-1 justify-between text-sm text-[#284A68]" >
                                           
                                            <div >الجنس : {tableInfo.sexe} </div>            
                                            
                                            <div className="ml-12">الزمرة الدموية : {tableInfo.blood} </div>    

                                        </div>
                                        
                                        <div  className="data text-sm text-[#284A68]">رقم التعريف الوطني : {tableInfo.ID}</div>
                                        
                                        <div  className="data text-sm text-[#284A68]">العنوان : {tableInfo.address}</div>
                                        
                                        <div  className="data text-sm text-[#284A68]">اسم الاب : {tableInfo.nameFather}</div>
                                        
                                        <div className="flex justify-between  data data-1 text-sm text-[#284A68]">
                                            <div >اسم الام : {tableInfo.firstNameMother}</div> 
                                            <div className="ml-14">لقب الام : {tableInfo.lastNameMother}</div>  

                                        </div>
                                        <div  className="data text-sm text-[#284A68]">رقم الهاتف : {tableInfo.phone}</div>



                                    </div>
                                    <div className="foot-client">
 
                                              <div className="circle-clt mt-4">
                                              <div className='circle circle-1 mb-4' ><div className='c1 c1-1 mr-5'><div className='c2 c2-1'><div className='number number-1'>{tableInfo.numberOfContracts}</div></div></div><div className='sousTitre sousTitre-1'> <div className='number-2'>{tableInfo.numberOfContracts}</div>   عدد العقود المحررة</div></div>
                                              </div>
                                    </div>
                                    
                    

                        </div>
                </div>




            </div>
        </div>
        </div></div>
        </>
    )

}
export default ArchiveClients;