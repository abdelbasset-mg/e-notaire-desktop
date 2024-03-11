import React, { useState } from 'react';
import triangle from '../../icons/triangle.svg';
import Add from './BtnSave/BtnSave';
import './AddContract.css';
import { useConstants } from './BtnSave/Constants';
import { Link } from 'react-router-dom';


function AddContract() {
    const [openModel,setOpenModel]= useState(false)
    const{newContract,setNewContract,inputTable,result,setResult}=useConstants();
    
    
    //let {number,natureOfContract,numberOfModels}=newContract;
    // function changeHandle(){
    //     setInputTable([...inputTable,[number,natureOfContract,numberOfModels]])
    //     setNewContract( {number:'',
    //     natureOfContract:'',
    //     numberOfModels:''})
    //     setOpenModel(false);
    //     seti(i+1)
    // }
    return (
        <>
            <div className='title'>
                <div className='title-1'>تحرير عقد</div>
            </div>

            <div className=" soustitre "> قائمة العقود</div>
            
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
                    <button className=' button1' onClick={()=> setOpenModel(true)}>اضافة عقد جديد</button>
                    
                    <Add open={openModel} onClose={()=> setOpenModel(false)}  />
                </div>
            </div>
            <div className='contractContainer '>
                <div className='titles'>
                    <div className='t1'><div className='t2 t2-1'>رقم العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1 t1-2'><div className='t2 t2-2'>طبيعة العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1'><div className='t2 t2-3'>عدد النماذج</div><div className='triangle'><img src={triangle}></img></div></div>
                </div>
                <div className='scrollbar' dir='rtl'>
                        {
                        inputTable.filter(contract=>contract.natureOfContract.startsWith(result)).map(
                            (data,index)=>{
                                return(
                                    
                                    <Link className='line-contract' to="" dir='ltr'>
        
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

        </>
    )
}

export default AddContract;
