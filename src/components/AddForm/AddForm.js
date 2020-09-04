import React, { Component } from 'react';
import { AlbumListConsumer } from 'context/AlbumsListContext';
import { LanguageContextConsumer } from 'context/LanguageContext';
import styles from './AddForm.module.sass';

class AddForm extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e, submitFunction, value) => {
    e.preventDefault();
    submitFunction(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <LanguageContextConsumer>
        {lang => {
          const { translate } = lang;
          return (
            <AlbumListConsumer>
              {albumList => {
                return (
                  <form
                    className={styles.form}
                    onSubmit={e => {
                      this.handleSubmit(e, albumList.addAlbum, value);
                    }}
                  >
                    <input
                      className={styles.input}
                      type="text"
                      placeholder={translate.addForm.inputPlaceholder}
                      value={value}
                      onChange={this.handleChange}
                      required
                    />
                    <button className={styles.submitBtn} type="submit">
                      {translate.addForm.addBtn}
                    </button>
                  </form>
                );
              }}
            </AlbumListConsumer>
          );
        }}
      </LanguageContextConsumer>
    );
  }
}

export default AddForm;
