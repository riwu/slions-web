import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { hot } from 'react-hot-loader';
import thunk from 'redux-thunk';
import { notification } from 'antd';
import reducer from './reducers';
import Routes from './routes';
import { getLanguages } from './actions';

const middleware = [thunk];
const config = {
  key: 'root',
  storage,
};

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  persistReducer(config, reducer),
  composeEnhancers(applyMiddleware(...middleware)),
);
const persistor = persistStore(store);
// persistor.purge();

store.dispatch(getLanguages());

notification.config({ duration: 0 });

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default hot(module)(App);
