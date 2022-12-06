import { Icon, Message, Divider } from "semantic-ui-react"
import { useRouter } from "next/router"
import Link from "next/link"

export const HeaderMessage = () => {
  const router = useRouter()
  const signupRoute = router.pathname === "/signup"

  return <Message 
    attached 
    
    color="blue"
    header={signupRoute ? "Let's Get Started!" : "Welcome!"} 
    // icon={signupRoute ? "settings" : "privacy"}
    content={signupRoute ? "Create New Account" : "Login with Email and Password"}
    />
    // return <>
    // { signupRoute ? 
    //     <>
    //         <Message attached="bottom" warning><Icon name="help"/>Already have an account? <Link href="/login">Click here to Login.</Link></Message>
    //     </>
    //     :
    //     <>
    //         <h1>Welcome!</h1>
    //         <h3>Login with Email and Password</h3>
    //     </>}
    // </>
}

export const FooterMessage = () => {
    const router = useRouter()
    const signupRoute = router.pathname === "/signup"

    return <>
    { signupRoute ? 
        <>
            <Message attached="bottom" warning><Icon name="help"/>Already have an account? <Link href="/login">Click here to Login.</Link></Message>
            <Divider hidden/>
        </>
        :
        <>
            <Message attached="bottom" info><Icon name="lock"/><Link href="/reset">Forgot Password?</Link></Message>
            <Message attached="bottom" warning><Icon name="help"/>Not a member yet? <Link href="/signup">Click here to Sign up.</Link></Message>
        </>}
    </>
}