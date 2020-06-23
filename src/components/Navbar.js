import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar"
            role="navigation"
            aria-label="main-navigation">
              <div className="container">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item" title="Logo">
                    <img src={logo} alt="Hueber Industries" style={{ 'min-width': '205px' }} />
                  </Link>
                  {/* Hamburger Menu */}
                  <div className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                        data-target="navMenu"
                        onClick={() => this.toggleHamburger()}>
                          <span />
                          <span />
                          <span />
                   </div>
                </div>
              </div>
      </nav>



      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/* TODO: Change layout to / and /Blog  
                        / has carousel w/ all Blog images, Landing page, about us, Contact
                        /Blog has all blog images w/ text and absorbd metalwork. Maybe call it metalwork instead of blog though? */}
              <Link className="navbar-item" to="/metalwork">
                Metalwork
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="#About">
                About
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              {/* This would be a good place for FB link / See us on links*/}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
