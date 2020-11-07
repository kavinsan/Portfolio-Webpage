import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  panelContainer: {},
  content: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Anaheim, sans-serif",
    "& #graduation-year": {
      fontStyle: "italic",
    },
    "& span": {
      paddingBottom: "5px"
    }
  },
}));
