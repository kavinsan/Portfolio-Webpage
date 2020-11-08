import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  App: {
    display: "flex",
    [theme.breakpoints.up("870")]: {
      display: "flex",
      width: "750px",
      margin: "0 auto",
      justifyContent: "center",
    },
  },
  RightPanel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0px 20px 20px 20px",
    backgroundColor: "rgb(229, 227, 232)",
    [theme.breakpoints.down("870")]: {
      display: "none",
    },
  },
  LeftPanel: {
    display: "flex",
    flexDirection: "column",
    borderLeft: "20px solid rgb(64, 58, 72)",
    padding: "0px 20px 20px 20px",
    backgroundColor: "rgb(244, 242, 245)",
    [theme.breakpoints.down("xs")]: {
      borderLeft: "none",
      "& #portfolioBlockContainer": {
        order: "1",
      },
      "& #profileContainer": {
        order: "2",
      },
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
  subLeftEducationPanel: {
    [theme.breakpoints.up("870")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      order: 6,
    },
  },
}));
