import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import {User} from '../../types/user.types.ts'

interface UserState {
    searchQuery: string;
    users: User[];
    filteredUsers: User[];
}

const initialState: UserState = {
    users: [],
    searchQuery: '',
    filteredUsers: [],
};

 const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
            state.filteredUsers = action.payload;
        },
        filterUsers: (state) => {
            state.filteredUsers = state.users.filter(user =>
                user.firstname.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        }
    },
});

export const { setUsers,setSearchQuery } = userSlice.actions;

export default userSlice.reducer;