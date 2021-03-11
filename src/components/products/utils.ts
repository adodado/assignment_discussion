import { IArticle } from "../../reducers/articleReducer";
import { IProduct, IProductArticle } from "../../reducers/productReducer";

 export const checkArticleQuantityInStock= (article: IProductArticle, cart:IProduct[], articles:IArticle[]) => {
    const reservedArticlesInCart = cart.map((product) => {
      const value = product.articles.find((art) => art.id === article.id)
        ?.amountRequired;
      return value ? value : 0;
    });
    return (
      articles!.find((item: { id: string }) => item.id === article.id)!
        .amountInStock >
      article.amountRequired +
        (reservedArticlesInCart.length > 0
          ? reservedArticlesInCart.reduce((partial_sum, a) =>
              partial_sum && a ? partial_sum + a : partial_sum
            )
          : 0)
    );
  };
  
 export const checkProductArticleStock = (productArticles: IProductArticle[], cart:IProduct[], articles:IArticle[]) => {
    let allArticlesInStock = false;
    for (const article of productArticles) {
      const reservedArticlesInCart = cart.map((product) => {
        const value = product.articles.find((art) => art.id === article.id)
          ?.amountRequired;
        return value ? value : 0;
      });
      const articleStockLevel = articles!.find(
        (item: { id: string }) => item.id === article.id
      )!.amountInStock;
      allArticlesInStock =
        allArticlesInStock === false
          ? article.amountRequired +
              (reservedArticlesInCart.length > 0
                ? reservedArticlesInCart.reduce((partial_sum, a) =>
                    partial_sum && a ? partial_sum + a : partial_sum
                  )
                : 0) >
            articleStockLevel
          : allArticlesInStock;
    }
    return allArticlesInStock;
  };