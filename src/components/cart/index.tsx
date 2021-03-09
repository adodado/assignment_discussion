import React from "react";
import CartItemCard from "./cartItem";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import SaleSummary from "./saleSummary";
import useReduxCart from "../../hooks/useReduxCart";
import useReduxArticles from "../../hooks/useReduxArticles";
import { IProduct } from "../../reducers/productReducer";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 10,
    margin: theme.spacing(2, "auto"),
    marginTop: 100,
  },
}));

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const CartItemList = () => {
  const [processingSale, setProcessingSale] = useState(false);
  const classes = useStyles();
  const { cart } = useReduxCart();
  const { articles } = useReduxArticles();
  if (processingSale) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress size={100} style={{ marginTop: 100 }} />
      </div>
    );
  } else {
    return (
      <>
        {cart !== undefined && cart.length > 0 ? (
          <div className={classes.container}>
            <Container className={classes.root}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8} style={{ padding: 10 }}>
                  {cart.map((product: IProduct) => (
                    <CartItemCard
                      key={uuidv4()}
                      product={product}
                      articles={articles}
                    />
                  ))}
                </Grid>
                <Grid item xs={12} md={4} style={{ padding: 10 }}>
                  <SaleSummary setProcessingSale={setProcessingSale} />
                </Grid>
              </Grid>
            </Container>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Typography
              style={{ fontWeight: "bold", fontSize: "25px" }}
              variant="body1"
              component="p"
            >
              Basket is empty
            </Typography>
          </div>
        )}
      </>
    );
  }
};

export default CartItemList;
