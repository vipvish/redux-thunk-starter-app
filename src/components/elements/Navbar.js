import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getPosts} from '../../redux/actions/postAction'

const Navbar = () => {

  const dispatch = useDispatch();

  function pagination(e) {
    dispatch(getPosts(e.target.value))
  }

  function handleClick(e) {
    localStorage.setItem('mode',e.target.value);
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Redux Posts Methods
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{marginTop: '10px',color: 'white'}}>
              <label><input type="radio" name="check-method" onClick={handleClick} value="online"/>&ensp;Online</label>
              &ensp;&ensp;
              <label><input type="radio" name="check-method" onClick={handleClick} value="offline"/>&ensp;Offline</label>
          </ul>
          <label style={{color:'white'}}>Pagination&ensp;:&ensp;
            <select onChange={pagination}>
              <option value="0">&ensp;Start&ensp;</option>
              <option value="1">&ensp;1&ensp;</option>
              <option value="2">&ensp;2&ensp;</option>
              <option value="3">&ensp;3&ensp;</option>
              <option value="4">&ensp;4&ensp;</option>
              <option value="5">&ensp;5&ensp;</option>
            </select>
          </label>
          &ensp;&ensp;
          <Link to="/addPost" className="btn btn-dark">
            Add Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
