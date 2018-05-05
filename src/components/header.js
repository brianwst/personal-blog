import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
<div>
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-start">
        <Link to="/" className="navbar-item">
          <h1>{siteTitle}</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item is-tab">
            <span className="icon">
              <i className="fab fa-facebook"></i>
            </span>
          </a>
          <a className="navbar-item is-tab">
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
          <a className="navbar-item is-tab">
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
          </a>
          <a className="navbar-item is-tab">
            <span className="icon">
              <i className="fas fa-rss"></i>
            </span>
          </a>
        </div>
        <div className="navbar-right navbar-end">
          <a className="navbar-item is-tab is-active" href="index.html">Home</a>
          <a className="navbar-item is-tab" href="post.html">Static Post</a>
          <a className="navbar-item is-tab" href="about.html">About</a>
          <a className="navbar-item is-tab" href="contact.html">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</div>
)

export default Header
