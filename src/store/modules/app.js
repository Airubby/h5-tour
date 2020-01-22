
const app = {
  state: {
    metaInfo: {
      title: "新疆旅游",
      keywords: "新疆旅游",
      description: "新疆旅游"
    }
  },
  mutations: {
    CAHNGE_META_INFO(state, metaInfo) {
      state.metaInfo = metaInfo;
    },

  },
  actions: {
    //动态修改title keywords description
    changeMetaInfo({commit},metaInfo){
      commit('CAHNGE_META_INFO',metaInfo)
    }
  }

}

export default app
