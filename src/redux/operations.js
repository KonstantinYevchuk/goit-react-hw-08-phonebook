import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getContacts, contactAdd, contactDelete } from "service/api";

// axios.defaults.baseURL =  "https://643412a9582420e231732626.mockapi.io/contacts/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
        // const data = await getContacts();
        // return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact );
      return response.data;
        // const data = await contactAdd(contact);
        // return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
        // const data = await contactDelete(id);
        // return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
