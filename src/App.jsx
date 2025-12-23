import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Components/AppLayout"
import { Home } from "./Pages/Home"
import { ErrorPage } from "./Pages/ErrorPage"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Country } from "./Pages/Country"
import { Getcountryind } from "./Pages/Getcountryind";
import "./App.css"

const router= createBrowserRouter([
 {
  path:"/",
  element:<AppLayout/>,
  errorElement:<ErrorPage/>,
  children:[
     {
  path:"/",
  element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"Country",
    element:<Country/>
  },
  {
    path:"Country/:id",
    element:<Getcountryind/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  ]
 }



])
export const  App=()=> {  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}


