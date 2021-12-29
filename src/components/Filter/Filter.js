import s from "./Filter.module.css";
import PropTypes from "prop-types";

export default function Filter({ value, onChange }) {
  return (
    <>
      <p className={s.nameFilter}>Find contacts by name</p>
      <input
        className={s.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
