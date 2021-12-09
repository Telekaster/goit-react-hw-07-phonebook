import React from "react";
import { useSelector } from "react-redux";
import styles from "./ContactList.css";

export default function ContactList({ filter, deleteContact }) {
  const isLoading = useSelector((store) => {
    return store.loadingReducer;
  });
  const contacts = useSelector((store) => {
    return store.contactReducer;
  });

  return (
    <div className="contacts">
      <ul className="contacts__list">
        {!isLoading &&
          filter === "" &&
          contacts[0].map((item) => {
            return (
              <li key={item.id}>
                {`${item.name}: ${item.phone}`}
                <button
                  onClick={deleteContact}
                  id={item.id}
                  type="button"
                  className="contacts__list_btn"
                >
                  Delete
                </button>
              </li>
            );
          })}
        {!isLoading &&
          filter !== "" &&
          contacts[0]
            .filter((item) => {
              item.name.toLowerCase().includes(filter.name.toLowerCase());
            })
            .map((item) => {
              return (
                <li key={item.id}>
                  {`${item.name}: ${item.number}`}{" "}
                  <button
                    onClick={deleteContact}
                    type="button"
                    className="contacts__list_btn"
                  >
                    Delete
                  </button>{" "}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
