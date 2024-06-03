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
import update from '../../icons/pencil.svg';
import supp from '../../icons/supp.svg';
import UpdateNature from './UpdateNature';



export const  Models = () => {
    const [openModel,setOpenModel]= useState(false)
    const [openModel2,setOpenModel2]= useState(false)

    const{newContract,setNewContract,inputTable,result,setResult}=useConstants();
    const[model,setModel]=useState("");
    const[readNature,setReadNature]=useState([])

  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/read-nature");
                setReadNature(response.data.folders);
            } catch (error) {
                console.error('Error fetching nature data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (templateNature) => {
        try {
            await axios.delete("http://localhost:5000/delete-nature", { data: { templateNature } });
            const updatedNature = readNature.filter(nature => nature !== templateNature);
            setReadNature(updatedNature);
        } catch (error) {
            console.error('Error deleting template nature:', error);
        }
    };

    const handleOpenUpdateNature = (data) => {
        setModel(data); // Stocke la valeur de l'élément sélectionné
        setOpenModel2(true); // Ouvre UpdateNature
    };
    

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
                        readNature.filter(folders=>folders.includes(result)).map(
                            (data,index)=>{
                                return(
                                    <>
                                    <div className='flex '>
                                    
                                    <Link className='line-contract w-[89%] hover:bg-[#FFF5DE]' onClick={()=>setModel(data)}  key={data} to={`/نماذج العقود/${data}`} dir='ltr'>
        
                                        <div className='numberOfContract'>{index}</div>
                                        <div key={data.natureOfContract} className='natureOfContract'>{data}</div>
                                        <div className='numberOfModels'><div className='models'>{0}</div></div>

            
                                    </Link>
                                    <button onClick={() => { setOpenModel2(true); setModel(data); }} className='h-max mt-[1%] mr-[0.5%] '><img src={update} className='w-[28px]' /></button>
                                    <button onClick={() => handleDelete(data)} className='mr-[1%] h-max mt-[1%]'><img src={supp} className='w-[30px] '  /></button>
                                    </div>
                                    </>
                                   
                                    
                                )
                            }
                        )
                        }
                 </div> 
            </div>
            </div>
            </div>
            </div>
            <UpdateNature data={model} open={openModel2} onClose={() => setOpenModel2(false)} />

        </>
        
    )
}

export default Models;
