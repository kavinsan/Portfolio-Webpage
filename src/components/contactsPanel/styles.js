import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  panelContainer: {
    [theme.breakpoints.down("870")]: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "20px",
      "& .title-container": {
        display: "none",
      },
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      padding: "20px 0px",
    },
  },
  contactItem: {
    display: "flex",
    padding: "5px 0px",
    "& .contact-icon": {
      color: "rgb(233, 132, 87)",
      paddingRight: "20px",
      transition: "all 0.3s linear",
      // cursor: "pointer",
    },
    "& .MuiSvgIcon-root": {
      width: "30px",
      height: "30px",
    },
    "& .contact-value": {
      alignSelf: "center",
      fontFamily: "Anaheim, sans-serif",
    },
    "& .contact-icon:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("870")]: {
      width: "240px",
      "& .contact-value": {
        color: "white",
      }
    }
  },
}));
