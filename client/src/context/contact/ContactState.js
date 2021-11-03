import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./ContactContext";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "samip Luitel",
        email: "samip@gmail.com",
        phone: "111-111-111",
        type: "personal",
      },
      {
        id: 2,
        name: "santosh Luitel",
        email: "santosh@gmail.com",
        phone: "222-222-222",
        type: "personal",
      },
      {
        id: 3,
        name: "subham Luitel",
        email: "subham@gmail.com",
        phone: "333-333-333",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Updade contact

  // Filter contacts

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
