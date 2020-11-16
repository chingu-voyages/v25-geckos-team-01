import { combineReducers } from 'redux';

import { splashReducer  } from './../App/endpoints/splash/reducers/index.js';
import { tasksReducer  } from './tasks.js';

const rootReducer = combineReducers( {
    splash: splashReducer,
    tasks: tasksReducer,
} );

export { rootReducer }