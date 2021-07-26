// imported css
import Css from "../../stylesheet/mini_components_stylesheet/gallery.css";
// Images imported
import img1 from "../../images/gallery/img1.jpeg";
import img2 from "../../images/gallery/img2.jpeg";
import img3 from "../../images/gallery/img3.jpeg";
import img4 from "../../images/gallery/img4.jpeg";
import img5 from "../../images/gallery/img5.jpeg";
import img6 from "../../images/gallery/img16.jpeg";
import img7 from "../../images/gallery/img7.jpeg";
import img8 from "../../images/gallery/img8.jpeg";
import img9 from "../../images/gallery/img9.jpeg";
import img10 from "../../images/gallery/img10.jpeg";
import img11 from "../../images/gallery/img11.jpeg";
import img12 from "../../images/gallery/img12.jpeg";
import img13 from "../../images/gallery/img13.jpeg";
import img14 from "../../images/gallery/img14.jpeg";
import img15 from "../../images/gallery/img15.jpeg";

const Gallery = () => {
    return (
      <div className="row images">
        <div className="column">
          <img src={img1} alt="gallery-images" />
          <img src={img2} alt="gallery-images" />
          <img src={img3} alt="gallery-images" />
          <img src={img4} alt="gallery-images" />
        </div>
        <div className="column">
          <img src={img5} alt="gallery-images" />
          <img src={img6} alt="gallery-images" />
          <img src={img7} alt="gallery-images" />
          <img src={img8} alt="gallery-images" />
        </div>
        <div className="column">
          <img src={img9} alt="gallery-images" />
          <img src={img10} alt="gallery-images" />
          <img src={img11} alt="gallery-images" />
          <img src={img12} alt="gallery-images" />
        </div>
        <div className="column">
          <img src={img13} alt="gallery-images" />
          <img src={img14} alt="gallery-images" />
          <img src={img15} alt="gallery-images" />
          <img src={img10} alt="gallery-images" />
        </div>
      </div>
    );
}

export default Gallery;