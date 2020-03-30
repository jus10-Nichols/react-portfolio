import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
        <h1>About Me</h1>
            <Content>
            <p>Hello, my name is Justin. I'm a full stack engineer with experience in Django, Flask, Express JS, Node JS, Oracle SQL, MongoDB, and React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>My latest project, Well-Done, helps NGOs figure out where to build wells! You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

            <p>When I'm not learning something new chances are I'm building something. You can find see more of my work here <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;