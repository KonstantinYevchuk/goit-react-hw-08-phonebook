import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations'; 
import { Form, Label } from "./LoginForm.styled";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toaster } from 'react-hot-toast';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TextField 
        type="email" 
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        size='normal'
         />
      </Label>
      <Label>
        <TextField 
        type="password" 
        name="password"
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        size='normal'
        />
      </Label>
      <Button 
      type="submit" 
      size="medium" 
      variant="contained"
      >Log In
      </Button>
      <Toaster position="top-center" reverseOrder={false} />
    </Form>
  );
};
