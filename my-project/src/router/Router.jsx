import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../Pages/loginPage/loginPage"
import RegisterPage from "../Pages/registerPage/registerPage"

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<LoginPage />}/>
                <Route path="/cadastro"  element={<RegisterPage />}/>
            </Routes>
        </BrowserRouter>
    )
}