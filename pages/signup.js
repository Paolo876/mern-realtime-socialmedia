import { useState, useEffect, useRef } from 'react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage'
import { Form, Button, Message, Segment, TextArea, Divider, FormInput } from 'semantic-ui-react'

const Signup = () => {

  //form input states
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showPasswod, setShowPassword ] = useState("")
  const [ error, setError ] = useState(null)
  const [ isFormLoading, setIsFormLoading ] = useState(false)
    //username states
  const [ username, setUsername ] = useState("")
  const [ isUsernameLoading, setIsUsernameLoading ] = useState(false)
  const [ isUsernameAvailable, setIsUsernameAvailable ] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <>
      <HeaderMessage/>
      <Form loading={isFormLoading} error={error} onSubmit={handleSubmit}>
        <Message error header="Error!" conent={error} onDismiss={() => setError(null)}/>
        <Segment>
          <FormInput label="Name" placeholder="Enter Name" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </Segment>
      </Form>
      <FooterMessage/>
    </>
  )
}

export default Signup