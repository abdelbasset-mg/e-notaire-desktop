import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import direction from '../../../../icons/direction.svg';
import vector from '../../../../icons/vector.svg';
import vector1 from '../../../../icons/vector1.svg';
import Delete from '../../../../icons/Delete.svg';
import change from '../../../../icons/change.svg';
import rep from '../../../../icons/rep.svg';
import Add2 from './Add2'; 
import SideBar from '../../../../SideBar';
import './Model2.css';
import { useConstants_1 } from './Constants/Constants';
import axios from 'axios';
import toast from 'react-hot-toast';


function Model2() {
    const { model, Result } = useParams();
    const [openModel, setOpenModel] = useState(false);
    const [newItems, setNewItems] = useState([{ title1: "", title2: "", editing: true }]);
    const [isEditing, setIsEditing] = useState(false); 
    const { inputTermText, inputTermTitle, setInputTermText, setInputTermTitle } = useConstants_1();

    // Function to handle form submission
    const onSubmit = async (event, index) => {
        event.preventDefault();
        const term = {
            templateName: Result,
            termTitle: newItems[index].title1,
            termText: newItems[index].title2,
            templateNature: model
        };
        try {
            const response = await axios.post("http://localhost:5000/save-term", term);
            toast.success("Term saved");
            const updatedItems = [...newItems];
            updatedItems[index].editing = false; // Disable editing after saving
            setNewItems(updatedItems);
        } catch (error) {
            console.log("Failed to save term: ", error);
            toast.error("Failed to save term");
        }
    };

    // Function to handle input change
    const handleInputChange = (event, index, field) => {
        const updatedItems = [...newItems];
        updatedItems[index][field] = event.target.value;
        setNewItems(updatedItems);
    };

    // Function to handle edit button click
    const handleEditButtonClick = (index) => {
        const updatedItems = [...newItems];
        updatedItems[index].editing = true; // Enable editing
        setNewItems(updatedItems);
    };

    return (
        <div className='flex flex-row-reverse h-[100%]'>
            <div className='w-[13%]'>
                <SideBar />
            </div>
            <div className='Cont ' dir='rtl'>
                <div className='title' dir='ltr'>
                    <div className='title-1'>نماذج العقود</div>
                </div>
                <div className="content" dir='ltr'>
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
                <div className='flex flex-row-reverse w-[100%]' dir='ltr'>
                    <div className='newitem w-[70%]' >
                        <div className='flex flex-col w-[100%]'>
                            {newItems.map((item, index) => (
                                <form key={index} className='cln-model'>
                                    <div className='item'>
                                        <div className='newitem-title2'>عنوان البند</div>
                                        <input
                                            className='item-text1 focus:outline-none'
                                            type="text"
                                            placeholder="عنوان البند"
                                            value={item.title1}
                                            onChange={(event) => handleInputChange(event, index, 'title1')}
                                            disabled={!item.editing}
                                        />
                                    </div>
                                    <div className='content2'>
                                        <div className='newitem-title'>
                                            محتوى البند
                                            <button className='button2'><img src={vector1} alt="Vector1" />تحديد المتغير</button>
                                            <button className='button3' onClick={() => setOpenModel(true)}><img src={vector} alt="Vector" />توليد القائمة</button>
                                            <Add2 open={openModel} onClose={() => setOpenModel(false)}></Add2>
                                        </div>
                                        <textarea
                                            className='item-text2 focus:outline-none'
                                            type="text"
                                            placeholder='محتوى البند'
                                            value={item.title2}
                                            onChange={(event) => handleInputChange(event, index, 'title2')}
                                            disabled={!item.editing}
                                        />
                                    </div>
                                    <div className='alternative'>
                                        {item.editing ? (
                                            <button className="btnSave2" type='submit' onClick={(event) => onSubmit(event, index)}>حفظ</button>
                                        ) : (
                                            <div className='alternative2'>
                                                <input className="checkbox-input focus:outline-none hover:outline-none" type="checkbox" />
                                                <label className="button-alternative ">الظهور في المستخرج</label>
                                                <div className='buttonc' onClick={() => handleEditButtonClick(index)}> تعديل</div>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            ))}
                        </div>
                        <div className='btnAdd'>
                            <button className="btnadd" onClick={() => setNewItems([...newItems, { title1: "", title2: "", editing: true }])}>اضافة بند</button>
                        </div>
                    </div>
                    <div className='btn w-[30%]' >
                        <button className="btnchange"><div><img src={change} alt="Change" /></div><div className='icon-model'>تعديل اسم النموذج</div></button>
                        <button className="btnrep"><div><img src={rep} alt="Rep" /></div><div className='icon-model'>تكرير النموذج</div></button>
                        <button className="btndel"><div><img src={Delete} alt="Delete" /></div><div className='icon-model'>حذف النموذج</div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Model2;