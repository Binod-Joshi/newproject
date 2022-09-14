import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg text-${props.mode==='light'?'dark':'light'} bg-${props.mode}`}>
    <div className="container-fluid ">
      <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
      {/* <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title}</a> */}

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'} `} aria-current="page" to="/">Home</Link>
            {/* <a className={`nav-link active text-${props.mode==='light'?'dark':'light'} `} aria-current="page" href="/">Home</a> */}

          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'} `} to="/about">{props.newText}</Link>
          </li>
        </ul>

        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}> </div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px',cursor:'pointer'}}> </div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px',cursor:'pointer'}}> </div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px',cursor:'pointer'}}> </div>

        </div>
  
        <form className="d-flex" role="search my-3 mx-3">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        <div className="form-check form-switch my-3 mx-3" >
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark mode</label>
           <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
       </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    newText:PropTypes.string,
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    newText:PropTypes.string,
}

Navbar.defaultProps={
    title:'PropTypes.string',
    newText:'PropTypes.string',
}