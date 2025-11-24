import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import MealPlan from "./pages/MealPlan";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";


const AllRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />


        <Route element={<ProtectedRoute />}> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/plano-alimentar" element={<MealPlan />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default AllRoutes