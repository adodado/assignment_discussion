import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useReduxCart from "../../hooks/useReduxCart";
import useReduxArticles from "../../hooks/useReduxArticles";
import axios from "axios";
import axiosRetry from "axios-retry";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.common.black}`,
    padding: theme.spacing(2),
  },
  heading: {
    textTransform: "capitalize",
    marginBottom: theme.spacing(3),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    textTransform: "capitalize",
  },
  checkoutBtn: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: "#003399",
    color: theme.palette.common.white,
    height: 40,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#002369",
    },
  },
}));
interface SaleSummaryProps {
  setProcessingSale(value: boolean): void;
}
const SaleSummary: React.FC<SaleSummaryProps> = ({ setProcessingSale }) => {
  const classes = useStyles();
  const history = useHistory();
  const { cart, clearCart } = useReduxCart();
  const { articles, getAllArticles } = useReduxArticles();

  const handleCheckout = async () => {
    setProcessingSale(true);
    let orderedProducts: string[] = [];
    for (const item of cart) {
      if (!orderedProducts.includes(item.id)) {
        const amountSold = cart.filter((c) => c.id === item.id).length;
        const productInformation = {
          productId: item.id,
          amountSold,
        };
        orderedProducts.push(item.id);

        axiosRetry(axios, { retries: 10 });
        await axios
          .post("http://localhost:7000/sales/", productInformation)
          .catch((err) => {
            console.error(err);
          });
        for (const article of item.articles) {
          await axios
            .patch("http://localhost:7000/articles/" + article.id, {
              name: articles!.find((item) => item.id === article.id)!.name,
              amountToSubtract: article.amountRequired,
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }
    }
    getAllArticles();
    clearCart();
    history.push("/");
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
          <Typography
            role="sale-summary-product-quantity"
            variant="button"
            style={{
              textTransform: "capitalize",
            }}
          >
            {cart !== undefined && cart.length !== 0 ? cart.length : 0} Products
          </Typography>
        </Grid>
      </Grid>
      <Button
        className={classes.checkoutBtn}
        title="sale-summary-order-checkout"
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
