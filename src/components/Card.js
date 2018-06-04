import React, { PropTypes } from 'react';
import Button from './Button';
import style from './style.css'

const Card = ({ btncolor, btnTextColor }) => {
  return (
    <div className={style.cardContainer}>
      <h3>Card Heading</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
      sed vestibulum justo, hemdrerit cursus nisl.</p>
      <Button text="Action"
        textColor={btnTextColor}
        color={btncolor}
        disabled={false}
      />
    </div>
  )
};

Card.PropTypes = {
  btncolor: PropTypes.string.isRequired,
  btnTextColor: PropTypes.string.isRequired
}

export default Card;
