import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  function handleClick(e) {
    localStorage.setItem('mode',e.target.value);
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Redux Posts Method
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{marginTop: '10px',color: 'white'}}>
              <label><input type="radio" name="check-method" onClick={handleClick} value="online"/>&ensp;Online</label>
              &ensp;&ensp;
              <label><input type="radio" name="check-method" onClick={handleClick} value="offline"/>&ensp;Offline</label>
          </ul>
          <Link to="/addPost" className="btn btn-dark">
            Add Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
