import styled from '@emotion/styled';


export const List = styled.ol`
    padding: 20px 0;
    font-size: 18px;
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
`;
export const Item = styled.li`
    margin-bottom: 10px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    border: 2px solid black;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition: scale 550ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 550ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 550ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        border-color: blue;
        scale: 1.1;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    }
`;

