import { createBrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import App from "./App";
import MovingSkills from "./components/MovingSkills";
import Events from "./components/Events";

const router = [
    {
        element: <Skills />,
        path: "/skills",
    },

    {
        element: <App />,
        path: "/",
    },
    {
        element: <App />,
        path: "/portfolio",
    },
    {
        element: <MovingSkills />,
        path: "/tools",
    },
    {
        element: <Events />,
        path: "/events",
    },
];

export const rootRouter = createBrowserRouter(router);
