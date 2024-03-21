import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import triangle from '../../../icons/triangle.svg';
import direction from '../../../icons/direction.svg';
import './Model.css';
import Add from '../ButtonAdd/ButtonAdd';
import { useConstants } from '../Model/typemodel';

function Model() {
   
    const [openModel, setOpenModel] = useState(false);
    const { setResult, Result, inputTable } = useConstants();
    const { model } = useParams();

    return (
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
                    <div className="lien">{model}</div>
             

                </div>
            </div>
            <div className='search-addcontract' dir='rtl'>
                <div className='search'>
                    <input
                        className='text'
                        type="search"
                        name='searchBar'
                        id='searchBar'
                        placeholder='البحث'
                        onChange={e => setResult(e.target.value)}
                    />
                </div>
                <div className='addcontr'>
                    <button className='button1' onClick={() => setOpenModel(true)}>اضافة نموذج</button>
                    <Add open={openModel} onClose={() => setOpenModel(false)} />
                </div>
            </div>
            <div className='contractContainer'>
                <div className='titles'>
                    <div className='t1'><div className='t2 t2-1'>رقم النموذج</div><div className='triangle'><img src={triangle} alt="triangle" /></div></div>
                    <div className='t1 t1-2'><div className='t2 t2-2'>اسم النموذج</div><div className='triangle'><img src={triangle} alt="triangle" /></div></div>
                    <div className='t1'><div className='t2 t2-3'>عدد البنود </div><div className='triangle'><img src={triangle} alt="triangle" /></div></div>
                </div>
           
            <div className='scrollbar' dir='rtl'>
                {
                    inputTable
                        .filter(model => model.natureOfModel.includes(Result))
                        .map((data, index) => (
                            <Link
                                dir='ltr'
                                onClick={() => setResult(data.natureOfModel)} 
                                to={`/نماذج العقود/${model}/${data.natureOfModel}`}

                                className='line-contract hover:bg-[#FFF5DE]'
                            >
                                <div className='numberOfContract'>{data.number}</div>
                                <div className='natureOfContract'>{data.natureOfModel}</div>
                                <div className='numberOfModels'><div className='models'>{data.numberOfModel}</div></div>
                            </Link>
                        ))
                }
            </div> </div>
        </div>
    );
}

export default Model;