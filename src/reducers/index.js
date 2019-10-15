import {combineReducers} from 'redux';
import AdminReducer from './AdminReducer';
export default combineReducers({
    admin: AdminReducer,
});
