import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-6">
      <TextField label="Email" />
      <TextField label="Mật khẩu" />
      <LoadingButton variant="contained" color="primary" size="large">
        Đăng nhập
      </LoadingButton>
    </form>
  );
};

export default LoginForm;
