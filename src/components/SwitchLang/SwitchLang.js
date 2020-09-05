import React from 'react';
import PropTypes from 'prop-types';
import withLangContext from 'HOC/LanguageContextHOC';
import pl from 'translations/pl.json';
import en from 'translations/en.json';

const SwitchLang = ({ className, context: { changeLang, currentLang } }) => (
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

export default withLangContext(SwitchLang);

SwitchLang.propTypes = {
  className: PropTypes.string,
  context: PropTypes.object.isRequired,
};

SwitchLang.defaultProps = {
  className: '',
};
