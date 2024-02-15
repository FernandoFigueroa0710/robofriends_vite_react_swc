
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useGetUsersQuery} from './services/usersApi.ts'
import {filterUsers, setUsers} from './features/users/usersSlice.ts'
import {selectUsers} from './features/users/usersSelector.ts'

function App() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const { data } = useGetUsersQuery();
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        if (data) {
            dispatch(filterUsers(''));
            dispatch(setUsers(data));
        }
    }, [data, dispatch]);

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
        dispatch(filterUsers(e.target.value));
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
                    value={filterText}
                    type="text"
                />
            </div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.firstname} {user.lastname}</li>
                    ))}
                </ul>
        </div>
    )
}

export default App
