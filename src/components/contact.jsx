import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Wanna say hi 📝!</h1>
        <div className="content">
          <form>
            <label for="username">Firstname</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="firstname"
            />
            <label for="title">Lastname </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="lastname"
            />
            <label for="category">Email </label>
            <input
              type="text"
              id="lname"
              name="example@mail.com"
              placeholder="example@mail.com"
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
    );
  }
}

export default Contact;