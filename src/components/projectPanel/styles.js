import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  panelContainer: {
    [theme.breakpoints.down("xs")]: {
      order: 5,
    },
  },
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
  projectContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& .project-link": {
      fontStyle: "italic",
    },
  },
  projectTitle: {
    fontSize: "17px !important",
    "& .project-tools": {
      color: "rgb(233, 132, 87)",
    },
    "& .project-link": {
      cursor: "pointer",
    },
  },
}));
