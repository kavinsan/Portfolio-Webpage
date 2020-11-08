import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  panelContainer: {},
  content: {
    fontFamily: "Anaheim, sans-serif",
    [theme.breakpoints.down("870")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
    "& h2": {
      fontSize: "20px",
      paddingBottom: "10px",
    },
    "& div > ul": {
      paddingBottom: "20px",
    },
    "& div": {
      width: "100px",
    }
  },
}));
