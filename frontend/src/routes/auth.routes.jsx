import { Routes, Route } from "react-router-dom";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/cadastrar" element={<Signup />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}