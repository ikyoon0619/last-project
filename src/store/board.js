import axios from "axios";


export default {
  namespaced: true,
  state: () => ({
    articles: [],
    loading: false,
    theArticle: {},
  }),
  
  
};

function _fetchArticles(payload) {
  const { title, searchType, page } = payload;


  const url = `http://localhot:8080/api/v1/articles`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        if (res.data.Error) reject(res.data.Error);
        resolve(res);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}