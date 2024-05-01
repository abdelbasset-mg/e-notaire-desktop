import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import triangle from "../../../icons/triangle.svg";
import direction from "../../../icons/direction.svg";
import "../../Models/Model/Model.css";
import { useConstants } from "./Constants";
import SideBar from "../../../SideBar";

function ChooseModel() {
  const [openModel, setOpenModel] = useState(false);
  const { setResult, Result, inputTable, setModel, model } = useConstants();
  const { contract } = useParams();

  return (
    <>
      <div className="flex flex-row-reverse h-[100%]">
        <div className="w-[13%]">
          <SideBar />
        </div>
        <div className="w-[87%] flex flex-col">
          <div>
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
                <div className="lien">{contract}</div>
              </div>
            </div>
            <div className="search-addcontract" dir="rtl">
              <div className="search">
                <input
                  className="text"
                  type="search"
                  name="searchBar"
                  id="searchBar"
                  placeholder="البحث"
                  onChange={(e) => setResult(e.target.value)}
                />
              </div>
            </div>
            <div className="contractContainer">
              <div className="flex justify-center text-center w-[100%]">
                <div className="titles">
                  <div className="t1">
                    <div className="t2 t2-1">رقم النموذج</div>
                    <div className="triangle">
                      <img src={triangle} alt="triangle" />
                    </div>
                  </div>
                  <div className="t1 ml-[9%]">
                    <div className="t2 t2-2">اسم النموذج</div>
                    <div className="triangle">
                      <img src={triangle} alt="triangle" />
                    </div>
                  </div>
                  <div className="t1 ml-[8%]">
                    <div className="t2 t2-3">عدد البنود </div>
                    <div className="triangle">
                      <img src={triangle} alt="triangle" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="scrollbar" dir="rtl">
                {inputTable
                  .filter((model) => model.natureOfModel.includes(Result))
                  .map((data, index) => (
                    <Link
                      dir="ltr"
                      onClick={() => setModel(data.natureOfModel)}
                      to={`/تحرير عقد/${contract}/${data.natureOfModel}`}
                      className="line-contract hover:bg-[#FFF5DE]"
                    >
                      <div className="numberOfContract">{data.number}</div>
                      <div className="natureOfContract">
                        {data.natureOfModel}
                      </div>
                      <div className="numberOfModels">
                        <div className="models">{data.numberOfModel}</div>
                      </div>
                    </Link>
                  ))}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseModel;
