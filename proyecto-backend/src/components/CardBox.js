import { useState } from 'react'
import UserCard from "./UserCard"

const Cardbox = () => {
    const [users, setUsers] = useState([]) 

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        if (!data.errors) {
            setUsers(data)
        } else {
            setUsers([])
        }
    });
    
    return (
        <div className='columns is-mobile is-multiline m-4 is-vcentered'>
            {users.map((user, index) => (
                <div key={index} className='column is-one-third-desktop is-one-third-widescreen is-half-tablet is-full-mobile is-one-quarter-fullhd'>
                    <UserCard user={user} />
                </div>
            ))}
        </div>
    )
}

export default Cardbox