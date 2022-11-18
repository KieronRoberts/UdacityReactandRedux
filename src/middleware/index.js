//Imports thunk from redux-thunk
import thunk from 'redux-thunk';
//Imports logger from logger.js
import logger from './logger';
//Imports applyMiddleware from redux
import { applyMiddleware } from 'redux';

//Exports applyMiddleware(thunk, logger)
export default applyMiddleware(thunk, logger);
