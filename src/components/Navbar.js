import React from 'react';

import logo from '../icons/logoMAK2.svg';
import ToggleButton from "./ToggleButton";

let toggleButtonOpened = false;

const closeAllDropDown = () => {
  const dropdownContents = document.querySelectorAll(".dropdown-content");
  dropdownContents.forEach( (dropdownContent) => {
    dropdownContent.classList.remove("dropdown-content-active");
  });
}

const Navbar = () => {
  const toggleButtonClicked = () => {
    const nav_items = document.querySelector(".navbar .nav-items");
    nav_items.classList.toggle("nav-items-active");
    const mainPage = document.querySelector(".mainPage");
    if (!toggleButtonOpened) {
      const styles = window.getComputedStyle(nav_items);
      const height = parseFloat(styles['height']) ;
      mainPage.style.transform = "translateY(" + height + "px)";
    }
    else {
      mainPage.style.transform = "translateY(0)";
    }
    toggleButtonOpened = !toggleButtonOpened;
  }
  const dropDownClicked = (e) => {
    if (e.target.tagName === "DIV") {
      const dropdownContent = e.target.querySelector(".dropdown-content");
      const dropdownContents = document.querySelectorAll(".dropdown-content");
      dropdownContents.forEach((content) => {
        if (content !== dropdownContent) {
          content.classList.remove("dropdown-content-active");
        } else {
          content.classList.toggle("dropdown-content-active");
        }
      });
      if (toggleButtonOpened) {
        const nav_items = document.querySelector(".navbar .nav-items");
        const styles = window.getComputedStyle(nav_items);
        const height = parseFloat(styles['height']) ;
        const mainPage = document.querySelector(".mainPage");
        mainPage.style.transform = "translateY(" + height + "px)";
      }
    }
  }

  const navItemClicked = () => {
    closeAllDropDown();
    if (toggleButtonOpened) {
      const nav_items = document.querySelector(".navbar .nav-items");
      const styles = window.getComputedStyle(nav_items);
      const height = parseFloat(styles['height']) ;
      const mainPage = document.querySelector(".mainPage");
      mainPage.style.transform = "translateY(" + height + "px)";
    }
  }



  const listenMediaChanges = () => {
    const mql = window.matchMedia('(max-width: 768px)');
    function mediaChanged(e) {
      if (!mql.matches && toggleButtonOpened) {
        toggleButtonOpened = false;
        const nav_items = document.querySelector(".navbar .nav-items");
        nav_items.classList.remove("nav-items-active");
        const toggle_btn = document.querySelector(".toggle-btn");
        toggle_btn.classList.remove("toggle-btn-open-left");
        const mainPage = document.querySelector(".mainPage");
        mainPage.style.transform = "translateY(0)";
      }
      closeAllDropDown();
    }
    //mql.addEventListener("change",mediaChanged);    // not supported in Safari
    mql.addListener(mediaChanged);
  }

  listenMediaChanges();

  return (
    <div className="navbar">
      <div className="nav-brand"><img src={logo} alt="MAK" /></div>
      <div className="nav-items">
        <a className="nav-item" onClick={navItemClicked} href="#">Ana Sayfa</a>
        <a className="nav-item" onClick={navItemClicked} href="#">About</a>
        <div onClick={dropDownClicked} className="nav-item" id={"div1"}  >Menu 1 &#9662;
          <div className="dropdown-content" id={"inner-div1"}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link To a Place</a>
          </div>
        </div>
          <div onClick={dropDownClicked} className="nav-item" id={"div2"}>Menu 2 &#9662;
            <div className="dropdown-content"id={"inner-div2"}>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
          </div>
        </div>
        <a className="nav-item" onClick={navItemClicked} href="#">Content</a>
      </div>
      <div className="nav-avatar">
        <div className="nav-avatar-text">M</div>
      </div>
      <div className="nav-btn">
        <ToggleButton id={"toggleButtonNavbar"} toggleClicked={toggleButtonClicked}/>
      </div>
    </div>
  );
};

export  {Navbar,closeAllDropDown};
