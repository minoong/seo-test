import { Helmet } from "react-helmet-async";
import { Outlet, useRoutes } from "react-router-dom";

function Layout() {
    return (
        <div>
            wefawef
            <Outlet />
        </div>
    )
}

export default function ThemeRoutes() {
    return useRoutes([
     {
      path: '/',
      element: <Layout />,
      children: [
       {
        path: '/auth',
        element: (
            <>
            <Helmet>
        <title>auth</title>
      </Helmet>
      <Outlet />
            </>
        ),
        children: [
            {path : '/status',
        element: <div>auth</div>}
        ]
       },
       {
        path: '/sign',
        element: (
            <>
            <Helmet>
        <title>sign</title>
      </Helmet>
      <Outlet />
            </>
        ),
        children: [
            {path : '/status',
        element: <div>sign</div>}
        ]
       },
      ],
     },
    ])
   }