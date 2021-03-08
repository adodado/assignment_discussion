import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useReduxCart from "../../hooks/useReduxCart";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.common.black}`,
    padding: theme.spacing(2),
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },

  checkoutBtn: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: "white",
    fontWeight: "bold",
    border: `1px solid ${theme.palette.common.black}`,

    "&:hover": {
      backgroundColor: "#eee",
    },
  },
}));

const SaleSummary = () => {
  const classes = useStyles();
  const { cart } = useReduxCart();

  const handleCheckout = () => {
    //TODO: Write hook for sale checkout.
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.heading}>
            Order Summary
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">
            {cart !== undefined && cart.length !== 0 ? cart.length : 0} Products
          </Typography>
        </Grid>
      </Grid>
      <Button
        className={classes.checkoutBtn}
        variant="contained"
        color="default"
        fullWidth
        onClick={handleCheckout}
      >
        Complete
      </Button>
    </>
  );
};

export default SaleSummary;
