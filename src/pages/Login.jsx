import { React, useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // simulate login
        if (username) {
            localStorage.setItem('user', username);
            navigate('/dashboard');
        }
    }

    return (
        <Container maxWidth='sm' style={{ marginTop: '100px'}}>
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
                onClick={handleLogin}
                fullWidth
            >
                Login
            </Button>
        </Container>
  )
}
