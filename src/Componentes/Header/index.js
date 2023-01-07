import React from "react";
import Nike from '../../images/Nike.jpg'

export const Header =() => {
    return(
      <header>       
        <a href="#">
            <div className="logo">
                <img src={Nike} alt="" width="150px"/>
            </div>
        </a>

        <ul>
            <li>
                <a href="#">Inicio</a>
            </li>

            <li>
                <a href="#">Productos</a>
            </li>
        </ul>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item__total">0</span>
        </div>
      </header>
    )
}