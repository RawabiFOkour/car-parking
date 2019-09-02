import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  // 'https://s3-ap-southeast-1.amazonaws.com/motoristprod/uploads/redactor_rails/picture/data/1174/motorist-free-car-park-singapore-2018.jpg',
  'https://source.unsplash.com/LAaSoL0LrYs/1920x1080',
  'https://www.ctvnews.ca/polopoly_fs/1.4269509.1548447727!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
  'https://jobs.mindtheproduct.com/wp-content/uploads/company_logos/2018/03/BookingGoBlue-2-1024x266.png'
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
export default class Home extends Component {

  render() {
    
    return (
      <React.Fragment>
      
      <div class="container-fluid">
      <div className="row" style={{margin:"20px"}}>
      <nav class="nav nav-pills nav-justified">
      <div style={{marginRight:"800px",marginLeft:"50px"}}>
         <img src="https://cdn.dribbble.com/users/2486453/screenshots/5646776/sjoerdverbeek-schiphol-icondesign-large-parking.png"
          alt="logo" style={{width:"120px"}}></img>
      </div>
      <Link to='/login'>
         <div style={{marginRight:"15px",marginTop:'30px'}}>
         <button type="button" class="btn btn-primary btn-md" >LogIn</button>
         </div>
      </Link> 

      <Link to='/signup'>
         <div style={{marginRight:"15px",marginTop:'30px'}}>
         <button type="button" class="btn btn-primary btn-md">SignUp</button>
         </div>
      </Link>

      </nav>
      </div>
      <div className="row">
      <div className="col-12" style={{height:"400px",marginTop:"5px"}}>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide" style={{height:"350px"}}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`,height:"400px",backgroundRepeat:'no-repeat'}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height:"400px",backgroundRepeat:'no-repeat'}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height:"400px",backgroundRepeat:'no-repeat'}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
      </div>
      
      </div>
      <div className="row">
        
      </div>
      </div>
        {/* <h1>Home</h1>
        
         <Link to='/login'>
         <button>LogIn</button>
         </Link> 

    
        
       <Link to='/signup'>
        <button>SignUp</button>
      </Link> */}

      </React.Fragment>
    );
  }
}