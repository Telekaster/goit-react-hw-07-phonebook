import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";
import { combineReducers } from "redux";
// ------------------------------------------------
import { getContactsFromServer, removeContactsFromServer } from "./actions";

const contactReducer = createReducer([], {
  // [addContact]: (state, { payload }) => [...state, payload],
  // ---------------------------------------

  [getContactsFromServer.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [removeContactsFromServer.fulfilled]: (state, { payload }) => [
    (state = payload),
  ],
});

// ---------------------------------------------
const loadingReducer = createReducer(true, {
  [getContactsFromServer.pending]: () => true,
  [getContactsFromServer.fulfilled]: () => false,
  [getContactsFromServer.rejected]: () => false,
  [removeContactsFromServer.pending]: () => true,
  [removeContactsFromServer.fulfilled]: () => false,
  [removeContactsFromServer.rejected]: () => false,
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
