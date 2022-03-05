import Login from "./loginScreen/login";
import './App.css';
import React from "react";
import ForgotPassword from "./forgotPasswordScreen/forgotPassword";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="forgotPassword" element={<ForgotPassword/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
