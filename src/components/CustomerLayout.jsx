import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function CustomerLayout(props) {
    return (
        <>
            <Header />
            <div style={{ minHeight: "80vh" }}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default CustomerLayout;
