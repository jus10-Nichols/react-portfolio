import React from 'react';
import './Projects.css';
// import WellDone from '../../assets/WellDone.png';


export default function Projects(){



  return(
    <div className = 'projectsBody'>
      <div className = 'projectHdr'>
        <h2>Portfolio</h2>
      </div>
      <div className = 'wellDone'>
      <div className = 'wdImg'>
      {/* <img  alt= "WellDone Logo" class="prjctImg" src={WellDone}/> */}
      </div>
      <div className = "wdInfo">
        <div className ='wdBio'>

        </div>
        <div className = 'wdBtns'>

      </div>
      </div>

      <div className = 'foodTruck'>

      </div>
      <div className = 'droom'>

      </div>
      </div>
    </div>
  )
}