import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  panelContainer: {},
  content: {
    fontFamily: "Anaheim, sans-serif",
    "& h2": {
      fontSize: "20px",
      paddingBottom: "10px",
    },
    "& > ul": {
        paddingBottom: "20px"
    }
  },
}));
