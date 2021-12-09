import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";
import { combineReducers } from "redux";
// ------------------------------------------------
import { getContactsFromServer } from "./actions";

const contactReducer = createReducer([], {
  // [addContact]: (state, { payload }) => [...state, payload],
  // ---------------------------------------

  [getContactsFromServer.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  // ---------------------------------------
  [deleteContact]: (state, { payload }) => {
    const contactsArr = [...state];
    const elementForRemove = contactsArr.find((item) => item.key === payload);
    const index = contactsArr.indexOf(elementForRemove);
    contactsArr.splice(index, 1);
    return (state = contactsArr);
  },
});

// ---------------------------------------------
const loadingReducer = createReducer(true, {
  [getContactsFromServer.pending]: () => true,
  [getContactsFromServer.fulfilled]: () => false,
  [getContactsFromServer.rejected]: () => true,
});
// ---------------------------------------------

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => {
    return (state = payload);
  },
});

export const reducers = combineReducers({
  contactReducer,
  filterReducer,
  loadingReducer,
});
