import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ contacts, deliteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactListItem key={id} name={name} number={number} />
          <button
            className={s.buttonDelete}
            type="button"
            onClick={() => deliteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deliteContact: PropTypes.func.isRequired,
};

export default ContactList;
