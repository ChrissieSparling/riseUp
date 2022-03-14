import React from "react";
import { MDBCol, MDBContainer } from 'mdb-react-ui-kit';

import TypeDelete from './Type'
import "../AffirmationPage/affPage.css"
import "../../assets/images/sunf2.jpg";

function affPage(props) {
   return (
     <>
      <MDBContainer fluid className="project-section">
      
          <p className="d-flex justify-content-center">
         
          </p>
        <MDBCol md='6' className='col-aff1'>
          <h1 className="affTitle">🌻 Love youself 🌻</h1>
             <h2 className="affWords">Get reinvigorated to Love YOURSELF! Daily affirmations are a good way of changing that voice inside of your head. RiseUp Sunflower's! Today we get a new friend- OURSELVES. Subscribe to our community and start your journey to appreciate YOU.</h2>
      </MDBCol>
      
      <TypeDelete />
     
  
    </MDBContainer>
    </>
    );}

export default affPage
