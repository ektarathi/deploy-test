import React from 'react';

export interface CheckboxProps {
  label: string;
  text: string;
}

const Checkbox = ({ label, text }) => {
  return (
    <div className="checkbox__item">
      <input
        className="checkbox__input"
        id={label}
        name="waste"
        type="checkbox"
        value="carcasses"
      />
      <label className="checkbox__label" htmlFor={label}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
