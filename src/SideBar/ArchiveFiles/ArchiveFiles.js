import React from "react";
import './ArchivesFiles.css';
import triangle from '../../icons/triangle.svg';
import { useConstants } from "./Constants/Constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../SideBar";
function ArchiveFiles(){
    const {search,setSearch,inputTableFiles}= useConstants();
    const [tableInfoFiles,setTableInfoFiles]=useState(
        {number:'',
        fullName:'',
        dateBirth:'',
        sexe:'',
        numberOfContracts:'',
        date:'',
        numberOfPerson:'',
        placeOfBirth:'',
        blood:'',
        ID:'',
        address:'',
        nameFather:'',
        firstNameMother:'',
        lastNameMother:'',
        phone:''}
    );
    const handleClick = (inputTableFiles,index) => {
        setTableInfoFiles(inputTableFiles[index])
    }
    
    return(
        <>
          <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
            <SideBar />
        </div>
        <div className='w-[87%] flex flex-col'>
        <div className="container-file" dir="rtl">
             <div className='title-file '>
                <div className='title-1-file'>أرشيف الملفات</div>
            </div>

            <div className=" soustitre-file "> قائمة الملفات</div>
            
            <div className="files">
                <div className="cln1">
                        <div className='search-file'>
                            <input
                                className='text-file focus:outline-none'
                                type="search"
                                name='searchBar'
                                id='seacrhBar'
                                placeholder='البحث'
                                onChange={e=>setSearch(e.target.value)}
                            />
                        </div>
                        <div className='titles-file'>
                            <div className='t1-file'><div className='t2-file t2-1-file'>رقم الملف</div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file t1-2-file'><div className='t2-file t2-name '>طبيعة الملف </div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file'><div className='t2-file t2-3-file'> اسم النموذج</div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file '><div className='t2-file '> تاريخ التحرير</div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file '><div className='t2-file t2-2-file'>عدد الأطراف</div><div className='triangle-file'><img src={triangle}></img></div></div>
        
                        </div>
                        <div className="table-file">
                        {
                                inputTableFiles.filter(file=>file.natureOfContract.includes(search)).map(
                                    (info,index)=>{
                                        return(
                                            
                                            <div className='line-file hover:bg-[#FFF5DE]' onClick={()=>handleClick(inputTableFiles, index)} key={index}  >

                                               <div className="div1">
                                                <div className='numberOfFile info2 numberOfFile'>{info.number}</div>
                                                <div key={info.natureOfContract} className=' info2 natureOfContract-1 '>{info.natureOfContract}</div>
                                                </div>
                                                <div className="div2">
                                                <div className=' info2 model'>{info.model}</div>
                                                <div className=' info2 date'>{info.date}</div>
                                                <div className=' info2 numberOfPerson'>{info.numberOfPerson}</div>
                                                </div>
                    
                                            </div>
        
                                            
                                        )
                                    }
                                    
                                )
                        }

                        </div>
                </div>
                <div className="cln2">
                        <div className="info-file ">

                                    <div className="entete">
                                        <div className="text-[#284A68] font-bold mt-4 text-xl entete-1 text-center mb-3">{tableInfoFiles.natureOfContract}</div>
                                        <div className="text-[#284A68] font-bold mt-2-text-xl mb-2">{tableInfoFiles.model}</div>
                                        <div className="text-[#284A68] font-bold mt-2-text-xl">{tableInfoFiles.number}</div>

                                    </div>
                                    <div className="informations-file-1  mt-4 mr-4">
                                           
                                            <div className="data text-sm text-[#284A68]" > اسم الزبون : {tableInfoFiles.fullName}</div>
                                            <div className="data text-sm text-[#284A68]" >تاريخ الميلاد : {tableInfoFiles.dateBirth}</div>
                                            <div className="data text-sm text-[#284A68]">مكان الميلاد : {tableInfoFiles.placeOfBirth}</div>

                                        
                                        
                                        <div className="flex  data data-1 justify-between text-sm text-[#284A68]" >
                                           
                                            <div >الجنس : {tableInfoFiles.sexe} </div>            
                                            
                                            <div className="ml-12">الزمرة الدموية : {tableInfoFiles.blood} </div>    

                                        </div>
                                        
                                        <div  className="data text-sm text-[#284A68]">رقم التعريف الوطني : {tableInfoFiles.ID}</div>
                                        
                                        <div  className="data text-sm text-[#284A68]">العنوان : {tableInfoFiles.address}</div>
                                        
                                        <div  className="data text-sm text-[#284A68]">اسم الاب : {tableInfoFiles.nameFather}</div>
                                        
                                        <div className="flex justify-between  data data-1 text-sm text-[#284A68]">
                                            <div >اسم الام : {tableInfoFiles.firstNameMother}</div> 
                                            <div className="ml-14">لقب الام : {tableInfoFiles.lastNameMother}</div>  

                                        </div>
                                        <div  className="data text-sm text-[#284A68] pb-16">رقم الهاتف : {tableInfoFiles.phone}</div>



                                    </div>
                                   
                                    
                    

                        </div>
                </div>




            </div>
        </div>
        </div>
        </div>
        </>
    )

}
export default ArchiveFiles;