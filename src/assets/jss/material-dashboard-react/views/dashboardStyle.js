import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const dashboardStyle = {
  searchInput: {
    [`& fieldset`]: {
      borderRadius: 15,
    },
  },
  logo: {
    alignSelf: "flex-end",
  },
  thumbUpSuccess: {
    color: "green",
  },
  thumbUpDefault: {
    color: "black",
  },
  cardSubmitContainer: {
    justifyContent: "flex-end",
    marginTop: "30PX",
  },
  heading: {
    paddingLeft: "30px",
  },
  card: {
    minHeight: "calc(100vh - 200px)",
  },
  action: {
    marginTop: "30px",
  },
  summary: {
    flexDirection: "row-reverse",
    color: "white",
    background: "blue",
  },
  summaryCause: {
    flexDirection: "row-reverse",
    color: "black",
    // background: "blue"
  },
  summaryIcon: {
    background: "black",
    color: "white",
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  gridItemColumnGap: {
    marginTop: "30px",
  },
  logoContainer: {
    marginTop: "30px",
    justifyContent: "space-evenly",
  },
  gridContainer: {
    justifyContent: "center",
    margin: "0 -15px !important",
    width: "unset",
  },
  fontSize1Rem: {
    fontSize: "0.75rem",
  },
  cardIcon: {
    cursor: "default",
    width: "120px",
    textAlign: "center",
  },
  causeCardHeader: {
    color: "white",
    background: "#E52B50",
  },
  actionCardHeader: {
    background: "#5499C7",
  },
  cardHeader: {
    display: "flex",
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

export default dashboardStyle;
