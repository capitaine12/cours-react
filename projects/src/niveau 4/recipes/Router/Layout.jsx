import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/Layout.module.css'

export default function Layout() {
    
    return (
        <div className={style.container}>
            <Header />
            <main className="mymain">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}