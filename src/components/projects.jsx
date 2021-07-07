import student from "../images/student.jpg";
import maps from "../images/maps.jpg";
import food from "../images/food.jpg";
import social from "../images/social.png";
import soc from "../images/soc.jpg";
import telegram from "../images/telegram.webp";


function Projects() {
    const project = "<Project/>";
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 25 }}>{project}</h1>
        <div className="grid-container">
          <div className="grid-item item1">
            <img alt="project" src={telegram} className="p-img" />
            <div>
              <p className="project-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="grid-item item2">
            <img alt="project" src={student} className="p-img" />
            <div>
              <p className="project-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="grid-item item3">
            <img alt="project" src={maps} className="p-img" />
            <div>
              <p className="project-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="grid-item item4">
            <img alt="project" src={food} className="p-img" />
            <div>
              <p className="project-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="grid-item item5">
            <img alt="project" src={social} className="p-img" />
            <div>
              <p className="project-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="grid-item item6">
            <img alt="project" src={soc} className="p-img" />
            <div>
              <p className="project-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Projects;