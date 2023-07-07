import { Helmet } from 'react-helmet';
import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList'; 
import { Filter } from 'components/Filter/Filter'; 
import { Container, MainTitle, Title } from 'pages/Contacts/Contacts.styled';


export default function Contacts() {
 
  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <Form />
        <Title> Contacts</Title>
          <Filter />
          <ContactsList /> 
      </Container> 
      {/* <TaskEditor /> */}
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      {/* <TaskList /> */}
    </>
  );
}
