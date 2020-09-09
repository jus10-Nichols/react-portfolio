import React from 'react';
import Typed from "react-typed";
import './Footer.css'
export default function Footer(){
    return(
        <div className ='footer'>
            <div className = "container">

        <div className ="myName">
                <p><b><Typed
            strings={[
            "Full-Stack Developer",
            "Front-End Developer",
            "Back-End Developer",
            "Software Engineer",
            "Web Developer",
        ]}
        typeSpeed={33}
        backSpeed={60}
        loop
        /></b></p>
        </div>
                <div className = "myLocation">
                <p><span role='img' aria-label ='location'>📍</span> Living in <b>Minneapolis, MN.</b></p>
                </div>
                <div className ="contactMe">
                <p><b>YOU CAN REACH ME AT:</b></p>
			<span role='img' aria-label ='email'>✉️ <a href="mailto: justin.g.nichols.93@gmail.com"><b>justin.g.nichols.93@gmail.com</b></a></span> 
			<p><span role='img' aria-label ='phone'>☎️</span> <b>(952) 270-9736</b></p>
                </div>
            </div>
            <section className='madeBy'>
                <p>Built with <span role='img' aria-label = 'love'>❤️</span> and a little React.</p>
                <p>Justin Nichols ©2020.</p>
            </section>
        </div>
    )
}