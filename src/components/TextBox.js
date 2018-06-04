import React, { PropTypes } from 'react';
import style from './style.css'

const TextBox = ({ disabled }) => {
  return (
    <input type="text"
      className={ disabled ? style.textBDisabled : style.textB }
      placeholder="textbox"
      disabled={disabled}
    />
  )
};

TextBox.PropTypes = {
  disabled: PropTypes.bool.isRequired,
}

export default TextBox;
