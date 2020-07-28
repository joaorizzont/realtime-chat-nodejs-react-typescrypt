import styled from 'styled-components';

import { Props } from '.'

export const Container = styled.div<Props>`

   min-height: 60px;
   background-color: transparent;
   padding: 2px 0 2px 15px;
 
   p{
       color: white;
       padding: 5px 20px 5px 20px
   }
   h5{
       color: ${(Props) => Props.itsMine ? 'var(--notification)' : 'var(--discord)'}
   }

`

export const Containersistem = styled.div<Props>`

   min-height: 60px;
   background-color: transparent;
   padding: 2px 0 2px 15px;
   justify-content: center;
   align-items: center;
   display: flex;
   p{
       color: var(--mention-detail);
       padding: 5px 20px 5px 20px
   }
   h5{
       color: ${(Props) => Props.itsMine ? 'var(--notification)' : 'var(--discord)'}
   }

`