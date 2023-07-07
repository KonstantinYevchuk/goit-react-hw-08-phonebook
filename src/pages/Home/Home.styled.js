import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    padding-top: 20px;
    justify-content: center;
    background-image: linear-gradient(to bottom, rgba(168,165,217,1) 0%, rgba(63,82,152,0.0762429971988795) 25%, rgba(18,87,231,0.3843662464985994) 100%), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKngbBzrJ_joS2sqjHKd_5Ke99xHyGaGqSKQ&usqp=CAU');
    background-repeat: no-repeat;
    background-position: center 90%;
    background-size: contain;
    
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
