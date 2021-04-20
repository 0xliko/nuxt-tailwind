import axios from 'axios'

export const state = () => ({
    accessToken:'',
    agendas:[]
})

export const mutations = {

    SET_ACCESS_TOKEN (state, accessToken) {
        state.accessToken = accessToken;
    },
    SET_ACCESS_AGENDAS (state, agendas) {
        state.agendas = agendas;
    }
}

export const actions = {

    async getAgenda ({ commit }) {
        const  { data }  = await axios.post("https://allansolutions.com/.netlify/functions/webinars",
            {
                headers: {
                    Accept: 'application/json'
                }
            })
        commit('SET_ACCESS_AGENDAS', data);
    },

    setAccessToken ({ commit }, { accessToken }) {
        commit('SET_ACCESS_TOKEN', accessToken);
    }

}
