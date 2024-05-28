import { Button, Stack } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import LoginForm from './login-form';
import Link from 'next/link';

const Login = () => {
  return (
    <Stack gap={4} width="100%" maxWidth={400} padding={2}>
      <h2 className="text-2xl font-medium text-center">Đăng nhập WeTube</h2>
      <Button variant="outlined" size="large" sx={{ fontWeight: 700 }} startIcon={<FcGoogle />}>
        Đăng nhập với Google
      </Button>
      <span className="text-sm dark:text-gray-400 text-center">hoặc Đăng nhập với email</span>
      <LoginForm />
      <span className="text-sm dark:text-gray-400 text-center">
        Bạn chưa có tài khoản?
        <Link href="/register" className="ml-1 text-white underline">
          Đăng ký
        </Link>
      </span>
    </Stack>
  );
};

export default Login;
