import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { getContactsFetch } from "../api/fetches";

export const addContact = createAction("phonebook/add", (contact) => {
  return {
    payload: { ...contact },
  };
});

export const deleteContact = createAction("phonebook/remove", (contact) => {
  return {
    payload: { ...contact },
  };
});

export const filterContacts = createAction("phonebook/filter", (value) => {
  return { payload: value };
});

// ------------------------------------------------------------------------
export const getContactsFromServer = createAsyncThunk(
  "contacts/get",
  async () => {
    const contacts = await fetch(
      "https://61b2044cc8d4640017aaf12a.mockapi.io/contacts"
    ).then((response) => {
      return response.json();
    });

    // console.log(contacts);
    return contacts;
  }
);
