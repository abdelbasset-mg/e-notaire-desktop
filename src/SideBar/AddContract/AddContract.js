import React, { useState,useEffect } from 'react';
import triangle from '../../icons/triangle.svg';
import '../Models/Models.css';
import { useConstants } from '../Models/BtnAddNature/Constants';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SideBar from '../../SideBar';



export const  Models = () => {
    const [openModel,setOpenModel]= useState(false)
    const{newContract,setNewContract,inputTable,result,setResult}=useConstants();
    const[model,setModel]=useState("");
    const[readNature,setReadNature]=useState([])

    useEffect(() => {
        const fetchData = async (req,res) => {
            const readNature = await axios.get("http://localhost:5000/read-nature")
            setReadNature(readNature.data.folders)
          }
        
          fetchData()
    
    }, [])

    
   
    return (
        <>
        <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
                <SideBar />
        </div>
        <div className='w-[87%] flex flex-col'>



        <div dir='rtl' className='container-AddContract'>
            <div className='title-contract'>
                <div className='title-1-contract'>تحرير عقد</div>
            </div>

            <div className=" soustitre-contract "> قائمة العقود</div>
            
            <div className='search-addcontract' dir='rtl'>
                <div className='search'>
                    <input
                        className='text'
                        type="search"
                        name='searchBar'
                        id='seacrhBar'
                        placeholder='البحث'
                        onChange={e=>setResult(e.target.value)}
                    />
                </div>
            
               
            </div>
            <div className='contractContainer '>
            <div className='flex justify-center text-center w-[100%]'>

                <div className='titles' dir='ltr'>
                    <div className='t1'><div className='t2 '>رقم العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1 ml-[9%]  '><div className='t2 '>طبيعة العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1 ml-[8%]  '><div className='t2 '>عدد النماذج</div><div className='triangle'><img src={triangle}></img></div></div>
                </div>
                </div>
                <div className='scrollbar'>
                {
                        readNature.filter(folders=>folders.includes(result)).map(
                            (data,index)=>{
                                return(
                                    
                                    <Link className='line-contract hover:bg-[#FFF5DE]' onClick={()=>setModel(data)}  key={data} to={`/تحرير عقد/${data}`} dir='ltr'>
        
                                        <div className='numberOfContract'>{index}</div>
                                        <div key={data.natureOfContract} className='natureOfContract'>{data}</div>
                                        <div className='numberOfModels'><div className='models'>{0}</div></div>
            
                                    </Link>
                                   
                                    
                                )
                            }
                        )
                        }
                 </div> 
            </div>
            </div>
            </div>
            </div>

        </>
        
    )
}

export default Models;
