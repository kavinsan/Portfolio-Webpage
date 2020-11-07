import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  panelContainer: {},
  contactItem: {
    display: "flex",
    padding: "5px 0px",
    "& .contact-icon": {
      color: "rgb(233, 132, 87)",
      paddingRight: "20px",
      transition: "all 0.3s linear",
      cursor: "pointer"
    },
    "& .MuiSvgIcon-root": {
      width: "30px",
      height: "30px",
    },
    "& .contact-value": {
      alignSelf: "center",
      fontFamily: "Anaheim, sans-serif"
    },
    "& .contact-icon:hover": {
      transform: "scale(1.05)",
    },
  },
}));
