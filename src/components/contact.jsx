import React from "react";
import Map from './googlemaps';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Wanna say hi 📝!</h1>
        <div className="my-contact">
          <div className="c-address">
            <p>
              <i class="fa fa-phone"></i> +233 (0)547812542
            </p>
            <p>
              <i class="fa fa-envelope-open"></i> africandev@gmail.com
            </p>
            <p>
              <i class="fa fa-location-arrow"></i> OKai-koi north, Accra
            </p>
          </div>
          <div className="vertical-line"></div>
          <div className="content">
            <form>
              <label for="title">Your Name</label>
              <input type="text" id="lname" name="lastname" placeholder="" />
              <label for="category">Your Email </label>
              <input
                type="text"
                id="lname"
                name="example@mail.com"
                placeholder=""
              />
              <label for="text">Message</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <Map />
      </div>
    );
  }
}

export default Contact;