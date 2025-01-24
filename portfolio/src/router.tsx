import { createBrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import App from "./App";
import MovingSkills from "./components/MovingSkills";

 const router=[{
    element:<Skills/>,
    path:"/skills"
 },

 {
    element:<App/>,
    path:"/",
 },
 {
    element:<MovingSkills/>,
    path:"/tools",
 }
]

 export const rootRouter=createBrowserRouter(router)

  