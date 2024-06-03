import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import triangle from '../../../icons/triangle.svg';
import direction from '../../../icons/direction.svg';
import './Model.css';
import Add from '../ButtonAdd/ButtonAdd';
import { useConstants } from '../Model/typemodel';
import SideBar from '../../../SideBar';
import supp from "../../../icons/supp.svg";
import update from "../../../icons/pencil.svg"
import { useEffect } from 'react';
import axios from 'axios';

function Model() {
    const [readTemplate,setReadTemplate]=useState([]);
    const [openModel, setOpenModel] = useState(false);
    const { setResult, Result, inputTable } = useConstants();
    const { model } = useParams();
    console.log(model)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/template-list/${model}`);
                setReadTemplate(response.data.files)
               
            } catch (error) {
                console.error('Error fetching template data:', error);
            }
        };

        fetchData();
    }, []);
   

    return (
        <>
        <div className='flex flex-row-reverse h-[100%]'>
        <div className='w-[13%]'>
            <SideBar />
        </div>
        <div className='w-[87%]'>
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
                    <Add model={model} open={openModel} onClose={() => setOpenModel(false)} />
                </div>
            </div>
            <div className='contractContainer'>
            <div className='flex justify-center text-center w-[100%]'>
                <div className='titles'>
                    <div className='ti'><div className='t2 '>رقم النموذج</div><div className='triangle'><img src={triangle} alt="triangle" /></div></div>
                    <div className='ti ml-[9%] '><div className='t2 '>اسم النموذج</div><div className='triangle'><img src={triangle} alt="triangle" /></div></div>
                    <div className='ti ml-[8%]'><div className='t2 '>عدد البنود </div><div className='triangle'><img src={triangle} alt="triangle" /></div></div>
                </div>
            </div>
           
            <div className='scrollbar' dir='rtl'>
                {
                    readTemplate.filter(files => files.includes(Result))
                        .map((data, index) => {
                            return(
                                <>
                                <div className='flex '>
                            <Link
                                dir='ltr'
                                onClick={() => setResult(data)} 
                                to={`/نماذج العقود/${model}/${data}`}

                                className='line-contract w-[89%] hover:bg-[#FFF5DE]'
                            >
                                <div className='numberOfContract'>{index}</div>
                                <div className='natureOfContract'>{data}</div>
                                <div className='numberOfModels'><div className='models'>{0}</div></div>
                            </Link>
                            <button  className='h-max mt-[1%] mr-[0.5%] '><img src={update} className='w-[28px]  '   /></button>
                            <button  className='mr-[1%] h-max mt-[1%]'><img src={supp} className='w-[30px] '  /></button>
                            </div>
                            </>
                        )
                }
            )
        }
            </div> </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Model;