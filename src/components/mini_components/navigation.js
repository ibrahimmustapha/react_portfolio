const Footer = () => {
    return (
        <div>
          <ul className="header">
          <li><a exact href="/" className="active"><i class="fa fa-code" aria-hidden="true" style={{color: 'white'}}></i> codewithibrahim</a></li>
          <li><a className="icon" href="/"><i class="fa fa-bars" id="iconId" aria-hidden="true" style={{color: 'white'}}></i></a></li>
          <div className="nav-items" id="navId">
          <li><a exact href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="#"> Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          </div>
        </ul>
        </div>
    )
}

export default Footer;