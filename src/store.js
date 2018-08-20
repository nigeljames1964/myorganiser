import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedInStatus: false,
        appointments: [],
        diary: [],
        lists: [],
        notes: []
    },
    getters: {
        getLoggedStatus(state) {
            return state.loggedInStatus;
        },
        getAppointments(state) {
            return state.appointments
        },
        getLists(state) {
            return state.lists
        },
        getDiary(state) {
            return state.dairy
        },
        getNotes(state) {
            return state.notes
        },
        getListItems(state, payload) {

        }
    },
    mutations: {
        setStatus(state, payload) {
            state.loggedInStatus = payload
        },
        removeAppointment(state, index) {
            state.appointments.splice(index, 1)
        },
        addAppointment(state, payload) {
            state.appointment.push(payload)
        },
        removeList(state, index) {
            state.lists.splice(index, 1)
        },
        addList(state, payload) {
            state.lists.push(payload)
        },
        removeNote(state, index) {
            state.notes.spliice(index, 1)
        },
        addNote(state, payload) {
            state.notes.push(payload)
        },
        addDiaryEntry(state, payload) {
            state.diary.push(payload)
        }
    },
    actions: {

    }
})