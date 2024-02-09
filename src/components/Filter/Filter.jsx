
import PropTypes from 'prop-types';
import { useState } from 'react';

const Filter = ({ state }) => {
    const [filterValue, setFilterValue] = useState("");
  return (
    <div>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Find contacts"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
      />

      <ul>
        <li className="item">
          <span className="label">
            {filterValue === state.filter.name ? (
              <span>
                {state.filter.name}:{state.filter.number}
                {alert(`${state.filter.name} is already exist in contacts.`)}
              </span>
            ) : (
              'Contactul nu exista'
            )}
          </span>
        </li>
      </ul>
    </div>
  );
};

Filter.propTypes = {
  state: PropTypes.object,
 
};
export default Filter;
