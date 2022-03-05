import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

let storeEnhancers: StoreEnhancer;
if (process.env.NODE_ENV === 'production') {
  storeEnhancers = compose(applyMiddleware(thunk));
} else {
  storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)));
}

const initialState = {};

const store = createStore(rootReducer, initialState, storeEnhancers);

export default store;
