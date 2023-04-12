import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactsInitialState = {
  items: [], error: null, isLoading: false 
};

const constacsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    [deleteContact.rejected]: handleRejected,
    
  },
  });


export const contactsReducer = constacsSlice.reducer;







// reducers: {
//   addContact: {
//     reducer(state, action) {
//       state.contacts.items.some(contact => contact.name === action.payload.name)
//         ? alert(
//             `${action.payload.name}, Contact with such name is already exists!`
//           ) :
//         state.contacts.items.push(action.payload);
//     },
//     prepare({ name, number }) {
//       return {
//         payload: {
//           name,
//           id: nanoid(),
//           number,
//         },
//       };
//     },
//   },
//   deleteContact(state, action) {
//     state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
//   },
// },