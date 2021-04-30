import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/actions';
import styles from './FilterContacts.module.scss';

const FilterContacts = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  </label>
);



FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(actions.filterContacts(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
