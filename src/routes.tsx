import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const DefaultLayout = lazy(() => import("./Layout/Default"))

const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            // {
            //     index: true,
            //     element: '',
            // }
        ]
    }
]

const Routes = () => {
    const routing = useRoutes(routes)
    return (
        <div>
            {routing}
        </div>
    )
}

export default Routes