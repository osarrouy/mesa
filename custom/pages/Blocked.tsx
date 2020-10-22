import React from 'react'
import Wrapper from 'components/MinimalistWrapper'

export const Blocked: React.FC = () => (
  <>
    <Wrapper>
      <p>According to your IP address, you are located in a prohibited jurisdiction.</p>
    </Wrapper>
  </>
)

export default Blocked
