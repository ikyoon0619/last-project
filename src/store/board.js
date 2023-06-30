import axios from "axios";


export default {
  namespaced: true,
  state: () => ({
    articles: [],
    loading: false,
    theArticle: {},
    page: 0,
    isInit: false,
    size: 30,
    last: true,
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async initBoard({state,commit}, payload){
      try {
        const res = await _fetchArticles({...payload})
        const {content, last} = res.data
        commit("updateState",{
          articles:[...content],
          last: this.last
        })
      } catch (error) {
        
      }
    },
    async reqBoard({state, commit}, payload){
      if(state.loading) return;

      commit("updateState", {
        loading: true,
        isInit: payload.isInit,
        page: payload.page
      })

      try {
        const res = await _fetchArticles({
          ...payload,
        });
          const {content, last} = res.data
          commit("updateState",{ 
            articles: [...state.articles, ...content],
            page: payload.page,
            last: last
          });
            
        } catch (error) {
          commit("updateState", {
            articles:[],
          });
        } finally{
          commit("updateState",{loading: false, isInit: false});
        }
    },
    async reqArticleWithId({state, commit}, payload){
      try {
        const res = await _fetchArticles({
          ...payload,
        });

        commit("updateState",{ 
          theArticle: res.data,
        });
        
      } catch (error) {
        commit("updateState", {
          articles:[],
        });
      } 
    },
  }
};

function _fetchArticles(payload) {
  const { searchType, text, size, page, id } = payload;

  const url = id 
  ? `http://localhost:8080/api/v1/article/${id}` 
  : `http://localhost:8080/api/v1/articles?size=${size}&page=${page}`;

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