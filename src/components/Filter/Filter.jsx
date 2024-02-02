import PropTypes from 'prop-types';

const Filter = ({ contacts, name}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
      />

      <ul>
        {contacts.map(name => {
          return (
            <li className="item" key={name.id}>
              <span className="label">{name.name} : </span>
              <span className="percentage">{name.number}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  state: PropTypes.object,
  contacts: PropTypes.array,
};
export default Filter;
