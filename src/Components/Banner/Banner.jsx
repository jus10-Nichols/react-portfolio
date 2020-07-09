import React from "react";
import "./Banner.css";
import Typed from "react-typed";

export default function Banner() {
  //function to change greeting shown to user, based on their current time of day.
  function Greeting() {
    let today = new Date();
    let currHr = today.getHours();
    if (currHr <= 11 && currHr >= 5) {
      return "Good Morning";
    } else if (currHr >= 12 && currHr <= 16) {
      return "Good Afternoon";
    } else return "Good Evening";
  }

  return (
    <div className="bannerBody">
      <h2>
        <Greeting />,
      </h2>
      <h1>I'm Justin</h1>
      <h2>
        <Typed
          strings={[
            "Web Developer",
            "Software Engineer",
            "Blockchain Enthusiast",
            "Cyber Security Hobbyist",
            "Dog Dad 🐕",
          ]}
          typeSpeed={33}
          backSpeed={60}
          loop
        />
      </h2>
    </div>
  );
}
