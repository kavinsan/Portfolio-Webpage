import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  panelContainer: {},
  content: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Anaheim, sans-serif",
    paddingBottom: "40px",
    "& #graduation-year": {
      fontStyle: "italic",
    },
    "& span": {
      paddingBottom: "5px"
    }
  },
}));
