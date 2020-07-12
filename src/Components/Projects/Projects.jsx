import React from 'react';
import './Projects.css';
import WellDone from '../../assets/WellDone.png';


export default function Projects(){



  return(
    <div className = 'projectsBody'>
      <div className = 'projectHdr'>
        <h2>Portfolio</h2>
      </div>
      {/* WELLDONE START */}
      <div className = 'wellDone'>
      
      <div className = "wdInfo">

      <div className = 'wdImg'>
      <img  alt= "WellDone Logo" className="prjctImg" src={WellDone}/>
      <div className ='wdLinks'>
        <div className = 'deployed'>

        </div>
        <div className = 'gitHub'>

        </div>
      </div>
      </div>
        
        <div className = 'wdBio'>
        <h4>Well-Done</h4>
				<p>Well-Done Is an IoT application designed to assist Well-Done in their mission, by persisting, storing, and displaying the data collected by their Mo-Mo sensors. To provide decision-makers with a tool to see which pumps are down and need maintenance, if the well is running low, and detailed status reports updated hourly for each pump. Our team started working in early December and finished mid-February. However, in April, I and a few others were contacted by Well-Done directly and asked if we could continue on a volunteer basis! We've come a long way since then, and are almost ready for roll-out.  </p>
				<h4>Tech Stack:</h4> 
        <p>React, Redux, ag-Grid, SASS, Semantic UI, Reactstrap, NodeJS, PostgreSQL, Express, SQL, Knex.</p>
				<h4>My Contributions:</h4>
				<ul>
				<li>Created an activity calendar that uses color to indicate the status by day for an individual sensor and water pump.</li> 
				<li>Used ag-grid to build a grid to display all of the organizations currently using Well-Done's devices in pumps they are maintaining or have installed.</li>
				<li>Implemented foreign keys on an existing, active database to enhance API functionality. </li>
				<li>Added the ability to filter and export pump data to an excel spread sheet.</li>
				<li>Created a global mix-ins SASS stylesheet with all colors needed, and common component stylings according to our Figma to make styling changes quick and easy.</li>
        </ul>
      </div>
      </div>
      {/*END WELL DONE  */}
      <div className = 'foodTruck'>

      </div>
      <div className = 'droom'>

      </div>
      </div>
    </div>
  )
}