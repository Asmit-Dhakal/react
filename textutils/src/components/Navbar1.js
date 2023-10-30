import React from 'react'
export default function Navbar1(props) {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
   <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">PCB Visualizer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PCBAVisualizer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.title}</a>
        </li>          
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div> 
</nav>
  )
}
