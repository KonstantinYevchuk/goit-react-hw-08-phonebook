import styled from '@emotion/styled';

export const Container = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    background-image: linear-gradient(to bottom, rgba(168,165,217,1) 0%, rgba(63,82,152,0.0762429971988795) 25%, rgba(18,87,231,0.3843662464985994) 100%), url('data:image/jpeg;base64,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ZEflcWdT65es42tNeoHqVKhpspIpr2tQYbdGUAu3M3ZrDqAIk6/be834rvcSoUjalWRM6quKZqUaZcsAASrU77jIH4RNBNSLEMjVGpDB75UaFO2xD16m9jsbKOs8pr9e1UU0rVveDTLWZgQi5Wvdx3mHdH02Jm++u06FUqZ8QdCAql2XTKfBEsS3huLGbxcb71tRqiaWnHa098hTVqGkB65Oe/VPzW/gZbU4bptNi2tqivWA7lBVsi+SUVsT88VMyrcR1lRAGZNBp7CyoB2mHQLuMfXujpz2nLDotxp0sTfKq/fdvG5YftYDxXkYTW1xHilSoMW/s1Aiy00ANaov3AFtivkLDnckygK7gKR2VICwpqdyvg7D/KLD1kaagASd3dubm7OT6/6T0em9nKjWLsFHUC7Nb+l5fUHK0r4Y4d3HYAbCeu4W7MLlStudxaZaXhFCmbql28WJY/vsPlOha3KZtLWUREyhERAREQEREBERAREQExsJlEBERAwY2BM1r3NzLK7chMAJvmZGOrtTERKyRJiBRqNJTqWzQMRybcMv5XG4+RnO1XBSwsrCov3agFxy2DgG42GzK3ITryYxdeXpaenRqNUqB6dRwqAuFCBRayoyjAA25c/ITozrmxBDAEHYgi4I8xObW4KnOi7UD91d6f8AIeX6SsiXnfeqp5T20rG1NOhY3/SoI/zz0Vcaij/eU+0X79MMw9WQDJfkG9Z5P2jcVqlLFhZi/I5YgJTBvblyPO3nbnLDjmzr20eC8J94LlmKJTxBstyxN+6vnYX5H0nb7ShpgRSQF/hLHvG/UZb3P4Rc8r4c44N7P12S6Aqj/aZmVWHmAbsPId3lu87uk9kwDeo99gLKOg6A8gPIC0Wx2tteWbtKjZVGNzva5vf67H5k+LGdnh3AatS117NB4i23kJ6rR8JoUjdUuw+03eP/AMnQmfL6Rz9HoEpABRv42F/rN8SYkt1JExESKREQEREBERAREQEREBERAREQERECipTubiYTZmDpf1mpWbypiSRaRNMEmRJgREkCSFJjVxFpKqZaq2mUzempyxC+MpqaOkzB2pozryYopYehIvNmJnWiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBiVBlRpmXyJZcSzVGJma0/GWRGpOYiwmURI0REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=');
    background-repeat: no-repeat; 
    /* background-size: cover; */
`;
export const MainTitle = styled.h1`
    margin-bottom: 20px;
    font-size: 38px;
    text-shadow: 2px 2px 5px #1565c0;
    
`;
export const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 32px;
    text-shadow: 2px 2px 5px #1565c0;
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