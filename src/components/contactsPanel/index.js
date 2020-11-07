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
  const classes = useStyles();

  return (
    <div className={classes.panelContainer}>
      <ContentTitle>Contacts</ContentTitle>
      <div className={classes.contactItem}>
        <PhoneAndroidSharpIcon className="contact-icon" />
        <a className="contact-value">647-896-4103</a>
      </div>
      <div className={classes.contactItem}>
        <MailOutlineIcon className="contact-icon" />
        <a className="contact-value">kavinsan.nesan@gmail.com</a>
      </div>
      <div className={classes.contactItem}>
        <GitHubIcon className="contact-icon" />
        <a className="contact-value">github.com/kavinsan</a>
      </div>
      <div className={classes.contactItem}>
        <LinkedInIcon className="contact-icon" />
        <a className="contact-value">linkedin.com/in/kavinsan</a>
      </div>
    </div>
  );
};

export default ContactsPanel;
