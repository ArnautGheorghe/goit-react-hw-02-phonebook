
import { Component } from "react";
import PropTypes from 'prop-types';
import Button from "../Button/Button";


const INITIAL_STATE = {
  isAddFormVisible: false,
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

export default class Phonebook extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func,
    name: "",
  number:""};
 

  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(` Name: ${name}, Number: ${number}`);
    this.props.onFormSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log('change');
  };

  

  render() {
    const { name, number, isAddFormVisible } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            
          >
            Add contact
          </Button>
        </form>
       
        {isAddFormVisible && (
          <div>  <h1>
          <span>Contacts</span>
        </h1>
          <ul>
            <li key={this.state.name.length}>
              <span>
                {this.state.name} : {this.state.number}
              </span>
            </li>
            </ul>
            </div>
        )}
        
      </div>
    );
  }



  
}