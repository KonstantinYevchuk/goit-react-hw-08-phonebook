import styled from '@emotion/styled';
import { Field as FormicField, Form as FormicForm } from 'formik';

export const Title = styled.h2`
    margin: 0 0 24px 0;
    font-size: 18px;
    font-weight: 500;
`;

export const Form = styled(FormicForm)`
       display: flex;
       flex-direction: column;
       padding: 25px 15px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        border: 2px solid black;
        border-radius: 5px;
        width: 340px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const Field = styled(FormicField)`
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

    &:hover,
    &:focus {
        border-color: blue;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

    } 
 
`;