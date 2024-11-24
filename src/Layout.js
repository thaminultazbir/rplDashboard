import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Layout(){
    return (
        <div className="container">
            <div className="sidebar">
                <Header />
                <Navbar />
            </div>
            <div className="content-area-container">
                <Outlet />
            </div>
        </div>
    );
}