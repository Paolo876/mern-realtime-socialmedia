import { useState, useEffect, useRef } from 'react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage'
import { Form, Button, Message, Segment, TextArea, Divider, FormInput, Icon } from 'semantic-ui-react'
import ImageInput from '../components/Common/ImageInput';
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;  //<-- no special characters

const Signup = () => {

  //form input states
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showPassword, setShowPassword ] = useState("")
  const [ error, setError ] = useState(null)
  const [ isFormLoading, setIsFormLoading ] = useState(false)
  const [ formError, setFormError ] = useState(null)
    //username states
  const [ username, setUsername ] = useState("")
  const [ isUsernameLoading, setIsUsernameLoading ] = useState(false)
  const [ isUsernameAvailable, setIsUsernameAvailable ] = useState(false)

  //media
  const [ image, setImage ] = useState(null)
  const [ imageData, setImageData ] = useState(null)
  const [ isHighlighted, setIsHighlighted ] = useState(false)

  const inputRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    if(name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
      setFormError("Inputs must not be left blank.")
      console.log("err");

    }
    console.log("SUBMIT");
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
        <Message error header="Error!" content={error} onDismiss={() => setError(null)}/>
        {/* <Message error={formError} header="Error!" content={formError} onDismiss={() => setFormError(null)}/> */}
        {formError && <p>{formError}</p>}
        <Segment>
          <ImageInput isHighlighted={isHighlighted} setIsHighlighted={setIsHighlighted} image={image} setImage={setImage} imageData={imageData} setImageData={setImageData} inputRef={inputRef}/>
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
        <Divider hidden/>
        <Button content="Signup" type="submit" color="orange" disabled={isFormLoading || !isUsernameAvailable} />
        </Segment>

      </Form>
      <FooterMessage/>
    </>
  )
}

export default Signup