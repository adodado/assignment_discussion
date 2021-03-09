import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

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
  },

  btnResponsiveText: {
    fontSize: "1.1rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
  },

  button: {
    margin: "15px",
    width: "90%",
    backgroundColor: "#003399",
    color: theme.palette.common.white,
    height: 40,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#002369",
    },
  },
}));
type ArticleProps = {
  id: string;
  name?: string;
  amountInStock?: number;
};

const Article: React.FC<ArticleProps> = ({ id, name, amountInStock }) => {
  const classes = useStyles({});

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/images/product-placeholder.jpg"
        title={name}
        component="img"
      />
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
        </div>
      </CardContent>
      <Typography
        variant="button"
        component="h3"
        className={classes.h3ResponsiveText}
        style={{ marginLeft: "10px" }}
      >
        Available Qty: {amountInStock}
      </Typography>
    </Card>
  );
};

export default Article;
