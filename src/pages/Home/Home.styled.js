import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.h1`
    font-weight: 500;
    font-size: 48;
    text-align: center;
    color: #1976d2;
    animation: beat 1s infinite;
    transition: all 300ms ease-in-out;
   
@keyframes beat {
  0%
  {
    color: black;
  }
  50%
  {
    color: #1976d2;
  }
  50%
  {
    color: black;
  }
  100%
  {
    color: #1976d2;
  }
}
`;
