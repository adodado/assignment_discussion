import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useReduxProducts from "../../hooks/useReduxProducts";
import useReduxArticles from "../../hooks/useReduxArticles";
import Product from "./product";
import { IProduct } from "../../reducers/productReducer";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    justifyContent: "center",
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const { products, getAllProducts } = useReduxProducts();
  const { articles } = useReduxArticles();

  React.useEffect(() => {
    if (products === undefined || products.length === 0) {
      getAllProducts();
    }
  }, [getAllProducts, products]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {products === undefined ||
      products.length === 0 ||
      articles === undefined ||
      articles.length === 0 ? (
        <CircularProgress size={100} style={{ marginTop: 100 }} />
      ) : (
        <Grid
          container
          spacing={2}
          data-testid="container"
          className={classes.root}
        >
          {products.map((product: IProduct) => (
            <Grid key={product.id} item xs={8} sm={8} md={4}>
              <Product
                role={"product-listing"}
                id={product.id}
                name={product.name}
                productArticles={product.articles}
                articles={articles}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default ProductList;
