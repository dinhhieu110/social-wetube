import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-6">
      <TextField label="Tên của bạn" />
      <TextField label="Email" />
      <TextField label="Mật khẩu" />
      <TextField label="Nhập lại mật khẩu" />
      <LoadingButton variant="contained" color="primary" size="large">
        Đăng ký
      </LoadingButton>
    </form>
  );
};

export default RegisterForm;
