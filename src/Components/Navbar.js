/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Logo from "../Assests/Logo.svg";
import RootOne from "../Assests/images/rootone_circle.png";
// import RootOneLogo from "../Assests/images/rootoneai_logo.jpeg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t, i18n } = useTranslation();

  // 현재 언어를 확인하여 버튼 텍스트 변경
  const currentLanguage = i18n.language;
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ko" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about",
    },
    // {
    //   text: "Testimonials",
    //   icon: <CommentRoundedIcon />,
    // },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
    // {
    //   text: "Cart",
    //   icon: <ShoppingCartRoundedIcon />,
    // },
  ];
  return (
    <nav>
      <div className="nav-logo-section">
        <div className="nav-logo-layer">
          <img src={RootOne} alt="" />
        </div>
        <div className="nav-logo-title">{t("navbarRootOneAi")}</div>
        {/* <div className="header-logo-section-columns">
          <span>Have fun and do good</span>
          <span>then the fortune will come.</span>
        </div> */}
      </div>
      {/* <div className="navbar-header">RootoneAi</div> */}

      <div className="navbar-links-container">
        <Link to="/">{t("navbarHome")}</Link>
        <Link to="/contact">{t("navbarContact")}</Link>
        <Link to="/about">{t("navbarAbout")}</Link>
        <Link to="/support">{t("navbarSupport")}</Link>
        <span onClick={toggleLanguage}>한/A</span>
        {/* <button
          // className="primary-button-translate"
          // style={{
          //   backgroundColor: "transparent",
          //   color: "black",
          //   fontSize: "16px",
          //   borderRadius: "5px",
          //   border: "none",
          //   cursor: "pointer",
          // }}
          onClick={toggleLanguage}
        >
          한/A
        </button> */}
        {/* <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a> */}
        {/* <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button> */}
      </div>

      <div className="navbar-menu-container">
        <div className="language-menu-container">
          <span onClick={toggleLanguage}>한/A</span>
        </div>
        <HiOutlineBars3
          onClick={() => {
            console.log("메뉴 클릭....");
            setOpenMenu(true);
          }}
        />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
