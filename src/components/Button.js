import React, { PropTypes } from 'react';
import style from './style.css'

const Button = ({ text, textColor, color, disabled }) => {
  return (
    <button
      className={ disabled ? style.btnDisabled : style.btn }
      style={{ color: textColor, backgroundColor: color }}
    >{text}</button>
  )
};

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Button;
