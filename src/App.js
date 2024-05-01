import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import ControlBoard from "./SideBar/ControlBoard/ControlBoard";
import Statistics from "./SideBar/Statistic/Statistics";
import AddContract from "./SideBar/AddContract/AddContract";
import Models from "./SideBar/Models/Models";
import ArchiveClients from "./SideBar/ArchiveClients/ArchiveClients";
import ArchiveFiles from "./SideBar/ArchiveFiles/ArchiveFiles";
import Settings from "./SideBar/Setting/Setting";
import React from "react";
import Model from "./SideBar/Models/Model/Model";
import Model2 from "./SideBar/Models/Model/Model2/Model2";
import ChooseContract from "./SideBar/AddContract/ChooseِContract/ChooseContract";
import ChooseModel from "./SideBar/AddContract/ChooseِContract/ChooseModel/ChooseModel";
import Login from "./Login-Sign/Login";
import Sign from "./Login-Sign/Sign";
import toast, { Toaster } from "react-hot-toast";

//---------CREATE COMPONENTS------//

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ControlBoard />,
      },
      {
        path: "/احصائيات",
        element: <Statistics />,
      },
      {
        path: "/تحرير عقد",
        element: <AddContract />,
      },
      {
        path: "/نماذج العقود",
        element: <Models />,
      },
      {
        path: "/ارشيف الزبائن",
        element: <ArchiveClients />,
      },
      {
        path: "/ارشيف الملفات",
        element: <ArchiveFiles />,
      },

      {
        path: "/اعدادات",
        element: <Settings />,
      },
      {
        path: "/نماذج العقود/:model",
        element: <Model />,
      },

      {
        path: "/نماذج العقود/:model/:Result",
        element: <Model2 />,
      },
      {
        path: "/تحرير عقد/:contract",
        element: <ChooseContract />,
      },

      {
        path: "/تحرير عقد/:contract/:model",
        element: <ChooseModel />,
      },
      { path: "/Login", element: <Login /> },
      {
        path: "/Sign",
        element: <Sign />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Toaster />
      <div style={{ height: "100%" }} className="container">
        <div style={{ height: "100%" }} className="component relative ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
function App() {
  return <RouterProvider router={router} />;
}
export default App;
