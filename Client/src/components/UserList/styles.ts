import styled from 'styled-components'


export const Container = styled.div`
    flex-direction: column;
    align-items: center;
    grid-area: USR;
    background-color: var(--primary);
    max-height: 100vh;
    padding: 20px 0 0 0;


    h3{
        color: var(--discord);
        font-weight: bold;
        height: 30px;
        width: 100%;
        text-align: center;
    }
`


export const UserCard = styled.div`
    p{
        color: var(--white);
        font-weight: bold;
        height: 30px;
        width: 100%;
        text-align: center;
        font-size: 16px;
    }
` 