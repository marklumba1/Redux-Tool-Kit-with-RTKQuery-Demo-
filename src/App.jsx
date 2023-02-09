import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import NavBar from "./components/NavBar"
import "./assets/styles/global/global.css"
import Users from "./page/Users"
const App = () => {
    return (
        
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/users" element={<Users />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}
export default App