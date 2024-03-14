import React, { useState } from 'react';
import triangle from '../../icons/triangle.svg';
import './Models.css';
import { useConstants } from '../AddContract/BtnSave/Constants';
import { Link } from 'react-router-dom';
import Model from './Model/Model'


function AddContract() {
    const [openModel,setOpenModel]= useState(false)
    const{newContract,setNewContract,inputTable,result,setResult}=useConstants();
    const[model,setModel]=useState("");

    
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
        <><div dir='rtl' className='container-AddContract'>
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
                <div className='titles' dir='ltr'>
                    <div className='t1'><div className='t2 t2-1'>رقم العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1 t1-2'><div className='t2 t2-2'>طبيعة العقد</div><div className='triangle'><img src={triangle}></img></div></div>
                    <div className='t1'><div className='t2 t2-3'>عدد النماذج</div><div className='triangle'><img src={triangle}></img></div></div>
                </div>
                <div className='scrollbar'>
                        {
                        inputTable.filter(contract=>contract.natureOfContract.startsWith(result)).map(
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

        </>
    )
}

export default AddContract;
