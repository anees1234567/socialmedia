import { createBrowserRouter } from "react-router-dom";
import { RouterListTwo, RouterListone } from "./Mainrouterlist";
import HomeLayoutContainer from "../layouts/HomeLayoutContainer";
import SecondoryLayoutContainer from "../layouts/SecondoryLayoutContainer";
import Friendpage from "../Components/SecondoryLayoutComponents/Friends/Friendpage";





export const MainRouter = createBrowserRouter([
  {
    path:RouterListone.home ,
    element: <HomeLayoutContainer />,
 
  },
  {
    path:RouterListTwo.root,
    element: <SecondoryLayoutContainer />,
    children:[
        {
          path:"friends",
          element:<Friendpage/>
        }
    ]
  }


])