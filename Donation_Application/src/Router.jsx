import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "./welcome/WelcomePage.jsx";
import { RegisterPage } from "./authentication/RegisterPage.jsx";
import { LoginPage } from "./authentication/LoginPage.jsx";

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
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;