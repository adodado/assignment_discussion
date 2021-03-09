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
      <Container className={classes.container}>
        <Grid
          container
          spacing={3}
          style={{ display: "flex", flexFlow: "row" }}
        >
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
              style={{ marginTop: 20 }}
            >
              {product.articles.map((article) => (
                <div key={article.id} style={{ width: "200px" }}>
                  <Grid item xs={6}>
                    <Typography variant="button">
                      {
                        articles!.find(
                          (item: { id: string }) => item.id === article.id
                        )!.name
                      }
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="button">
                      Qty:{article.amountRequired}
                    </Typography>
                  </Grid>
                </div>
              ))}
            </Grid>
            <Grid item container xs={12} md={6} style={{ margin: "0 auto" }}>
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<AddShoppingCartIcon />}
                onClick={handleOnClick}
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
