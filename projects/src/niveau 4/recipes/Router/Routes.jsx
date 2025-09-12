import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Accueil from '../pages/Accueil'
import About from "../pages/About";
import Contact from "../pages/Contact";
import Retail from "../pages/Retail";
import NotFound from "../pages/errors/NotFound";
import Errorpage from "../pages/errors/Errorpage";
import { fetchRecipeDetail, fetchRecipes } from "../services/Services";



export const Route = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [

            { index: true, element: <Accueil />, loader: fetchRecipes},

            { path : "about", element : <About />},

            { path : "contact", element: <Contact />},

            { path : "retail/:id", element: <Retail/>, loader: fetchRecipeDetail},

            { path: '*', element: <NotFound/>, errorElement: <Errorpage />}
        ]
    }

])