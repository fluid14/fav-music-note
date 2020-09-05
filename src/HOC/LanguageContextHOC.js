import React from 'react';
import { LanguageContextConsumer } from 'context/LanguageContext';

const withLangContext = Component => {
  return function contextComponent(props) {
    return (
      <LanguageContextConsumer>
        {context => <Component {...props} context={context} />}
      </LanguageContextConsumer>
    );
  };
};

export default withLangContext;
