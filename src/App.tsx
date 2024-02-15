
import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useGetUsersQuery} from './services/usersApi.ts'
import {setUsers, setSearchQuery} from './features/users/usersSlice.ts'
import { searchQuery, selectFilterUsers } from './features/users/usersSelector.ts'

function App() {
    const dispatch = useDispatch();
    const users = useSelector(selectFilterUsers);
    const searchQueryStr = useSelector(searchQuery)
    const { data } = useGetUsersQuery();


    useEffect(() => {
        if (data) {
            dispatch(setSearchQuery(''));
            dispatch(setUsers(data));
        }
    }, [data, dispatch]);

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };


    return (
        <div>
            <h1>Robo Friends Project</h1>
            <p>robofriends updated project with redux tookit and react hooks</p>
            <div style={{margin: '1.5rem', padding: '1.5rem'}}>
                <input
                    style={{height: '1.5rem', width: '15rem'}}
                    onInput={handleFilterChange}
                    placeholder="Filter by name"
                    value={searchQueryStr}
                    type="text"
                />
            </div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.firstname} {user.lastname}</li>
                    ))}
                </ul>
        </div>
    )
}

export default App
