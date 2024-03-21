import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NavLink, createBrowserRouter } from 'react-router-dom';

import direction from '../../../../icons/direction.svg';
import vector from '../../../../icons/vector.svg';
import vector1 from '../../../../icons/vector1.svg';
import Delete from '../../../../icons/Delete.svg';

import change from '../../../../icons/change.svg';
import rep from '../../../../icons/rep.svg';
import Add2 from './Add2'; 
import './Model2.css';
import Models from '../../Models'
import Model from '../Model';
import SideBar from '../../../../SideBar';
const router = createBrowserRouter([
   
        {
            path:'/نماذج العقود',
            element:<Models />
        },
        {
            path:'/نماذج العقود/:Result',
            element:<Model />
        }
    
])

function Model2() {
    const { model, model2 ,Result} = useParams();
   

    const [openModel, setOpenModel] = useState(false); 
    const [newItemTitle1, setNewItemTitle1] = useState(""); 
    const [newItemTitle2, setNewItemTitle2] = useState("");
    const handleNewItemTitleChange1 = (event) => {
        setNewItemTitle1(event.target.value);
    }

    const handleNewItemTitleChange2 = (event) => {
        setNewItemTitle2(event.target.value);
    }

    const handleOpenModel = () => {
        setOpenModel(true);
    }
    console.log(Result);

    return (
        <>
        <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
            <SideBar />
        </div>
        <div className='w-[87%] flex flex-col'>
        <div>
            <div>
                <div className='title'>
                    <div className='title-1'>نماذج العقود</div>
                </div>
                <div>
                    <div className="content">
                        <Link className='soustitle' to='/نماذج العقود'><div>قائمة العقود</div></Link>
                        <div className="path">
                            <img src={direction} alt="Direction" />
                        </div>
                        <Link to={`/نماذج العقود/${model}`} className="lien"><div >{model}</div></Link>
                        <div className="path">
                            <img src={direction} alt="Direction" />
                        </div>
                        <div className="lien">{Result}</div>
                    </div>
                </div>
                
                <div className='newitem '>
                    <div className='flex flex-col w-[70%]'>
                <div className='cln-model'>
                    
                    <div className='item'>
                        <div className='newitem-title2'>عنوان البند</div>
                        <input
                            className='item-text1 focus:outline-none'
                            type="text"
                            placeholder="عنوان البند"
                            value={newItemTitle1}
                            onChange={handleNewItemTitleChange1}
                        />
                    </div>
                    <div className='content2'>
                        <div className='Item'>
                            <div className='newitem-title'>
                                محتوى البند
                                <button className='button2' > <img src={vector1} alt="Vector1" />تحديد المتغير</button>
                               
                                <button className='button3' onClick={() => setOpenModel(true)}> <img src={vector} alt="Vector" />توليد القائمة</button>
                                <Add2 open={openModel} onClose={() => setOpenModel(false)} ></Add2>
                            </div>
                        </div>
                        <textarea
                            className='item-text2 focus:outline-none'
                            type="text"
                            placeholder='محتوى البند'
                            value={newItemTitle2}
                            onChange={handleNewItemTitleChange2}
                        />
                    </div>
                    <button className="btnSave2"  >حفظ</button>
                </div>
                <div className='btnAdd'>
                <button className="btnadd"  >اضافة بند</button>
                </div>
                </div>
               
            
            <div className='btn'>
                <button className="btnchange"  ><div ><img src={change} alt="Change" /></div><div className='icon-model'>تعديل اسم النموذج</div></button>
                <button className="btnrep" ><div ><img src={rep} alt="Rep" /></div><div className='icon-model'>تكرير النموذج</div></button>
                <button className="btndel" > <div ><img src={Delete} alt="Delete" /></div><div className='icon-model'>حذف النموذج</div></button>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Model2;