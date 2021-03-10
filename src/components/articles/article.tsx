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
    textTransform: "capitalize",
  },
  fullWidth: {
    width: "100%",
  },
  marginLeft: {
    marginLeft: "10px",
  },
}));
type ArticleProps = {
  role: string;
  name?: string;
  amountInStock?: number;
};

const Article: React.FC<ArticleProps> = ({ role, name, amountInStock }) => {
  const classes = useStyles({});

  return (
    <Card className={classes.root} role={role}>
      <CardMedia
        className={classes.media}
        image="/images/product-placeholder.jpg"
        title={name}
        component="img"
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.fullWidth}>
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
        className={[classes.h3ResponsiveText, classes.marginLeft].join(" ")}
      >
        Available Qty: {amountInStock}
      </Typography>
    </Card>
  );
};

export default Article;
