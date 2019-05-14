import styled from '@emotion/styled'

export const AppWrapper = styled('main')`
  display: block;
  width: 100%;
  text-align: left;
`

export const AppContainer = styled('div')`
  margin: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 10px;

  @media only screen and (min-width: 56.25em) {
    margin-top: 20px;
  }

  @media only screen and (min-width: 73.125) {
    margin-top: 100px;
  }
`
