import React from "react";
import {Article} from "../../interfaces/article";
import { Link } from 'react-router-dom';

import '../style/articles.css';
import '../style/card.css';

interface ArticleProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleProps> = ({article}: ArticleProps) => {

  return(
    <article className="item-col-3 card">
      <Link to={`/article/${article.id}`}>
        <header>
          <h3>{article.headline}</h3>
        </header>
        <img src={article.image.src} alt={article.image.alt} />
        <div className="intro">{article.intro}</div>
      </Link>
    </article>
  );
};

export default ArticleCard;
