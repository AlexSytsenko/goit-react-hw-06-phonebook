import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/actions';
import styles from './ContactItem.module.scss';

const ContactsItem = ({ contacts, value, onDeleteContact }) => {

  const contact = contacts.filter(item => item.id === value)[0];
  const { name, number } = contact;
  
  return (
  <li className={styles.contact__item}>
    <p className={styles.contact__text}>
      {name}: {number}
    </p>
    <button
      className={styles.contact__button}
      type="button"
    onClick={() => onDeleteContact(value)}
    >
      Delete
    </button>
  </li>
  )};

ContactsItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: value => dispatch(actions.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);

