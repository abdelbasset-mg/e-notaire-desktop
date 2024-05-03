import React, { useState } from 'react';
import triangle from '../../icons/triangle.svg';
import './Models.css';
import { useConstants } from './BtnAddNature/Constants';
import { Link } from 'react-router-dom';
import Model from './Model/Model';
import Add from './BtnAddNature/BtnSave';
import SideBar from '../../SideBar';
import axios from 'axios';
import { useEffect } from 'react';



export const  Models = () => {
    const [openModel,setOpenModel]= useState(false)
    const{newContract,setNewContract,inputTable,result,setResult}=useConstants();
    const[model,setModel]=useState("");

    return (
        <>
        <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
                <SideBar />
        </div>
        <div className='w-[87%] flex flex-col'>



        <div dir='rtl' className='container-AddContract'>
            <div className='title-contract'>
                <div className='title-1-contract'>نماذج العقود</div>
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
                <div className='addcontr'>
                    <button className=' button1' onClick={()=> setOpenModel(true)}>اضافة طبيعة عقد</button>
                    
                    <Add open={openModel} onClose={()=> setOpenModel(false)}  />
                </div>
               
            </div>
            <div className='contractContainer '>
            <div className='flex justify-center text-center w-[100%]'>
                <div className='titles' dir='ltr'>
                    <div className='t1'><div className='t2 t2-1'>رقم العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1 ml-[9%]'><div className='t2 t2-2'>طبيعة العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1 ml-[8%] '><div className='t2 t2-3'>عدد النماذج</div><div className='triangle'><img src={triangle}></img></div></div>
                </div>
                </div>
                <div className='scrollbar'>
                        {
                        inputTable.filter(contract=>contract.natureOfContract.includes(result)).map(
                            (data,index)=>{
                                return(
                                    
                                    <Link className='line-contract hover:bg-[#FFF5DE]' onClick={()=>setModel(data.natureOfContract)}  key={data.natureOfContract} to={`/نماذج العقود/${data.natureOfContract}`} dir='ltr'>
        
                                        <div className='numberOfContract'>{data.number}</div>
                                        <div key={data.natureOfContract} className='natureOfContract'>{data.natureOfContract}</div>
                                        <div className='numberOfModels'><div className='models'>{data.numberOfModels}</div></div>
            
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
