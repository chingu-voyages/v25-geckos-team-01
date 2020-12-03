import { combineReducers } from 'redux';

import { tasksReducer } from './tasksReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers( {
    tasks: tasksReducer,
    auth: authReducer,
} );

export { rootReducer }

// export default combineReducers({});