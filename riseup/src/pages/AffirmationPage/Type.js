import React from "react";
import Typewriter from "typewriter-effect";

function TypeDelete(){
    return(
        <h1><Typewriter
      options={{
        strings: [
          "How you start your day is so important!",
           "Wake up on the RIGHT SIDE OF THE BED.",
           "RISEUP and take control over your life.",
           "JOIN the community that has one purpose! YOU!",
           "This is your life. We want you to control it."

        ],
        autoStart: true,
        loop: false (10),
        typeSpeed: 1000,
        deleteSpeed: 10,
        
        
      }}
        />
        </h1>
    );
}

export default TypeDelete