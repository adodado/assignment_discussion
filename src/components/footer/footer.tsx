import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "1rem",
    marginTop: 100,

    "& p": {
      color: theme.typography.body2.color,
      fontSize: "12px",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "capitalize",
      lineHeight: "1rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>Copyright © 2021</p>
    </footer>
  );
};
export default Footer;
