import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { getContacts, contactAdd, contactDelete } from "service/api";

// axios.defaults.baseURL = "https://643060f5c26d69edc890c86e.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
        const data = await getContacts();
        return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
        const data = await contactAdd(contact);
        return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
        const data = await contactDelete(id);
        return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
