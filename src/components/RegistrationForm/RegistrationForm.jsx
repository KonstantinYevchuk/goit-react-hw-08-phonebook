import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations'; 
import { Form, Label } from "./RegistrationForm.styled";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        type="text" 
        name="name"
        id="outlined-basic" 
        label="Name" 
        variant="outlined"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        size='normal'
         />
      </Label>
      <Label>
        <TextField 
        type="email" 
        name="email" 
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
      <Button type="submit" size="medium" variant="contained">Register</Button>
    </Form>
  );
};
