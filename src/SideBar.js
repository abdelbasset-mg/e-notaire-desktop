import {
      Link,
      NavLink,
      Outlet,
      RouterProvider,
      createBrowserRouter,
    } from "react-router-dom";
    import "./App.css";
    import "./index.css";
    import logoE_N from "./icons/logo.svg";
    import logoC from "./icons/control.svg";
    import logoS from "./icons/statistics.svg";
    import logoContr from "./icons/contract.svg";
    import logoModel from "./icons/model.svg";
    import logoCli from "./icons/client.svg";
    import logoFile from "./icons/file.svg";
    import logoSett from "./icons/Setting.svg";
    import logoE from "./icons/exit.svg";
    import logoE_N2 from "./icons/logo2.svg";
    import React from "react";
    import { useState } from "react";
    import Login from "./Login-Sign/Login";
    import { useConstants } from "./SideBar/ControlBoard/Constants/Constants";
    
    const SideBar = ({user}) => {
      const { admin } = useConstants();
    
      return (
        <>
          <div className="SideBar w-[100%]">
            <div className="logoE-N2 w-[100% flex justify-center text-center]">
              <img src={logoE_N2} className="logo2 w-[40%] pt-[6%]" alt="logo" />
            </div>
    
            <div className="logoE-N w-[100%] flex justify-center text-center">
              <div className="w-[80%] logoe">
                <img src={logoE_N} className="logo" alt="logo" />
              </div>
            </div>
    
            <div className="links">
              <div className="link ">
                <div className="l-ink">
                  <NavLink className="navlink" to="/dashboard">
                    <div className="control">لوحة التحكم</div>
                    <div className="icon-1 pl-[5%] ">
                      <img src={logoC} className="icon i1 " />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="link ">
                <div className="l-ink">
                  <NavLink className="navlink" to="/احصائيات">
                    <div className="control"> الاحصائيات</div>
                    <div className="icon-1  ">
                      <img src={logoS} className="icon i2" />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="link ">
                <div className="l-ink">
                  <NavLink className="navlink" to="/تحرير عقد">
                    <div className="control"> تحرير عقد</div>
                    <div className="icon-1  ">
                      <img src={logoContr} className="icon i3" />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="link ">
                <div className="l-ink">
                  <NavLink className="navlink" to="/نماذج العقود">
                    <div className="control"> نماذج العقود</div>
                    <div className="icon-1 ">
                      {" "}
                      <img src={logoModel} className="icon i4" />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="link ">
                <div className="l-ink">
                  <NavLink className="navlink" to="/ارشيف الزبائن">
                    {" "}
                    <div className="control"> أرشيف الزبائن</div>
                    <div className="icon-1 ">
                      <img src={logoCli} className="icon i5" />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="link ">
                <div className="l-ink">
                  <NavLink className="navlink" to="/ارشيف الملفات">
                    <div className="control"> أرشيف الملفات</div>
                    <div className="icon-1 pl-[4%] ">
                      <img src={logoFile} className="icon i6" />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="link ">
                <div className="l-ink">
                  <NavLink className="navlink" to="/اعدادات">
                    <div className="control"> الإعدادات</div>
                    <div className="icon-1 ">
                      <img src={logoSett} className="icon i7" />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
    
            <div className="foot">
              <div className="admin">{admin}</div>
              <div className="admin-name"> مكتب الاستاذ {user}</div>
              <Link to="/" className="exit">
                <button className="exit-Button">
                  <img src={logoE} className="logoC" />
                </button>
              </Link>
            </div>
          </div>
        </>
      );
    };
    export default SideBar;