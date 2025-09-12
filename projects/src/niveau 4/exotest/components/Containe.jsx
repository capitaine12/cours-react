import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Contact from "../pages/Contact"
import ColorThiefExample from "./Colorthief"
import Articles from "./Articles"
import ArticleDetail from "./ArticleDetail"

export default function Containe() {
 
    return (
        <>
        <BrowserRouter >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/color" element={<ColorThiefExample />} />
            <Route path="/article" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
          </BrowserRouter>
        </>
    )
}