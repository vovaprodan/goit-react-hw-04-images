import React from "react";
import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({onClickButton}) => {
    return <button className={css.Button} type="button" onClick={onClickButton}>Load more</button>
}

Button.propTypes = {
   onClickButton: PropTypes.func,
  }