import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
// import { getContacts } from "redux/selectors";
// import { useState } from 'react';

import { FormContainer, Label, Input, Btn } from './Form.styled';

export const Form = () => {
    const dispatch = useDispatch();
    // const contacts = useState(getContacts)
    const formSubmit = event => {
      event.preventDefault();
      const form = event.target;
     
      // contacts.some(contact => {
      //   contact.name === form.name.value ? alert(`oopps`)})
      dispatch(addContact({
        name: form.elements.name.value,
        number: form.elements.number.value
      }));
      form.reset()
    };
  
        return (
            <div>
              <FormContainer onSubmit={formSubmit}>
              <Label> Name
               <Input 
               type="text"
               name="name"
              //  value={name}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
              //  onChange={handleChange}
               /> 
              </Label>
              <Label>Number
              <Input
              type="tel"
              name="number"
              // value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // onChange={handleChange}
              />
              </Label>
              <Btn type="submit">Add contact</Btn>
              </FormContainer> 
            </div>
          );
    
}
