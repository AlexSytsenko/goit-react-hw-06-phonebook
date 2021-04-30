import { createAction } from '@reduxjs/toolkit';


export const addContact = createAction('conatacts/add');
export const deleteContact = createAction('conatacts/delete');
export const filterContacts = createAction('conatacts/filter');
















//Redux
// import * as types from './types';

// export const addContact = value => ({
//   type: types.ADD,
//   payload: value,
// });

// export const deleteContact = value => ({
//   type: types.DELETE,
//   payload: value,
// });

// export const filterContacts = value => ({
//   type: types.FILTER,
//   payload: value,
// });