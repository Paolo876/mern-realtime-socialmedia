import Layout from "../components/Layout/Layout"
import axios from "axios"
import { parseCookies, destroyCookie } from "nookies"
import "react-toastify/dist/ReactToastify.css"
import "semantic-ui-css/semantic.min.css"

// const _app = () => {
//   return (
//     <div>_app</div>
//   )
// }

const myApp = ({ Component, pageProps }) => {

  return(
    <Layout {...pageProps}>
        <Component {...pageProps}/>
    </Layout>
  )
}

myApp.getInitialProps = async ({ Component, ctx }) => {
    const { token } = parseCookies(ctx);
    let pageProps = {};
  
    const protectedRoutes =
      ctx.pathname === "/" ||
      ctx.pathname === "/[username]" ||
      ctx.pathname === "/notifications" ||
      ctx.pathname === "/post/[postId]" ||
      ctx.pathname === "/messages" ||
      ctx.pathname === "/search";
  
    if (!token) {
      protectedRoutes && redirectUser(ctx, "/login");
    }
    //
    else {
      try {
        const getFollowingData =
          ctx.pathname === "/notifications" || ctx.pathname === "/[username]";
  
        const res = await axios.get(`${baseUrl}/api/auth`, {
          headers: { Authorization: token },
          params: { getFollowingData }
        });
  
        const { user, userFollowStats } = res.data;
  
        if (user) !protectedRoutes && redirectUser(ctx, "/");
  
        pageProps.user = user;
        pageProps.userFollowStats = userFollowStats;
      } catch (error) {
        destroyCookie(ctx, "token");
        redirectUser(ctx, "/login");
      }
    }
  
    return { pageProps };
  };

export default myApp