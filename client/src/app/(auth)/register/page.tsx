import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import RegisterForm from './register-form';

const Register = () => {
  return (
    <Stack gap={4} width="100%" maxWidth={400} padding={2}>
      <h2 className="text-2xl font-medium text-center">Đăng ký WeTube</h2>
      <Button variant="outlined" size="large" sx={{ fontWeight: 700 }} startIcon={<FcGoogle />}>
        Đăng nhập với Google
      </Button>
      <span className="text-sm text-gray-400 text-center">hoặc Đăng ký với email</span>
      <RegisterForm />
      <span className="text-sm dark:text-gray-400 text-center">
        Bạn đã có tài khoản?
        <Link href="/login" className="ml-1 text-white underline">
          Đăng nhập
        </Link>
      </span>
    </Stack>
  );
};

export default Register;
