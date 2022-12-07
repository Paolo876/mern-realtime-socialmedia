import { useState, useEffect, useRef } from 'react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage'
import { Form, Button, Message, Segment, TextArea, Divider, FormInput, Icon } from 'semantic-ui-react'

const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showPassword, setShowPassword ] = useState("")

  const [ error, setError ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <HeaderMessage/>
      <Form loading={isLoading} error={error} onSubmit={handleSubmit}>
        <Message error header="Error!" content={error} onDismiss={() => setError(null)}/>
        <Segment>
        <FormInput 
            type='email' 
            label="E-Mail Address" 
            placeholder="Enter email" 
            name="email" value={email} 
            onChange={e => setEmail(e.target.value)} 
            icon="mail" 
            iconPosition='left'
            fluid
            />
          <FormInput 
            type={showPassword ? "text" : "password"} 
            label="Password" 
            placeholder="Enter password"
            name="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            icon={<Icon name="eye" circular link={true} onClick={() => setShowPassword(prevState => !prevState)}/>}
            iconPosition='left'
            fluid
            />
        <Divider hidden/>
        <Button content="Login" type="submit" icon="sign in" color="blue" disabled={isLoading} />
        </Segment>

      </Form>

      <FooterMessage/>
    </>
  )
}

export default Login