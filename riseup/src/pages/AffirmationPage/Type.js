import React from "react";
import Typewriter from "typewriter-effect";

function TypeDelete(){
    return(
        <Typewriter
      options={{
        strings: [
          "How you start your day is so important!",
           "Wake up on the RIGHT SIDE OF THE BED.",
           "RISEUP and take control over your life.",
           "JOIN the community that has one purpose! YOU!",
           "Sample our daily affirmations to get a taste of what simply changing the way we view ourselves can do for your life."

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
        />
    );
}

export default TypeDelete