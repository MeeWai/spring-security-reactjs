import React, {useState} from "react";
import {Box, Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import "./login.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

    //https://www.kindacode.com/article/programmatically-navigate-using-react-router/
    //https://stackoverflow.com/questions/70403175/no-routes-matched-location-rewards-store/70403258
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    //https://mui.com/styles/basics/
    const [password, setPassword] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setPassword({...password, [prop]: event.target.value});
        console.log("Password: "+event.target.value);
    };

    const handleClickShowPassword = () => {
        setPassword({
            ...password,
            showPassword: !password.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const userInfo = {
        username: username,
        password: password
    }

    const submitLoginInfo = (event) => {
        event.preventDefault();
        console.log("Button clicked.");
        postLoginInfo();
        navigate("home");
    }

    const postLoginInfo = async () =>{
        try {
            const response = await axios.post("", userInfo);
            console.log(response.data);
        }catch (errResp){
            console.log("Error response: "+errResp);
        }
    }

    return (
        <div className="container">
            <form onSubmit={submitLoginInfo}>
                <Box sx={{flexGrow: 1}} className="loginBox">
                    <Grid container spacing={1} justifyContent="center" >
                        <h2>Spring Security Login</h2>
                        <Grid item lg={12} xs={12} sm={12}>
                            <TextField fullWidth variant="outlined"
                                       label="Username"
                                       type="text"
                                       value={username}
                                       onChange={(event)=>{
                                           setUsername(event.target.value);
                                           console.log("Username: "+event.target.value);
                                       }}/>
                        </Grid>

                        <Grid item lg={12} xs={12} sm={12}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={password.showPassword ? 'text' : 'password'}
                                    value={password.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end">
                                                {password.showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} xs={12} sm={12}>
                            <div className="loginButton">
                                <Button fullWidth variant="contained" size="medium" type="submit">Login</Button>
                            </div>

                            <div className="forgotPassword" onClick={
                                () => {navigate("forgotPassword");
                                    console.log("Navigate to forgot password")}}>
                                <h6>Forgot password? Click here</h6>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}
export default Login;
