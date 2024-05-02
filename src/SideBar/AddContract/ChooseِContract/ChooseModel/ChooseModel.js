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
  const [seller, setSeller] = useState("");
  const [buyer, setBuyer] = useState("");
  const [idBuyer, setIdBuyer] = useState("");
  const [ragional, setRagional] = useState("");
  const [sellerBirth, setSellerBirth] = useState("");
  const [buyerBirth, setBuyerBirth] = useState("");
  const [rooms, setRooms] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    // sellerName, buyerName, idSeller, idBuyer, dateBirthSeller, dateBirthBuyer, numberOfRooms

    dispatch(
      addContract({
        sellerName: seller,
        buyerName: buyer,
        idSeller: idBuyer,
        idBuyer: ragional,
        dateBirthSeller: sellerBirth,
        dateBirthBuyer: buyerBirth,
        numberOfRooms: rooms,
      })
    );
  };

  return (
    <>
      <div className="flex flex-row-reverse h-[100%]">
        <div className="w-[13%]">
          <SideBar />
        </div>
        <div className="w-[87%] flex flex-col">
          <div className="title">
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
              <form>
                <div className="input-contr">
                  <label className="label-3" for="seller-1">
                    {" "}
                    البائع
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="seller-1"
                    id="seller-1"
                    placeholder="طرف"
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                  ></input>
                </div>
                <div className="input-contr">
                  <label className="label-3" for="buyer-1">
                    المشتري{" "}
                  </label>
                  <input
                    className="input-contr-1"
                    type="text"
                    name="buyer-1"
                    id="buyer-1"
                    value={buyer}
                    onChange={(e) => setBuyer(e.target.value)}
                    placeholder="طرف"
                  ></input>
                </div>
                <div className="input-contr">
                  <label className="label-3" for="id-buyer">
                    تعريف البائع
                  </label>
                  <input
                    className="input-contr-1"
                    type="number"
                    name="id-buyer"
                    id="id-buyer"
                    value={idBuyer}
                    onChange={(e) => setIdBuyer(e.target.value)}
                    placeholder="رقم"
                  ></input>
                </div>
                <div className="input-contr">
                  <label className="label-3" for="ragional">
                    {" "}
                    تعريف المشتري
                  </label>
                  <input
                    className="input-contr-1"
                    type="number"
                    name="ragional"
                    id="ragional"
                    value={ragional}
                    onChange={(e) => setRagional(e.target.value)}
                    placeholder="رقم"
                  ></input>
                </div>
                <div className="input-contr">
                  <label className="label-3" for="seller">
                    مولد البائع
                  </label>
                  <input
                    className="input-contr-1"
                    type="date"
                    name="seller"
                    id="seller"
                    value={sellerBirth}
                    onChange={(e) => setSellerBirth(e.target.value)}
                    placeholder="طرف"
                  ></input>
                </div>
                <div className="input-contr">
                  <label className="label-3" for="buyer">
                    مولد المشتري
                  </label>
                  <input
                    className="input-contr-1"
                    type="date"
                    name="buyer"
                    id="buyer"
                    value={buyerBirth}
                    onChange={(e) => setBuyerBirth(e.target.value)}
                  ></input>
                </div>
                <div className="input-contr">
                  <label className="label-3" for="rooms">
                    عدد الغرف
                  </label>
                  <input
                    className="input-contr-1"
                    type="number"
                    name="rooms"
                    id="rooms"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
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
                <button
                  onClick={handleSubmit}
                  className="save-1 mt-[16%] bg-[#284A68] text-white"
                >
                  حفظ
                </button>
              </div>
              <div className="download">
                <button className="down mt-[4%] bg-[#284A68] text-white">
                  {" "}
                  تحميل PDF{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseModel;