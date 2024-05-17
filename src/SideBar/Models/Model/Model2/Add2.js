import React from 'react';

import './Add2.css';
import { useConstants } from '../../BtnAddNature/Constants';
import { useConstants_1 } from './Constants/Constants';


const Add2 = ({open, onClose, changeHandle})=>{
    const {handleInput,saveNewContract} = useConstants();
    const {inputTableVar}= useConstants_1();

    if(!open) return null

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center ">
            <div className="modalcontainer bg-white p-4 rounded-lg pl-8 pr-10 ">
                <div className="title-modal pb-5 pt-4">قائمة المتغيرات</div>
                <div className="List">
                {
                        inputTableVar.map(
                            (data,index)=>{
                                return(
                                    <>
                                    <div className='flex flex-row justify-between mb-4 '>
                                        <div className='C2 mt-1 ml-[40px]'>{data.Variable}</div>
                                        <div>
                                        <button className='C1'><div > نص</div></button>
                                        <button className='C1'> <div> رقم</div></button>
                                        <button className='C1'> <div >مبلغ</div></button>
                                        <button className='C1'> <div>طرف</div></button>
                                        <button className='C1'><div> تاريخ</div></button>
                                        </div>
                                    </div>
                                    </>
                                    
                    
                                   
                                    
                                )
                            }
                        )
                        }


                </div>
               
                <div className="btnContainer3">
                    <button className="btnCancel3" onClick={onClose}>اغلاق</button>
                    <button className="btnSave3"  >حفظ</button>


                </div>

                
            </div>
        </div>
    )


}
export default Add2;