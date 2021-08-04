import React from 'react';
import AboutCss from '../stylesheet/about.css';
import ein2 from "../images/v6.png";
import Gallery from "./mini_components/gallery";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="about-developer-row">
          <div className="about-developer-item">
            <p>Hi, I am Mustapha Ibrahim</p>
            <h1>A freelance Software developer</h1>
            <p>
              I am from Binbila, Northern Region Ghana. A place of beauty and nature.
              I've being an enthusiast of art and designing. I always try to design
              stuff with my unique point of view. I also love to create things
              that can be usefull to others.
            </p>
            <p>
              I started coding when I was in high school. Coding is also an art
              for me. I love it and now I have the opportunity to design along
              with the coding. I find it really interesting and I enjoyed the
              process a lot.
            </p>
            <p>
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </p>
            <button className="about-me-download-cv-button">Download CV</button>
          </div>
          <div className="about-developer-item2">
            <img src={ein2} alt="linus-tovalds" className="about-image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;