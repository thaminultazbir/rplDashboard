import React, { useState } from "react";
import { menuItemsData } from "../menuItemsData";
import {NavSetting} from "./NavSetting";

const Navbar = () => {
    const [expandIndex, setExpandIndex] = useState(null);

    const toggleDropdown = (index) => {
        setExpandIndex(expandIndex === index ? null : index);
    };

    return (
        <div className="nav">
            <div className="menu">
                <p className="title">Main</p>
                <ul>
                    {menuItemsData.map((menu, index) => (
                        <li key={index}>
                            <a href="#/" onClick={() => toggleDropdown(index)}>
                                <i className={`icon ph-bold ph ${menu.icon}`}></i>
                                <span className="text">{menu.title}</span>
                                {menu.arrowIcon && (
                                    <i
                                        className={`arrow icon ph-bold ${menu.arrowIcon} ${
                                            menu.submenu && expandIndex === index ? "rotate" : ""
                                        }`}
                                    ></i>
                                )}
                            </a>
                            {menu.submenu && (
                                <ul
                                    className={`sub-menu ${expandIndex === index ? "open" : ""}`}
                                >
                                    {menu.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <a href="#/">{subItem.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="menu">
                <NavSetting />
            </div>
        </div>
    );
};

export default Navbar;

