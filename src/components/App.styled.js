import styled from '@emotion/styled';

export const Container = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
`;
export const MainTitle = styled.h1`
    margin-bottom: 20px;
    font-size: 38px;
    
`;
export const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 32px;
`;
export const ErrorText = styled.h3`
    color: red;
    animation: beat 1s infinite;
    transition: all 300ms ease-in-out;
   
@keyframes beat {
  0%
  {
    color: black;
  }
  50%
  {
    color: red;
  }
  50%
  {
    color: black;
  }
  100%
  {
    color: red;
  }
}
` 