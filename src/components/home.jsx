import React from "react";
import ein from "../images/ein.jpeg";


class Home extends React.Component {
  render() {
    let homeStyle = {
      hello: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 70,
        marginBottom: 100,
      },
      ayan: {
        color: "white",
        fontSize: 50,
        textAlign: "center",
        marginBottom: -25,
        marginTop: -80,
        position: "relative",
      },
      imageStyle: {
        height: 500,
        width: 850,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundImage: `url(${ein})`,
        border: "3px solid white",
        color: "gray",
        maxWidth: "97%",
        maxHeight: "100%",
        margin: "auto",
        fontSize: 18,
      },
      imageTextStyle: {
        padding: 10,
        textAlign: "center",
        marginTop: 200,
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
      },
      buttonStyle: {
        padding: 15,
        fontSize: 24,
        backgroundColor: "#BCB4B4;",
        border: "5px solid white",
      },
      contentStyle: {
        position: "relative",
        marginBottom: 100,
      },
    };
    return (
      <div style={homeStyle.contentStyle}>
        <h2 style={homeStyle.hello}>Hello, This is</h2>
        <h1 style={homeStyle.ayan}>Mustapha Ibrahim</h1>
        <div style={homeStyle.imageStyle}>
          <div style={homeStyle.imageTextStyle}>
            <p>
              I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people.
            </p>
            <button style={homeStyle.buttonStyle}>see my works</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;