import React, { useEffect, useState } from "react";
import "../Horoscope/horoscope.css";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const signs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
  -webkit-tap-highlight-color: solid;
`;

const style = {
  width: 400,
  bgcolor: "#46127D",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
  color: "white"
};

function Horoscope() {
  const [horoscopeData, setHoroscopeData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpen = () => setModalIsOpen(true);
  const handleClose = () => setModalIsOpen(false);

  function onSignSelected(sign) {
    console.log(sign);
    fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
      method: "POST",
    })
      .then(async (response) => {
        let horoscopeSign = await response.json();
        console.log(horoscopeSign);
        setHoroscopeData(horoscopeSign);
        handleOpen();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="horoscope-box">
      <h1>Let's have some fun! What's your sign?</h1>
    <div className="grid">
      
      {signs.map((sign) => (
        <button
          className="sign"
          key={sign}
          onClick={() => onSignSelected(sign)}
        >
          {sign}
        </button>
      ))}
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={modalIsOpen}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
      
      <div>
        <h3>Date Range:</h3>
        {horoscopeData.date_range}
      </div>
      <div>
        <h3>Description:</h3>
        {horoscopeData.description}
      </div>
      <div>
        <h3>Lucky Number:</h3>
        {horoscopeData.lucky_number}
      </div>
      <div>
        <h3>Lucky Time:</h3>
        {horoscopeData.lucky_time}
      </div>
      <div>
        <h3>Mood:</h3>
        {horoscopeData.mood}
      </div>
      <div>
        <h3>Color:</h3>
        {horoscopeData.color}
      </div>
        </Box>
      </StyledModal>

     
    </div>
    </div>
  );
}

export default Horoscope;
// client side routing react-router-dom tag the v5 or v6 on end on google search this goes in app.js
