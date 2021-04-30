import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import * as actions from '../../redux/contacts/actions';
import styles from './Form.module.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeForm = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    
    if (this.isUniqueContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    };

    const contact = {
      id: shortid(),
      name,
      number,
    };

    this.props.onSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  isUniqueContact = name => {
    const { contacts } = this.props;

    return contacts.some(item => item.name === name);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChangeForm}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChangeForm}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(actions.addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
