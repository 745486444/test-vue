const state = {
    //属性
    demoValue: {}
};
const getters = {
    getDemoValue: state => state.demoValue
};
const actions = {

};
const mutations = {
    //set方法
    setDemoValue(state, demoValue) {
        state.demoValue = demoValue
    }
};
export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}