import React from "react";
import HomeCss from "../stylesheet/home.css";
import Contact from "./contact";
import Gallery from "../components/mini_components/gallery.js";
import bart from "../images/bart.jpg";
import tintin from "../images/tintin.jpg";
import hommer from "../images/hommer.jpeg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home-content">
          <h2>Hello, This is</h2>
          <h1 className="myname">Mustapha Ibrahim</h1>
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
            <li className="fa">
              <i></i>
            </li>
          </ul>
        </div>

        <Gallery />

        <div className="testimonials">
          <h1>|| Testimonials ||</h1>
          <div className="my-clients">
            <div className="client">
              <i
                class="fa fa-quote-left"
                aria-hidden="true"
                style={{ fontSize: 30 }}
              ></i>
              <p>
                Fantastic, must for people who are serious about practical
                WatchOS and WatchKit development, This is my 3rd course from
                Rob, after IOS, and UX Design and so far, amazing learning
                experience. Keep up the good job Rob.”
              </p>
              <div className="description">
                <p>- Bart Stevens</p>
                <img src={bart} alt="client_1" />
              </div>
            </div>
            <div className="client">
              <i
                class="fa fa-quote-left"
                aria-hidden="true"
                style={{ fontSize: 30 }}
              ></i>
              <p>
                Fantastic, must for people who are serious about practical
                WatchOS and WatchKit development, This is my 3rd course from
                Rob, after IOS, and UX Design and so far, amazing learning
                experience. Keep up the good job Rob.”
              </p>
              <div className="description">
                <p>- Hommer Micheals</p>
              <img src={hommer} alt="client_1" />
              </div>
            </div>
            <div className="client">
              <i
                class="fa fa-quote-left"
                aria-hidden="true"
                style={{ fontSize: 30 }}
              ></i>
              <p>
                Fantastic, must for people who are serious about practical
                WatchOS and WatchKit development, This is my 3rd course from
                Rob, after IOS, and UX Design and so far, amazing learning
                experience. Keep up the good job Rob.”
              </p>
              <div className="description">
                <p>- Tinton Forge</p>
                <img src={tintin} alt="client_1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
