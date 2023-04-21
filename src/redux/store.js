import { applyMiddleware, createStore, compose  } from "redux"
import thunkMiddleware from "redux-thunk";
import reducer from './reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPONENT__ || compose; 

// Esta linea sirve para conectar nuestra App con la extension Redux Devtools del Navegador

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) //Esta linea sirve para que podamos hacer peticiones a una Api/server
);

export default store;