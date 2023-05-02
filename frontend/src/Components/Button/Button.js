import React from 'react'

import styled from 'styled-components'

function Button({name , icon , onClick, bg, bpad ,color ,bRad}) {
  return (
    <ButtonStyled style={{
        background : bg,
        padding : bpad,
        borderRadius:bRad,
        color:color,
    }} onClick={onClick}>
        {icon}
        {name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    outline : none;
    border : none;
    font-family : inherit;
    font-size : inherit;
    dispaly : flex;
    align-items : center;
    gap : 0.5rem;
    cursor : pointer;
    transition : all 0.4s ease-in-out;
`;

export default Button
