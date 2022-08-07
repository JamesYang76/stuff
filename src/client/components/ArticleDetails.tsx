import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { ARTICLES_URL } from "../constant";
import {Article} from "../../interfaces/article";

const ArticleDetails: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [article, seArticle] = useState<Article>({
    id: 0,
    headline: "",
    intro: "",
    image: {src:"", alt:""},
    datetime: "",
    section: ""
  });

  const { id } = useParams();
  const fetchArticle = () => {
    setLoading(true);
    axios.get(`${ARTICLES_URL}/${id}`).then(({data})=>{
      seArticle(data)
    }).finally(()=>{
      setLoading(false);
    });
  }

  useEffect(() => {  fetchArticle(); }, []);

  let displayComponent;
  if (loading) displayComponent = <p>Loading</p>;
  else
    displayComponent =
      <div>
        <dt>ID</dt>
        <dd>{article.id}</dd>
        <dt>Section</dt>
        <dd>{article.section}</dd>
        <dt>Headline</dt>
        <dd>{article.headline}</dd>
        <dt>Image</dt>
        <dd><img src={article.image.src} alt={article.image.alt} /></dd>
        <dt>Intro</dt>
        <dd>{article.intro}</dd>
        <dt>DateTime</dt>
        <dd>{article.datetime.toString()}</dd>
      </div>

  return(
    <>
      <h3>Article Details</h3>
      { displayComponent }
    </>
  );
};

export default ArticleDetails;
