import React from 'react';
import './Projects.css';
import WellDone from '../../assets/WellDone.png';
import FoodTruck from '../../assets/ftt.png'
import Droom from '../../assets/Droom.png'
import { Link } from "@material-ui/core";
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';




export default function Projects(){


  const aStyle = {
    color: "#16a085",
  };
  const bStyle = {
    color: "#2e2e2e",
    width: '3em',
    height: '2em',
  }
  
  return(
    <div className = 'projectsBody'>
      <div className = 'projectHdr'>
        <h2>Past Projects:</h2>
      </div>
      {/* WELLDONE START */}
      <div className = 'wellDone'>
      
      <div className = "wdInfo">

      <div className = 'wdImg'>
      <img  alt= "WellDone Logo" className="prjctImg" src={WellDone}/>
      <div className ='wdLinks'>
      <Link style ={bStyle} label= 'deployed site' href = 'https://welldone.netlify.app/'>
        <button className = 'deployed'>
        <WebIcon fontSize="large"/>
        <h3>Deployed Project</h3>
        </button></Link>

        <Link style ={bStyle} label ='Github repo' href ='https://github.com/Lambda-School-Labs/well-done-fe'>
        <button className = 'gitHub'>
        <GitHubIcon fontSize="large"/>
        </button></Link>
      </div>
      </div>
        
        <div className = 'wdBio'>
        <h4>Well-Done Dashboard</h4>
        <p><b>***I can provide log-in info on request***</b></p>
				<p> <Link style ={aStyle} href ='https://www.welldone.org/remote-monitoring'>The Well-Done Dashboard</Link> Is an IoT application designed to assist <Link style={aStyle} href ='https://www.welldone.org/'>Well-Done</Link> in their mission, by persisting, storing, and displaying the data collected by their Mo-Mo sensors. In order to provide decision-makers with a tool to see which pumps are down and need maintenance, if the well is running low, and detailed status reports updated hourly for each pump. Our team started working in early December 2019 and came to a stopping point around mid-February. However in April 2020, I and a few others were contacted by Well-Done directly and asked if we could continue on a volunteer basis! We've come a long way since then, and are almost ready for roll-out.  </p>
				<h4>Tech Stack:</h4> 
        <p>React, Redux, ag-Grid, SASS, Semantic UI, Reactstrap, NodeJS, PostgreSQL, Express, SQL, Knex.</p>
				<h4>My Contributions:</h4>
				<ul>
				<li>Created an activity calendar that uses color to indicate the status by day for an individual sensor and water pump.</li> 
        <li>Incorporated dynamic browser routing (welldone.com/monitor/####) to enhance functionality, and ease of use.</li>
        <li>Used React Map, to display sensor/well locations, incorporating dynamic pins to display the current status of each sensor (Functional, Non-Functional,and Unknown.)</li>
        <li>Created and role-based view/access control for three different user-types (WellDone Staff, Org Admin, Org staff.)</li>
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
      <Link style ={bStyle} label= 'deployed site' href = 'https://ftt2.herokuapp.com/'>
        <button className = 'deployed'>
        <WebIcon fontSize="large"/>
        <h3>Deployed Project</h3>
        </button></Link>
        <Link style ={bStyle} label ='Github repo' href ='https://github.com/food-truck-trackr/back-end'>
        <button className = 'gitHub'>
        <GitHubIcon fontSize="large"/>
        </button></Link>
      </div>
      </div>
        
        <div className = 'ftBio'>
        <h4>Food Truck Trackr API</h4>
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
      <Link style ={bStyle} label= 'deployed site' href = 'https://mb-fe.vercel.app/'>
        <button className = 'deployed'>
        <WebIcon fontSize="large"/>
        <h3>Deployed Project</h3>
        </button></Link>
        <Link style ={bStyle} label ='Github repo' href ='https://github.com/jnichols93/mb-fe'>
        <button className = 'gitHub'>
        <GitHubIcon fontSize="large"/>
        </button></Link>
      </div>
      </div>
        
        <div className = 'wdBio'>
        <h4>MathBook</h4>
        <p>MathBook is a calculator application built using react on the front-end, and Node.js, Express, and Sqlite3. The objective was to create a calculator, that could show the last ten calculations performed to all users currently using the application.
          cin order to meet the outlined objective, I started by building an API that was limited to only making GET and POST requests. I then Built the front-end using React and styled it up using SCSS. The "instant" update was achieved by having the front end make an api call every few seconds.   
        </p>
				<h4>Tech Stack:</h4> 
        <p>React, SCSS, Node.js, Express, Sqlite3, Heroku, and Next.js</p>
				<h4>My Contributions:</h4>
				<ul>
				<li>Built a Front-end Application</li>
		  <li>Created a Back-end API.</li>
			<li>Used Mixin's for Styling.</li>
			<li>Found a safe use-case for .eval().</li>
			<li>Implemented API calls using Axios.</li>
			<li>Used React Life-Cycle Methods.</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  )
}