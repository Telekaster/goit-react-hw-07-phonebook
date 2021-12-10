import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsFetch, removeContactsFetch } from "../api/fetches";

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
    const contacts = getContactsFetch();
    return contacts;
  }
);

export const removeContactsFromServer = createAsyncThunk(
  "contacts/delete",
  async (id) => {
    await removeContactsFetch(id);

    const newContact = await getContactsFetch();
    return newContact;
  }
);
