import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
};

const Product: React.FC<ProductProps> = ({ id, name }) => {
  const classes = useStyles({});
  const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${id}`);
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
