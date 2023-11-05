import { 
    // fetchAskList,fetchNewsList, fetchJobsList, 
    fetchUserInfo, fetchItemInfo, fetchList } from "../api/index.js";

export default {
    FETCH_NEWS(context) {
        return fetchNewsList()
        .then(response=>{
            context.commit('SET_NEWS',response.data);
            return response;
            
        })
        .catch(error => {
            console.log(error);
        })

    },
    FETCH_JOBS({ commit }){
        return fetchJobsList().then(({data})=>{
            console.log(commit)
            commit('SET_JOBS',data);
        }).catch(error=>{console.log(error)})
    },
    FETCH_ASKS({ commit }){
        return fetchAskList().then(({ data })=>{
            commit('SET_ASKS',data);
        }).catch(error=>{console.log(error)})
    },
    FETCH_USER({ commit },userName){
        return fetchUserInfo(userName).then(({ data })=>{
            commit('SET_USER',data)
        }).catch(error=>{console.log(error)})
    },

    FETCH_ITEM({commit},id){
        return fetchItemInfo(id).then(({data})=>{
            commit('SET_ITEM',data)
        }).catch(error=>{console.log(error)})
    },
    // #2
    FETCH_LIST({commit}, pageName){
        // #3
        // return을 하게 되면 promise로 chaining이 되어서, .then을 실행할 수 있도록 한다.
        return fetchList(pageName)
        .then(({ data }) => {
            // #4
            commit('SET_LIST',data);
            return data
        }).catch(error=> console.log(error))

    }
}