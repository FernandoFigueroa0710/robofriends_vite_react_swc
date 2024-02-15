import { RootState } from '../../redux/configureStore.ts'

export const selectUsers = (state: RootState) => state.user.filteredUsers;
