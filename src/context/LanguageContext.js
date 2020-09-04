import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pl from 'translations/pl.json';

const LanguageContext = React.createContext();

class LanguageContextProvider extends Component {
  state = {
    translate: pl,
    lang: 'pl',
  };

  changeLang = (translate, lang) => {
    this.setState({ translate, lang });
  };

  render() {
    const { children } = this.props;
    const { translate, lang } = this.state;
    return (
      <LanguageContext.Provider
        value={{
          translate,
          currentLang: lang,
          changeLang: this.changeLang,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}

LanguageContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const LanguageContextConsumer = ({ children }) => (
  <LanguageContext.Consumer>{children}</LanguageContext.Consumer>
);

LanguageContextConsumer.propTypes = {
  children: PropTypes.element.isRequired,
};

export { LanguageContextProvider, LanguageContextConsumer };
