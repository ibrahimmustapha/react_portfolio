import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, BrowserRouter,} from "react-router-dom";
import Home from './components/home';
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import Navigation from './components/mini_components/navigation.js';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="">{this.props.children}</div>
        <div className="footer">
          <p>Copyright © 2021 Ibrahim Mustapha, Inc. All rights reserved</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <Route path="/" component={Portfolio} />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);


export default Portfolio;
