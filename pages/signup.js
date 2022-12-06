import { useState, useEffect, useRef } from 'react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage'
import { Form, Button, Message, Segment, TextArea, Divider, FormInput, Icon } from 'semantic-ui-react'

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;  //<-- no special characters

const Signup = () => {

  //form input states
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showPassword, setShowPassword ] = useState("")
  const [ error, setError ] = useState(null)
  const [ isFormLoading, setIsFormLoading ] = useState(false)
    //username states
  const [ username, setUsername ] = useState("")
  const [ isUsernameLoading, setIsUsernameLoading ] = useState(false)
  const [ isUsernameAvailable, setIsUsernameAvailable ] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleUsernameChange = (value) => {
    setUsername(value)
    if(regexUserName.test(value)){
      setIsUsernameAvailable(true)
    } else {
      setIsUsernameAvailable(false)
    }
  }
  return (
    <>
      <HeaderMessage/>
      <Form loading={isFormLoading} error={error} onSubmit={handleSubmit}>
        <Message error header="Error!" conent={error} onDismiss={() => setError(null)}/>
        <Segment>
          <FormInput 
            type="text" 
            label="Name" 
            placeholder="Enter name" 
            name="name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            icon="user" 
            iconPosition='left'
            fluid
            />
            
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

          {/* username input */}
          <FormInput 
            type="text"
            loading={isUsernameLoading}
            label="Username" 
            placeholder="Enter username"
            name="username" 
            value={username} 
            onChange={e => handleUsernameChange(e.target.value)} 
            icon={<Icon name={isUsernameAvailable ? "check" : "close"}/>}
            iconPosition='left'
            fluid
            />
        </Segment>
      </Form>
      <FooterMessage/>
    </>
  )
}

export default Signup