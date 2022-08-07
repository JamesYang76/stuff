import axios from "axios";
import {IDS_STUFF_URL, ARTICLE_STUFF_URL} from "../constant";
export const getIDs = async () => {
  return await axios.get(IDS_STUFF_URL)
                    .then(({data}) => { return data.stories; });
};

export const getArticle = async (Id: number) => {
  return await axios.get(`${ARTICLE_STUFF_URL}/${Id}`)
                    .then(({data}) => { return data; });
};
