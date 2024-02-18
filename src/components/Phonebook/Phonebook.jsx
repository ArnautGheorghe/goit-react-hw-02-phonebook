import { Component } from "react"
import PhonebookForm from "../PhonebookForm/PhonebookForm";


export default class Phonebook extends Component {
  state = {
    isAddFormVisible: false,
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log('change');
  };

  renderList = items => {
    return items.map(el => {
      return (
        <div>
          <ul>
            <li key={el.id}>
              <div>
                <span>{el.name} : </span>
                <span>{el.number}</span>
              </div>
            </li>
          </ul>
        </div>
      );
    });
  };

  render() {
    const { isAddFormVisible, contacts, filter } = this.state;

    return (
      <div>
        {isAddFormVisible || <PhonebookForm onFormSubmit={this.handleTutor} />}
        <div>
          <h2>Contacts</h2>
        </div>
        <div>
          <h3>Find contacts by name</h3>

          <label>
            <input
              type="text"
              value={filter}
              name="filter"
              placeholder="Cauta dupa nume"
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <div> {this.renderList(contacts)}</div>
      </div>
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