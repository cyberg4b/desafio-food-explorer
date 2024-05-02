import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "../routes/admin.routes"
import { UserRoutes } from "../routes/user.routes"

import { useAuth } from "../hooks/auth";

export function Routes() {
    const { user } = useAuth(); 
    
    function AccessRoutes() {
    
        if(user.role === 'admin') {
            return <AdminRoutes />
        }
    
        return <UserRoutes />
    }

    return(
        <BrowserRouter>
            {user ? <AccessRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}