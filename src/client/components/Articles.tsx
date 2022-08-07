import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import {Article} from "../../interfaces/article";
import {ARTICLES_URL, FILTER_OPTIONS_URL} from "../constant";
import ArticleCard from "./ArticleCard";

import '../style/articles.css';

const Articles: React.FC = () => {
  const [articlesList, setArticleList] = useState<Article[]>([]);
  const [formState, setFormState] = useState({
    order_by: 'desc',
    filter_by: 'All'
  });

  const [loading, setLoading] = useState(false);
  const [filterOptions, setFilterOptions] = useState(["All"]);

  const fetchFilterOptions = () => {
    axios.get(FILTER_OPTIONS_URL).then(({data}) => {
      setFilterOptions([...["All"], ...data])
    });
  }

  const fetchArticles = () => {
    setLoading(true);
    setArticleList([]);
    axios.get(ARTICLES_URL, { params: { order_by: formState.order_by, filter_by: formState.filter_by } }).then(({data})=>{
      setArticleList(data);
    }).finally(()=>{
      setLoading(false);
    });
  }

  useEffect(() => {  fetchFilterOptions(); }, []);
  useEffect(() => {  fetchArticles(); }, [formState]);

  return (
    <>
      <h2>Articles</h2>
      <label>
        Sort by(DateTime):
        <select
          value={formState.order_by}
          onChange={ (e) => {
            setFormState({
              ...formState,
              order_by: e.target.value
            });
          }}
        >
          <option value={'desc'}>DESCENDING</option>
          <option value={'asc'}>ASCENDING</option>
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Filter by(Section):
        <select
          value={formState.filter_by}
          onChange={ (e) => {
            setFormState({
              ...formState,
              filter_by: e.target.value
            });
          }}
        >
          {filterOptions.map((filter_option: any, index: number) => {
            return (
              <option key={index} value={filter_option}>{filter_option}</option>
            );
          })}
        </select>
      </label>
      {
        loading && <p>Processing...</p>
      }
      <section className="container-block container-flexbox">
        {articlesList.map((article: Article, index: number) => {
          return (
            <ArticleCard key={index} article={article}/>
          );
        })}
      </section>
    </>
  );
};

export default Articles;