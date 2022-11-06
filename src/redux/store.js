import { configureStore } from '@reduxjs/toolkit';
import users from '../redux/reducer/users';
import data from '../redux/reducer/data';

export default configureStore({
    reducer: { users, data }
});