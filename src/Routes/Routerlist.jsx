import { createBrowserRouter } from "react-router-dom";
import { RouterListTwo, RouterListone } from "./Mainrouterlist";





export const mainRouter = createBrowserRouter([
  {
    path:RouterListone.home ,
    element: <HomeLayoutContainer />,
 
  }


])