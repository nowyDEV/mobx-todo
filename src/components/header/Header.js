import * as React from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'

const StyledHeader = styled('header')`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`

const H1 = styled('h1')`
  font-size: 2.2rem;
  font-weight: bold;
  margin-right: 20px;
`

function Header() {
  return (
    <StyledHeader>
      <H1>Todos</H1>
      <Logo />
    </StyledHeader>
  )
}

export default Header
