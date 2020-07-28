import styled from 'styled-components';

export const Container = styled.div`
   grid-area: MSG;
   display: flex;
   flex-direction: column;
   align-items: 'flex-start';
   background-color: var(--quinary);

   overflow-y: scroll;

   ::-webkit-scrollbar{
       display: none
   }


`