import { NavDropdown } from "react-bootstrap";
import { AppLogo } from "../AppLogo/AppLogo";
import MenuFlyout from "../Icons/MenuFlyout";
import { useState } from "react";
import "./Header.css";

export function Header() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div className="app-header">
      <NavDropdown
        title={<MenuFlyout />}
        id="collasible-nav-dropdown"
        show={show}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Tasks</NavDropdown.Item>
      </NavDropdown>
      <AppLogo />
    </div>
  );
}
