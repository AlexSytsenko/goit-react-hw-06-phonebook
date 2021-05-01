import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};


export const addContact = contact => dispatch => {
  const { name } = contact;
  const lite = { message: `${name} is already in contacts` };

  dispatch(addContactRequest());

  axios
    .get(`/contacts?q=${name}`)
    .then(({ data }) => {
      if (data.length > 0) {
        // alert(`${name} is already in contacts`);
        dispatch(addContactError(lite));
        return;
      }
      // data.length > 0
      //   ? alert(`${name} is already in contacts`)
      axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
    
    })
    .catch(error => dispatch(fetchContactsError(error)));
};


export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};
