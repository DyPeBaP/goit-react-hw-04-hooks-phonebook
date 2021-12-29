import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import shortid from "shortid";
import s from "./App.module.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const handleAddContact = (name, number) => {
    const contact = [
      {
        id: shortid.generate(),
        name,
        number,
      },
    ];

    const haveContact = contacts.some((userName) => userName.name === name);

    !haveContact
      ? setContacts((prev) => [...prev, ...contact])
      : alert(`A ${name} with the same name has already been added`);
  };

  const deliteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const FilterLowerCase = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  };

  return (
    <div className={s.app}>
      <ContactForm onSubmit={handleAddContact} />
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={FilterLowerCase()} deliteContact={deliteContact} />
    </div>
  );
}
