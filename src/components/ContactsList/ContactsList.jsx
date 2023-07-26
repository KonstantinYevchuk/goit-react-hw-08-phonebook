import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from "react";
import { Contact } from 'components/Contact/Contact';
import { ErrorText } from "pages/Contacts/Contacts.styled";

import { List, Item } from './ContactsList.styled';
import { getIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";


export const ContactsList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
        <List>
            {isLoading && <Loader />}
        {contacts.length > 0 ? filteredContacts.map(contact => {
        return <Item key={contact.id}>
            <Contact contact={contact} />
            </Item>    
        }  
        ) : <ErrorText>Sorry! No contacts in phonebook!</ErrorText>}   
        </List>        
    ) 
}

