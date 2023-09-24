
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Donation from '../Pages/Donation'
import Statistics from '../Pages/Statistics'


export const router = createBrowserRouter([
    {path:'/', loader: ()=> fetch('/data.json') , errorElement: <ErrorPage/>, element: <Root/>, children:[

        {path:'/', element: <Home/> },
        {path:'/donation', element: <Donation/>},
        {path:'/statistics', element: <Statistics/>},
    ]}
])
