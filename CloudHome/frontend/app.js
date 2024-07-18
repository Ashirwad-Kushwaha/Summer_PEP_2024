import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './src/pages/loginPage';
import SignupPage from './src/pages/SignupPage';


//const App = <h1>Hello</h1>

const App=()=>{

    const router = createBrowserRouter([
        {
            path: "/login",
            element: <LoginPage/>
        },
        {
            path: "/signup",
            element: <SignupPage/>
        }
    ]);

return <RouterProvider router={router}/>;
};

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App());

