import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className=" amazon-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className ="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionline1">Hello,Sign in</span>
          <span className="header_optionline2">Accounts & Lists</span>
        </div>
        <div className="header_option">
          <span className="header_optionline1">Returns</span>
          <span className="header_optionline2">& Orders</span>
        </div>        
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="item_count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
