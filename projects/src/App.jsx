//import Container from "./cards/Container"

import { RouterProvider } from "react-router-dom";
import { Route } from "./niveau 4/recipes/Router/Routes";


function App() {
  

  return (
    <>
   {/*  <Container /> */}
   {/* <Dashboard /> */}
          
  <RouterProvider router={Route} />
    </>
  )
}

export default App
