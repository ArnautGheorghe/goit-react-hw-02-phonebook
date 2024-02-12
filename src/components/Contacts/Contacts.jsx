import { Component } from 'react';
import Button from '../Button/Button';



class Contacts extends Component {
  state = {
    isAddFormVisible: false,
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };
  renderList = contacts => {
    return contacts.map(el => {
      return (
        <div key={el.id}>
          <div>
            {el.name} :{el.number}
          </div>
        </div>
      );
    });
  };

  render() {
    const {  contacts } = this.state;
    return (
      <section className="section">
        <h1>
          <span>Contacts</span>
        </h1>
        <div>{this.renderList(contacts)}</div>
        
        <Button
          action={() => {
            this.setState({
              isAddFormVisible: true,
            });
          }}
        >
          Add Contact
        </Button>
      </section>
    );
  }

  handleTutor = data => {
    const newId =
      this.state.contacts.length > 0 ? this.state.contacts.length : 0;

    const tutorToAdd = {
      id: newId,
      name: data.name,
      number: data.number,
    };

    /**
     * Pentru orice state care este un obiect sau array si avem nevoie de starea precedenta, folosim metoda de mai jos
     */
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, tutorToAdd],
        isAddFormVisible: false,
      };
    });
  };
}

export default Contacts;
