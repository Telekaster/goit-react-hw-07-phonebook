import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";
import { combineReducers } from "redux";
// ------------------------------------------------
import { getContactsFromServer } from "./actions";

const contactReducer = createReducer([], {
  // [addContact]: (state, { payload }) => [...state, payload],
  // ---------------------------------------
  // [getContactsFromServer.pending]: "",
  [getContactsFromServer.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  // [getContactsFromServer.rejected]: '';
  // ---------------------------------------
  [deleteContact]: (state, { payload }) => {
    const contactsArr = [...state];
    const elementForRemove = contactsArr.find((item) => item.key === payload);
    const index = contactsArr.indexOf(elementForRemove);
    contactsArr.splice(index, 1);
    return (state = contactsArr);
  },
});

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => {
    return (state = payload);
  },
});

export const reducers = combineReducers({
  contactReducer,
  filterReducer,
});
