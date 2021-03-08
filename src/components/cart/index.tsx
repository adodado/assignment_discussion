import React from "react";
import CartItemCard from "./cartItem";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import SaleSummary from "./saleSummary";
import useReduxCart from "../../hooks/useReduxCart";
import useReduxArticles from "../../hooks/useReduxArticles";
import { IProduct } from "../../reducers/productReducer";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 10,
    margin: theme.spacing(2, "auto"),
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: theme.spacing(4),
  },

  total: {
    marginBottom: theme.spacing(4),
  },
}));

const CartItemList = () => {
  const classes = useStyles();
  const { cart } = useReduxCart();
  const { articles } = useReduxArticles();

  return (
    <>
      {cart !== undefined && cart.length > 0 ? (
        <div className={classes.container}>
          <Container className={classes.root}>
            <Typography variant="h6" component="h6" className={classes.heading}>
              Your basket
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8} style={{ padding: 10 }}>
                {cart.map((product: IProduct) => (
                  <CartItemCard
                    key={product.id}
                    product={product}
                    articles={articles}
                  />
                ))}
              </Grid>
              <Grid item xs={12} md={4} style={{ padding: 10 }}>
                <SaleSummary />
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
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
};

export default CartItemList;
