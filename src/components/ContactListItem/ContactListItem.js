import s from "./ContactListItem.module.css";
import PropTypes from "prop-types";

function ContactListItem({ name, number }) {
  return (
    <>
      <p className={s.name}>Name: {name}</p>
      <p className={s.number}>Number: {number}</p>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;
