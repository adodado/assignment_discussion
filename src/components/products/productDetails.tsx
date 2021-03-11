import React from "react";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useReduxProducts from "../../hooks/useReduxProducts";
import useReduxCart from "../../hooks/useReduxCart";
import useReduxArticles from "../../hooks/useReduxArticles";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(2),
    flexGrow: 10,

    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },
  button: {
    marginTop: theme.spacing(5),
    backgroundColor: "#003399",
    color: theme.palette.common.white,
    height: 40,
    "&:hover": {
      backgroundColor: "#002369",
    },
  },
  name: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  gridContainer: { display: "flex", flexFlow: "row" },
  articleDiv: { width: "100%", textAlign: "center" },
  topMargin: { marginTop: 20 },
  setWidth200: { width: "200px" },
  noMargin: { margin: "0 auto" },
}));

const ProductDetails = (props: any) => {
  const classes = useStyles();
  const { products } = useReduxProducts();
  const { addProduct } = useReduxCart();
  const { articles } = useReduxArticles();

  const product = products.find((p) => p.id === props.id);
  if (!product) return <p>Product not found</p>;

  const handleOnClick = () => {
    addProduct(product);
  };

  return (
    <div className={classes.contentWrapper}>
      <Container className={classes.container} role={"product-details"}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <img
              className={classes.image}
              src="/images/product-placeholder.jpg"
              alt={product.name}
            />
          </Grid>
          <Grid item xs={12} md={12} container direction="column">
            <Grid item>
              <Typography variant="h4" className={classes.name}>
                {product.name}
              </Typography>
            </Grid>
            <Grid
              item
              container
              justify="center"
              spacing={1}
              className={classes.topMargin}
            >
              <div className={classes.articleDiv}>
                <Typography variant="button" component="h2">
                  Required Articles
                </Typography>
              </div>
              {product.articles.map((article) => (
                <div
                  key={article.id}
                  className={classes.setWidth200}
                  title="product-details-articles-list"
                >
                  <Grid item xs={12}>
                    <Typography variant="button">
                      {
                        articles!.find(
                          (item: { id: string }) => item.id === article.id
                        )!.name
                      }
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="button">
                      Qty:
                      {articles!.find(
                        (item: { id: string }) => item.id === article.id
                      )!.amountInStock > article.amountRequired
                        ? article.amountRequired + " pieces"
                        : article.amountRequired + " (Not available in stock)"}
                    </Typography>
                  </Grid>
                </div>
              ))}
            </Grid>
            <Grid item container xs={12} md={6} className={classes.noMargin}>
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<AddShoppingCartIcon />}
                onClick={handleOnClick}
                disabled={product.articles.some(
                  (article) =>
                    article.amountRequired >
                    articles!.find(
                      (item: { id: string }) => item.id === article.id
                    )!.amountInStock
                )}
                fullWidth
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetails;
