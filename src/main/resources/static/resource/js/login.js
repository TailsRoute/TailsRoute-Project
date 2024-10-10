import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, TextField, Container, Typography, Box, Divider, Link } from '@mui/material';

function LoginForm() {
    return (
        <Box sx={{
            backgroundColor: '#FFFEF0',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 5
        }}>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form>
                    <TextField label="아이디" variant="outlined" fullWidth margin="normal" />
                    <TextField label="비밀번호" type="password" variant="outlined" fullWidth margin="normal" />
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button variant="contained" color="primary">
                            로그인
                        </Button>
                    </Box>
                </form>
                <Box textAlign="center" mt={4}>
                    <Typography variant="body2">
                        Don't have an account?{' '}
                        <Link href="#" underline="hover">
                            Sign up
                        </Link>
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={2}>
                    <Divider sx={{ flexGrow: 1 }} />
                    <Typography variant="body2" sx={{ mx: 2 }}>
                        or
                    </Typography>
                    <Divider sx={{ flexGrow: 1 }} />
                </Box>
                <Box textAlign="center" mt={2}>
                    <Button variant="outlined" fullWidth sx={{ textTransform: 'none', borderColor: '#d3d3d3' }}>
                        Sign in with Google
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

const rootElement = document.getElementById('login-root');
const root = createRoot(rootElement);
root.render(<LoginForm />);
