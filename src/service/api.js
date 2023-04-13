import axios from "axios";

// https://connections-api.herokuapp.com
const contactsAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
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
    const { data } = await contactsAPI.post(contact);
    return data;
  };