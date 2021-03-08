import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useReduxProducts from "../../hooks/useReduxProducts";
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
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const { products, getAllProducts } = useReduxProducts();

  React.useEffect(() => {
    if (products === undefined || products.length === 0) {
      getAllProducts();
    }
  }, [products, getAllProducts]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {products === undefined || products.length === 0 ? (
        <CircularProgress size={80} style={{ marginTop: 100 }} />
      ) : (
        <Grid
          container
          spacing={4}
          data-testid="container"
          className={classes.root}
        >
          {products.map((product: IProduct) => (
            <Grid key={product.id} item xs={6} sm={4} md={3}>
              <Product id={product.id} name={product.name} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default ProductList;
