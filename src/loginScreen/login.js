import React from "react";
import {Box, Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import "./login.css"
import {useNavigate} from "react-router-dom";

const Login = () => {
    //https://mui.com/styles/basics/
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitLoginInfo = (event) => {

    }

    //https://www.kindacode.com/article/programmatically-navigate-using-react-router/
    const navigate = useNavigate();

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    return (
        <div>
            <form onSubmit={submitLoginInfo}>
                <div className="container">
                    <h2>Spring Security Login</h2>
                    <Box sx={{flexGrow: 1}} className="loginBox">
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item lg={12} xs={12} sm={12}>
                                <TextField fullWidth variant="outlined" label="Username" type="text"/>
                            </Grid>

                            <Grid item lg={12} xs={12} sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end">
                                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>

                                <div className="loginButton">
                                    <Button variant="contained" size="medium">Login</Button>
                                </div>

                                <div className="forgotPassword" onClick={() => navigate("forgotPassword")}>
                                    <h6>Forgot password? Click here</h6>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </form>
        </div>
    )
}
export default Login;
