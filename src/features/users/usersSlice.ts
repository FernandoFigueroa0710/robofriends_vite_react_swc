import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import {User} from '../../types/user.types.ts'

interface UserState {
    users: User[];
    filteredUsers: User[];
}

const initialState: UserState = {
    users: [],
    filteredUsers: [],
};

 const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
            state.filteredUsers = action.payload;
        },
        filterUsers: (state, action: PayloadAction<string>) => {
            state.filteredUsers = state.users.filter(user =>
                user.firstname.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
});

export const { setUsers, filterUsers } = userSlice.actions;

export default userSlice.reducer;