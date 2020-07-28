import styled from 'styled-components';

export const Container = styled.div`
   grid-area: INP;
   background-color: var(--primary);
   padding: 10px 30px 10px 30px;
   
   div{
      display: flex;
      height: 100%;
      flex-direction: row;
      border-radius: 200px;
      border: 0px solid transparent;
      background-color: var(--chat-input);
      padding: 0 20px 0 20px;
   }
`

export const Input = styled.input`
   background-color: transparent;
   flex:1;
   border: 0px solid transparent;
   outline: none;
   color:  var(--white);
   font-size: 15px;  
`

export const SendButton = styled.button`

   background-color: transparent;
   border: 0px solid transparent;
   flex:0.1;
   cursor: pointer;

   p{
      color:  var(--white);
      font-size: 15px;
      font-weight: bold;
   }

` 