import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import {AboutPage} from "./pages/AboutPage"
import { ContactUsPage } from "./pages/ContactUsPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/contact-us",
    element: <ContactUsPage/>
  }
])

function App(){
  return(
    <RouterProvider router={router}/>
  )
}

export default App