import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { FormContainer, Label, Input, Btn } from './Form.styled';

export const Form = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)
    const [name, setName] = useState();
    const [number, setNumber] = useState();

    const handleChange = (e) => {
      const { name, value } = e.currentTarget;
     
      switch (name) {
        case 'name': setName(value);
          break;
        case 'number': setNumber(value);
          break;
        default: return;
      }
    }
    

    const formSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const contactName = contacts.map(contact => contact.name.toLowerCase());
      const isAddContactName = contactName.includes(name.toLowerCase());
      const contactNumber = contacts.map(contact => contact.number);
      const isAddContactNumber = contactNumber.includes(number);
     
      if(isAddContactName) {
        toast.error(`Contact with such ${name} is already exist`, {
          autoClose: 1500,
        })
        reset()
        return
      } else if(isAddContactNumber) {
        toast.error(`Contact with such ${number} is already exist`,{
          autoClose: 1500,
        })
        reset()
        return
      }
        dispatch(addContact({
          name: form.elements.name.value,
          number: form.elements.number.value
        }))
        toast.success(`Contact ${name} is added to your list`, {
          autoClose: 1500,
        })
      reset()
    };

    const reset = () => {
      setName('');
      setNumber('');
    };
  
        return (
            <div>
              <FormContainer onSubmit={formSubmit}>
              <Label> Name
               <Input 
               type="text"
               name="name"
               value={name}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               onChange={handleChange}
               /> 
              </Label>
              <Label>Number
              <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              />
              </Label>
              <Btn type="submit">Add contact</Btn>
              <Toaster position="top-center" reverseOrder={false} />
              </FormContainer> 
            </div>
          );
    
}
