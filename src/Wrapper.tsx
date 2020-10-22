import 'types'

import { hot } from 'react-hot-loader/root'
import React, { useEffect } from 'react'

import { withGlobalContext } from 'hooks/useGlobalState'
import { rootReducer, INITIAL_STATE } from 'reducers-actions'

import App from 'App'
import Blocked from 'pages/Blocked'
import Disclaimer from 'pages/Disclaimer'
import Locating from 'pages/Locating'

const BLACKLIST = {
  'CU': true,
  'IR': true,
  'SY': true,
  'KP': true,
  'US': true,
  'UM': true,
  'AF': true,
  'ET': true,
  'GY': true,
  'IQ': true,
  'SD': true,
  'YE': true,
  'VE': true,
}

// wrapper
const Wrapper: React.FC = () => {
  const [agree, setAgree] = React.useState(false)
  const [locating, setLocating] = React.useState(true)
  const [geoblocked, setGeoblocked] = React.useState(false)

  useEffect(() => {
    const _country = async (): Promise<string> => {
      const response = await fetch('https://freegeoip.app/json/')
      const data = await response.json()

      return data.country_code
    }

    _country().then((country) => {
      if (BLACKLIST[country]) {
        setGeoblocked(true)
      }
      setLocating(false)
    })
  }, [])

  const agreed = (): void => {
    setAgree(true)
  }

  if (locating) {
    return <Locating />
  } else if (geoblocked) {
    return <Blocked />
  } else if (agree) {
    return <App />
  } else {
    return (
      <Disclaimer agreed={agreed}>
        <h1>Test 2</h1>
      </Disclaimer>
    )
  }
}

export default hot(withGlobalContext(Wrapper, INITIAL_STATE, rootReducer))
