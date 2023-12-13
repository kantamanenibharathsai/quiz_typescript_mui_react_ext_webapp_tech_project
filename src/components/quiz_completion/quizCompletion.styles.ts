const quizCompletionStyles = {
  quizCompletionPageContainer: {
    width: "100%",
    border: "3px solid red",
    height: "100vh",
    paddingTop: { xl: "20px" },
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: { xs: "50px", sm: "100px" },
  },

  bodyContainer: {
    display: "flex",
    alignSelf: "center",
    width: "100%",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "space-between" },
    alignItems: { md: "flex-start" },
    border: "3px solid green",
    gap: { xs: "25px" },
  },

  textContainer: {
    // border: "2px solid red",
    width: { xs: "100%" },
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },

  quizTimePara: {
    fontFamily: "Roboto",
    fontSize: { xs: "18px", sm: "23px", md: "36px" },
    fontWeight: "500",

    background: "-webkit-linear-gradient(90deg,#813E3B 40%,#FC766A  60%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    border: "3px solid red",
    alignItems: "center",
  },

  button: {
    padding: { xs: "4px 20px", sm: "4px 33px" },
    color: "white",
    fontWeight: 900,
    fontSize: { xs: "10px", sm: "20px" },
    borderRadius: 2,
    bgcolor: "#0093E9",
    backgroundImage: "linear-gradient(180deg,#FC766A 25%, #813E3B 100%)",
    outline: "none",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};

export default quizCompletionStyles;
