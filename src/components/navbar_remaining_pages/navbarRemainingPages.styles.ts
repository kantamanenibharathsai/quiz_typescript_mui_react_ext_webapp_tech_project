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
    width: "100%",
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

  quizHeading: {
    color: "#de5d4b",
    fontSize: "55px",
    fontFamily: "Roboto",
    fontWeight: "700",
  },

  rightLogoImg: {
    width: { xs: "55px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
    height: { xs: "55px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
    borderRadius: "100%",
    cursor: "pointer",
  },

  icon: {
    width: "30px",
    height: "30px",
  },
};
