import { useState } from "react";
import { styles } from "./homePageNavbar.styles";
import { NavLink } from "react-router-dom";
import navMan from "../../assets/navMan.png";
import { Box } from "@mui/material";
import navLogo from "../../assets/navLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [isHamburgerIconClicked, setIsHamburgerIconClicked] =
    useState<boolean>(false);

  const iconEventHandler = () => {
    setIsHamburgerIconClicked((prevStateValue: boolean) => !prevStateValue);
  };

  return (
    <>
      <Box sx={styles.navParentContainer}>
        <Box sx={styles.navChildContainer}>
          <Box sx={styles.left}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={styles.navIcon}
                component="img"
                src={navLogo}
                alt="navIcon"
              ></Box>
            </NavLink>
          </Box>
          <Box sx={styles.navLinks}>
            <Box sx={styles.navLink}>Search</Box>
            <NavLink style={{ textDecoration: "none" }} to="/quizPage">
              <Box sx={styles.navLink}>Quiz</Box>
            </NavLink>
            <Box sx={styles.navLink}>Whiteboard</Box>
            <Box sx={styles.navLink}>About Us</Box>
          </Box>
          <Box sx={styles.navbarSmall}>
            {isHamburgerIconClicked === false ? (
              <MenuIcon sx={styles.icon} onClick={iconEventHandler} />
            ) : (
              <CloseIcon sx={styles.icon} onClick={iconEventHandler} />
            )}
          </Box>
          {/* <Box sx={styles.quizText}>Quiz</Box> */}
          <Box>
            <Box sx={styles.rightLogoImg} component="img" src={navMan}></Box>
          </Box>
        </Box>
      </Box>
      {isHamburgerIconClicked && (
        <Box
          sx={{
            ...styles.navLinksSmall,
            height: isHamburgerIconClicked ? "280px" : "0px",
            overflow: "hidden",
            transition: "height 1.4s ease 0s",
            zIndex: 1,
          }}
        >
          <Box sx={styles.navLinksSmallChild}>
            <Box sx={styles.navLink}>Search</Box>
            <NavLink style={{ textDecoration: "none" }} to="/quizPage">
              <Box sx={styles.navLink}>Quiz</Box>
            </NavLink>
            <Box sx={styles.navLink}>Whiteboard</Box>
            <Box sx={styles.navLink}>About Us</Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default NavBar;
