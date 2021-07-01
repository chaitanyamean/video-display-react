import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension'

import { videoListReducer } from '../reducers/videoReducers';


const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['videoList']
}

const reducer = combineReducers({
    videoList: videoListReducer,
})

const initialState = {}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig, reducer)


 export const store = createStore(persistedReducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

 export const persistor = persistStore(store);

 const totalStore = {store, persistor}

export default totalStore;