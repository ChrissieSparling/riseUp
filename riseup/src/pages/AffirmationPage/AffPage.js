import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardOverlay, MDBCardText } from 'mdb-react-ui-kit';
import affirmations from "../../pages/AffirmationPage/AffPage"
import TypeDelete from './Type'



function affPage() {
   return (
     <>
      <div>{affirmations.map(affirmation =>{
          return(
        <MDBRow>
           <MDBCol md='3' className='col-aff'>
           <MDBCard background='dark' key = {affirmation.id} className='text-white'>
           <MDBCardImage overlay src={affirmation.images} alt='...'/>
         <MDBCardOverlay>
          <MDBCardText>
             {affirmation.body}
             {affirmation.authorName}
             {affirmation.topic}
              </MDBCardText>
          </MDBCardOverlay>
        </MDBCard> 
      </MDBCol>
      <MDBCol md='6' className='col-aff'>
      <h1 className="affTitle">🌻Love youself🌻</h1>
      <h1 className="affWords">Get reinvigorated to Love YOURSELF! Daily affirmations are a good way of changing that voice inside of your head. RiseUp Sunflower\'s! Talk to yourself like a friend. Be the light you need. WeRiseUpToday want to help you by giving you a place where people listen, observe, and offer insight based on their experiences. There is negative in this world. WeRiseUpToday is the beacon of light calling all of you home. Subscribe to our community and start your journey to appreciation of YOU.</h1>
      </MDBCol>
      
      <TypeDelete />
 
      <MDBCol md='3' className='col-aff'>
           <MDBCard background='dark' key = {affirmation.id} className='text-white'>
           <MDBCardImage overlay src={affirmation.images} alt='...'/>
         <MDBCardOverlay>
          <MDBCardText>
             {affirmation.body}
             {affirmation.authorName}
             {affirmation.topic}
              </MDBCardText>
          </MDBCardOverlay>
        </MDBCard> 
      </MDBCol>
      </MDBRow>
          )},
      )},
      </div>
      </>
   )}

export default affPage
