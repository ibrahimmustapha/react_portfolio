import servicesStyle from '../../stylesheet/mini_components_stylesheet/services.css';
const Services = () => {
    return (
      <div>
        <div className="service-wrapper">
          <p>What I can offer</p>
          <h1>|| SERVICES ||</h1>
          <div className="services">
            <div>
              <i class="fa fa-laptop"></i>
              <h3>Web Development</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has ever since the 1500s.
              </p>
            </div>
            <div>
              <i class="fa fa-mobile-phone"></i>
              <h3>Mobile Development</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has ever since the 1500s.
              </p>
            </div>
            <div>
              <i class="fa fa-pencil-square-o"></i>
              <h3>Technical Writer</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Services;