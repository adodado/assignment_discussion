import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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

  button: {
    fontWeight: "bold",
    margin: "15px",
    width: "90%",
    minHeight: "40px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#eee",
    },
  },
}));
type ArticleProps = {
  id: string;
  name?: string;
};

const Article: React.FC<ArticleProps> = ({ id, name }) => {
  const classes = useStyles({});

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
        </div>
      </CardContent>
    </Card>
  );
};

export default Article;
