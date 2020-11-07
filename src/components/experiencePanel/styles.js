import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  panelContainer: {},
  content: {
    fontFamily: "Anaheim, sans-serif",
    "& h2": {
      fontSize: "20px",
      paddingBottom: "10px",
    },
    "& > ul": {
      paddingBottom: "20px",
    },
  },
  experienceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "17px !important",
    "& span": {
        paddingBottom: "10px",
    },
    "& .experience-title": {
        fontWeight: "bold"
    }
  },
}));
