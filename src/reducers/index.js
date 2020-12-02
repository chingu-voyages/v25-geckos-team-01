import { combineReducers } from 'redux';

import { tasksReducer,   } from './../App/endpoints/tasks/reducers';
import { authReducer } from './../App/endpoints/auth/reducers';

const rootReducer = combineReducers( {
    tasks: tasksReducer,
    auth: authReducer,
} );

export { rootReducer }

// export default combineReducers({});