
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
 

export const App = () => {
  const state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Achgfg dghf', number: '2gdhfj91-26' },
    ],

   
    filter: "",
  };

  return (
    <div>
      <Phonebook />
      <Filter state={state} contacts={state.contacts} />
      <Contacts state={state} contacts={state.contacts} />
    </div>
  );
};
