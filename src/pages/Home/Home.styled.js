import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    padding-top: 20px;
    /* align-items: center; */
    justify-content: center;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7hGqu0Ot0swwhQCo-wTs3ozE8CarAjywfw&usqp=CAU');
    background-repeat: no-repeat;
    background-size: cover;
    
`;
export const Title = styled.h1`
    font-weight: 500;
    font-size: 48;
    text-align: center;
    /* color: #1976d2;
    animation: beat 1s infinite;
    transition: all 300ms ease-in-out; */
   
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
