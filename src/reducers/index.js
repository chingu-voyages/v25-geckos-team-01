import { combineReducers } from 'redux';

import { splashReducer  } from './../App/endpoints/splash/reducers';
import { tasksReducer  } from './../App/endpoints/tasks/reducers';
import { authReducer } from './../App/endpoints/auth/reducers';

const rootReducer = combineReducers( {
    splash: splashReducer,
    tasks: tasksReducer,
    auth: authReducer,
} );

export { rootReducer }

// export default combineReducers({});