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


function Model2() {
    const { model, Result } = useParams();
    const [openModel, setOpenModel] = useState(false);
    const [newItems, setNewItems] = useState([]);
    const [showSaveButtons, setShowSaveButtons] = useState([]);
    const [editingItemIndex, setEditingItemIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false); 
    const {inputTermText,inputTermTitle,setInputTermText,setInputTermTitle}= useConstants_1();

    useEffect(() => {
        handleAddNewItem();
    }, []); 
    //---------------------------//
    //put term title in a variable
    const handleChangeTermTitle = (event) => {
        setInputTermTitle(event.target.value);
        console.log(inputTermTitle);
    }

    //put term text in a var
    const handleChangeTermText = (event) => {
        setInputTermText(event.target.value);
        console.log(inputTermText);


    }




    //-----------------------------//

    const handleNewItemTitleChange = (event, index) => {
        const updatedItems = [...newItems];
        updatedItems[index].title1 = event.target.value;
        setNewItems(updatedItems);
    }

    const handleNewItemContentChange = (event, index) => {
        const updatedItems = [...newItems];
        updatedItems[index].title2 = event.target.value;
        setNewItems(updatedItems);
    }

    const handleAddNewItem = () => {
        setNewItems([...newItems, { title1: "", title2: "" }]);
        setShowSaveButtons([...showSaveButtons, true]); 
    }

    const handleSaveButtonClick = (index) => {
        const updatedButtons = [...showSaveButtons];
        updatedButtons[index] = false; 
        setShowSaveButtons(updatedButtons);
        setIsEditing(false); 
    }

    const handleEditButtonClick = (index) => {
        setEditingItemIndex(index);
        setIsEditing(true); 
    }

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
                        <div key={index} className='cln-model'>
                            <div className='item'>
                                {(showSaveButtons[index] || (isEditing && editingItemIndex === index)) && (
                                    <div className='newitem-title2'>عنوان البند</div>
                                )}
                                <input
                                    className='item-text1 focus:outline-none'
                                    type="text"
                                    placeholder="عنوان البند"
                                    value={item.title1}
                                    onChange={(event) => {handleNewItemTitleChange(event, index);handleChangeTermTitle(event)}}
                                    disabled={!showSaveButtons[index] && !isEditing}
                                />
                            </div>
                            <div className='content2'>
                                <div className='Item'>
                                    {(showSaveButtons[index] || (isEditing && editingItemIndex === index)) && (
                                        <div className='newitem-title'>
                                            محتوى البند
                                            <button className='button2'><img src={vector1} alt="Vector1" />تحديد المتغير</button>
                                            <button className='button3' onClick={() => setOpenModel(true)}><img src={vector} alt="Vector" />توليد القائمة</button>
                                            <Add2 open={openModel} onClose={() => setOpenModel(false)}></Add2>
                                        </div>
                                    )}
                                </div>
                                <textarea
                                    className='item-text2 focus:outline-none'
                                    type="text"
                                    placeholder='محتوى البند'
                                    value={item.title2}
                                    onChange={(event) => {handleNewItemContentChange(event, index);handleChangeTermText(event)}}
                                    disabled={!showSaveButtons[index] && !isEditing}
                                />
                            </div>
                            <div className='alternative'>
                                {(showSaveButtons[index] || (isEditing && editingItemIndex === index)) ? (
                                    <button className="btnSave2" onClick={() => handleSaveButtonClick(index)}>حفظ</button>
                                ) : (
                                    <>   <div className='alternative2'>
                                        <input className="checkbox-input focus:outline-none hover:outline-none" type="checkbox" />
                                        <label className="button-alternative ">الظهور في المستخرج</label>
                                        <div className='buttonc' onClick={() => handleEditButtonClick(index)}> تعديل</div></div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='btnAdd'>
                    <button className="btnadd" onClick={handleAddNewItem}>اضافة بند</button>
                </div>
            </div>
            <div className='btn w-[30%]' >
                <button className="btnchange"><div><img src={change} alt="Change" /></div><div className='icon-model'>تعديل اسم النموذج</div></button>
                <button className="btnrep"><div><img src={rep} alt="Rep" /></div><div className='icon-model'>تكرير النموذج</div></button>
                <button className="btndel"><div><img src={Delete} alt="Delete" /></div><div className='icon-model'>حذف النموذج</div></button>
            </div>
            </div>
        
        
           
        </div></div>
    );
}

export default Model2;