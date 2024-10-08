import { useEffect } from 'react';
 import { useDispatch } from 'react-redux';

 import ContactForm from './ContactForm/ContactForm';
 import ContactList from './ContactList/ContactList';
 import { ContactsCounter } from './ContactCounter/ContactCounter';
 import Filter from './Filter/Filter';
 import { fetchContacts } from '../redux/contacts';

 const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

   return (
     <div>
       <h1>Phonebook</h1>
       <ContactsCounter />
       <ContactForm />
       <h2>Contacts</h2>
       <Filter />
      <ContactList />
    </div>
  );
};
export default App;