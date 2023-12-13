export const styles = {
  navParentContainer: {
    width: "100%",
    border: "4px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: { xs: "90px", md: "100px", lg: "160px" },
  },

  navChildContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "4px solid red",
    height: { xs: "90px", md: "100px", lg: "160px" },
  },

  left: {
    display: "flex",
    alignItems: "center",
    // border: "4px solid red",
  },

  navIcon: {
    width: { xs: "55px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
    height: { xs: "55px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
    cursor: "pointer",
  },

  navLinks: {
    display: { xs: "none", sm: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: { sm: "30px", md: "40px", lg: "50px", xl: "100px" },
    marginRight: "auto",
    // border: "1px solid green",
    marginLeft: { sm: "30px", lg: "60px", xl: "100px" },
  },

  navLink: {
    fontSize: { xs: "16px", lg: "25px", xl: "34px" },
    background: "-webkit-linear-gradient(90deg,#813E3B 40%,#FC766A  60%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "600",
    cursor: "pointer",
    fontFamily: "Roboto",
    ": hover": {
      borderBottom: { xs: "0px", sm: "4px solid green" },
      border: { xs: "2px solid green", sm: "none" },
      padding: { xs: "15px 0px", sm: "0px" },
    },
  },

  quizText: {
    color: "#de5d4b",
    fontSize: "40px",
    textAlign: "center",
    fontWeight: "700",
  },

  rightLogoImg: {
    width: { xs: "55px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
    height: { xs: "55px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
    borderRadius: "100%",
    cursor: "pointer",
  },

  navbarSmall: {
    display: { xs: "block", sm: "none" },
    marginLeft: "auto",
    marginRight: "10px",
  },

  icon: {
    width: "30px",
    height: "30px",
  },

  navLinksSmall: {
    width: "100%",
    display: { xs: "block", sm: "none" },
    background: "rgb(255, 255, 225, 10)",
    boxShadow: "0 0 30px -10px #000",
    // border: "2px solid green",
    marginTop: "0px",
    boxSizing: "border-box",
    padding: "40px 0px",
    position: "absolute",
    top: "90px",
    right: "0%",
    left: "0%",
    gap: "10px",
  },

  navLinksSmallChild: {
    // border: "2px solid green",
    display: "flex",
    flexDirection: "column",
    alignItems: "strech",
    gap: "30px",
    width: "90%",
    margin: "auto",
    // marginTop: "30px",
    paddingLeft: "10px",
    boxSizing: "border-box",
  },
};
