import "./forgotPassword.css"
import {Box, Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const ForgotPassword = () => {
    // https://www.baeldung.com/spring-security-registration-i-forgot-my-password

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

    return (
        <div className="container">
            <h2>Forgot Password</h2>
            <form>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item lg={12} xs={12} sm={12}>
                            <TextField fullWidth variant="outlined" label="Email" type="text"/>
                        </Grid>

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
                        </Grid>

                        <Grid  item lg={12} xs={12} sm={12}>
                            <div className="loginButton">
                                <Button variant="contained" size="medium">Reset Password</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default ForgotPassword;
