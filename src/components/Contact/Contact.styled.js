import styled from '@emotion/styled';


export const List = styled.ol`
    padding: 20px 0;
    font-size: 18px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
`;
export const Item = styled.li`
    margin-bottom: 10px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
`;

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
    /* &:active {
        justify-content: space-between;
        align-items: center;
    } */
`