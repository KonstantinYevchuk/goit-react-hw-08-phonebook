// import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, MainTitle, Title } from './App.styled';


export const App = () => {
      
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <Form />
        <Title> Contacts</Title>
          <Filter />
          <ContactsList /> 
      </Container> 
    ); 
};


// const STORAGE = "contact";
// const getSavedContacts = () => {
//   const savedContacts = localStorage.getItem(STORAGE);
//     if(savedContacts !== null) {
//       const parsedContacts = JSON.parse(savedContacts)
//       return parsedContacts
//     }
//     return []
// }
// const [contacts, setContacts] = useState(getSavedContacts);
  // const [filter, setFilter] = useState('');
 
  // useEffect(() => {
  //   localStorage.setItem(STORAGE, JSON.stringify(contacts))
  // }, [contacts]) 
    
  // const handleSubmitForm = ({name, number}) => {
  //         const newContact = {
  //         id: nanoid(),
  //         name,
  //         number,
  //       }; 
        
  //       contacts.some(contact => contact.name === name)
  //       ? alert(`${name}, Contact with such name is already exists!`)
  //       : setContacts(prevState => [newContact, ...prevState]);
  //   }
    // const filterInput = e => {
    //   const { value } = e.currentTarget;
    //   setFilter(value) 
    // }
    // const deleteContact = id => {
    //   setContacts(contacts.filter(contact => contact.id !== id))
    // }
 
    // const normalizedContacts = filter.toLowerCase();  
    // const filteredContacts = contacts.filter(contact => 
    // contact.name.toLowerCase().includes(normalizedContacts));