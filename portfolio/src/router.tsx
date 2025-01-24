import { createBrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import App from "./App";

 const router=[{
    element:<Skills/>,
    path:"/skills"
 },

 {
    element:<App/>,
    path:"/",
 }
]

 export const rootRouter=createBrowserRouter(router)

  