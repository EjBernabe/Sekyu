import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';

export default function configureStore(initialState) {
    const store = createStore (reducers, {}, applyMiddleware(ReduxThunk));

    if(module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./Reducers/index').default;
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}