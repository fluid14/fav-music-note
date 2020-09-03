import React, { Component } from 'react';
import translate from 'translations/en.json';
import styles from './AddForm.module.sass';

class AddForm extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = () => {};

  render() {
    const { value } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder={translate.addForm.inputPlaceholder}
          value={value}
          onChange={this.handleChange}
        />
        <button className={styles.submitBtn} type="submit">
          {translate.addForm.addBtn}
        </button>
      </form>
    );
  }
}

export default AddForm;
