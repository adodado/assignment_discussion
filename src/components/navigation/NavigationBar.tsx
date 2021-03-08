import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2),
    position: "sticky",
    top: 0,
    zIndex: theme.zIndex.appBar,
    background: "whitesmoke",

    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },

    "& p": {
      fontSize: "30px",
      [theme.breakpoints.only("xs")]: {
        fontSize: "6vw",
      },
    },
  },
  rightContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "space-between",
    },
  },
  linkscontainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navLink: {
    margin: theme.spacing(3),
    textDecoration: "none",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: "20px",
    "&:hover": {
      cursor: "pointer",
      color: "#003399",
    },
  },
  iconButton: {
    position: "relative",
  },
  icon: {
    color: theme.palette.common.black,
  },
  dot: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: theme.palette.info.dark,
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItemText: {
    color: theme.palette.common.white,
    fontSize: "14",
    fontWeight: "bold",
  },
  menuButton: {
    color: "#000",
    marginRight: "0px",
  },
}));

type NavigationBarProps = {
  onMenuClickHandler: () => void;
};

const NavigationBar: FC<NavigationBarProps> = ({ onMenuClickHandler }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.navigationContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.linkscontainer}>
          <NavLink to="/" className={classes.navLink}>
            Products
          </NavLink>
          <NavLink to="/articles" className={classes.navLink}>
            Articles
          </NavLink>
          <NavLink to="/checkout" className={classes.navLink}>
            Checkout
          </NavLink>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            onClick={() => history.push("/checkout")}
          >
            <ShoppingCartIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.menuButton}
            edge="end"
            aria-label="menu"
            onClick={onMenuClickHandler}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
      </div>
    </div>
  );
};
export default NavigationBar;
