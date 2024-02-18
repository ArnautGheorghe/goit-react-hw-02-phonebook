import { Component } from 'react';

import PropTypes from 'prop-types';


class Contacts extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func,
    state: PropTypes.object,
  };
  state = {
    isAddFormVisible: false,
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

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

  render() {
    const { contacts } = this.state;
    return (
      <section className="section">
        
        <div>{this.renderList(contacts)}</div>
      </section>
    );
  }
}

export default Contacts;
