import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "./pages/welcome/WelcomePage.jsx";
import { RegisterPage } from "./pages/authentication/RegisterPage.jsx";
import { LoginPage } from "./pages/authentication/LoginPage.jsx";
import DashboardPage from "./pages/dashboard-and-profile/DashboardPage.jsx";
import ViewPage from "./pages/viewPages/ViewPage.jsx";
import Requests_listView from "./pages/admin_view/Requests_listView.jsx";
import VolunteerRequests from "./pages/admin_view/VolunteerRequests.jsx";
import DonationsRequests from "./pages/admin_view/DonationsRequests.jsx";
import ViewOrganization from "./pages/admin_view/ViewOrganization.jsx";
import ViewDonors from "./pages/admin_view/ViewDonors.jsx";

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
            path : "/admin/registration-requests",
            element : <Requests_listView />
        },
        {
            path : "/admin/volounteer-requests",
            element: <VolunteerRequests />
        },
        {
            path : "/admin/donation-requests",
            element : <DonationsRequests />
        },
        {
            path: "/admin/view-organizations",
            element: <ViewOrganization />
        }
        ,
        {
            path: "/admin/view-donors",
            element: <ViewDonors />

        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;