import React, { useEffect, useState } from 'react'
import { Container, UserCard } from './styles'

interface Props {
    socket: any
}

interface IClient {
    name: string,
    socketId: string
}

const UserList: React.FC<Props> = ({ socket }) => {

    const [users, setUsers] = useState<IClient[]>([])

    useEffect(() => {

        socket.once('list users', function (data:any) {

            console.log(data.clients)
            setUsers(data.clients)
        });
    })

    return (
        <Container>
            <h3>Online Users</h3><br />
            {users?.map((user, index) =>
                <UserCard key={index}>
                    <p>{user.name}</p>
                </UserCard>
            )}
        </Container>
    )
}

export default UserList;