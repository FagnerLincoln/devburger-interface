import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Menu } from "../containers/Menu";
import { Register } from "../containers/Register";
import { Home } from "../containers/HOME";
import { Header } from "../components/Header";

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            (
                <>
                    <Header />
                    <Home />
                </>
            ),
    },

    {
        path: '/login',
        element: <Login />,
    },

    {
        path: '/cadastro',
        element: <Register />,
    },

    {
        path: '/cardapio',
        element:  (
            <>
                <Header />
                <Menu />
            </>
        ),
    },

]);