import { Component } from 'react';

import PropTypes from 'prop-types';


class Contacts extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func,
    state: PropTypes.object,
  };
  state = {
    isAddFormVisible: false,
    list: [
      {
        id: 0,
        name: 'John',
        lastName: 'Smith',
        number: '07123456',
        email: 'johnsmith@company.com',
        city: 'Paris',
        role: 'Administrator',
      },
    ],
  };

  renderList = list => {
    return list.map(el => {
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
    const { list } = this.state;
    return (
      <section className="section">
        <h1>
          <span>Contacts</span>
        </h1>
        <div>{this.renderList(list)}</div>
      </section>
    );
  }

  
}

export default Contacts;
