import React from 'react';
import './Projects.css';
import WellDone from '../../assets/WellDone.png';
import FoodTruck from '../../assets/ftt.png'
import Droom from '../../assets/Droom.png'

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
      </div>
            {/*END WELL DONE  */}
            <div className = 'foodTruck'>
      
      <div className = "ftInfo">

      <div className = 'wdImg'>
      <img  alt= "Food Truck" className="prjctImg" src={FoodTruck}/>
      <div className ='wdLinks'>
        <div className = 'deployed'>

        </div>
        <div className = 'gitHub'>

        </div>
      </div>
      </div>
        
        <div className = 'ftBio'>
        <h4>Food Truck Trackr</h4>
				<p>Food Truck Trackr, is an application every foodie needs! It gives users the ability to find their favorite food trucks around town, and where they plan to be next. And food truck owners, can use the platform to communicate with potential guests. As part of a build week, I and a team of four front-end developers built out this application in only four days. I built the API and Database, individually while the rest of the team focused on the front end.</p>
				<h4>Tech Stack:</h4> 
        <p>Node.js, Express, Sqlite3, Knex, PostgreSQL, SuperTest, Helmet, Bcrypt.js</p>
				<h4>My Contributions:</h4>
				<ul>
			<li>Built a fully functional CRUD API and Database.</li>
			<li>Used JSON Web Token/Authorization Headers.</li>
			<li>Incorporated foreign keys throughout my DB Table Structure.</li>
			<li>Implemented multiple role based & many to one relationships</li>
			<li>Built Tests for all API functions.</li>
        </ul>
      </div>
      </div>
      </div>
      <div className = 'wellDone'>
      
      <div className = "wdInfo">

      <div className = 'wdImg'>
      <img  alt= "droom" className="prjctImg" src={Droom}/>
      <div className ='wdLinks'>
        <div className = 'deployed'>

        </div>
        <div className = 'gitHub'>

        </div>
      </div>
      </div>
        
        <div className = 'wdBio'>
        <h4>Droom</h4>
        <p>Droom lets job seekers swipe right on their dream job! 
			Job posters simply post their job opening on Droom, 
			and qualified candidates can swipe right to confirm their interest! As a build-week project, I was given four days to produce a fully functional react/redux front-end.</p>
				<h4>Tech Stack:</h4> 
        <p>React, Redux, Material-UI, CSS, SASS</p>
				<h4>My Contributions:</h4>
				<ul>
				<li>Figured out how to make react swipe right.</li>
			<li>Implemented React/Redux</li>
			<li>Learned Material-Ui</li>
			<li>Learned React-Spring</li>
			<li>Implemented API calls</li>
			<li>Built Stateful Components</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  )
}