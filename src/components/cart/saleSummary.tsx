import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useReduxCart from "../../hooks/useReduxCart";
import useReduxArticles from "../../hooks/useReduxArticles";
import axios from "axios";
import axiosRetry from "axios-retry";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../reducers/productReducer";
import { IArticle } from "../../reducers/articleReducer";

const { REACT_APP_API_BASE_URL } = process.env;

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

async function updateMultipleArticles(cart: IProduct[], articles: IArticle[]) {
  const articlesToUpdate: IArticle[] = [];
  cart.forEach((item) => {
    for (const article of item.articles) {
      if (!articlesToUpdate.some((item) => item.id === article.id)) {
        const art = articles!.find((item) => item.id === article.id);
        if (art) {
          articlesToUpdate.push({
            id: art.id,
            name: art.name,
            amountInStock: art.amountInStock - article.amountRequired,
          });
        }
      } else {
        const art = articlesToUpdate.find((item) => item.id === article.id);
        if (art) {
          const index = articlesToUpdate!.findIndex(
            (item) => item.id === article.id
          );
          articlesToUpdate[index] = {
            id: art.id,
            name: art.name,
            amountInStock: art.amountInStock - article.amountRequired,
          };
        }
      }
    }
  });
  if (articlesToUpdate.length > 0) {
    axiosRetry(axios, { retries: 5 });
    await axios
      .patch(REACT_APP_API_BASE_URL + "articles/", articlesToUpdate)
      .catch((err) => {
        console.error(err);
      });
  }
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

        axiosRetry(axios, { retries: 5 });
        await axios
          .post(REACT_APP_API_BASE_URL + "sales/", productInformation)
          .catch((err) => {
            console.error(err);
          });

        orderedProducts.push(item.id);
      }
    }
    await updateMultipleArticles(cart, articles);
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
