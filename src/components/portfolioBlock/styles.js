import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  portfolioBlockRoot: {
    position: "relative",
    left: "-40px",
    [theme.breakpoints.down("xs")]: {
      left: "-20px",
    },
  },
  portfolioBlockContainer: {
    display: "flex",
    width: "510px",
    borderLeft: "20px rgb(233, 132, 87) solid",
    backgroundColor: "rgb(64, 58, 72)",
    [theme.breakpoints.down("870")]: {
      display: "flex",
      width: "calc(100% + 40px)",
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      borderLeft: "none",
    },
  },
  profileImage: {
    width: "150px",
    height: "150px",
    margin: "20px",
    borderRadius: "9999999999px",
    border: "5px solid rgb(233, 132, 87)",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
      order: 2,
    },
  },
  portfolioTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
      order: 1,
    },
    "& #portfolio-name": {
      fontFamily: '"Jura", sans-serif',
      fontSize: "50px",
      padding: "10px 0px",
      color: "rgb(233, 132, 87)",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        fontSize: "40px",
      },
    },
    "& #portfolio-occupation": {
      fontFamily: '"Comfortaa", cursive',
      fontSize: "25px",
      color: "white",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  },
  portfolioBlockLeft: {
    backgroundColor: "rgb(233, 132, 87)",
    width: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "0px",
    },
  },
  portfolioBlockMiddle: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: "0 auto",
      height: `${theme.props.height}px`,
      justifyContent: "space-evenly",
    },
  },
  portfolioBlockBorder: {
    backgroundColor: "rgb(244,242,245)",
    height: "40px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  subLeftPanel: {
    [theme.breakpoints.up("870")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      order: 3,
    },
  },
}));
