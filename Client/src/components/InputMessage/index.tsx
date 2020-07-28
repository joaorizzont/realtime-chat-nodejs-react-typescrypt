import React, { useState } from 'react'
import { Container, Input, SendButton } from './styles'
// import Socket from 'socket.io-client'


interface Props {
    socket: any,
    name: string
}


const ConversationArea: React.FC<Props> = ({ socket, name }) => {

    const [msg, setMsg] = useState("")
    // const [msg,setMsg] = useState("")


    const sendMsg = () => {
        socket.emit('send message', { content: msg, from: name, sendAt: Date.now() });
        setMsg('')
    }

    return (
        <Container>
            <div>

                <Input
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            sendMsg()
                        }
                    }}
                    value={msg}
                    onChange={text => setMsg(text.target.value)}
                />
                <SendButton
                    onClick={() => sendMsg()}
                >
                    <p>Send</p>
                </SendButton>
            </div>
        </Container>
    )
}

export default ConversationArea;