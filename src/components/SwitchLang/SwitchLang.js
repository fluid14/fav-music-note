import React from 'react';
import PropTypes from 'prop-types';
import { LanguageContextConsumer } from 'context/LanguageContext';
import pl from 'translations/pl.json';
import en from 'translations/en.json';

const SwitchLang = ({ className }) => (
  <LanguageContextConsumer>
    {lang => {
      const { currentLang, changeLang } = lang;
      return (
        <>
          {currentLang === 'pl' ? (
            <button type="button" className={className} onClick={() => changeLang(en, 'en')}>
              EN
            </button>
          ) : (
            <button type="button" className={className} onClick={() => changeLang(pl, 'pl')}>
              PL
            </button>
          )}
        </>
      );
    }}
  </LanguageContextConsumer>
);

export default SwitchLang;

SwitchLang.propTypes = {
  className: PropTypes.string,
};

SwitchLang.defaultProps = {
  className: '',
};
