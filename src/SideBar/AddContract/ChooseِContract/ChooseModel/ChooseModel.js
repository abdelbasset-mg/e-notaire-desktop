import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { NavLink, createBrowserRouter } from "react-router-dom";

import direction from "../../../../icons/direction.svg";

import "../../../Models/Model/Model2/Model2.css";
import AddContract from "../../AddContract";
import ChooseContract from "../ChooseContract";
import "./ChooseModel.css";
import SideBar from "../../../../SideBar";
import { useDispatch } from "react-redux";
// import { addContract } from "../../../../store/contractsSlice";
import { addContract } from "../../../../store/reducers/contract.reducers";
import axios from "axios";
import toast from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/ تحرير عقد",
    element: <AddContract />,
  },
  {
    path: "/تحرير عقد/:contract",
    element: <ChooseContract />,
  },
]);

function ChooseModel() {
  const { contract, model } = useParams();
  const [clientName, setClientName] = useState("");
  const [idClient, setIdClient] = useState("");
  const [clientBirth, setClientBirth] = useState("");
  const [cote, setCote] = useState("");
  const [clientPlace, setClientPlace] = useState("");
  const [address, setAddress] = useState("");
  const [nameFather, setNameFather] = useState("");
  const [nameMother, setNameMother] = useState("");
  const [lastNameMother, setLastNameMother] = useState("");
  const [phone, setPhone] = useState("");
  const [sexe, setSexe] = useState("");





  const onSubmit = async (event) =>{
    event.preventDefault();
    try{
    const response = await axios.post("http://localhost:5000/contracts", {
      clientName:clientName,
      idClient:idClient,
      clientBirth:clientBirth,
      clientPlace:clientPlace,
      address:address,
      nameFather:nameFather,
      nameMother:nameMother,
      lastNameMother:lastNameMother,
      phone:phone,
      cote:cote,
      sexe:sexe,
      contractNature:contract,
      model:model
      
    })
   
    toast.success("تم اضافة العقد بنجاح")
}catch(error){
    console.error("add failed",error)
    toast.error("الرجاء ادخال جميع المعلومات")

}
}


  return (
    <>
      <form onSubmit={onSubmit}  className="flex flex-row-reverse h-[100%]">
        <div className="w-[13%]">
          <SideBar />
        </div>
        <div dir="rtl" className="w-[87%] flex flex-col overflow-y-scroll">
          <div className="title" dir="ltr">
            <div className="title-1">تحرير عقد</div>
          </div>
          <div>
            <div className="content">
              <Link className="soustitle" to="/تحرير عقد">
                <div>قائمة العقود</div>
              </Link>
              <div className="path">
                <img src={direction} alt="Direction" />
              </div>
              <Link to={`/تحرير عقد/${contract}`} className="lien">
                <div>{contract}</div>
              </Link>
              <div className="path">
                <img src={direction} alt="Direction" />
              </div>
              <div className="lien">{model}</div>
            </div>
          </div>

          <div className="flex flex-row mt-[4%] mr-[2%]" dir="rtl">
            <div className="info-contr">
              <form onSubmit={onSubmit}>
                <div className="input-contr">
                  <label className="label-3" for="seller-1">
                    {" "}
                    الاسم الكامل للزبون
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="seller-1"
                    id="seller-1"
                    placeholder="طرف"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  ></input>
                </div>
            
                <div className="input-contr">
                  <label className="label-3" for="id-buyer">
                     رقم تعريف الزبون 
                  </label>
                  <input
                    className="input-contr-1"
                    type="number"
                    name="id-buyer"
                    id="id-buyer"
                    value={idClient}
                    onChange={(e) => setIdClient(e.target.value)}
                    placeholder="رقم"
                  ></input>
                </div>
             
                <div className="input-contr">
                  <label className="label-3" for="birth">
                    مولد الزبون
                  </label>
                  <input
                    className="input-contr-1"
                    type="date"
                    name="birth"
                    id="birth"
                    value={clientBirth}
                    onChange={(e) => setClientBirth(e.target.value)}
                    placeholder="طرف"
                  ></input>
                </div>

                <div className="input-contr">
                  <label className="label-3" for="place">
                    مكان ميلاد الزبون
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="place"
                    id="place"
                    value={clientPlace}
                    onChange={(e) => setClientPlace(e.target.value)}
                    placeholder="طرف"
                  ></input>
                </div>

                <div className="input-contr">
                  <label className="label-3" for="sexe">
                    جنس الزبون
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="sexe"
                    id="sexe"
                    value={sexe}
                    onChange={(e) => setSexe(e.target.value)}
                    placeholder="طرف"
                  ></input>
                </div>


                
                <div className="input-contr">
                  <label className="label-3" for="address-1">
                    {" "}
                    العنوان 
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="address-1"
                    id="address-1"
                    placeholder="طرف"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>

                <div className="input-contr">
                  <label className="label-3" for="father-1">
                    {" "}
                    اسم الأب
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="father-1"
                    id="father-1"
                    placeholder="طرف"
                    value={nameFather}
                    onChange={(e) => setNameFather(e.target.value)}
                  ></input>
                </div>


                <div className="input-contr">
                  <label className="label-3" for="mother-1">
                    {" "}
                    اسم الأم
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="mother-1"
                    id="mother-1"
                    placeholder="طرف"
                    value={nameMother}
                    onChange={(e) => setNameMother(e.target.value)}
                  ></input>
                </div>


                <div className="input-contr">
                  <label className="label-3" for="last-1">
                    {" "}
                    لقب الأم
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="last-1"
                    id="last-1"
                    placeholder="طرف"
                    value={lastNameMother}
                    onChange={(e) => setLastNameMother(e.target.value)}
                  ></input>
                </div>

                <div className="input-contr">
                  <label className="label-3" for="phone">
                    رقم الهاتف
                  </label>
                  <input
                    className="input-contr-1"
                    type="number"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="رقم"
                  ></input>
                </div>
    
                <div className="input-contr">
                  <label className="label-3" for="cote">
                    عدد الأطراف
                  </label>
                  <input
                    className="input-contr-1"
                    type="number"
                    name="cote"
                    id="cote"
                    value={cote}
                    onChange={(e) => setCote(e.target.value)}
                    placeholder="رقم"
                  ></input>
                </div>
                
              </form>
            </div>

            <div className="informations-contr ">
              <div className="informations-contr-1 flex flex-col">
                <div className="mt-4 mr-4 text-[#284A68] font-bold ">
                  معلومات مستوردة
                </div>
                <div>
                  <div className="Pass flex flex-col">
                    <div className="flex flex-row ">
                      <input
                        className="input-info-contr"
                        type="text"
                        placeholder="152564865210"
                      ></input>
                    </div>
                  </div>
                  <div className="Pass flex flex-col">
                    <div className="flex flex-row ">
                      <input
                        className="input-info-contr"
                        type="text"
                        placeholder="الاسم و اللقب"
                      ></input>
                    </div>{" "}
                  </div>
                  <div className="Pass flex flex-col">
                    <div className="flex flex-row ">
                      <input
                        className="input-info-contr"
                        type="text"
                        placeholder="25 14 84 34"
                      ></input>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="save-info-contr ">
                
              </div>
              <button
                  type="submit"
                  className="save-1 mt-[16%] bg-[#284A68] text-white"
                >
                  حفظ
                </button>
              <div className="download">
                
                <button className="down mt-[4%] bg-[#284A68] text-white">
                  {" "}
                  تحميل PDF{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ChooseModel;