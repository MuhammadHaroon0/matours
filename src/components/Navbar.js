import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = (props) => {
  const [text,setText]=useState("");
  function handleSearch(e) {
    e.preventDefault();
    
    const searchItem =
      props.destinationsData.find(
        (item) => item.name === text
      ) || { wikipedia: "https://en.wikipedia.org/wiki/Ayubia_National_Park" };

    window.open(searchItem.wikipedia, "_blank");
  }

function handleChange(e){
    setText(()=>{
      return [e.target.name]=e.target.value
    })
  }
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleLinkClick() {
    setIsNavOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-md shadow nav--text">
      <div className="container-fluid">
        <Link className="navbar-brand main-Text" to="/">
          <img src={logo} alt="..." height="46" className="mx-3" />
          Matours
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isNavOpen ? " show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav-underline nav--items">
            <li className="nav-item me-auto">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-auto">
              <Link
                className="nav-link"
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
          </ul>
          <li className="navbar-nav me-auto dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              
            >
              Special Offers
            </a>
            <ul className="dropdown-menu dropdownmenu">
              <li>
                <Link
                  className="dropdown-item"
                  to={"/family"}
                  onClick={handleLinkClick}
                >
                  Family Package Deals
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to={"/couple"}
                  onClick={handleLinkClick}
                >
                  Couple Packages
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to={"/contact"}
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </li>
          <form
            className="d-flex"
            role="search"
            style={{ marginLeft: "25px" }}
          >
            <input
              className="form-control me-2 searchBar"
              type="search"
              id="searchBar"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={handleChange}
            />
            <button className="btn searchBtn btn-outline-dark" type="submit" onClick={handleSearch} >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
