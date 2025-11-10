import {createBrowserRouter} from "react-router-dom"
import Register from "./Components/Register"
import Login from "./Components/Login1"

 export let routes=createBrowserRouter([
    {
        
        path:"/",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login></Login>
    }
])
