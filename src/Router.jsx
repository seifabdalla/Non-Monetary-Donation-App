import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "./pages/welcome/WelcomePage.jsx";
import { RegisterPage } from "./pages/authentication/RegisterPage.jsx";
import { LoginPage } from "./pages/authentication/LoginPage.jsx";
import DashboardPage from "./pages/dashboard-and-profile/DashboardPage.jsx";
import ViewPage from "./pages/viewPages/ViewPage.jsx";
import Pending_Posts from "./pages/Organization/Pending_Posts.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <WelcomePage />
        },
        {
            path : "/register",
            element : <RegisterPage />
        },
        {
            path : "/login",
            element : <LoginPage />
        },
        {
            path : "/dashboard/:profileType/:userID",
            element : <DashboardPage />
        },
        {
            path : "/dashboard/:profileType/:userID/:viewType",
            element : <ViewPage />
        },
        {
            path: "/dashboard/:profileType/:userID/pending-posts",
            element: <Pending_Posts />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;