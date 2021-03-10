import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import { Hidden, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import useReduxCart from "../../hooks/useReduxCart";

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
    color: "#003399",
    fontSize: "2rem",
  },
  dot: {
    display: "flex",
  },
  cartItemText: {
    color: "#003399",
    fontSize: "14px",
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
  const { cart } = useReduxCart();

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

        <Hidden mdDown>
          <div className={classes.dot}>
            <ShoppingCartIcon className={classes.icon} />
            <div>
              <Typography variant="h6" className={classes.cartItemText}>
                {cart !== undefined && cart.length !== 0 ? cart.length : 0}
              </Typography>
            </div>
          </div>
        </Hidden>
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
