import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../redux/configureStore.ts'
import { User } from '../../types/user.types.ts'
export const users = (state: RootState)=> state.user.users;
export const searchQuery = (state: RootState)=> state.user.searchQuery;


const selectFilterUsers = createSelector(
    [users, searchQuery],
    (users, searchQuery)=>{
        if(!searchQuery){
            return users
        }
        const normalizedQuery = searchQuery.toLowerCase();
        return users.filter((user: User)=> user.firstname.toLowerCase().includes(normalizedQuery
        ));
    }
);


export {selectFilterUsers};