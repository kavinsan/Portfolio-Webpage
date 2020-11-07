import React from "react";

import ContentTitle from "../contentTitle/index";

import PhoneAndroidSharpIcon from "@material-ui/icons/PhoneAndroidSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const ContactsPanel = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.panelContainer}>
      <ContentTitle>Contacts</ContentTitle>
      <div className={classes.contactItem}>
        <PhoneAndroidSharpIcon className="contact-icon" />
        <span className="contact-value">647-896-4103</span>
      </div>
      <div className={classes.contactItem}>
        <MailOutlineIcon className="contact-icon" />
        <span className="contact-value">kavinsan.nesan@gmail.com</span>
      </div>
      <div className={classes.contactItem}>
        <GitHubIcon className="contact-icon" />
        <span className="contact-value">github.com/kavinsan</span>
      </div>
      <div className={classes.contactItem}>
        <LinkedInIcon className="contact-icon" />
        <span className="contact-value">linkedin.com/in/kavinsan</span>
      </div>
    </div>
  );
};

export default ContactsPanel;
