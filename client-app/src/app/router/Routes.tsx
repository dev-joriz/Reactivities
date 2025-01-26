import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path:'activities', element: <ActivityDashboard />},
            {path:'activities/:id', element: <ActivityDetails />},
            {path:'create', element: <ActivityForm key='create'/>},
            {path:'update/:id', element: <ActivityForm key='update'/>},
        ]
    }
]

export const router = createBrowserRouter(routes);