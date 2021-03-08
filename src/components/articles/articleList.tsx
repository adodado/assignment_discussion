import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useReduxArticles from "../../hooks/useReduxArticles";
import Article from "./article";
import { IArticle } from "../../reducers/articleReducer";
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

const ArticlesList = () => {
  const classes = useStyles();
  const { articles, getAllArticles } = useReduxArticles();

  React.useEffect(() => {
    if (articles === undefined || articles.length === 0) {
      getAllArticles();
    }
  }, [articles, getAllArticles]);

  if (articles === undefined) {
    return <></>;
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {articles === undefined || articles.length === 0 ? (
          <CircularProgress size={80} style={{ marginTop: 100 }} />
        ) : (
          <Grid
            container
            spacing={4}
            data-testid="container"
            className={classes.root}
          >
            {articles.map((article: IArticle) => (
              <Grid key={article.id} item xs={6} sm={4} md={3}>
                <Article id={article.id} name={article.name} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    );
  }
};
export default ArticlesList;
