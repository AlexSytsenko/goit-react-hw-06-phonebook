import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactsItem from '../ContactItem';
import * as oparations from '../../redux/contacts/operations';
import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, fetchContacts }) => {
  useEffect(() => fetchContacts, []);
  return (
    <ul className={styles.contacts__list}>
      {contacts.map(({ id }) => (
        <ContactsItem key={id} value={id} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const getVisibleContacts = (items, filter) => {
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLocaleLowerCase();

  return items.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: dispatch(oparations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
