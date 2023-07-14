"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return <GoogleOAuthProvider clientId="596947719931-j10r3ikugrd4uh5l81p0q36okbpvf3fa.apps.googleusercontent.com" >{props.children}</GoogleOAuthProvider>;
};


export default Providers;