import React from 'react';

import logo from '../icons/logoMAK2.svg';
import ToggleButton from "./ToggleButton";

let toggleButtonOpened = false;

const Navbar = () => {
  const closeAllDropDown = () => {
    const dropdown = document.querySelectorAll(".nav-item");
    dropdown.forEach((dd) => {
      const dropdownContent = dd.querySelector(".dropdown-content");
      if (dropdownContent) {
        dropdownContent.classList.remove("dropdown-content-active");
      }
    })
  }
  const toggleClicked = () => {
    const nav_links = document.querySelector(".navbar .nav-items");
    nav_links.style.transition = "transform 400ms ease-in-out";
    nav_links.classList.toggle("nav-items-active");
    const styles = window.getComputedStyle(nav_links);
    const height = parseFloat(styles['height']) ;
    const mainPage = document.querySelector(".mainPage");


    if (!toggleButtonOpened) {
      mainPage.style.transform = "translateY(" + height + "px)";
    }
    else {
      mainPage.style.transform = "translateY(0)";
    }
    toggleButtonOpened = !toggleButtonOpened;

  }
  const mql = window.matchMedia('(max-width: 720px)');
  function mediaChanged(e) {
    console.log(mql.matches);
    if (!mql.matches && toggleButtonOpened) {
      console.log("Matched");
      toggleButtonOpened = false;
      const nav_links = document.querySelector(".navbar .nav-items");
      nav_links.classList.remove("nav-items-active");
      const toggle_btn = document.querySelector(".toggle-btn");
      toggle_btn.classList.remove("toggle-btn-open-left");
      const mainPage = document.querySelector(".mainPage");
      mainPage.style.transform = "translateY(0)";
      nav_links.style.transition = "none";
    }
    closeAllDropDown();
  }
  //mql.addEventListener("change",mediaChanged);    // not supported in Safari
  mql.addListener(mediaChanged);

  const dropDownClicked = (e) => {
    if (e.target.tagName === "DIV") {
      console.log(e.target.tagName);
      const dropdownContents = document.querySelectorAll(".dropdown-content");
      dropdownContents.forEach((elem) => {
        const dropdownContent = e.target.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("dropdown-content-active");
        if (elem !== dropdownContent) {
          elem.classList.remove("dropdown-content-active");
        } else {
          elem.classList.toggle("dropdown-content-active");
        }
      });
      const nav_links = document.querySelector(".navbar .nav-items");
      const styles = window.getComputedStyle(nav_links);
      const height = parseFloat(styles['height']) ;
      const mainPage = document.querySelector(".mainPage");
      if (toggleButtonOpened) {
        mainPage.style.transform = "translateY(" + height + "px)";
      }

    }
  }

  const menuClicked = () => {
    console.log("Menu Clicked");

    closeAllDropDown();
    const nav_links = document.querySelector(".navbar .nav-items");
    const styles = window.getComputedStyle(nav_links);
    const height = parseFloat(styles['height']) ;
    const mainPage = document.querySelector(".mainPage");
    if (toggleButtonOpened) {
      mainPage.style.transform = "translateY(" + height + "px)";
    }
  }

  return (
    <div className="navbar">
      <div className="nav-brand"><img src={logo} alt="MAK" /></div>
      <div className="nav-items">
        <a className="nav-item" onClick={menuClicked} href="#">Ana Sayfa</a>
        <a className="nav-item" onClick={menuClicked} href="#">About</a>
        <div onClick={dropDownClicked} className="nav-item "  >Menu 1 &#9662;
          <div className="dropdown-content">
            <a href="#">Link   1</a>
            <a href="#">Link2</a>
            <a href="#">Link To a Place</a>
          </div>
        </div>
          <div onClick={dropDownClicked} className="nav-item "  >Menu 2 &#9662;
            <div className="dropdown-content">
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
          </div>
        </div>
        <a className="nav-item" onClick={menuClicked} href="#">Content</a>
      </div>
      <div className="nav-avatar">
        <div className="nav-avatar-text">M</div>
      </div>
      <div className="nav-btn">
        <ToggleButton id={"toggleButtonNavbar"} toggleClicked={toggleClicked}/>
      </div>
    </div>
  );
};

export default Navbar;
