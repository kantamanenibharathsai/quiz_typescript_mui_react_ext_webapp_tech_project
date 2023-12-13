import pink from "@mui/material/colors/pink";

const styles = {
  mainBox: {
    width: "100%",
    border: "3px solid green",
  },

  questionsTime: {
    fontFamily: "'Inter', sans-serif",
    fontSize: { xs: "17px", sm: "23px", md: "30px" },
    fontWeight: "800",
    textAlign: "end",
    color: "#000000",
    mb: 4,
    border: "3px solid green",
  },

  allQuestionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    border: "4px solid yellow",
  },

  questionsBox: {
    display: "flex",
    border: "3px solid black",
    flexDirection: "column",
    gap: "10px",
  },

  questionsText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: { xs: "15px", sm: "23px", md: "30px" },
    fontWeight: "800",
    color: "#000000",
  },
  formControlLabel: {
    display: "flex",
    justifyContent: "space-between",
    ml: 0,
  },

  radioInput: {
    color: pink[800],
    "&.Mui-checked": {
      color: pink[600],
    },
  },

  optionsText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: { xs: "13px", sm: "21px", md: "26px" },
    fontWeight: "800",
    color: "#000000",
  },

  submitBtnBox: {
    display: "flex",
    justifyContent: "flex-end",
    mt: 6,
    mb: 6,
  },

  commonButton: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "30px",
    fontWeight: "800",
    lineHeight: "36px",
    color: "#FFFFFF",
    textTransform: "none",
    background: "linear-gradient( #fc766a 28%, #783937 )",
    borderRadius: "15px",
    width: "250px",
  },
};

export default styles;
