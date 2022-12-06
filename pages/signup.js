import { useState, useEffect, useRef } from 'react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage'
import { Form, Button, Message, Segment, TextArea, Divider } from 'semantic-ui-react'

const Signup = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showPasswod, setShowPassword ] = useState("")
  const [ error, setError ] = useState(null)

  const [ username, setUsername ] = useState("")
  const [ isUsernameLoading, setIsUsernameLoading ] = useState(false)
  const [ isUsernameAvailable, setIsUsernameAvailable ] = useState(false)
  return (
    <>
      <HeaderMessage/>
      <FooterMessage/>
    </>
  )
}

export default Signup