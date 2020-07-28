import React from 'react'

import { Container, Containersistem } from './styles'


interface IMessage {
    from: string;
    content: string;
    sendAt: Date;
}

export interface Props {
    message?: IMessage,
    itsMine?: boolean,
    sistem?: boolean
}

const Message: React.FC<Props> = ({ message, itsMine, sistem }) => {
 
    return (sistem ?
        <Container itsMine={itsMine}>
            <Containersistem>
                {message &&
                    <p>{message.content}</p>}
            </Containersistem>
        </Container> :
        <Container itsMine={itsMine}>
            <div>
                {message &&
                    <h5>{message.from}</h5>}
            </div>
            <div>
                {message &&
                    <p>{message.content}</p>}
            </div>
        </Container>


    )
}

export default Message;