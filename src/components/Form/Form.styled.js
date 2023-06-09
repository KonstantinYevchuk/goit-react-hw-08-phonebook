import styled from '@emotion/styled';

export const FormContainer = styled.form`
    padding: 25px 15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 2px solid black;
    border-radius: 5px;
    width: 340px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
export const Label = styled.label`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    text-align: start;
    border-radius: 5px;
    margin: 0 auto 15px auto;
    font-weight: 500;
`;
export const Input = styled.input`
    padding: 8px 12px;
    margin-top: 8px;
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

