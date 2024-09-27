import { Route, Routes } from "react-router-dom";
import FormNutri from "./pages/formNutri";
import Login from "./pages/login";
import Home from "./pages/home";



const AllRoutes = () => (
    <Routes>
        <Route path= '/login' element= {<Login></Login>}></Route>
        <Route path= '/formnutri' element= {<FormNutri></FormNutri>}></Route>
        <Route path= '/' element= {<Home></Home>}></Route>
    </Routes>
        
)

export default AllRoutes