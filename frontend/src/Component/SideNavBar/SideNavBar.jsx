import React from "react";
import './SideNavBar.css';

function SideMenu() {
  return (
      <div className="sidenav">
        <a href="#About">About</a>
        <a href="#Topics">Topics</a>
        <a href="#Country">Country</a>
        <a href="#Region">Region</a>
        <a href="#Database Info">Database Info</a>
      </div>
  )
}
export default SideMenu;