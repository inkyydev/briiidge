import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";

export default function Header() {
  const [menuActive, handleMenuActive] = useState(false);

  const handleMenu = () => {
    handleMenuActive((prev) => !prev);
  };
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="main-nav">
            <div className="main-nav__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div
              className={`main-nav__menu ${menuActive ? "active" : ""}`}
              onClick={handleMenu}
            >
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>

            <div
              className={`header-menu-wrapper ${menuActive ? "active" : ""}`}
            >
              <div className="header-menu-wrapper__menu">
                <Link className={`${menuActive ? "active" : ""}`}>
                  <span>Menu Item 1 </span>
                </Link>
                <Link className={`${menuActive ? "active" : ""}`}>
                  <span>Menu Item 2 </span>
                </Link>
                <Link className={`${menuActive ? "active" : ""}`}>
                  <span>Menu Item 3 </span>
                </Link>
                <Link className={`${menuActive ? "active" : ""}`}>
                  {" "}
                  <span>Menu Item 4 </span>
                </Link>
              </div>
              <div className="header-menu-wrapper__image"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
