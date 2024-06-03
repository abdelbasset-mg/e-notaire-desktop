import React from "react";
import './ArchivesFiles.css';
import triangle from '../../icons/triangle.svg';
import { useConstants } from "./Constants/Constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../SideBar";
import axios from "axios";
import { useEffect } from "react";
function ArchiveFiles(){
    const {search,setSearch,inputTableFiles}= useConstants();
    const [file,setFile]=useState([]);
    const [tableInfoFiles,setTableInfoFiles]=useState(
        {
        contractNature:'',
        clientName:'',
        clientBirth:'',
        clientPlace:'',
        idClient:'',
        address:'',
        nameFather:'',
        nameMother:'',
        lastNameMother:'',
        phone:''}
    );
    const handleClick = (file,index) => {
        setTableInfoFiles(file[index])
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getContracts");
                setFile(response.data.contract);
                console.log(file)
               
            } catch (error) {
                console.error('Error fetching clients data:', error);
            }
        };

        fetchData();
    }, []);
    
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
                        <div className='flex mt-[5%] mr-[2%]'>
                            <div className='t1-file w-[20%] justify-end'><div className='t2-file '>رقم الملف</div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file w-[25%] justify-end'><div className='t2-file t2-name '>طبيعة الملف </div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file w-[20%] justify-start'><div className='t2-file t2-3-file'> اسم النموذج</div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file w-[20%]'><div className='t2-file '> تاريخ التحرير</div><div className='triangle-file'><img src={triangle}></img></div></div>
                            <div className='t1-file w-[15%]'><div className='t2-file t2-2-file'>عدد الأطراف</div><div className='triangle-file'><img src={triangle}></img></div></div>
        
                        </div>
                        <div className="table-file">
                        {
                                file.filter(file=>file.contractNature.includes(search)).map(
                                    (info,index)=>{
                                        return(
                                            
                                            <div className='line-file hover:bg-[#FFF5DE]' onClick={()=>handleClick(file, index)} key={index}  >

                                               <div className="w-[20%] flex justify-start">
                                                <div className='numberOfFile info2 numberOfFile'>{index}</div>
                                                </div>
                                                <div className="w-[30%] flex justify-start">
                                                <div key={info.natureOfContract} className=' info2 natureOfContract-1 '>{info.contractNature}</div>
                                                </div>
                                                <div className="w-[20%] flex justify-center">
                                                <div className=' info2 '>{info.model}</div>
                                                </div>
                                                <div className="w-[20%] flex justify-center">
                                                <div className=' info2'>{info.formattedDate}</div>
                                                </div>
                                                <div className="w-[10%] flex justify-center">
                                                <div className=' info2'>{info.cote}</div>
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
                                        <div className="text-[#284A68] font-bold mt-4 text-xl entete-1 text-center mb-3">{tableInfoFiles.contractNature}</div>
                                        <div className="text-[#284A68] font-bold mt-2-text-xl mb-2">{tableInfoFiles.model}</div>
                                        <div className="text-[#284A68] font-bold mt-2-text-xl">{tableInfoFiles.number}</div>

                                    </div>
                                    <div className="informations-file-1  mt-4 mr-4">
                                           
                                            <div className="data text-sm text-[#284A68]" > اسم الزبون : {tableInfoFiles.clientName}</div>
                                            <div className="data text-sm text-[#284A68]" >تاريخ الميلاد : {tableInfoFiles.clientBirth}</div>
                                            <div className="data text-sm text-[#284A68]">مكان الميلاد : {tableInfoFiles.clientPlace}</div>

                                        
                                        
                                        
                                        <div  className="data text-sm text-[#284A68]">رقم التعريف الوطني : {tableInfoFiles.idClient}</div>
                                        
                                        <div  className="data text-sm text-[#284A68]">العنوان : {tableInfoFiles.address}</div>
                                        
                                        <div  className="data text-sm text-[#284A68]">اسم الاب : {tableInfoFiles.nameFather}</div>
                                        
                                        <div className="flex justify-between  data data-1 text-sm text-[#284A68]">
                                            <div >اسم الام : {tableInfoFiles.nameMother}</div> 
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