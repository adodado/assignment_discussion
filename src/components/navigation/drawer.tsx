import React, { FC } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
    backgroundColor: "#eee",
  },
  navLink: {
    textDecoration: "none",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: "20px",

    "&:hover": {
      cursor: "pointer",
      color: theme.palette.common.white,
    },
  },
}));

type RightDrawerProps = {
  open: boolean;
  onClickHandler: () => void;
};

const RightDrawer: FC<RightDrawerProps> = ({ open, onClickHandler }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      classes={{ paper: classes.drawerPaper }}
      onClick={onClickHandler}
    >
      <List>
        <ListItem button onClick={() => history.push("/")}>
          <NavLink to="/" className={classes.navLink}>
            Products
          </NavLink>
        </ListItem>
        <ListItem button onClick={() => history.push("/articles")}>
          <NavLink to="/articles" className={classes.navLink}>
            Articles
          </NavLink>
        </ListItem>
        <ListItem button onClick={() => history.push("/checkout")}>
          <NavLink to="/checkout" className={classes.navLink}>
            Checkout
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default RightDrawer;
