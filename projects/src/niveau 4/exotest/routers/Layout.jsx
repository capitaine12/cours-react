import { Outlet } from "react-router-dom"; 
import './style.css'
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Ici s'afficheront les sous-pages */}
      <Footer />
    </div>
  );
}


