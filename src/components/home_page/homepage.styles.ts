const homePageStyles = {
  homepageContainer: {
    width: "100%",
    border: "3px solid red",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: { xs: "50px", sm: "90px" },
    paddingTop: { xl: "20px" },
  },

  bodyContainer: {
    display: "flex",
    alignSelf: "center",
    width: "90%",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "space-between" },
    alignItems: { md: "flex-start" },
    // border: "3px solid green",
    gap: { xs: "25px" },
  },

  quizTimeheading: {
    fontFamily: "Roboto",
    fontSize: { xs: "40px", sm: "50px", md: "60px" },
    fontWeight: "700",
    background: "-webkit-linear-gradient(90deg,#813E3B 40%,#FC766A  60%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  textContainer: {
    // border: "2px solid red",
    width: { xs: "100%", md: "70%" },
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  quizTimePara: {
    fontFamily: "Roboto",
    fontSize: { xs: "18px", sm: "23px", md: "26px" },
    fontWeight: "500",
    color: "black",
  },

  button: {
    padding: "4px 33px",
    color: "white",
    fontWeight: 900,
    fontSize: "20px",
    borderRadius: 2,
    bgcolor: "#0093E9",
    backgroundImage: "linear-gradient(180deg,#FC766A 25%, #813E3B 100%)",
    outline: "none",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};

export default homePageStyles;
