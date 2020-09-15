import styled from 'styled-components';

export default {
  button: styled.div`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  `,

  iconButton:styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0.35em;

    min-width: 2rem;
    min-height: 2rem;
  `,

  span:styled.span`
    color: 
    ${({theme:{colors}})=> 
      colors.primary.lightYellow
    };
    
    font-weight: 500;
    font-size: 1.5em;
    letter-spacing: -0.005em;

    /* identical to box height */
    letter-spacing: -0.005em;
  `
}