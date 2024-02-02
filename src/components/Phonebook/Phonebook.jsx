import styles from "./Phonebook.modules.css"


const Phonebook = () => {
    return (
      <div className={styles.black}>
        <h2>Phonebook</h2>
        <form action="">
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <br />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );

}

export default Phonebook;