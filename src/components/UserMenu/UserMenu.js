import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations'; 
import { useAuth } from 'hooks/useAuth'; 
import { Wrapper, Username } from './UserMenu.styled';
import Button from '@mui/material/Button';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username> 
      <Button 
      type="button" 
      size="small" 
      variant="contained"
      onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
// {user.name}