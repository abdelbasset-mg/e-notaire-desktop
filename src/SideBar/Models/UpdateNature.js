import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateNature = ({ open, onClose, data }) => {
  const [nature, setNature] = useState("");

  const changeNature = (event) => {
    setNature(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put("http://localhost:5000/update-nature", {
        oldTemplateNature: data,
        newTemplateNature: nature,
      });
      toast.success(response.data.message);
      onClose();
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-50 flex justify-center items-center ">
      <div className="modalcontainer bg-white p-4 rounded-lg pl-8 pr-10">
        <form onSubmit={onSubmit}>
          <div className="title-modal pb-5 pt-4">تغيير اسم طبيعة العقد </div>
          <div className="enterNameContract">
            <div className="name ml-1 font-bold  text-slate-700">اسم الطبيعة</div>
            <input
              name="natureOfContract"
              className="natureContr focus:outline-none "
              type="text"
              placeholder="طبيعة العقد"
              onChange={changeNature}
            ></input>
          </div>
          <div className="btnContainer">
            <button className="btnCancel" onClick={onClose}>
              اغلاق
            </button>
            <button type="submit" className="btnSave">
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNature;
