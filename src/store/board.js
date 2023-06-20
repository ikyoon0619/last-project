import axios from "axios";


export default {
  namespaced: true,
  state: () => ({
    articles: [],
    loading: false,
    theArticle: {},
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
    async initBoard({state, commit}, payload){
      if(state.loading) return;

      commit("updateState", {
        loading: true
      })

      try {
        const res = await _fetchArticles({
          ...payload,
        });

        const {content, totalElements} = res.data
        commit("updateState",{ articles: content});

      } catch (error) {
        commit("updateState", {
          articles:[],
        });
      } finally{
        commit("updateState",{loading: false});
      }
    }
  }
  
};

function _fetchArticles(payload) {
  const { searchType, text, page } = payload;


  const url = `http://localhost:8080/api/v1/articles`;

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