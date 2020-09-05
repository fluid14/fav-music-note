import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AlbumListConsumer } from 'context/AlbumsListContext';
import withLangContext from 'HOC/LanguageContextHOC';
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
    const {
      context: { translate },
    } = this.props;
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
  }
}

export default withLangContext(AddForm);

AddForm.propTypes = {
  context: PropTypes.object.isRequired,
};
