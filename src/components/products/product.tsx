import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button, IconButton } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import { useHistory } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useReduxCart from "../../hooks/useReduxCart";
import clsx from "clsx";
import { IProductArticle } from "../../reducers/productReducer";
import { IArticle } from "../../reducers/articleReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    position: "relative",
  },
  media: {
    height: 300,
    objectFit: "contain",
  },
  cardContent: {
    marginBottom: "20px",
    background: "#003399",
    color: "white",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  h3ResponsiveText: {
    fontSize: "1.1rem",
    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem",
    },
    textTransform: "capitalize",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 40,
  },
  button: {
    minWidth: 300,
    backgroundColor: "#003399",
    color: theme.palette.common.white,
    height: 40,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#002369",
    },
  },
}));
type ProductProps = {
  role: string;
  id: string;
  name: string;
  productArticles: IProductArticle[];
  articles: IArticle[];
};

const Product: React.FC<ProductProps> = ({
  role,
  id,
  name,
  productArticles,
  articles,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { addProduct } = useReduxCart();

  const handleClick = () => {
    history.push(`/details/${id}`);
  };
  const onClickHandler = () => {
    addProduct({ id: id, name: name, articles: productArticles });
  };

  return (
    <Card className={classes.root} role={role}>
      <CardMedia
        className={classes.media}
        image="/images/product-placeholder.jpg"
        title={name}
        component="img"
      />
      <CardContent className={classes.cardContent}>
        <div style={{ width: "100%", display: "flex" }}>
          <div className={classes.row}>
            <Typography
              variant="button"
              component="h3"
              className={classes.h3ResponsiveText}
            >
              {name}
            </Typography>
          </div>
          <div>
            <IconButton
              color="inherit"
              onClick={onClickHandler}
              size="medium"
              style={{ padding: "0px" }}
              disabled={productArticles.some(
                (article) =>
                  article.amountRequired >
                  articles!.find(
                    (item: { id: string }) => item.id === article.id
                  )!.amountInStock
              )}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>
      <div className={classes.row} style={{ margin: "10px", display: "block" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Typography
            variant="button"
            component="h2"
            className={classes.h3ResponsiveText}
          >
            Required Articles
          </Typography>
        </div>
        {productArticles.map((article) => (
          <div key={article.id} style={{ width: "100%" }}>
            <Typography
              variant="button"
              component="h3"
              className={classes.h3ResponsiveText}
            >
              Article:{" "}
              {
                articles!.find(
                  (item: { id: string }) => item.id === article.id
                )!.name
              }
            </Typography>
            <Typography
              variant="button"
              component="h3"
              className={clsx(classes.h3ResponsiveText)}
            >
              Qty:
              {articles!.find((item: { id: string }) => item.id === article.id)!
                .amountInStock > article.amountRequired
                ? article.amountRequired + " pieces"
                : article.amountRequired + " (Not available in stock)"}
            </Typography>
          </div>
        ))}
      </div>
      <div className={classes.buttonContainer}>
        <Button
          role={"product-listing-details-button"}
          title={id}
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={handleClick}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default Product;
