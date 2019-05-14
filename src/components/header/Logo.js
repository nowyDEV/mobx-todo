import React from 'react'
import styled from '@emotion/styled'

const StyledImg = styled('img')`
  display: block;
  width: 100%;
  max-width: 80px;
  height: auto;
`

function Logo() {
  return <StyledImg src="http://pngimg.com/uploads/beer/beer_PNG2382.png" alt="beer mugs" />
}

export default Logo
