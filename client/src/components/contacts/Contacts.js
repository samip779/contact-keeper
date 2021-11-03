import ContactContext from "../../context/contact/ContactContext";
import { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <div>
      <Fragment>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </Fragment>
    </div>
  );
};

export default Contacts;
