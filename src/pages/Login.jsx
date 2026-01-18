import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        // simulate login
        if (username) {
            login(username);
            navigate('/dashboard');
        }
    };

    return (
        <Container maxWidth='sm' sx={{ mt: 10 }}>
            <Typography variant='h4' gutterBottom>
                Login
            </Typography>
            <TextField
                label="Username"
                value={username}
                fullWidth
                onChange={e => setUsername(e.target.value)}
            />
            <Button
                variant='contained'
                sx={{ mt: 2 }}
                onClick={handleLogin}
                fullWidth
            >
                Login
            </Button>
        </Container>
  );
};

export default Login;
