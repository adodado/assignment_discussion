import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import IconButton from "@material-ui/core/IconButton";
import useReduxCart from "../../hooks/useReduxCart";
import clsx from "clsx";
import { IProduct } from "../../reducers/productReducer";
import { IArticle } from "../../reducers/articleReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 200,
    width: "100%",
    marginBottom: "5px",
    border: `1px solid ${theme.palette.common.black}`,
    position: "relative",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.only("xs")]: {
      border: "none",
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
    textTransform: "capitalize",
  },
  cancelBtn: {
    position: "absolute",
    fontSize: "2rem",
    right: 2,
    top: 2,
  },
  icon: {
    fontSize: "2rem",
    color: "#003399",
  },
  articleContainer: {
    display: "flex",
  },
  minWidth: { minWidth: 200 },
}));

type CartItemProps = {
  product: IProduct;
  articles: IArticle[];
};

const CartItems: React.FC<CartItemProps> = ({ product, articles }) => {
  const classes = useStyles();
  const { removeProduct } = useReduxCart();

  const handleOnclick = () => {
    removeProduct(product);
  };

  return (
    <Grid container className={classes.root} role="cart-item-product-display">
      <IconButton
        title="cart-item-remove-product"
        color="inherit"
        size="medium"
        className={classes.cancelBtn}
        onClick={handleOnclick}
      >
        <DeleteForeverSharpIcon className={classes.icon} />
      </IconButton>
      <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          title={product.name}
          component="img"
          image="/images/product-placeholder.jpg"
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
            Product: {product.name}
          </Typography>
          {product.articles.map((article) => (
            <div
              // eslint-disable-next-line jsx-a11y/aria-role
              role="cart-item-article-display"
              key={article.id}
              className={classes.articleContainer}
            >
              <Typography
                variant="button"
                component="h3"
                className={[classes.responsiveText, classes.minWidth].join(" ")}
              >
                {
                  articles!.find(
                    (item: { id: string }) => item.id === article.id
                  )!.name
                }
              </Typography>
              <Typography
                variant="button"
                component="h3"
                className={clsx(classes.responsiveText)}
                align="right"
              >
                Qty:{article.amountRequired}
              </Typography>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};
export default CartItems;
