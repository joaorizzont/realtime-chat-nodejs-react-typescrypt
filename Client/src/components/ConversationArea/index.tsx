import React, { useState, useEffect, useRef } from 'react'
import { Container } from './styles'

import Message from '../Message'

interface Props {
    socket: any
}

interface IMessage {
    from: string;
    content: string;
    sendAt: Date;
    sistem?: boolean
}


const ConversationArea: React.FC<Props> = ({ socket }) => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const [msgs, setMsgs] = useState<IMessage[]>([])

    useEffect(() => {


        socket.once('chat message', function (msg: IMessage) {
            const div = messagesRef.current

            if (div !== null && div !== undefined) {
                div.scrollTop = div.scrollHeight;
            }
            
            setMsgs([...msgs, { from: msg.from, content: msg.content, sendAt: msg.sendAt, sistem: msg.sistem }])
        });
    }, [messagesRef, msgs, socket])





    return (
        <Container ref={messagesRef}>
            {msgs.map((m, index) => <Message key={index} itsMine={false} sistem={m.sistem} message={{ from: m.from, content: m.content, sendAt: m.sendAt }} />)}
        </Container>
    )
}

export default ConversationArea;