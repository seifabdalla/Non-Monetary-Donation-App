import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "./pages/welcome/WelcomePage.jsx";
import { RegisterPage } from "./pages/authentication/RegisterPage.jsx";
import { LoginPage } from "./pages/authentication/LoginPage.jsx";
import DashboardPage from "./pages/dashboard-and-profile/DashboardPage.jsx";
import DonorViewRequests from "./pages/viewPages/DonorViewRequests.jsx";
import RequestPage from "./pages/viewPages/RequestPage.jsx";
import ViewOrganizations from "./pages/viewPages/ViewOrganizations.jsx";
import Requests_listView from "./pages/admin_view/Requests_listView.jsx";
import VolunteerRequests from "./pages/admin_view/VolunteerRequests.jsx";
import DonationsRequests from "./pages/admin_view/DonationsRequests.jsx";
import ViewOrganization from "./pages/admin_view/ViewOrganization.jsx";
import ViewDonors from "./pages/admin_view/ViewDonors.jsx";
import ViewOrgDetails from "./pages/viewPages/ViewOrgDetails.jsx";
import Pending_Posts from "./pages/Organization/Pending_Posts.jsx";
import Fulfilled_Post from "./pages/Organization/Fulfilled_Post.jsx";
import Drop_off from "./pages/Organization/Drop_off.jsx";

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
        },
        {
            path : "/view-organizations/:userID",
            element : <ViewOrganizations />
        },
        {
            path : "/viewOrgDetails/:userID",
            element : <ViewOrgDetails />
        },
        {
            path : "/admin/registration-requests/:profileType",
            element : <Requests_listView />
        },
        {
            path : "/admin/volounteer-requests/:profileType",
            element: <VolunteerRequests />
        },
        {
            path : "/admin/donation-requests/:profileType",
            element : <DonationsRequests />
        },
        {
            path: "/admin/view-organizations/:profileType",
            element: <ViewOrganization />
        },
        {
            path: "/admin/view-donors/:profileType",
            element: <ViewDonors />
        },
        {
            path: "/org/pending-posts/:profileType/:userID",
            element: <Pending_Posts />
        },
        {
            path: "/org/fulfilled-posts/:profileType/:userID",
            element: <Fulfilled_Post />
        },
        {
            path: "/org/schedule-drop-off/:profileType/:userID",
            element: <Drop_off />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;