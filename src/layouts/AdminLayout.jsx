import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import "../styles/admin.scss";

const AdminLayout = () => {

    const [sidebarOpen,setSidebarOpen]=useState(false);

    return (

        <div className="admin-layout">

            <Sidebar
                open={sidebarOpen}
                setOpen={setSidebarOpen}
            />

            {sidebarOpen && (
                <div
                    className="sidebar-backdrop"
                    onClick={()=>setSidebarOpen(false)}
                />
            )}

            <div className="admin-main">

                <Topbar
                    setSidebarOpen={setSidebarOpen}
                />

                <main className="admin-content">
                    <Outlet/>
                </main>

            </div>

        </div>

    );

};

export default AdminLayout;