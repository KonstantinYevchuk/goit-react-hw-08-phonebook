import styled from '@emotion/styled';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    padding: 5px 7px;
    min-width: 70px;
    color: white;
    background-color: blue;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px; 
    outline: none;
    transition: all 300ms ease-in-out;
    
    &:hover,
    &:focus {
        transform: scale(1.1);
        background-color: orange;
     
    }
`