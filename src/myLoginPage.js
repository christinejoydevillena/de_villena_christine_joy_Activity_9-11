import React, { useState } from 'react';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import myImage from './backG_pic.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styles } from './Styles';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic here
  };

  const Label = {
    padding: '10px 20px',
    marginTop: '20px',
    textAlign: 'center',
    color: 'black',
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        backgroundImage: `url(${myImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <form
        style={{
          width: '90%',
          maxWidth: '350px',
          textAlign: 'center',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 0px #000000',
          backgroundColor: '#FFFFFF',
          marginRight: '-700px',
        }}
        onSubmit={handleSubmit}>
        <h2 style={{ fontFamily: 'Century Gothic, sans-serif', color: '#975AB6' }}>Login</h2>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          style={{ color: 'secondary' }}/>
        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          required
          margin="normal"
          style={{ color: 'secondary'}}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibilityToggle} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link style={{ textAlign: 'right', alignSelf: 'flex-end' }}>Forgot password?</Link><br/>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#975AB6', color: 'white', marginTop: '20px', width: '100%' }}>Login
        </Button><br/><br/>
        <label style={Label}>Don't have an account?<Link>Sign up</Link></label><br/><br/>
        <label type="submit" variant="contained" style={Label}>Or</label><br/>
        <Button type="submit" variant="contained" style={styles.ButtonStyle}>
          <FacebookIcon style={{ marginRight: '20px' }} /> Login with Facebook
        </Button>
        <Button type="submit" variant="contained" style={styles.ButtonStyle}>
          <GoogleIcon style={{ marginRight: '25px', color: '#ffff' }} /> Login with Google
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
