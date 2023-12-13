import { useState } from "react";
import { styles } from "./navbarRemainingPages.styles";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import navLogo from "../../assets/navLogo.png";
import CloseIcon from "@mui/icons-material/Close";

const NavBarRemainingpages = () => {
  //   const [isHamburgerIconClicked, setIsHamburgerIconClicked] =
  //     useState<boolean>(false);

  //   const iconEventHandler = () => {
  //     setIsHamburgerIconClicked((prevStateValue: boolean) => !prevStateValue);
  //   };

  return (
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
        <Typography component="h1" sx={styles.quizHeading}>
          Quiz
        </Typography>

        <CloseIcon sx={styles.navIcon} />
      </Box>
    </Box>
  );
};

export default NavBarRemainingpages;
