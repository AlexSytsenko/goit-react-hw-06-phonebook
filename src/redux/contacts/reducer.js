import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as actions from './actions';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const itemsReducer = createReducer(initialState.items, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer(initialState.filter, {
  [actions.filterContacts]: (_, { payload }) => payload,
});


const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;







//Redux

// import { combineReducers } from 'redux';

// import * as types from './types';

// const initialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// const itemsReducer = (state = initialState.items, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialState.filter, { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;
