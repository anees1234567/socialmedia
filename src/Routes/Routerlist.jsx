import { createBrowserRouter } from "react-router-dom";
import { RouterListTwo, RouterListone } from "./Mainrouterlist";
import HomeLayoutContainer from "../layouts/HomeLayoutContainer";
import SecondoryLayoutContainer from "../layouts/SecondoryLayoutContainer";
import Friendpage from "../Components/SecondoryLayoutComponents/Friends/Friendpage";
import Feedspage from "../Components/SecondoryLayoutComponents/Feeds/Feedspage"
import Profilepage from "../Components/SecondoryLayoutComponents/profile/Profilepage";
import Groupspage from "../Components/SecondoryLayoutComponents/Groups/Groupspage";
import Inboxpage from "../Components/SecondoryLayoutComponents/inbox/Inboxpage"
import Setttings from "../Components/SecondoryLayoutComponents/Settings/Settings"





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
        },
        {
          path:"feeds",
          element:<Feedspage/>
        },
        {
          path:"inbox",
          element:<Inboxpage/>
        },
        {
          path:"groups",
          element:<Groupspage/>
        },
        {
          path:"settings",
          element:<Setttings/>
        },
        {
          path:"profile",
          element:<Profilepage/>
        },


    ]
  }


])