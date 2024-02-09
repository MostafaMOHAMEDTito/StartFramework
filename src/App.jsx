import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import StartFramwork from "./component/START FRAMEWORK/StartFramwork";
import About from "./component/About/About";
import Portfolio from "./component/PortFolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Children from "./component/Children/Children";

const myRouter = createHashRouter([
  {path:'*',element: <h1>4 0 4 Not Found</h1>},
  {
    path: "/",
    element: <StartFramwork />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/StartFramWork", element: <Home /> },
      {
        path: "About",  
        element: <About />,
      },

      { path: "Portfolio", element: <Portfolio /> ,
    children:[
      {path:'children', element:<Children/>}
    ]},
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
