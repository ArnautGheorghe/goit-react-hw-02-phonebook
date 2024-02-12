
import { Component } from "react";
import PropTypes from 'prop-types';

import Contacts from "../Contacts/Contacts";
import Button from "../Button/Button";

export default class AddTutor extends Component {
  static propTypes = { onFormSubmit: PropTypes.func };

  state = {
    isAddFormVisible: false,
    name: '',
    number: '',
  };
  state2 = {
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

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log('change');
  };

  render() {
    const { name, number, isAddFormVisible } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label>
          <span>Name</span>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
        </label>
        <br></br>
        <br />
        <label>
          <span>Number</span>
          <input
            type="tel"
            value={number}
            name="number"
            placeholder="Number"
            onChange={this.handleChange}
            required
          />
        </label>
        <br></br>
        <br />
        <Button
          action={() => {
            this.setState({
              isAddFormVisible: true,
            });
          }}
        >
          Add Tutor
        </Button>
        {isAddFormVisible && <Contacts  />}
      </form>
    );
  }

  handleTutor = data => {
    const newId =
      this.state2.contacts.length > 0 ? this.state2.contacts.length : 0;

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