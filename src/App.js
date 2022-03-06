import Login from "./loginScreen/login";
import './App.css';
import React from "react";
import ForgotPassword from "./forgotPasswordScreen/forgotPassword";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./HomeScreen/home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Home/>}/>
                    <Route path="forgotPassword" element={<ForgotPassword/>}/>
                    <Route exact path="*" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
