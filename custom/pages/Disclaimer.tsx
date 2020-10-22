import React from 'react'
import styled from 'styled-components'
import GlobalStyles from 'styles/global'

import Terms from 'components/Terms'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  max-width: 980px;
  min-height: 100vh;
  padding: 2rem;
  margin: auto;

  h1 {
    line-height: 1.2em;
  }

  button {
    padding: 1em;
  }
`
interface Props {
  agreed: () => void
}

export const Disclaimer: React.FC<Props> = ({ agreed }) => (
  <>
    <GlobalStyles />
    <Wrapper>
      <h1>Token Disclaimer</h1>
      <Terms />
      <button onClick={agreed}>I agree with the Token Disclaimer</button>
    </Wrapper>
  </>
)

export default Disclaimer
