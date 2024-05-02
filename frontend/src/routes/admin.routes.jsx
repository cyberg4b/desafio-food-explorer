import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DishPreview from "../pages/DishPreview";
import NewDish from "../pages/NewDish";
import EditDish from "../pages/EditDish";
import NotFound from "../pages/NotFound";

export function AdminRoutes() {    
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prato/:id" element={<DishPreview />} />
            <Route path="/novoprato" element={<NewDish />} />
            <Route path="/editarprato/:id" element={<EditDish />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}