import styled from 'styled-components'



export const Container = styled.div`
    height: 100vh;
    display:flex;
    width: 100%;
    background-color: var(--primary);
    align-items: center;
    justify-content: center;
`

export const CenterDiv = styled.div`

   
    flex-direction: column;
    height:60%;
    width:40%;
    background-color: var(--secondary);
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;


`


export const Title = styled.div`
    flex:1;
    width:100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    h3{
        color: var(--discord)
    }
`
export const Center = styled.div`
    width:100%;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        background-color: var(--primary);
        height: 50%;
        width:50%;
        border: 0px solid transparent;
        outline: none;
        color:  var(--white);
        font-size: 30px;  
        text-align: center;
        border-radius: 10px;
    }
`
export const Bottom = styled.div`
    width:100%;
    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    button{
        background-color: transparent;
        border: 0px solid transparent;
        height: 30%;
        width: 50%;
        cursor: pointer;

        p{
            color:  var(--white);
            font-size: 15px;
            font-weight: bold;
        }
    }
`