import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DishPreview from "../pages/DishPreview";
import NotFound from "../pages/NotFound";

export function UserRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prato/:id" element={<DishPreview />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}