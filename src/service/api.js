import axios from "axios";


const contactsAPI = axios.create({
    baseURL: 'https://643412a9582420e231732626.mockapi.io/contacts/contacts',
  });
  
  export const getContacts = async () => {
    const { data } = await contactsAPI.get();
    return data;
  };
  
  export const contactDelete = async id => {
    const { data } = await contactsAPI.delete(id);
    return data;
  };
  
  export const contactAdd = async contact => {
    const { data } = await contactsAPI.post('', contact);
    return data;
  };