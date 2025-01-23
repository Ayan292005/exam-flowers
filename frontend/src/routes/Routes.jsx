import Add from "../pages/add";
import Details from "../pages/details";
import Favorites from "../pages/favorites";
import Flowers from "../pages/flowers";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import UserRoot from "../pages/UserRoot";

const Routes = [
  {
    path: "",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/flowers",
        element: <Flowers />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/products/:id",
        element: <Details />,
      }
    ],
  },
];

export default Routes