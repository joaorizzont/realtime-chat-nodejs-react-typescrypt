import React, { useState } from 'react';

import { Container, CenterDiv, Title, Center, Bottom } from './styles'


interface Props {
    setName: Function
}


const Login: React.FC<Props> = ({ setName }) => {

    const [text, setText] = useState('')
    console.log(process.env)

    return (
        <Container>
            <CenterDiv>
                <Title>
                    <h3>Insira seu nome</h3>
                </Title>
                <Center>
                    <input
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                setName(text)
                            }
                        }}
                        value={text}
                        onChange={evt => setText(evt.target.value)}
                    />
                </Center>
                <Bottom>
                    <button
                        onClick={() => setName(text)}
                    >
                        <p>ENTRAR</p>
                    </button>
                </Bottom>
            </CenterDiv>
        </Container>
    )
}


export default Login;