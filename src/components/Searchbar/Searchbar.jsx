import React from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export const Searchbar = ({onSubmit}) => {
    return <header className={css.Searchbar}>
  <form onSubmit={onSubmit} className={css.SearchForm }>
    <button type="submit" className={css.SearchForm_button}>
      <span className={css.SearchForm_button_label}>Search</span>
    </button>

    <input
      className={css.SearchForm_input }
      type="text"
      name="name"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
}

Searchbar.protoTypes = {
onSubmit: PropTypes.func
}
