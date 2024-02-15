
import { Component } from "react";
import PropTypes from 'prop-types';
import Button from "../Button/Button";


export default class Phonebook extends Component {
  static propTypes = { onFormSubmit: PropTypes.func };
  state = {
    isAddFormVisible: false,
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
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
    const { name, number, isAddFormVisible, finder } = this.state;

    return (
      <div>
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
            type="submit"
            action={() => {
              this.setState({
                isAddFormVisible: true,
                name: this.state.name,
                number: this.state.number,
              });
            }}
          >
            Add Contact
          </Button>

          {console.log(this.setState)}
        </form>

        <h1>Contacts</h1>
        <div>
          <h2>Find contacts by name</h2>
          <input
            type="text"
            value={finder}
            name="finder"
            placeholder="Finder"
            onChange={this.handleChange}
            onClick={this.handleFind}
          />
        </div>
        {isAddFormVisible &&
          (this.state.filter.forEach(el => el.name) !== finder ? (
            <ul>
              <li key={this.state.name.length}>{'ok'}</li>
            </ul>
          ) : (
            <ul>
              <li>{'rEzultat eronat'}</li>
            </ul>
          ))}
        {isAddFormVisible && (
          <ul>
            <li key={this.state.name.length}>
              <span>
                {this.state.name} : {this.state.number}
              </span>
            </li>
          </ul>
        )}

        <div>{this.render2()}</div>
      </div>
    );
  }
  renderList = contacts => {
    return contacts.map(el => {
      return (
        <ul>
          <li key={el.id}>
            <div>
              {el.name} :{el.number}
            </div>
          </li>
        </ul>
      );
    });
  };

  render2() {
    const { contacts } = this.state;
    return <div>{this.renderList(contacts)}</div>;
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