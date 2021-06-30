import React from "react";
import HomeCss from "../stylesheet/home.css";
import ein from "../images/fly.gif";
import Contact from "./contact";


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home-content" >
          <h2>Hello, This is</h2>
          <h1>Mustapha Ibrahim</h1>
          <div>
            <div>
              <p>
                I am working as a freelance web designer and developer for 4
                years.
              </p>
              <button>see my works</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Home;