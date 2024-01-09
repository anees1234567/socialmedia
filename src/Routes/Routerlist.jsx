import { createBrowserRouter } from "react-router-dom";
import { RouterListTwo, RouterListone } from "./Mainrouterlist";
import HomeLayoutContainer from "../layouts/HomeLayoutContainer";
import SecondoryLayoutContainer from "../layouts/SecondoryLayoutContainer";
import Friendpage from "../Components/SecondoryLayoutComponents/Friends/Friendpage";
import Groupspage from "../Components/SecondoryLayoutComponents/Groups/Groupspage";
import Profilepage from "../Components/SecondoryLayoutComponents/Profile/Profilepage";
import Settings from "../Components/SecondoryLayoutComponents/Settings/Settings";
import Feedspage from "../Components/SecondoryLayoutComponents/Feeds/Feedspage";
import Inboxpage from "../Components/SecondoryLayoutComponents/inbox/Inboxpage";

export const MainRouter = createBrowserRouter([
  {
    path: RouterListone.home,
    element: <HomeLayoutContainer />,
  },
  {
    path: RouterListTwo.root,
    element: <SecondoryLayoutContainer />,
    children: [
      {
        path: RouterListTwo.Feeds,
        element: <Feedspage/>,
      },

      {
        path: RouterListTwo.inbox,
        element: <Inboxpage />,
      },



      {
        path: RouterListTwo.friends,
        element: <Friendpage />,
      },
      {
        path: RouterListTwo.group,
        element: <Groupspage />,
      },
      {
        path: RouterListTwo.profile,
        element: <Profilepage />,
      },
      {
        path: RouterListTwo.settings,
        element: <Settings />,
      },
    ],
  },
]);
