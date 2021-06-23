import React from 'react';
import ein2 from "../images/mayo.gif";

class About extends React.Component {
  render() {
    let aboutStyle = {
      imgStyle: {
        width: "50%",
        height: "50%",
        marginLeft: "3%",
        marginTop: 25,
        backgroundImage: `url(${ein2})`,
        // border: "1px solid white",
      },
      aboutContentStyle: {
        display: "flex",
        marginTop: "5%",
        fontSize: 18,
        maxWidth: "95%",
      },
      bStyle: {
        padding: 20,
        backgroundColor: "gray",
        fontSize: 18,
        fontFamily: "'Roboto Mono', monospace",
        border: "5px solid white",
        marginBottom: 150,
      },
      eduStyle: {
        marginLeft: 350,
        marginTop: 200,
        fontSize: 20,
      },
      skillStyle: {
        marginLeft: 350,
        marginTop: 90,
      },
      uniStyle: {
        marginLeft: 350,
        marginTop: 90,
      },
      school: {
        marginLeft: 15,
        backgroundColor: "#161618",
        padding: 10,
        borderRadius: 7,
      },
      college: {
        marginLeft: 15,
        backgroundColor: "#161618",
        padding: 10,
        borderRadius: 7,
        marginTop: 15,
      },
    };
    return (
      <div className="container">
        <div style={aboutStyle.aboutContentStyle}>
          <div style={aboutStyle.aboutTextStyle}>
            <p>Hi, I am Mustapha Ibrahim</p>
            <h1>A freelance Web developer</h1>
            <p>
              I am from chittagong, Bangladesh. A place of beauty and nature.
              Since my childhood, i love art and design. I always try to design
              stuff with my unique point of view. I also love to create things
              that can be usefull to others.
            </p>
            <p>
              I started coding since I was in high school. Coding is also an art
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
            <button style={aboutStyle.bStyle}>Download CV</button>
          </div>
          <img
            src={ein2}
            alt="linus-tovalds"
            style={aboutStyle.imgStyle}
            className="about-img"
          />
        </div>
      </div>
    );
  }
}

export default About;