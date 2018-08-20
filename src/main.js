import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBIGoEx2JLKHa8F9l6ysYEKgTEJTH0Vszc",
    authDomain: "myorganiser-913c3.firebaseapp.com",
    databaseURL: "https://myorganiser-913c3.firebaseio.com",
    projectId: "myorganiser-913c3",
    storageBucket: "myorganiser-913c3.appspot.com",
    messagingSenderId: "689029988987"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')