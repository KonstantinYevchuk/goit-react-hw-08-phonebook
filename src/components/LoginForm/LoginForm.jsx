// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import { Form, Label } from "./LoginForm.styled";


export const LoginForm = () => {
//   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input 
        type="email" 
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
         />
      </Label>
      <Label>
        Password
        <input 
        type="password" 
        name="password" 
        />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
