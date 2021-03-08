import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useReduxCart from "../../hooks/useReduxCart";
import clsx from "clsx";
import { IProductArticle } from "../../reducers/productReducer";
import useReduxArticles from "../../hooks/useReduxArticles";

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
    marginBottom: "60px",
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
  },

  btnResponsiveText: {
    fontSize: "1.1rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    fontWeight: "bold",
    minWidth: 100,
    minHeight: 40,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#eee",
    },
  },
}));
type ProductProps = {
  id: string;
  name: string;
  productArticles: IProductArticle[];
};

const Product: React.FC<ProductProps> = ({ id, name, productArticles }) => {
  const classes = useStyles();
  const history = useHistory();
  const { addProduct } = useReduxCart();
  const { articles } = useReduxArticles();

  const handleClick = () => {
    history.push(`/details/${id}`);
  };
  const onClickHandler = () => {
    addProduct({ id: id, name: name, articles: productArticles });
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <div style={{ width: "100%" }}>
          <div className={classes.row}>
            <Typography
              variant="button"
              component="h3"
              className={classes.h3ResponsiveText}
            >
              {name}
            </Typography>
          </div>
          <div className={classes.row} style={{ alignItems: "center" }}>
            {productArticles.map((article) => (
              <div key={article.id}>
                <Typography
                  variant="button"
                  component="h3"
                  className={classes.h3ResponsiveText}
                >
                  {console.log(articles)}

                  {articles !== undefined && articles.length !== 0
                    ? articles!.find(
                        (item: { id: string }) => item.id === article.id
                      )!.name
                    : null}
                </Typography>

                <Typography
                  variant="button"
                  component="h3"
                  className={clsx(classes.h3ResponsiveText)}
                  align="right"
                >
                  Qty:{article.amountRequired}
                </Typography>
              </div>
            ))}
            <IconButton color="inherit" onClick={onClickHandler} size="medium">
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>
      <div className={classes.buttonContainer}>
        <Button
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
