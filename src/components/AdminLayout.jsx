import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout(props) {
    return (
        <>
            <h1>Admin layout</h1>
            <Outlet />
        </>
    );
}

export default AdminLayout;
