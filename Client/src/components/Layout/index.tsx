import React from 'react'
import { Grid } from './styles'

import ConversationArea from '../ConversationArea'
import InputMessage from '../InputMessage'
import UserList from '../UserList'

import socketIOClient from "socket.io-client"
const ENDPOINT = 'https://ecf19f9d9b9e.ngrok.io';



// const users = []
interface Props {
    name: string
}


const Layout: React.FC<Props> = ({ name }) => {
    const socket = socketIOClient(ENDPOINT, { query: `name=${name}` });

   
    return (
        <Grid>
            <ConversationArea socket={socket} />
            <InputMessage socket={socket} name={name} />
            <UserList socket={socket} />
        </Grid>
    )
}

export default Layout;