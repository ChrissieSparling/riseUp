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
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
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
        <h5>Color:</h5>
        {horoscopeData.color}
      </div>
      <div>
        <h5>Date Range:</h5>
        {horoscopeData.date_range}
      </div>
      <div>
        <h5>Description:</h5>
        {horoscopeData.description}
      </div>
      <div>
        <h5>Lucky Number:</h5>
        {horoscopeData.lucky_number}
      </div>
      <div>
        <h5>Lucky Time:</h5>
        {horoscopeData.lucky_time}
      </div>
      <div>
        <h5>Mood:</h5>
        {horoscopeData.mood}
      </div>
        </Box>
      </StyledModal>

     
    </div>
  );
}

export default Horoscope;
// client side routing react-router-dom tag the v5 or v6 on end on google search this goes in app.js
