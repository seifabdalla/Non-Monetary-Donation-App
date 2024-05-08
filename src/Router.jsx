import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "./pages/welcome/WelcomePage.jsx";
import { RegisterPage } from "./pages/authentication/RegisterPage.jsx";
import { LoginPage } from "./pages/authentication/LoginPage.jsx";
import DashboardPage from "./pages/dashboard-and-profile/DashboardPage.jsx";
import DonorViewRequests from "./pages/viewPages/DonorViewRequests.jsx";
import RequestPage from "./pages/viewPages/RequestPage.jsx";

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
            path : "/donor/view-requests/:userID",
            element : <DonorViewRequests />
        },
        {
            path : "/donor/request-details/:userID",
            element : <RequestPage />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;