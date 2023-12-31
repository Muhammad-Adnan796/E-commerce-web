import React, { useEffect, useState } from "react";
import css from "./Header.module.css";
import Logo from "../../Assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

function Header() {
  const [ShowMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };

  useEffect(() => {
    const handle = () => {
      setShowMenu(false);
    };
    document.addEventListener("mousedown", handle);
  });
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>amazon</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        <ul
          className={css.menu}
          style={{ display: ShowMenu ? "inherit" : "" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
}

export default Header;
