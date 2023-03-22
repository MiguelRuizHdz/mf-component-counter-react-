import React from 'react'

import styled from '@emotion/styled'

const ButtonStyled = styled.button`
    font-family: 'Finlandica', sans-serif;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0px .5rem;
`;

const Button = ( {text, onClick} ) => {
  return (
    <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  )
}

export default Button