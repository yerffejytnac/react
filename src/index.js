import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global-styles';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

const render = (Component) => {
  return ReactDOM.render(
    <>
      <GlobalStyles />
      <Component />
    </>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}
