import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    height: 100vh;

    grid-template-columns:auto 240px;
    grid-template-rows:auto 60px;

    grid-template-areas: 
        'MSG USR'
        'INP USR'

`