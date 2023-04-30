import PropTypes from 'prop-types';
import styles from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.li} key={id}>
            <span className={styles.contactName}>{name}:</span>
            <span className={styles.contactNumber}>{number}</span>
            <button
              className={styles.contactDeleteButton}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );


  
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;