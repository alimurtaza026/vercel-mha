"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Theme } from "@twilio-paste/core/dist/theme";
import Loading from "@/components/home/loading-ui";
import { Suspense } from "react";
import { App } from "@/components/twilio/app";
import Head from "next/head";
import Script from "next/script";
/* this is the index page for the Chat Page */

export default function Chat() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
  setIsLoaded(true);
  }, []);
  
  
  
  useEffect(() => {
  if(isLoaded){
  setTimeout(() => {
  const script = document.createElement("script");
  script.src = "./chat.js";
  document.body.appendChild(script);
  }, 1000);
  }
  }, [isLoaded]);
  return (
  <>
  <Script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossOrigin="anonymous"/>
  <Script src="https://assets.flex.twilio.com/releases/flex-webchat-ui/2.9.3/twilio-flex-webchat.min.js" integrity="sha512-lL9Ihx5WpKGmP1wzno3O9BMWAnKJDxfNfoE7/HnVfESbtBAzA6jUhAOU+b4Nq3WvZthSf7mOH3SNo7+zVP7BVQ==" crossOrigin=""/>
  </>
  );
  }
