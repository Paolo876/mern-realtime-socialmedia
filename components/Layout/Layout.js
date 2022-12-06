import React from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import nProgress from "nprogress";
import Router from "next/router";

function Layout({ children }) {

  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  
  return (
    <>
      <HeadTags />

      <Navbar />

      <Container style={{ paddingTop: "1rem" }} text>{children}</Container>
    </>
  );
}

export default Layout;
