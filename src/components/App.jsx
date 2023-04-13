// import { useState, useEffect } from 'react';
import { lazy } from 'react';
// import { Form } from './Form/Form';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { Container, MainTitle, Title } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import Home from 'pages/Home/Home';
// import Login from 'pages/Login/Login';
// import Register from 'pages/Register/Register';
// import Contacts from 'pages/Contacts/Contacts';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));


export const App = () => {
      
    return (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}  
        />
        <Route
          path="/contacts"
          element={<ContactsPage />} 
        />
      </Route>
    </Routes>
    ); 
};

//  <Container>
//         <MainTitle>Phonebook</MainTitle>
//         <Form />
//         <Title> Contacts</Title>
//           <Filter />
//           <ContactsList /> 
//       </Container> 