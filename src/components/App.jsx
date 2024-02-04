
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';

 

export const App = () => {
  const state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      
    ],

   
    filter: {name: 'Rosie', number: '459-12-56'},
  };

  return (
    <div>
      <Phonebook />
      <Filter state={state}  />
      <Contacts state={state} contacts={state.contacts} />
    </div>
  );
};
