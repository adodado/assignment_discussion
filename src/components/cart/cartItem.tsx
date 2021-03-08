import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import useReduxCart from "../../hooks/useReduxCart";
import { IProduct } from "../../reducers/productReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 200,
    width: "100%",
    marginBottom: "5px",
    border: `1px solid ${theme.palette.common.black}`,
    position: "relative",
    backgroundColor: "#64B5F7",

    [theme.breakpoints.only("xs")]: {
      border: "none",
      backgroundColor: theme.palette.background.default,
      minHeight: 150,
    },
  },
  media: {
    width: "100%",
    height: "100%",
    objectFit: "contain",

    [theme.breakpoints.only("xs")]: {
      height: "60%",
    },
  },
  content: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  responsiveText: {
    color: "black",
    fontSize: "1.2rem",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  blackOnXS: {
    [theme.breakpoints.down("xs")]: {
      color: theme.palette.text.primary,
      fontWeight: "bolder",
    },
  },

  cancelBtn: {
    position: "absolute",
    fontSize: "2rem",
    right: 2,
    top: 2,
  },
}));

type CartItemProps = {
  product: IProduct;
};

const CartItems: FC<CartItemProps> = ({ product }) => {
  const classes = useStyles();
  const { removeProduct } = useReduxCart();

  const handleOnclick = () => {
    removeProduct(product);
  };

  return (
    <Grid container className={classes.root}>
      <IconButton
        color="inherit"
        className={classes.cancelBtn}
        onClick={handleOnclick}
      >
        <CancelIcon />
      </IconButton>
      <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          title={product.name}
          component="img"
        />
      </Grid>

      <Grid item xs={8} className={classes.content}>
        <div>
          <Typography
            variant="h6"
            component="h3"
            color="textSecondary"
            className={classes.responsiveText}
          >
            NAME: {product.name}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
export default CartItems;
