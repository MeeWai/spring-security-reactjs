import Login from "./loginScreen/login";
import './App.css';
import React from "react";
import ForgotPassword from "./forgotPasswordScreen/forgotPassword";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="forgotPassword" element={<ForgotPassword/>}/>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
