import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from "pinia";
import { defineComponent } from '@vue/composition-api'


import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { Vue } from 'vue-class-component';

const firebaseConfig = {
  apiKey: "AIzaSyC7NRhp9DyLBnZ58uUJRlFSjcpHXXKw3s8",
  authDomain: "vue-web-47c1a.firebaseapp.com",
  projectId: "vue-web-47c1a",
  storageBucket: "vue-web-47c1a.appspot.com",
  messagingSenderId: "581326696060",
  appId: "1:581326696060:web:e660ccbbeaab797598e3f9"
};

initializeApp(firebaseConfig);
const db = getFirestore()
//const app=createApp(app)
//app.use(router)
//app.mount('#app')
export default db
createApp(App).use(defineComponent).use(createPinia).use(store).use(router).mount('#app')