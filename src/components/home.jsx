import React from "react";
import HomeCss from "../stylesheet/home.css";
import ein from "../images/fly.gif";
import Contact from "./contact";


class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-content">
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
        </div>

        <div className="social-accounts">
          <ul>
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-twitter"></i>
            </li>
            <li>
              <i className="fa fa-instagram"></i>
            </li>
            <li>
              <i className="fa fa-github"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;