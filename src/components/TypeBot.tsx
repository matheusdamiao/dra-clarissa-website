'use client'
import React from 'react'
import { Bubble } from "@typebot.io/nextjs";

const TypeBot = () => {
  return (
    <div>
       <Bubble
        typebot="lead-generation-qoeph7s"
        previewMessage={{
          message: "Olá! Como posso te ajudar? :)",
          autoShowDelay: 1000,
        }}
        theme={{ button: 
          { backgroundColor: "#29b918",
            size:'large',
            customIconSrc:
            "https://s3.typebot.io/public/workspaces/cltcd25yb000x11yyiklj53fq/typebots/cltcd8d36001711yylqoeph7s/bubble-icon?v=1724775462667",
         } }}
        
        />
    </div>
  )
}

export default TypeBot
