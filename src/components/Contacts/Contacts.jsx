
import PropTypes from 'prop-types';


const Contacts = ({ contacts, isDelete=false }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => {
          return (
            <li className="item" key={contact.id}>
              <span className="label">{contact.name} : </span>
              <span className="percentage">{contact.number}</span>
              <button onClick={isDelete = true}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
 
    state: PropTypes.object,
    contacts: PropTypes.array,
};

export default Contacts;
