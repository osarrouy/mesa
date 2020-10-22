import React from 'react'
import styled from 'styled-components'
import GlobalStyles from 'styles/global'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  max-width: 980px;
  min-height: 100vh;
  padding: 2rem;
  margin: auto;

  p {
    line-height: 1.4em;
    text-align: center;
  }
`

export const MinimalistWrapper: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Wrapper>{children}</Wrapper>
  </>
)

export default MinimalistWrapper
