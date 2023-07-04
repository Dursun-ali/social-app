import React, { useState } from 'react';
import '../css/Home.css'
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';


const Home = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   event.preventDefault();
    // }

    return (
        <>
            <div className="main-home-container">
                <div className="home-container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className='home-first-img-wrapper'>
                                <img className='home-first-img' src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg?w=2000" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <div className='h1-wrapper'>
                                    <h1>LOG IN</h1>
                                </div>
                                <div>
                                    <div>
                                        <div className='inp-wrapper'>
                                            <TextField
                                                className='user-inp'
                                                id="filled-password-input"
                                                label="user name"
                                                type="text"
                                                autoComplete="current-password"
                                                variant="filled"
                                            />
                                        </div>
                                    </div>
                                    <div className='inp-wrapper'>
                                        <FormControl className='user-inp' variant="filled">
                                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                            <FilledInput
                                                
                                                id="filled-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            // onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                                <div className='checbox-wrapper'>
                                    <FormGroup >
                                        <FormControlLabel  control={<Checkbox defaultChecked />} label="Remember me" />
                                    </FormGroup>
                                </div>
                                <div className='btn-wrapper'>
                                    <button className='login-btn bg-primary'>Log in</button>
                                </div>
                                <div className='down-icon-wrapper d-flex'>
                                    <span className='icon-span'>Or login with</span>
                                    <div className='icon-wrapper'>
                                        <FacebookIcon className='log-icons'/>
                                        <TwitterIcon className='log-icons'/>
                                        <GoogleIcon className='log-icons'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;