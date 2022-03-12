import React from 'react'
import "../About/about.css"
import Chrissie from '../../assets/images/chrissie.jpg'
import Denise from '../../assets/images/deniprof.jpg'
import Loop from '../../assets/images/loop.jpg'
import Nile from '../../assets/images/nile.jpg'


const About = (props) => {


  return (
    <div>
     <div className="aboutUs">About Us</div>

      <div className="postsAbout">
        <div className="postAbout">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Chrissie} />
              <span className="postTitleAbout">Chrissie Sparling</span>
              <hr />

              <p className="postSubAbout">
                A charismatic and inspiring soul as well as as the inspiration for this project. She worked on the front-end, back-end, and wrote all of the affiramtions. 
              </p>
            </div>
          </div>
        </div>

        <div class="container">
    <div class="hover-container">
        <div class="left wing"></div>
        <div class="right wing"></div>
        <div class="body"></div>
        <div class="head"></div>
    </div>
</div>

        <div className="postAbout">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Denise} />
              <span className="postTitleAbout">Denise Arevalo</span>
              <hr />

              <p className="postSubAbout">
                Quick as a whip and sharp as a tack. She was one of the major back-end develpoers and the designer of the Self Care Checklist.
              </p>
            </div>
          </div>
        </div>
        <div className="postAbout">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Loop} />
              <span className="postTitleAbout">Heather Loop</span>
              <hr />

              <p className="postSubAbout">
               This wild one is a true blue front-end developer. She brings you color and style! 
              </p>
            </div>
          </div>
        </div>
        <div className="postAbout">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Nile} />
              <span className="postTitleAbout">Nile Clark</span>
              <hr />

              <p className="postSubAbout">
                The lady with all the answers and always there to lend a helping hand! She was the lead back-end developer, front-end developer and teacher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Denise from '../../assets/images/deniprof.jpg'
// import Loop from '../../assets/images/loop.jpg'
// import Chrissie from '../../assets/images/chrissie.jpg'
// import Nile from '../../assets/images/nile.jpg'
// import '../About/about.css'

// export default function ActionAreaCard() {
//   return (
//     <div className='about'>
//     <Card sx={{ maxWidth: 400 , borderRadius: 10,}}>
//       <CardActionArea>
//         <CardMedia 
//           component="img"
//           height="240"
//           image= {Chrissie}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Chrissie
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//            shes a bad ass
//           </Typography>
//         </CardContent>
//       </CardActionArea>
// </Card>

// <Card sx={{ maxWidth: 1, borderRadius: 10,  }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="240"
//           image= {Denise}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Denise
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Watch out shell get ya!
//           </Typography>
//         </CardContent>
//       </CardActionArea>
// </Card>

// <Card sx={{ maxWidth: 1, borderRadius: 10,  }}>
//        <CardActionArea>
//         <CardMedia
//           component="img"
//           height="240"
//           image={Nile}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Nile
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//            The one with all the answers
//           </Typography>
//         </CardContent>
//       </CardActionArea>
// </Card>

// <Card sx={{ maxWidth: 1, borderRadius: 10,  }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="240"
//           image={Loop}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Heather
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             thats me
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//     </div>
//   );
// }
