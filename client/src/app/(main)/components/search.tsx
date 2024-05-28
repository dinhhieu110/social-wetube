import { Button, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { HiMicrophone } from 'react-icons/hi2';

const Search = () => {
  return (
    <div className="flex flex-1 max-w-screen-sm gap-4">
      <TextField
        size="small"
        placeholder="Tìm kiếm"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="Tìm kiếm">
                <Button color="secondary">
                  <CiSearch size={24} />
                </Button>
              </Tooltip>
            </InputAdornment>
          ),
          sx: {
            padding: 0,
          },
        }}
      />
      <Tooltip title="Tìm kiếm bằng giọng nói">
        <IconButton color="secondary">
          <HiMicrophone />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Search;
