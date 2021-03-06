import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ========================================================
// Store Instantiation
// ========================================================
// const initialState = window.___INITIAL_STATE__
// const store = createStore(initialState);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE
  );
};

// ========================================================
// Developer Tools Setup
// ========================================================
// if (__DEV__) {
//   if (window.devToolsExtension) {
//     window.devToolsExtension.open()
//   }
// }

// This code is excluded from production bundle
// if (__DEV__) {
//   if (module.hot) {
//     // Development render functions
//     const renderApp = render
//     const renderError = (error) => {
//       const RedBox = require('redbox-react').default
//
//       ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
//     }
//
//     // Wrap render in try/catch
//     render = () => {
//       try {
//         renderApp()
//       } catch (error) {
//         console.error(error)
//         renderError(error)
//       }
//     }
//
//     // Setup hot module replacement
//     module.hot.accept('./routes/index', () =>
//       setImmediate(() => {
//         ReactDOM.unmountComponentAtNode(MOUNT_NODE)
//         render()
//       })
//     )
//   }
// }
if (module.hot) {
  console.log('!!!');
  // Development render functions
  const renderApp = render;
  // const renderError = (error) => {
  //   const RedBox = require('redbox-react').default
  //
  //   ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  // }

  // Wrap render in try/catch
  render = () => {
    try {
      renderApp();
    } catch (error) {
      // console.error(error)
      // renderError(error)
    }
  };

  // Setup hot module replacement
  module.hot.accept('./App', () =>
    setImmediate(() => {
      console.log('jjj');
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    })
  );
}

// ========================================================
// Go!
// ========================================================
render();
