import React from "react";
import Home from "./pages/Home";
import Layout from "./Layout"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout/>,
      
      children:[
        {
          path:"/",
          element: <Home/>,
        },
       
      ]
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
